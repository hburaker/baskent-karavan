# Başkent Karavan — Web Sitesi

Astro ile hazırlanmış, 4 dilli (TR/EN/DE/RU) statik site. Eski site: https://www.baskentkaravan.com

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/
npm run preview
```

Node.js 22.12 veya üzeri gerekir.

## Sık yapılan değişiklikler

| Ne? | Nerede? |
|---|---|
| Telefon, WhatsApp, adres, saatler | `src/data/site.ts` |
| Model fiyatları, donanımlar | `src/data/products.ts` |
| Ekstra fiyatları (tahmini!) | `src/data/extras.ts` |
| Sitedeki metinler / çeviriler | `src/i18n/ui.ts` |
| Donanım maddesi çevirileri | `src/i18n/equipment.ts` |

Ayrıntılar için `AGENTS.md`.
