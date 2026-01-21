# LarryVelez.com Site Update - Session State
**Last Updated:** 2026-01-20 16:55 PM EST
**Latest Session:** 2026-01-20-task-2-workspace-fix

## Current Objective
Transform larryvelez.com to contain ONLY Larry's 28 personal articles by adding recovered content and removing company blog posts. Canonical source: `docs/article-catalog.md`.

## Current Status - Task 1 (In Progress)
Successfully added all 28 recovered articles to `_posts` folder. Task 1 complete.
Visible articles (published: true): 28
Disabled articles (published: false): 14
Total `_posts` files: 42

✅ Added (28 articles):
- 2012-05-26-trust-the-expert-in-you.md
- 2013-01-28-news-to-go-this-new-app-has-my-attention.md
- 2014-04-17-heartbleed-underscores-need-for-data-security.md
- 2014-05-01-protecting-yourself-from-obsolete-technology.md
- 2014-07-21-creating-a-culture-of-discipline-and-practice.md
- 2015-02-27-the-elegance-of-simple-solutions.md
- 2015-03-04-the-tech-balancing-act.md
- 2015-04-21-the-need-for-speed.md
- 2015-10-27-how-to-select-a-web-developer.md
- 2016-03-21-seamless-transitions.md
- 2016-12-26-internet-of-things-a-convenience-risk-balancing-ac.md
- 2017-01-20-webinar-new-administration-nonprofit-data-protection.md
- 2017-03-02-high-touch-over-high-tech.md
- 2017-05-08-what-do-people-really-want-a-personal-connection.md
- 2017-05-26-diy-tech-workarounds-waste-time-increase-risk.md
- 2017-07-31-why-flash-really-died.md
- 2017-10-18-new-wi-fi-vulnerability-and-why-devices-needs-to-b.md
- 2017-10-28-who-are-you-understanding-your-online-identity-and.md
- 2019-02-25-accommodate-your-millennial-workers-or-another-org.md
- 2019-03-25-email-marketing-to-millennials-values-personal-app.md
- 2019-06-28-chicken-tax-and-tesla.md
- 2019-09-16-are-we-teaching-ai-to-be-racist.md
- 2020-06-02-contact-tracing-you-have-a-choice.md
- 2020-07-01-its-time-to-remove-racism-in-ai.md
- 2020-09-14-why-we-need-more-agent-to-cloud.md
- 2020-10-29-indigenous-peoples-recognition-and-sinu-name.md
- 2020-12-04-together-sinu-and-electric-will-deliver-unrivaled-.md
- 2020-12-23-how-apple-headphones-are-smarter.md

## Next Session Tasks
1. ✅ Task 1: Add 28 recovered articles - COMPLETE
2. ✅ Task 2: Add podcast audio player for the millennial workers episode
3. Verify all articles render correctly on the site
4. ✅ Task 3: Disable 14 ghost articles (set published: false)
5. ✅ Task 4: Remove ~79 company blog posts

## Quick Start (For Reboot)
- Working directory: `/Users/larryvelez/Coding/LarryVelez`
- Obsidian vault: `/Users/larryvelez/Obsidian-Data`
- Instructions: `/Users/larryvelez/Obsidian-Data/InterAI/Projects/larryvelez-website/docs/coding-agent-instructions.md`
- Source articles: `/Users/larryvelez/Obsidian-Data/InterAI/Projects/larryvelez-website/files/_posts/`
- Run: `bundle exec jekyll serve --livereload` to test site locally

## Notes
- No commits made yet - all changes are local
- Articles are Jekyll-ready with proper frontmatter
- Podcast audio file (25.3 MB) is available in vault at `/InterAI/Projects/larryvelez-website/files/media/ep-116-larry-velez-millennial-workers.mp3`
- README created in project folder with workflow docs
- Agent communication via `/InterAI/Projects/larryvelez-website/docs/agent-messages.md`
- Added `/Users/larryvelez/Coding/CodeEnvironment/wezterm/larryvelez-workspace.sh`, a shared WezTerm helper that detects the coding agent, renames the tab to `<coding agent> - LarryVelez.com`, splits the active pane so the right 16% runs `bundle exec jekyll serve --livereload`, splits that column to also run `npx decap-server` in the lower pane, and only cleans up leftover panes whose cwd matches this project/tab.
- Replaced the project-level `scripts/setup-terminal-layout.sh` with a thin wrapper that exports `PROJECT_DIR`, `CMD`, and `TAB_SUFFIX` before delegating to the shared CodeEnvironment helper; tmux support still exists for non-WezTerm terminals.
- Workspace fix: WezTerm helper now targets `WEZTERM_PANE` and refuses to guess; it cleans only panes in the same tab with cwd in the project directory.
- Workspace fix: corrected `wezterm cli set-tab-title` usage so the tab shows `Codex - LarryVelez.com` instead of `node`.
- Workspace update: right column width set to 20% and split evenly top/bottom.
- Workspace update: Decap server now starts with `PORT=8082` to avoid the Expo 8081 conflict; verified listening on 8082.
- Workspace testing: layout runs in tab 12 (pane 114) and recreates panes for Jekyll + Decap while removing older panes in the same tab.
## Blockers
Decap server backend not starting yet; investigating.
