# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for larryvelez.com built as a Jekyll static site with Decap CMS for content management. The site is deployed to GitHub Pages via automated GitHub Actions.

## Essential Commands

### Development
```bash
# Install dependencies (run once or when Gemfile changes)
bundle install

# Run local development server with live reload
bundle exec jekyll serve --livereload
# Site runs on http://localhost:4000
```

### Deployment
```bash
# Deployment is automatic via GitHub Actions on push to main
git push
```

## Architecture

### Deployment Flow
1. Code is maintained in the private repository `Czaruno/LarryVelez`
2. GitHub Actions automatically builds and deploys to the public repository `Czaruno/czaruno.github.io`
3. Site is served at https://larryvelez.com

### Key Components
- **Jekyll**: Static site generator (v4.2+)
- **Tailwind CSS**: Styling framework (loaded via CDN in _layouts/default.html)
- **Decap CMS**: Content management at /admin/ with GitHub backend

### Important Files
- `_config.yml`: Jekyll configuration (site title, URL, build settings)
- `index.md`: Homepage content with CMS-editable front matter
- `_layouts/default.html`: Main HTML template
- `admin/config.yml`: Decap CMS content model definitions

### CMS Access
- Local development: Set `local_backend: true` in admin/config.yml
- Production: Requires GitHub OAuth app configuration (see README for setup)

## Development Notes

When modifying content:
- Hero section and intro text are CMS-managed via front matter in index.md
- Styling uses Tailwind CSS utility classes
- Custom styles go in assets/css/style.css (currently empty)

When working with the CMS:
- Access at http://localhost:4000/admin/ during local development
- Content changes update the front matter in index.md
- The CMS is configured for the "home" collection with hero and intro fields