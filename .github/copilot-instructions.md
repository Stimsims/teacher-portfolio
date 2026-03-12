# Copilot instructions for teacher-portfolio

## Big picture
- This is a **SvelteKit static site** portfolio (no backend services). Content is mostly in `src/routes/+page.svelte` plus reusable UI in `src/lib`.
- The app is configured for static output via `@sveltejs/adapter-static` in `svelte.config.js`, and routes also set `export const prerender = true` in `src/routes/+layout.svelte` and `src/routes/+page.js`.
- Markdown-like long-form content lives in `.svx` files (mdsvex) under `src/lib/+Data/posts`, loaded lazily into modals.

## Core data/content flow
- “Post index” files (for example `src/lib/+Data/math_posts.js`, `src/lib/+Data/literacy_posts.js`) export `examples` arrays with:
  - `title`
  - `summary`
  - `details: () => import('$lib/+Data/posts/<file>.svx')`
- `src/lib/DataList/MarkdownList.svelte` is the key loader:
  - it calls `example.details()`
  - sets `markdownComponent = module.default`
  - renders with `<svelte:component this={markdownComponent} />` inside `src/lib/Modal/Modal.svelte`.
- To add a new portfolio entry, add/edit an `.svx` file in `+Data/posts`, then register it in the matching `*_posts.js` array.

## Project-specific conventions
- Image assets are imported with `?enhanced&w=...&format=webp` and rendered as `<enhanced:img ... />` (enabled by `@sveltejs/enhanced-img` in `vite.config.js`). Keep this pattern for new images.
- Path alias `$lib` is used heavily; keep imports alias-based where possible.
- JS uses JSDoc typing (not TypeScript files). Keep/extend JSDoc on exported props and data objects.
- Styling is split across global CSS (`src/app.css`, `src/grid.css`, `src/text.css`, `src/lib/animations.css`) and component-local styles.
- Sidebar section navigation in `src/routes/+layout.svelte` depends on section IDs in `src/routes/+page.svelte`. If sections are renamed/added, update both files.

## Build, check, and deploy workflow
- Install: `npm install`
- Dev server: `npm run dev`
- Type/diagnostics check: `npm run check`
- Production build: `npm run build` (outputs static site to `build/`)
- Local preview: `npm run preview`
- GitHub Pages deploy: `npm run deploy` (build + publish `build/` to `gh-pages` branch via `gh-pages` package).

## Integration points / dependencies
- mdsvex preprocess for `.svx` is configured in `svelte.config.js`.
- Charts use `svelte-apexcharts` + `apexcharts` and are dynamically imported on mount in `src/lib/Charts`.
- UI base styles come from `@picocss/pico` imported in `src/routes/+layout.svelte`.

## Agent tips for safe edits
- Prefer adding content through `+Data/*_posts.js` + `.svx` files instead of hardcoding long text into route components.
- Keep prerender/static compatibility (avoid server-only APIs, runtime fetch requirements, or dynamic endpoints unless explicitly requested).
- Before finishing edits, run `npm run check` and `npm run build` to catch Svelte/JS issues early.