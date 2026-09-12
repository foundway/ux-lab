<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Adding UX Cards

UX Lab is a catalog of **UX Cards**: standalone HTML demos. The Next.js app does not implement the interactions; it only lists and previews files under `public/patterns/`. Entries are AI-generated and **human-reviewed** — keep demos small enough to inspect.

**Before writing a new card, open and follow** [`public/patterns/_ux-card-template/index.html`](public/patterns/_ux-card-template/index.html). That file is the official layout shell (centered card, bottom footnote). Copy its structure; do **not** register the template in `content/patterns.ts` (it must stay out of the gallery).

When the user asks to add or create a snippet, pattern, UX Card, or UX demo, follow this file.

## Two ways to create a UX Card

### 1. User instruction for a specific UX

The user describes a concrete interaction (behavior, copy, constraints).

- Implement **that** interaction, not a related substitute, unless they ask you to interpret loosely.
- One card per request unless they ask for more.
- If the request is already covered in `content/patterns.ts`, say so and offer to extend or replace the existing one.

### 2. From a principle, heuristic, or pattern not in the lab yet

The user wants a new entry derived from UX theory or a named pattern, without specifying a widget.

1. Read `content/patterns.ts` and existing `public/patterns/*/index.html` titles/descriptions (skip `_ux-card-template`).
2. Choose **one** idea that is **not** already represented. Map currently in the lab:
   - Toast with undo — feedback + reversal
   - Command palette — keyboard / expert accelerators
   - Inline form validation — field errors in context
   - Empty state — no-data first run
   - Skeleton loading — waiting / layout stability
   - Confirm dialog — destructive confirm, cancel as default
   - Nielsen #1–#10 demos (`visibility-system-status` … `help-documentation`) — see `CANON.md`
   - Natural mapping, affordances/signifiers, Fitts’s law, Hick’s law — see `CANON.md`
3. Good gaps (examples, not a closed list): progressive disclosure, tabs, accordion, tooltip, breadcrumbs, pagination, stepper, drag-and-drop, skip link / focus order, optimistic list update, multi-select, date or time entry, split button, toast *without* undo (if distinct), etc. Tie the demo to a named principle or heuristic in the description (Norman, Nielsen, Fitts, Hick, Gestalt, WCAG) when that is the prompt.
4. Do not add a second example of the same interaction with a new name.

## File recipe (both ways)

Slug: `kebab-case`, unique, from the title. Do not use a leading `_` (reserved for non-gallery templates).

Create:

1. `public/patterns/{slug}/index.html` — start from `_ux-card-template/index.html`
2. `public/patterns/{slug}/thumb.svg`
3. One object in the `patterns` array in `content/patterns.ts`

Catalog fields:

```ts
{
  slug: "example-slug",
  title: "Short title",
  description: "One sentence: what the user can do and why it is a UX idea.",
  tags: ["lowercase", "few"],
  category: "Feedback" | "Navigation" | "Forms" | "Content" | "Dialogs" | "Heuristics" | "Principles" | similar,
  createdAt: "YYYY-MM-DD", // first added (user context date)
  updatedAt: "YYYY-MM-DD", // usually same as createdAt for new entries
  html: "/patterns/{slug}/index.html",
  thumb: "/patterns/{slug}/thumb.svg",
  canon: {
    label: "Nielsen #1 — Visibility of system status", // shown in the HTML footnote
    anchor: "nielsen-1", // id in CANON.md; opens via /?canon=nielsen-1
  },
  isNew: true, // see NEW chip rules below
}
```

### NEW chip

- Gallery cards show a small **NEW** chip when `isNew: true`.
- Only the **latest addition batch** may be marked new.
- Whenever you add card(s): set `isNew: true` on the new catalog row(s), and **remove / set false `isNew` on every other pattern**.
- Default gallery sort is **Latest** (`createdAt` descending).

### UX Card layout (required)

Every gallery card must match the template:

1. Centered white **`.stage`** (the UX Card) inside **`.demo`**
2. Document **`.footnote`** pinned to the bottom of the page — outside `.demo`, never inside `.stage`
3. Shared styles from `../pattern.css` (do not re-implement `.demo` / `.stage` / `.footnote`)

```html
<body>
  <div class="demo">
    <div class="stage">
      <h1>Title</h1>
      <p class="lead">One-sentence pitch.</p>
      <!-- interaction only -->
    </div>
    <!-- overlays (toast, dialog, palette) go here if needed -->
  </div>

  <footer class="footnote">
    Created YYYY-MM-DD · Canon:
    <a href="../../?canon={anchor}" target="_top">{label}</a>
  </footer>

  <script>/* ... */</script>
</body>
```

- Use the same `createdAt`, `canon.label`, and `canon.anchor` as the catalog row.
- `../../?canon=…` + `target="_top"` breaks out of the preview iframe and opens Canon scrolled to that section.
- Prefer existing Canon anchors (`nielsen-1` … `nielsen-10`, or anchors in `CANON.md`). If you introduce a new Canon idea, add a matching anchor/section in `CANON.md` first.
- Footnote styles live in `pattern.css` (`.footnote`); body flex + `.demo` keep the card centered and the footnote at the bottom.

### HTML conventions

- `<!DOCTYPE html>`, `lang="en"`, charset, viewport, `<title>` matching the catalog title.
- Shared look: `<link rel="stylesheet" href="../pattern.css" />`. Extra rules in a `<style>` block. Do not skip the shared stylesheet (download inlines it).
- Use `.demo`, `.stage`, `.btn`, `.btn-ghost`, `.btn-danger`, `.field`, `.hint`, `.error`, `.footnote` from `pattern.css` when they fit.
- Vanilla JS in a trailing `<script>`. No React, no build step, no CDN frameworks.
- One primary interaction. Keyboard: Escape to dismiss overlays, obvious focus, `aria-*` only where it clarifies.
- `cursor: pointer` is already on `button` in `pattern.css`; disabled controls should stay disabled/`not-allowed`.

### Thumbnail

- Static SVG (not a live iframe). Roughly 320×200, same beige/white/ink language as existing thumbs.
- Suggest the layout of the card; it does not need to be a pixel-perfect screenshot.

### Do not

- Add a database, CMS, or React port of the card.
- Edit `pattern.css` unless the change is clearly shared by many cards.
- Commit secrets or dump large assets.
- Skip the catalog row — the gallery will not show the HTML otherwise.
- Register `_ux-card-template` (or any `_`-prefixed shell) in `content/patterns.ts`.
- Leave stale `isNew: true` on older entries after adding newer ones.
- Override `.footnote` locally in a way that un-centers it or pulls it up under the card.

After adding, the card appears after refresh. Preview in the gallery modal and with Download HTML (inlined CSS). Confirm the footnote Canon link opens the right Canon section.
