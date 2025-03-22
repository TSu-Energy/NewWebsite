import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from '@playform/compress';

import astrowind from './vendor/integration';

import react from '@astrojs/react';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LIVE_URL = 'https://tsuenergy.com';

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  site: LIVE_URL,
  output: 'static',
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false   
    },
  },
  renderers: ['@astrojs/renderer-react'],
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
    [react()],
  ],

  image: {
    service: squooshImageService(),
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  // redirects: {
    // "/": "/en",
    // "/about": "/en/about",
    // "/products": "/en/products",
    // "/contact": "/en/contact",
    // "/solutions": "/en/solutions",
    // "/solutions/industries": "/en/solutions/industries",
    // "/solutions/labs": "/en/solutions/labs",
    // "/solutions/trade": "/en/solutions/trade",
    // "/solutions/batteries": "/en/solutions/batteries",
    // "/products/ts-cloud": "/en/products/ts-cloud",
    // "/products/ts-pass": "/en/products/ts-pass",
    // "/products/ai-tool": "/en/products/ai-tool",
    // "/blog": "/en/blog",
    // "/category/tian1-su1-shi2-tiao2": "/en/category/tian1-su1-shi2-tiao2",
    // "/category/tian1-su1-ji2-lu4": "/en/category/tian1-su1-ji2-lu4",
    // "/homes/talk": "/en/homes/talk",
    // "/sales": "/en/sales",
    // "/terms": "/en/terms",
    // "/privacy": "/en/privacy",
    // "/talk": "/en/talk",
  // },
});
