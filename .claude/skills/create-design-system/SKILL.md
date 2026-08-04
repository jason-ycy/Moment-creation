---
name: create-design-system
description: Guides a user through creating a DESIGN.md style-reference document for a brand or product design system (tokens, typography, colors, components, usage rules), and can also implement reusable CSS files and a design-system.html verification page from it. Use whenever the user says "create a design.md", "set up a design system doc", "generate a style reference", "document my Figma design system", "implement the CSS for my design system", "verify my design system", or similar — from scratch or from an existing Figma system. Also use for follow-up requests to generate CSS files (tokens.css, component.css, main.css) from an existing DESIGN.md, or to create/refresh its design-system.html verification page — these are part of this skill's workflow, not a separate frontend task. Saves DESIGN.md, optional CSS files, and design-system.html into a persistent /DesignLibrary/{system name}/ folder, alongside brand assets (logo, icons, fonts).
---

# Create Design System

Interviews the user (or extracts from Figma via MCP) to produce a `DESIGN.md` style-reference document, following the structure in `assets/DESIGN_TEMPLATE.md`. The template's own embedded instructions ("How to fill this in" at its end) are binding — read them before writing any content.

## Critical rules — read first

- **Extract, don't invent.** Every color, size, spacing value, and rationale sentence must come from what the user told you or from real Figma data — never fill gaps with generic design-template defaults.
- **Every section is skippable.** If the user doesn't have an answer, mark that section `_TBD_` (or omit the row/block) and move on. Never block progress waiting for a "complete" answer.
- **The folder is created immediately**, before any content exists — see Step 1.
- **Keep the template's voice**: prose sections (intro, component Roles, Do's/Don'ts, Scale Philosophy, Photography Brief) should read as confident, opinionated rationale — not a neutral spec sheet.
- Keep questions short — one at a time or a small tappable set, not a wall of 10 questions at once.

## Step 1 — Name the system and create the folder (always first)

Ask for the name of the design system/brand/project. As soon as you have it, before asking anything else, create:

```
/DesignLibrary/{Name}/
/DesignLibrary/{Name}/DESIGN.md          (start from assets/DESIGN_TEMPLATE.md, or empty if unavailable)
/DesignLibrary/{Name}/brand/logo/
/DesignLibrary/{Name}/brand/icons/
/DesignLibrary/{Name}/brand/fonts/
/DesignLibrary/{Name}/brand/CSS/         (empty for now — populated later, only if the user opts into Step 6.5)
```

If the user renames the system later in the conversation, rename/move this folder — don't create a duplicate.

This skill folder itself (`create-design-system/`, containing this SKILL.md) is completely separate from `/DesignLibrary/` — never confuse the two. `/DesignLibrary/{Name}/` is where the *output* lives; this skill's own files are instructions, not output.

## Step 2 — Get the mood/description

Ask for a one-sentence-to-one-paragraph description of the visual mood. Give 1–2 example phrasings pulled from the template to calibrate tone, e.g.:
- "luxury fashion editorial"
- "brutalist fintech"
- "playful edtech"

This becomes the tagline + intro paragraph in the template.

## Step 3 — Branch: manual vs. Figma-sourced

Ask: does the user have an existing design system in Figma to pull from, or should you build it from scratch together?

- **Figma-sourced** → read `references/figma-mcp-extraction.md` before doing anything else, then follow it. If no Figma MCP tool is connected, tell the user plainly and fall back to manual.
- **Manual** → go to Step 4.
- Either path can be mixed: e.g. pull tokens from Figma, then manually interview for Do's/Don'ts and Scale Philosophy, since Figma can never supply those (see the reference file's "What Figma can never give you" list).

## Step 4 — Walk through sections (manual path, or gap-filling after Figma extraction)

Go through `assets/DESIGN_TEMPLATE.md` in this order, using its bracketed placeholder text as the prompt/example for each question:

1. Implementation (the styling-entry-point callout — fill last, once you know whether Step 6.5 will run, but it's placed first in the doc; a placeholder default of "no CSS files yet" is fine while drafting)
2. Tokens — Colors
3. Tokens — Typography (+ Type Scale table)
4. Tokens — Spacing & Shapes (spacing scale, border radius, layout)
5. Components (one Role sentence + spec per component — nav, buttons, links/wordmark, hero surface, headline treatment, signature shape, utility cards)
6. Do's and Don'ts
7. Surfaces
8. Elevation
9. Imagery
10. Layout
11. Agent Prompt Guide (must end up literally copy-pasteable by a coding agent; its opening linking instruction shares state with Implementation — see Step 6)
12. Scale Philosophy
13. Photography Brief — only if imagery/photography is actually a core carrier of identity; otherwise skip the section entirely
14. Similar Brands
15. Quick Start CSS — always generate this at the end from whatever tokens were collected, even if some sections were skipped; keep in sync with Implementation and the Agent Prompt Guide (see Step 6)

Ask about a handful of related fields at once where natural (e.g. all colors in one go), but don't overwhelm — offer "skip this section" explicitly every time.

## Step 5 — Ingest brand assets whenever offered

Whenever the user attaches or mentions a logo, icon, or font file — at any point in the conversation, not just once:

1. Copy the file into the matching folder: `/DesignLibrary/{Name}/brand/logo/`, `brand/icons/`, or `brand/fonts/`.
2. Link it into `DESIGN.md` with a relative path (e.g. `brand/logo/wordmark.svg`) from the section it belongs to:
   - Logo/wordmark → the wordmark Component entry and/or Imagery section
   - Icons → Imagery (iconography subsection)
   - Fonts → Typography (as the actual font file backing a `--font-[name]` token)
3. If the file type is ambiguous (e.g. an unlabeled icon that could be a logo mark), ask a quick clarifying question rather than guessing.
4. If an asset doesn't map cleanly to any template section, add a short "Bundled Assets" list near the bottom of `DESIGN.md` so it's still linked and not silently dropped.

## Step 6 — Write the final DESIGN.md

Assemble everything collected into `/DesignLibrary/{Name}/DESIGN.md`, following the template structure and its embedded fill-in instructions:
- Be exhaustive on tokens actually observed — don't round to a generic 4/8px scale unless that's genuinely what's used.
- Every component gets a Role line before its visual spec.
- Agent Prompt Guide entries must be literal, unambiguous instructions a coding agent could follow with no other context, and must open with the styling-source linking instruction (see template).
- Always emit the Quick Start CSS custom-properties block, covering every token actually collected.
- Always fill in the Implementation callout right after the intro — this is the styling entry point a future agent should see before anything else. At this stage (before Step 6.5 runs) it defaults to "no CSS files yet."
- Remove the template's own meta "How to fill this in" instructions section from the final output — that's authoring guidance, not part of the deliverable.

## Step 6.5 — Offer to implement CSS files (optional)

After DESIGN.md is written, ask the user whether they want to implement the CSS now, so that any future agent asked to build HTML from this design system can link real stylesheets instead of re-generating styles from scratch every time (saves output tokens on every future use).

- **If the user declines:** skip. Note in Step 7's summary that CSS hasn't been implemented yet, and that implementing it later will replace the inline Quick Start CSS block in DESIGN.md with file links (see template rule 6).
- **If the user accepts:**
  1. **Ask about switching models first.** Translating a full token/component set into correct, consistent CSS is a complex task — mention this to the user and ask if they'd like to switch to a stronger model before you proceed. This is advisory, not a gate: proceed with whichever model they're on once they respond (or don't respond with a preference).
  2. Generate CSS files into `/DesignLibrary/{Name}/brand/CSS/`, derived strictly from what's actually in DESIGN.md — never invent values. Exactly two files sit underneath `main.css` (do not add a third, e.g. no separate `brand.css` — brand-specific values like logo-linked colors or brand-only overrides go straight into `tokens.css` alongside the rest of the tokens):
     - `tokens.css` — the CSS custom properties (colors, type scale, spacing, radii, and any brand-specific values) straight from the Quick Start block.
     - `component.css` — component-level styles (nav, buttons, cards, etc.) built from the Components section.
     - `main.css` — the single top-level entry point, and nothing else. It only `@import`s the other files (`tokens.css`, `component.css`, in that order) — it doesn't define any styles of its own. This makes `main.css` the only stylesheet any future HTML implementation needs to link — everything else gets pulled in through it, so nothing has to be re-implemented or linked separately.
  3. **Replace, don't append, in three places:** swap the inline `:root { ... }` block for the "Reusable CSS" reference wherever it appears in DESIGN.md — the Quick Start CSS section, the Implementation callout near the top, and the opening line of the Agent Prompt Guide (see template rule 6). All three must point to `main.css` as the one file to link, consistently.

## Step 6.6 — Create the design-system.html verification artifact (always required)

Regardless of whether Step 6.5 was accepted, this step always runs once DESIGN.md is finalized (or has just been updated with real CSS links).

1. **Ask about switching models first**, same as above — verifying that an HTML render actually matches the design system, and debugging it if not, benefits from a stronger model on complex systems. Ask, then proceed either way based on the user's answer.
2. Create `/DesignLibrary/{Name}/design-system.html`, at the same level as `DESIGN.md`. It should showcase, at minimum: the color palette, type scale, spacing scale, and every component defined in the Components section — enough to visually confirm DESIGN.md was captured correctly.
3. **Styling source:**
   - If CSS files exist in `brand/CSS/`, link only `main.css` with a single `<link rel="stylesheet" href="brand/CSS/main.css">` — it already imports tokens and component styles, so nothing else needs linking. This also doubles as a check that the imports and component styles actually work together correctly.
   - If no CSS files exist yet, inline minimal CSS derived directly from DESIGN.md's current Quick Start CSS block, and add an HTML comment noting no persistent CSS files exist yet.
4. **Debug once:** after generating, review the rendered structure yourself for obvious mistakes — wrong token names, missing components, broken stylesheet links — and fix them now, so future reuse of the CSS/HTML doesn't repeat the same errors.
5. Link back to `DESIGN.md` from the HTML (e.g. a comment or small footer note) so it's clear which is the source of truth.

## Step 7 — Summary checklist

End with a short summary:
- Which sections were fully filled, which were skipped (`_TBD_`) — so the user knows what's still open and can return anytime to fill them in.
- Which brand assets were stored and where they're linked in `DESIGN.md`.
- Whether CSS files were implemented (and their paths) or deferred, and whether DESIGN.md's Quick Start CSS section, Implementation callout, and Agent Prompt Guide opening line were all updated consistently to reflect it.
- Confirmation that `design-system.html` was created, with its path, and whether it uses real CSS files or inline fallback styles.
- Whether a model switch happened for the CSS or HTML step.
- The final paths: `/DesignLibrary/{Name}/DESIGN.md` and `/DesignLibrary/{Name}/design-system.html`.

## Reference files

- `assets/DESIGN_TEMPLATE.md` — the structural scaffold for every DESIGN.md this skill produces. Copy it, don't paraphrase its structure from memory.
- `references/figma-mcp-extraction.md` — read this before starting the Figma-sourced path. Covers what Figma data maps to which template section, and what it can never supply.
