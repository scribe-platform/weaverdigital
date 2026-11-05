import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `base` varies per customer: a bare github.io project page needs
// `/<repo-name>`, a custom domain (served from a `public/CNAME` file) needs
// `/`. The deploy workflow (.github/workflows/deploy.yml) computes this and
// passes it as PUBLIC_BASE_PATH rather than baking a value in here.
export default defineConfig({
  output: 'static',
  // The live address. Every canonical URL, share-card image URL and sitemap
  // entry is built from this, and none of them can be derived from the
  // environment — so it is written here rather than computed.
  site: 'https://weaverdigital.io',
  base: process.env.PUBLIC_BASE_PATH || '/',
  integrations: [sitemap()],
  redirects: {
    // The old slug went out in texts before the guide was split in two.
    '/guides/porkbun-access': '/guides/domain-you-already-own',
  },
});
