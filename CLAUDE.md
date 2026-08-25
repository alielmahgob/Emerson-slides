# Working on this presentation (guide for AI collaborators)

This repo is a **forkable reveal.js presentation template**. When helping build a new deck, your
job is to produce slides that match the established design language while adapting color/font/topic
to the user's request.

## Before you design anything

**Read `archive/wasl-full-deck.html` first.** It is the "beauty bar" — the original polished
presentation the user loves (Wasl, Sprint Planning, Day 3, Cisco, Scrum decks). Scan its slide
markup and its `<style>` block to absorb the level of visual quality expected: generous spacing,
scoped per-slide CSS, decorative radial background blobs, a serif accent face for numbers/quotes,
restrained accent colors, and staggered entrance animations. Do not lower this bar.

## The design language (default "Wasl" tokens)

Defined in the `:root` block of `index.html`; change these to re-theme without touching structure:

| Token       | Value     | Use                                   |
|-------------|-----------|---------------------------------------|
| `--bg`      | `#FDF8F3` | page background (warm off-white)      |
| `--bg-2`    | `#F7EFE4` | secondary surfaces                    |
| `--ink`     | `#2A2622` | primary text                          |
| `--accent`  | `#E8844A` | ember — primary accent                |
| `--accent2` | `#7BA888` | sage — secondary accent               |
| `--muted`   | `#7A7168` | muted/supporting text                 |

Fonts: **Montserrat** for UI/headings/body, **Fraunces** (serif) for big numbers, quotes, and
closing statements. Set both in the Google Fonts `<link>` in `<head>`.

When the user asks for a different theme (e.g. "make it blue and use a slab serif"), change the
tokens and font links — **keep the structural patterns, spacing, blobs, and animations**. That is
what preserves the "Wasl touch."

## How the template is structured

- **`core.css`** — do not duplicate its rules. It owns: base resets (`section` full-bleed flex,
  `* { text-align:left }`), the `@keyframes` + `.animate-on-slide` animation classes, and generic
  `.slide-figure*` image-layout helpers.
- **`core.js`** — owns `Reveal.initialize({ width:1120, height:620, margin:0, ... })` and the
  staggered animation engine. **Never add a second `Reveal.initialize`** or re-declare the config
  in `index.html`.
- **`index.html`** — the only file you normally edit. Per-deck CSS goes in its `<style>` block,
  scoped under a deck/slide class. Slides go in `.reveal > .slides`.

## Slide conventions

- One `<section>` per slide, with `data-background-color="#FDF8F3"` (or the current `--bg`).
- Inside, a single root `<div class="slide <slide-name>">` and scope all CSS to that class.
- Add decorative blobs with `<div class="blob blob-1"></div>` / `blob-2` for depth.
- **Animations:** add `animate-on-slide fade-in` (or `fade-in-left` / `fade-in-right` / `scale-in`)
  to elements you want to reveal in sequence. Or put `data-animate` on a container to auto-tag its
  direct children. `core.js` handles the stagger timing (0.1s per element).
- Canvas is **1120×620** (16:9-ish). Design within that; use `clamp()` / `vh` / `vw` for anything
  that must flex, following the patterns in the archive.
- **Assets:** put images in `assets/images/` and reference them as `assets/images/<name>` (relative,
  so it works on GitHub Pages too). Downloadable/linked files go in `assets/files/`.

## Reusable patterns available in the starter

The starter `index.html` already demonstrates four patterns you can copy and adapt:
`cover`, `content-slide` (numbered list), `stat-slide` (big Fraunces numbers + quote), `closing`.
The archive has many more (agendas, tables, matrices, timelines, comparison grids, persona cards) —
mine it when the user needs a layout not in the starter.

## Typical workflow

1. Read the archive to match quality.
2. Confirm the theme (colors/fonts) and topic with the user.
3. Update `:root` tokens + font links if re-theming.
4. Replace/extend the slides in `index.html`, reusing patterns and adding animation classes.
5. Preview with a static server; check no console 404s and that animations stagger on slide change.
