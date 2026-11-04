import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://financesikh.com',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
