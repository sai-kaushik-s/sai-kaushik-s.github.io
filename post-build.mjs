// post-build.mjs
// Copies dist/sitemap-0.xml → dist/sitemap.xml so Google Search Console
// can be pointed at the conventional /sitemap.xml URL instead of the
// Astro-generated sitemap index structure.
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve('./dist');
const src  = resolve(dist, 'sitemap-0.xml');
const dest = resolve(dist, 'sitemap.xml');

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log('✓ sitemap.xml copied from sitemap-0.xml');
} else {
  console.warn('⚠ sitemap-0.xml not found — skipping copy');
}
