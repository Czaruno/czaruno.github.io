# Personal Homepage for larryvelez.com

This is a personal homepage built with Jekyll, styled with Tailwind CSS (via CDN), and managed with Decap CMS. It's designed to be hosted on GitHub Pages.

## Local Development

To set up and run this site locally, you'll need Ruby, Bundler, and Jekyll.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Czaruno/LarryVelez.git
    cd LarryVelez
    ```

2.  **Install Ruby and Bundler:**
    The site requires Ruby 3.1+ (matching the GitHub Actions workflow).
    
    **For macOS users:**
    ```bash
    # Install Ruby via Homebrew
    brew install ruby@3.1
    
    # Add Ruby to your PATH
    export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"
    
    # Verify Ruby version
    ruby -v  # Should show 3.1.x
    
    # Install Bundler
    gem install bundler
    ```

3.  **Install Jekyll and other dependencies:**
    Navigate to the project directory and run:
    ```bash
    bundle install
    ```
    
    **Note:** If you encounter platform-specific Gemfile.lock errors, delete it and run `bundle install` again.

4.  **Serve the site locally:**
    
    **Quick method (recommended):**
    ```bash
    ./serve.sh
    ```
    
    **Manual method:**
    ```bash
    export PATH="/usr/local/opt/ruby@3.1/bin:$PATH"  # If using Homebrew Ruby
    bundle exec jekyll serve --livereload
    ```
    
    This will start a local development server at `http://localhost:4000`.

    *   The `--livereload` flag automatically refreshes the page when you make changes.
    *   The `serve.sh` script handles Ruby path setup automatically.

## Deployment

Deployment is automated via GitHub Actions. The workflow:

1. Triggers on push to the `main` branch of the private `Czaruno/LarryVelez` repository
2. Builds the Jekyll site using Ruby 3.1
3. Deploys the built site to the public `Czaruno/czaruno.github.io` repository

**Key Configuration:**
- The workflow uses `peaceiris/actions-gh-pages@v3.9.3` action
- Authentication is done via a Personal Access Token (PAT)
- The PAT must be stored as a repository secret named `GH_PAGES_PAT`

## Project Structure

*   `_config.yml`: Jekyll configuration.
*   `index.md`: Main homepage content and structure.
*   `_layouts/`: HTML layouts (e.g., `default.html`).
*   `assets/`: CSS, images, and other static files.
*   `admin/`: Decap CMS configuration and entry point.
*   `Gemfile`: Ruby gem dependencies.
*   `.github/workflows/`: GitHub Actions workflows for CI/CD.
*   `serve.sh`: Convenience script for running local development server.
*   `CLAUDE.md`: Development guidelines for Claude Code AI assistant.

---
## Decap CMS Setup (GitHub Backend)

**Important:** Please ensure any previous "Content Management" section referring to GitHub Authentication (via OAuth) or Git Gateway is removed or updated.

This site uses Decap CMS with the `github` backend to manage content. This means you'll authenticate with your GitHub account to use the CMS.

To enable this, you need to set up a GitHub OAuth Application:

1.  **Navigate to GitHub Developer Settings:**
    *   Go to your GitHub profile settings.
    *   Select "Developer settings" from the left sidebar.
    *   Go to "OAuth Apps".

2.  **Create a New OAuth App:**
    *   Click "New OAuth App" or "Register a new application".
    *   **Application name:** Something descriptive (e.g., "LarryVelez CMS", "LarryVelez Site Editor").
    *   **Homepage URL:** `https://czaruno.github.io` (your public site URL).
    *   **Application description:** (Optional) A brief description.
    *   **Authorization callback URL:** This is crucial. Set this to `https://api.netlify.com/auth/callback`. Decap CMS uses this Netlify-hosted service as a proxy for the OAuth flow with GitHub.

3.  **Get Credentials:**
    *   Once the app is created, you'll see a **Client ID** and you can generate a **Client Secret**.

4.  **Using Credentials:**
    *   Decap CMS, when configured for the `github` backend, will prompt users to log in via GitHub. GitHub will then show your OAuth app's consent screen. The `Authorization callback URL` you set tells GitHub where to send the user back after they approve. Netlify's `api.netlify.com/auth/callback` service handles the token exchange and forwards necessary information to the CMS running on your site.
    *   You generally **do not** need to embed the Client ID or Secret directly into your `admin/config.yml` or site files when using this standard callback URL.

    *   **Local Development with `local_backend`:**
        *   To simplify local content editing and bypass the GitHub OAuth flow when running the CMS locally, the `admin/config.yml` file has been pre-configured with `local_backend: true`.
        *   When you access the CMS from your local Jekyll server (e.g., `http://localhost:4000/admin/`), Decap CMS will use your local Git repository directly. Changes made in the CMS will be committed to your local branch. Note the port change from 4000 to 4020 was not requested, sticking to 4000.
        *   This `local_backend: true` setting is generally ignored when the CMS is accessed from a non-localhost URL (like your public `https://czaruno.github.io/admin/` site), which will use the standard GitHub OAuth flow.
        *   After making local changes via the CMS, remember to `git push` them from your local machine to the `Czaruno/LarryVelez` repository on GitHub to trigger the deployment to your live site.

Access the CMS by navigating to `/admin/` on your site (e.g., when deployed, `https://czaruno.github.io/admin/` or locally `http://localhost:4000/admin/`).
---

---
## GitHub Actions Deployment to Public Repo (`czaruno.github.io`)

The site is automatically built and deployed from the `Czaruno/LarryVelez` (private) repository to the `Czaruno/czaruno.github.io` (public) repository using a GitHub Actions workflow.

To enable the workflow to push to your public repository, you need to create a Personal Access Token (PAT):

1.  **Generate a Personal Access Token (PAT) on GitHub:**
    *   Go to your GitHub profile settings.
    *   Select "Developer settings" from the left sidebar.
    *   Go to "Personal access tokens" -> "Tokens (classic)". (Or "Fine-grained tokens" if you prefer, but classic is simpler for `repo` scope).
    *   Click "Generate new token" (select "Generate new token (classic)").
    *   **Note:** Give your token a descriptive name (e.g., "GH_PAGES_DEPLOY_LarryVelez").
    *   **Expiration:** Choose an appropriate expiration period.
    *   **Scopes:** Select the `repo` scope. This will grant full control of public and private repositories. *Be careful with this token as it's powerful.*
        *   If you use Fine-grained tokens, you can restrict it more precisely to only the `Czaruno/czaruno.github.io` repository with "Contents: Read & Write" permissions.
        *   **Important:** The workflow uses the `personal_token` parameter (not `personal_access_token`)
    *   Click "Generate token". **Copy the token immediately. You will not be able to see it again.**

2.  **Add the PAT as a Secret in the `Czaruno/LarryVelez` Repository:**
    *   Navigate to your **private** `Czaruno/LarryVelez` repository on GitHub.
    *   Go to "Settings" -> "Secrets and variables" -> "Actions".
    *   Click "New repository secret".
    *   **Name:** `GH_PAGES_PAT` (this must match the name used in the workflow file: `secrets.GH_PAGES_PAT`).
    *   **Value:** Paste the PAT you copied.
    *   Click "Add secret".

The GitHub Actions workflow will now use this token to authenticate and push the built static site files to your `czaruno.github.io` repository.
---

---
## Public Repository: `Czaruno/czaruno.github.io`

The `Czaruno/czaruno.github.io` repository serves as the public hosting location for your GitHub Pages site.

**Important Considerations:**

*   **Automated Deployment Target:** This repository's content is **automatically generated and overwritten** by the GitHub Actions workflow running in the private `Czaruno/LarryVelez` repository.
*   **Do Not Edit Manually:** Avoid making manual changes (e.g., editing HTML files, adding assets directly) in the `Czaruno/czaruno.github.io` repository. Any such changes will be lost during the next automated deployment. All content and structural changes should be made in the private `Czaruno/LarryVelez` source repository.
*   **GitHub Pages Configuration:**
    *   Ensure GitHub Pages is enabled for the `Czaruno/czaruno.github.io` repository.
    *   It should be configured to serve from the `main` branch (or `master` if that's what your public repo uses) and the `/(root)` folder.
*   **Initial Setup:** If this is the first time deploying, the GitHub Action will create the necessary branch and files. You just need to ensure the repository exists and GitHub Pages is set to watch the correct branch once content is pushed.
---
-------