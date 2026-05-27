# Add Chapter 2: Coffee in the Highlands, Cane on the Coast

**Date:** 2026-05-27  
**File:** `lin-gallery-codex - Copy (5)-filepath.html`  
**Branch:** `Caption-fix-and-pics-state`

---

## Goal

Insert a new Chapter 2 — "Coffee in the Highlands, Cane on the Coast" — between the existing Chapter 1 (Shupá, Guatemala) and the current Chapter 2 (3,000 Swings a Day), which shifts all subsequent chapters down by one position (becoming chapters 3–6).

---

## Chapter Metadata

- **Slug:** `coffee-highlands-cane-coast`
- **Display name:** Coffee in the Highlands, Cane on the Coast
- **Hero image:** `IMG/HEA26002_01494S.jpg`
- **heroAlt:** *(placeholder — user to fill in)*
- **paragraphs:** *(placeholder — user to fill in)*

---

## Changes Required (4 touch points)

### 1. `.thumb-origin-sources` — hidden thumb button for carousel

**Location:** ~line 867, after the `shupa-guatemala` thumb button.

Add:
```html
<button class="thumb" type="button" data-chapter="coffee-highlands-cane-coast" tabindex="-1">
  <img src="" alt="Coffee highlands and cane coast" loading="lazy" decoding="async" />
</button>
```

### 2. `.chapter-list` nav — visible chapter navigation

**Location:** ~line 901, after the `shupa-guatemala` chapter-trigger button.

Add:
```html
<button class="chapter-trigger" type="button" data-chapter="coffee-highlands-cane-coast">
  <span class="chapter-label">Coffee in the Highlands, Cane on the Coast<span class="dot">.</span></span>
</button>
```

### 3. `chapterData` JS object — title, hero image, copy

**Location:** ~line 1182, after the `'shupa-guatemala'` entry and before `'3000-swings-a-day'`.

Add:
```js
'coffee-highlands-cane-coast': {
  title: 'Coffee in the Highlands, Cane on the Coast',
  heroImage: 'IMG/HEA26002_01494S.jpg',
  heroAlt: '',       // ← user to fill in
  paragraphs: [
    ''               // ← user to fill in
  ]
},
```

### 4. `#chapter-figures` template — supporting image figures

**Location:** ~line 984, between the `<!-- ── CHAPTER 1: Shupá, Guatemala ── -->` block and the current `<!-- ── CHAPTER 2: 3,000 Swings a Day ── -->` comment.

Add a new chapter block with one placeholder figure (hero image), plus a comment inviting more figures:
```html
<!-- ── CHAPTER 2: Coffee in the Highlands, Cane on the Coast ── -->
<figure class="support-card" data-chapter="coffee-highlands-cane-coast">
  <div class="support-img-wrap">
    <img src="IMG/HEA26002_01494S.jpg"
         alt=""
         loading="lazy" decoding="async">
    <div class="photo-caption"></div>
  </div>
  <figcaption></figcaption>
</figure>

<!-- Add more <figure class="support-card" data-chapter="coffee-highlands-cane-coast"> blocks here -->
```

Update the old chapter comment labels from 2–5 to 3–6 for clarity.

---

## What Does NOT Change

- No CSS changes needed.
- No JS logic changes needed — `romanNumerals` array already goes to `'X'`; chapter order is derived at runtime from DOM order of `.chapter-trigger` elements.
- No changes to `railFillers`.
- All existing chapters and their data remain intact.

---

## Out of Scope

- Filling in `heroAlt`, `paragraphs`, and `figcaption` content — user will add chapter copy once the scaffold is in place.
- Adding additional `<figure>` support cards beyond the first placeholder — user will add these as photos are selected.
