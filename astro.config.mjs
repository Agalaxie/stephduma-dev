// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stephduma.dev',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap({
    changefreq: 'monthly',
    lastmod: new Date(),
    priority: 0.7,
  })],
});