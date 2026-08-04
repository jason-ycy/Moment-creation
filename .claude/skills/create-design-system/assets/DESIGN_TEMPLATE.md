# [Brand/Project Name] — Style Reference
> [One-sentence poetic tagline that captures the visual mood in an evocative image, e.g. "Crimson void, single silhouette — a high-fashion editorial spread where the UI dissolves into atmosphere."]

**Theme:** [dark / light / dual]

[One paragraph, 4–6 sentences, describing the overall design philosophy: what grammar/genre the design borrows from (e.g. "luxury fashion editorial," "brutalist fintech," "playful edtech"), what the UI chrome looks like vs. what carries the emotional weight (imagery? color? motion?), how typography behaves (scale range, jumps vs. smooth progression), and the guiding principle that ties every choice together (e.g. "the system prefers silence over information density").]

## Implementation

*(This section has two valid states — see rule 6 at the end. It always sits here, at the top, so any agent reading this file sees the styling entry point before anything else.)*

> **Styling source:** `brand/CSS/main.css` is the only stylesheet to link. It `@import`s `tokens.css` and `component.css`, in that order — don't link those sub-files individually, and don't re-declare any token as an inline style. See `design-system.html` for a live verification render.

*(If CSS hasn't been implemented yet, replace the callout above with:)*

> **Styling source:** no CSS files exist yet. Use the inline `:root { ... }` block in the Quick Start section below as the token source until `brand/CSS/main.css` is generated.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| [Color Name] | `#000000` | `--color-[name]` | [Where/how it's used — canvas, text, borders, accents] |
| [Color Name] | `#ffffff` | `--color-[name]` | [Where/how it's used] |
| [Color Name] | `#______` | `--color-[name]` | [Where/how it's used] |
| [Color Name] | `#______` | `--color-[name]` | [Where/how it's used] |

*(List every distinct color in the system — canvas/background colors, text colors, border/divider colors, and the dominant "brand" or accent color/s. Note explicitly if a color is only ever carried by imagery vs. applied as a CSS fill.)*

## Tokens — Typography

### [Typeface Name] — [1–2 sentence description of the typeface's character/personality, weight range, foundry/source] · `--font-[name]`
- **Substitute:** [Fallback fonts a developer could use if the exact typeface isn't licensed/available, and why they work]
- **Weights:** [e.g. 300, 400, 500, 700]
- **Sizes:** [Full list of every size used across the system, small to large]
- **Line height:** [Range used, noting difference between display and body if applicable]
- **Letter spacing:** [Rules for tracking — e.g. negative tracking on large display sizes, positive tracking on small uppercase labels]
- **Role:** [Repeat/expand on the description — when and why this typeface is used]

*(If a second typeface exists — e.g. a serif for editorial accents or a monospace for data — repeat this block for each.)*

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | __px | __ | __px | `--text-caption` |
| body-sm | __px | __ | __px | `--text-body-sm` |
| body | __px | __ | __px | `--text-body` |
| subheading | __px | __ | __px | `--text-subheading` |
| heading-sm | __px | __ | __px | `--text-heading-sm` |
| heading | __px | __ | __px | `--text-heading` |
| heading-lg | __px | __ | __px | `--text-heading-lg` |
| display | __px | __ | __px | `--text-display` |
| display-lg | __px | __ | __px | `--text-display-lg` |
| display-xl | __px | __ | __px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Density:** [comfortable / compact / spacious]

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| [n] | __px | `--spacing-[n]` |
| ... | ... | ... |

*(List the full spacing scale actually used in the system — don't round to a generic 4/8pt grid unless that's literally what's used.)*

### Border Radius

| Element | Value |
|---------|-------|
| bodies/cards | __px |
| buttons | __px |
| circular/avatars | __px |

### Layout

- **Section gap:** __px
- **Card padding:** __px
- **Element gap:** __px

## Components

*(For each recurring UI component in the system, document: name, its functional role, and a precise visual/behavioral spec — exact colors, type, spacing, radius, and any signature interaction detail. Keep each entry to one tight paragraph. Cover navigation, buttons, links/wordmarks, hero/primary content surface, headline treatment, any signature shape motif, and any utility surfaces like cards/modals.)*

### [Component Name]
**Role:** [What this component is for in the system]

[Precise spec: dimensions, colors, type treatment, borders, fill, padding, and the design rationale in one sentence.]

### [Component Name]
**Role:** [...]

[...]

*(Repeat for every component: nav, buttons, links, logo/wordmark, hero/primary surface, headline/display text, signature shape, utility card, etc.)*

## Do's and Don'ts

### Do
- [Rule about typeface usage and why]
- [Rule about tracking/letter-spacing at specific sizes]
- [Rule about display type weight/size for maximum impact]
- [Rule about radius usage per component type]
- [Rule about imagery/color treatment]
- [Rule about how many colors/lines the UI chrome should use]
- [Any other non-negotiable that defines the system's signature]

### Don't
- [Anti-pattern to avoid — e.g. don't apply brand color as a solid CSS fill]
- [Anti-pattern — e.g. don't use filled buttons if the system is ghost/outline only]
- [Anti-pattern — e.g. don't place text over imagery without breathing room]
- [Anti-pattern — e.g. don't add shadows/elevation if the system is flat]
- [Anti-pattern — e.g. don't introduce a second typeface or icon font]
- [Anti-pattern — e.g. don't use a max-width container if layout is full-bleed]
- [Anti-pattern — e.g. don't use sizes outside the defined type scale]
- Don't link `tokens.css` or `component.css` directly, and don't hand-write inline styles that duplicate a token — link only `main.css` and use its custom properties/classes (once CSS files exist; see Implementation above).

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | [Base canvas name] | `#______` | [Where this surface appears] |
| 2 | [Structural element name] | `#______` | [Where this surface appears] |
| 3 | [Content/photographic surface name] | `#______` | [Where this surface appears] |

## Elevation

[Describe the shadow/depth system — or explicitly state there is none, and what substitutes for depth cues (e.g. photography, contrast, layering) if the system is flat.]

## Imagery

[Describe: what kind of imagery the system uses (photography style, illustration style, or none), treatment rules (full-bleed vs. contained, corner radius, overlays/scrims), subject matter conventions (composition, lighting, mood, color treatment), density (how much of the UI is image vs. text), and how iconography is handled — custom-drawn primitives, an icon font/library, or none at all.]

## Layout

[Describe the overall page/grid model: full-bleed vs. contained/max-width, card grids vs. vertical stack, section rhythm and how transitions between sections are handled, content alignment (symmetric/asymmetric, margins), and any signature layout habit unique to this system.]

## Agent Prompt Guide

**Before building anything:** link `brand/CSS/main.css` (or, if CSS files don't exist yet, use the inline Quick Start block below as the token source). Build every component below using its custom properties/classes — never hardcode a color, size, or spacing value that's already defined as a token.

Quick Color Reference
- text: #______
- background: #______ (primary) / #______ (secondary)
- border: #______ (active) / #______ (muted)
- accent: #______
- primary action: [color or "no distinct CTA color" if applicable]

Example Component Prompts

1. Build a [component]: [precise, copy-pasteable spec an agent could use verbatim — radius, color, type, spacing].
2. Build a [component]: [spec].
3. Build a [component]: [spec].
4. Build a [component]: [spec].
5. Build a [component]: [spec].

*(Write 4–6 of these as literal instructions to a coding agent — specific enough that following them exactly reproduces the intended component with no ambiguity.)*

## Scale Philosophy

[1 paragraph explaining the *logic* behind the type scale or spacing scale — is it linear, exponential, clustered with a deliberate gap? What should an agent resist doing when extending the system (e.g. "don't fill in the middle of the scale," "don't round to the nearest 8px")? Name the specific behavior that makes the system feel intentional rather than default.]

## Photography Brief

*(Only include if the system relies on photography/imagery as a core carrier of identity.)*

[Precise brief for generating or sourcing on-brand imagery: subject count and pose, lighting direction and quality, color/grain treatment, framing/bleed, what to avoid (anti-patterns like eye contact with lens, busy composition, wrong lighting temperature, etc.).]

## Similar Brands

- **[Brand Name]** — [What's shared: e.g. same restraint, same nav pattern, same type scale behavior]
- **[Brand Name]** — [...]
- **[Brand Name]** — [...]
- **[Brand Name]** — [...]
- **[Brand Name]** — [...]

*(3–5 real-world reference brands/sites that share the aesthetic DNA — useful for an agent to cross-check tone against.)*

## Quick Start / Reusable Styles

*(This section has two valid states — see rule 6 below. Default: inline CSS custom-properties block. Once real CSS files are implemented in `brand/CSS/`, this block is replaced in place with links to those files — never both at once.)*

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-[name]: #______;
  --color-[name]: #______;

  /* Typography — Font Families */
  --font-[name]: '[Font Name]', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: __px;
  --leading-caption: __;
  --tracking-caption: __px;
  --text-body: __px;
  --leading-body: __;
  --tracking-body: __px;
  --text-display: __px;
  --leading-display: __;
  --tracking-display: __px;

  /* Typography — Weights */
  --font-weight-[name]: ___;

  /* Spacing */
  --spacing-[n]: __px;

  /* Layout */
  --section-gap: __px;
  --card-padding: __px;
  --element-gap: __px;

  /* Border Radius */
  --radius-[name]: __px;

  /* Surfaces */
  --surface-[name]: #______;
}
```

*(Once CSS files are implemented, this code block is replaced with something like:)*

> **Reusable CSS:** implemented in `brand/CSS/` — link only [`brand/CSS/main.css`](brand/CSS/main.css), which `@import`s `tokens.css` and `component.css`. Link this one file instead of re-generating styles. See `design-system.html` for a live verification render. (Also mirrored in the Implementation callout at the top of this document.)

---

## How to fill this in (instructions for the writing agent)

When generating a DESIGN.md from this template:
1. **Extract, don't invent** — every color, size, and spacing value should come from actual analysis of the reference (screenshots, a live site, or a brief), not filled with generic defaults.
2. **Keep the voice** — the prose sections (intro paragraph, component roles, Do's/Don'ts, Scale Philosophy, Photography Brief) should read as confident, opinionated design rationale, not a neutral spec sheet. Explain *why*, not just *what*.
3. **Be exhaustive on tokens** — list every distinct value actually observed (colors, sizes, spacing units, radii). Do not round or "clean up" to a conventional scale unless the source material genuinely uses one.
4. **Every component needs a Role line** — one sentence on what job the component does in the system, before the visual spec.
5. **Agent Prompt Guide must be copy-paste usable** — an autonomous coding agent should be able to build the component from that section alone, with no other context.
6. **Quick Start CSS, the Implementation callout, and the Agent Prompt Guide's opening line all share the same two states — keep them in sync, and never leave both states present at once:**
   - **Default (no CSS files yet):** Quick Start emits the plain inline CSS custom-properties block covering every token used above; the Implementation callout and Agent Prompt Guide opening line both point to that inline block instead.
   - **After CSS implementation:** replace the Quick Start inline block in place with a short "Reusable CSS" reference linking `brand/CSS/main.css` (see example above), and update the Implementation callout and Agent Prompt Guide opening line to the same effect. Do not leave an inline block sitting alongside file links anywhere — swap it, don't append.
   - There is no `brand.css` — brand-specific values (logo-linked colors, brand-only overrides) live in `tokens.css` alongside the rest of the tokens. Only `tokens.css` and `component.css` exist underneath `main.css`.
