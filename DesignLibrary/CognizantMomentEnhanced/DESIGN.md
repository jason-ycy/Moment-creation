# Cognizant Moment Enhanced — Style Reference

> Dark navy void, a single line of light — the message arrives, and everything else steps back.

**Theme:** Dark navy

Cognizant Moment Enhanced borrows its grammar from editorial publishing rather than enterprise software: full-bleed photography carries the emotional register, while the interface chrome is reduced to almost nothing — a thin nav label, a short blue underline, a headline. Typography does not climb gradually; it lives at two extremes, a whisper-quiet 12px navigation layer and a room-filling 64–100px display layer, with almost nothing built in between. Color is used as punctuation, not decoration: dark navy holds the canvas, white carries the words, and bright blue is spent sparingly, only on the keyword that should catch the eye. The guiding principle is that the system prefers silence over information density — every screen says one thing at a time, and the layout's job is to get out of the way of that one thing. Innovation, agility, intuition, and creativity are expressed not through visual noise but through restraint: the fewer decisions the interface visibly makes, the more confident the moment feels.

## Logo — files & usage

The brand logo lives in **[brand/logos/](brand/logos/)**. Always use these files exactly as provided — never modify, recolour, redraw, or restyle any part of it (wordmark or hexagon mark), never separate the hexagon from the wordmark, and never recreate it in CSS/SVG.

**There are only two approved logo variants — no others exist and none may be created:**

| File | Use on | Notes |
|-|-|-|
| [`brand/logos/Main_logo.svg`](brand/logos/Main_logo.svg) | **Light** backgrounds | Standard-colour logo |
| [`brand/logos/Main_logo_reversed.svg`](brand/logos/Main_logo_reversed.svg) | **Dark** backgrounds (e.g. `--color-navy`) | White/reversed logo — this is the variant used in the Top Nav Bar and any other component on the dark navy canvas |

> Paths above are relative to this brand folder (`DesignLibrary/CognizantMomentEnhanced/`). From a project file in `/projects/{project-name}/`, reach them via `../../DesignLibrary/CognizantMomentEnhanced/` (e.g. `../../DesignLibrary/CognizantMomentEnhanced/brand/logos/Main_logo_reversed.svg`). Keep `alt` text as the full name **Cognizant Moment**. Scale by height only; do not stretch or distort the aspect ratio.

## Tokens — Colors

|Name|Value|Token|Role|
|-|-|-|-|
|Dark Navy|`#00001F`|`--color-navy`|Primary background/canvas colour; used to make important moments stand out by surrounding white text; also the fill for badges and pagination controls|
|Bright Blue|`#1777FC`|`--color-blue`|Reserved exclusively for highlighting individual keywords within a headline or body copy — used intentionally and sparingly, never as a background fill|
|Lavender|`#D3BDFF`|`--color-lavender`|Badge fill (secondary/alternate badge treatment)|
|White|`#FFFFFF`|`--color-white`|Primary text colour, navigation labels, and secondary background colour|

*Bright blue and lavender are never applied as large solid backgrounds — they are accent/badge colors only, applied intentionally to small surfaces or individual words. Dark navy is the only color licensed to carry full-bleed background real estate.*

## Tokens — Typography

### Gellix — A geometric grotesque with a warm, confident character; the sole typeface across the system, doing everything from a whisper-quiet nav label to a room-filling display headline · `--font-gellix`

* **Substitute:** If Gellix is unavailable, use a geometric sans with similar warmth and even stroke weight — e.g. General Sans, Aeonik, or Inter — ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif as final fallback
* **Weights:** 700 (display/headline, bold), 380 (nav label)
* **Sizes:** 12px, 16px, 32px, 48px, 64px, 79px, 100px
* **Line height:** Tight at display scale (1.08–1.2), relaxed at body/caption scale (1.3–1.43)
* **Letter spacing:** Positive tracking (+0.6px) on the 12px uppercase nav label, staying positive through body (0.8px) and subheading (1px); tracking then flips and grows increasingly negative from heading-sm upward — from ‑1.18px at heading-sm up to ‑2.65px at heading-lg
* **Role:** Gellix is the only typeface permitted anywhere in the system — from the smallest uppercase nav label to the largest declarative headline — so all hierarchy is built through size, weight, and tracking rather than typeface switching

**Font files** live in **[brand/fonts/](brand/fonts/)** — declare each with `@font-face` and reference via `--font-gellix`, never load Gellix from an external CDN:

| Weight | Value | Roman | Italic |
|-|-|-|-|
| Light | 300 | [`Gellix-Light_R.woff2`](brand/fonts/Gellix-Light_R.woff2) | [`Gellix-LightItalic_R.woff2`](brand/fonts/Gellix-LightItalic_R.woff2) |
| Regular | 400 | [`Gellix-Regular_R.woff2`](brand/fonts/Gellix-Regular_R.woff2) | [`Gellix-RegularItalic_R.woff2`](brand/fonts/Gellix-RegularItalic_R.woff2) |
| SemiBold | 600 | [`Gellix-SemiBold_R.woff2`](brand/fonts/Gellix-SemiBold_R.woff2) | [`Gellix-SemiBoldItalic_R.woff2`](brand/fonts/Gellix-SemiBoldItalic_R.woff2) |

> Note: the system's two named weights (380 nav-label, 700 display/headline bold) do not have a matching `.woff2` file above — nearest available weight is SemiBold (600). Load fonts via `font-weight: 380 / 700` on the `@font-face` declaration using the closest supplied file, or flag with the user whether dedicated Regular-Bold/Nav weight files should be added to `brand/fonts/`.

> Paths above are relative to this brand folder (`DesignLibrary/CognizantMomentEnhanced/`). From a project file in `/projects/{project-name}/`, reach them via `../../DesignLibrary/CognizantMomentEnhanced/` (e.g. `../../DesignLibrary/CognizantMomentEnhanced/brand/fonts/Gellix-Regular_R.woff2`).

### Type Scale

|Role|Size|Line Height|Letter Spacing|Token|
|-|-|-|-|-|
|caption|12px|1.3|0.6px|`--text-caption`|
|body-sm|TBD|TBD|TBD|`--text-body-sm`|
|body|16px|1.43|0.8px|`--text-body`|
|subheading|32px|1.2|1px|`--text-subheading`|
|heading-sm|48px|1.15|-1.18px|`--text-heading-sm`|
|heading|64px|1.14|-1.25px|`--text-heading`|
|heading-lg|79px|1.14|-2.65px|`--text-heading-lg`|
|display|100px|1.08|-2.6px|`--text-display`|
|display-lg|TBD|TBD|TBD|`--text-display-lg`|
|display-xl|TBD|TBD|TBD|`--text-display-xl`|

*body-sm, display-lg, and display-xl are not yet defined — left open for a future iteration rather than filled with invented values.*

## Tokens — Spacing \& Shapes

**Density:** Comfortable

### Spacing Scale

|Name|Value|Token|
|-|-|-|
|10|10px|`--spacing-10`|
|11|11px|`--spacing-11`|
|15|15px|`--spacing-15`|
|19|19px|`--spacing-19`|
|20|20px|`--spacing-20`|
|23|23px|`--spacing-23`|
|27|27px|`--spacing-27`|
|30|30px|`--spacing-30`|
|36|36px|`--spacing-36`|
|38|38px|`--spacing-38`|
|60|60px|`--spacing-60`|
|63|63px|`--spacing-63`|
|64|64px|`--spacing-64`|
|108|108px|`--spacing-108`|
|150|150px|`--spacing-150`|
|172|172px|`--spacing-172`|

*This scale is deliberately irregular rather than rounded to a conventional 4/8pt grid — it reflects values actually observed in the system and should not be "cleaned up."*

### Layout

* **Section gap:** 30px–60px — the vertical rhythm between stacked sections varies within this range rather than a single fixed value; use the existing spacing scale (`--spacing-30`, `--spacing-36`, `--spacing-38`, `--spacing-60`) to pick the right step for the density of content on either side, rather than inventing a new value
* **Page margin (left/right):** 64px, held constant across the page and its sections — this is the one layout measurement that does not vary; every full-bleed section still insets its content 64px from the left and right viewport edges (`--page-margin-x`)
* **Card padding:** TBD
* **Element gap:** TBD

## Components

### Top Nav Bar

**Role:** The only persistent navigation surface in the system.

Inline text only — no background fill, no border, no container. Cognizant Moment logo sits on the left; nav labels set in Gellix 12px, weight 380, uppercase, `--tracking` +0.6px, colored `--color-white`. The active/selected item takes a short bright-blue (`--color-blue`) underline rather than a background change or weight shift — the only place blue is allowed to appear as a UI element rather than a copy accent. Consistent with shadcn's semantic-token discipline, treat this as a `NavigationMenu`-style component: styling flows entirely from `--color-white` / `--color-blue` tokens, never a hardcoded hex in markup.

### Display Headline

**Role:** Editorial-scale title that carries the emotional weight of the moment — the primary content surface, not the imagery behind it.

Set in Gellix, weight 700 (bold). Use 64px–79px (`--text-heading` / `--text-heading-lg`) for the most dramatic, intimate moments, and step up to 100px (`--text-display`) or above for the more declarative, banner-style statements. Always white text (`--color-white`) against the dark navy canvas or over a scrim on photography; a single keyword within the line may be recolored `--color-blue` to draw the eye, but never more than one per headline.

### Badge

**Role:** A small status/label chip used to call out a moment, category, or tag without competing with the headline. It also doubles as the sanctioned way to label a section name (e.g. "Introduction," "Case Study") sitting directly above a headline — this is the pattern that replaces the eyebrow/caption convention seen in other systems (see Don't: no bright-blue caption line above a headline).

Three sanctioned color variants — navy, lavender, and white — each a solid background fill with no border and no border-radius (a sharp-cornered rectangle, consistent with the system's flat, no-elevation language). The container simply wraps its text: `padding: 8px 6px` (top/bottom 8px, left/right 6px), `display: inline-flex`, `align-items: center`. Text is always set at caption scale (`--text-caption`, 12px / 1.3 / 0.6px tracking) and always uppercase (`text-transform: uppercase`). Following the same "Badge over custom styled span" discipline as shadcn's component conventions, this should always be a dedicated Badge component rather than an ad-hoc colored `<span>`.

**Usage by surface:** the variant is chosen by contrast against what's underneath it, not by preference —

|Underlying surface|Sanctioned badge variant(s)|
|-|-|
|White background, or a showcase-card/photographic surface|Navy badge, or lavender badge|
|Dark navy background|Lavender badge, or white badge|

A navy badge is never placed on a dark navy background (it would disappear), and a white badge is never placed on a white background (insufficient contrast, and it competes with the white surface itself). Lavender is the one variant sanctioned on both white and dark-navy surfaces — its mid-tone value reads clearly against either.

|Variant|Background|Text Color|Token|
|-|-|-|-|
|Navy|`#00001F`|`#FFFFFF`|`--badge-navy-bg` / `--badge-navy-text`|
|Lavender|`#D3BDFF`|`#00001F`|`--badge-lavender-bg` / `--badge-lavender-text`|
|White|`#FFFFFF`|`#00001F`|`--badge-white-bg` / `--badge-white-text`|

### Pagination

**Role:** Wayfinding control for paged/editorial content (e.g. moving between stories or slides).

Not numerals or dots — a row of short flat horizontal line indicators, one per page/slide, laid out with even gaps between them. Indicators are sharp-cornered rectangles (`border-radius: 0`), consistent with the system's flat, no-elevation language — no rounding at rest and no elevation, border-radius change, or shadow on state: state is communicated purely through **length**, not color, weight, or a container change. The active indicator is a longer line than the others; all inactive indicators share one shorter, equal length.

Indicator color inverts to match the surface it sits on, per the system's flat no-elevation rule:

|Surface|Indicator color|Token|
|-|-|-|
|White background|Dark navy (`--color-navy`)|`--pagination-indicator-on-white`|
|Dark navy background|White (`--color-white`)|`--pagination-indicator-on-navy`|

Both inactive and active indicators use the same color on a given surface — only the length changes between them.

**Hover:** on pointer-hover, an indicator's opacity reduces slightly (to a semi-transparent state) rather than changing color or length — a subtle acknowledgement of interactivity that still respects the flat, no-elevation language. This applies to both inactive and active indicators, on either surface.

### Showcase Card

**Role:** Presents a single piece of work or subject — a case study, project, or story — as a full-bleed photographic tile within a grid or list of similar cards.

A vertical rectangular container (3:4) with no border-radius (sharp corners, consistent with the rest of the system) and a full-bleed background photograph (`object-fit: cover`). A text block is pinned to the bottom of the container holding a badge and a one-line subheading, stacked with a `--spacing-10` (10px) gap between them. Critically, the dark-navy gradient is **not** applied over the whole image — it is the text block's own background only, so the photograph reads clearly above it. The gradient is a `linear-gradient` running bottom-to-top: `rgba(0,0,31,0.6)` at the bottom of the text block, fading to fully transparent (`rgba(0,0,31,0)`) by the top of that block. The text block is padded `--spacing-38` (38px) on top, `--spacing-30` (30px) left/right, and `--spacing-38` (38px) on the bottom; the top padding doubles as the gradient's fade zone, so the wash only reaches slightly above the badge rather than climbing the image. The badge uses the navy variant; the subheading is set at `--text-subheading` (32px / 300 weight).

### Info Card

**Role:** A quiet, self-contained block for presenting a headline moment alongside two short labeled facts — used where a section needs to carry a small amount of structured reading content (a stat, a definition, a supporting detail) rather than a single declarative headline. It reads as a flat panel on a white surface, consistent with the system's no-elevation language.

A solid white (`--color-white` / `#FFFFFF`) rectangle with **no border, no border-radius** (sharp corners, per the system-wide default) and **no shadow/elevation**. Internal padding is a constant `--spacing-27` (27px) on all four sides. Inside, content is a single vertical stack of **three parts**, separated by a `--spacing-23` (23px) gap between parts. Each part is itself a two-element stack with a `--spacing-10` (10px) gap between its two elements:

1. **Part 1 (top)** — a dark-navy `Badge` (navy variant, sanctioned on this white surface) above a headline set at `--text-subheading` (32px), Gellix weight **700 (bold)**, color `--color-navy`.
2. **Part 2 (middle)** — a caption set at `--text-caption` (12px / 1.3 / +0.6px positive tracking), uppercase (`text-transform: uppercase`), above one line of body text at `--text-body` (16px), color `--color-navy`.
3. **Part 3 (bottom)** — identical structure to Part 2: an uppercase caption (`--text-caption`, 12px, +0.6px tracking) above one line of body text (`--text-body`, 16px), color `--color-navy`.

Content is left-aligned, per the system's default alignment convention. Because the base subheading token is weight 300, the headline here explicitly overrides to weight 700 (bold) — this is the intended treatment, not the default subheading weight.

## Organisms

Organisms are reusable, page-section-scoped structures composed from one or more of the components above, with their own fixed layout. Unlike a component, an organism is not a single primitive — it's a template: the structure and style stay constant across every use, and only the content inside the slots changes.

### Typographic Hero

**Role:** A reusable, full-bleed section for opening a page or story with an editorial headline moment. Structure and styling are fixed; only the badge label, headline copy, and caption change between uses.

**Structure (back to front):**

1. **Background layer** — full-bleed editorial photography (`object-fit: cover`), filling the entire section edge to edge. The photo spans the full width of the section (`100%`) and the section height caps at the full viewport height (`100vh`) at maximum — the section never grows taller than one viewport, regardless of content length. No scrim is applied to the photo itself; contrast is handled entirely by the text box in front of it (see Showcase Card for the contrasting pattern, which *does* scrim the image directly — the Hero deliberately does not, since its content sits in an opaque box rather than floating over the image). **Never apply any filter (blur, brightness, contrast, saturation, etc.) to the background image** — the photograph must render at full clarity with no applied effects.
2. **Text box (container)** — a solid white (`--color-white`) rectangle, no border-radius (per the system-wide sharp-corner default), positioned inset `--spacing-64` (64px) from the top, bottom, left, and right edges of the screen/section — i.e. it does not run full-bleed like the photo behind it; it's a framed panel floating over the photography with the photo visible in the 64px margin all around.
3. **Content, stacked inside the box** with `--spacing-10` (10px) gap between the three elements, and internal box padding of `--spacing-60` (60px) on all sides *(proposed — not yet specified elsewhere in the system; revisit if a dedicated card-padding value is defined later)*. The stack has no max-width of its own — it is free to use the full width available inside the box (minus the 60px padding), rather than being capped to a narrower measure. All three elements are **center-aligned** — both `text-align: center` on the copy and the stack itself horizontally centered within the box (`align-items: center`), rather than the left-aligned convention used elsewhere in the system:
   - **Badge** — lavender variant (`--badge-lavender-bg` / `--badge-lavender-text`), sanctioned on this white surface per the updated Badge usage rule. Centered horizontally rather than sitting flush-left.
   - **Headline** — one or two lines, Gellix weight 700 (bold), set at `--text-heading-lg` (79px) by default — scaled up from the standard `--text-heading` (64px) to give the Hero more editorial weight than an in-page Display Headline. With no max-width on the content stack, the headline uses the full width available inside the box and only wraps when the copy genuinely needs a second line. Step up further to `--text-display` (100px) for single-line, highly declarative copy, or step down to `--text-heading` (64px) if two lines would otherwise crowd the box. Color is always dark navy (`--color-navy`) against the white box — **no blue keyword highlight in this organism**; the Hero's dark-navy-on-white treatment replaces the blue-accent convention used in the Display Headline component on a navy canvas.
   - **Caption** — a single supporting line in *italic*, set at `--text-body` (16px / 1.43 / 0.8px tracking), color `--color-navy`, centered under the headline. It shares the same full-width, no-max-width stack as the headline. Italic is a style variant of Gellix, not a second typeface, so it doesn't violate the one-typeface rule.

**What stays fixed vs. what varies:**

|Fixed (do not change per use)|Varies per use|
|-|-|
|64px inset of the text box from the screen edge|Background photograph|
|White box background, sharp corners|Badge label text|
|Lavender badge variant|Headline copy (1–2 lines)|
|Center-aligned badge, headline, and caption|Caption copy|
|Dark-navy headline and caption color, no blue accent|Content-driven height *within* the 100vh cap|
|Headline at 79px (`--text-heading-lg`) default|
|10px gap between badge / headline / caption|
|60px internal box padding|
|Content stack has no max-width (fills box width)|
|Background image at 100% width, capped at 100vh height|


### Notched Hero

**Role:** A reusable, full-viewport opening organism for a dark, declarative moment — the inverse of the Typographic Hero's photo+white-box pattern. Instead of photography behind a white text box, this organism paints a radial-gradient dark-navy shape directly on the page's white surface, clipped to a shallow-point silhouette. Inside that shape, content is now a two-column pairing of media and text (previously a single centered text stack) plus a scroll cue.

**Structure (back to front):**

1. **Section frame** — the page surface behind this organism is white (`--color-white`), same as the rest of the system. The section itself is `width: 100%`, `height: 100vh` — always exactly one viewport tall (unlike the Typographic Hero and other organisms, which cap *at* 100vh but can shrink with content, this section's height is fixed, since the notch geometry below is measured against it).
2. **Shape + background** — the section's own background and its silhouette are produced together, on the same element:
   - **Background:** a radial gradient in dark-navy tones — a lighter, more saturated navy at the center fading out to `--color-navy` toward the edges, producing the soft central glow seen in the reference. New token: `--hero-gradient: radial-gradient(ellipse at center, #0a0f3d 0%, #00001F 70%)` (stays within the existing navy family; no off-palette color introduced).
   - **Silhouette:** `clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 40% 100%, 0% 85%)` crops that gradient rectangle down to a shallow, off-center point — square across the top, both shoulders holding at 85% of the section's height, then drawing in to a single point at 40% of the width, 100% of the height. The apex is intentionally off-center (40%, not 50%), matching the reference image rather than a symmetrical chevron. Everywhere *inside* the polygon shows the dark gradient; everywhere *outside* it (between the shoulders and where a square corner would otherwise sit) reveals the plain white page surface behind — there is no separate white shape or element, white is simply the page's own background showing through the clip. New tokens: `--hero-notch-depth: 85%` (the shoulder height) and `--hero-notch-offset: 40%` (the apex position), so both are documented decisions rather than magic numbers embedded in the polygon.
3. **Content — two-column layout** — replaces the earlier single centered stack. A row of **two equal-width columns** with a constant `--spacing-64` (64px) gap between them, itself centered both horizontally and vertically within the section:
   - **Left column — Media.** Holds a single image or GIF (`object-fit: cover`), no border-radius (sharp corners, per the system-wide default). This column exists purely to carry motion/photography — it does not take a headline or badge.
   - **Right column — Text stack**, left-aligned (this organism's text is no longer center-aligned now that it sits beside the media column rather than alone in the notch), with a `--spacing-11` (11px) gap between its three elements:
     1. **Badge** — an organism-specific translucent variant of the white Badge: same shape/padding/typography as the standard Badge (`padding: 8px 6px`, caption-scale uppercase text), but the fill is dropped to 10% opacity white (`rgba(255, 255, 255, 0.1)`) instead of solid white, and the label text is recolored `--color-white` (not navy) so it stays legible against its own translucent fill sitting over the dark navy notch. New tokens: `--hero-badge-translucent-bg: rgba(255, 255, 255, 0.1)` / `--hero-badge-translucent-text: var(--color-white)`. This variant is scoped to this organism — it does not replace or alter the standard navy/lavender/white Badge variants defined in Components.
     2. **Headline** — one or two lines, Gellix weight 700 (bold), **downscaled to `--text-heading-sm` (48px)** from the previous 100px display size (the two-column layout gives the headline less horizontal room, so the display scale no longer fits), color `--color-white`.
     3. **Description** — a single supporting line (or short two-line block) set at `--text-body` (16px / 1.43 / 0.8px tracking), color `--color-white`. *(The previous 0.7-opacity treatment was tied to the old centered/display-scale composition; left-aligned beside the smaller headline, full-opacity white is the current spec — revisit if a quieter treatment is wanted here later.)*
4. **Scroll cue** — unchanged from before: sits near the bottom of the section, above the notch, centered horizontally across the full section width (independent of the two-column content row above it) — an uppercase "SCROLL" label at `--text-caption` (12px), `--tracking-caption` (+0.6px), color `--color-white`, followed by a short vertical line and a downward open chevron. Since this brand's `brand/` folder has no `icons/` directory (unlike CognizantMoment), the cue is drawn as a small inline SVG rather than referencing a brand icon asset:
   ```html
   <svg width="16" height="56" viewBox="0 0 16 56" fill="none" xmlns="http://www.w3.org/2000/svg">
     <line x1="8" y1="0" x2="8" y2="40" stroke="currentColor" stroke-width="1"/>
     <path d="M1 40L8 47L15 40" stroke="currentColor" stroke-width="1" fill="none"/>
   </svg>
   ```
   `currentColor` inherits `--color-white` from the surrounding text color, consistent with how the arrow icons in CognizantMoment use `fill="currentColor"` to follow their host element's color.

**What stays fixed vs. what varies:**

|Fixed (do not change per use)|Varies per use|
|-|-|
|100% width, exactly 100vh height (not content-shrinkable)|Media (image/GIF) in the left column|
|White page surface behind the section|Badge label text|
|Dark-navy radial gradient background (`--hero-gradient`)|Headline copy (1–2 lines)|
|Notch silhouette via `clip-path: polygon()`, shoulders at `--hero-notch-depth` (85%)|Description copy|
|Notch apex at `--hero-notch-offset` (40%, off-center)|Content-driven vertical rhythm within the fixed viewport height|
|Two equal-width columns, 64px gap (`--spacing-64`)|
|Left column = media only; right column = text stack|
|Right column left-aligned, 11px gap between badge / headline / description (`--spacing-11`)|
|Translucent white badge: `rgba(255,255,255,0.2)` fill, white text (`--hero-badge-translucent-bg` / `--hero-badge-translucent-text`)|
|Headline at `--text-heading-sm` (48px), `--color-white`|
|Description at `--text-body` (16px), `--color-white`|
|Scroll cue centered across the full section, independent of the two-column row|
|"SCROLL" cue: 12px uppercase caption + inline SVG line/chevron, `currentColor`|


### Primary Content Section

**Role:** A reusable, three-column organism for pairing a supporting image with a labeled block of reading content — used where the section needs to say something in prose rather than in a single declarative headline (e.g. a capability, a point of view, a supporting detail block).

**Structure — three-column grid:**

- The section divides into three equal-width columns.
- **Section background:** dark navy solid (`--color-navy` / `#00001F`).
- **Image (left):** occupies 1 of the 3 columns. A single rectangular photographic image, no border-radius (sharp corners, per the system-wide default), `object-fit: cover` to fill its column.
- **Content box (right):** occupies the remaining 2 of the 3 columns. Left-aligned content, stacked in this order:
  1. **Badge** — labels the section (see Badge's section-name role), sitting above the headline as the sanctioned label pattern. Use the lavender variant for contrast against the dark navy background.
  2. **Headline** — set at `--text-heading-sm` (48px / 1.15 / -1.18px tracking), Gellix weight 700 (bold), color `--color-white` (`#FFFFFF`).
  3. **Description** — body copy set at `--text-body` (16px / 1.43 / 0.8px tracking), color `--color-white` (`#FFFFFF`).
- **Gap:** a constant `--spacing-64` (64px) gap separates the image column from the content column — the one fixed measurement in this organism's layout, independent of the section-gap range (30px–60px) used between stacked sections elsewhere in the system.

**What stays fixed vs. what varies:**

|Fixed (do not change per use)|Varies per use|
|-|-|
|Dark navy background (`--color-navy`)|Image|
|Three-column grid: image = 1 column, content = 2 columns|Badge label text|
|64px gap between the image column and the content column|Headline copy|
|Left-aligned content in the content box|Description copy|
|Stack order: badge → headline → description||
|Headline at 48px (`--text-heading-sm`), white text (`--color-white`)||
|Description at 16px (`--text-body`), white text (`--color-white`)||
|Lavender badge for contrast on dark navy background||


### Introduction

**Role:** A reusable, split-headline organism that opens a page or section by fusing a short declarative headline with a supporting photograph — the headline visually continues *behind* the image rather than stopping beside it, so type and photography share one picture plane instead of sitting in separate columns.

**Two variants — Light (default) and Dark Navy.** The structure below documents the **Light** variant in full; the **Dark Navy** variant reuses that same layout and changes only the surface treatment (see *Variants* at the end of this organism). Pick the variant by the surface the section needs to sit on; everything about the composed row, the image overlap, the badge placement, spacing, and sizing is shared between them.

**Structure (back to front) — Light variant:**

1. **Section frame** — full white (`--color-white`) canvas, `min-height: 100vh`, content vertically centered (`display: flex; align-items: center`) inside a `max-width: 1180px` container centered on the page (`margin: 0 auto`), with `--spacing-108` (108px) padding on the section itself — a roomier, more generous inset than the 64px page margin used elsewhere, since this organism is a single centered composition rather than an edge-to-edge surface.
2. **Composed row (`.composed`)** — `position: relative`, holding two children: the text column and the image box. The `position: relative` is deliberate — it's what gives the image box a containing block to be positioned against. **Implementation note:** a flex row alone does *not* produce overlap — by default a flex container shrinks a `width: 100%` child (`flex-shrink: 1`) to make room for its sibling, so the text column and image box end up sitting cleanly side by side with no overlap at all. To get the overlap this organism depends on, the image box must be taken out of normal flow — `position: absolute`, anchored `top: 50%` / `right: 0` with `transform: translateY(-50%)` inside `.composed` — so the text column can stay genuinely full-width and the image renders on top of it rather than beside it. Absolutely-positioned elements stack above static content by default, so the image naturally paints above the navy base layer without an explicit `z-index`; the white overlay layer's own `z-index: 2` is what keeps *it* above the image in turn.
3. **Text column (`.left`)**, `width: 100%`, stacked top to bottom:
   - **Badge** — lavender variant, labeling the section (e.g. "Introduction"), sitting above the headline per Badge's established section-name role, with `--spacing-36` (36px) margin below it.
   - **Headline**, duplicated into two stacked layers sharing one `.headline-wrap` (`position: relative`) so both occupy the exact same box and read as a single line:
     - **Base layer** — the full headline string, Gellix weight 700 (bold), `--text-display` (100px), color `--color-navy`, clipped so that only the portion of the line sitting over the plain white page is visible.
     - **Overlay layer** — the identical headline string again, absolutely positioned over the base (`inset: 0`), color `--color-white`, clipped to the inverse region — only the portion of the line that falls over the photograph is visible. `z-index: 2` guarantees this layer paints above the photograph — without it, the white text would sit invisibly against the white page rather than reading against the photo.
   - **The clip point is dynamic, not a fixed percentage.** Because headline copy varies in length between uses (one line vs. two, short word vs. long), the point at which the sentence crosses from "over white page" to "over photograph" moves with it — a hardcoded `inset()` percentage baked into CSS would misalign the moment the copy changes. Instead, the split must be **measured at render time** against the actual overlap between the image box and the headline:
     - On mount and on resize, read the image box's left edge position (`imageBox.getBoundingClientRect().left`) relative to the headline-wrap's own bounding box (`headlineWrap.getBoundingClientRect()`).
     - Convert that pixel offset into a percentage of the headline-wrap's width, and write it to a single CSS custom property scoped to that instance (e.g. `headlineWrap.style.setProperty('--intro-split', '${percent}%')`).
     - Both layers consume the same property so they stay complementary automatically: base layer `clip-path: inset(0 calc(100% - var(--intro-split)) 0 0)`, overlay layer `clip-path: inset(0 0 0 var(--intro-split))`. Because both read from one measured value, there is no risk of the two windows drifting out of sync when the headline, the image size, or the viewport changes.
     - This measurement must re-run on font load and on resize/reflow (headline line-wrapping changes the box height and can shift where the image's left edge falls relative to the text), not just once on initial paint.
4. **Image box** — a single **square** photograph (1:1), no border-radius (sharp corners, per the system-wide default), `object-fit: cover`, positioned absolutely over the right portion of the full-width text column (see implementation note above) rather than sitting beside it as a normal flex sibling. This overlap is the intentional mechanism that lets part of the headline fall across the photo, which the overlay layer then recolors white so it stays legible there.

**What stays fixed vs. what varies:**

|Fixed (do not change per use)|Varies per use|
|-|-|
|White page background, `min-height: 100vh`|Badge label text|
|Lavender badge above the headline|Headline copy (same string, duplicated across both layers; length is free)|
|Headline duplicated into a navy base layer + white overlay layer|Background photograph|
|Clip point computed dynamically from the actual image/text overlap, not a fixed percentage|Content-driven height within the section|
|Both layers driven off one shared, measured split value (never diverge)|Where the split falls (moves with headline length, image width, and viewport)|
|Image is square (1:1), `object-fit: cover`, no border-radius|
|Headline at `--text-display` (100px), weight 700|
|Overlay layer `z-index: 2`, painting above the image|
|Image box positioned absolutely over the full-width text column, producing the intentional text/image overlap (not a shrinking flex row)|
|108px section padding, 1180px max-width composed container|
|Split re-measured on resize/reflow — never computed once and left static|

**Variants:**

The two variants share every layout decision above — section padding and max-width, the composed row, the badge (lavender, `--spacing-36` below it), the square image box and its absolute overlap over the full-width text column, the `--text-display` (100px) weight-700 headline, and the vertical centering. They differ **only** in the surface and how the headline is rendered:

|Aspect|Light (default)|Dark Navy (new)|
|-|-|-|
|Section background|White (`--color-white`)|Dark navy solid (`--color-navy` / `#00001F`)|
|Badge|Lavender variant|Lavender variant (unchanged)|
|Headline color|Dark navy (`--color-navy`) base + white overlay|A single white (`--color-white`) layer — no second color|
|Headline layers|**Two** stacked layers (navy base + white overlay), each clipped to complementary regions|**One** layer only — no duplication, no overlay|
|Clip-path split mechanism|Required — the dynamic, JS-measured `--intro-split` keeps the navy/white boundary aligned with the image edge|**Not used at all** — no clip-path, no `--intro-split` measurement, no resize/font-load JS|
|Stacking|Overlay layer needs `z-index: 2` to paint above the photo|Headline needs a `z-index` above the image box so the single white line always sits on top of the photo|

**Why the Dark Navy variant is simpler:** the Light variant's dual-layer clip exists solely because a single navy-colored headline would vanish where it crosses the photograph, so the overlapping portion has to be recolored white — which forces the pixel-measured split. In the Dark Navy variant the headline is white *everywhere* from the start: white reads clearly both over the dark navy canvas and over the photograph, so there is nothing to recolor. The headline is therefore **one plain white line rendered on top of the image** (a `z-index` above the image box), and the entire clip-path / `--intro-split` / resize-and-font-load measurement machinery is dropped. This is deliberately the simpler of the two — no inverted color region, text always on top of the image.

*Implementation note:* because the Dark Navy variant carries no overlay layer and no measured split, it does **not** need the JS that drives the Light variant's `--intro-split`. A Dark Navy instance must not run that measurement (there is no base/overlay pair to keep in sync); a Light instance still must.


## Page Section Planning Guidance

**Role:** Default guidance for an agent assembling a full page from this system — the order sections should follow when a specific structure hasn't been requested. This is a starting template, not a rigid rule: adjust or omit sections when the content genuinely calls for it, but the Hero always opens the page.

**Suggested structure (top to bottom):**

1. **Top Nav Bar** — always present and always first, sitting above the Hero rather than as a separate stacked section. Nav items (logo and nav labels) must remain legible against whatever sits beneath them as the page scrolls: since the bar is `position: sticky` (persistent for quick navigation while scrolling), and the canvas beneath it changes between the dark-navy/photographic Hero and lighter sections further down, the item color must adapt to keep contrast — white items over a dark/photographic surface, dark-navy items once a white section scrolls underneath. Do not hardcode a single color and assume it will read correctly against every section.
2. **Hero section** — the opening, full-viewport moment (Notched Hero). Always the first section beneath the nav bar; sets the declarative tone before any supporting content appears.
3. **Content section** — the Primary Content Section organism, used for prose-level detail (a capability, point of view, or supporting detail) that the Hero's single declarative moment doesn't carry.
4. **Typographic hero section** — a second, closing use of the Typographic Hero organism, employed here as a declarative closing statement rather than an opener — the same organism, reused to bookend the page.

This order is a sensible default for a standard editorial page; a project may add, remove, or repeat organisms (e.g. multiple Content sections, a Showcase Card grid) as its content requires, but should not open with anything other than the Hero, and the Top Nav Bar remains sticky throughout regardless of how the sections beneath it change.

### Do

* Use Gellix for all type, at every scale from nav label to display headline — no exceptions
* Apply positive tracking (+0.6px) only at the small uppercase nav-label size; let tracking go increasingly negative as display sizes increase
* Push display type to 64–100px+ at weight 700 (bold) for the most declarative moments — impact comes from scale and weight together
* Let headlines, titles, and body text flow naturally at `width: 100%` without width constraints or max-width clamping — text should wrap based on available space and content length, never be artificially constrained
* Reserve bright blue for a single intentional keyword or the active-nav underline — if it isn't drawing attention to one specific thing, don't use it
* Let full-bleed photography, not surface color, carry the sense of depth and mood
* Keep UI chrome to a minimum: one accent color (blue), one neutral canvas (navy), one text color (white) — resist adding more

### Don't

* Do not apply a solid bright blue or lavender background — white and dark navy is the brand's canvas language
* Do not introduce a second typeface or an icon font
* Do not use drop shadows, glows, or any elevation effect — the system is strictly flat; depth comes from the lens, not from CSS
* Do not use bright blue decoratively or repeatedly on one screen — it loses its "intentional" meaning the moment it's used twice
* Do not fill in the middle of the type scale (e.g. inventing a 20px or 24px size) just to feel complete
* Do not apply `max-width` or width constraints (especially `ch` units) to headlines, titles, or body text unless explicitly specified in a component's spec — text should flow at `width: 100%` and wrap naturally with the content, never be clamped or constrained in a way that forces unwanted vertical line breaking
* Do not apply `border-radius` to any element — every surface, container, badge, card, and indicator is sharp-cornered (`border-radius: 0`) by default. This is a system-wide default, not a per-component choice; only deviate where a component's spec explicitly calls out an exception
* Do not apply any filter (blur, brightness, contrast, saturation, etc.) to any background image — photographs must render at full clarity with no applied effects
* Do not place a bright-blue-colored caption line directly above a headline as the eyebrow/label pattern — the Badge is the sanctioned pattern for labeling what sits above a headline (section name, category, status), not a colored caption line

## Surfaces

|Level|Name|Value|Purpose|
|-|-|-|-|
|1|Navy canvas|`#00001F`|Secondary background for the emphasising an important content,  used when a screen needs to invert against the white canvas; where white text and badges/pagination sit|
|2|White surface|`#FFFFFF`|Main background colour; where dark navy text and pagination sit|
|3|Photographic surface|(carried by imagery, not a flat fill)|Full-bleed photography surfaces that carry mood/identity behind headline text|

## Elevation

There is no shadow or elevation system — the interface is strictly flat. Depth and drama are produced entirely by photography (the lens) and by scale contrast in typography, not by CSS shadows, glows, or layered surfaces.

## Imagery

Full-bleed editorial photography is a core carrier of identity. *(Further detail on treatment, composition conventions, and image-to-text density is not yet defined — left open for a future iteration.)*

**Rendering rule (required on every full-bleed background image, including the typographic hero section):** the image must always be scaled to cover its full container, centered, and never repeated. Omitting any one of these three behaviors is what causes the image to tile/repeat horizontally instead of filling the surface as a single uninterrupted photograph. This is non-negotiable for hero/full-bleed sections.

## Layout

Two conventions are defined so far:

* **Page/section horizontal margin:** a constant 64px inset from the left and right edges, held at both the page level and the section level — content never runs closer to the viewport edge than 64px, regardless of section type.
* **Section gap:** the vertical space between stacked sections ranges 30px–60px rather than a single fixed number, drawn from the existing spacing scale (`--spacing-30` through `--spacing-60`) depending on the visual weight of what's above/below.

Card padding and inter-element gaps are not yet defined — left open for a future iteration.

## Agent Prompt Guide

Quick Color Reference

* text: `#FFFFFF`
* background: `#00001F` (primary) / `#FFFFFF` (secondary)
* border: TBD (active) / TBD (muted)
* accent: `#1777FC` — use only to highlight a single intentional keyword
* primary action: no distinct CTA color defined yet — do not invent one

Example Component Prompts

1. Build the top nav bar: full-width, transparent background, no border. Logo left. Nav labels in Gellix 12px/weight 380/uppercase/letter-spacing 0.6px, color `#FFFFFF`. Active item gets a short 2px underline in `#1777FC` directly beneath the label — no background change, no weight change.
2. Build a display headline: Gellix weight 700 (bold), size 64–79px for standard moments or 100px for declarative ones, line-height 1.08–1.2, negative letter-spacing (-1.18px to -2.65px scaling with size), color `#FFFFFF` on a `#00001F` background or scrimmed photography.
3. Build a navy badge: flat `#00001F` fill, `#FFFFFF` text, no border, no border-radius (sharp corners), no shadow. Padding 8px top/bottom, 6px left/right. `display: inline-flex; align-items: center`. Text set at caption scale (12px / line-height 1.3 / letter-spacing 0.6px), uppercase. Use on a white background or a photographic/showcase-card surface — never on a dark navy background.
4. Build a lavender badge: same shape/padding/typography spec as the navy badge, but flat `#D3BDFF` fill with `#00001F` text, no border. Use on a dark navy background.
5. Build a white badge: same shape/padding/typography spec as the navy badge, but flat `#FFFFFF` fill with `#00001F` text, no border. Use on a dark navy background.
6. Build pagination controls: a horizontal row of short flat line indicators (no numerals, no dots), sharp-cornered with `border-radius: 0` — never rounded, evenly spaced. On a white background, indicators are `#00001F`; on a dark navy background, indicators are `#FFFFFF`. The active indicator is longer than the rest; all inactive indicators share one shorter, equal length. State is shown by length only — never by color change, shadow, border, or added weight. On hover, an indicator's opacity reduces slightly (e.g. to \~0.6) as the only interactive feedback — no color or length change on hover.
7. Build an info card: solid `#FFFFFF` background, no border, no border-radius (sharp corners), no shadow. Padding 27px on all four sides. Inside, a single vertical stack of three parts with a 23px gap between parts; each part is a two-element stack with a 10px inner gap. Part 1: a navy badge (flat `#00001F` fill, `#FFFFFF` text, 12px uppercase) above a 32px Gellix weight-700 (bold) headline in `#00001F`. Part 2: a 12px uppercase caption (letter-spacing 0.6px) in `#00001F` above one line of 16px body text in `#00001F`. Part 3: identical to Part 2 — a 12px uppercase caption above one line of 16px body text. All content left-aligned.
8. Build a showcase card: vertical 3:4 container, no border-radius, full-bleed background photo (`object-fit: cover`). A text block pinned to the bottom holds a navy badge and a one-line subheading (32px/300, white), stacked with a 10px gap. The dark-navy gradient is the text block's own background only — not applied over the full image — padded 23px top, 30px left/right, 38px bottom, fading from `rgba(0,0,31,0.6)` at the bottom to transparent by the top of that block.
9. Build the notched hero's content row: full viewport section, dark-navy radial-gradient background clipped to the notch silhouette (unchanged geometry). Inside it, two equal-width columns with a 64px gap: left column holds a single image/GIF (`object-fit: cover`, no border-radius); right column is left-aligned with an 11px gap between its three elements — a translucent white badge (`rgba(255,255,255,0.2)` fill, `#FFFFFF` text, same padding/shape as other badges), a 48px Gellix weight-700 (bold) headline in `#FFFFFF`, and one line of 16px body text in `#FFFFFF`. The "SCROLL" cue stays centered across the full section width, unrelated to the two-column row above it.

## Scale Philosophy

The type scale is intentionally clustered at two poles rather than progressing smoothly: a single small size (12px) for navigation, and a cluster of large sizes (64px, 79px, 100px) for headlines, with body/subheading (16px, 32px) bridging the two. This is a deliberate gap, not a missing scale — an agent extending the system should resist the urge to "fill in" 20px, 24px, or 40px sizes to make the progression feel smoother. The silence between the small and large poles is the point: it's what makes the jump from nav label to headline feel like a genuine shift in register rather than a gradual climb. Likewise, the spacing scale (10–172px) should not be rounded to the nearest 8px — its irregularity reflects real observed values, and smoothing it would erase intentional variation.

## Photography Brief

*(Not yet defined in detail — full-bleed editorial photography is confirmed as the identity carrier, but subject, lighting, and framing conventions are left open for a future iteration.)*

## Similar Brands

*(Not yet defined — left open for a future iteration.)*

## Quick Start

### CSS Custom Properties

```css
:root {
  /\* Colors \*/
  --color-navy: #00001F;
  --color-blue: #1777FC;
  --color-lavender: #D3BDFF;
  --color-white: #FFFFFF;

  /\* Typography — Font Families \*/
  --font-gellix: 'Gellix', 'General Sans', 'Aeonik', 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /\* Typography — Scale \*/
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: 0.6px;

  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: 0.8px;

  --text-subheading: 32px;
  --leading-subheading: 1.2;
  --tracking-subheading: 1px;

  --text-heading-sm: 48px;
  --leading-heading-sm: 1.15;
  --tracking-heading-sm: -1.18px;

  --text-heading: 64px;
  --leading-heading: 1.14;
  --tracking-heading: -1.25px;

  --text-heading-lg: 79px;
  --leading-heading-lg: 1.14;
  --tracking-heading-lg: -2.65px;

  --text-display: 100px;
  --leading-display: 1.08;
  --tracking-display: -2.6px;

  /\* Typography — Weights \*/
  --font-weight-nav: 380;
  --font-weight-display: 700; /* bold */

  /\* Spacing \*/
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-27: 27px;
  --spacing-30: 30px;
  --spacing-36: 36px;
  --spacing-38: 38px;
  --spacing-60: 60px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-108: 108px;
  --spacing-150: 150px;
  --spacing-172: 172px;

  /\* Layout \*/
  --section-gap-min: 30px;
  --section-gap-max: 60px;
  --page-margin-x: 64px;
  --card-padding: TBD;
  --element-gap: TBD;
  --radius-none: 0px; /\* system-wide default — every element is sharp-cornered unless a component spec explicitly states an exception \*/

  /\* Surfaces \*/
  --surface-navy: #00001F;
  --surface-white: #FFFFFF;

  /\* Pagination \*/
  --pagination-indicator-on-white: #00001F;
  --pagination-indicator-on-navy: #FFFFFF;
  --pagination-indicator-hover-opacity: 0.6;

  /\* Notched Hero \*/
  --hero-gradient: radial-gradient(ellipse at center, #0a0f3d 0%, #00001F 70%);
  --hero-notch-depth: 85%;
  --hero-notch-offset: 40%;
  --hero-content-gap: 64px; /\* gap between the media column and the text column \*/
  --hero-badge-translucent-bg: rgba(255, 255, 255, 0.2);
  --hero-badge-translucent-text: #FFFFFF;
  /\* --hero-description-max-width: 640px; and --hero-description-opacity: 0.7;
     deprecated — tied to the old single centered stack; the two-column layout
     is left-aligned at full opacity with no max-width clamp on the description \*/

  /\* Introduction — no static token here: --intro-split is set inline, per-instance,
     by JS measuring the actual image/headline overlap (see Introduction organism spec) \*/
}
```

### Full-Bleed Background Image (required behavior)

Every full-bleed photographic surface — including the typographic hero section — must scale its image to cover the full container, keep it centered, and never repeat it. Skipping any one of these three is what causes the image to tile/repeat horizontally, which is never an acceptable render.

