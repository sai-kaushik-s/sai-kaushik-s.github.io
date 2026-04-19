// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://sai-kaushik-s.github.io',
  integrations: [react()],
  output: 'static',
  prefetch: true,
});
