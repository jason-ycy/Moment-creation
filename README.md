# Moment-creation

A shared **Creation Engine** for producing on-brand artefacts — case studies, proposals,
design-system implementations — **with AI**. Everyone works from the same brand foundation (the
**Design Library**) and builds their own artefacts with Claude, pulling designs straight from Figma.

> **How this works:** you **download this project once**, open it in your editor with Claude, and tell
> the engine what you want to make. Claude reads the shared brand foundation and builds your artefact
> into its own folder under `projects/`. There's **no Git workflow to learn** — the repo is just the
> toolkit you download and build on top of.

New to this? **Just talk to Claude in plain English** — "build me a case study for Acme from this
Figma design." Claude explains what it's about to do and waits for your OK before running anything.

---

## What you'll do (the whole journey in one glance)

```
1. Download   →  get the project onto your machine (once)
2. Open       →  open the folder in your editor with Claude running
3. Ask        →  tell Claude what to build (brand + artefact + Figma design)
4. Build      →  Claude builds it into projects/{your-project}/
5. Preview    →  open your index.html in the browser and iterate
```

Steps 3–5 are the loop you repeat for every artefact. Everything you make lives in **your own copy** —
nothing you do changes the shared foundation.

---

## 0. Download the project (one time)

You just need a copy of the project files on your machine. Two ways — pick whichever is easier:

**Option A — Download the ZIP (no Git needed)**

1. Open the repo on GitHub: **https://github.com/jason-ycy/Moment-creation**
2. Click the green **Code** button → **Download ZIP**.
3. Unzip it somewhere you'll find it (e.g. your Documents folder).

**Option B — Clone with Git (if you already use Git)**

```bash
git clone https://github.com/jason-ycy/Moment-creation.git
cd Moment-creation
```

Either way you end up with a **`Moment-creation` folder** — that's the whole engine.

> 💡 **Getting Jason's latest foundation later:** just grab a fresh copy — download the ZIP again (or
> `git pull` if you cloned). You never push anything back; the project is a toolkit you build on top of.

## 1. Open it with Claude

Open the `Moment-creation` folder in your editor with **Claude Code / the Claude extension** running.

To build from Figma, make sure the **Figma MCP connector** is enabled in Claude — that's what lets
Claude read your Figma designs directly. If it isn't connected yet, ask Claude and it'll point you to
the setup.

> 📖 Before you build anything, skim **[CLAUDE.md](CLAUDE.md)** (how the Creation Engine works) and the
> brand spec for whatever brand you're using — e.g.
> **[DesignLibrary/CognizantMoment/DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md)**. They're the
> single source of truth for both you and Claude. When you're ready to make something, Claude follows
> **[agent.md](agent.md)** to match you to a brand + a skill and build it.

## 2. Tell Claude what to build

Just say what you want in plain English. The engine confirms the **project name**, the **brand**, and
the **artefact type**, then builds. For example:

> 🗣️ *"Create a project called `acme-rebrand` — a case study for **Cognizant Moment**, built from this
> Figma design: `<paste figma URL>`."*

Claude will:

- match you to a **brand folder** in the Design Library and the right **skill**,
- read the design via the **Figma MCP** (`get_design_context`),
- **download any images/icons into your project's `assets/`** (never into the Design Library),
- generate `projects/acme-rebrand/index.html`, linking the brand CSS/JS and using brand components,
- keep everything on-palette, in Gellix, and in the Cognizant Moment voice.

**What you end up with — one folder, everything together:**

```
projects/
  acme-rebrand/
    index.html          ← your artefact page (always index.html)
    assets/             ← images/icons for THIS page (e.g. pulled from Figma)
      hero.png
      journey-map.svg
```

The `index.html` links the shared system in one line, so every artefact looks unmistakably
**Cognizant Moment** without re-styling from scratch:

```html
<link rel="stylesheet" href="../../DesignLibrary/CognizantMoment/brand/css/cognizant-moment.css">
<script src="../../DesignLibrary/CognizantMoment/brand/js/cognizant-moment.js" defer></script>
```

> 🔒 **The Design Library is read-only.** Your project's images and icons live **only** in
> `projects/{your-project}/assets/` — never in `DesignLibrary/` (that's everyone's shared foundation) or
> in someone else's project folder. See [CLAUDE.md](CLAUDE.md) for the full asset & naming rules.

## 3. Preview and iterate

Open `projects/acme-rebrand/index.html` in your browser (or use a live-server extension) to see your
page. Iterate with Claude until it feels right. Your work lives in `projects/{your-project}/` in your
own copy — it's yours to keep and share as files.

---

## What's in this repo

| Path | What it is |
| --- | --- |
| **[CLAUDE.md](CLAUDE.md)** | How the Creation Engine works + the rules. Claude reads this every session. |
| **[agent.md](agent.md)** | The engine's decision flow — matches your brand + artefact to a folder and a skill, then builds. |
| **[DesignLibrary/](DesignLibrary/)** | The Design Library — one folder per brand. e.g. **[CognizantMoment/](DesignLibrary/CognizantMoment/)** with its [DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md) + [brand/](DesignLibrary/CognizantMoment/brand/) (CSS, JS, fonts, icons, logos). You **link** it, never rewrite it. |
| **[design-system.html](DesignLibrary/CognizantMoment/brand/design-system.html)** | A live page showing every Cognizant Moment component. **For review only** — see the system; the skill builds from the linked CSS/JS, not from this page. |
| **[.claude/skills/](.claude/skills/)** | The skills the engine calls: `create-case-study` (✅), `create-proposal` (🚧), `create-design-system` (🚧). |
| **[projects/](projects/)** | Where artefacts live — one self-contained `projects/{name}/` folder each. Your workspace. |

Take a look at the existing case study for reference: [projects/meridian-health/](projects/meridian-health/).

---

## Brand golden rules (the ones people trip on)

Full details in [DESIGN.md](DesignLibrary/CognizantMoment/DESIGN.md); the essentials:

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

- **"How do I get the project?"** → Download the ZIP from GitHub (green **Code** button → **Download ZIP**),
  or ask Claude to help you `git clone` it. Both are in Step 0 above.
- **"How do I get Jason's latest foundation?"** → Grab a fresh copy — download the ZIP again, or ask Claude
  "pull the latest" if you cloned with Git.
- **"Where does my work live?"** → In your own copy, under `projects/{your-project}/`. It's yours; nothing
  you build changes the shared foundation.
- **"I think I broke something."** → You can't break anything shared — the Design Library is read-only and
  you're working in your own downloaded copy. Ask Claude "help me undo my last change."

**When in doubt, ask Claude in plain English. That's the whole point.** 🎉
