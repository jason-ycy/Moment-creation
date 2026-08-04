# Section Type Cues

Use this to pick the **Component** for a section, and which sub-fields it needs. Match the *shape* of the raw content to a pattern — not the topic.

## Simple / landing-page components
| Content shape | Component | Fields it uses |
|---|---|---|
| Single sustained narrative paragraph | Text block | Title, Description |
| 3–6 short items, each a label + one line | Feature grid / icon list | Title, Description + short cards |
| Question-like lines followed by answers | FAQ accordion | Title + Q/A pairs |
| Named people with quotes | Testimonial grid / carousel | quote + name/role per item |
| Ordered steps ("first / then / finally") | Timeline / stepper | Title + ordered steps |
| Tiers with prices + feature checklists | Pricing table | tier name, price, features |
| Company/partner names, little else | Logo bar / marquee | list of names |
| A single strong ask near the end | CTA banner | Title, Description |

## Editorial / case-study components
These fit longer-form, scroll-driven pages (case studies, brand stories) where sections do more than "heading + paragraph."

| Content shape | Component | Fields it uses |
|---|---|---|
| Opening hook, sets up the whole piece | Hero (with optional **SCROLL indicator**) | Title (bold the key word/phrase), Caption, Component |
| A short label above a heading that also matches a nav link | **Badge** | just the kicker text — pairs with any other component below |
| A single big standalone statement carrying the whole section's point, little/no body copy | **Typographic section** | Badge + Hero text (the statement itself, [break line] where it helps) + Caption (light follow-up line) |
| A short intro/establishing section, mostly a title + a visual | **Introduction / badge-image section** | Badge + Title + Image placeholder |
| A section built on 3+ parallel items that are each just a short label pair (type + heading, no long description) | **Card gallery** | list of Card N - Type: ..., Heading: ... |
| A section built on 3+ parallel items that each carry their own image + heading + real body copy (richer than a card) | **Content carousel** | list of Page N - Image, Title, Description |
| A restated/visual recap of items already introduced elsewhere (e.g. revisiting "past/present/future" as a closing visual beat) | **Gallery showcase** | Title, Description + a Card gallery of the recap items |
| Concrete numbers/metrics, each with one line of context | **Four blocks** (or however many stats exist) | list of Block N - Heading: [the stat], Caption: [context] |
| Closing reflection / brand statement, no explicit CTA | **Typographic section** or plain Text block | Hero text or Title + Caption/Description |

## How to choose between similar-looking options

- **Card gallery vs Content carousel vs Four blocks** — all handle "3+ parallel items," but differ by how much content each item carries:
  - Just a type + short heading → Card gallery
  - Its own image + real description → Content carousel
  - A number/metric + one line of context → Four blocks
- **Typographic section vs Text block** — if the section's power is one sentence and everything else is a caption at most, it's Typographic (Hero text). If there's real explanatory body copy, it's a Text block (Title + Description).
- If a section doesn't clearly match anything here, describe it plainly (e.g. "two-column text + image") rather than forcing it into a category — clarity for the generating agent matters more than naming coverage.

## Conventions that apply across all components

- **Badge ↔ Nav**: whenever a section gets a Badge, that same short text should appear as its Top Nav link — keep them identical so the page's nav and its content stay in sync.
- **Bold emphasis**: bold 1–2 words per headline that carry the section's core idea (e.g. "connected", "value", "foundations"). Use it sparingly — not every line needs it, and never bold a whole sentence.
- **[break line]**: add this marker inside a Title/Hero text only where a big display headline benefits from a manual line break (numbered items, short punchy statements). Skip it on ordinary body copy.
- **Image placeholder**: write `[Image placeholder]` for any Image field on a component that conventionally carries a visual (hero, badge/intro sections, carousel pages) — even when the source never mentioned an image. It's a slot marker for the person to fill later, not an invented image.
