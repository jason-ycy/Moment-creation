---
name: create-case-study
description: Builds an interactive, on-brand case-study HTML page. Runs a four-phase workflow — Intake (understand the ask) → Foundation (frontend-design) → Motion (emil-design-eng) → Taste (a locked Cinematic-Editorial art direction) — grounding all concrete colour/type/spacing in the chosen brand's DESIGN.md. Use whenever creating a case study, or shaping/restyling the visual direction and layout of any UI, and whenever a request asks to make something look good, more polished, more distinctive, or on-brand. Prevents generic AI-slop design.
when_to_use: Trigger when the Creation Engine routes a "Case study" artefact to this skill, and on requests to design, build, art-direct, beautify, restyle, respace, or reshape any UI — pages, screens, layouts, case studies, playbooks, landing pages, dashboards — especially for a brand that has a DESIGN.md in the Design Library.
---

# create-case-study — build an on-brand case study

You are the **taste lead** for this case study. Your job is not to make it merely work — it is to give
it a bold, intentional aesthetic and kill the generic "AI-slop" look. You bring **one** locked
direction: **Cinematic Editorial**. You bring the taste; the brand's `DESIGN.md` brings the tokens.

## The workflow — four phases, in order

Build the page up in layers, adding richness at each pass. **Do not skip ahead** — each phase assumes
the previous one is done.

1. **① Intake** — understand the ask. Gather the brief; confirm it. *(This file, below.)*
2. **② Foundation** — build the artefact's structure and layout with the **`frontend-design`** skill,
   grounded in the brand's `DESIGN.md` tokens and components. This is the solid, well-structured page.
3. **③ Motion** — implement motion and interaction with the **`emil-design-eng`** skill: entrances,
   **scroll-triggered reveals**, **smooth scroll transitions between sections**, press feedback, easing.
   Movement with purpose, never decoration. Scroll motion is **required, not optional** — a case study
   that doesn't move as you scroll has skipped this phase. **Invoke `emil-design-eng` to author it** —
   do not hand-roll ad-hoc scroll listeners.
4. **④ Taste** — apply the **Cinematic Editorial** art direction in the rest of this file *on top of*
   the foundation. When guidance overlaps, **this taste layer is the authority on the look**;
   `frontend-design` serves the structure and `emil-design-eng` serves the motion craft.

> Invoke the `frontend-design` and `emil-design-eng` skills at their phases — they ship with the repo
> under `.claude/skills/`, so they're available to the whole team.

## ① Intake — understand the ask first (before any code)

A case study is only as good as the brief behind it. **The more context the user gives, the better — so
ingest everything they offer before asking anything.**

**1. Read any brief the user has provided.** Look, in order, for:
   - a **file the user points you to** (any path they name — `.md`, `.json`, `.txt`, a doc);
   - a **`brief.md` or `brief.json`** in the target project folder (`projects/{project-name}/`);
   - **content pasted into the conversation** (notes, an outline, links).
   Read it *fully*. A blank template counts as "not provided." See [brief-template.md](brief-template.md)
   for the shape of an ideal brief — offer it to the user to fill in.

**2. Check the brief against the required context:**
   - **Project name** → the kebab-case folder (`projects/{project-name}/`).
   - **Client / brand** → usually already set by the Creation Engine (which `DesignLibrary/{Brand}/`).
   - **Assets** → a Figma URL (read via Figma MCP) and/or image files to use, and where they live.
   - **Voice & emphasis** → what to foreground, tone notes, must-include and must-avoid points.
   - **Shape** → rough length / which sections, and where it'll be viewed (`file://` vs served — see the
     `file://` caveat under *Reusing the design system's components*).

**3. Ask only for the gaps — briefly.** If the brief already answers something, don't re-ask. Batch a
   small number of high-value questions for what's genuinely missing. If the user wants to move fast,
   proceed with sensible assumptions and **state them**.

**4. Play it back, then build.** Summarise the brief in a few lines, confirm, and only then move to
   phase ②. If a Figma design was given, this is when you pull it (transform to code, download assets
   into `projects/{project-name}/assets/`).

> **Where the output goes.** Inside this Creation Engine, build a self-contained
> `projects/{project-name}/` with an `index.html` and its own `assets/`, linking the brand system from
> `../../DesignLibrary/{Brand}/brand/...`. If invoked standalone (no engine), stay path-agnostic and
> build where directed.

## Golden rules (read before writing any code)

1. **Find and read the brand's `DESIGN.md` first.** It is the single source of truth for every concrete
   value — palette, type, scale, spacing, radius, shadow, components, voice. Pull colours, fonts, and
   sizes **from it**. Never invent, hardcode, or duplicate tokens. Link the brand stylesheet; if a
   design-system stylesheet exists, use its classes rather than rebuilding them.
   - **Also link the brand's JS enhancer if the brand ships one** (check its `DESIGN.md` / `brand/js/`).
     It's optional — the CSS alone renders a complete, correct page — but when present it powers the
     interactive components (tabs, accordions, copy) and scroll motion (reveals, stagger, parallax,
     count-up), so link it whenever it exists. Use the exact filenames the brand's `DESIGN.md` names,
     with the CSS `<link>` and (if present) a deferred `<script>` in `<head>`, and fix the relative
     depth to where the page lives (from `projects/{project-name}/` the foundation is two levels up):
     ```html
     <link rel="stylesheet" href="../../DesignLibrary/{Brand}/brand/css/{brand-stylesheet}.css">
     <script src="../../DesignLibrary/{Brand}/brand/js/{brand-script}.js" defer></script>
     ```
2. **Never edit the base — enhance on top of it.** `DESIGN.md`, design-system/base CSS, tokens, fonts,
   and any existing shared styles are a **read-only foundation**. All of your work is **additive,
   page-scoped enhancement** layered above it. If achieving the look seems to require changing the base,
   you're doing it wrong — express it as page-level styles, or flag it to the user.
3. **No `DESIGN.md`? Fall back to tasteful defaults** the way `frontend-design` would — a distinctive
   display/body pairing and a committed palette that serve the Cinematic Editorial look.
4. **Stay on-system.** No off-`DESIGN.md` colours, no non-`DESIGN.md` fonts, no ad-hoc font sizes.
   Anything not in the system is page-level polish only, and must stay on-palette and font-agnostic.
5. **Honour the design system's own rules** — accessibility/contrast pairings (meet WCAG AA), naming and
   voice, and any component usage guidance stated in `DESIGN.md`.

## Design principles (the ethos)

- **Commit to the direction.** Precision beats intensity — but timidity is the enemy. Every screen
  should have one thing someone remembers.
- **Dominant + accent, never evenly-distributed.** A dominant surface with sharp, sparing accents reads
  as designed; a flat spread of equal-weight colour reads as a template.
- **Intentional space.** Generous negative space *or* controlled density — chosen on purpose.
- **Details compound.** Easing, spacing rhythm, transform-origins, stagger — individually invisible,
  collectively the difference between "fine" and "stunning."

## Visual direction — "Cinematic Editorial"

Six directives. Express each using what `DESIGN.md` defines.

1. **Colour-field sections, not a white page.** Alternate full-bleed surfaces to build a cinematic
   **dark ↔ bright rhythm**. Use the darkest surface (e.g. the primary/inverse surface) and the lightest
   neutral from the system, plus accent washes. A page that is white top-to-bottom has failed this.
2. **Oversized display vs. small labels.** Set hero and section headlines at the **top of the type
   scale**, stacked, with tightened leading and slightly tightened tracking. Pair them with **small,
   uppercase, tracked eyebrow labels**. The scale contrast (huge ↔ tiny) is the signature — keep the
   mid-range quiet.
3. **Asymmetric editorial composition — use the width.** Pin imagery to edges, float content panels over
   colour fields, break the centre, and let content reach toward the screen edges on large viewports.
   Keep the message **sharp and concise** — short, confident lines beat long paragraphs. Use the
   system's layout primitives (containers, grids, splits); avoid the narrow, symmetrical centered stack.
4. **Let imagery carry the mood and the message — not walls of text.** A good UI should *show*, not
   just tell. Lean on images to set tone and communicate: full-bleed hero backdrops, edge-pinned figures,
   floating panels, supporting shots beside key points. Where a section is drifting toward a dense
   paragraph, **ask whether an image (or an image + one sharp line) would say it better**, and prefer that.
   Treat photography as a first-class material that guides emotion and meaning — text is the caption to
   the visual, not the other way around. (See *Working with image assets* for the mechanics and the
   no-imagery placeholder rule.)
5. **Atmospheric depth.** Add quiet atmosphere: a subtle neutral grain overlay, soft floating shadows,
   blur-to-focus on entrance, duotone-leaning imagery. Depth, never decoration for its own sake.
6. **One statement per screen.** For an important, strong-mood, one-line message (a hero line, a pivotal
   quote, a single big idea), let that section **fill the viewport** (`min-height: 100svh`, the
   statement centered/anchored with room to breathe) so the reader **scrolls to reveal the next
   section**. Reserve this for moments that earn it; dense content sections still flow normally.

> **Subtle but bold.** These directives push for a confident, image-led, spacious look — but restraint is
> the discipline that makes it land. Big type, intentional space, and strong imagery *are* the boldness;
> don't pile on effects, extra colours, or busy decoration on top. One remembered thing per screen —
> executed cleanly — beats five competing ones.

## Motion & interaction

Motion is phase ③ — **invoke the `emil-design-eng` skill to author it**; it is the source of the detailed
craft. **Scroll-driven reveal and smooth section-to-section transitions are the backbone of a case
study's feel and are required** — a page that sits static as you scroll has not finished this phase. The
taste-level intent to hold it to:

- Use the **design system's easing and duration tokens**. If absent: `--ease-out: cubic-bezier(0.23,1,0.32,1)`, UI durations 150–250ms.
- **UI motion < 300ms.** Enter = ease-out. On-screen movement = ease-in-out. Never `ease-in` on UI.
- **Smooth anchored scrolling** — `scroll-behavior: smooth`, gated behind `@media (prefers-reduced-motion: no-preference)`.
  Anchor/CTA jumps and section navigation should **glide, never teleport**, so the reader keeps their
  place as the page moves between sections.
  > ⚠️ **`scroll-behavior: smooth` only smooths *anchor jumps* (clicking a `#section` link,
  > `scrollIntoView()`).** It does **nothing** to the normal wheel/trackpad scroll — that's the OS's job,
  > and you must **not** hijack it with a JS scroll library. So this rule alone will *not* make the page
  > "feel smooth." **The felt smoothness comes from the scroll-reveal choreography below** — that is the
  > deliverable, not `scroll-behavior` on its own. Don't treat the page as done just because that one
  > line is present.
- **Scroll-reveal on every section — the backbone.** As each section enters the viewport, its content
  should **rise + fade in** (start `translateY(~16–24px)` + `opacity: 0` → settle), with grouped elements
  **staggered 30–80ms apart** so a section assembles rather than popping. This is the **default entrance
  for the whole page**, applied to every meaningful section, not a one-off flourish. A page where content
  is fully painted and static on load has **not** implemented this.
- **Cinematic scroll motion.** Tie reveal and parallax to scroll *position* with CSS
  **`animation-timeline: view()`** (and `animation-range`), not one-shot JS toggles. Rise+fade content
  as it enters; drift media across the viewport for depth. **Gate it in
  `@supports (animation-timeline: view())`** so unsupported browsers fall back to the design system's
  IntersectionObserver reveal, and inside `@media (prefers-reduced-motion: no-preference)`.
- **Between full-viewport "one statement per screen" sections**, make the reveal of the next section feel
  like an intentional transition — the outgoing statement can settle/dim slightly while the incoming
  section rises in — so scrolling reads as a smooth, cinematic hand-off, not an abrupt cut.
- **Never animate from `scale(0)`** — start `scale(0.96)` + opacity. Popovers scale from their trigger;
  modals stay centered. **Pressable elements get `transform: scale(0.97)` on `:active`.**
- **Stagger** grouped entrances 30–80ms apart. Use **blur to mask** off-feeling crossfades (small,
  <12px, brief).
- **Performance is part of motion.** Animate **only `transform` and `opacity`**. Avoid full-viewport
  `mix-blend-mode` overlays and large/animated `filter: blur()` on big elements. Bake grain as a
  **static tiled background** (data-URI SVG), not a blended live-filter layer.
- **Honour `prefers-reduced-motion`** — drop movement, keep opacity/colour. Per `emil-design-eng`,
  reduced motion means **fewer and gentler, not zero**: keep the opacity/colour fade that aids
  comprehension, remove only the `translateY`/parallax movement. Never leave content invisible.

### Verify motion actually runs (before calling phase ③ done)

Stating the motion isn't shipping it — pages regularly land **static** even when the CSS looks right.
Run this checklist; it keeps phase ③ honest and aligned with `emil-design-eng`:

1. **`scroll-behavior: smooth` is *not* the reveal.** If the only "motion" on the page is that one line,
   the reveal never got built (see the warning above). The felt smoothness is the scroll-reveal
   choreography — verify that exists.
2. **Review with Reduce Motion OFF — then check the reduced path.** Reveals are gated behind
   `prefers-reduced-motion: no-preference`; if your OS has **Reduce Motion on** (macOS: System Settings →
   Accessibility → Display → Reduce Motion) you'll see no movement and wrongly think motion is broken.
   Turn it **off** to review the full experience. Then confirm the reduced-motion path still **fades
   content in (opacity) and just drops the movement** — not a hard pop, never invisible.
3. **Reveal actually fires on scroll.** Scroll top-to-bottom: content should **rise + fade** as each
   section enters. Primary mechanism is CSS `animation-timeline: view()`; the fallback for unsupported
   browsers is Emil's `IntersectionObserver` reveal with `{ once: true, margin: "-100px" }`. Confirm one
   of the two genuinely runs.
4. **Fallback is wired — brand JS linked + hook classes present.** The IntersectionObserver fallback and
   stagger live in the brand's JS enhancer. If it isn't linked (golden rule #1) or the reveal elements
   lack the class it targets, non-supporting browsers get nothing. Verify the deferred `<script>` is in
   `<head>` and the hook classes are on the elements.
5. **Nothing stuck at `opacity: 0`.** Every reveal needs a guaranteed **visible end-state**, so content
   never depends on an animation that might not fire.
6. **Watch it — ideally in slow motion.** Per Emil's debugging guidance, play the reveal/stagger at
   reduced speed (DevTools animation inspector) to check easing and that grouped items are staggered
   30–80ms apart and in sync. Screenshot mid-reveal to prove it moves.

## Reusing the design system's components (verify in context)

- **Prefer the system's classes and JS hooks** over rebuilding — but confirm they actually render where
  the output will be viewed.
- **`file://` caveat:** brand icons drawn with CSS `mask: url(...)` (and other masked/extern-referenced
  assets) **do not load when a page is opened directly via `file://`** — they silently vanish and read
  as "same colour as the background." A standalone page that may be double-clicked open should **inline
  the same glyph as SVG** (`fill: currentColor`), or be served over a local HTTP server. Re-wire any
  behaviour that targeted the original class (e.g. an accordion chevron rotation) with an equivalent
  page-scoped rule.
- **Match the component to the content.** Components tuned for a short statement break on long content —
  step the size/measure down page-scoped, or pick a better-suited component, rather than forcing it.
- **Always view the result in the real context** (open it, screenshot it) before calling it done.

## Anti-slop guardrails (do NOT ship)

- A white page with a centered hero and three equal feature cards.
- Timid, evenly-distributed pastel palettes; off-`DESIGN.md` colours; default/system fonts when the
  system defines a typeface.
- Uniform mid-size type everywhere (no scale drama); symmetrical everything; motion with no purpose.
- Reinvented tokens, an inlined copy of the base stylesheet, or edits to the foundation.

## Applying it

Compose a cinematic rhythm:
`colour-field hero → intro / context → approach → oversized stat or impact moment → edge-pinned gallery
→ testimonial / pullquote → CTA → dark closing footer`. Ground every section in the design system's
components and tokens. Scale the effort to the ask: a single component needs restraint and precision; a
full page can carry the full cinematic treatment.

## Working with image assets

If the user provides real imagery, **use it across the page** — it's the strongest way to hit the
cinematic look. Treat photography as a first-class material:
- Put page images in the **page-local `assets/` folder** and reference them with relative paths
  (`assets/…`).
- Use them as **full-bleed hero backdrops, edge-pinned figures, and floating panels** — cover-fit
  (`object-fit: cover`), reveal on scroll, lean duotone/monochrome to sit on-palette, paired with soft
  floating shadows. A full-bleed image + a single overlaid line is a natural "one statement per screen"
  moment.
- **If no imagery is supplied, drop a plain, unstyled placeholder** where the image will go — a bare
  `<img>` with descriptive `alt` (and a neutral empty box sized to the slot), **with no decorative
  styling** — so the user can drop the real asset in later. Do not fabricate abstract gradients or
  textures to stand in for a missing image.

Brand logo/icons/fonts stay linked from the foundation — only project imagery goes in `assets/`.
