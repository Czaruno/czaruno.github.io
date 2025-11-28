# Session State - LarryVelez.com

**Last Updated:** 2025-11-18 19:30 EST
**Current Phase:** Content Enhancement & CMS Improvements
**Live Site:** https://larryvelez.com

---

## 📍 Current Status

### What's Live ✅
- **Homepage** - Hero, Kogi AI showcase, featured articles, footer
- **Writing Archive** - 117 curated articles (2012-2020), timeline layout
- **Work History** - Career timeline with Kogi animation, Sinu history, consulting accordion
- **Article Pages** - Precision Brutalism design, year anchors, responsive
- **CMS** - Decap CMS with editorial workflow, publish indicators, filters

### Recent Completions (Session 2025-11-18)
- ✅ Added full article bodies to 3 posts (Apple Headphones, Indigenous Peoples, AI Racism)
- ✅ Added CMS publish status indicators (✓/✗ visual markers)
- ✅ Added CMS filters for Published/Hidden articles
- ✅ Fixed GitHub push issues (transient 500/502 errors resolved)
- ✅ Updated inter-AI communication section for Gemini agent

### Live URLs
- Homepage: https://larryvelez.com
- Work History: https://larryvelez.com/work
- Writing Archive: https://larryvelez.com/writing
- CMS (local): http://localhost:4000/admin/

---

## 🎯 Next Priorities

### Immediate (Next Session)
1. **Build Functional Excellence page** (`/functional-excellence`)
   - Personal museum layout with Precision Brutalism design
   - Influences: Naval, Matt Moreman, Elon, Gary Vee
   - Books: Guns Germs & Steel, Innovator's Dilemma, Seven Powers
   - Interests: Cars, garage design, prefab architecture, Colombian culture

2. **Build Press Kit page** (`/press`)
   - Multiple bio lengths (25/100/250 words)
   - Downloadable press materials
   - Copyable text fields
   - Placeholder for headshots

### Follow-up Tasks
- Write press kit content (bios, achievements, speaking topics)
- SEO optimization (meta tags, social cards)
- Mobile responsiveness testing
- Image optimization

---

## 🗂️ Project Resources

### Key Files
```
LarryVelez/
├── session-state.md              # THIS FILE - current state only
├── docs/
│   ├── ROADMAP.md                # Project vision, design philosophy, architecture
│   └── sessions/                 # Historical session logs (if needed)
├── index.md                      # Homepage
├── work.html                     # Work History page
├── writing.html                  # Writing Archive page
├── _layouts/
│   ├── default.html              # Base layout
│   └── post.html                 # Article layout (Precision Brutalism)
├── _posts/                       # 117 published articles
├── _data/
│   └── work_history.yml          # Work timeline data
├── admin/config.yml              # Decap CMS config
├── data/articles/markdown/       # 555 source articles (curated from)
└── scripts/curate-articles.py   # Article import tool
```

### Quick Commands
```bash
# Local development
./serve.sh                        # Jekyll only
./serve-with-cms.sh              # Jekyll + Decap CMS

# Article management
cd scripts && python curate-articles.py

# Deployment (automatic on git push)
git push origin main
```

---

## 🎨 Design System (Quick Reference)

**Aesthetic:** Precision Brutalism
**Typography:** Space Grotesk (display) + IBM Plex Mono (monospace)
**Colors:** Black/White/Red accent (#DC2626)
**Layout:** Sharp grids, asymmetric blocks, generous whitespace

*Full design philosophy in docs/ROADMAP.md*

---

## 🛠️ Technical Stack

- **Generator:** Jekyll 4.2+
- **CMS:** Decap CMS (local backend)
- **Styling:** Tailwind CSS (CDN) + custom CSS
- **Deployment:** GitHub Actions → czaruno.github.io
- **Domain:** larryvelez.com (CNAME)
- **Repos:**
  - Source: Czaruno/LarryVelez (private)
  - Deploy: Czaruno/czaruno.github.io (public)

---

## 🤖 Inter-AI-Agent Communication

### For Gemini AI: GitHub Push Resolution (2025-11-18)

**From:** Claude (Sonnet 4.5)
**Topic:** GitHub 500/502 Errors - RESOLVED

**Problem:** Work History push failing with 500/502 errors
**Solution:** Simply retried `git push origin main` - worked immediately
**Root Cause:** Transient GitHub API issues (server-side, not code/config)

**Key Takeaway:** For GitHub 500/502 errors, wait a few minutes and retry before attempting complex fixes. These are infrastructure issues, not code problems.

**Deployment Pipeline:**
- Source: `Czaruno/LarryVelez` (private) → Deploy: `Czaruno/czaruno.github.io` (public)
- Auth: GitHub PAT as `GH_PAGES_PAT` secret
- Trigger: Auto-deploy on push to main
- Live: https://larryvelez.com (~2-5 min deploy time)

---

### For Gemini AI: Article Content Updates (2025-11-18)

**From:** Claude (Sonnet 4.5)
**Topic:** Missing Article Bodies - FIXED

**Problem:** Three articles imported without body content
**Solution:** User provided full text via paste, updated posts directly

**Files Updated:**
1. `_posts/2020-12-23-how-apple-headphones-are-smarter.md` - AirPods Max/H1 chip
2. `_posts/2020-10-29-indigenous-peoples-deserve-on-going-recognition-an.md` - Indigenous Peoples Day
3. `_posts/2019-09-16-are-we-teaching-ai-to-be-racist.md` → renamed to `_posts/2020-07-01-its-time-to-remove-racism-in-ai.md` - Robert Williams facial recognition case

**Note:** The AI racism article was actually from 2020 (references Williams case), not 2019. Renamed file and updated metadata to match actual content.

---

### For Gemini AI: CMS Enhancement (2025-11-18)

**From:** Claude (Sonnet 4.5)
**Topic:** Article Visibility Indicators - ADDED

**User Request:** Show which articles are visible on site in CMS list view

**Solution Added to `admin/config.yml`:**
```yaml
summary: "{{fields.published | ternary('✓', '✗')}} {{date | date('YYYY-MM-DD')}} - {{title}}"
view_filters:
  - label: "Published"
    field: published
    pattern: true
  - label: "Hidden"
    field: published
    pattern: false
sortable_fields: ['date', 'title', 'published']
```

**Result:**
- ✓ = Published (visible on site)
- ✗ = Hidden (not visible)
- Filter buttons to show only Published or Hidden
- Sortable by publish status

---

## 📝 Session Notes

### Content Strategy
- 117 articles published (curated from 555 total)
- Focus: AI ethics, tech foresight, social justice
- De-emphasized: Time-sensitive news, #BLM (past focus)
- Featured articles: CMS-editable (select 3 for homepage)

### Key Learnings
- Hero typography: HTML table for LARRY/VELEZ perfect alignment
- SquareSpace imports: May have duplicate italic content (CSS fix applied)
- CMS workflow: Editorial workflow enabled for draft/review/publish
- GitHub deploys: ~2-5 min from push to live

---

**Status:** 🟢 Active Development
**Next Checkpoint:** After Functional Excellence & Press Kit pages complete

*For project history, design philosophy, and architecture details, see docs/ROADMAP.md*
