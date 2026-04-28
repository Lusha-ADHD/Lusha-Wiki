import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const supportedLocales = {
  root: {
    label: 'English',
    lang: 'en',
  },
  fr: {
    label: 'Français',
    lang: 'fr',
  },
  de: {
    label: 'Deutsch',
    lang: 'de',
  },
  it: {
    label: 'Italiano',
    lang: 'it',
  },
  es: {
    label: 'Español',
    lang: 'es',
  },
  'pt-br': {
    label: 'Português do Brasil',
    lang: 'pt-BR',
  },
};

export default defineConfig({
  site: 'https://wiki.lusha.care',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    starlight({
      title: 'Lusha Wiki',
      description:
        'Official multilingual wiki for Lusha, including onboarding, FAQ, clinical trial information, and world lore.',
      locales: supportedLocales,
      defaultLocale: 'root',
      lastUpdated: true,
      customCss: ['./src/styles/lusha.css'],
      sidebar: [
        {
          label: 'How to Get Started',
          items: [{ label: 'Overview', link: 'getting-started/' }],
        },
        {
          label: 'FAQ',
          items: [{ label: 'Questions', link: 'faq/' }],
        },
        {
          label: 'Clinical Trial Info',
          items: [{ label: 'Overview', link: 'clinical-trials/' }],
        },
        {
          label: 'The Universe of Lusha',
          items: [{ label: 'World Guide', link: 'universe/' }],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'Lusha, Lusha game, Lusha wiki, game guide, clinical trials, multilingual wiki',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'Lusha Wiki',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
      ],
    }),
  ],
});
