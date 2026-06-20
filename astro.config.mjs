import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://belconnenlaundromat.com.au',
  integrations: [sitemap()],
});
