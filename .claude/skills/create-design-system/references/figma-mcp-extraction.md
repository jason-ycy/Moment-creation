# Figma MCP Extraction Guide

Use this reference only when the user has chosen the Figma-sourced path and a Figma MCP connector is available. It maps what you can pull from Figma onto the sections of `assets/DESIGN_TEMPLATE.md`.

## Before you start

1. Confirm a Figma MCP tool is actually connected. If not, tell the user and offer to fall back to the manual path (do not silently skip to manual — say so explicitly).
2. Ask for the Figma file link (or file key) if not already given.
3. Fetch, in this order: file styles/variables (color + text styles), then components, then any published library metadata. Don't try to fetch everything in one call if the tool paginates — fetch what you need per section below.

## Mapping table

| Figma data | Template section | Notes |
|---|---|---|
| Color styles / variables (fills) | Tokens — Colors | Map each Figma color variable name → a token name. Note if a color is only ever used inside an image/photo (not as a UI fill) — flag it as "carried by imagery" per the template's instruction. |
| Text styles (font family, size, weight, line height, letter spacing) | Tokens — Typography + Type Scale table | Group by font family first. If Figma has more than 2 families, ask the user which are primary vs. incidental — don't just dump every style found. |
| Effect styles (shadows) | Elevation | If none exist, state explicitly "no elevation system" rather than leaving blank. |
| Corner radius values used across frames/components | Border Radius | Only include radii actually applied to shipped components, not arbitrary frames. |
| Spacing between elements (auto-layout gap values) | Spacing Scale / Layout | Figma auto-layout "gap" and "padding" values map directly to spacing tokens — extract, don't round to a generic 4/8px grid unless that's genuinely what's used. |
| Published components (buttons, nav, cards, etc.) | Components | Figma gives you the visual spec (size, color, radius, padding) but NOT the "Role" sentence or design rationale — you must ask the user for that, or infer conservatively from the component name and flag it as inferred so they can correct it. |
| Frames/exported assets (logo, icon set, wordmark) | Imagery + brand/ folder | Download or ask user to export these; save into `/DesignLibrary/{Name}/brand/logo/` or `brand/icons/` and link relative paths from the Imagery and Components sections. |
| Font files (if self-hosted/custom, not a system font) | Typography + brand/fonts/ | If Figma references a custom font not on Google Fonts/system fonts, ask the user to attach the font file directly — Figma MCP typically can't export font binaries. |

## What Figma can never give you

These require asking the user directly — do not invent them:
- The one-paragraph design philosophy intro
- Component "Role" rationale sentences
- Do's and Don'ts (Figma shows what exists, not what's forbidden)
- Scale Philosophy (the *logic* behind the scale)
- Similar Brands
- Photography Brief (unless the file itself contains photography, in which case describe what's observed, then ask the user to confirm intent)

## Handling gaps

After extraction, produce a short list of "filled from Figma" vs. "needs your input" sections before writing anything into `DESIGN.md`, so the user can quickly supply the missing prose or say "skip" per-section.
