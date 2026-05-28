// extracted from: inline <script> in index.html
(function() {
  console.log('[main.js] script start');

gsap.registerPlugin(Flip, CustomEase);
CustomEase.create('overlay-ease', '0.625, 0.05, 0, 1');
gsap.defaults({ ease: 'overlay-ease', duration: 0.725 });

/* ─────────────────────────────────────────────────────────
   CHAPTER DATA
   Only JS-native content lives here: titles, hero image/alt,
   paragraph copy, postscript copy, and the stats block flag.
   Supporting images are defined as <figure> HTML in the
   #chapter-figures <template> above — not here.
───────────────────────────────────────────────────────── */
const chapterData = {
  'shupa-guatemala': {
    title: 'Shupá, Guatemala',
    heroImage: 'IMG/HEA26002_00309.jpg',
    heroAlt: 'Photos of the landscapes and of Gregorio Perez Garcia, 60, a community leader, farmer and reporter, in Shupa, Guatemala on February 28, 2026. This area is the heart of the dry corridor.',
    paragraphs: [
      'Gregorio Pérez García is sixty years old.',
      'He has farmed the land around Shupá for most of his life. He is also a community leader and reporter, tracking what changes from one season to the next.'
    ]
  },
  'coffee-highlands-cane-coast': {
    title: 'Coffee in the Highlands, Cane on the Coast',
    heroImage: 'IMG/HEA26002_01494S.jpg',
    heroAlt: 'Dimas and Erica Monroy, small coffee producers, working in Comatan, Guatemala on February 28, 2026.',
    paragraphs: [
      'Tecpán and Escuintla, Guatemala — High in the Mayan highlands of Tecpán, Dimas and Erica Monroy run their own coffee operation. They spread beans across drying racks in the sun and talk about the same thing everyone here talks about: the young are leaving. Climate change is squeezing the agricultural calendar. The work has grown harder than the wages can answer.' ,
      'Hundreds of kilometers south, on the flat coastal lowlands of Escuintla, a different agriculture takes over. Nicholas Colo Quino leads a crew harvesting papaya under open sky.'
    ]
  },
  '3000-swings-a-day': {
    title: '3,000 Swings a Day',
    heroImage: 'IMG/HEA26002_06965.jpg',
    heroAlt: 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine, in Guazapa, El Salvador on March 7, 2026.',
    paragraphs: [
      'Escuintla, Guatemala — and Los Sitios, El Salvador — The Qʼeqchiʼ cane cutters working the fields outside Escuintla are internal migrants. They come from Cobán, in Guatemala\'s highlands, where subsistence farming has grown harder season by season as the climate has shifted. They travel south each harvest to cut cane for the Santa Ana Company — and they get hit on both sides. The land at home is failing. The fields at the harvest are dangerous.'
      ]
  },
  'edvin-julio-and-la-creatinina': {
    title: 'Edvin, Julio, & "La Creatina"',
    heroImage: 'IMG/HEA26002_02596.jpg',
    heroAlt: 'Edvin Rafael Sarmiento, 32, a former sugar cane worker who contracted kidney disease 6 years ago, and has been unable to work, at his home with family in Parcelamiento El Cajón in sector Agüero, Guatemala on March 2, 2026.',
    paragraphs: [
      'Parcelamiento El Cajón, sector Agüero, Guatemala — There are no rest-work protocols here. There is no formal program to protect workers’ bodies from reaching a high internal temperature. This is what the harvest looks like without a workplace intervention.'
    ]
  },
  'water-on-a-schedule': {
    title: 'Water on a Schedule',
    heroImage: 'IMG/HEA26002_08382S.jpg',
    heroAlt: 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine, in Guazapa, El Salvador on March 7, 2026.',
    paragraphs: [
      'Los Sitios and Ingenio El Ángel, El Salvador — Before sunrise in Los Sitios, work captain Santos Cano gathers his cutters in the dark. They board yellow buses for the ride to the fields. Headlamps cut the road. By the time the sun is fully up, they are already working.'
    ],
    hasStats: false
  },
  'cesar-was-twenty': {
    title: 'Cesar Was Twenty',
    heroImage: 'IMG/HEA26002_09676.jpg',
    heroAlt: 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to CKDnT, chronic kidney disease of non-traditional causes, three months ago, photographed at her home in Cantón Colima, El Salvador on March 7, 2026.',
    paragraphs: [
      'Cantón Colima and Jocote, El Salvador — Blanca Rosa is thirty-five. Three months before this photograph was taken, her son, César Omar Flores Fuentes, died of CKDnT. He was twenty years old.'
    ],
    // postscript: [
    //   'Nobody should have to risk their life to earn a living. The protocols to prevent these deaths exist. The economics favor them. The science has been settled for years. What remains is the decision to act, by companies, by governments, by the institutions that set the terms under which people work.',
    //   'Maria Catalina\'s husband did not have to die. Cesar did not have to die. Every heat-related death is preventable. It is what La Isla Network\'s evidence shows.'
    // ]
  }
};

/* ─────────────────────────────────────────────────────────
   RAIL — filler images for the decorative carousel.
   These are images NOT used as chapter heroes.
   Add/remove filenames freely — no caption dependency.
───────────────────────────────────────────────────────── */
const railFillers = [
  'HEA26002_00525.jpg', 'HEA26002_02298.jpg', 'HEA26002_02691.jpg',
  'HEA26002_02985.jpg', 'HEA26002_03486.jpg', 'HEA26002_03904.jpg',
  'HEA26002_04407.jpg', 'HEA26002_04871.jpg', 'HEA26002_04923.jpg',
  'HEA26002_04930.jpg', 'HEA26002_04953.jpg', 'HEA26002_04954S.jpg',
  'HEA26002_05015S.jpg', 'HEA26002_05194.jpg', 'HEA26002_05227S.jpg',
  'HEA26002_05549.jpg', 'HEA26002_05604.jpg', 'HEA26002_05773.jpg',
  'HEA26002_05827.jpg', 'HEA26002_05837.jpg', 'HEA26002_05887S.jpg',
  'HEA26002_05927S.jpg', 'HEA26002_06009.jpg', 'HEA26002_06118.jpg',
  'HEA26002_06127.jpg', 'HEA26002_06384.jpg', 'HEA26002_06447.jpg',
  'HEA26002_06669.jpg', 'HEA26002_06718.jpg', 'HEA26002_06935.jpg',
  'HEA26002_06972.jpg', 'HEA26002_07030.jpg', 'HEA26002_07454.jpg',
  'HEA26002_07541.jpg', 'HEA26002_07815.jpg', 'HEA26002_07930.jpg',
  'HEA26002_07986.jpg', 'HEA26002_08051.jpg', 'HEA26002_08612.jpg',
  'HEA26002_08621S.jpg', 'HEA26002_09136.jpg', 'HEA26002_09430.jpg',
  'HEA26002_09461.jpg', 'HEA26002_09466.jpg', 'HEA26002_09565.jpg',
  'HEA26002_09687.jpg', 'HEA26002_09687S.jpg', 'HEA26002_09812.jpg',
  'HEA26002_09908.jpg', 'HEA26002_09937.jpg', 'HEA26002_09942S.jpg',
  'HEA26002_09969S.jpg'
];

const IMG = 'IMG';
const railShapePattern = ['tall', 'medium', 'tall', 'wide', 'tall', 'medium'];

/* ── DOM refs ── */
const overlay          = document.getElementById('overlay');
const overlayNav       = document.getElementById('overlayNav');
const overlayBack      = document.getElementById('overlayBack');
const overlayExplore   = document.getElementById('overlayExplore');
const overlayTitleSlot = document.getElementById('overlayTitleSlot');
const overlayImageSlot = document.getElementById('overlayImageSlot');
const overlayBody      = document.getElementById('overlayBody');
const overlayKicker    = document.getElementById('overlayKicker');
const overlayCopy      = document.getElementById('overlayCopy');
const overlaySupporting= document.getElementById('overlaySupporting');
const railMainTrack    = document.getElementById('railMainTrack');
const thumbsActionBtn  = document.getElementById('thumbsActionBtn');
const actionModal      = document.getElementById('actionModal');
const actionModalClose = document.getElementById('actionModalClose');
const body             = document.body;

const triggers     = [...document.querySelectorAll('.chapter-trigger')];
const thumbEls     = [...document.querySelectorAll('.thumb-origin-sources .thumb')];
const labels       = triggers.map(t => t.querySelector('.chapter-label'));
const chapterOrder = triggers.map(t => t.dataset.chapter);
const navItems     = [...document.querySelectorAll('.overlay-nav-item')];
const chapterOrigins = new Map();
const romanNumerals  = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

const railState = {
  container:   document.querySelector('[data-rail="main"]'),
  track:       railMainTrack,
  setHeight:   0,
  setWidth:    0,
  startOffset: 0,
  duration:    250,
  tween:       null
};

let railCards           = [];
let activeChapter       = null;
let activeLabel         = null;
let activeImage         = null;
let isTransitioning     = false;
let focusedCarouselChapter = null;
let carouselSnapTween   = null;
let holdCarousel        = false;
let resizeTimer         = null;

/* ─────────────────────────────────────────────────────────
   FIGURE STORE — read <template> once, index by chapter
───────────────────────────────────────────────────────── */
const figuresByChapter = {};
const tmpl = document.getElementById('chapter-figures');
const tmplFigures = [...tmpl.content.querySelectorAll('figure.support-card')];
tmplFigures.forEach(fig => {
  const ch = fig.dataset.chapter;
  if (!figuresByChapter[ch]) figuresByChapter[ch] = [];
  figuresByChapter[ch].push(fig);
});

/* ─────────────────────────────────────────────────────────
   SWIPER "VIEW ALL" — build slides from figure elements.
   Caption = .photo-caption text inside each figure.
   Filler images (rail only) are also included via railFillers.
───────────────────────────────────────────────────────── */
function buildSwiperSlides() {
  console.log('[buildSwiperSlides] entry');
  const mainWrapper  = document.getElementById('swiperMainWrapper');
  const thumbWrapper = document.getElementById('swiperThumbsWrapper');

  // Collect all figures from every chapter in order
  const allFigures = chapterOrder.flatMap(ch => figuresByChapter[ch] || []);

  // Also add hero images (one per chapter, not in figures)
  const heroSlides = chapterOrder.map(ch => ({
    src: chapterData[ch].heroImage,
    caption: chapterData[ch].heroAlt
  }));

  // Build: heroes first, then supporting figures
  const slides = [
    ...heroSlides,
    ...allFigures.map(fig => ({
      src: fig.querySelector('img').src || fig.querySelector('img').getAttribute('src'),
      // src attr may be relative — resolve from template
      srcAttr: fig.querySelector('img').getAttribute('src'),
      caption: fig.querySelector('.photo-caption')?.textContent?.trim() || fig.querySelector('img').alt
    }))
  ];

  slides.sort((a, b) => {
    const nameA = (a.src || a.srcAttr || '').split('/').pop();
    const nameB = (b.src || b.srcAttr || '').split('/').pop();
    return nameA.localeCompare(nameB);
  });

  slides.forEach(slide => {
    const src = slide.src || slide.srcAttr;

    const mainSlide = document.createElement('div');
    mainSlide.className = 'swiper-slide';
    console.log('[DOM] style assignment: mainSlide.style.position = \'relative\';');
    mainSlide.style.position = 'relative';

    const img = document.createElement('img');
    img.src = src;
    img.alt = slide.caption || '';
    mainSlide.appendChild(img);

    if (slide.caption) {
      const cap = document.createElement('div');
      cap.className = 'swiper-slide-caption';
      cap.textContent = slide.caption;
      mainSlide.appendChild(cap);
    }

    mainWrapper.appendChild(mainSlide);

    // Thumb
    const thumbSlide = document.createElement('div');
    thumbSlide.className = 'swiper-slide';
    const thumbImg = document.createElement('img');
    thumbImg.src = src;
    thumbImg.alt = '';
    thumbSlide.appendChild(thumbImg);
    thumbWrapper.appendChild(thumbSlide);
  });
}

buildSwiperSlides();

/* ─────────────────────────────────────────────────────────
   RAIL CAROUSEL (unchanged logic, decorative only)
───────────────────────────────────────────────────────── */
function shuffleArray(arr) {
  console.log('[shuffleArray] entry');
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeAttr(v) {
  console.log('[escapeAttr] entry');
  return String(v).replace(/&/g,'&amp;').replace(/"/g,'&quot;');
}

function buildRailItems(chapterKeys, fillerFiles) {
  console.log('[buildRailItems] entry');
  const items = [];
  const seg = Math.max(4, Math.ceil(fillerFiles.length / (chapterKeys.length + 1)));
  let cursor = 0;

  items.push(...fillerFiles.slice(cursor, cursor + seg).map(f => ({ fileName: f })));
  cursor += seg;

  chapterKeys.forEach(ch => {
    const heroFile = chapterData[ch].heroImage.replace('IMG/', '');
    items.push({ fileName: heroFile, chapterKey: ch, alt: chapterData[ch].heroAlt });
    items.push(...fillerFiles.slice(cursor, cursor + seg).map(f => ({ fileName: f })));
    cursor += seg;
  });

  if (cursor < fillerFiles.length) {
    items.push(...fillerFiles.slice(cursor).map(f => ({ fileName: f })));
  }
  return items;
}

function renderRail(track, items) {
  console.log('[renderRail] entry');
  const dup = [...items, ...items];
  console.log('[DOM] innerHTML write: track.innerHTML = dup.map((item, i) => {');
  track.innerHTML = dup.map((item, i) => {
    const shape   = railShapePattern[i % railShapePattern.length];
    const src     = `${IMG}/${item.fileName}`;
    const alt     = escapeAttr(item.alt || item.fileName.replace(/\.[^.]+$/,'').replace(/_/g,' '));
    const chAttrs = item.chapterKey
      ? ` data-chapter="${item.chapterKey}" data-hero-for="${item.chapterKey}" role="button" tabindex="0" aria-label="${escapeAttr(chapterData[item.chapterKey].title)}"`
      : '';
    return `<article class="rail-card is-${shape}"${chAttrs}><img src="${src}" alt="${alt}" loading="eager" decoding="async"></article>`;
  }).join('');
}

function normalizeRail(value, size, startOffset) {
  console.log('[normalizeRail] entry');
  if (!size) return 0;
  let n = value;
  while (n > startOffset) n -= size;
  while (n <= startOffset - size) n += size;
  return n;
}

function startRailLoop() {
  console.log('[startRailLoop] entry');
  const isMobile = window.innerWidth <= 680;
  const size = isMobile ? railState.setWidth : railState.setHeight;
  if (!size) return;
  railState.tween?.kill();
  const axis = isMobile ? 'x' : 'y';
  const cur = normalizeRail(Number(gsap.getProperty(railState.track, axis)) || railState.startOffset, size, railState.startOffset);
  gsap.set(railState.track, { [axis]: cur });
  railState.tween = gsap.to(railState.track, {
    [axis]: `-=${size}`,
    duration: railState.duration,
    ease: 'none',
    repeat: -1,
    modifiers: { [axis]: raw => `${normalizeRail(parseFloat(raw), size, railState.startOffset)}px` }
  });
}

function pauseRailLoops() { railState.tween?.pause(); }
  console.log('[pauseRailLoops] entry');
function resumeRailLoops() { startRailLoop(); }
  console.log('[resumeRailLoops] entry');

function refreshCarouselLayout() {
  console.log('[refreshCarouselLayout] entry');
  const isMobile = window.innerWidth <= 680;
  if (isMobile) {
    railState.tween?.kill();
    gsap.set(railMainTrack, { clearProps: 'all' });
    gsap.set('.rail-card', { clearProps: 'all' });
    railState.setWidth  = railState.track.scrollWidth / 2;
    railState.setHeight = 0;
    railState.startOffset = 0;
    gsap.set(railState.track, { x: 0, y: 0 });
  } else {
    gsap.set('.rail-card', {
      rotationX: 10, rotationY: -13, skewX: -6, skewY: 6,
      scaleX: 1, scaleY: 1, z: 84,
      transformPerspective: 1200,
      transformOrigin: 'center center',
      force3D: true
    });
    railState.setHeight   = railState.track.scrollHeight / 2;
    railState.setWidth    = 0;
    railState.startOffset = Math.min(railState.container.clientHeight * 0.3, railState.setHeight * 0.42);
    gsap.set(railState.track, { x: 0, y: railState.startOffset });
  }
  resumeRailLoops();
}

function getNearestHeroCard(chapterKey) {
  console.log('[getNearestHeroCard] entry');
  const candidates = [...railState.track.querySelectorAll(`[data-hero-for="${chapterKey}"]`)];
  if (!candidates.length) return null;
  const railRect   = railState.container.getBoundingClientRect();
  const railCenter = railRect.top + railRect.height / 2;
  let nearest = candidates[0], nearestDelta = Infinity;
  candidates.forEach(card => {
    const rect  = card.getBoundingClientRect();
    const delta = (rect.top + rect.height / 2) - railCenter;
    if (Math.abs(delta) < Math.abs(nearestDelta)) { nearest = card; nearestDelta = delta; }
  });
  return { nearestCard: nearest, nearestDelta };
}

function focusCarouselOnChapter(chapterKey, options = {}) {
  console.log('[focusCarouselOnChapter] entry');
  if (activeChapter || isTransitioning || window.innerWidth <= 680) return;
  const nearest = getNearestHeroCard(chapterKey);
  if (!nearest) return;
  const { nearestDelta } = nearest;
  const currentY = Number(gsap.getProperty(railState.track, 'y')) || railState.startOffset;
  const targetY  = currentY - nearestDelta;
  focusedCarouselChapter = chapterKey;
  holdCarousel = Boolean(options.hold);
  pauseRailLoops();
  carouselSnapTween?.kill();
  carouselSnapTween = gsap.to(railState.track, {
    y: targetY,
    duration: options.immediate ? 0.2 : 0.38,
    ease: options.immediate ? 'power2.out' : 'power3.out',
    overwrite: true,
    onComplete: () => {
      gsap.set(railState.track, { y: normalizeRail(targetY, railState.setHeight, railState.startOffset) });
      if (!holdCarousel) resumeRailLoops();
    }
  });
}

function setHoverState(chapterKey) {
  console.log('[setHoverState] entry');
  if (activeChapter || isTransitioning) return;
  triggers.forEach(el => {
    const match = el.dataset.chapter === chapterKey;
    console.log('[DOM] classList change: el.classList.toggle(\'is-active\', match);');
    el.classList.toggle('is-active', match);
    console.log('[DOM] classList change: el.classList.toggle(\'is-dim\', chapterKey && !match);');
    el.classList.toggle('is-dim', chapterKey && !match);
  });
  railCards.forEach(card => {
    const match = card.dataset.chapter === chapterKey;
    console.log('[DOM] classList change: card.classList.toggle(\'is-active\', match);');
    card.classList.toggle('is-active', match);
    console.log('[DOM] classList change: card.classList.toggle(\'is-dim\', chapterKey && !match);');
    card.classList.toggle('is-dim', chapterKey && !match);
  });
}

function clearHoverState() {
  console.log('[clearHoverState] entry');
  if (activeChapter || isTransitioning) return;
  holdCarousel = false;
  resetInteractiveState();
  focusedCarouselChapter = null;
  carouselSnapTween?.kill();
  resumeRailLoops();
}

function resetInteractiveState() {
  console.log('[resetInteractiveState] entry');
  console.log('[DOM] classList change: triggers.forEach(el => el.classList.remove(\'is-active\',\'is-d');
  triggers.forEach(el => el.classList.remove('is-active','is-dim'));
  console.log('[DOM] classList change: railCards.forEach(card => card.classList.remove(\'is-active\',');
  railCards.forEach(card => card.classList.remove('is-active','is-dim'));
}

/* ─────────────────────────────────────────────────────────
   RENDER OVERLAY COPY — reads figures from figuresByChapter
───────────────────────────────────────────────────────── */
function renderOverlayCopy(chapterKey) {
  console.log('[renderOverlayCopy] entry');
  const chapter       = chapterData[chapterKey];
  const chapterNumber = chapterOrder.indexOf(chapterKey) + 1;

  if (chapterNumber > 0) {
    overlayKicker.textContent = `CHAPTER ${romanNumerals[chapterNumber - 1] || chapterNumber}`;
  }

  const statsBlock = chapter.hasStats ? `
    <div class="lin_results_block">
      <div class="lin_results_heading">Our Results</div>
      <div class="lin_results_sub">Proven results. Real impact.</div>
      <div class="lin_results_stats">
        <div class="lin_results_stat" data-rval="94">
          <div class="lin_results_num"><span class="lin_results_val">0</span><span class="lin_results_sfx">%</span></div>
          <div class="lin_results_label">Reduction in heat-related hospitalizations</div>
        </div>
        <div class="lin_results_stat" data-rval="20">
          <div class="lin_results_num"><span class="lin_results_pfx">+</span><span class="lin_results_val">0</span><span class="lin_results_sfx">%</span></div>
          <div class="lin_results_label">Increase in worker productivity (up to)</div>
        </div>
        <div class="lin_results_stat" data-rval="60">
          <div class="lin_results_num"><span class="lin_results_val">0</span><span class="lin_results_sfx">%</span></div>
          <div class="lin_results_label">Positive Return on Investment generated</div>
        </div>
      </div>
    </div>` : '';

  console.log('[DOM] innerHTML write: overlayCopy.innerHTML = chapter.paragraphs.map((p, i) => {');
  overlayCopy.innerHTML = chapter.paragraphs.map((p, i) => {
    const isLead = i === 0 && !['3000-swings-a-day','edvin-julio-and-la-creatinina'].includes(chapterKey);
    const markup = `<p class="${isLead ? 'lead' : ''}">${p}</p>`;
    return (chapter.hasStats && i === chapter.paragraphs.length - 1) ? markup + statsBlock : markup;
  }).join('');

  // Clone figures from template store — do not move originals
  console.log('[DOM] innerHTML write: overlaySupporting.innerHTML = \'\';');
  overlaySupporting.innerHTML = '';
  const figs = figuresByChapter[chapterKey] || [];
  figs.forEach(fig => {
    overlaySupporting.appendChild(fig.cloneNode(true));
  });

  if (chapter.postscript?.length) {
    const post = document.createElement('div');
    post.className = 'chapter-copy chapter-postscript';
    console.log('[DOM] innerHTML write: post.innerHTML = chapter.postscript.map(p => `<p>${p}</p>`).');
    post.innerHTML = chapter.postscript.map(p => `<p>${p}</p>`).join('');
    overlaySupporting.appendChild(post);
  }
}

function getOtherLabels() { return labels.filter(l => l !== activeLabel); }
  console.log('[getOtherLabels] entry');
function getOtherThumbs(chapterKey) { return thumbEls.filter(t => t.dataset.chapter !== chapterKey); }
  console.log('[getOtherThumbs] entry');

/* ─────────────────────────────────────────────────────────
   OPEN CHAPTER
───────────────────────────────────────────────────────── */
function openChapter(chapterKey) {
  console.log('[openChapter] entry');
  if (activeChapter || isTransitioning) return;

  const chapter = chapterData[chapterKey];
  const origin  = chapterOrigins.get(chapterKey);
  const label   = origin.labelHome.querySelector('.chapter-label');

  const nearest     = getNearestHeroCard(chapterKey);
  const nearestCard = nearest?.nearestCard;
  const railCardImg = nearestCard?.querySelector('img');
  const image       = railCardImg || origin.imageHome.querySelector('img');
  if (!label || !image) return;

  resetInteractiveState();
  activeChapter   = chapterKey;
  activeLabel     = label;
  activeImage     = image;
  isTransitioning = true;

  renderOverlayCopy(chapterKey);

  const flipState   = Flip.getState([activeLabel, activeImage], { props: 'fontSize,color' });
  const otherLabels = getOtherLabels();
  const otherThumbs = getOtherThumbs(chapterKey);
  const bodyTargets = overlayBody.querySelectorAll('.chapter-copy p, .lin_results_block, .support-card');

  console.log('[DOM] classList change: overlay.classList.add(\'is-visible\');');
  overlay.classList.add('is-visible');
  console.log('[DOM] setAttribute: overlay.setAttribute(\'aria-hidden\', \'false\');');
  overlay.setAttribute('aria-hidden', 'false');
  console.log('[DOM] setAttribute: overlay.setAttribute(\'aria-modal\', \'true\');');
  overlay.setAttribute('aria-modal', 'true');
  console.log('[DOM] setAttribute: overlay.setAttribute(\'aria-labelledby\', `chapter-${chapterKe');
  overlay.setAttribute('aria-labelledby', `chapter-${chapterKey}-title`);
  overlay.scrollTop = 0;
  console.log('[DOM] classList change: body.classList.add(\'overlay-open\');');
  body.classList.add('overlay-open');

  gsap.set(overlayNav,  { display: 'flex' });
  gsap.set(navItems,    { yPercent: -110, autoAlpha: 0 });
  gsap.set(overlayBody, { autoAlpha: 0 });
  gsap.set(bodyTargets, { autoAlpha: 0, y: 18 });

  overlayTitleSlot.appendChild(activeLabel);
  console.log('[DOM] innerHTML write: overlayImageSlot.innerHTML = \'\';');
  overlayImageSlot.innerHTML = '';
  overlayImageSlot.appendChild(activeImage);
  activeImage.alt = chapter.heroAlt;

  const caption = document.createElement('div');
  caption.className = 'overlay-img-caption';
  caption.textContent = chapter.heroAlt;
  overlayImageSlot.appendChild(caption);

  const tl = gsap.timeline({ onComplete: () => { isTransitioning = false; } });
  tl.add(Flip.from(flipState, { absolute: true, nested: true, duration: 0.725 }), 0);
  tl.to(otherLabels, { yPercent: 100, autoAlpha: 0, duration: 0.45, stagger: 0.05 }, 0.16);
  tl.to(otherThumbs, { autoAlpha: 0.12, duration: 0.45, stagger: 0.03 }, 0.16);
  tl.to(navItems,    { yPercent: 0, autoAlpha: 1, stagger: 0.08, duration: 0.5 }, 0.24);
  tl.to(overlayBody, { autoAlpha: 1, duration: 0.3 }, 0.42);
  tl.to(bodyTargets, { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.45 }, 0.5);

  if (chapter.hasStats) {
    overlayCopy.querySelectorAll('.lin_results_stat').forEach((stat, i) => {
      const valEl  = stat.querySelector('.lin_results_val');
      const target = parseInt(stat.dataset.rval, 10);
      gsap.to({ n: 0 }, {
        n: target, duration: 1.4, ease: 'power3.out',
        delay: 0.9 + i * 0.22,
        onUpdate: function() { valEl.textContent = Math.round(this.targets()[0].n); }
      });
    });
  }
}

/* ─────────────────────────────────────────────────────────
   CLOSE CHAPTER
───────────────────────────────────────────────────────── */
function closeChapter() {
  console.log('[closeChapter] entry');
  if (!activeChapter || !activeLabel || !activeImage || isTransitioning) return;
  isTransitioning = true;

  const origin      = chapterOrigins.get(activeChapter);
  const nearest     = getNearestHeroCard(activeChapter);
  const nearestCard = nearest?.nearestCard;

  const state         = Flip.getState([activeLabel, activeImage], { props: 'fontSize,color' });
  const returningLabels = getOtherLabels();
  const returningThumbs = getOtherThumbs(activeChapter);
  const bodyTargets   = overlayBody.querySelectorAll('.chapter-copy p, .lin_results_block, .support-card');

  const tl = gsap.timeline({
    onComplete: () => {
      origin.labelHome.appendChild(activeLabel);
      if (nearestCard) nearestCard.appendChild(activeImage);
      else origin.imageHome.appendChild(activeImage);

      gsap.to(overlay, { autoAlpha: 0, duration: 0.28, ease: 'power2.in' });

      Flip.from(state, {
        absolute: true, nested: true, duration: 0.78, ease: 'overlay-ease',
        onInterrupt: cleanup,
        onComplete: cleanup
      });

      gsap.to(returningLabels, { yPercent: 0, autoAlpha: 1, duration: 0.42, stagger: 0.05, ease: 'overlay-ease' });
      gsap.to(returningThumbs, { autoAlpha: 1, duration: 0.42, stagger: 0.03, ease: 'overlay-ease' });
    }
  });

  function cleanup() {
    console.log('[cleanup] entry');
    console.log('[DOM] classList change: overlay.classList.remove(\'is-visible\');');
    overlay.classList.remove('is-visible');
    console.log('[DOM] setAttribute: overlay.setAttribute(\'aria-hidden\', \'true\');');
    overlay.setAttribute('aria-hidden', 'true');
    console.log('[DOM] setAttribute: overlay.setAttribute(\'aria-modal\', \'false\');');
    overlay.setAttribute('aria-modal', 'false');
    overlay.removeAttribute('aria-labelledby');
    gsap.set(overlay, { clearProps: 'opacity,visibility' });
    console.log('[DOM] classList change: body.classList.remove(\'overlay-open\');');
    body.classList.remove('overlay-open');
    gsap.set(overlayNav, { display: 'none' });
    gsap.set(returningLabels, { yPercent: 0, autoAlpha: 1 });
    gsap.set(returningThumbs, { autoAlpha: 1 });
    gsap.set([overlayBody, ...navItems, ...bodyTargets], { clearProps: 'all' });
    resetInteractiveState();
    activeChapter = null; activeLabel = null; activeImage = null; isTransitioning = false;
    resumeRailLoops();
  }

  tl.to(navItems,    { yPercent: -110, autoAlpha: 0, stagger: 0.06, duration: 0.35 }, 0);
  tl.to(bodyTargets, { autoAlpha: 0, y: 16, stagger: 0.03, duration: 0.25 }, 0);
  tl.to(overlayBody, { autoAlpha: 0, duration: 0.22 }, 0.08);
}

/* ─────────────────────────────────────────────────────────
   INIT
───────────────────────────────────────────────────────── */
triggers.forEach((trigger, i) => {
  if (trigger.querySelector('.chapter-kicker')) return;
  const kicker = document.createElement('span');
  kicker.className = 'chapter-kicker';
  kicker.textContent = `Chapter ${romanNumerals[i] || i + 1}`;
  trigger.insertBefore(kicker, trigger.firstChild);
});

// Set thumb images from chapterData
chapterOrder.forEach(ch => {
  const thumbImg = document.querySelector(`.thumb-origin-sources .thumb[data-chapter="${ch}"] img`);
  if (thumbImg) thumbImg.src = chapterData[ch].heroImage;
});

// Map origins
triggers.forEach(trigger => {
  const ch = trigger.dataset.chapter;
  chapterOrigins.set(ch, {
    labelHome: trigger,
    imageHome: document.querySelector(`.thumb-origin-sources .thumb[data-chapter="${ch}"]`)
  });
});

// Build rail
const shuffledFillers = shuffleArray(railFillers);
const railItems = buildRailItems(chapterOrder, shuffledFillers);
renderRail(railMainTrack, railItems);

if (window.innerWidth > 680) {
  gsap.set('.rail-card', {
    rotationX: 10, rotationY: -13, skewX: -6, skewY: 6,
    scaleX: 1, scaleY: 1, z: 84,
    transformPerspective: 1200, transformOrigin: 'center center', force3D: true
  });
}

railCards = [...document.querySelectorAll('.rail-card[data-chapter]')];

/* ── Events ── */
const chapterList  = document.querySelector('.chapter-list');
const railContainer = document.querySelector('.thumb-rail');

chapterList.addEventListener('mouseenter', e => {
  const trigger = e.target.closest('.chapter-trigger');
  if (!trigger) return;
  setHoverState(trigger.dataset.chapter);
  focusCarouselOnChapter(trigger.dataset.chapter, { hold: true });
}, true);

chapterList.addEventListener('focus', e => {
  const trigger = e.target.closest('.chapter-trigger');
  if (!trigger) return;
  setHoverState(trigger.dataset.chapter);
  focusCarouselOnChapter(trigger.dataset.chapter, { immediate: true, hold: true });
}, true);

chapterList.addEventListener('mouseleave', clearHoverState, true);
chapterList.addEventListener('blur', clearHoverState, true);
chapterList.addEventListener('click', e => {
  const trigger = e.target.closest('.chapter-trigger');
  if (trigger?.dataset.chapter) openChapter(trigger.dataset.chapter);
});

railContainer.addEventListener('mouseenter', e => {
  const card = e.target.closest('.rail-card[data-chapter]');
  if (!card) return;
  setHoverState(card.dataset.chapter);
  focusCarouselOnChapter(card.dataset.chapter, { hold: true });
}, true);

railContainer.addEventListener('focus', e => {
  const card = e.target.closest('.rail-card[data-chapter]');
  if (!card) return;
  setHoverState(card.dataset.chapter);
  focusCarouselOnChapter(card.dataset.chapter, { immediate: true, hold: true });
}, true);

railContainer.addEventListener('mouseleave', clearHoverState, true);
railContainer.addEventListener('blur', clearHoverState, true);
railContainer.addEventListener('click', e => {
  const card = e.target.closest('.rail-card[data-chapter]');
  if (card?.dataset.chapter) openChapter(card.dataset.chapter);
});
railContainer.addEventListener('keydown', e => {
  const card = e.target.closest('.rail-card[data-chapter]');
  if (!card) return;
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChapter(card.dataset.chapter); }
});

overlayBack.addEventListener('click', closeChapter);
overlayExplore.addEventListener('click', () => {
  overlayBody.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
overlay.addEventListener('click', e => { if (!e.target.closest('.overlay-shell')) closeChapter(); });
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeChapter(); });

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    refreshCarouselLayout();
    if (focusedCarouselChapter) focusCarouselOnChapter(focusedCarouselChapter, { immediate: true });
  }, 120);
});

window.addEventListener('load', () => {
  refreshCarouselLayout();
  if (window.innerWidth > 680) focusCarouselOnChapter(chapterOrder[0], { immediate: true });
});

/* ── Action modal (view all) ── */
thumbsActionBtn.addEventListener('click', () => {
  console.log('[DOM] classList change: actionModal.classList.add(\'is-visible\');');
  actionModal.classList.add('is-visible');
  console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-hidden\', \'false\');');
  actionModal.setAttribute('aria-hidden', 'false');
  console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-modal\', \'true\');');
  actionModal.setAttribute('aria-modal', 'true');
  console.log('[DOM] classList change: body.classList.add(\'overlay-open\');');
  body.classList.add('overlay-open');
});

/* ── Mobile bar: gallery button opens action modal directly ── */
const mobileBarGalleryBtn = document.getElementById('mobileBarGalleryBtn');
if (mobileBarGalleryBtn) {
  mobileBarGalleryBtn.addEventListener('click', () => {
    console.log('[DOM] classList change: actionModal.classList.add(\'is-visible\');');
    actionModal.classList.add('is-visible');
    console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-hidden\', \'false\');');
    actionModal.setAttribute('aria-hidden', 'false');
    console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-modal\', \'true\');');
    actionModal.setAttribute('aria-modal', 'true');
    console.log('[DOM] classList change: body.classList.add(\'overlay-open\');');
    body.classList.add('overlay-open');
  });
}

/* Re-assert GPU layer on mobile bar after scroll so Safari doesn't drop it */
const mobileBar = document.getElementById('mobileBar');
if (mobileBar) {
  window.addEventListener('scroll', () => {
    console.log('[DOM] style assignment: requestAnimationFrame(() => { mobileBar.style.transform = \'t');
    requestAnimationFrame(() => { mobileBar.style.transform = 'translateZ(0)'; });
  }, { passive: true });
}

actionModalClose.addEventListener('click', () => {
  console.log('[DOM] classList change: actionModal.classList.remove(\'is-visible\');');
  actionModal.classList.remove('is-visible');
  console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-hidden\', \'true\');');
  actionModal.setAttribute('aria-hidden', 'true');
  console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-modal\', \'false\');');
  actionModal.setAttribute('aria-modal', 'false');
  console.log('[DOM] classList change: body.classList.remove(\'overlay-open\');');
  body.classList.remove('overlay-open');
  resumeRailLoops();
});

actionModal.addEventListener('click', e => {
  const inSwiper = actionModal.querySelector('.mySwiper2')?.contains(e.target);
  const inThumb  = e.target.closest('.mySwiper');
  if (e.target === actionModal && !inSwiper && !inThumb) {
    console.log('[DOM] classList change: actionModal.classList.remove(\'is-visible\');');
    actionModal.classList.remove('is-visible');
    console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-hidden\', \'true\');');
    actionModal.setAttribute('aria-hidden', 'true');
    console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-modal\', \'false\');');
    actionModal.setAttribute('aria-modal', 'false');
    console.log('[DOM] classList change: body.classList.remove(\'overlay-open\');');
    body.classList.remove('overlay-open');
    resumeRailLoops();
  }
});

/* Prevent iOS Safari pull-to-refresh / back-swipe triggering inside the modal */
actionModal.addEventListener('touchmove', e => {
  e.stopPropagation();
}, { passive: true });

window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && actionModal.classList.contains('is-visible')) {
    console.log('[DOM] classList change: actionModal.classList.remove(\'is-visible\');');
    actionModal.classList.remove('is-visible');
    console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-hidden\', \'true\');');
    actionModal.setAttribute('aria-hidden', 'true');
    console.log('[DOM] setAttribute: actionModal.setAttribute(\'aria-modal\', \'false\');');
    actionModal.setAttribute('aria-modal', 'false');
    console.log('[DOM] classList change: body.classList.remove(\'overlay-open\');');
    body.classList.remove('overlay-open');
    resumeRailLoops();
  }
});

const imageDescriptions = {
  'HEA26002_00119S.jpg': 'Photos of the landscapes and of Gregorio Perez Garcia, 60, a community leader, farmer and reporter, in Shupa, Guatemala on February 28, 2026. This area is the heart of the dry corridor.',
  'HEA26002_00309.jpg': 'Photos of the landscapes and of Gregorio Perez Garcia, 60, a community leader, farmer and reporter, in Shupa, Guatemala on February 28, 2026. This area is the heart of the dry corridor.',
  'HEA26002_00525.jpg': 'Photos of the landscapes and of Gregorio Perez Garcia, 60, a community leader, farmer and reporter, in Shupa, Guatemala on February 28, 2026. This area is the heart of the dry corridor.',
  'HEA26002_00574.jpg': 'Photos of the landscapes and of Gregorio Perez Garcia, 60, a community leader, farmer and reporter, in Shupa, Guatemala on February 28, 2026. This area is the heart of the dry corridor.',
  'HEA26002_01383.jpg': 'Photos of the landscapes and of Gregorio Perez Garcia, 60, a community leader, farmer and reporter, in Shupa, Guatemala on February 28, 2026. This area is the heart of the dry corridor. Working with Nicholas Gutierrez.',
  'HEA26002_01494S.jpg': 'Dimas and Erica Monroy, small coffee producers, working in Comatan, Guatemala on February 28, 2026.',
  'HEA26002_02298.jpg': 'A food shop in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_02455S.jpg': 'Edvin Rafael Sarmiento, 32, a former sugar cane worker who contracted kidney disease 6 years ago, and has been unable to work, at his home with family in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_02596.jpg': 'Edvin Rafael Sarmiento, 32, a former sugar cane worker who contracted kidney disease 6 years ago, and has been unable to work, at his home with family in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_02691.jpg': 'Edvin Rafael Sarmiento, 32, a former sugar cane worker who contracted kidney disease 6 years ago, and has been unable to work, at his home with family in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_02832S.jpg': 'Edvin Rafael Sarmiento, 32, a former sugar cane worker who contracted kidney disease 6 years ago, and has been unable to work, at his home with family in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_02985.jpg': 'Edvin Rafael Sarmiento, 32, a former sugar cane worker who contracted kidney disease 6 years ago, and has been unable to work, at his home with family in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_03025S.jpg': 'Julio Lopez, a former sugar cane worker who contracted chronic kidney disease, "La Creatina", in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_03364S.jpg': 'An abandoned home amongst the sugar cane fields in Parselamiento El Cajon in sector Aguero, Guatemala on March 2, 2026.',
  'HEA26002_03486.jpg': 'Irrigation workers for Pantaleón in Parselamiento El Cajon in sector El Betania, Guatemala on March 2, 2026.',
  'HEA26002_03904.jpg': 'Nicholas Colo Quino, 49, and his workers harvest papaya in the hot lowlands outside of Isquintla, Guatemala on March 3, 2026.',
  'HEA26002_04362S.jpg': 'Views of a sugar cane field burning near Isquintla, Guatemala on March 4, 2026',
  'HEA26002_04363.jpg': 'Views of a sugar cane field burning near Isquintla, Guatemala on March 4, 2026',
  'HEA26002_04407.jpg': 'Views of a sugar cane field burning near Isquintla, Guatemala on March 4, 2026',
  'HEA26002_04871.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_04923.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_04648S.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_04930.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_04953.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_04954S.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_05015S.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_05194.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_05227S.jpg': 'Kekchi men, internal migrant workers from Coban, cutting sugar cane in Santa Ana Company sugar cane fields near Isquintla, Guatemala on March 5, 2026.',
  'HEA26002_05533S.jpg': 'Views of the port of Acajutla, El Salvador, where much of the country\'s sugar production is shipped from, on March 5, 2026.',
  'HEA26002_05549.jpg': 'Views of the port of Acajutla, El Salvador, where much of the country\'s sugar production is shipped from, on March 5, 2026.',
  'HEA26002_05604.jpg': 'Views of the port of Acajutla, El Salvador, where much of the country\'s sugar production is shipped from, on March 5, 2026.',
  'HEA26002_05663.jpg': 'Views of the port of Acajutla, El Salvador, where much of the country\'s sugar production is shipped from, on March 5, 2026.',
  'HEA26002_05773.jpg': 'Domestic scene at a sugar cane worker\'s home in Los Sitios, El Salvador on March6, 2026.',
  'HEA26002_05827.jpg': 'Domestic scene at a sugar cane worker\'s home in Los Sitios, El Salvador on March6, 2026.',
  'HEA26002_05837.jpg': 'Domestic scene at a sugar cane worker\'s home in Los Sitios, El Salvador on March6, 2026.',
  'HEA26002_05887S.jpg': 'Domestic scene at a sugar cane worker\'s home in Los Sitios, El Salvador on March6, 2026.',
  'HEA26002_05927S.jpg': 'Domestic scene at a sugar cane worker\'s home in Los Sitios, El Salvador on March6, 2026.',
  'HEA26002_06009.jpg': 'Domestic scene at a sugar cane worker\'s home in Los Sitios, El Salvador on March6, 2026.',
  'HEA26002_06118.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06127.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06384.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06421.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06421S.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06447.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06634S.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06669.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06718.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06882.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06882S.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06935.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06965.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_06972.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07030.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07167S.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07454.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07541.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07815.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07930.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_07986.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_08051.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_08382S.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_08612.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_08706S.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_08621S.jpg': 'Santos Cano, sugar cane work captain, with his cane cutters on a bus to work in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_09136.jpg': 'Sugar cane workers participating in La Isla Network\'s PREP program, which incorporates rest, water and shade into their work routine,  in Guazapa, El Salvador on March 7, 2026.',
  'HEA26002_09430.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09461.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09466.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09565.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09676.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09687.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09687S.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026.',
  'HEA26002_09808.jpg': 'Blanca Rosa, 35, lost her son, Cesar Omar Flores Fuentes, 20, to  CKDnT, chronic kidney disease of non- traditional causes, three months ago, photographed at her home in Canton Colima, El Salvador on March 7, 2026. With her husband Eugenio Anaya Portillo, 75.',
  'HEA26002_09812.jpg': 'View of road in San Salvador with McDonalds sign and volcano in the distance on March 7, 2026.',
  'HEA26002_09870S.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.',
  'HEA26002_09886.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.',
  'HEA26002_09908.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.',
  'HEA26002_09937.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.',
  'HEA26002_09942S.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.',
  'HEA26002_09957S.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.',
  'HEA26002_09969S.jpg': 'Maria Catalina Artiga, 72, widowed by CKDnT less than a year ago, at her home in Jocote, El Salvador on March 8, 2026.'
};

const swiperMainWrapper = document.getElementById('swiperMainWrapper');
const swiperThumbsWrapper = document.getElementById('swiperThumbsWrapper');

const localImageBase  = 'IMG';
const localImageFiles = Object.keys(imageDescriptions);

const hiddenImages = ['HEA26002_05773.jpg', 'HEA26002_05827.jpg', 'HEA26002_05887S.jpg', 'HEA26002_09687S.jpg', 'HEA26002_09942S.jpg'];

localImageFiles.forEach((fileName) => {
  if (hiddenImages.includes(fileName)) {
    return;
  }

  const mainSlide = document.createElement('div');
  mainSlide.className = 'swiper-slide';
  const mainImg = document.createElement('img');
  mainImg.src = `${localImageBase}/${fileName}`;
  mainImg.alt = fileName;
  mainSlide.appendChild(mainImg);

  const caption = document.createElement('div');
  caption.className = 'overlay-img-caption';
  caption.textContent = imageDescriptions[fileName] || fileName;
  mainSlide.appendChild(caption);

  swiperMainWrapper.appendChild(mainSlide);

  const thumbSlide = document.createElement('div');
  thumbSlide.className = 'swiper-slide';
  const thumbImg = document.createElement('img');
  thumbImg.src = `${localImageBase}/${fileName}`;
  thumbImg.alt = '';
  thumbSlide.appendChild(thumbImg);
  swiperThumbsWrapper.appendChild(thumbSlide);
});

var swiperThumbs = new Swiper('.mySwiper', {
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: { 0: { slidesPerView: 3 }, 768: { slidesPerView: 5 } }
});

const swiperMain = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  keyboard: { enabled: true, onlyInViewport: false },
  thumbs: { swiper: swiperThumbs }
});

/* ── Fullscreen expand ── */
const swiperExpandBtn      = document.getElementById('swiperExpandBtn');
const swiperFullscreen     = document.getElementById('swiperFullscreen');
const swiperFullscreenImg  = document.getElementById('swiperFullscreenImg');
const swiperFullscreenClose= document.getElementById('swiperFullscreenClose');

function updateFullscreenImage() {
  console.log('[updateFullscreenImage] entry');
  const activeSlide = swiperMain.slides[swiperMain.activeIndex];
  if (activeSlide) {
    const img = activeSlide.querySelector('img');
    if (img) { swiperFullscreenImg.src = img.src; swiperFullscreenImg.alt = img.alt; }
  }
}

swiperExpandBtn.addEventListener('click', () => {
  updateFullscreenImage();
  console.log('[DOM] style assignment: swiperFullscreen.style.display = \'flex\';');
  swiperFullscreen.style.display = 'flex';
  console.log('[DOM] style assignment: document.body.style.overflow = \'hidden\';');
  document.body.style.overflow = 'hidden';
});

swiperFullscreenClose.addEventListener('click', () => {
  console.log('[DOM] style assignment: swiperFullscreen.style.display = \'none\';');
  swiperFullscreen.style.display = 'none';
  console.log('[DOM] style assignment: document.body.style.overflow = \'\';');
  document.body.style.overflow = '';
});

swiperFullscreen.addEventListener('click', e => {
  console.log('[DOM] style assignment: if (e.target === swiperFullscreen) { swiperFullscreen.style.');
  if (e.target === swiperFullscreen) { swiperFullscreen.style.display = 'none'; document.body.style.overflow = ''; }
});

swiperMain.on('slideChange', () => {
  console.log('[DOM] style assignment: if (swiperFullscreen.style.display === \'flex\') updateFullscr');
  if (swiperFullscreen.style.display === 'flex') updateFullscreenImage();
});

document.addEventListener('keydown', e => {
  console.log('[DOM] style assignment: if (swiperFullscreen.style.display === \'flex\' && e.key === \'');
  if (swiperFullscreen.style.display === 'flex' && e.key === 'Escape') {
    console.log('[DOM] style assignment: swiperFullscreen.style.display = \'none\';');
    swiperFullscreen.style.display = 'none';
    console.log('[DOM] style assignment: document.body.style.overflow = \'\';');
    document.body.style.overflow = '';
  }
});

  /* ─────────────────────────────────────────────────────────
     PRELOADER — extracted from second inline <script>
  ───────────────────────────────────────────────────────── */
(function () {
  var pre  = document.getElementById('lin-preloader');
  var body = document.body;
  if (!pre) return;
  var MIN_DISPLAY = 1600;
  var start = performance.now();
  var finished = false;
  function finish() {
    console.log('[finish] entry');
    if (finished) return;
    finished = true;
    console.log('[DOM] classList change: pre.classList.add(\'lin-pre-done\');');
    pre.classList.add('lin-pre-done');
    console.log('[DOM] classList change: body.classList.remove(\'lin-preloading\');');
    body.classList.remove('lin-preloading');
  }
  function ready() {
    console.log('[ready] entry');
    var wait = Math.max(0, MIN_DISPLAY - (performance.now() - start));
    setTimeout(finish, wait);
  }
  if (document.readyState === 'complete') ready();
  else window.addEventListener('load', ready, { once: true });
  setTimeout(finish, 6000);
})();

})();
