# CLAUDE.md — How the Creation Engine works

Welcome 👋 This repo is a **Creation Engine**: it helps our team produce on-brand artefacts —
case studies, proposals, design-system implementations — each grounded in a real brand's design
system. Jason has set up the foundation (the Design Library and the skills); your job is the fun
part: **tell the engine what you want to make, and build it on top of that foundation.**

This file is for **two readers**:
- **You (a teammate)** — you **download** this project once, then build on top of it with Claude. No Git workflow to learn.
- **Claude** — the AI assistant reads this every session so it follows our rules and keeps you safe.

> **Two files, two jobs:** **`CLAUDE.md` (this file) is the *context*** — how the engine works and the
> rules it must follow. **[`agent.md`](agent.md) is the *decision-maker*** — the step-by-step flow
> Claude follows to route a request to the right brand and the right skill. When a teammate wants to
> **create an artefact, Claude reads and follows [`agent.md`](agent.md).**

> **How you use this:** the project is a **downloadable toolkit** — you grab a copy, open it with Claude,
> and build your artefacts locally under `projects/`. The **Design Library is the shared, read-only
> foundation** everyone builds on; your work lives in your own copy and never changes it. See the
> [README](README.md) for how to download and get started.

---

## TL;DR (60 seconds)

- 🤖 **The engine drives.** Say what you're making; Claude follows [`agent.md`](agent.md) to match you to a **brand** (in the Design Library) and a **skill** (the tool that builds it), confirms, then builds.
- 📚 **The [Design Library](DesignLibrary/) is the single source of truth.** Each brand lives in its own folder (e.g. [DesignLibrary/CognizantMoment/](DesignLibrary/CognizantMoment/)) with a `DESIGN.md` and its `brand/` assets. Link the brand stylesheet — never reinvent colours, fonts, or components.
- 📁 **All outputs go in [projects/](projects/):** one self-contained folder each — `projects/{project-name}/` holds an `index.html` **and** its own `assets/`.
- ⬇️ **Download once, build locally.** Grab a copy of this project (see the [README](README.md)), open it with Claude, and build in `projects/`. There's no branching, committing, or pull requests to learn.
- 🗣️ **Just talk to Claude in plain English** ("build me a case study for Acme from this Figma design"). Claude **explains what it's about to do and waits for your OK before running anything.**

---

## What's in this repo

| Path | What it is |
| --- | --- |
| **[agent.md](agent.md)** | **The Creation Engine's decision flow.** Matches your brand + artefact to a folder and a skill, then hands off to build. Claude follows this to route a request. |
| **[DesignLibrary/](DesignLibrary/)** | The **Design Library** — one folder per brand. Each holds that brand's `DESIGN.md` + `brand/` assets. The single source of truth. |
| **[DesignLibrary/CognizantMoment/](DesignLibrary/CognizantMoment/)** | The Cognizant Moment brand: [DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md) (spec — colours, type, components, voice) + [brand/](DesignLibrary/CognizantMoment/brand/) ([css/](DesignLibrary/CognizantMoment/brand/css/), [js/](DesignLibrary/CognizantMoment/brand/js/), fonts, [icons/](DesignLibrary/CognizantMoment/brand/icons/), [logos/](DesignLibrary/CognizantMoment/brand/logos/)). You **link** these — you don't rewrite them. |
| **`DesignLibrary/{Brand}/brand/design-system.html`** | A **human-facing** page for teammates to *view* a brand's components (e.g. [Cognizant Moment's](DesignLibrary/CognizantMoment/brand/design-system.html)). Claude never reads it or reasons from it — it just opens the file when a teammate asks to see the reference. |
| **[.claude/skills/](.claude/skills/)** | The **skills** — the tools the engine calls per artefact type: `create-case-study` (✅), `create-proposal` (🚧), `create-design-system` (🚧). |
| **[projects/](projects/)** | Where **your** artefacts live — one self-contained folder each (`projects/{project-name}/`). This is your workspace. |
| **[README.md](README.md)** | Start here — how to **download** the project and start using the engine. |
| **CLAUDE.md** | This file — how the engine works + the rules. |

---

## The Design Library

Every brand the engine can build for lives as **one self-contained folder** under [DesignLibrary/](DesignLibrary/):

```
DesignLibrary/
  CognizantMoment/         ← one brand (PascalCase folder)
    DESIGN.md              ← that brand's spec — the source of truth
    brand/                 ← that brand's implementation
      css/  js/  fonts/  icons/  logos/
      design-system.html   ← page to review the components (not for implementation)
```

New brands are added as new folders here (a brand folder may start with just a `DESIGN.md`). The
engine discovers brands by **listing the folder names** — nothing is hardcoded.

## The final outcome we're building

**One self-contained folder per artefact**, saved under [projects/](projects/):

```
projects/
  acme-rebrand/          ← your project folder (kebab-case name)
    index.html           ← the artefact page (always index.html)
    assets/              ← images/icons this page uses (e.g. pulled from Figma)
      hero.png
      diagram.svg
```

The `index.html` links the chosen brand's CSS/JS and uses that brand's components and copy voice —
so every artefact looks unmistakably on-brand without anyone re-styling from scratch. Keeping the
HTML and its assets in one folder means an artefact can be reviewed, moved, or shared as a single unit.

---

## How you get and update the project

There's **no Git workflow to learn** — you just need a copy of this project on your machine.

- **Get it:** download the project once (a ZIP from GitHub, or `git clone` if you have Git). The
  [README](README.md) walks through both. You end up with a `Moment-creation` folder — the whole engine.
- **Open it:** open that folder in your editor with **Claude Code / the Claude extension** running.
- **Build:** tell Claude what to make; it builds your artefact into its own `projects/{project-name}/`
  folder. Your work lives in **your** copy — it's yours to keep, preview, and share as files.
- **Update it later:** when Jason updates the shared foundation, grab a fresh copy (download the ZIP
  again, or `git pull` if you cloned) to pick up the latest Design Library.

> 💚 **You can't break the shared foundation.** The Design Library is read-only, and your build only
> ever adds files under `projects/` in your own copy. Nothing you do changes anyone else's version.

---

## 📁 Naming & file conventions

Every artefact is a **self-contained folder**. Follow this exactly (Claude will too):

| Thing | Convention | Example |
| --- | --- | --- |
| **Brand folder** | `DesignLibrary/{Brand}/` — PascalCase, no spaces | `DesignLibrary/CognizantMoment/` |
| **Project folder** | `projects/{project-name}/` — short, kebab-case, no spaces or capitals | `projects/acme-rebrand/` |
| **HTML file** | always `index.html` (one per project) | `projects/acme-rebrand/index.html` |
| **Assets folder** | `projects/{project-name}/assets/` | `projects/acme-rebrand/assets/` |
| **Asset files** | kebab-case, descriptive | `assets/hero-banner.png`, `assets/journey-map.svg` |

**What goes in `assets/`:** everything *this* page loads that isn't part of a brand's shared system —
images, photography, and any custom icons (e.g. pulled from Figma). Reference them with plain
relative paths: `<img src="assets/hero-banner.png">`.

**What does NOT go in `assets/`:** the brand logo, arrow icons, fonts, and design-system CSS/JS.
Those come from the Design Library via `../../DesignLibrary/{Brand}/brand/...` — never copy them into your project.

> 🔒 **The Design Library is the shared foundation — never write project assets into it.** Any image,
> icon, or file that comes from a Figma design (or anywhere else) for *your* artefact belongs **only**
> inside that project's own `projects/{project-name}/assets/` folder. It stays scoped to that one
> project — it must never be saved into `DesignLibrary/` (that would leak it into everyone's shared
> system) or into another project's folder. The Design Library changes only when Jason deliberately
> updates a brand's foundation.

> 💡 Tip: keep the project-folder name short and descriptive — e.g. `acme-rebrand`, `meridian-health`.

---

## How an artefact gets built (the engine flow)

Claude follows [`agent.md`](agent.md) — here's the shape:

1. **Which brand?** You name the client/brand; the engine matches it to a folder in [DesignLibrary/](DesignLibrary/) (e.g. "Cognizant Moment" → `DesignLibrary/CognizantMoment/`) and suggests it. *No files are read yet.*
2. **Which artefact?** Proposal, Case study, or Design-system implementation — the engine matches it to a skill (`create-proposal`, `create-case-study`, `create-design-system`) and suggests it.
3. **Confirm → build.** Once you confirm, the matched skill runs. *That's* when the brand's `DESIGN.md` is read and the work happens. Case study is functional today; the other two are in development.

**The skill does the building — not this file.** How a case study is actually assembled (intake, the
brand system link, components, motion, art direction) lives in the [`create-case-study`](.claude/skills/create-case-study/SKILL.md)
skill, so it stays in one place and evolves with the tool. CLAUDE.md just sets the rules the skill works
within (below). The other artefact types have their own skills (`create-proposal`, `create-design-system`).

---

## Brand rules — they live in the brand, not here

**This file is brand-agnostic on purpose.** Every concrete rule — palette, typeface, logo usage, voice,
naming, component guidance — belongs to whichever brand you're building for and lives in **that brand's
`DESIGN.md`** (e.g. [DesignLibrary/CognizantMoment/DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md)).
The skill reads it once you've picked a brand. The only rules that apply across *all* brands:

- 🔗 **Link the stylesheets, don't re-author them.** Build on the brand's tokens/classes; only add page-specific CSS on top.
- 🎨 **Stay on-system.** No off-`DESIGN.md` colours, no ad-hoc fonts or sizes. Meet WCAG AA contrast.
- 🖼️ **Use brand assets as supplied** — never modify a logo (recolour, redraw, separate, distort).
- 🔒 **The Design Library is read-only** — never edit a brand's foundation while building an artefact.
- 🗣️ **Write in the chosen brand's voice and naming**, exactly as its `DESIGN.md` defines it.

---

## Instructions for Claude (AI agent)

When working in this repo, Claude must:

- **Route through [`agent.md`](agent.md).** When a teammate wants to create an artefact, follow that flow: match the brand to a `DesignLibrary/` folder and the artefact to a skill, **suggest both, and confirm before reading any `DESIGN.md` or `SKILL.md`.** Discover brands and skills by listing folders — never hardcode.
- **Read the chosen brand's `DESIGN.md` before building** any screen, component, or prototype, or writing any copy — but only *after* the user confirms the brand + artefact. It is the single source of truth; do not introduce values, names, or tones outside it.
- **Link the chosen brand's system** (its master CSS/JS under `DesignLibrary/{Brand}/brand/`) in every case study via `../../DesignLibrary/{Brand}/brand/...` (two levels up, because `index.html` lives in `projects/{project-name}/`). **Never** duplicate or re-author tokens; never introduce off-palette colours or ad-hoc font sizes.
- **Always build an artefact as a self-contained folder:** `projects/{project-name}/` (kebab-case) containing `index.html` **and** an `assets/` subfolder — never a loose HTML file, never a shared/global assets folder.
- **When reading a Figma file via MCP:** transform the design to code, and for any images/icons used, **download them (Figma MCP `download_assets`) into that project's `projects/{project-name}/assets/` folder**, then reference them with relative `assets/…` paths. Do not inline external URLs or reach into another project's assets. Brand logo/icons/fonts stay linked from `../../DesignLibrary/{Brand}/brand/...` — do not copy them into `assets/`.
- **Never write into `DesignLibrary/`.** The Design Library is the shared, **read-only** foundation — treat it as off-limits for writes when building an artefact. Assets pulled from a Figma design (or created for a project) live **only** in that project's own `projects/{project-name}/assets/` folder and are scoped to that single project; never place them in `DesignLibrary/` or in another project's folder. Only touch the Design Library when the user explicitly asks to update a brand's foundation itself.
- **Follow the chosen brand's voice and naming rules** in all generated copy, exactly as that brand's `DESIGN.md` defines them.

**Git safety (the normal flow needs no Git):**
- Teammates use this project by **downloading it and building locally** — the everyday flow involves
  **no Git at all**. Don't push teammates toward branching, committing, or PRs; their work simply lives
  as files under `projects/` in their own copy.
- **If the user explicitly asks for a Git action** (or is a maintainer updating the foundation), treat Git
  with care: before running **any** Git command, **state in plain English what it will do and why, then
  wait for explicit confirmation.** Never commit directly to `main`, never force-push, delete branches, or
  discard changes without asking, and always surface the current branch first.

---

## Quick reference

**Link a brand's design system** (from `projects/{project-name}/index.html`) — swap `{Brand}` for the folder, e.g. `CognizantMoment`:
```html
<link rel="stylesheet" href="../../DesignLibrary/{Brand}/brand/css/…">
<script src="../../DesignLibrary/{Brand}/brand/js/…" defer></script>
```
(The exact file names are defined in that brand's `DESIGN.md`.)

**Get / update the project** (see the [README](README.md) for full steps):
- **First time:** download the ZIP from GitHub, or `git clone https://github.com/jason-ycy/Moment-creation.git`.
- **Get the latest foundation:** download a fresh ZIP, or `git pull` if you cloned.
- **Build something:** just tell Claude — e.g. *"Create a case study for Cognizant Moment from this Figma design."*

**The engine's decision flow:** [agent.md](agent.md)
**Review a brand's components:** open `DesignLibrary/{Brand}/brand/design-system.html` — a page for *teammates* to view the system. Claude never reads or implements from it; it only opens the file when a teammate asks to see the reference. Build from the brand's `DESIGN.md` and linked CSS/JS instead.

---

## Don't panic — beginner FAQ

- **"How do I get the project?"** → Download the ZIP from GitHub (green **Code** button → **Download ZIP**), or ask Claude to help you `git clone` it. The [README](README.md) has both.
- **"How do I get Jason's latest updates?"** → Grab a fresh copy — download the ZIP again, or ask Claude "pull the latest" if you cloned with Git.
- **"Where does my work live?"** → In your own copy, under `projects/{your-project}/`. It's yours — nothing you build changes the shared foundation.
- **"I think I broke something."** → You can't break anything shared — the Design Library is read-only and you're working in your own downloaded copy. Ask Claude "help me undo my last change" and it'll sort it out.

**When in doubt, ask Claude in plain English. That's the whole point.** 🎉
