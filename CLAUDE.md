# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for larryvelez.com built as a Jekyll static site with Decap CMS for content management. The site is deployed to GitHub Pages via automated GitHub Actions.

## Essential Commands

### Development
```bash
# Set Ruby path (if using Homebrew Ruby)
export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"

# Install dependencies (run once or when Gemfile changes)
bundle install

# Run local development server with live reload
./serve.sh

# Run Jekyll + Decap CMS local backend (for CMS editing)
./serve-with-cms.sh

# Or manually:
bundle exec jekyll serve --livereload
# Site runs on http://localhost:4000
```

### Deployment
```bash
# Deployment is automatic via GitHub Actions on push to main
git push
```

### Troubleshooting
```bash
# If you encounter Gemfile.lock platform issues
rm Gemfile.lock
bundle install

# Check Ruby version (should be 3.1.x)
ruby --version
```

## Architecture

### Deployment Flow
1. Code is maintained in the private repository `Czaruno/LarryVelez`
2. GitHub Actions automatically builds and deploys to the public repository `Czaruno/czaruno.github.io`
3. Site is served at https://larryvelez.com

### Key Components
- **Jekyll**: Static site generator (v4.2+)
- **Ruby**: Version 3.1+ (installed via Homebrew on macOS)
- **Tailwind CSS**: Styling framework (loaded via CDN in _layouts/default.html)
- **Decap CMS**: Content management at /admin/ with GitHub backend
- **GitHub Actions**: Automated deployment using peaceiris/actions-gh-pages@v3.9.3

### Important Files
- `_config.yml`: Jekyll configuration (site title, URL, build settings)
- `index.md`: Homepage content with CMS-editable front matter
- `_layouts/default.html`: Main HTML template
- `admin/config.yml`: Decap CMS content model definitions

### CMS Access
- Local development: Set `local_backend: true` in admin/config.yml
- Production: Requires GitHub OAuth app configuration (see README for setup)

## Development Notes

### Ruby Setup
- Use Ruby 3.1+ (matching GitHub Actions)
- On macOS: `brew install ruby@3.1`
- Add to PATH: `export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"`
- Consider adding to ~/.zshrc for persistence
- Use convenience scripts that handle PATH automatically

### Content Management Workflow
1. **Local Editing (Recommended)**:
   - Run `./serve-with-cms.sh` 
   - Edit content at http://localhost:4000/admin/
   - Changes are committed to local Git repository
   - Push with `git push` to deploy

2. **Direct File Editing**:
   - Edit `index.md` directly in your editor or on GitHub
   - Hero section and intro text are in the front matter

3. **Production CMS**: 
   - Available at https://czaruno.github.io/admin/ but has authentication limitations
   - Shows helpful notice directing users to local development

### CMS Configuration
- Local backend enabled with `local_backend: true`
- Requires `npx decap-server` for local proxy
- Content stored as front matter in index.md
- Configured for "homepage" collection with hero and intro fields
- Media files stored in assets/images/

### Styling
- Uses Tailwind CSS utility classes (loaded via CDN)
- Custom styles can be added to assets/css/style.css (currently empty)
- Layout template: _layouts/default.html

### GitHub Actions Deployment
- Triggers on push to main branch
- Uses Ruby 3.1 (matching local development)
- Requires PAT stored as `GH_PAGES_PAT` repository secret
- Uses `personal_token` parameter for peaceiris/actions-gh-pages@v3.9.3
- Deploys from private Czaruno/LarryVelez to public czaruno.github.io
- Cross-platform Gemfile.lock supports multiple architectures

### Troubleshooting
- If Gemfile.lock platform issues: `rm Gemfile.lock && bundle install`
- If CMS login fails locally: ensure `npx decap-server` is running
- If deployment fails: check Ruby versions match between local and CI
- If GitHub Actions fails: verify PAT has `repo` scope and is named `GH_PAGES_PAT`