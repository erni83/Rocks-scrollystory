# Mobile Sticky Bottom Bar — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a sticky bottom bar on mobile (≤768px) with "Donate here" and "View the gallery" buttons, iOS safe-area aware, hiding the existing floating action button on mobile.

**Architecture:** Single-file HTML project. Three sequential edits to `lin-gallery-codex - Copy (5)-filepath.html`: (1) CSS styles inside `<style>`, (2) HTML bar element before `</body>`, (3) one JS event listener inside the existing init script. No new files.

**Tech Stack:** Vanilla HTML/CSS/JS, no build step. Test by opening the file in a browser and resizing to mobile width.

---

### Task 1: Add CSS for the mobile bar

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` — inside `<style>`, after the `.thumbs-action-btn` block (~line 639)

- [ ] **Step 1: Locate the insertion point**

Find this exact line (~line 639):
```css
    .thumbs-action-btn:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.16); }
```

- [ ] **Step 2: Insert the mobile bar CSS immediately after it**

```css
    /* ── Mobile sticky bottom bar ── */
    .mobile-bar {
      display: none;
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

      .thumbs-action-btn {
        display: none;
      }

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
      -webkit-tap-highlight-color: transparent;
    }

    .mobile-bar-btn:active {
      background: rgba(255, 255, 255, 0.07);
    }

    .mobile-bar-donate {
      border-right: 1px solid var(--line);
    }

    body.overlay-open .mobile-bar {
      display: none;
    }
```

- [ ] **Step 3: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: add CSS for mobile sticky bottom bar with iOS safe-area support"
```

---

### Task 2: Add HTML bar element

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` — immediately before `</body>` (~line 2076)

- [ ] **Step 1: Locate the insertion point**

Find this exact line (~line 2076):
```html
</body>
```

- [ ] **Step 2: Insert the mobile bar HTML immediately before `</body>`**

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
</body>
```

- [ ] **Step 3: Verify HTML in browser**

Open `lin-gallery-codex - Copy (5)-filepath.html` in a browser. Resize window to ≤768px width (DevTools responsive mode). Confirm:
- A two-button bar appears fixed at the bottom
- "Donate here" is on the left, "View the gallery" on the right
- A divider line separates them
- The floating "View all the pictures" button is gone on mobile
- On desktop (>768px) the bar is not visible and the floating button is back

- [ ] **Step 4: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: add HTML for mobile sticky bottom bar"
```

---

### Task 3: Wire up the gallery button JS

**Files:**
- Modify: `lin-gallery-codex - Copy (5)-filepath.html` — inside the existing `<script>`, after the `thumbsActionBtn.addEventListener` block (~line 1965)

- [ ] **Step 1: Locate the insertion point**

Find this exact block (~line 1960):
```js
    thumbsActionBtn.addEventListener('click', () => {
      actionModal.classList.add('is-visible');
      actionModal.setAttribute('aria-hidden', 'false');
      actionModal.setAttribute('aria-modal', 'true');
      body.classList.add('overlay-open');
    });
```

- [ ] **Step 2: Insert the mobile bar gallery button listener immediately after that block**

```js
    /* ── Mobile bar: gallery button delegates to thumbsActionBtn ── */
    const mobileBarGalleryBtn = document.getElementById('mobileBarGalleryBtn');
    if (mobileBarGalleryBtn) {
      mobileBarGalleryBtn.addEventListener('click', () => {
        thumbsActionBtn.click();
      });
    }
```

- [ ] **Step 3: Verify full behaviour in browser**

Open the file. In DevTools, set device to iPhone 14 Pro (or any mobile preset). Confirm:
- Tapping "View the gallery" opens the action modal (same as the old floating button)
- Tapping "Donate here" opens `https://laislanetwork.org/donate` in a new tab
- Opening any chapter overlay hides the bar (`body.overlay-open` class is added)
- Closing the overlay restores the bar

For iOS safe-area: in DevTools set device to iPhone 14 Pro and check that the buttons sit above the simulated home indicator (bottom padding is non-zero).

- [ ] **Step 4: Commit**

```bash
git add "lin-gallery-codex - Copy (5)-filepath.html"
git commit -m "feat: wire mobile bar gallery button to action modal"
```
