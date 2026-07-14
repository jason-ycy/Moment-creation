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
- 🌿 **Never work directly on `main`.** Flow: get latest `main` → make your own branch → build your case study in **[prototypes/](prototypes/)** → open a Pull Request back to `main`.
- 🤖 **New to Git? Just ask Claude in plain English** ("get me the latest", "make me a branch", "save my work"). Claude will **explain what it's about to do and wait for your OK before running anything.**

---

## What's in this repo

| Path | What it is |
| --- | --- |
| **[DESIGN.md](DESIGN.md)** | The brand & design-system spec — colours, type, components, voice. **Read this first.** Single source of truth. |
| **[brand/](brand/)** | The actual implementation: [css/](brand/css/), [js/](brand/js/), fonts, [icons/](brand/icons/), [logos/](brand/logos/). You **link** these — you don't rewrite them. |
| **[brand/design-system.html](brand/design-system.html)** | A live, working page showing every component. **Copy its patterns.** |
| **[prototypes/](prototypes/)** | Where **your** case-study HTML files live. This is your workspace. |
| **CLAUDE.md** | This file — how we work + Git + how to build a case study. |

---

## The final outcome we're building

**One self-contained HTML file per case study**, saved in `prototypes/`, named
`your-name-topic.html` (e.g. `prototypes/jane-acme-rebrand.html`).

It links the brand CSS/JS and uses the brand's components and copy voice — so every case
study looks unmistakably **Cognizant Moment** without anyone re-styling from scratch.

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

Build your page in `prototypes/`. Save often ("commit") so you have checkpoints.
> 🗣️ *Say to Claude:* "Save my progress with a note about what I changed."

<details><summary>Commands (reference)</summary>

```bash
git add prototypes/jane-acme-rebrand.html
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

## How to build a case study

1. **Read [DESIGN.md](DESIGN.md) first** — colours, type, voice, and the component rules. This is non-negotiable; everything you build must follow it.
2. **Create your file** in `prototypes/` → `prototypes/your-name-topic.html`.
3. **Link the brand system** in your `<head>` (paths use `../` because your file sits one level down in `prototypes/`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Case study — Cognizant Moment</title>

  <!-- The whole design system in one line (fonts, tokens, components, utilities) -->
  <link rel="stylesheet" href="../brand/css/cognizant-moment.css">
  <script src="../brand/js/cognizant-moment.js" defer></script>
</head>
<body>
  <main class="cm-container cm-section stack">
    <p class="eyebrow">Case study</p>
    <h1>Reimagining the Acme experience</h1>
    <p class="lead">A short, human intro in the Cognizant Moment voice.</p>

    <a class="link" href="#">Read the approach <span class="icon-arrow" aria-hidden="true"></span></a>
    <button class="btn">Launch the prototype <span class="icon-arrow" aria-hidden="true"></span></button>
  </main>
</body>
</html>
```

4. **Copy patterns from [brand/design-system.html](brand/design-system.html)** — it demonstrates every component (links, buttons, tabs, accordions, cards) with real markup.
5. **Use the brand classes** — `.link`, `.btn`, `.card`, `.tabs`, `.accordion`, plus layout helpers like `.cm-container`, `.grid`, `.stack`. The full list lives in [brand/css/components.css](brand/css/components.css) and [brand/css/utilities.css](brand/css/utilities.css).
6. **Never hardcode** colours, fonts, or sizes. Use the tokens/classes from the design system. If a value isn't in the system, it's probably off-brand — ask.

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
- **Link `brand/css/cognizant-moment.css`** (and `brand/js/cognizant-moment.js`) in every prototype. **Never** duplicate or re-author the tokens, and never introduce off-palette colours or ad-hoc font sizes.
- **Keep prototypes self-contained** in `prototypes/`, referencing brand assets with `../brand/...` paths.
- **Follow the brand voice and naming rules** in all generated copy (full name "Cognizant Moment", sub-brand framing).

**Git safety — critical:**
- Before running **any** Git command (`pull`, `checkout`/branch, `add`, `commit`, `push`, or opening a PR), **state in plain English what it will do and why, then wait for the user's explicit confirmation.** These teammates are new to Git — keep them in control.
- **Never commit directly to `main`.** Before committing, check the current branch; if the user is on `main`, offer to create a branch (`yourname/topic`) first.
- **Never force-push, delete branches, or discard changes** without asking.
- **Always surface the current branch** before acting, so the user knows where they are.
- When a case study looks finished, **offer** to push the branch and open a Pull Request into `main` (use `gh pr create` if available) — only after confirmation.

---

## Quick reference

**Link the design system** (from a file in `prototypes/`):
```html
<link rel="stylesheet" href="../brand/css/cognizant-moment.css">
<script src="../brand/js/cognizant-moment.js" defer></script>
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
