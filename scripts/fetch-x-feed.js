#!/usr/bin/env node

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const args = process.argv.slice(2);

function getArgValue(flag, fallback = null) {
  const index = args.indexOf(flag);
  if (index === -1) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith('--')) return fallback;
  return value;
}

function hasFlag(flag) {
  return args.includes(flag);
}

function usageAndExit() {
  console.log(`Usage:
  node scripts/fetch-x-feed.js --username LarryVelez [--count 30] [--output _data/feed.yml] [--caption-from-text] [--max-caption 240] [--strip-urls] [--dry-run]

Options:
  --username           X username to fetch (required)
  --count              Number of posts to fetch (default: 30)
  --output             Output path for feed YAML (default: _data/feed.yml)
  --caption-from-text  Populate caption from post text
  --max-caption        Max caption length when using --caption-from-text (default: 240)
  --strip-urls         Remove URLs from captions
  --dry-run            Print YAML to stdout instead of writing
`);
  process.exit(1);
}

const username = getArgValue('--username');
if (!username) usageAndExit();

const count = Number(getArgValue('--count', '30'));
const outputPath = getArgValue('--output', '_data/feed.yml');
const captionFromText = hasFlag('--caption-from-text');
const maxCaption = Number(getArgValue('--max-caption', '240'));
const stripUrls = hasFlag('--strip-urls');
const dryRun = hasFlag('--dry-run');
const debug = hasFlag('--debug');

function runBirdTimeline() {
  const handle = username.startsWith('@') ? username : `@${username}`;
  const birdArgs = [
    'user-tweets',
    handle,
    '-n',
    String(count),
    '--json',
    '--plain',
    '--no-emoji',
    '--no-color',
  ];
  try {
    return execFileSync('bird', birdArgs, { encoding: 'utf8' });
  } catch (error) {
    console.error('Failed to run bird. Make sure it is installed and authenticated.');
    if (error.stderr) {
      console.error(String(error.stderr).trim());
    }
    process.exit(1);
  }
}

function parseBirdOutput(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  const lines = trimmed.split(/\r?\n/);
  const jsonStartIndex = lines.findIndex((line) => {
    const value = line.trim();
    if (!value) return false;
    if (/^\[info\]/i.test(value)) return false;
    if (/^[{\[]/.test(value)) return true;
    return false;
  });
  if (jsonStartIndex === -1) return [];
  const jsonPayload = lines.slice(jsonStartIndex).join('\n').trim();
  try {
    const parsed = JSON.parse(jsonPayload);
    if (Array.isArray(parsed)) return parsed;
    return [parsed];
  } catch {
    // Try NDJSON
    return jsonPayload
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  }
}

function normalizeText(text) {
  if (!text) return '';
  let value = String(text).replace(/\s+/g, ' ').trim();
  if (stripUrls) {
    value = value.replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim();
  }
  if (maxCaption > 0 && value.length > maxCaption) {
    value = value.slice(0, maxCaption - 1).trimEnd() + '…';
  }
  return value;
}

function resolveField(item, paths) {
  for (const pathSegments of paths) {
    let value = item;
    let found = true;
    for (const segment of pathSegments) {
      if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
        value = value[segment];
      } else {
        found = false;
        break;
      }
    }
    if (found && value != null) return value;
  }
  return null;
}

function toIsoString(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toISOString();
}

function buildItems(rawItems) {
  return rawItems
    .map((item) => {
      const id = resolveField(item, [
        ['id'],
        ['rest_id'],
        ['tweet', 'id'],
        ['tweet', 'rest_id'],
      ]);
      const createdAt = resolveField(item, [
        ['created_at'],
        ['createdAt'],
        ['tweet', 'created_at'],
        ['tweet', 'createdAt'],
      ]);
      const text = resolveField(item, [
        ['full_text'],
        ['text'],
        ['tweet', 'full_text'],
        ['tweet', 'text'],
      ]);
      const url = resolveField(item, [
        ['url'],
        ['tweet', 'url'],
      ]);

      if (!id && !url) return null;

      const xUrl = url || `https://x.com/${username}/status/${id}`;
      const date = toIsoString(createdAt);

      const entry = {
        type: 'x',
        x_url: xUrl,
        date,
      };

      if (captionFromText) {
        const caption = normalizeText(text);
        if (caption) entry.caption = caption;
      }

      return entry;
    })
    .filter(Boolean);
}

function yamlEscape(value) {
  const escaped = String(value)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n');
  return `"${escaped}"`;
}

function toYaml(feed) {
  const lines = [];
  lines.push(`sort_mode: ${feed.sort_mode || 'chronological'}`);
  lines.push('items:');
  if (!feed.items.length) {
    lines.push('  []');
    return lines.join('\n') + '\n';
  }
  for (const item of feed.items) {
    lines.push('  - type: x');
    if (item.x_url) lines.push(`    x_url: ${yamlEscape(item.x_url)}`);
    if (item.date) lines.push(`    date: ${yamlEscape(item.date)}`);
    if (item.caption) lines.push(`    caption: ${yamlEscape(item.caption)}`);
  }
  return lines.join('\n') + '\n';
}

const raw = runBirdTimeline();
const parsed = parseBirdOutput(raw);
if (debug) {
  const sample = raw.split(/\r?\n/).slice(0, 20).join('\n');
  console.log('--- bird output (first 20 lines) ---');
  console.log(sample);
  console.log('--- parsed count ---');
  console.log(parsed.length);
}
const items = buildItems(parsed);
const feed = {
  sort_mode: 'chronological',
  items,
};

const yaml = toYaml(feed);

if (dryRun) {
  console.log(yaml);
  process.exit(0);
}

const resolvedOutput = path.resolve(process.cwd(), outputPath);
fs.writeFileSync(resolvedOutput, yaml, 'utf8');
console.log(`Wrote ${items.length} items to ${outputPath}`);
