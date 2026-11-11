import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.baskentkaravan.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'tr', locales: { tr: 'tr-TR', en: 'en-GB', de: 'de-DE', ru: 'ru-RU' } },
    }),
  ],
  // Eski WordPress adresleri için 301 yönlendirmeleri public/_redirects dosyasındadır (scripts/generate-redirects.py üretir).
});
