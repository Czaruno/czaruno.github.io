# Article Management System for LarryVelez.com

## Overview

You have **555 articles** from 2012-2023 extracted from your Sinu blog. This system helps you curate which articles to publish on your personal site.

## Current Status

✅ **Articles Parsed**: 555 markdown files in `data/articles/markdown/`
✅ **Index Created**: `data/articles/INDEX.md` (chronological listing)
✅ **CMS Configured**: Decap CMS ready for blog management
✅ **Jekyll Setup**: Blog post layout and structure ready

## File Structure

```
LarryVelez/
├── data/articles/
│   ├── markdown/           # All 555 extracted articles
│   └── INDEX.md            # Chronological index
├── _posts/                 # Published articles (empty - you curate)
├── scripts/
│   ├── parse-articles.py   # XML to markdown converter
│   └── curate-articles.py  # Interactive curation tool
└── admin/config.yml        # Decap CMS with blog collection
```

## How to Curate Articles

### Option 1: Automated Curation (Recommended First Pass)

Run the curation script:

```bash
cd /Users/larryvelez/Coding/LarryVelez
python3 scripts/curate-articles.py
```

**Scoring System:**
- **+1 point** for emphasis topics (AI, indigenous, Sinu/Kogi, tech trends, equity, etc.)
- **-1 point** for de-emphasized topics (#BLM, COVID-19, pandemic)
- Articles by you get priority

**Suggested Options:**
1. **Option 1** - Only Larry-authored articles (safest, most on-brand)
2. **Option 2** - High relevance (score >= 2) - forward-looking tech pieces
3. **Option 3** - Medium relevance (score >= 0) - broader tech topics

### Option 2: Manual Curation via Decap CMS

1. Start local development:
   ```bash
   ./serve-with-cms.sh
   ```

2. Go to `http://localhost:4000/admin/`

3. Navigate to "Blog Posts" collection

4. Click "New Blog Post" and manually create/edit posts

### Option 3: Direct File Management

Manually copy articles from `data/articles/markdown/` to `_posts/`:

```bash
# Example: Copy a specific article
cp data/articles/markdown/2019-09-16-are-we-teaching-ai-to-be-racist.md _posts/
```

## Recommended Curation Strategy

### Phase 1: Core Articles (Start Here)
Select **10-20 "greatest hits"** that showcase:
- ✅ Tech foresight (AI, cloud, trends you predicted)
- ✅ Social justice + tech (AI bias, indigenous recognition)
- ✅ Your unique perspective (Sinu/Kogi naming, people-first tech)
- ❌ Skip time-sensitive COVID pieces (unless about lasting changes)
- ❌ Skip BLM-focused pieces (no longer your primary focus)

### Phase 2: Expanded Archive
Once site is launched, gradually add:
- Thematic collections ("AI & Ethics," "Tech Predictions," "Building Sinu")
- Timeless business philosophy pieces
- Tech education pieces (still relevant)

### Phase 3: New Content
Use Decap CMS to publish new writing going forward

## Topics to Emphasize

✅ **AI & Ethics** - bias in algorithms, responsible AI
✅ **Tech Foresight** - predictions, emerging trends
✅ **Indigenous Heritage** - Sinu/Kogi naming, Colombian culture
✅ **People-First Technology** - accessibility, equity
✅ **Architecture & Design** - functional excellence
✅ **Business Philosophy** - trust, questioning experts

## Topics to De-emphasize

❌ **#BlackLivesMatter** - no longer primary focus
❌ **COVID-19** - unless about lasting tech shifts
❌ **Company News** - Sinu merger announcements (outdated)
❌ **Time-sensitive** - specific product launches, short-term trends

## Next Steps

1. **Run curation script** - see what automated scoring suggests
2. **Review top 20** - manually verify they align with your vision
3. **Select 10-15 featured articles** - for initial launch
4. **Design blog archive page** - showcase your writing
5. **Launch and iterate** - add more articles over time

## Article Frontmatter Format

All articles have this structure:

```yaml
---
title: "Article Title"
date: 2020-06-30
author: Larry Velez
categories: AI, Ethics, Technology
tags: artificial-intelligence, bias
featured: true  # Show on homepage
excerpt: "Short summary for previews"
---

Article content in markdown...
```

## CMS Access

**Local Development** (recommended):
- URL: `http://localhost:4000/admin/`
- Authentication: Automatic (local backend)
- Full editing capabilities

**Production** (GitHub Pages):
- URL: `https://czaruno.github.io/admin/`
- Authentication: Limited (OAuth issues on GitHub Pages)
- Recommend editing locally, then push to deploy

---

**Questions?** All articles are safely preserved in `data/articles/markdown/` - you can always go back and re-curate!
