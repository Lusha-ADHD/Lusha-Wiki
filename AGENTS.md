# AGENTS.md

This repository is the multilingual static wiki for Lusha, deployed to GitHub Pages at `https://wiki.lusha.care`.

## Stack

- Astro + Starlight.
- Markdown content in `src/content/docs/`.
- English is the root locale.
- Translated locales use folders: `fr`, `de`, `it`, `es`, `pt-br`.
- Static public files live in `public/`.
- Generated output lives in `dist/` and should not be edited directly.

## Development Commands

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Validate and build: `npm run build`

Use Node 22. The repo includes `.nvmrc` and `.node-version`.

## Content Rules

- Keep pages semantic, crawler-friendly, and SEO-friendly.
- Every content page should include clear `title` and `description` frontmatter.
- Use descriptive headings that match the page topic.
- Prefer factual, concise wiki language over marketing language.
- Use descriptive alt text for meaningful images.
- Keep page slugs stable once published unless redirects are planned.

## Translation Rules

- Add new pages in English first unless the user asks for another source language.
- Keep translated page paths aligned across locales whenever possible.
- Translate surrounding prose and image alt text, but do not invent domain-specific facts.
- If source content is ambiguous, preserve the ambiguity or ask for clarification.
- When adding a new language, update `locales` in `astro.config.mjs` and add the matching folder under `src/content/docs/`.

## Design Rules

- Main theme colors, fonts, and spacing are customized in `src/styles/lusha.css`.
- Site title, navigation, sidebar, locale config, and metadata are configured in `astro.config.mjs`.
- Logos and globally referenced images should go in `public/`.
- Images used only by wiki content should usually go in `src/assets/`.
- Design changes should remain responsive on mobile and desktop.

## Deployment

- GitHub Pages deploys through `.github/workflows/deploy.yml`.
- The workflow builds the Astro site and uploads `dist/`.
- Do not commit generated `dist/` output unless the deployment strategy changes.
- Keep `public/CNAME` so the custom domain is preserved in the generated site.
