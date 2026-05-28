# Heat, Work & Worker Protection — Interactive Photostory

A static, single-page interactive photostory produced by La Isla Network and the Rockefeller Foundation. It documents sugar cane workers in Guatemala and El Salvador facing extreme heat, kidney disease, and labor conditions.

## Project structure

```
site/
  index.html   — markup only; no inline styles, no inline scripts
  style.css    — all CSS (extracted from the monolithic source file)
  main.js      — all JavaScript (extracted from the monolithic source file)
  IMG/         — local photo assets (JPEGs)

Archive/       — old draft HTML iterations (do not edit)
lin-gallery-codex - Copy (5)-filepath.html  — canonical refactor source (reference only)
```

`site/` is the only folder to work in. The canonical source that was refactored into the three files is `lin-gallery-codex - Copy (5)-filepath.html` at the repo root — keep it for reference but do not edit it. All previous drafts are in `Archive/`.

## Runtime dependencies (CDN, no build step)

| Library | Version | Usage |
|---------|---------|-------|
| GSAP | 3.12.5 | Chapter open/close animations (`Flip` plugin) |
| GSAP CustomEase | 3.12.5 | `overlay-ease` cubic curve |
| Swiper.js | 12 | Fullscreen photo gallery (main swiper + thumbs swiper) |
| Google Fonts Inter | — | Body typeface |

No bundler, no npm, no build step. Open `site/index.html` directly in a browser or serve the `site/` folder with any static file server.

## How the UI works

1. **Landing view** — Left column: looping decorative thumbnail rail (`.thumb-rail`). Right column: hero copy + chapter list (`.chapter-list`). Six chapter triggers, each keyed by a `data-chapter` slug.

2. **Chapter overlay** — Clicking a chapter trigger fires `openChapter()`, which uses a GSAP Flip animation to expand the clicked element into a full-screen overlay (`#overlay`). The overlay shows: hero image, title, body paragraphs, and a horizontal scroll of supporting `<figure>` cards.

3. **Fullscreen gallery modal** — The "View all the pictures" button opens `#actionModal`, a Swiper-powered lightbox with a main large-image swiper (`#mySwiper2`) and a thumbnail strip swiper (`#mySwiper`). `#swiperFullscreen` wraps both and has `style="display: none;"` in HTML — **this inline style must stay** because `main.js` reads and writes `swiperFullscreen.style.display` directly.

4. **Preloader** — `#lin-preloader` spins an SVG mark on `body.lin-preloading` until the page load fires, then fades out.

## Content editing

### Adding / editing chapter text
Edit `chapterData` at the top of `site/main.js`. Each key is a chapter slug. Fields: `title`, `heroImage`, `heroAlt`, `paragraphs[]`, optional `postscript[]`, optional `hasStats`.

### Adding / moving photos inside a chapter
Edit the `<template id="chapter-figures">` block in `site/index.html`. Each `<figure class="support-card" data-chapter="SLUG">` belongs to the chapter that matches its slug. Cut/paste figures between chapters freely — order within a chapter determines display order.

### Updating the decorative rail
Edit the `railFillers` array in `site/main.js`. Values are bare filenames relative to `IMG/` (i.e. relative to `site/IMG/`).

### Editing styles
All CSS is in `site/style.css`. CSS custom properties (colors, sizing) live in `:root`. Responsive breakpoints use **both** desktop-first `max-width` and mobile-first `min-width` (480 / 768 / 1024 / 1280 px). A commented-out DEBUG block is at the bottom of the file.

## Key constraints

- **No build step** — keep all dependencies as CDN links or local files.
- **`swiperFullscreen.style.display`** is manipulated by JS — never move or remove the `style="display: none;"` attribute from `#swiperFullscreen` in `site/index.html`.
- **`site/main.js` is an IIFE** — all top-level `const`/`let` are scoped inside `(function() { ... })()`. Do not add bare globals.
- Images are loaded lazily (`loading="lazy"`). Thumb images in `.thumb-origin-sources` have empty `src=""` — they are cloned and populated by `buildRailItems()` at runtime from `chapterData` hero images.

## Development workflow

Branch: `claude/determined-archimedes-8KFU0`

```bash
# Serve locally (serve from the site/ subfolder so relative paths work)
cd site && python3 -m http.server 8080

# Stage and push
git add site/index.html site/style.css site/main.js
git commit -m "your message"
git push -u origin claude/determined-archimedes-8KFU0
```
