# DESIGN.md — Cognizant Moment Design System

> **Single source of truth** for all design and prototype work in this repo. Every website, screen, component, interactive prototype — **and every piece of copy** — whether built by a human or an AI agent — must reference this file for brand, voice, colour, type, and accessibility decisions. Do not introduce values, names, or tones outside what is defined here.

- **Brand:** Cognizant Moment — a sub-brand of Cognizant (inherits Cognizant's visual identity)
- **Typeface:** Gellix (files in [brand/fonts/](brand/fonts/))
- **Accessibility target:** WCAG **AA**, contrast ratio **≥ 4.5:1**

---

## 1. Brand identity

### Who we are

**Cognizant Moment is a sub-brand of Cognizant. We bring innovation to life, harnessing emerging technologies to deliver hyper-personalized, dynamic experiences.**

Cognizant Moment partners with leading clients to differentiate, identify opportunities, and build customer engagement from conception to delivery.

**We are creative technologists, building a world of deeply connected human experiences.**

### Naming rules (must follow)

- The trademarked sub-brand name is **Cognizant Moment**.
- Although the **logo** uses a lowercase "c" and "m," **copy always uses initial caps**: *Cognizant Moment*.
- Always write the name **in full** — **never shorten to "Moment."**
- Cognizant Moment is a **sub-brand of Cognizant**; present it in that relationship, never as a standalone company.

### Logo — files & usage

The brand logo lives in **[brand/logos/](brand/logos/)**. Always use these files exactly as provided.

**There are only two approved logo variants — no others exist and none may be created:**

| File | Use on | Wordmark colour |
| --- | --- | --- |
| [`brand/logos/Main_logo.svg`](brand/logos/Main_logo.svg) | **Light** backgrounds (white, light gray) | Midnight blue `$primary` |
| [`brand/logos/Main_logo_reversed.svg`](brand/logos/Main_logo_reversed.svg) | **Dark** backgrounds (midnight blue, dark imagery) | White `$white` |

Both include the gradient hexagon mark plus the "cognizant moment" wordmark, locked together as one unit. Pick the variant by background so it keeps sufficient contrast (§4).

> ⛔ **Do not modify the logo — ever.** Never alter, recolour, redraw, or restyle **any** part of it: not the **wordmark text** and not the **hexagon mark**. Do not separate the hexagon from the wordmark, use one without the other, change their colours or gradient, re-space, re-typeset, add effects (shadows/outlines/glows), rotate, skew, crop, or otherwise distort. Use only the two SVG files above, unchanged.

**Specs & rules:**
- **Aspect ratio:** `200 × 47` (≈ 4.26:1) — scale by **height**, `width: auto`; never stretch, squash, or distort.
- **Typical sizes:** header/nav ≈ **32px** tall (28–40px); footer 24–32px; hero 48–80px+ (may use `clamp()`).
- **Minimum size:** ~**24px** tall on screen (below this the wordmark loses legibility).
- **Clear space:** keep padding around the logo of at least the hexagon mark's height on all sides; nothing intrudes.
- **Background:** put the light logo only on light backgrounds and the reversed logo only on dark; never on a busy/low-contrast image area.
- **Format:** always the supplied SVG (scales crisply) — do not export to raster, re-trace, or recreate.

```html
<!-- Light background -->
<img src="brand/logos/Main_logo.svg" alt="Cognizant Moment" style="height:2rem;width:auto">

<!-- Dark background (e.g. inside .surface-dark) -->
<img src="brand/logos/Main_logo_reversed.svg" alt="Cognizant Moment" style="height:2rem;width:auto">
```

> Paths below are relative to this brand folder (`DesignLibrary/CognizantMoment/`). From a case-study file in `/projects/{project-name}/`, reach them via `../../DesignLibrary/CognizantMoment/` (e.g. `../../DesignLibrary/CognizantMoment/brand/logos/Main_logo.svg`). Keep the `alt` text as the full name **Cognizant Moment**.

### Positioning

We use **intelligent experience orchestration** to connect data, technology, and operations across entire ecosystems to shape end-to-end experiences. By harnessing the power of AI and enabling personalization, together we delight customers and grow our clients' businesses.

### Shared purpose (with Cognizant)

> **We engineer modern business to improve everyday life.**

As a sub-brand, Cognizant Moment shares Cognizant's overarching purpose — bringing a powerful perspective to envision, design, build, and maintain solutions in deep collaboration with clients, so improvements reach their customers and communities.

### Brand character

**Accessible genius** — we make digital transformation understandable and attainable for all. (This is why *clarity* and *accessibility* run through every design decision below.)

### Personality attributes

Cognizant Moment shares three attributes with Cognizant and adds a distinctive fourth — **Creative** — as its differentiator.

| Attribute | Meaning |
| --- | --- |
| Innovative | Inspiring awe at the transformative potential of technology. |
| Agile | Confident and sure-footed, clarifying the way forward and adapting at every turn. |
| Intuitive | Sharing knowledge that is clear and quick to grasp, easily guiding through complexity. |
| **Creative** *(Cognizant Moment's distinctive +)* | Using ingenuity and insight to bring a fresh perspective and enhance experiences. |

---

## 2. Brand voice & tone

A brand communicates through its imagery, actions, and words. This voice complements the visual identity with a **verbal** one — and it must always be unmistakably **Cognizant Moment**: **clear, inspiring, and purposeful.** Adapt nuance for different audiences and markets, but never lose these principles. Every piece of copy an agent writes must reflect them.

| # | Principle | How we speak | ✅ We say | 🚫 We don't say |
| --- | --- | --- | --- | --- |
| 01 | **Inviting, not intimidating** | Speak *with* people, not *at* them. Confident but never condescending — here to open doors, not close them. | "Let's look at this another way." | "I don't think that will work." |
| 02 | **Fresh, not forced** | Avoid jargon and corporate clichés. Language feels like fresh air — intelligent, elegant, clear. | "What if the real insight comes from our customers?" | "Let's circle back after taking this offline with leadership." |
| 03 | **Warmly global** | Worldly intelligence not rooted in any one culture — open, inclusive, curious. | "There's always another perspective. Let's explore it." | "Here's the one-size-fits-all answer." |
| 04 | **Grounded, yet elevated** | Not here to show off — here to show up, with clarity, insight, and a touch of poetry. A conversation, not a performance. | "Change doesn't have to be loud to be powerful." | "Let's disrupt the paradigm with radical innovation." |
| 05 | **Brave enough to be simple** | Don't overcomplicate. Get to the point with grace — plainly, but never dully. | "What matters here is what people feel." | "Our proprietary framework optimizes emotional engagement." |

**Quick voice checklist for any copy:** written in the Cognizant Moment name rules? · jargon-free? · speaks *with* the reader? · simple and clear? · inspiring without showing off?

---

## 3. Colour palette

Tokens mirror the brand SCSS names. A matching set of CSS custom properties is provided in [§8 Ready-to-use code](#8-ready-to-use-code).

### Base

| Name | Hex | RGB | SCSS token | CSS var |
| --- | --- | --- | --- | --- |
| White | `#FFFFFF` | 255, 255, 255 | `$white` | `--white` |
| Primary (Midnight blue) | `#000048` | 0, 0, 72 | `$primary` | `--primary` |

### Accent 1 — Plum

| Name | Hex | RGB | SCSS token | CSS var |
| --- | --- | --- | --- | --- |
| Dark plum | `#2E308E` | 46, 49, 142 | `$accent1-dark` | `--accent1-dark` |
| Medium plum | `#7373D8` | 115, 115, 216 | `$accent1-medium` | `--accent1-medium` |
| Light plum | `#85A0F9` | 133, 160, 249 | `$accent1-light` | `--accent1-light` |

### Accent 2 — Blue

| Name | Hex | RGB | SCSS token | CSS var |
| --- | --- | --- | --- | --- |
| Dark blue | `#2F78C4` | 47, 120, 196 | `$accent2-dark` | `--accent2-dark` |
| Medium blue | `#6AA2DC` | 106, 162, 220 | `$accent2-medium` | `--accent2-medium` |
| Light blue | `#92BBE6` | 146, 187, 230 | `$accent2-light` | `--accent2-light` |

### Accent 3 — Teal

| Name | Hex | RGB | SCSS token | CSS var |
| --- | --- | --- | --- | --- |
| Dark teal | `#05819B` | 5, 129, 155 | `$accent3-dark` | `--accent3-dark` |
| Medium teal | `#06C7CC` | 6, 199, 204 | `$accent3-medium` | `--accent3-medium` |
| Light teal | `#26EFE9` | 38, 239, 233 | `$accent3-light` | `--accent3-light` |

### Neutral (grays)

| Name | Hex | RGB | SCSS token | CSS var |
| --- | --- | --- | --- | --- |
| Dark gray | `#53565A` | 83, 86, 90 | `$gray-dark` | `--gray-dark` |
| Medium gray | `#97999B` | 151, 153, 155 | `$gray-medium` | `--gray-medium` |
| Light gray | `#D0D0CE` | 208, 208, 206 | `$gray-light` | `--gray-light` |
| Lighter gray | `#E8E8E6` | 232, 232, 230 | `$gray-lighter` | `--gray-lighter` |
| Lightest gray | `#F7F7F5` | 247, 247, 245 | `$gray-lightest` | `--gray-lightest` |

### Highlight

| Name | Hex | RGB | SCSS token | CSS var | Usage |
| --- | --- | --- | --- | --- | --- |
| Highlight red | `#B81F2D` | 184, 31, 45 | `$red` | `--red` | Errors / destructive |
| Highlight yellow | `#E9C71D` | 233, 199, 29 | `$yellow` | `--yellow` | Warnings / attention |
| Highlight green | `#2DB81F` | 45, 184, 31 | `$green` | `--green` | **ONLY** for successful-confirmation alerts |

> **Note on yellow:** the source guideline lists RGB `223, 199, 29` but the hex `#E9C71D` = `233, 199, 29`. **Hex is authoritative** — use `#E9C71D`.

---

## 4. Accessibility & colour contrast

We follow the [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) at **AA**: a contrast value of **4.5 or greater**. Create sufficient contrast between foreground and background to keep text readable.

### Combinations for WHITE backgrounds or text

These colours are accessible against white (as a background, or as text on white):

- Midnight blue (`$primary`)
- Dark teal (`$accent3-dark`) \*
- Dark blue (`$accent2-dark`) \*
- Dark plum (`$accent1-dark`)
- Medium plum (`$accent1-medium`) \*
- Neutral dark gray (`$gray-dark`)
- Highlight red (`$red`)

### Combinations for MIDNIGHT BLUE backgrounds or text

These colours are accessible against midnight blue:

- White (`$white`)
- Dark teal (`$accent3-dark`) \*
- Medium teal (`$accent3-medium`)
- Light teal (`$accent3-light`)
- Medium plum (`$accent1-medium`)
- Light plum (`$accent1-light`)
- Medium blue (`$accent2-medium`)
- Light blue (`$accent2-light`)
- Dark blue (`$accent2-dark`) \*
- Neutral medium gray (`$gray-medium`)
- Neutral light gray (`$gray-light`)
- Highlight yellow (`$yellow`)

> **\* Small-text size caveat:** use **dark teal, medium plum, and dark blue** as text only when it is larger than **19px / 14pt for bold** text, or **24px / 18pt for regular** text.

### Do NOT combine

- ❌ Accent colours from **different** colour groups (e.g. plum on blue).
- ❌ Accent colours **on** accent colours.
- ❌ Neutral colours **on** accent colours.
- ❌ Highlight colours **on** accent or neutral colours.

Keep accent, neutral, and highlight families within their own contrast pairings (against white or midnight blue) as listed above.

---

## 5. Typography

### Font family

**Gellix** — files in [brand/fonts/](brand/fonts/):

| Weight | Value | File | Italic file |
| --- | --- | --- | --- |
| Light | 300 | `Gellix-Light_R.woff2` | `Gellix-LightItalic_R.woff2` |
| Regular | 400 | `Gellix-Regular_R.woff2` | `Gellix-RegularItalic_R.woff2` |
| SemiBold | 600 | `Gellix-SemiBold_R.woff2` | `Gellix-SemiBoldItalic_R.woff2` |

Fallback stack: `'Gellix', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.

### Type scale

Built on a **perfect-fourth ratio of 1.333** with a base size of **20px**. Text is **fluid** — it scales smoothly between a minimum and maximum using `clamp()` rather than fixed breakpoint sizes. The same fluid technique may be applied to padding, margin, and border width.

| Element | Size / line-height | Weight | Default colour |
| --- | --- | --- | --- |
| H1 | 84px / 92.4px | SemiBold (600) | Midnight blue |
| H2 | 63px / 69.3px | SemiBold (600) | Midnight blue |
| H3 | 47px / 56.4px | SemiBold (600) | Midnight blue |
| H4 | 36px / 43.2px | Light (300) | Dark blue \* |
| H5 | 27px / 32.4px | Light (300) | Dark blue \* |
| H6 | 20px / 24px | Light (300) | Dark blue \* |
| Standard paragraph | 20px / 26px | Regular (400) | Midnight blue |
| Small paragraph | 15px / 19.5px | Regular (400) | Midnight blue |
| Tiny paragraph | 12px / 15.6px | Regular (400) | Midnight blue |

> \* The type-scale artwork renders H4–H6 in medium blue for illustration, but the **contrast-adaptive rules below are authoritative**: H4–H6 default to dark blue (`$accent2-dark`) or white depending on background.

### Contrast-adaptive colour rules

Text colour adapts to the **lightness of its background**. The CSS framework should detect the background/foreground contrast and adjust automatically; utility classes may override, but only with caution.

- **H1–H3, paragraphs, lists, and general text:** shift between **midnight blue** (`$primary`) on light backgrounds and **white** (`$white`) on dark backgrounds.
- **H4–H6:** shift between **dark blue** (`$accent2-dark`) and **white**.
- **Links:** shift between **dark blue** (`$accent2-dark`), **midnight blue** (`$primary`), or **light teal** (`$accent3-light`).

### Acceptable text/background surfaces

Text is designed to sit on these background surfaces (foreground colour resolves via the rules above):

- Midnight blue (`$primary`) and White (`$white`)
- Medium plum (`$accent1-medium`), Light plum (`$accent1-light`)
- Dark blue (`$accent2-dark`), Medium blue (`$accent2-medium`), Light blue (`$accent2-light`)
- Dark gray (`$gray-dark`), Medium gray (`$gray-medium`), Light gray (`$gray-light`), Lighter gray (`$gray-lighter`), Lightest gray (`$gray-lightest`)

---

## 6. Components

Components build on the design principle of **clarity**. Colours resolve through the accessibility rules in §4; radii use the tokens defined in §8.

### Atomic Design structure

The system is organised as an **Atomic Design** library so pieces compose predictably:

- **Atoms** — the smallest building blocks (a link, a button, a badge, a stat). Defined in [`brand/css/components.css`](brand/css/components.css).
- **Molecules** — reusable *patterns* that combine atoms + layout into something you drop into a page (a hero, a stats grid, a data table, a footer). Defined in [`brand/css/patterns.css`](brand/css/patterns.css).

Both files are pulled in by the master stylesheet, so one `<link>` still gives you everything (§8). Interactivity — scroll progress, table-of-contents scrollspy, an opt-in subtle parallax utility, count-up, meter fill, and staggered reveals — is driven by [`brand/js/cognizant-moment.js`](brand/js/cognizant-moment.js) through `data-cm-*` attributes, and every animation respects `prefers-reduced-motion`.

> These patterns exist to assemble **interactive, informative case-study playbooks** with generous whitespace and smooth scroll-triggered reveals — without anyone re-styling from scratch. Everything below draws colour, type, weight and radius **only** from the tokens; nothing here introduces an off-palette colour or an ad-hoc font size.

### Section rhythm — how sections hang together

A page should read as **one continuous, coherent flow**, not a stack of boxed-off panels. Compose it as a calm rhythm of **full-bleed surface bands**, and let the change of surface — plus the generous `.cm-section` whitespace — do the separating:

- **Default to white.** Most sections sit on white with midnight type. This is the connective tissue; keep it dominant.
- **Tint sparingly for grouping.** Use `.cm-section--tint` (soft `--gray-lightest`) to gently set a group of related content apart — think one in every few sections, not every other one.
- **Go dark for emphasis moments only.** `.cm-section surface-dark` (midnight + white) is a punctuation mark — a stats row, a feature quote, a CTA. A page usually wants **one or two** dark bands total, not a dark section between every light one. A dark band is a **flat** midnight fill and should be **bookended by white** — never stack two dark sections back-to-back (it produces a muddy tonal seam where they meet). If two dark moments belong together, make them **one** continuous band.
- **Separate with whitespace, not lines.** The `.cm-section` padding and the surface change ARE the separator. Do **not** put a rule between every section; reach for `.cm-section--ruled` (a single hairline) only in the rare case two same-colour sections genuinely need a seam. Keep `.divider` / `<hr>` for *within* content, never as a section separator.
- **Never put a gradient behind section content.** No linear washes, and especially **no radial "glow"/"spotlight" gradient** behind a dark section — that specific effect is off-brand and instantly dates the page. Section backgrounds come **only** from the four flat surfaces — white, `--gray-lightest`, `--gray-lighter`, and midnight (`.surface-dark`). The only gradient in the system is the hero image legibility scrim (§6.14); nothing else.

> **Coherence test:** if you scroll the page and every section looks like a differently-shaded card with a line above it — or a dark band with a glow behind the text and another dark band butting straight into it — it's wrong. It should feel like one editorial document on a white ground where a tinted or midnight band occasionally rises for emphasis and then settles back to white.

**Component map**

| Layer | Component | Class(es) |
| --- | --- | --- |
| Atom | Arrow icons | `.icon-arrow` (+ `--down/--left/--up`) |
| Atom | Links | `.link` (+ `--in-text/--tiny/--small/--large`) |
| Atom | Buttons | `.btn` (+ `--hollow/--small/--large`, `:disabled`) |
| Atom | Subtitle | `.subtitle` |
| Atom | Badge / Tag | `.badge` (+ `--info/--success/--warning/--error`), `.tag` (rectangular section label) |
| Atom | Divider | `.divider` (+ `--vertical`) |
| Atom | Stat | `.stat` (`__value/__label/__delta`) |
| Atom | Meter | `.meter` (`__fill`) |
| Atom | Pull-quote | `.pullquote` (`__text/__cite`) |
| Atom | Avatar | `.avatar` (+ `--sm/--lg`) |
| Molecule | Cards / tiles | `.card` (+ `--overlay`) |
| Molecule | Tabs | `.tabs` / `.tab` |
| Molecule | Accordions | `.accordion` / `.accordion__item` |
| Molecule | Hero | `.hero` (`__image/__overlay/__title`) · `.hero-split` |
| Molecule | Section head | `.section-head` (`__title/__lead`) |
| Molecule | Scroll progress + TOC | `.progress-top`, `.toc` |
| Molecule | Site footer | `.site-footer` |
| Molecule | Stats grid | `.stats` |
| Molecule | Data / comparison table | `.table` (+ `--compare`) |
| Molecule | Testimonial | `.testimonial` |
| Molecule | CTA banner | `.cta` (+ `--center`) |
| Molecule | Figure | `.figure` (`__media/__caption`) |
| Molecule | Quote | `.quote` (`__mark/__text/__cite`) |
| Molecule | Editorial spread | `.spread` (`__main/__title/__label/__body/__aside/__item/__media/__caption`) |

---

## Atoms

### Arrow icons

Components use the triangle arrows in [brand/icons/](brand/icons/): `arrow-right.svg`, `arrow-down.svg`, `arrow-left.svg`, `arrow-up.svg` (each `24×24`). The source files use **`fill="currentColor"`**, so the arrow **takes its host element's text colour** and follows every contrast pairing automatically. Two safe ways to use them:

- **`.icon-arrow` atom (recommended)** — a `<span>` that paints `background-color: currentColor` through a CSS **`mask`**. Works everywhere and always matches the text.
- **Inline SVG or `<use>`** — drop the SVG markup inline; `currentColor` inherits the text colour the same way.

> ⚠️ **Why an arrow sometimes goes invisible.** Because the arrow inherits the **text colour**, it disappears whenever that colour matches the background — exactly like the text would. Two causes: (1) using the arrow as an **`<img>`** — an external image can't inherit `currentColor`, so it renders a fixed colour and vanishes on surfaces that match; use the `.icon-arrow` span or inline SVG instead. (2) placing the arrow in a container that sets a **background but not a contrasting text colour** — the arrow (and the text) then fall back to the default midnight type and vanish on a dark field. **Fix:** set a contrasting `color` on the element (e.g. `color: var(--white)` on a dark surface) — the shipped `.btn` and `.accordion__item` already do this, so their arrows are always visible.

```css
.icon-arrow {
  display: inline-block;
  width: var(--icon-size);
  height: var(--icon-size);
  vertical-align: middle;
  background-color: currentColor;   /* inherits the element's text colour */
  -webkit-mask: url('brand/icons/arrow-right.svg') no-repeat center / contain;
          mask: url('brand/icons/arrow-right.svg') no-repeat center / contain;
}
.icon-arrow--down { -webkit-mask-image: url('brand/icons/arrow-down.svg'); mask-image: url('brand/icons/arrow-down.svg'); }
.icon-arrow--left { -webkit-mask-image: url('brand/icons/arrow-left.svg'); mask-image: url('brand/icons/arrow-left.svg'); }
.icon-arrow--up   { -webkit-mask-image: url('brand/icons/arrow-up.svg');   mask-image: url('brand/icons/arrow-up.svg'); }
```

> Paths below are relative to this brand folder (`DesignLibrary/CognizantMoment/`). From a case-study file in `/projects/{project-name}/`, reach them via `../../DesignLibrary/CognizantMoment/` (e.g. `../../DesignLibrary/CognizantMoment/brand/icons/arrow-right.svg`).

---

### 6.1 Links vs buttons — when to use

Because of the clarity principle, **links are the default choice for most actions.** Reserve buttons for high-visibility, primary actions.

| Use a **link** for… | Use a **button** for… |
| --- | --- |
| "Learn more" on a card | Submitting a form |
| "Read now" in a banner | Launching an app |
| Any secondary / related action | Downloading a whitepaper |
| | Other high-value / critical tasks |

- Buttons have high visibility — **use them sparingly.**
- When multiple primary actions sit close together (or on screen at the same time), use a **hollow button** for the lesser ones so a single filled button stays dominant.

---

### 6.2 Links

| Property | Value |
| --- | --- |
| Colour (light bg) | Dark blue `$accent2-dark` |
| Colour (dark bg) | Light teal `$accent3-light` |
| Underline — block/CTA link | **No** underline (e.g. "Learn more") |
| Underline — link inside `<p>` | **Yes**, underlined to stand out from copy |
| Sizes | Tiny · Small · Standard · Large (follow the type scale, §5) |
| Trailing icon | `arrow-right` on standard/CTA links |

```css
.link {
  color: var(--accent2-dark);
  text-decoration: none;            /* block-level / CTA: no underline */
  font-weight: var(--fw-semibold);
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
}
.link .icon-arrow { width: 0.9em; height: 0.9em; }
.link--in-text { text-decoration: underline; font-weight: inherit; }  /* inside <p> */
.link--tiny     { font-size: var(--fs-tiny); }
.link--small    { font-size: var(--fs-small); }
.link--large    { font-size: var(--fs-h5); }
.surface-dark .link { color: var(--accent3-light); }
```

```html
<!-- Block-level CTA (no underline, with arrow) -->
<a class="link" href="#">Learn more <span class="icon-arrow" aria-hidden="true"></span></a>

<!-- Link inside body copy (underlined) -->
<p>Read the <a class="link link--in-text" href="#">full report</a> for details.</p>
```

---

### 6.3 Buttons

| Variant | Background | Text / border | Notes |
| --- | --- | --- | --- |
| Filled (default) | Light teal `$accent3-light` | Midnight blue `$primary` text | — |
| Hollow (on light) | Transparent | Dark blue `$accent2-dark` border + text | For secondary primary actions |
| Hollow (on dark) | Transparent | Light teal `$accent3-light` border + text | Use on midnight-blue surfaces |

- Text size **20px** (`--fs-body`). Shape is a **pill** (`--radius-button`). Trailing `arrow-right` icon.

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  font-family: var(--font-sans);
  font-size: var(--fs-body);           /* 20px */
  font-weight: var(--fw-semibold);
  line-height: 1;
  padding: 0.6em 1.4em;
  border: 2px solid transparent;
  border-radius: var(--radius-button); /* pill */
  background: var(--accent3-light);
  color: var(--primary);
  cursor: pointer;
}
.btn--hollow {
  background: transparent;
  border-color: var(--accent2-dark);
  color: var(--accent2-dark);
}
.surface-dark .btn--hollow {
  border-color: var(--accent3-light);
  color: var(--accent3-light);
}
```

```html
<button class="btn">Default button: 20px <span class="icon-arrow" aria-hidden="true"></span></button>
<button class="btn btn--hollow">Default button: 20px <span class="icon-arrow" aria-hidden="true"></span></button>
```

**Sizes & state:** `.btn--small` (drops text to `--fs-small`) and `.btn--large` (keeps the 20px text, widens the footprint) for hero CTAs; `:disabled` or `.is-disabled` dims to 45% and blocks pointer events. Text stays on the type scale — larger just means more generous padding.

---

### 6.4 Subtitle

A short supporting line that sits **below** the title (never a floating label above it). Write the **title in Title Case** and the **subtitle in sentence case**; the subtitle renders muted, Light-weight, with an automatic leading en-dash.

```html
<h1>Human+</h1>
<p class="subtitle">A new age of identity</p>
```

> **Section labelling:** to tag a section (e.g. "Trend 4"), use the rectangular **`.tag`** badge (§6.5) above the title — it contrasts with the background on both light and dark surfaces. There is no separate decorative "kicker."

---

### 6.5 Badge & Tag

- **`.badge`** — a small status pill. Neutral by default; semantic variants add a light tint and a coloured status dot while keeping text at an AA-safe colour: `.badge--info` · `.badge--success` · `.badge--warning` · `.badge--error`.
- **`.tag`** — a square, uppercase category label (the generalised card tag). Midnight-blue on light, inverts on `.surface-dark`.

```html
<span class="badge">Draft</span>
<span class="badge badge--success">Live</span>
<span class="badge badge--warning">Beta</span>
<span class="tag">Life sciences</span>
```

---

### 6.6 Divider

A hairline rule for separating content. `.divider--vertical` splits inline items (e.g. inside a `.cluster`).

```html
<hr class="divider">
```

---

### 6.7 Stat

A big-number metric. `.stat__value` is H2-scale SemiBold with tabular figures; `.stat__label` is the caption; optional `.stat__delta` (neutral gray, with an arrow icon for direction — never a semantic colour). Add `data-cm-count` to animate a count-up on scroll.

```html
<div class="stat">
  <div class="stat__value" data-cm-count="87" data-cm-count-suffix="%">0</div>
  <div class="stat__label">of leaders say experience is the differentiator</div>
</div>
```

---

### 6.8 Meter

A slim progress bar. Give the wrapper `data-cm-meter="0–100"`; the fill animates to that width when it scrolls into view (renders instantly under reduced motion). Teal on light, light-teal on dark.

```html
<span class="meter" data-cm-meter="72"><span class="meter__fill"></span></span>
```

---

### 6.9 Pull-quote

An oversized, Light-weight quotation (H3 scale). `.pullquote__cite` attributes it. Place inside `.surface-dark` for a full-bleed dark moment.

```html
<blockquote class="pullquote">
  <p class="pullquote__text">Change doesn't have to be loud to be powerful.</p>
  <cite class="pullquote__cite">— Cognizant Moment</cite>
</blockquote>
```

---

### 6.10 Avatar

A round image for testimonials / authorship. Sizes `.avatar--sm` / `.avatar--lg`.

```html
<img class="avatar" src="assets/author.jpg" alt="Jordan Lee">
```

---

## Molecules

Composed patterns from [`brand/css/patterns.css`](brand/css/patterns.css). Drop them into a page and fill with content — they already carry the brand's spacing, colour, and motion.

### 6.11 Tabs

| Property | Value |
| --- | --- |
| Active tab | Dark blue `$accent2-dark` text + top indicator, white background |
| Inactive tab | 20% tint of Accent 2 Light background |
| Rounding | **Yes** — `0.5em` (`--radius-global`) |

```css
.tabs { display: inline-flex; border-radius: var(--radius-global); overflow: hidden; }
.tab {
  font-size: var(--fs-body);
  padding: 0.75em 1.5em;
  border: 0;
  cursor: pointer;
  background: rgba(146, 187, 230, 0.2);  /* 20% of accent2-light (#92BBE6) */
  color: var(--primary);
}
.tab--active {
  background: var(--white);
  color: var(--accent2-dark);
  box-shadow: inset 0 3px 0 var(--accent2-dark);  /* top indicator */
  font-weight: var(--fw-semibold);
}
```

```html
<div class="tabs" role="tablist">
  <button class="tab tab--active" role="tab" aria-selected="true">Active tab</button>
  <button class="tab" role="tab" aria-selected="false">Inactive tab</button>
</div>
```

---

### 6.12 Accordions

| Property | Value |
| --- | --- |
| Background | Blends from midnight blue `$primary` → dark blue `$accent2-dark` down the stack |
| Text | White `$white` |
| Icon | Trailing `arrow-down` |
| Rounding | **Yes** — `0.5em` (`--radius-global`) |

```css
.accordion { border-radius: var(--radius-global); overflow: hidden; }
.accordion__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.25em;
  color: var(--white);
  font-size: var(--fs-h6);
  cursor: pointer;
}
/* Blend across the stack: primary → accent2-dark */
.accordion__item:nth-child(1) { background: var(--primary); }
.accordion__item:nth-child(2) { background: #1B3A86; }   /* midpoint */
.accordion__item:nth-child(3) { background: var(--accent2-dark); }
.accordion__item .icon-arrow { /* uses arrow-down */ }
```

```html
<div class="accordion">
  <div class="accordion__item">Accordion 01 <span class="icon-arrow icon-arrow--down" aria-hidden="true"></span></div>
  <div class="accordion__item">Accordion 02 <span class="icon-arrow icon-arrow--down" aria-hidden="true"></span></div>
  <div class="accordion__item">Accordion 03 <span class="icon-arrow icon-arrow--down" aria-hidden="true"></span></div>
</div>
```

---

### 6.13 Cards / tiles

| Property | Value |
| --- | --- |
| Rounding | **No** — square corners (`--radius-card: 0`) |
| Structure | Image → eyebrow/category (uppercase, tiny) → heading → body → "Learn more"/"Read more" link |
| Images | Follow the photography guidance in the Visual Identity Guidelines |
| Overlay variant | Full-bleed image with a category tag (top-left) and a "View" affordance over the image |

```css
.card {
  border-radius: var(--radius-card);   /* 0 — square */
  background: var(--white);
  overflow: hidden;
}
.card__media { display: block; width: 100%; aspect-ratio: 3 / 2; object-fit: cover; }
.card__body { padding: 1.25rem; }
.card__eyebrow {
  font-size: var(--fs-tiny);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gray-dark);
}
.card__title { font-size: var(--fs-h5); color: var(--accent2-dark); margin: 0.25em 0 0.5em; }

/* Overlay variant */
.card--overlay { position: relative; color: var(--white); }
.card--overlay .card__tag {
  position: absolute; top: 0; left: 0;
  background: var(--primary); color: var(--white);
  font-size: var(--fs-tiny); padding: 0.4em 0.8em;
}
.card--overlay .card__overlay-text { position: absolute; inset: auto 1rem 1rem; }
```

```html
<article class="card">
  <img class="card__media" src="..." alt="">
  <div class="card__body">
    <p class="card__eyebrow">Environment, Social, Governance</p>
    <h3 class="card__title">Close the gap between ESG commitments and action</h3>
    <p>90% of decision makers agree you can't be a modern business without a cohesive ESG strategy…</p>
    <a class="link" href="#">Learn more <span class="icon-arrow" aria-hidden="true"></span></a>
  </div>
</article>
```

---

### 6.14 Hero

The playbook opener: a **Title-Case one-line statement**, normally set **over a hero photograph**. The one-liner is **vertically centred in the band but left-aligned**: the hero carries a hero-height `min-height` and centres the title + subtitle on the vertical axis while the copy hugs the left edge, so it reads as a deliberate opener no matter the copy length. The image goes in a `.hero__image` slot (from the project's own `assets/`) and fills the frame, and a `.hero__overlay` navy scrim sits over it so white copy always clears **WCAG AA** — the scrim is calibrated so that even a fully white image keeps the title and subtitle legible. Keep **no label above the title** — just the title and a sentence-case `.subtitle` below it. Wrap the copy in `[data-cm-stagger]` with `.reveal` for a staggered load-in. With no image the hero falls back to a solid field — pair with `.surface-dark` for midnight blue + white, or leave on white for midnight type.

The hero is a **full-bleed band** — don't add `.cm-container` to it (that would cap the band and break the centring); it brings its own inline padding, and the title/subtitle keep their own measure.

```html
<header class="hero surface-dark" data-cm-stagger>
  <img class="hero__image" src="assets/hero.jpg" alt="">
  <div class="hero__overlay" aria-hidden="true"></div>
  <h1 class="hero__title reveal">Human+</h1>
  <p class="subtitle reveal">A new age of identity</p>
</header>
```

**A richer building-block variant is available for section openers with imagery:**

**Split (`.hero-split`)** — image on one side, navy text panel on the other. The image side layers a **background image** and a smaller **inset foreground image** centred on top (the `#3D3D3D`/`#D9D9D9` masks in the source design are these two image slots); the foreground stays centred on both axes and sized as a percentage of the media box, so it holds its position responsively. Add `data-cm-parallax` (e.g. `0.06`) to the foreground for a **subtle scroll parallax** — the drift composes with the centring, so it sits dead-centre when the section is in view and only drifts a little as it scrolls past (and it's disabled under `prefers-reduced-motion`). The panel carries a `.tag` badge, title, `.subtitle`, and body copy. Project images go in the project's own `assets/`.

```html
<section class="hero-split">
  <div class="hero-split__media">
    <img class="hero-split__back" src="assets/scene.jpg" alt="">
    <img class="hero-split__front" src="assets/device.jpg" alt="" data-cm-parallax="0.06">
  </div>
  <div class="hero-split__panel">
    <span class="tag tag--lg">Trend 4</span>
    <h2 class="hero-split__title">Life Beyond the Screen</h2>
    <p class="subtitle">Invisible tech is on its way</p>
    <p class="hero-split__body">We're glimpsing a shift in personal computing…</p>
  </div>
</section>
```

---

### 6.15 Section head

A rectangular **`.tag` badge + Title-Case heading + sentence-case `.subtitle`**. The badge (e.g. "Trend 4") contrasts with the background; use the optional `.section-head__lead` instead of the subtitle when a longer intro is needed.

```html
<header class="section-head">
  <span class="tag">Trend 4</span>
  <h2 class="section-head__title">Life Beyond the Screen</h2>
  <p class="subtitle">Invisible tech is on its way</p>
</header>
```

---

### 6.16 Scroll progress + Table of contents

- **`.progress-top`** — a fixed reading-progress bar; the JS enhancer scales `.progress-top__bar` as the page scrolls (`data-cm-progress`).
- **`.toc`** — a sticky, in-page nav; the enhancer adds `.is-active` to the link for the section currently in view (`data-cm-toc`). Pair with the `.split--toc` layout helper.

```html
<div class="progress-top" data-cm-progress aria-hidden="true"><span class="progress-top__bar"></span></div>

<div class="split--toc">
  <nav class="toc" data-cm-toc aria-label="Contents">
    <a href="#opportunity">The opportunity</a>
    <a href="#approach">The approach</a>
    <a href="#impact">The impact</a>
  </nav>
  <div><!-- sections with matching ids --></div>
</div>
```

---

### 6.17 Site footer

A minimal closing footer on midnight blue: the **reversed** logo and a fine-print copyright note, sitting on one line (they wrap to stack on narrow widths). No link columns — just brand mark and copyright.

```html
<footer class="site-footer">
  <div class="cm-container site-footer__bar">
    <img class="site-footer__logo" src="../../DesignLibrary/CognizantMoment/brand/logos/Main_logo_reversed.svg" alt="Cognizant Moment">
    <p class="site-footer__note">© Cognizant Moment — a sub-brand of Cognizant.</p>
  </div>
</footer>
```

---

### 6.18 Stats grid

A responsive grid of `.stat` atoms for a row of headline metrics (count-up on scroll via `data-cm-count`).

```html
<div class="stats">
  <div class="stat"><div class="stat__value" data-cm-count="3" data-cm-count-suffix="×">0</div><div class="stat__label">faster to launch</div></div>
  <div class="stat"><div class="stat__value" data-cm-count="87" data-cm-count-suffix="%">0</div><div class="stat__label">adoption in 6 months</div></div>
</div>
```

---

### 6.19 Data / comparison table

A clean, hairline-ruled table for evidence. `.table--compare` centres the comparison columns and keeps the first column left-aligned. Use `scope` on header cells for accessibility. On a `.surface-dark` field the text re-colours automatically for WCAG AA — body cells go white, the header eyebrow and caption lift to light gray (never the light-mode dark gray, which would be unreadable on midnight).

```html
<table class="table table--compare">
  <thead><tr><th scope="col">Capability</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
  <tbody>
    <tr><th scope="row">Time to insight</th><td>6 weeks</td><td>2 days</td></tr>
  </tbody>
</table>
```

---

### 6.20 Testimonial

A client quote with avatar and attribution.

```html
<figure class="testimonial">
  <blockquote class="testimonial__quote">They made a complex transformation feel effortless.</blockquote>
  <figcaption class="testimonial__author">
    <img class="avatar" src="assets/client.jpg" alt="">
    <span><span class="testimonial__name">Jordan Lee</span><br><span class="testimonial__role">VP Experience, Acme</span></span>
  </figcaption>
</figure>
```

---

### 6.21 CTA banner

A closing call-to-action on midnight blue. Buttons inside resolve to their dark-surface treatment automatically; `.cta--center` centres the content.

```html
<section class="cta cta--center">
  <h2 class="cta__title">Let's build your moment.</h2>
  <p>Start a conversation with the Cognizant Moment team.</p>
  <a class="btn" href="#">Get in touch <span class="icon-arrow" aria-hidden="true"></span></a>
</section>
```

---

### 6.22 Figure

A media block with caption. Add `.reveal--clip` to wipe the image in from the bottom as it scrolls into view.

```html
<figure class="figure">
  <img class="figure__media reveal reveal--clip" src="assets/diagram.svg" alt="Journey map">
  <figcaption class="figure__caption">Fig 1. The end-to-end experience journey.</figcaption>
</figure>
```

---

### 6.23 Quote

A **feature quote** for spotlighting a single message: an oversized decorative opening mark, a large SemiBold statement, and an attribution. Best on `.surface-dark` for a full midnight-blue moment (per the reference design); also works on a light surface. The mark's `–` prefix on the citation is automatic. The mark is decorative (`aria-hidden`); the real quotation lives in `<blockquote>`. The block adds **no horizontal padding of its own** and fills its container — give it any inset via the wrapper (a `cm-section`/card), and the statement flows to that width with only a generous readability cap, so it never packs into a tall, narrow column.

```html
<figure class="quote surface-dark cm-section">
  <span class="quote__mark" aria-hidden="true">“</span>
  <div class="quote__body">
    <blockquote class="quote__text">There is no such thing as ‘online vs. real life’ — all life is real.</blockquote>
    <cite class="quote__cite">Matt Klein, on the Digital Dualism Fallacy</cite>
  </div>
</figure>
```

---

### 6.24 Editorial spread

A **two-column article spread** for a trend/story page: an **article column** (a display `.spread__title`, a navy `.spread__label`, and prose) beside an **aside column** of image + caption rows. This is a **wide, full-bleed editorial layout** — it should span the section, not sit in a narrow measure. **Do NOT wrap it in the default `.cm-container`** (1080px); that leaves big empty margins left and right and squeezes both columns. Use **`.cm-container--wide`** at minimum, or let it fill a full-bleed `.cm-section` with only that section's own inline padding. It stays fully responsive: the two columns collapse to one on a narrow page, and **each image+caption row stacks (image over caption, full width) based on its own width** — so the caption is never squeezed into a tall, packed column when space is tight.

**Images are placeholders.** Each `.spread__media` shows a defined neutral box with an "image" hint until you drop an `<img>` inside, which then fills the frame. Put the `<img>` *inside* `.spread__media` and use a path relative to your `index.html` — e.g. `assets/no-phone.jpg` for an image in the project's own `assets/`. (If an image doesn't appear, the placeholder box stays visible — that's usually a wrong/relative path, not a layout bug.) In the article body, use `<strong>` for the lead sentence and `.spread__subhead` for an inline subheading. The **images are not animation-gated — they always render immediately.** If you want a subtle load-in for the *copy*, wrap the block in `[data-cm-stagger]` and add `.reveal` to the text pieces (headline, label, body, captions); leave `.spread__media` without any reveal class so images never depend on the script to appear.

```html
<!-- Give it width: a full-bleed section + the WIDE container (not .cm-container) -->
<section class="cm-section">
 <div class="cm-container--wide">
  <article class="spread" data-cm-stagger>
  <div class="spread__main">
    <header class="spread__header">
      <h1 class="spread__title reveal">Screenless Futures</h1>
      <span class="spread__label reveal">Looking back up</span>
    </header>
    <div class="spread__body reveal">
      <p><strong>Advances in AI may allow us to finally let go of the smartphone.</strong> A new range of screenless devices…</p>
      <p class="spread__subhead">Why it matters</p>
      <p>Screenless tech represents a fundamental change in how we interact with the digital world…</p>
    </div>
  </div>
  <div class="spread__aside">
    <div class="spread__item">
      <div class="spread__media"><img src="assets/no-phone.jpg" alt=""></div>
      <div class="spread__caption reveal">
        <h3 class="spread__caption-title">No phone necessary</h3>
        <p>Nike founder Phil Knight was the only one content to enjoy that winning moment without his phone.</p>
      </div>
    </div>
    <!-- more .spread__item rows -->
  </div>
  </article>
 </div>
</section>
```

---

## 7. Quick reference

- **Default page:** white background, midnight-blue text.
- **Default dark section:** midnight-blue background, white text.
- **Primary brand colour:** midnight blue `#000048`.
- **Success only:** highlight green `#2DB81F`.
- **Never** mix accent families, or place accent/neutral/highlight colours on accent/neutral backgrounds (see §4).
- **Section rhythm:** compose the page as full-bleed bands — mostly white, a `.cm-section--tint` for grouping, one or two **flat** `.surface-dark` bands for emphasis (bookended by white, never two dark bands stacked). Separate sections with whitespace, **not** lines; **never** a gradient — and never a radial glow — behind section content. See *Section rhythm* in §6.

---

## 8. Ready-to-use code

The design system is implemented as **linkable stylesheets in [brand/css/](brand/css/)** — the canonical implementation of this spec. **Link them; don't re-paste CSS.**

### Drop-in for any prototype or case study

```html
<link rel="stylesheet" href="brand/css/cognizant-moment.css">
<script src="brand/js/cognizant-moment.js" defer></script>
```

- One `<link>` pulls the whole system — it `@import`s tokens → base → components → patterns → utilities in order (`components.css` = atoms, `patterns.css` = molecules).
- The `<script>` (optional but recommended) makes tabs, accordions, `data-cm-copy`, and the playbook molecules (scroll progress, TOC scrollspy, opt-in parallax, count-up, meter fill, staggered reveal) interactive.
- **Paths self-resolve:** fonts and icon masks are referenced relative to the CSS files, so the system works wherever your HTML lives — you only ever fix the one `href`. From a case-study folder like `/projects/{project-name}/`, use `../../DesignLibrary/CognizantMoment/brand/css/cognizant-moment.css`.

### Files

| File | Purpose |
| --- | --- |
| [`brand/css/cognizant-moment.css`](brand/css/cognizant-moment.css) | **Master — link this one.** `@import`s the five below. |
| [`brand/css/tokens.css`](brand/css/tokens.css) | `@font-face` (Gellix) + every `:root` custom property. |
| [`brand/css/base.css`](brand/css/base.css) | Element defaults, contrast-adaptive rules, `.surface-dark`. |
| [`brand/css/components.css`](brand/css/components.css) | **Atoms:** `.icon-arrow`, `.link`, `.btn`, `.subtitle`, `.badge`/`.tag`, `.divider`, `.stat`, `.meter`, `.pullquote`, `.avatar`, plus `.tabs`/`.accordion`/`.card`. |
| [`brand/css/patterns.css`](brand/css/patterns.css) | **Molecules:** `.hero`, `.section-head`, `.progress-top`, `.toc`, `.site-footer`, `.stats`, `.table`, `.testimonial`, `.cta`, `.figure`, `.quote`. |
| [`brand/css/utilities.css`](brand/css/utilities.css) | Layout/content helpers (`.cm-container`, `.grid`, `.split`, `.eyebrow`, text/bg utilities, `.reveal`/`.reveal--clip` + stagger, spacing helpers). |
| [`brand/js/cognizant-moment.js`](brand/js/cognizant-moment.js) | Optional enhancer for tabs / accordions / copy + the playbook molecules (markup examples in the file header). |

### Token quick-reference

All values live in `tokens.css` as CSS custom properties (mirroring the SCSS names). The most-used:
- **Colours:** `--primary` (`#000048`), `--accent1/2/3-{dark|medium|light}`, `--gray-{dark…lightest}`, `--red`, `--yellow`, `--green`.
- **Type:** `--font-sans`, `--fw-{light|regular|semibold}`, `--fs-{h1…h6|body|small|tiny}` (fluid `clamp()`).
- **Spacing:** `--space-{3xs|2xs|xs|sm|md|lg|xl|2xl|3xl}` — a fluid `clamp()` scale for consistent, generous whitespace.
- **Shape, motion & elevation:** `--radius-{global|button|card}`, `--icon-size`, `--ease-out`, `--ease-in-out`, `--dur-{fast|base|slow}` (durations, keep UI < 300ms), `--shadow-soft` (the one restrained elevation).

> To change a brand value everywhere, edit `tokens.css` — every prototype that links the master updates automatically.

### Worked example

[`brand/design-system.html`](brand/design-system.html) is a live, working implementation of this entire spec — it links `css/cognizant-moment.css` + `js/cognizant-moment.js` exactly as a case study would (just with `css/…` paths since it sits inside `/brand`). Open it to see every token, component, and interaction rendered; copy its patterns when building new pages.

---

## 9. How AI agents should use this

Read this file **before** building any screen, component, prototype, **or writing any copy**, and apply it as follows:

**Brand & voice (§1–§2)**

1. **Name it correctly.** Always write **Cognizant Moment** in full with initial caps — never "moment," never shortened to "Moment," and always framed as a sub-brand of Cognizant.
2. **Write in the Cognizant Moment voice:** inviting (not intimidating), fresh (not forced/jargon-y), warmly global, grounded yet elevated, and brave enough to be simple. Run copy against the §2 voice checklist and avoid the "We don't say" patterns.
3. **Lead with the brand character** — *accessible genius*: make things clear and attainable, reflecting the Innovative / Agile / Intuitive / **Creative** personality.
4. **Use the real logo files** from [brand/logos/](brand/logos/) (§1) — only two variants exist: `Main_logo.svg` on light backgrounds, `Main_logo_reversed.svg` on dark. **Never modify the logo** (wordmark or hexagon), separate its parts, recolour, or recreate it; scale by height only; `alt="Cognizant Moment"`.

**Visual system (§3–§8)**

5. **Link the brand stylesheets, don't re-author them.** For any prototype or case study, add `brand/css/cognizant-moment.css` (+ `brand/js/cognizant-moment.js`) per §8 and build on its tokens/classes; only add page-specific CSS on top. Never introduce off-palette colours or ad-hoc font sizes — pull from the CSS custom properties / SCSS names in `tokens.css`.
6. **Default text colour:** midnight blue on light backgrounds, white on dark backgrounds. Follow the contrast-adaptive rules (§5) for headings and links.
7. **Respect the pairings.** Only combine colours per §4 (against white or midnight blue). Never mix accent families, or place accent/neutral/highlight colours on accent/neutral backgrounds.
8. **Green is success-only.** Reserve highlight green for successful-confirmation alerts. Use red for errors and yellow for warnings, and only within their listed contrast pairings.
9. **Honour the small-text caveat.** Dark teal, medium plum, and dark blue as text require larger sizes (>19px/14pt bold, >24px/18pt regular).
10. **Typography:** Gellix only — SemiBold for H1–H3, Light for H4–H6, Regular for body. Keep text fluid (`clamp()`), never fixed per breakpoint.
11. **Meet WCAG AA (≥ 4.5:1).** If a needed combination is not listed in §4, it is likely non-compliant — choose a listed alternative rather than inventing one.
12. **Prefer links over buttons** (§6). Reserve buttons for primary/critical actions and use them sparingly; when multiple primaries sit close together, make the lesser ones **hollow** buttons.
13. **Respect component shapes:** buttons are **pill**-shaped (`--radius-button`), tabs and accordions use **`0.5em`** (`--radius-global`), and cards/tiles have **square** corners (`--radius-card: 0`).
14. **Recolour arrows via the `mask` helper** (§6) so they inherit the token colour — never rely on the SVG files' hardcoded black fill.
