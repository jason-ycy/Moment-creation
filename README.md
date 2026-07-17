# Moment-creation

A shared workspace where our team designs **with AI, in the open**. Everyone starts from the same
brand foundation, rapid-prototypes a case study with Claude (pulling designs straight from Figma),
and **publishes their own branch** so the whole team can see and build on each other's work.

> **The one golden rule:** `main` is our shared foundation — everyone starts from it, nobody edits it
> directly. You build on **your own branch** and push it up to share. Your branch stays *yours*; it
> doesn't merge into `main` until we all agree it should. You literally cannot break the shared version. 🙂

New to Git or Claude? **Just talk to Claude in plain English** — "get me the latest," "make me a
branch," "publish my work." Claude explains what it's about to do and waits for your OK before running
anything. The commands below are only a reference.

---

## What you'll do (the whole journey in one glance)

```
1. Clone      →  get the repo onto your machine (once)
2. Start      →  pull the latest main
3. Branch     →  make your own sandbox: yourname/topic
4. Prototype  →  build a case study with Claude + Figma MCP → projects/{your-project}/
5. Save       →  commit checkpoints as you go
6. Publish    →  push your branch so everyone can see it  (NOT a merge into main)
7. Share      →  teammates check out your branch and open your page
```

Steps 2–6 are the loop you'll repeat. **You never merge into `main` yourself** — publishing your
branch *is* the deliverable. Sharing beats merging.

---

## 0. One-time setup

You need **Git** and the repo on your machine. Ask Claude "help me clone this repo" or run:

```bash
git clone https://github.com/ycyjason/Moment-creation.git
cd Moment-creation
```

Open the folder in your editor (with Claude Code / the Claude extension running). To prototype from
Figma, make sure the **Figma MCP connector** is enabled in Claude — that's what lets Claude read your
Figma designs directly. If it isn't connected yet, ask Claude and it'll point you to the setup.

> 📖 Before you build anything, skim **[CLAUDE.md](CLAUDE.md)** (how the Creation Engine works) and the
> brand spec for whatever brand you're using — e.g. **[DesignLibrary/CognizantMoment/DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md)**.
> They're the single source of truth for both you and Claude. When you're ready to make something, Claude
> follows **[agent.md](agent.md)** to match you to a brand + a skill and build it.

---

## 1. Start from the latest `main`

Always begin from the freshest shared foundation.

> 🗣️ *Say to Claude:* "Get me the latest version of main before I start."

```bash
git checkout main
git pull origin main
```

## 2. Make your own branch

Your branch is your personal sandbox — experiment and break things freely, it's yours.
Name it **`yourname/topic`** (lowercase, dashes, no spaces).

> 🗣️ *Say to Claude:* "Create a new branch for me called jane/acme-rebrand."

```bash
git checkout -b jane/acme-rebrand
```

> 💡 Match your branch to your project folder: branch `jane/acme-rebrand` → folder `projects/acme-rebrand/`.

## 3. Rapid-prototype with Claude + Figma

This is the fun part. You build **one self-contained case study** as a single HTML page, styled by the
shared brand system, with Claude turning your Figma design into code.

**The Figma → code flow:**

1. Open your design in Figma (or copy the **figma.com URL** of the frame/page you want).
2. Tell Claude what to build, and point it at the design. For example:
   > 🗣️ *"Build a case study in `projects/acme-rebrand/` from this Figma design: `<paste figma URL>`.
   > Use the Cognizant Moment brand system."*
3. Claude will:
   - read the design via the **Figma MCP** (`get_design_context`),
   - **download any images/icons into `projects/acme-rebrand/assets/`** (never into the Design Library),
   - generate `projects/acme-rebrand/index.html`, linking the brand CSS/JS and using brand components,
   - keep everything on-palette, in Gellix, and in the Cognizant Moment voice.

**What you end up with — one folder, everything together:**

```
projects/
  acme-rebrand/
    index.html          ← your case study page (always index.html)
    assets/             ← images/icons for THIS page (e.g. pulled from Figma)
      hero.png
      journey-map.svg
```

The `index.html` links the shared system in one line, so every case study looks unmistakably
**Cognizant Moment** without re-styling from scratch:

```html
<link rel="stylesheet" href="../../DesignLibrary/CognizantMoment/brand/css/cognizant-moment.css">
<script src="../../DesignLibrary/CognizantMoment/brand/js/cognizant-moment.js" defer></script>
```

> 🔒 **The Design Library is read-only.** Your project's images and icons live **only** in
> `projects/{your-project}/assets/` — never in `DesignLibrary/` (that's everyone's shared foundation) or in
> someone else's project folder. See [CLAUDE.md](CLAUDE.md) for the full asset & naming rules.

**Preview as you build:** open `projects/acme-rebrand/index.html` in your browser (or use a live-server
extension) to see your page. Iterate with Claude until it feels right.

## 4. Save checkpoints as you go

Commit often so you always have a point to return to.

> 🗣️ *Say to Claude:* "Save my progress with a note about what I changed."

```bash
git add projects/acme-rebrand/
git commit -m "Add hero and intro section"
```

## 5. Publish your branch (share, don't merge)

When you want the team to see your work — even a work-in-progress — **push your branch up**. This is how
you share. It does **not** touch `main`; your work stays safely on your own branch for everyone to view.

> 🗣️ *Say to Claude:* "Publish my branch so the team can see it."

```bash
git push -u origin jane/acme-rebrand
```

That's it — your branch is now on GitHub for the whole team. **No pull request, no merge into `main`
required.** You can keep pushing more commits to the same branch anytime; the published version updates
automatically.

## 6. See what everyone else built

To view a teammate's case study, get their branch and open their page:

> 🗣️ *Say to Claude:* "Show me Jane's branch jane/acme-rebrand."

```bash
git fetch origin
git checkout jane/acme-rebrand      # switch onto their branch
# then open projects/acme-rebrand/index.html in your browser
```

When you're done looking, hop back to your own branch (`git checkout jane/your-branch`). Because every
case study is a self-contained folder, you can browse anyone's work without it affecting yours.

> 🌿 **Everyone's branches live side by side.** Browsing the repo's branches on GitHub is a gallery of
> what the team is building — that's the collaborative sharing this repo is for.

---

## What's in this repo

| Path | What it is |
| --- | --- |
| **[CLAUDE.md](CLAUDE.md)** | How the Creation Engine works + Git guardrails + the rules. Claude reads this every session. |
| **[agent.md](agent.md)** | The engine's decision flow — matches your brand + artefact to a folder and a skill, then builds. |
| **[DesignLibrary/](DesignLibrary/)** | The Design Library — one folder per brand. e.g. **[CognizantMoment/](DesignLibrary/CognizantMoment/)** with its [DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md) + [brand/](DesignLibrary/CognizantMoment/brand/) (CSS, JS, fonts, icons, logos). You **link** it, never rewrite it. |
| **[design-system.html](DesignLibrary/CognizantMoment/brand/design-system.html)** | A live page showing every Cognizant Moment component. **Copy its patterns.** |
| **[.claude/skills/](.claude/skills/)** | The skills the engine calls: `create-case-study` (✅), `create-proposal` (🚧), `create-design-system` (🚧). |
| **[projects/](projects/)** | Where artefacts live — one self-contained `projects/{name}/` folder each. Your workspace. |

Take a look at the existing case study for reference: [projects/meridian-health/](projects/meridian-health/).

---

## Brand golden rules (the ones people trip on)

Full details in [DESIGN.md](DESIGN.md); the essentials:

- ✍️ Always **Cognizant Moment** in full, framed as a **sub-brand of Cognizant** — never just "Moment."
- 🔗 **Link** the brand stylesheet; don't re-author tokens. Add page-specific CSS only on top.
- 🎨 Stay **on-palette** and meet WCAG AA contrast. No off-palette colours.
- 🅰️ **Gellix only**, keep the type scale.
- 🖼️ **Never modify the logo** — use the supplied files as-is.
- 🔘 **Prefer links over buttons**; reserve buttons for primary actions.
- ✅ Green = success only. Red = errors. Yellow = warnings.
- 🗣️ Write in the brand **voice**: inviting, fresh, warmly global, grounded yet elevated, brave enough to be simple.

---

## Don't panic — beginner FAQ

- **"Which branch am I on?"** → Ask Claude "which branch am I on?" If it says `main`, ask for a branch before editing.
- **"How do I get Jason's latest foundation?"** → "Bring the latest changes from main into my branch."
- **"Do I need to merge into main?"** → No. **Publishing your branch is the goal.** Merging into `main` only
  happens deliberately, together — never as part of your normal flow.
- **"I think I broke something."** → You almost certainly didn't break anything shared — your work is on your
  own branch. Ask Claude "help me undo my last change."

**When in doubt, ask Claude in plain English. That's the whole point.** 🎉
