# UX Lab

An experimental gallery of UX snippets. Entries are AI-generated and human-reviewed.

Each snippet is a **standalone HTML file** (plus a thumbnail). The Next.js app is only the catalog: search, filter, sort, gallery/list views, preview modal, and download.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

Pushes to `main` build a static export and deploy via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

Live site (after Pages is enabled): [https://foundway.github.io/ux-lab/](https://foundway.github.io/ux-lab/)

In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Layout

| Path | Role |
| --- | --- |
| [`content/patterns.ts`](content/patterns.ts) | Catalog (title, tags, paths). No database. |
| [`public/patterns/{slug}/index.html`](public/patterns/) | Snippet. Link shared [`pattern.css`](public/patterns/pattern.css). Extra CSS/JS stays in the file. |
| [`public/patterns/{slug}/thumb.svg`](public/patterns/) | Static gallery thumbnail. |
| [`public/patterns/pattern.css`](public/patterns/pattern.css) | Shared tokens and base controls. |

Download builds one HTML file with `pattern.css` inlined (in the browser).

## Add a snippet

Use Cursor (see [`AGENTS.md`](AGENTS.md)) or add files by hand.

**1. Instruction for a specific UX**  
Describe the interaction (e.g. “tooltip that stays open while moving to the tooltip”). The agent (or you) implements one snippet, registers it, and you review it in the gallery.

**2. From a principle, heuristic, or pattern not in the lab yet**  
Ask to add something the catalog does not already cover (Nielsen, Norman, Fitts, a named UI pattern, etc.). The agent checks [`content/patterns.ts`](content/patterns.ts), picks a gap, and adds one snippet tied to that idea.

### Files to add

1. `public/patterns/{kebab-slug}/index.html` — self-contained demo, `<link rel="stylesheet" href="../pattern.css" />`.
2. `public/patterns/{kebab-slug}/thumb.svg` — simple static preview (about 320×200).
3. A row in `content/patterns.ts`: `slug`, `title`, `description`, `tags`, `category`, `updatedAt` (`YYYY-MM-DD`), `html`, `thumb`.

Reuse `pattern.css` (`.stage`, `.btn`, `.btn-ghost`, `.btn-danger`). Do not turn snippets into React components.

## Scripts

| Command | |
| --- | --- |
| `npm run dev` | Local gallery |
| `npm run build` | Static production export (`out/`) |
| `npm run lint` | ESLint |
