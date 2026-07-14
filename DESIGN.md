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

> Paths are repo-root-relative. From a case-study file in `/projects/{project-name}/`, prefix with `../../` (e.g. `../../brand/logos/Main_logo.svg`). Keep the `alt` text as the full name **Cognizant Moment**.

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

Basic components that build on the design principle of **clarity**. Colours resolve through the accessibility rules in §4; radii use the tokens defined in §8.

### Arrow icons

Components use the triangle arrows in [brand/icons/](brand/icons/): `arrow-right.svg`, `arrow-down.svg`, `arrow-left.svg`, `arrow-up.svg` (each `24×24`). The source files are hardcoded `fill="black"`, so recolour them with a CSS **`mask`** — the arrow then takes the element's own text colour (`currentColor`) and follows every contrast pairing automatically. Never rely on the raw black fill.

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

> Paths are repo-root-relative. From a case-study file in `/projects/{project-name}/`, prefix with `../../` (e.g. `../../brand/icons/arrow-right.svg`).

---

### 4.1 Links vs buttons — when to use

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

### 4.2 Links

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

### 4.3 Buttons

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

---

### 4.4 Tabs

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

### 4.5 Accordions

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

### 4.6 Cards / tiles

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

## 7. Quick reference

- **Default page:** white background, midnight-blue text.
- **Default dark section:** midnight-blue background, white text.
- **Primary brand colour:** midnight blue `#000048`.
- **Success only:** highlight green `#2DB81F`.
- **Never** mix accent families, or place accent/neutral/highlight colours on accent/neutral backgrounds (see §4).

---

## 8. Ready-to-use code

The design system is implemented as **linkable stylesheets in [brand/css/](brand/css/)** — the canonical implementation of this spec. **Link them; don't re-paste CSS.**

### Drop-in for any prototype or case study

```html
<link rel="stylesheet" href="brand/css/cognizant-moment.css">
<script src="brand/js/cognizant-moment.js" defer></script>
```

- One `<link>` pulls the whole system — it `@import`s tokens → base → components → utilities in order.
- The `<script>` (optional but recommended) makes tabs, accordions, and `data-cm-copy` interactive.
- **Paths self-resolve:** fonts and icon masks are referenced relative to the CSS files, so the system works wherever your HTML lives — you only ever fix the one `href`. From a case-study folder like `/projects/{project-name}/`, use `../../brand/css/cognizant-moment.css`.

### Files

| File | Purpose |
| --- | --- |
| [`brand/css/cognizant-moment.css`](brand/css/cognizant-moment.css) | **Master — link this one.** `@import`s the four below. |
| [`brand/css/tokens.css`](brand/css/tokens.css) | `@font-face` (Gellix) + every `:root` custom property. |
| [`brand/css/base.css`](brand/css/base.css) | Element defaults, contrast-adaptive rules, `.surface-dark`. |
| [`brand/css/components.css`](brand/css/components.css) | `.link`, `.btn`, `.tabs`, `.accordion`, `.card`, `.icon-arrow`. |
| [`brand/css/utilities.css`](brand/css/utilities.css) | Layout/content helpers (`.cm-container`, `.grid`, `.eyebrow`, text/bg utilities, `.reveal`). |
| [`brand/js/cognizant-moment.js`](brand/js/cognizant-moment.js) | Optional enhancer for tabs / accordions / copy (markup examples in the file header). |

### Token quick-reference

All values live in `tokens.css` as CSS custom properties (mirroring the SCSS names). The most-used:
- **Colours:** `--primary` (`#000048`), `--accent1/2/3-{dark|medium|light}`, `--gray-{dark…lightest}`, `--red`, `--yellow`, `--green`.
- **Type:** `--font-sans`, `--fw-{light|regular|semibold}`, `--fs-{h1…h6|body|small|tiny}` (fluid `clamp()`).
- **Shape & motion:** `--radius-{global|button|card}`, `--icon-size`, `--ease-out`, `--ease-in-out`.

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
