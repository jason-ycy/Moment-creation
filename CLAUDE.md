# CLAUDE.md — How we work in this repo

Welcome 👋 This repo is how our team designs **together**. Jason has set up the brand
foundation — the design system, colours, type, logo, icons, and ready-to-use components.
Your job is the fun part: **rapid-prototype a case study as a single HTML page** that shows
off design work, built on top of that foundation.

This file is for **two readers**:
- **You (a teammate)** — even if you've never used Git, this walks you through it.
- **Claude** — the AI assistant reads this every session so it follows our rules and keeps you safe.

> **The one golden rule:** `main` is our **shared foundation** — everyone starts from it, nobody edits it directly. You build on **your own branch**, then share finished work back to `main` with a Pull Request. You literally cannot break the shared version. 🙂

---

## TL;DR (60 seconds)

- 📖 **[DESIGN.md](DESIGN.md) + [brand/](brand/) are the single source of truth.** Link the brand stylesheet — never reinvent colours, fonts, or components.
- 🌿 **Never work directly on `main`.** Flow: get latest `main` → make your own branch → build your case study in its own folder under **[projects/](projects/)** → open a Pull Request back to `main`.
- 📁 **One folder per case study:** `projects/{project-name}/` holds an `index.html` **and** its own `assets/` folder. Everything a case study needs lives together.
- 🤖 **New to Git? Just ask Claude in plain English** ("get me the latest", "make me a branch", "save my work"). Claude will **explain what it's about to do and wait for your OK before running anything.**

---

## What's in this repo

| Path | What it is |
| --- | --- |
| **[DESIGN.md](DESIGN.md)** | The brand & design-system spec — colours, type, components, voice. **Read this first.** Single source of truth. |
| **[brand/](brand/)** | The actual implementation: [css/](brand/css/), [js/](brand/js/), fonts, [icons/](brand/icons/), [logos/](brand/logos/). You **link** these — you don't rewrite them. |
| **[brand/design-system.html](brand/design-system.html)** | A live, working page showing every component. **Copy its patterns.** |
| **[projects/](projects/)** | Where **your** case studies live — one self-contained folder each (`projects/{project-name}/`). This is your workspace. |
| **CLAUDE.md** | This file — how we work + Git + how to build a case study. |

---

## The final outcome we're building

**One self-contained folder per case study**, saved under `projects/`:

```
projects/
  acme-rebrand/          ← your project folder (kebab-case name)
    index.html           ← the case study page (always index.html)
    assets/              ← images/icons this page uses (e.g. pulled from Figma)
      hero.png
      diagram.svg
```

The `index.html` links the brand CSS/JS and uses the brand's components and copy voice — so
every case study looks unmistakably **Cognizant Moment** without anyone re-styling from
scratch. Keeping the HTML and its assets in one folder means a case study can be reviewed,
moved, or shared as a single unit.

---

## How we collaborate with Git (for people new to Git)

**The mental model:**
- 🏠 **`main`** = the shared start line. Always the latest, clean foundation. Nobody works on it directly.
- 🌿 **Your branch** = your personal sandbox. Copy of `main` with your name on it. Play, experiment, break things freely — it's yours.
- 🔀 **Pull Request (PR)** = "Hey team, my case study is ready — please add it to `main`." That's how finished work becomes shared.

You don't need to memorise any commands. **Just tell Claude what you want in plain English.**
Claude will always say what it's about to do and ask you to confirm first. The exact commands
are shown below only as a reference.

### The four moments

**1️⃣ Start — get the latest `main`**
> 🗣️ *Say to Claude:* "Get me the latest version of main before I start."

<details><summary>Commands (reference)</summary>

```bash
git checkout main
git pull origin main
```
</details>

**2️⃣ Branch — make your own sandbox**
> 🗣️ *Say to Claude:* "Create a new branch for me called jane/acme-case-study."

Branch name = **`yourname/topic`** (lowercase, dashes, no spaces).

<details><summary>Commands (reference)</summary>

```bash
git checkout -b jane/acme-case-study
```
</details>

**3️⃣ Work — vibe-code your case study**

Build your project in its own folder, `projects/{project-name}/`. Save often ("commit") so you have checkpoints.
> 🗣️ *Say to Claude:* "Save my progress with a note about what I changed."

<details><summary>Commands (reference)</summary>

```bash
git add projects/acme-rebrand/
git commit -m "Add hero and intro section"
```
</details>

**4️⃣ Save & share — push and open a Pull Request**

When your case study is ready to share:
> 🗣️ *Say to Claude:* "Push my branch and open a pull request into main."

<details><summary>Commands (reference)</summary>

```bash
git push -u origin jane/acme-case-study
gh pr create --base main --title "Case study: Acme rebrand" --body "..."
```
</details>

> 💚 **You can't break the shared foundation.** Your work stays on your branch until a PR is
> reviewed and merged. And Claude confirms **every** Git action with you before running it — so
> nothing happens by surprise.

### Keeping your branch fresh

If Jason updates the foundation on `main` while you're working, pull those updates into your branch:
> 🗣️ *Say to Claude:* "Bring the latest changes from main into my branch."

---

## 📁 Naming & file conventions

Every case study is a **self-contained folder**. Follow this exactly (Claude will too):

| Thing | Convention | Example |
| --- | --- | --- |
| **Project folder** | `projects/{project-name}/` — short, kebab-case, no spaces or capitals | `projects/acme-rebrand/` |
| **HTML file** | always `index.html` (one per project) | `projects/acme-rebrand/index.html` |
| **Assets folder** | `projects/{project-name}/assets/` | `projects/acme-rebrand/assets/` |
| **Asset files** | kebab-case, descriptive | `assets/hero-banner.png`, `assets/journey-map.svg` |

**What goes in `assets/`:** everything *this* page loads that isn't part of the shared brand —
images, photography, and any custom icons (e.g. pulled from Figma). Reference them with plain
relative paths: `<img src="assets/hero-banner.png">`.

**What does NOT go in `assets/`:** the brand logo, arrow icons, fonts, and design-system CSS/JS.
Those come from the shared foundation via `../../brand/...` — never copy them into your project.

> 🔒 **`/brand` is the shared foundation — never write project assets into it.** Any image, icon,
> or file that comes from a Figma design (or anywhere else) for *your* case study belongs **only**
> inside that project's own `projects/{project-name}/assets/` folder. It stays scoped to that one
> project — it must never be saved in `/brand/` (that would leak it into everyone's shared system)
> or into another project's folder. `/brand` changes only when Jason deliberately updates the
> foundation.

> 💡 Tip: match your folder name to your branch topic — branch `jane/acme-rebrand` → folder `projects/acme-rebrand/`.

---

## How to build a case study

1. **Read [DESIGN.md](DESIGN.md) first** — colours, type, voice, and the component rules. This is non-negotiable; everything you build must follow it.
2. **Create your project folder** → `projects/{project-name}/` with an `index.html` inside and an `assets/` subfolder for its images/icons.
3. **Link the brand system** in your `<head>`. Paths use `../../` because `index.html` sits **two levels down** (`projects/{project-name}/`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Case study — Cognizant Moment</title>

  <!-- The whole design system in one line (fonts, tokens, components, utilities) -->
  <link rel="stylesheet" href="../../brand/css/cognizant-moment.css">
  <script src="../../brand/js/cognizant-moment.js" defer></script>
</head>
<body>
  <main class="cm-container cm-section stack">
    <p class="eyebrow">Case study</p>
    <h1>Reimagining the Acme experience</h1>
    <p class="lead">A short, human intro in the Cognizant Moment voice.</p>

    <!-- Project assets live beside this file, in ./assets/ -->
    <img src="assets/hero-banner.png" alt="Acme hero" class="card__media">

    <a class="link" href="#">Read the approach <span class="icon-arrow" aria-hidden="true"></span></a>
    <button class="btn">Launch the prototype <span class="icon-arrow" aria-hidden="true"></span></button>
  </main>
</body>
</html>
```

4. **Copy patterns from [brand/design-system.html](brand/design-system.html)** — it demonstrates every component (links, buttons, tabs, accordions, cards) with real markup.
5. **Use the brand classes** — `.link`, `.btn`, `.card`, `.tabs`, `.accordion`, plus layout helpers like `.cm-container`, `.grid`, `.stack`. The full list lives in [brand/css/components.css](brand/css/components.css) and [brand/css/utilities.css](brand/css/utilities.css).
6. **Put images/icons in `assets/`** and reference them relatively (`assets/…`). If they come from Figma, Claude downloads them straight into your project's `assets/` folder.
7. **Never hardcode** colours, fonts, or sizes. Use the tokens/classes from the design system. If a value isn't in the system, it's probably off-brand — ask.

---

## Brand golden rules

The details live in [DESIGN.md](DESIGN.md) — here are the ones people trip on, with links:

- ✍️ **Name it right:** always **Cognizant Moment** in full, and always as a **sub-brand of Cognizant** — never shortened to "Moment." ([DESIGN.md §1](DESIGN.md#1-brand-identity))
- 🔗 **Link the stylesheets, don't re-author them.** Build on the tokens/classes; only add page-specific CSS on top. ([DESIGN.md §8](DESIGN.md#8-ready-to-use-code))
- 🎨 **Stay on-palette and honour the contrast pairings.** No off-palette colours; meet WCAG AA. ([DESIGN.md §3](DESIGN.md#3-colour-palette)–[§4](DESIGN.md#4-accessibility--colour-contrast))
- 🅰️ **Gellix only**, and keep the type scale. ([DESIGN.md §5](DESIGN.md#5-typography))
- 🖼️ **Never modify the logo** — don't recolour, redraw, separate, or distort it. Use the supplied files. ([DESIGN.md §1](DESIGN.md#1-brand-identity))
- 🔘 **Prefer links over buttons;** reserve buttons for primary actions. ([DESIGN.md §6](DESIGN.md#6-components))
- ✅ **Green is for success only.** Red = errors, yellow = warnings.
- 🗣️ **Write in the brand voice:** inviting, fresh, warmly global, grounded yet elevated, brave enough to be simple. ([DESIGN.md §2](DESIGN.md#2-brand-voice--tone))

---

## Instructions for Claude (AI agent)

When working in this repo, Claude must:

- **Read [DESIGN.md](DESIGN.md) before** building any screen, component, or prototype, or writing any copy. It is the single source of truth; do not introduce values, names, or tones outside it.
- **Link `brand/css/cognizant-moment.css`** (and `brand/js/cognizant-moment.js`) in every case study. **Never** duplicate or re-author the tokens, and never introduce off-palette colours or ad-hoc font sizes.
- **Always build a case study as a self-contained folder:** `projects/{project-name}/` (kebab-case) containing `index.html` **and** an `assets/` subfolder — never a loose HTML file, never a shared/global assets folder.
- **Link the brand system with `../../brand/...`** (two levels up, because `index.html` lives in `projects/{project-name}/`).
- **When reading a Figma file via MCP:** transform the design to code, and for any images/icons used, **download them (Figma MCP `download_assets`) into that project's `projects/{project-name}/assets/` folder**, then reference them with relative `assets/…` paths. Do not inline external URLs or reach into another project's assets. Brand logo/icons/fonts stay linked from `../../brand/...` — do not copy them into `assets/`.
- **Never save new/project assets into `/brand`.** `/brand` is the shared, read-only foundation — treat it as off-limits for writes when building a case study. Assets pulled from a Figma design (or created for a project) live **only** in that project's own `projects/{project-name}/assets/` folder and are scoped to that single project; never place them in `/brand/` or in another project's folder. Only touch `/brand` when the user explicitly asks to update the design-system foundation itself.
- **Follow the brand voice and naming rules** in all generated copy (full name "Cognizant Moment", sub-brand framing).

**Git safety — critical:**
- Before running **any** Git command (`pull`, `checkout`/branch, `add`, `commit`, `push`, or opening a PR), **state in plain English what it will do and why, then wait for the user's explicit confirmation.** These teammates are new to Git — keep them in control.
- **Never commit directly to `main`.** Before committing, check the current branch; if the user is on `main`, offer to create a branch (`yourname/topic`) first.
- **Never force-push, delete branches, or discard changes** without asking.
- **Always surface the current branch** before acting, so the user knows where they are.
- When a case study looks finished, **offer** to push the branch and open a Pull Request into `main` (use `gh pr create` if available) — only after confirmation.

---

## Quick reference

**Link the design system** (from `projects/{project-name}/index.html`):
```html
<link rel="stylesheet" href="../../brand/css/cognizant-moment.css">
<script src="../../brand/js/cognizant-moment.js" defer></script>
```

**Common Git asks** (say these to Claude; it'll confirm before running):
- "Get me the latest main." → `git checkout main && git pull origin main`
- "Make me a branch called `name/topic`." → `git checkout -b name/topic`
- "Save my progress." → `git add … && git commit -m "…"`
- "Push my branch and open a PR into main." → `git push -u origin name/topic && gh pr create --base main`

**See components in action:** [brand/design-system.html](brand/design-system.html)
**Class lists:** [components.css](brand/css/components.css) · [utilities.css](brand/css/utilities.css)

---

## Don't panic — beginner FAQ

- **"Which branch am I on?"** → Ask Claude "which branch am I on?" It'll tell you. If it says `main`, ask it to make you a branch before you edit.
- **"How do I get Jason's latest updates?"** → "Bring the latest changes from main into my branch."
- **"I hit a merge conflict."** → "Help me resolve this merge conflict." Claude will walk you through it step by step.
- **"I think I broke something."** → You almost certainly didn't break anything shared — your work is on your own branch. Ask Claude "can you help me undo my last change?" and it'll sort it out.

**When in doubt, ask Claude in plain English. That's the whole point.** 🎉
