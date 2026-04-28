# Lusha Wiki

Multilingual static wiki for Lusha, deployed with GitHub Pages at `https://wiki.lusha.care`.

## Stack

- Astro for static site generation.
- Starlight for documentation navigation, search, responsive layout, and i18n.
- Markdown/MDX content in `src/content/docs/`.
- GitHub Actions deployment in `.github/workflows/deploy.yml`.

## Local Development

Use Node 22. If you use `nvm`, run:

```sh
nvm use
```

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Content Structure

English is served at the root path:

```text
src/content/docs/
  index.md
  getting-started/index.md
  faq/index.md
  clinical-trials/index.md
  universe/index.md
```

Translated content uses locale folders:

```text
src/content/docs/fr/
src/content/docs/de/
src/content/docs/it/
src/content/docs/es/
src/content/docs/pt-br/
```

To add a language, add it to `locales` in `astro.config.mjs`, then create the matching folder in `src/content/docs/`.

## SEO and AI Agent Files

- `public/robots.txt` points crawlers to the sitemap.
- `public/llms.txt` gives AI agents a concise, curated overview.
- `@astrojs/sitemap` generates the sitemap during build.
