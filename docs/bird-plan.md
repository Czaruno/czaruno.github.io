# Bird (X) Feed Testing Plan

## Goal
Validate whether `steipete/bird` can fetch Larry's X posts and produce a curated, CMS-compatible dataset for the Dynamic Writing Feed without requiring a backend on GitHub Pages.

## Assumptions
- You are willing to authenticate `bird` locally against your X account.
- Output will be consumed by a local script that generates `_data/feed.yml`.
- Manual curation can remain in Decap CMS (captions, pins, ordering).

## Phase 1: Install + Authenticate
1. Install `bird` locally (per its README).
2. Authenticate with your X account (follow the CLI prompts).
3. Confirm credentials by running a simple command:
   - Expected: a valid JSON response, no auth errors.

## Phase 2: Basic Data Pull
1. Fetch your user timeline (latest 20-50 posts):
   - Example: `bird timeline user --username LarryVelez --count 50 --json`
2. Validate the output contains:
   - `id`, `created_at`, `text`, and `url` (or enough to construct an X URL)
3. Capture 2-3 sample posts and confirm:
   - Timestamps are correct
   - URLs resolve in the browser

## Phase 3: Curation Rules Prototype
1. Decide the initial filter strategy:
   - Option A: explicit allowlist of X post IDs
   - Option B: keyword filter
   - Option C: engagement threshold (likes/retweets)
2. Test each filter rule locally and confirm it yields expected posts.

## Phase 4: Feed Mapping to CMS Format
1. Map bird output to `_data/feed.yml` structure used by the homepage feed:
   - `type: x`
   - `x_url`
   - `date`
   - optional `caption`, `pinned`, `enabled`
2. Validate the feed renders in the homepage (local Jekyll server).

## Phase 5: Manual Override Merge (Optional)
1. Add a `feed-overrides.yml` file to store captions/pins manually.
2. Merge overrides by post ID during the build step.
3. Confirm overrides win over fetched values.

## Deliverables
- `scripts/fetch-x-feed.js` or `scripts/fetch-x-feed.rb` (local-only)
- Updated `_data/feed.yml`
- Optional `docs/bird-setup.md` with install/auth notes

## Success Criteria
- Able to fetch Larry’s recent posts via `bird` without errors.
- Generated `_data/feed.yml` renders correct X embeds on the homepage.
- Manual overrides can still control ordering and captions.

