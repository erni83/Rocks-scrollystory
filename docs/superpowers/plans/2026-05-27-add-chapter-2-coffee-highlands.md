# Add Chapter 2: Coffee in the Highlands, Cane on the Coast — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Insert "Coffee in the Highlands, Cane on the Coast" as Chapter 2 in the scrollystory, between Shupá, Guatemala and 3,000 Swings a Day, across all four touch points in the HTML file.

**Architecture:** Single HTML file (`lin-gallery-codex - Copy (5)-filepath.html`). Chapter registration requires exactly four in-file edits: the hidden thumb button, the chapter-list nav button, the chapterData JS entry, and the figure template block. The JS derives chapter order from DOM order at runtime — no logic changes needed.

**Tech Stack:** Vanilla HTML/CSS/JS, single file. No build step. Open in browser to verify.

---

### Task 1: Add hidden thumb button

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` (~line 879)

- [ ] **Step 1: Locate the insertion point**

Find this block (around line 879):
```html
          <button class="thumb" type="button" data-chapter="3000-swings-a-day" tabindex="-1">
            <img src="" alt="Worker cutting sugarcane in the field" loading="lazy" decoding="async" />
          </button>
```

- [ ] **Step 2: Insert the new thumb button before it**

The result should look like:
```html
          <button class="thumb" type="button" data-chapter="coffee-highlands-cane-coast" tabindex="-1">
            <img src="" alt="Coffee and cane workers in the highlands and coast" loading="lazy" decoding="async" />
          </button>
          <button class="thumb" type="button" data-chapter="3000-swings-a-day" tabindex="-1">
            <img src="" alt="Worker cutting sugarcane in the field" loading="lazy" decoding="async" />
          </button>
```

- [ ] **Step 3: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: add thumb button for chapter coffee-highlands-cane-coast"
```

---

### Task 2: Add chapter-list nav button

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` (~line 905)

- [ ] **Step 1: Locate the insertion point**

Find this block (around line 905):
```html
          <button class="chapter-trigger" type="button" data-chapter="3000-swings-a-day">
            <span class="chapter-label">3,000 Swings a Day<span class="dot">.</span></span>
          </button>
```

- [ ] **Step 2: Insert the new chapter-trigger before it**

The result should look like:
```html
          <button class="chapter-trigger" type="button" data-chapter="coffee-highlands-cane-coast">
            <span class="chapter-label">Coffee in the Highlands, Cane on the Coast<span class="dot">.</span></span>
          </button>
          <button class="chapter-trigger" type="button" data-chapter="3000-swings-a-day">
            <span class="chapter-label">3,000 Swings a Day<span class="dot">.</span></span>
          </button>
```

- [ ] **Step 3: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: add chapter-list nav button for coffee-highlands-cane-coast"
```

---

### Task 3: Add chapterData JS entry

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` (~line 1182)

- [ ] **Step 1: Locate the insertion point**

Find this block (around line 1182):
```js
      '3000-swings-a-day': {
        title: '3,000 Swings a Day',
```

- [ ] **Step 2: Insert the new chapterData entry before it**

The result should look like:
```js
      'coffee-highlands-cane-coast': {
        title: 'Coffee in the Highlands, Cane on the Coast',
        heroImage: 'IMG/HEA26002_01494S.jpg',
        heroAlt: '',
        paragraphs: [
          ''
        ]
      },
      '3000-swings-a-day': {
        title: '3,000 Swings a Day',
```

- [ ] **Step 3: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: add chapterData entry for coffee-highlands-cane-coast"
```

---

### Task 4: Add figure template block

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` (~line 984)

- [ ] **Step 1: Locate the insertion point**

Find this comment (around line 984):
```html
    <!-- ── CHAPTER 2: 3,000 Swings a Day ── -->
```

- [ ] **Step 2: Insert the new chapter block before it, and update the old chapter 2–5 comment labels to 3–6**

Insert this block immediately before the `CHAPTER 2` comment:
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

Then update the old chapter comment labels:
- `<!-- ── CHAPTER 2: 3,000 Swings a Day ── -->` → `<!-- ── CHAPTER 3: 3,000 Swings a Day ── -->`
- `<!-- ── CHAPTER 3: Edvin, Julio, and "La Creatinina" ── -->` → `<!-- ── CHAPTER 4: Edvin, Julio, and "La Creatinina" ── -->`
- `<!-- ── CHAPTER 4: Cesar Was Twenty ── -->` → `<!-- ── CHAPTER 5: Cesar Was Twenty ── -->`
- `<!-- ── CHAPTER 5: Water on a Schedule ── -->` → `<!-- ── CHAPTER 6: Water on a Schedule ── -->`

- [ ] **Step 3: Verify in browser**

Open `lin-gallery-codex - Copy (5)-filepath.html` in a browser. Confirm:
- Chapter list shows 6 items with "Coffee in the Highlands, Cane on the Coast" as the second entry
- Clicking it opens the overlay with the hero image `HEA26002_01494S.jpg`
- All other chapters still work correctly (click each one)
- The carousel thumb rail shows 6 chapters

- [ ] **Step 4: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: add figure template block for coffee-highlands-cane-coast chapter 2"
```
