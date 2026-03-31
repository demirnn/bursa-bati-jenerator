# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for Batı Jeneratör Güç Sistemleri (generator sales & services company based in Bursa). React 19 + TypeScript SPA with Vite, fully Turkish-language. No backend server — data comes from Google Sheets API and Google Gemini AI.

## Commands

```bash
npm run dev      # Dev server on http://0.0.0.0:3000
npm run build    # Production build (tsc + vite build)
npm run lint     # Type check only (tsc --noEmit)
npm run push     # Deploy via push_gh.py
```

No test framework is configured.

## Architecture

**Routing (React Router v7):** Defined in `App.tsx`. Key routes:
- `/` → HomePage, `/products/:category` → CategoryProducts, `/product/:id` → ProductDetail
- `/portable-product/:id` → PortableProductDetail, `/gobiz-kit` → GobizKitPage (AI recommendations)

**Data flow:** Pages fetch data on mount via services → local useState → render. No global state management.

**Services (`/services`):**
- `googleSheetsService.ts` — Fetches product data from two Google Sheets (portable + industrial). Parses 90+ columns per product row. API key is hardcoded.
- `geminiService.ts` — Uses `@google/genai` SDK with `gemini-3-flash-preview` model for Turkish-language generator recommendations. Requires `GEMINI_API_KEY` env var.

**Static data:** `constants.tsx` holds service definitions, product previews, testimonials, and contact info shared across components.

## Styling

- **Tailwind CSS via CDN** (not installed as dependency) — custom blue palette defined in inline `<script>` in `index.html`
- **Fonts:** Space Grotesk (headings) + Inter (body) via Google Fonts CDN
- **Icons:** Font Awesome 6.4.0 CDN (`<i className="fas fa-*">`)
- **CSS variables** in `index.html`: `--oil-black`, `--corp-grey`
- **Design language:** Monochrome + blue accent, uppercase tracking-widest headings, minimal border-radius, grid-based layouts

## Key Conventions

- All user-facing strings are in Turkish
- Product images use `referrerPolicy="no-referrer"` (external sources)
- Contact forms integrate with WhatsApp (no email backend)
- Path alias: `@/*` maps to project root (configured in vite.config.ts + tsconfig.json)
