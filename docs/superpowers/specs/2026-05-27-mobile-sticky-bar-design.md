# Mobile Sticky Bottom Bar — Design Spec

**Date:** 2026-05-27
**File:** `lin-gallery-codex - Copy (5)-filepath.html`
**Branch:** `Caption-fix-and-pics-state`

---

## Goal

Add a sticky bottom bar visible only on mobile (`≤768px`) with two equal-width buttons:
- **"Donate here"** — links to `https://laislanetwork.org/donate`, opens in new tab
- **"View the gallery"** — triggers the existing action modal (same as the current "View all the pictures" button)

---

## HTML

A new `<div id="mobileBar" class="mobile-bar">` placed immediately before `</body>` (after all scripts).

```html
<div id="mobileBar" class="mobile-bar" aria-label="Quick actions">
  <a class="mobile-bar-btn mobile-bar-donate"
     href="https://laislanetwork.org/donate"
     target="_blank" rel="noopener noreferrer">
    Donate here
  </a>
  <button class="mobile-bar-btn mobile-bar-gallery" type="button" id="mobileBarGalleryBtn">
    View the gallery
  </button>
</div>
```

---

## CSS

Added inside the existing `<style>` block, after the `.thumbs-action-btn` rules.

```css
/* ── Mobile sticky bottom bar ── */
.mobile-bar {
  display: none; /* hidden on desktop */
}

@media (max-width: 768px) {
  .mobile-bar {
    display: flex;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    z-index: 1000;
    background: #1a1d21;
    border-top: 1px solid var(--line);
    padding-bottom: env(safe-area-inset-bottom);
  }

  /* Hide the floating button — mobile bar takes over */
  .thumbs-action-btn {
    display: none;
  }

  /* Body clearance: bar height + safe-area inset */
  body {
    padding-bottom: calc(56px + env(safe-area-inset-bottom));
  }
}

.mobile-bar-btn {
  flex: 1;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 180ms ease;
}

.mobile-bar-btn:active {
  background: rgba(255, 255, 255, 0.07);
}

/* Divider between the two buttons */
.mobile-bar-donate {
  border-right: 1px solid var(--line);
}

/* Hide bar when overlay is open */
body.overlay-open .mobile-bar {
  display: none;
}
```

---

## JavaScript

One event listener added during the existing `init()` / DOM-ready setup:

```js
document.getElementById('mobileBarGalleryBtn')
  .addEventListener('click', () => {
    document.getElementById('thumbsActionBtn').click();
  });
```

This delegates to the existing `thumbsActionBtn` click handler so there is no logic duplication.

---

## iOS Safe-Area Notes

- `viewport-fit=cover` is already set in the `<meta name="viewport">` tag — prerequisite for `env()` to work.
- `padding-bottom: env(safe-area-inset-bottom)` on the bar itself pushes button content above the home indicator (~34px on Face ID iPhones, 0 on older models).
- Body `padding-bottom: calc(56px + env(safe-area-inset-bottom))` ensures page content is never obscured by the bar.
- iOS 26 Safari: no breaking changes to this pattern — `env(safe-area-inset-bottom)` works identically.

---

## What Does NOT Change

- Desktop layout — bar is `display: none` above 768px.
- The existing `thumbsActionBtn` HTML element stays in place (needed for the JS delegation).
- The donate button in the overlay footer is unchanged.
- No other JS logic changes.
