# LarryVelez.com - Project Roadmap

**Version:** 1.0  
**Last Updated:** 2025-01-17  
**Project Start:** 2025-01-17

---

## 🎯 Vision

Create a distinctive personal website that positions Larry Velez as a tech visionary and showcases:
1. **Current venture** - Kogi AI (AI-generated mechanical documentation)
2. **Thought leadership** - 20 years of writing on AI, tech trends, and social impact
3. **Personal philosophy** - Functional Excellence across engineering, design, and business
4. **Professional presence** - Press kit for media, investors, and partners

---

## 📐 Design Philosophy: Precision Brutalism

### Core Principles
- **Geometric precision** - Sharp angles, clean grids, asymmetric layouts
- **High contrast** - Black/white with strategic red accents
- **Bold typography** - Distinctive fonts that avoid generic AI aesthetics
- **Functional clarity** - Every element serves a purpose
- **Memorable details** - Unexpected layouts, thoughtful animations

### Inspiration Sources
- **Architecture:** Bauhaus, Dieter Rams, modern prefab buildings
- **Design:** Swiss modernism, brutalist web design
- **Philosophy:** Form follows function, "less but better"

### Typography System
```
Display:    Space Grotesk (300, 400, 500, 600, 700)
Monospace:  IBM Plex Mono (400, 600)
Scale:      9xl / 7xl / 5xl / 3xl / 2xl / xl / base
```

### Color System
```
Primary:    #000000 (black)
Secondary:  #FFFFFF (white)
Accent:     #DC2626 (red-600)
Gray-50:    Background alternates
Gray-900:   Dark sections
```

---

## 🏗️ Site Architecture

### Core Pages

#### 1. Homepage (`index.md`) ✅ COMPLETE
**Purpose:** First impression, showcase current work, tease all sections

**Sections:**
- Hero (name, tagline, Kogi focus)
- Current Work (Kogi AI deep dive)
- Writing Archive (teaser with 3 featured articles)
- Functional Excellence (teaser)
- Press Kit (teaser)
- Footer (links, contact)

**Status:** HTML/CSS complete, needs browser testing

---

#### 2. Writing Archive (`writing.md`) 🚧 TODO
**Purpose:** Showcase 20 years of tech writing, establish thought leadership

**Layout:**
```
┌─────────────────────────────────────┐
│ HEADER                              │
│ - Title: "20 Years of Tech Foresight" │
│ - Intro: Brief philosophy           │
│ - Stats: 555 articles, 2012-2023    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FEATURED ARTICLES (3-5)             │
│ - Large cards with images           │
│ - Excerpt, date, categories         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ TIMELINE BY YEAR                    │
│ 2023 ─┬─ Article 1                  │
│       ├─ Article 2                  │
│ 2022 ─┼─ Article 3                  │
│       └─ [More...]                  │
│                                     │
│ Expand/collapse by year             │
│ Visual timeline on left             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ THEMATIC COLLECTIONS (Optional)     │
│ - AI & Ethics                       │
│ - Tech Predictions                  │
│ - Indigenous Heritage               │
│ - Building Sinu                     │
└─────────────────────────────────────┘
```

**Required Components:**
- Year-based accordion/expansion
- Featured article cards
- Article preview cards (title, date, excerpt, tags)
- Visual timeline graphic
- Filter/sort controls (optional for v1)

**Content Source:** `data/articles/markdown/` (555 articles)

**Curation Strategy:**
- Launch with 10-15 curated articles
- Add more over time
- Run `scripts/curate-articles.py` to select initial set

---

#### 3. Functional Excellence (`functional-excellence.md`) 🚧 TODO
**Purpose:** Personal museum showcasing influences, interests, and philosophy

**Layout:**
```
┌─────────────────────────────────────┐
│ HERO                                │
│ "A Personal Museum of Ideas"        │
│ - Concept explanation               │
│ - Matt Moreman credit (coined term) │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ INFLUENCES (People)                 │
│ ┌───────┐ ┌───────┐ ┌───────┐      │
│ │ Naval │ │ Matt  │ │ Elon  │      │
│ │Ravikant│ │Moreman│ │ Musk  │      │
│ └───────┘ └───────┘ └───────┘      │
│ + Gary Vaynerchuk                   │
│                                     │
│ Each with:                          │
│ - Photo/illustration                │
│ - Key lesson/quote                  │
│ - Why they matter                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ FORMATIVE BOOKS                     │
│ ┌──────────────────────┐            │
│ │ Guns, Germs, & Steel │            │
│ │ - Key takeaways      │            │
│ └──────────────────────┘            │
│ ┌──────────────────────┐            │
│ │ Innovator's Dilemma  │            │
│ └──────────────────────┘            │
│ ┌──────────────────────┐            │
│ │ Seven Powers         │            │
│ └──────────────────────┘            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ OBSESSIONS (Visual Gallery)         │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│ │Cars │ │Garage│ │Prefab│ │Kogi │   │
│ │     │ │Design│ │Arch. │ │Sinu │   │
│ └─────┘ └─────┘ └─────┘ └─────┘   │
│                                     │
│ Each with:                          │
│ - Photos (if available)             │
│ - Written reflection                │
│ - Connection to philosophy          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ COLOMBIAN HERITAGE                  │
│ - Sinu & Kogi indigenous tribes     │
│ - Why companies named after them    │
│ - Photos/artifacts                  │
│ - Cultural connection               │
└─────────────────────────────────────┘
```

**Required Content:**
- [ ] Write-ups for each influence (200-300 words each)
- [ ] Book summaries with key takeaways
- [ ] Photos of cars/garage/architecture (if available)
- [ ] Colombian heritage narrative
- [ ] Matt Moreman credit/explanation of "Functional Excellence" term

**Design Notes:**
- Museum-like aesthetic (white gallery walls, focused lighting)
- High-quality imagery where possible
- Deep dives, not summaries
- Personal storytelling, not Wikipedia entries

---

#### 4. Press Kit (`press.md`) 🚧 TODO
**Purpose:** Media resources for journalists, event organizers, investors

**Layout:**
```
┌─────────────────────────────────────┐
│ HEADER                              │
│ "Media Resources"                   │
│ Quick access for press/media        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ HEADSHOTS                           │
│ ┌─────┐ ┌─────┐ ┌─────┐            │
│ │ B&W │ │Color│ │Action│           │
│ │High │ │High │ │Shot │            │
│ │ Res │ │ Res │ │     │            │
│ └─────┘ └─────┘ └─────┘            │
│ [Download All as ZIP]               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ BIOGRAPHIES                         │
│                                     │
│ ┌─ Short (25 words) ───────────┐   │
│ │ [Copyable text field]        │   │
│ │ [Copy to Clipboard button]   │   │
│ └──────────────────────────────┘   │
│                                     │
│ ┌─ Medium (100 words) ─────────┐   │
│ │ [Copyable text field]        │   │
│ │ [Copy to Clipboard button]   │   │
│ └──────────────────────────────┘   │
│                                     │
│ ┌─ Long (250 words) ───────────┐   │
│ │ [Copyable text field]        │   │
│ │ [Copy to Clipboard button]   │   │
│ └──────────────────────────────┘   │
│                                     │
│ [Download All Bios as PDF]          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ KEY ACHIEVEMENTS                    │
│ • Founded Sinu (2004-2020)          │
│ • Successful exit to Electric (🦄)  │
│ • 300+ organizations served         │
│ • Founded Kogi AI (2023-present)    │
│ • 20+ years tech writing            │
│ • Bronx High School of Science      │
│ • NYU Music graduate                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ SPEAKING TOPICS                     │
│ • AI Ethics & Bias                  │
│ • Tech Trend Forecasting            │
│ • Building Mission-Driven Companies │
│ • Indigenous Heritage in Business   │
│ • People-First Technology           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ CONTACT                             │
│ Media Inquiries: press@larryvelez.com│
│ Speaking Requests: speaking@...     │
│ General: contact@larryvelez.com     │
└─────────────────────────────────────┘
```

**Required Content:**
- [ ] 3 headshot photos (B&W, color, action)
- [ ] Short bio (25 words)
- [ ] Medium bio (100 words)
- [ ] Long bio (250 words)
- [ ] Achievement list
- [ ] Speaking topics
- [ ] Contact email addresses

**Features:**
- Click-to-copy functionality for bios
- Download all assets as ZIP
- Download bios as PDF
- High-res image downloads

---

### Supporting Pages

#### 5. Individual Blog Posts (`_posts/*.md`)
**Template:** `_layouts/post.html` ✅ EXISTS

**Required Features:**
- Article title, date, author
- Category tags
- Excerpt (if exists)
- Full markdown content
- "Back to Writing Archive" link
- Social sharing (future)

---

#### 6. 404 Page (future)
On-brand error page with navigation back to main sections

---

## 🗂️ Content Inventory

### Existing Content ✅
- **Articles:** 555 markdown files (`data/articles/markdown/`)
- **Index:** Chronological listing (`data/articles/INDEX.md`)
- **Kogi Info:** From https://kogi.ai
- **LinkedIn:** Professional history
- **About Larry:** From research/conversation

### Content To Create 📝

#### Press Kit
- [ ] Short bio (25 words) - "Tech visionary and 2X founder..."
- [ ] Medium bio (100 words) - Add Sinu details, Kogi mission
- [ ] Long bio (250 words) - Full career arc, philosophy
- [ ] Headshot photos (B&W, color, action shot)
- [ ] Speaking topics list
- [ ] Achievement timeline

#### Functional Excellence
- [ ] Naval Ravikant - why influential (200 words)
- [ ] Matt Moreman - functional excellence concept (200 words)
- [ ] Elon Musk - what you admire (200 words)
- [ ] Gary Vaynerchuk - key lessons (200 words)
- [ ] Guns, Germs, and Steel - key takeaways
- [ ] The Innovator's Dilemma - key takeaways
- [ ] Seven Powers - key takeaways
- [ ] Cars - what models, why they matter
- [ ] Garage design - photos/philosophy
- [ ] Prefab architecture - examples you love
- [ ] Colombian heritage - Sinu/Kogi tribes narrative

#### Writing Archive
- [ ] Curate 10-15 featured articles
- [ ] Write intro paragraph about writing philosophy
- [ ] Create thematic collections (optional)

---

## 🎨 Design System

### Components to Build

#### Reusable Components
- [ ] Section header (number, title, description)
- [ ] Article card (featured)
- [ ] Article card (list view)
- [ ] Person card (Functional Excellence)
- [ ] Book card (with key takeaways)
- [ ] Download button
- [ ] Copy-to-clipboard button
- [ ] Timeline visualization
- [ ] Year accordion
- [ ] Geometric accent shapes
- [ ] Sharp-corner containers

### Animation Guidelines
- Subtle on-scroll reveals
- Hover state transitions (0.2s ease)
- Button click feedback
- Timeline progression
- Minimal, purposeful motion

### Responsive Breakpoints
```css
Mobile:  < 768px   (stack everything)
Tablet:  768-1024  (2-column)
Desktop: > 1024px  (full grid)
```

---

## 🚀 Launch Phases

### Phase 1: MVP Launch (Current)
**Goal:** Professional presence with core content

**Deliverables:**
- [x] Homepage (Precision Brutalism design)
- [ ] Writing Archive (10-15 curated articles)
- [ ] Functional Excellence (all sections)
- [ ] Press Kit (bios + placeholders for photos)
- [ ] Session state tracking
- [ ] Documentation

**Target:** Complete within current session

---

### Phase 2: Content Expansion
**Goal:** Fill out all sections with complete content

**Deliverables:**
- [ ] Add 50+ more curated articles
- [ ] Professional headshots (hire photographer)
- [ ] Photos for Functional Excellence (cars, garage, architecture)
- [ ] Video content (optional)
- [ ] Speaking reel (if exists)

**Target:** Within 2 weeks of launch

---

### Phase 3: Engagement Features
**Goal:** Encourage interaction and return visits

**Deliverables:**
- [ ] Newsletter signup
- [ ] Article search/filter
- [ ] Social sharing buttons
- [ ] Comments (optional)
- [ ] RSS feed
- [ ] Analytics integration

**Target:** 1 month post-launch

---

### Phase 4: Ongoing
**Goal:** Keep content fresh, establish as thought leader

**Activities:**
- [ ] Publish new articles via Decap CMS
- [ ] Update Kogi AI progress
- [ ] Add new influences/books
- [ ] Share speaking engagements
- [ ] Press mentions

**Cadence:** Monthly updates

---

## 🛠️ Technical Implementation

### Development Workflow
```bash
# 1. Start local development
./serve-with-cms.sh

# 2. Edit content via CMS
# http://localhost:4000/admin/

# 3. Or edit files directly
# - Pages: *.md
# - Layouts: _layouts/*.html
# - Styles: inline in pages or assets/css/

# 4. Test locally
# http://localhost:4000

# 5. Commit & push
git add .
git commit -m "feat: add writing archive page"
git push

# 6. Auto-deploys to czaruno.github.io
# Via GitHub Actions
```

### Build Process
1. Jekyll builds static site from markdown
2. Tailwind CSS processed from CDN
3. GitHub Actions deploys to public repo
4. Live at https://czaruno.github.io

### Quality Checklist
- [ ] Mobile responsive
- [ ] Accessible (WCAG AA)
- [ ] Fast load times (<2s)
- [ ] SEO optimized
- [ ] Social meta tags
- [ ] Analytics tracking

---

## 📊 Success Metrics

### Phase 1 (Launch)
- Site live and functional
- All core pages complete
- Professional appearance
- Mobile responsive

### Phase 2 (Engagement)
- 100+ page views/month
- 5+ article reads/week
- Press kit downloads
- Speaking inquiries

### Phase 3 (Thought Leadership)
- Media mentions
- Speaking engagements
- Investor/partner outreach
- Community building

---

## 🔄 Maintenance Plan

### Weekly
- Review analytics
- Respond to contact form
- Monitor for broken links

### Monthly
- Publish 1-2 new articles
- Update Kogi progress
- Refresh featured content

### Quarterly
- Content audit
- Design refresh (if needed)
- Performance optimization

---

## 📝 Notes & Decisions

### Design Choices
- **Font:** Space Grotesk chosen for geometric precision, distinctiveness
- **Layout:** Grid-based but with intentional asymmetry
- **Color:** Red accent chosen over blue for energy and memorability
- **Images:** Prefer geometric shapes/diagrams over stock photos

### Content Strategy
- De-emphasize: #BLM, COVID-19, time-sensitive company news
- Emphasize: AI ethics, tech foresight, indigenous heritage, functional excellence
- Voice: Thoughtful, visionary, humble expert, socially conscious

### Technical Decisions
- Static site (Jekyll) for speed, security, simplicity
- Decap CMS for ease of content updates
- Tailwind CSS for rapid styling
- GitHub Pages for free, reliable hosting

---

## 🆘 Recovery Instructions

**If session crashes, refer to:**
1. `session-state.md` - Current progress & next steps
2. `docs/ROADMAP.md` - Full project plan (this file)
3. `ARTICLE_MANAGEMENT.md` - Article curation guide
4. `AGENTS.md` - Development guidelines

**Key files to check:**
- `index.md` - Homepage (latest redesign)
- `data/articles/markdown/` - All 555 articles safe
- `scripts/` - Parsing and curation tools
- `_layouts/post.html` - Blog post template

**Resume work at:** Current task in session-state.md

---

**Document Version:** 1.0  
**Last Sync:** 2025-01-17  
**Status:** 🟢 Active Development
