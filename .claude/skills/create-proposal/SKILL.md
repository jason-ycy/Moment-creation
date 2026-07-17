---
name: create-proposal
description: Builds an on-brand client proposal artefact (grounded in the chosen brand's DESIGN.md in the Design Library). PLACEHOLDER — in development; not yet functional. The Creation Engine routes "Proposal" artefacts here.
when_to_use: Trigger when the Creation Engine (agent.md) routes a "Proposal" artefact to this skill.
---

# create-proposal — client proposal builder (placeholder)

> ⚠️ **This skill is a placeholder and is still in development.** It is not yet functional.

## What to do when this skill is invoked

1. Tell the user, plainly and in the brand voice, that the **proposal** builder is not built yet.
2. Offer the working alternative: the **Case study** artefact (`create-case-study`), which is fully functional today.
3. Do **not** attempt to generate a proposal from scratch or invent a workflow — stop and let the user choose.

## Intended behaviour (once built)

- **Start with an Intake phase** (like `create-case-study`): read any brief the user provides — a file
  they name, or a `brief.md` / `brief.json` in the project folder — and ask only for the gaps before
  building. Ship a proposal-specific `brief-template.md`.
- Read the chosen brand's `DESIGN.md` from `DesignLibrary/{Brand}/` for palette, type, voice, and components.
- Produce a self-contained proposal under `projects/{project-name}/` with its own `assets/`, linking the brand system (never duplicating tokens, never editing the foundation).
- Follow the same read-only-foundation, output-location, and brand-voice rules as `create-case-study`.
