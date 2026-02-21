# Bird (X) Feed Testing

## Install + Authenticate
1. Install `bird` per its README.
2. Authenticate locally by running a `bird` command and completing the prompts.

## Fetch + Generate `_data/feed.yml`
Run the script from the repo root:

```bash
node scripts/fetch-x-feed.js --username LarryVelez --count 50 --caption-from-text --strip-urls
```

- This overwrites `_data/feed.yml` with X entries.
- Add `--dry-run` to print YAML without writing.

## Validate Locally
1. Start the local server:

```bash
bundle exec jekyll serve --livereload
```

2. Open the homepage and confirm the X embeds render under “Writing + X”.

## Notes
- The script requires `bird` to be on your PATH.
- Captions are optional; omit `--caption-from-text` if you prefer manual curation.
