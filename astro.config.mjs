// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sai-kaushik-s.com',
  integrations: [
    react(),
    sitemap({
      // Exclude the hidden easter-egg page from the public sitemap
      filter: (page) => !page.includes('/untitled'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  output: 'static',
  prefetch: true,
});
