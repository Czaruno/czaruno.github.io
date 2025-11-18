# Session State - LarryVelez.com Redesign

**Last Updated:** 2025-11-17 23:30 EST
**Current Phase:** Writing Archive Complete - Ready for Team Review

---

## 🎯 Project Overview

**Goal:** Create a distinctive personal website for Larry Velez showcasing:
- Current work (Kogi AI - prominently featured)
- 20 years of writing (555 articles, curated)
- Functional Excellence museum (influences, interests, philosophy)
- Professional networking & press kit

**Design Aesthetic:** Precision Brutalism
- Inspired by: Bauhaus, Dieter Rams, modern architecture
- Typography: Bold geometric sans-serif (Space Grotesk), monospace accents (IBM Plex Mono)
- Colors: Black/white/high-contrast with red accent
- Layout: Sharp grids, asymmetric blocks, generous whitespace

---

## ✅ Completed Tasks

### Content Extraction & Analysis
- [x] Parsed 555 articles from SquareSpace XML export (2012-2023)
- [x] Created markdown files in `data/articles/markdown/`
- [x] Generated chronological index (`data/articles/INDEX.md`)
- [x] Analyzed Larry's writing themes and voice
- [x] Identified topics to emphasize/de-emphasize

### Infrastructure Setup
- [x] Configured Decap CMS with blog collection
- [x] Created Jekyll blog post layout (`_layouts/post.html`)
- [x] Built article curation tool (`scripts/curate-articles.py`)
- [x] Created article management documentation (`ARTICLE_MANAGEMENT.md`)

### Design & Architecture
- [x] Researched Kogi AI (https://kogi.ai)
- [x] Defined design direction (Precision Brutalism)
- [x] Created comprehensive design brief
- [x] Implemented new homepage with:
  - Hero section with Kogi prominence
  - Current Work (Kogi AI) section with stats
  - Writing Archive teaser
  - Functional Excellence teaser
  - Press Kit teaser
  - Footer
- [x] Refined hero typography (LARRY/VELEZ perfect alignment using table layout)
- [x] Updated hero description with expanded background (zero-to-one startups, Sinu history)
- [x] Final homepage refinements (Session 2025-11-17):
  - Changed Twitter link to x.com/LarryVelez
  - Removed Email from footer Connect section
  - Removed "Currently: Kogi AI" from footer bio
  - Removed indigenous tribes reference from copyright
  - Made "Kogi AI" clickable link in hero section
  - Reduced hero section top padding for better spacing

### Deployment & Infrastructure
- [x] Installed frontend-design skill in `.claude/skills/frontend-design/`
- [x] Fixed GitHub PAT authentication for deployment
- [x] Created CNAME file for custom domain (larryvelez.com)
- [x] Verified auto-deployment pipeline working
- [x] Site live at https://larryvelez.com

### Writing Archive & Content Management (Session 2025-11-17)
- [x] Created dynamic Writing Archive page (`writing.html`):
  - Timeline-based design with year markers
  - Dynamically pulls from Jekyll posts in `_posts/`
  - Precision Brutalism aesthetic matching homepage
  - Shows dynamic stats (article count, years covered)
  - Articles grouped by year with up to 12 per year displayed
- [x] Enabled Decap CMS editorial workflow:
  - Added `publish_mode: editorial_workflow` to admin/config.yml
  - Configured date-based sorting in article list
  - Disabled preview pane for cleaner editing experience
  - Shows article dates in list view (YYYY-MM-DD - Title format)
- [x] Curated and published 117 articles (2012-2020):
  - Ran `scripts/curate-articles.py` to copy articles from data/ to _posts/
  - Added `layout: post` field to all articles for Jekyll compatibility
  - Cleaned up 46 attachment files and 143 .bak duplicates
  - Removed 3 articles with malformed YAML
  - Final clean set of 117 high-quality articles
- [x] Committed and pushed to GitHub (commit e187def)
  - All changes deployed to https://larryvelez.com
  - Ready for team review

---

## 🚧 In Progress

### Current Task: Team Review & Feedback
- Status: ✅ Writing Archive complete and deployed
- Live URLs:
  - Homepage: https://larryvelez.com
  - Writing Archive: https://larryvelez.com/writing
  - Sample article: https://larryvelez.com/2019/09/16/are-we-teaching-ai-to-be-racist.html
- CMS Access: Available locally at http://localhost:4000/admin/ (run `./serve-with-cms.sh`)
- Next: Gather team feedback, make adjustments, then build remaining pages

---

## 📋 Pending Tasks

### High Priority
1. **Redesign article page layout** (`_layouts/post.html`)
   - Update to match Precision Brutalism aesthetic
   - Sharp geometric shapes, monospace metadata, red accents
   - Better typography hierarchy
   - Currently using basic layout

2. **Create Functional Excellence page** (`/functional-excellence`)
   - Personal museum layout
   - Influences section (Naval, Matt Moreman, Elon, Gary Vee)
   - Books section (Guns Germs & Steel, Innovator's Dilemma, Seven Powers)
   - Interests (cars, garage design, prefab architecture, Colombian culture)

3. **Create Press Kit page** (`/press`)
   - Multiple bio lengths (25/100/250 words)
   - Downloadable press materials
   - Copyable text fields
   - Placeholder for headshots

### Medium Priority
4. **Write press kit content**
   - Short bio (25 words)
   - Medium bio (100 words)
   - Long bio (250 words)
   - Key achievements list
   - Speaking topics

5. **Curate featured articles**
   - Run `scripts/curate-articles.py`
   - Select 10-15 articles for launch
   - Copy to `_posts/` directory

### Low Priority
6. **Additional pages**
   - About page (if needed beyond homepage)
   - Contact page
   - Speaking/consulting info

7. **Optimizations**
   - Image optimization
   - SEO meta tags
   - Social sharing cards
   - Mobile responsiveness testing

---

## 📁 Key Files & Directories

```
LarryVelez/
├── session-state.md          # THIS FILE - session tracking
├── docs/
│   └── ROADMAP.md            # Detailed project roadmap
├── ARTICLE_MANAGEMENT.md     # Article curation guide
├── AGENTS.md                 # Agent development guidelines
├── index.md                  # HOMEPAGE (newly redesigned)
├── _layouts/
│   ├── default.html          # Base layout
│   └── post.html            # Blog post layout
├── _posts/                   # Published articles (empty - to curate)
├── data/articles/
│   ├── markdown/             # 555 extracted articles
│   └── INDEX.md              # Chronological index
├── scripts/
│   ├── parse-articles.py     # XML to markdown converter
│   └── curate-articles.py    # Article curation tool
├── admin/config.yml          # Decap CMS configuration
└── .claude/skills/
    └── frontend-design/      # Frontend design skill
```

---

## 🎨 Design Decisions

### Typography
- **Display:** Space Grotesk (bold, geometric, modern)
- **Monospace:** IBM Plex Mono (technical, precise)
- **Why:** Avoids generic fonts (Inter, Roboto), creates distinctive voice

### Color Palette
- **Primary:** Black (#000000)
- **Secondary:** White (#FFFFFF)
- **Accent:** Red (#DC2626)
- **Why:** High contrast, brutalist aesthetic, memorable

### Layout Principles
- 12-column grid system
- Asymmetric content blocks
- Sharp geometric shapes (clip-path for angles)
- Generous whitespace
- Bold section dividers

### Content Hierarchy
1. **Kogi AI** - Primary focus, top of homepage
2. **Writing** - 20 years of insights, credibility
3. **Functional Excellence** - Personal philosophy, unique differentiator
4. **Press Kit** - Professional networking support

---

## 🔄 Next Session Priorities (After IDE Update)

1. **Complete any remaining small homepage changes** - User mentioned more changes before tackling Writing page
2. **Build Writing Archive page** (`/writing`) - Year-based organization, timeline visualization, featured articles
3. **Build Press Kit page** (`/press`) - Bios (25/100/250 words), achievements, speaking topics
4. **Build Functional Excellence page** (`/functional-excellence`) - Influences, books, obsessions, Colombian heritage
5. **Curate first 10-15 articles** - Use `scripts/curate-articles.py`

---

## 💡 Key Insights

### About Larry's Writing (555 articles analyzed)
- **Core Themes:** AI ethics, tech foresight, social justice, people-first technology
- **Voice:** Thoughtful educator, socially conscious, visionary pragmatist, authentic
- **Unique Angle:** Colombian heritage (Sinu/Kogi naming), tech + equity, 2-4 years ahead of trends

### About Larry's Focus
- **Current:** Building Kogi AI (AI-generated 3D documentation for mechanical machines)
- **Past:** Founded Sinu (16 years, successful exit to Electric/unicorn)
- **Philosophy:** Functional excellence, questioning experts, overwhelming value

### De-emphasized Topics
- #BlackLivesMatter (no longer primary focus)
- COVID-19 (unless lasting tech impacts)
- Time-sensitive company news

---

## 🛠️ Technical Stack

- **Static Site Generator:** Jekyll
- **CMS:** Decap CMS (local backend for development)
- **Styling:** Tailwind CSS (via CDN) + custom CSS
- **Deployment:** GitHub Actions → czaruno.github.io
- **Version Control:** Git (private repo: Czaruno/LarryVelez)

---

## 📝 Notes & Key Learnings

- Frontend-design skill guides distinctive aesthetics (avoid generic AI design)
- Articles preserved in `data/` - can always re-curate
- Homepage designed for professional networking (investors, partners, media)
- Kogi AI integration critical - this is Larry's current venture
- Colombian heritage (indigenous tribes) important to identity

### Technical Learnings (Hero Typography)
- **Problem Solved:** Matching width of LARRY and VELEZ (both 5 letters but different character widths)
- **Failed Approaches:** Letter-spacing (only affects gaps between letters, not total width), scaleX transform (caused horizontal stretching but display issues)
- **Solution:** HTML table with 5 columns × 2 rows, `table-layout: fixed`, each letter in a cell, minimal padding (0.1em)
- **Result:** Perfect alignment with equal letter spacing

---

**Status:** 🟢 Active Development  
**Next Checkpoint:** After creating Writing Archive & Functional Excellence pages
