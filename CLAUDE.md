# Sheetal Farm — sheetalfarm.com

Plain static HTML/CSS site for a farm stay in Tansen, Palpa, Nepal. No build step, no framework, no npm dependencies. This file exists so a future session doesn't have to rediscover the deployment saga below from scratch.

## What this project is

- 4 pages: `index.html` (home), `menu/index.html`, `photos/index.html`, `contact/index.html`
- `styles.css` — one shared stylesheet, custom properties in `:root` for the palette
- `images/` — real farm photos (`photoN.jpg`) and the menu's scanned price-card images (`menuN.jpg`, kept for reference even though the prices are now hand-transcribed into `menu/index.html`)
- Design system: cream (`--paper`) + deep pine green (`--pine`) + brick/terracotta accent (`--brick`), pulled from the farm's own existing menu cards and building materials. Signature motif: a small inline-SVG "prayer flag" divider (`.flags`), used once under the header and once above the footer on each page — not scattered elsewhere. See `frontendskills.md` for the full design-approach doc this was built against.
- `requirements.md` — the original one-line brief this redesign was built from.

## URL structure (read this before adding a page or a link)

Every page lives in its own folder as `index.html` so GitHub Pages serves it at a clean, extensionless URL:

| File | URL |
|---|---|
| `index.html` | `/` |
| `menu/index.html` | `/menu/` |
| `photos/index.html` | `/photos/` |
| `contact/index.html` | `/contact/` |

**All internal links and asset paths are root-relative** (`/menu/`, `/images/logo.jpg`, `/styles.css`) — never relative (`menu.html`, `images/logo.jpg`). Pages sit at different folder depths, so a relative path that works from `index.html` at the root will silently break from inside `menu/index.html`. If you add a 5th page, put it in its own folder as `newpage/index.html` and use root-relative paths from the start.

Note: the site used to be `pictures.html`; it's now `photos/index.html` and every nav label says "Photos" to match. Don't reintroduce "Pictures" anywhere — it was an intentional rename.

## Run locally

No build step — just serve the directory:

```bash
cd /Users/arjitkarki/projects/sheetalfarm
python3 -m http.server 8000
```

Open `http://localhost:8000/` (and `/menu/`, `/photos/`, `/contact/`). Root-relative paths mean you must serve from the project root over HTTP — opening `index.html` directly via `file://` will break every `/styles.css` and `/images/...` reference, since a `file://` root-relative path resolves to your filesystem root, not the project folder.

## Git / GitHub — the account trap

This repo (`Arjitkarki/sheetal-farm-react`) is on the **personal** GitHub account, not the default one. There are two accounts configured locally:

| Account | SSH host alias | Used for |
|---|---|---|
| `Akkarki2` (school) | `github.com` (default) | school repos |
| `Arjitkarki` (personal) | `github-personal` | this repo, and other personal projects |

The remote **must** use the `github-personal` alias:

```
origin  git@github-personal:Arjitkarki/sheetal-farm-react.git
```

If you ever see push/auth failures, check `git remote -v` — if it says `git@github.com:...` instead of `git@github-personal:...`, that's the bug: fix with `git remote set-url origin git@github-personal:Arjitkarki/sheetal-farm-react.git`. Verify which account a key resolves to with `ssh -T git@github.com` vs `ssh -T git@github-personal`.

Also note: `/Users/arjitkarki/projects/sheetalfarm` is its **own** git repo, deliberately separate from the much larger `git init`'d at `/Users/arjitkarki/projects` (which holds ~25 unrelated personal projects and has its own unrelated `origin` pointing at a `fintrack` repo). Don't run git commands for this project from `/Users/arjitkarki/projects` — always `cd` into `sheetalfarm/` first, or you'll be operating on the wrong repo.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds nothing (there's nothing to build) and publishes the repo root straight to GitHub Pages. Live in under a minute.

```bash
git add -A
git commit -m "describe the change"
git push origin main
```

Watch a deploy:
```bash
gh run list --repo Arjitkarki/sheetal-farm-react --workflow=deploy.yml --limit 1
gh run watch <run-id> --repo Arjitkarki/sheetal-farm-react --exit-status
```

**Pages config** (don't touch without reason): Settings → Pages → Source = "GitHub Actions" (`build_type: workflow` via API). Custom domain `sheetalfarm.com` + `www` via the `CNAME` file at repo root, HTTPS cert managed by GitHub, DNS pointed at GitHub's IPs through GoDaddy. Check current state anytime:
```bash
gh api repos/Arjitkarki/sheetal-farm-react/pages --jq '{build_type, source, cname, status}'
```

### How this used to work (context, not current state)

This repo started as a Create React App project. The old flow: run `npm run deploy` locally (a `gh-pages` npm script) → builds React → force-pushes the compiled output to a `gh-pages` branch → GitHub's old "legacy" Pages build system (branch-triggered, no Actions involved) picks it up automatically. That mechanism silently died at some point (GitHub deprecated legacy Jekyll-style auto-builds) — the last successful legacy build was 2025-09-01, and nothing after that ever rebuilt, even though pushes to `gh-pages` kept succeeding. Nobody noticed because nobody had pushed to that branch in over a year.

The React app (`src/`, `public/`, `package.json`) was removed entirely and replaced with this static site. The `gh-pages` branch still exists on GitHub with old content in its history but is **no longer used for anything** — Pages now deploys straight from `main` via Actions. Don't resurrect it.

## Debugging checklist (in order)

If `sheetalfarm.com` isn't showing a change you pushed:

1. **Did the push actually land on `main`?** `git log origin/main --oneline -3` (fetch first).
2. **Did the Actions workflow run and succeed?**
   ```bash
   gh run list --repo Arjitkarki/sheetal-farm-react --workflow=deploy.yml --limit 3
   ```
   If nothing shows up at all for a recent push: check `gh api repos/Arjitkarki/sheetal-farm-react/actions/permissions` — if `"enabled": false`, Actions is disabled repo-wide and nothing will ever run regardless of how correct the workflow file is. Fix: `gh api -X PUT repos/Arjitkarki/sheetal-farm-react/actions/permissions -F enabled=true`. (This has already bitten this repo once — it was disabled by default and silently ate every workflow trigger.)
3. **Did the workflow run fail?** `gh run view <run-id> --repo Arjitkarki/sheetal-farm-react --log-failed`
4. **Confirm what GitHub actually has**, bypassing any CDN cache, straight from the Git data:
   ```bash
   gh api "repos/Arjitkarki/sheetal-farm-react/contents/index.html" --jq '.content' | base64 -d
   ```
5. **If GitHub has the right content but the live site doesn't**: it's CDN edge caching (Fastly), not a broken deploy. `cache-control: max-age=600` — up to 10 minutes, and it appears to ignore cache-busting query strings. Check the response headers to confirm:
   ```bash
   curl -sI https://sheetalfarm.com/ | grep -Ei "age|x-cache|last-modified"
   ```
   `x-cache: HIT` with a stale `last-modified` = just wait it out. `x-cache: MISS` with fresh `last-modified` = it's live, done.

## Content notes

- The menu (`menu/index.html`) was manually transcribed from 12 scanned price-card images (`images/menu1.jpg`–`menu12.jpg`). Those images are kept in `images/` for reference/backup but are **not displayed anywhere on the site** — the real content is the hand-typed HTML. If the farm changes a price, edit `menu/index.html` directly; don't bother re-scanning a card.
- `images/Logos.jpg` (capital L) is an old duplicate of `images/logo.jpg` (lowercase, the one actually referenced). It's unused dead weight, harmless to delete, just hasn't been cleaned up.
- Photo captions on `/photos/` are hand-written, not auto-generated alt text — keep that tone (short, factual, no marketing fluff) if adding more.
