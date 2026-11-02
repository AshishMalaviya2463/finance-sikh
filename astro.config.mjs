import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Replace the fallback through SITE_URL before production deployment.
  site: process.env.SITE_URL || 'https://example.invalid',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
