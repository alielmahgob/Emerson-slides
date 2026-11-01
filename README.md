# Slides Template

A minimal [reveal.js](https://revealjs.com) presentation template with a built-in design language
and a slide-entrance animation system. Spin up a fresh, independent repo (with its own GitHub Pages
URL) for every presentation.

## Quick start

```bash
npm run slides
# then open http://localhost:8000
```

Or use any static server (e.g. `python3 -m http.server 8000`). Serving over `http://` is needed so
the reveal.js plugins load.

Navigate with the arrow keys. Press `S` for speaker notes, `F` for fullscreen, `Esc` for the
slide overview.

## How to use it for a new presentation

This repo is set up as a **GitHub template repository** — you don't fork it (GitHub won't let you
fork a repo into the account that owns it, and forks would share one Pages URL). Instead:

1. On GitHub, click **"Use this template" → "Create a new repository"**. This makes a brand-new,
   independent repo in your account with its own GitHub Pages URL.
   *(One-time, on this template repo: Settings → check **"Template repository"**.)*
   *CLI alternative: `gh repo create my-talk --template <you>/slides-template --public`.*
2. Clone the new repo and edit `index.html`:
   - change the `<title>` and the theme tokens in the `:root { ... }` block (colors + fonts),
   - replace the example slides with your own,
   - drop images into `assets/images/` and any linked files into `assets/files/`.
3. Everything shared (layout, animations, reveal config) lives in `core.css` / `core.js` —
   you rarely need to touch those.
4. In the new repo: **Settings → Pages → Source: GitHub Actions**, then push. Your deck goes live
   at `https://<you>.github.io/<new-repo>/`.

## Adding entrance animations

Add `animate-on-slide` plus a direction class to any element you want to stagger in:

```html
<h1 class="animate-on-slide fade-in">Title</h1>
<div class="card animate-on-slide fade-in-left">...</div>
```

Directions: `fade-in` (default), `fade-in-left`, `fade-in-right`, `scale-in`.

Shortcut: put `data-animate` on a container and every direct child animates automatically.

## Export to PDF

Append `?print-pdf` to the URL and use the browser's Print dialog (Save as PDF).
Slides are configured with `margin: 0` so each PDF page matches the slide exactly.

## Publishing to GitHub Pages

Pushing to `main` auto-deploys the presentation via `.github/workflows/pages.yml`.
One-time setup in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
The live deck appears at `https://<you>.github.io/<repo>/`.

The `archive/` folder is **intentionally excluded** from the published site (it stays in the repo
as your private design reference, but is not served publicly). To include it, remove the
`--exclude 'archive'` line in the workflow.

## File layout

```
index.html                  the presentation you edit (starter with example slides)
core.css                    shared resets, animation system, figure helpers
core.js                     reveal init (1120x620) + staggered animation engine
dist/                       compiled reveal.js library + reset + black theme
plugin/                     notes, markdown, highlight (the three used here)
assets/images/              images for your slides (referenced as assets/images/...)
assets/files/               downloadable/linked files (PDFs, datasets, etc.)
archive/wasl-full-deck.html the original multi-deck presentation — kept as the DESIGN REFERENCE
archive/images/             the original Wasl assets (kept with the reference)
CLAUDE.md                   guidance for building new decks with an AI collaborator
```

## The design reference

`archive/wasl-full-deck.html` is the original, full presentation (Wasl, Sprint Planning, Day 3,
Cisco, Scrum). It is kept **untouched** as the "beauty bar" — open it to see the level of polish
this template aims for, and point an AI at it when designing new slides. See `CLAUDE.md`.

Built on reveal.js (MIT, © Hakim El Hattab). This template's slide designs and infrastructure are
your own.
