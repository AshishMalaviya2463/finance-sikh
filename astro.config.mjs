import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://financesikh.com',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap({
    filter: (page) => {
      if (page.includes('/blog/') && !page.includes('/en/blog/') && !page.includes('/hi/blog/')) return false;
      if (page.includes('-hi/')) return false;
      return true;
    },
  })],
});
