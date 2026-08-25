# Slides Template

A minimal, forkable [reveal.js](https://revealjs.com) presentation template with a built-in
design language and a slide-entrance animation system. Fork it once per presentation.

## Quick start

```bash
# from the project root, serve over http (needed for the plugins to load)
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser (some features work best over http).

Navigate with the arrow keys. Press `S` for speaker notes, `F` for fullscreen, `Esc` for the
slide overview.

## How to use it for a new presentation

1. **Fork / copy this repo** into a new repo for your presentation.
2. Edit `index.html`:
   - change the `<title>` and the theme tokens in the `:root { ... }` block (colors + fonts),
   - replace the example slides with your own,
   - drop images into `assets/images/` and any linked files into `assets/files/`.
3. Everything shared (layout, animations, reveal config) lives in `core.css` / `core.js` —
   you rarely need to touch those.

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
