# Lusha Wiki Project Brief

## Purpose

The Lusha Wiki is the official public knowledge base for the game/app Lusha. It should help users (which are parents and their child), visitors (such as health care professionals), search engines, and AI agents understand what Lusha is, how to get started, where to find answers, and how the game's universe is organized.

The site is published as a static GitHub Pages website at `https://wiki.lusha.care`.

## What Is Lusha?

Lusha is a mobile game by Dygie for children and families. It is a behavior-support game for kids, especially families dealing with ADHD-related issues around routines, emotional regulation, anger management, self-care, and household chores.

The core idea is to connect real-life tasks with in-game motivation. Parents can set or track chores and routines, while children progress through a colorful adventure world with stories, quests, rewards, and friendly guides. App-store descriptions mention features such as a chores tracker, in-game rewards, progress tracking, screen-time limits, and a parent dashboard that can help families organize information and share progress with healthcare professionals when relevant.

Lusha is science-based and inspired by clinically backed mental health programs, while that it is not (yet) a medical device. The wiki should therefore describe Lusha as a supportive game and family tool, not as a replacement for professional care, diagnosis, or treatment.

Lusha is available on iOS and Android, published by Dygie, with in-app purchases. The exact store title, category, ratings, download counts, and feature wording may vary by country, platform, and app version, so public claims in the wiki should be checked against current official listings before publication.

Useful public references:

- Apple App Store: `https://apps.apple.com/us/app/chores-and-anger-management/id1626295849`
- Google Play: `https://play.google.com/store/apps/details?id=com.Dygie.Lusha`
- Official website: `https://lusha.care`

## Goals

- Provide clear onboarding for new users.
- Maintain a structured FAQ for common questions.
- Document the universe of Lusha in a durable wiki format.
- Support multiple languages from the start.
- Make content easy for crawlers and AI agents to read.
- Keep the site fast, responsive, accessible, and easy to maintain.

## Audience

- New users who need a simple starting path.
- Existing users looking for reference material.
- People evaluating or learning about Lusha before using it or sharing it.
- Translators and contributors maintaining localized content.
- Search crawlers and AI agents indexing or summarizing the wiki.

## Current Language Scope

French is the editorial source language because the primary maintainer writes first in French.

English is currently served from the root path for public URLs and GitHub Pages structure.

Supported localized paths:

- French: `/fr/`
- German: `/de/`
- Italian: `/it/`
- Spanish: `/es/`
- Brazilian Portuguese: `/pt-br/`

New languages should be easy to add by updating `astro.config.mjs` and adding a matching folder under `src/content/docs/`.

## Current Site Sections

- `getting-started`: onboarding, first steps, access, setup, and early guidance.
- `faq`: short answers to frequent questions, with links to deeper pages when needed.
- `clinical-trials`: placeholder section reserved for future content rules and source-backed material.
- `universe`: lore, setting, characters, locations, timeline, glossary, and related worldbuilding.

Additional sections can be added later if they fit the wiki structure and have a clear navigation purpose.

## Technical Direction

The project uses Astro and Starlight to generate a static documentation site.

Key implementation choices:

- Content is written in Markdown or MDX.
- Pages are statically generated for SEO and crawler readability.
- Navigation and locale configuration live in `astro.config.mjs`.
- Theme customization lives in `src/styles/lusha.css`.
- Static public files live in `public/`.
- Build output is generated in `dist/` and deployed by GitHub Actions.

## Content Principles

- Write in clear, factual wiki language.
- Prefer short sections with descriptive headings.
- Use stable page URLs once content is published.
- Add `title` and `description` frontmatter to every page.
- Link related pages together instead of duplicating long explanations.
- Use descriptive alt text for meaningful images.
- Avoid inventing game facts, dates, claims, or terminology that have not been provided.
- Follow the canonical terminology in `docs/glossary.md` when naming product concepts, roles, features, and game-world elements.

## SEO and AI Agent Requirements

The site should remain readable as static HTML and should expose important content through standard web mechanisms.

Current crawler and AI support:

- Semantic Markdown-generated HTML.
- Sitemap generated during build.
- `robots.txt` in `public/`.
- `llms.txt` in `public/`.
- Per-page titles and descriptions.
- Locale-specific URLs.

When adding major content, update internal links and `llms.txt` if the new content should be especially discoverable by AI agents.

## Translation Principles

- Draft source content in French first unless another source language is explicitly requested.
- Translate French source content into English for the root locale, then into the other supported languages.
- Keep equivalent page paths aligned between languages.
- Translate meaning, not just words.
- Localize alt text, headings, and captions.
- Use `docs/glossary.md` for product terms that should stay consistent across languages.
- Do not invent missing details while translating.
- If a page is not fully translated yet, keep it clearly understandable and avoid presenting placeholders as final content.

## Editorial Process

Use a simple editorial workflow:

1. Write or update the French source page.
2. Check facts, terminology, links, screenshots, and image alt text.
3. Update the English root page and other translated pages, or mark them as needing translation.
4. Run `npm run build`.
5. Merge to `main` and deploy through GitHub Actions.

## Design Principles

The wiki should feel polished, readable, and responsive without becoming a marketing site.

Design priorities:

- Comfortable reading on mobile and desktop.
- Clear navigation and search.
- Strong contrast and accessible typography.
- Visual identity that can evolve with Lusha's brand.
- Images used to clarify gameplay, onboarding, or worldbuilding rather than as empty decoration.

## Deployment

The site deploys through GitHub Actions using `.github/workflows/deploy.yml`.

Expected deployment flow:

1. Merge changes to `main`.
2. GitHub Actions installs dependencies with `npm ci`.
3. The site is validated and built with `npm run build`.
4. The generated `dist/` directory is uploaded to GitHub Pages.

GitHub Pages should be configured to use GitHub Actions as the source.

## Visual Identity

The current visual identity assets live in `src/assets/` and should be treated as the source set for the wiki's early design direction.

Current assets:

- `LushaAppIcon.png`: app icon, suitable for favicon derivation, app/store references, and small brand marks.
- `Logo_Lusha.png`: main Lusha logo, suitable for wiki header branding, homepage hero treatment, and official identity moments.
- `Logo_Dygie.png`: company logo, suitable for footer, About/credits pages, and publisher references.
- `CampBackground.PNG`: camp environment background, suitable for the homepage or universe pages.
- `CharactersBackground.png`: character-focused background, suitable for onboarding, universe pages, or visual introductions.
- `GameplayBackground.png`: 3D gameplay environment background, suitable for getting started pages and feature explanations.

The wiki should use these assets to make Lusha recognizable immediately, while keeping pages readable and documentation-focused. Background images should support the page topic and should not reduce text contrast. Gameplay and onboarding pages should prefer screenshots or gameplay images that show the actual app experience. Universe pages can use more atmospheric visuals such as the camp and character backgrounds.

Recommended usage:

- Use the Lusha logo in the site header once the final logo treatment is configured in Starlight.
- Use the app icon for favicons, social preview images, and app download references.
- Use the Dygie logo in a restrained publisher/credits context rather than as primary branding.
- Use background art on high-level entry pages, not on every documentation page.
- Add captions or descriptive alt text when images communicate meaningful information.
- Keep image crops responsive so important characters, UI, or gameplay details are not cut off on mobile.

Useful additions:

- SVG versions of the Lusha and Dygie logos, if available, for sharper rendering and smaller file size.
- A favicon set derived from `LushaAppIcon.png`.
- A default Open Graph/social sharing image for links to the wiki.
- A few real onboarding screenshots from the app for the getting started guide.
- A short brand palette with primary, secondary, accent, background, and text colors.
- A typography note describing the preferred brand font if one exists.
- Image usage guidance for spoiler-heavy or story-specific visuals.

## Open Questions

- Should the public root locale remain English, or should French become the root URL later?
