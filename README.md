# Sheetal Farm

Source for [sheetalfarm.com](https://sheetalfarm.com) — a plain static HTML/CSS site, no build step.

## Structure

- `index.html`, `menu.html`, `pictures.html`, `contact.html` — the four pages
- `styles.css` — shared styles
- `images/` — photos and menu assets

## Run locally

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html`.

## Deploy

The site is served by GitHub Pages from the `gh-pages` branch (custom domain via the `CNAME` file, DNS managed through GoDaddy). To publish a change, push the updated files to `gh-pages` directly — there's no build step to run first.
