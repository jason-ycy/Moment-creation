# Moment-creation

An experiment in using **Git as the collaboration layer** between designers and AI tools (Claude, Claude Code, and others) throughout the design process — not just for code, but for prototyping, design systems, and shared context.

## Why this exists

Design decisions and prototype iterations usually live scattered across chats, local files, and individual machines. Here, everything is versioned instead:

- the **design system**,
- the **project context** AI tools should use, and
- the actual **working prototypes**.

Anyone on the team can pull the latest state, make changes, and push updates. And any AI assistant working in this repo reads the same `CLAUDE.md` and `DESIGN.md` files a human teammate would — so people and AI stay aligned on one source of truth.

## Structure

| Path | What it holds |
| --- | --- |
| `DESIGN.md` | Design system reference for the product — tokens, components, patterns, principles |
| `CLAUDE.md` | Project context and instructions for AI agents working in this repo |
| `/brand` | The implemented design system — CSS, JS, fonts, icons, logos, plus a live `design-system.html` showcase |
| `/projects/{project-name}/` | Each case study as a self-contained folder — `index.html` + its own `assets/` — versioned as they evolve |

_Add more as the process grows: `/research`, `/synthesis`, `/assets`, etc._

## The goal

Develop a repeatable, team-wide method for using AI across the whole design process — research, synthesis, design, and prototyping — with **Git as the shared source of truth**, rather than fragmented individual AI conversations.
