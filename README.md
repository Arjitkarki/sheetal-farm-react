# Sheetal Farm

Source for [sheetalfarm.com](https://sheetalfarm.com) — a plain static HTML/CSS site, no build step.

## Structure

- `index.html` — home (`/`)
- `menu/index.html` — menu (`/menu/`)
- `photos/index.html` — photos (`/photos/`)
- `contact/index.html` — contact (`/contact/`)
- `styles.css` — shared styles, linked as `/styles.css` from every page
- `images/` — photos and menu assets, linked as `/images/...`

Each page lives in its own folder so it gets a clean URL without a `.html` extension — GitHub Pages serves `folder/index.html` when you request `/folder/`. All links/asset paths in the HTML are root-relative (`/menu/`, `/images/logo.jpg`, etc.) so they resolve correctly regardless of which folder the page is in.

## Run locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the repo directly to GitHub Pages (Pages source is set to "GitHub Actions" in repo settings). No build step, no manual `gh-pages` push — just commit and push to `main`.
