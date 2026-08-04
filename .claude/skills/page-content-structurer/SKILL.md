---
name: page-content-structurer
description: Turn messy, unstructured content (pasted text, briefs, docs, notes) into a clean structured spec — Top Nav, Hero, and Sections built from named components (Text block, Card gallery, Content carousel, Four blocks, Typographic section, etc.) with badges, headings, captions, and image placeholders — that an AI agent can use to generate an HTML page or landing page without guessing or overreaching. Use this whenever the user pastes raw content and wants it "structured," "organized," or turned into a "content brief," "page spec," or "content structure" before generating a page; mentions building a landing page/case-study page/website/HTML from rough notes; or references the content structure format/template. The output is a disposable working document, not meant to be saved into a project.
---

# Page Content Structurer

## Why this exists

An agent asked to "make an HTML page from this content" with nothing but raw, unstructured text will guess at scope — inventing sections, tone, or features the person never asked for. The fix is giving the agent a spec instead of a wall of text: what sections exist, what each one says, what kind of component it should be, and where visuals go. The more of that decision-making happens up front, the less room there is for the generating agent to wander.

This skill takes whatever messy content the person hands over and produces that spec — filled into the template below — ready to paste straight into a page-generation prompt.

## Workflow

1. **Get the raw content.** Pasted in chat or in an uploaded file — read the file first if that's the source. Don't ask the person to reformat it themselves; that's what this skill is for.

2. **Find the natural sections.** Read through and look for where the content breaks into distinct chunks — by topic shift, heading, or repeated pattern. Use however many sections the content actually supports.

3. **Identify the hero.** Usually the first thing mentioned, or whatever line best captures the whole piece. Bold the 1–2 words carrying the core idea in the Title. Add a Caption only if there's a genuine supporting line beyond the title. Only add the SCROLL indicator Component if the content clearly functions as a long scroll-driven page.

4. **For each remaining chunk, pick a Component before filling in fields** — check `references/section-types.md` for the full list and how to choose between look-alikes. In short:
   - One sustained idea with real body copy → **Text block**
   - One single powerful statement with little else → **Typographic section** (Hero text + Caption)
   - A short establishing beat, mostly heading + visual → **badge/intro section** (Badge + Title + Image placeholder)
   - 3+ parallel items that are just short label pairs → **Card gallery**
   - 3+ parallel items that each carry their own image + real description → **Content carousel**
   - A visual recap of items introduced earlier → **Gallery showcase**
   - Concrete numbers each with one line of context → **Four blocks** (name it for however many stats exist)

5. **Fill the fields for the chosen Component:**
   - **Badge** — add it when the section is substantial enough to earn a nav link; use the exact same short text for both.
   - **Title / Heading / Hero text** — match the label to the Component (see template). Add `[break line]` only where a big display headline benefits from a manual break. Bold 1–2 core words — sparingly, not every line.
   - **Caption / Description** — Caption is a light one-liner; Description is substantive body copy. Don't summarize away specific facts, numbers, or names — they need to survive into the generating agent's prompt.
   - **Image** — write `[Image placeholder]` whenever the Component conventionally carries a visual (hero, badge/intro sections, carousel pages), even if the source never mentioned an image. It's a slot marker, not an invented image. Skip it on plain Text blocks and Typographic sections unless the source implies one.
   - **Repeating items** (Card gallery / Content carousel / Four blocks) — nest them as shown in the template, one line per item.

6. **Fill the Top Nav Bar** using the exact Badge/short-label text for every nav-worthy section, in page order.

7. **Write Notes for the Agent.** Cover: tone; facts that must appear verbatim (numbers, names, quotes); anything explicitly said to avoid; adaptation calls made (e.g. merged two overlapping paragraphs); anything flagged for the person to confirm before use (e.g. a name or line in the source that looks like an internal note rather than public copy); and which Image fields are placeholders versus specified.

## Output format

Fill in `assets/content-structure-template.md` exactly — same headings, same field conventions. Output it as the response itself (or a markdown file if it's long), not saved into any project file — this is a working document meant to be handed to a page-generation prompt and then discarded.

Keep field values terse. This is a briefing document for another agent, not the final copy — full marketing prose belongs in the actual page-generation step, not here.

## Handling messy or sparse input

- **No clear sections** (a single unbroken paragraph or brain-dump): one Hero with the core message, and note in Notes for the Agent that the source didn't break out naturally.
- **Way more content than fits cleanly**: group by theme, not every topic shift — note in Notes for the Agent that you condensed, and roughly how.
- **Content already half-structured** (has headings, or an existing draft of this same spec): keep the person's structure and section order; just fill in or correct the missing/wrong fields rather than reorganizing it.
- **Repeated/overlapping paragraphs** in the source (the same point made twice in different words): merge into one section rather than duplicating, and say so in Notes for the Agent.
- **A line that reads like an internal note, not public copy** (e.g. comparing agencies, leftover instructions): leave it out of the sections and flag it explicitly in Notes for the Agent rather than silently deciding which version is correct.
- **Ambiguous section boundaries**: prefer fewer, clearer sections over many thin ones.
