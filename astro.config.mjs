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
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
      },
      sidebar: [
        {
          label: 'Getting Started Guide',
          translations: {
            fr: 'Guide de démarrage',
            de: 'Startleitfaden',
            it: 'Guida introduttiva',
            es: 'Guía de inicio',
            'pt-BR': 'Guia de início',
          },
          items: [
            {
              label: 'Getting Started Guide',
              translations: {
                fr: 'Guide de démarrage',
                de: 'Startleitfaden',
                it: 'Guida introduttiva',
                es: 'Guía de inicio',
                'pt-BR': 'Guia de início',
              },
              link: 'getting-started/',
            },
          ],
        },
        {
          label: 'FAQ',
          translations: {
            fr: 'FAQ',
            de: 'FAQ',
            it: 'FAQ',
            es: 'FAQ',
            'pt-BR': 'FAQ',
          },
          items: [
            {
              label: 'Questions',
              translations: {
                fr: 'Questions',
                de: 'Fragen',
                it: 'Domande',
                es: 'Preguntas',
                'pt-BR': 'Perguntas',
              },
              link: 'faq/',
            },
          ],
        },
        {
          label: 'Clinical Trial Info',
          translations: {
            fr: 'Informations sur les essais cliniques',
            de: 'Klinische Studieninformationen',
            it: 'Informazioni sugli studi clinici',
            es: 'Información de ensayos clínicos',
            'pt-BR': 'Informações sobre estudos clínicos',
          },
          items: [
            {
              label: 'Overview',
              translations: {
                fr: 'Vue d’ensemble',
                de: 'Überblick',
                it: 'Panoramica',
                es: 'Resumen',
                'pt-BR': 'Visão geral',
              },
              link: 'clinical-trials/',
            },
          ],
        },
        {
          label: 'The Universe of Lusha',
          translations: {
            fr: 'Univers de Lusha',
            de: 'Das Universum von Lusha',
            it: 'Universo di Lusha',
            es: 'Universo de Lusha',
            'pt-BR': 'Universo de Lusha',
          },
          items: [
            {
              label: 'World Guide',
              translations: {
                fr: 'Guide du monde',
                de: 'Weltführer',
                it: 'Guida al mondo',
                es: 'Guía del mundo',
                'pt-BR': 'Guia do mundo',
              },
              link: 'universe/',
            },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'Lusha, Lusha game, ADHD kids, ADHD children, parents, routines, chores tracker, emotional regulation, anger management, rewards, parent dashboard, family support, Lusha wiki, game guide, clinical trials',
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
