---
name: create-design-system
description: Implements a brand's design system (e.g. into Figma via the Figma MCP skills), grounded in the chosen brand's DESIGN.md in the Design Library. PLACEHOLDER — in development; not yet functional. The Creation Engine routes "Design-system implementation" artefacts here.
when_to_use: Trigger when the Creation Engine (agent.md) routes a "Design-system implementation" artefact to this skill.
---

# create-design-system — design-system implementation (placeholder)

> ⚠️ **This skill is a placeholder and is still in development.** It is not yet functional.

## What to do when this skill is invoked

1. Tell the user, plainly and in the brand voice, that the **design-system implementation** builder is not built yet.
2. Offer the working alternative: the **Case study** artefact (`create-case-study`), which is fully functional today.
3. Do **not** improvise an implementation — stop and let the user choose.

## Intended behaviour (once built)

- **Start with an Intake phase** (like `create-case-study`): read any brief the user provides — a file
  they name, or a `brief.md` / `brief.json` in the project folder — and ask only for the gaps before
  building. Ship a design-system-specific `brief-template.md`.
- Read the chosen brand's `DESIGN.md` and `brand/` resources from `DesignLibrary/{Brand}/` as the source of truth.
- Drive a design-system implementation — e.g. build the tokens, styles, and component library in **Figma** using the Figma MCP skills (`figma-generate-library`, `figma-use`, etc.).
- Follow the same read-only-foundation and brand-fidelity rules as the other skills.
