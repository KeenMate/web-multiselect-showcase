# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **showcase/documentation site** for `@keenmate/web-multiselect`, a web component library. It is NOT the library itself — the library lives in a sibling repo (`../web-multiselect`). This repo is a SvelteKit static site that demonstrates features and documents the API.

## Commands

- `npm run dev` — start dev server (port 5174)
- `npm run build` — production build (static site via `@sveltejs/adapter-static`, output in `build/`)
- `npm run check` — TypeScript/Svelte type checking
- `make link-lib` — link local `../web-multiselect` for development
- `make rebuild-lib` — rebuild and relink the library from `../web-multiselect`
- `make docker-build` / `make docker-run` — containerized deployment (nginx on port 8080)

No test suite or linter is configured.

## Architecture

- **SvelteKit 2 + Svelte 5** static site, fully prerendered (`prerender = true`, `ssr = true`)
- **Styling**: SCSS with Bootstrap 5, `@keenmate/svelte-docs` theme, and `@keenmate/web-multiselect` styles — all imported in `src/app.scss`
- **Layout system**: `@keenmate/svelte-docs` provides the docs shell (`ConfigProvider`). Site config (navigation, metadata, analytics) is defined in `src/routes/+layout.server.ts`. The layout in `+layout.svelte` injects the library version badge into the navbar at runtime.
- **Version injection**: `vite.config.ts` reads the version from `@keenmate/web-multiselect/package.json` and exposes it as `__MULTISELECT_VERSION__` compile-time constant.
- **Routes** map directly to documentation sections:
  - `/` — homepage
  - `/getting-started` — installation/setup guide
  - `/features/*` — feature demos (basic, groups, flexible-data, async-search, virtual-scrolling, display-modes, rtl, custom-styling, etc.)
  - `/api/*` — API reference (component, properties, events, security, logging)
- **Docker**: Multi-stage build (node:alpine -> nginx:alpine) with CSP headers configured in the Dockerfile's inline nginx config.
- **Analytics**: Plausible analytics via script tag in the `analyticsScripts` config array in `+layout.server.ts`.

## Key Dependencies

- `@keenmate/web-multiselect` — the web component being showcased
- `@keenmate/svelte-docs` — documentation site framework (provides layout, navigation, search, TOC)
- `bootstrap` — CSS framework (SCSS imported)
