# AGENTS.md — Başkent Karavan Web Sitesi

Bu dosya, bu projede çalışacak yapay zekâ asistanları (Claude, Copilot, Cursor, Gemini vb.) ve geliştiriciler için proje bağlamını içerir. Değişiklik yapmadan önce okuyun; önemli bir karar veya değişiklik yaptığınızda **"Değişiklik Geçmişi"** bölümünü güncelleyin.

## 1. Proje özeti

- **Firma:** Başkent Karavan Römork A.Ş. — Ankara Kahramankazan'da kendi tasarladığı çekme karavanları üreten firma.
- **Amaç:** Eski WordPress sitesinin (https://www.baskentkaravan.com) modern, profesyonel ve dönüşüm odaklı yeniden yapımı. Ziyaretçi modelleri merak edip incelemeli, yapılandırıcıda ekstraları seçip fiyatı görmeli ve WhatsApp'tan teklif istemeli.
- **Ton:** Kurumsallık ile karavan tutkusu arası. Koyu orman yeşili (güven), krem/kum (sıcaklık), hardal/okra vurgu (karavan iç mekânındaki tekstillerden alındı).
- **Site türü:** Statik çok sayfalı site, 4 dil. Backend yok.
- **Proje sahibi:** Halit Burak Eroğlu.
- **Konum:** `C:\Users\KTN78844\Desktop\PersonalProjects\baskent-karavan`

## 2. Firma bilgileri (tek doğru kaynak: `src/data/site.ts`)

| Alan | Değer |
|---|---|
| WhatsApp (yönlendirme) | `905427425530` (0542 742 55 30) — kullanıcının istediği "sonu 5530" numara |
| Diğer telefonlar | 0542 742 55 36 (Ankara), 0312 802 06 05 (Merkez) |
| E-posta | baskentkaravan@gmail.com (eski sitenin çerez politikasından) |
| Adres | Saray Mahallesi, 642. Cadde No:20, 06980 Kahramankazan / Ankara |
| Google Maps | place_id `ChIJ28osB5xJ0xQRG97oHc86UXM`, koordinat 40.0619271, 32.6280862 |
| Google puanı | 4.8 (Kasım 2026'da 510 yorum) → sitede "500+ yorum" |
| Çalışma saatleri | Pzt–Cuma 08:30–18:00, Cmt 09:00–16:00, Pazar kapalı |
| Sosyal medya | Facebook, YouTube (eski sitedeki Twitter linki boştu, eklenmedi) |
| Slogan | "Seyahatte Eskimeyen Moda" (marka sloganı, tüm dillerde Türkçe bırakıldı) |

## 3. Teknoloji

- **Astro 7.4.7** + `@astrojs/sitemap` 3.7.4. Saf CSS, UI framework yok (React/Tailwind yok).
- **Node.js >= 22.12** gerekli (kullanıcıda 22.x var).
- Fontlar: Google Fonts — Manrope (başlık+gövde, Türkçe ve Kiril destekli), Playfair Display italik (slogan).
- İkonlar: `src/components/Icon.astro` (inline SVG, harici kütüphane yok).
- Komutlar: `npm install`, `npm run dev` (http://localhost:4321), `npm run build` (çıktı `dist/`), `npm run preview`.
- Yayın: Cloudflare Workers (bkz. 3.1).

## 3.1 Git ve yayın (GitHub → Cloudflare)

- **Repo:** https://github.com/hburaker/baskent-karavan (kişisel GitHub hesabı `hburaker`; şirket GitLab'ı DEĞİL). Branch: `main`.
- `origin` adresi kullanıcı adıyla tanımlı: `https://hburaker@github.com/hburaker/baskent-karavan.git`. Böylece bilgisayarda başka bir GitHub hesabı kayıtlı olsa bile push her zaman `hburaker` hesabıyla yapılır; giriş gerekirse Git Credential Manager tarayıcıdan oturum açtırır.
- Commit kimliği (yalnızca bu repo): `Halit Burak Eroğlu <halitburakeroglu@gmail.com>` — şirket e-postası bu projede kullanılmaz. İlk 3 commit şirket e-postasıyla atılmıştır (geçmiş değiştirilmedi).
- Yerel `.git/config` ayarları: `credential "https://github.com".username = hburaker`, `push.autoSetupRemote = true`, `main` → `origin/main` takipli. Yani günlük kullanım sadece:
  ```bash
  git add .
  git commit -m "açıklama"
  git push
  ```
- **Yayın:** Cloudflare **Workers** (Pages değil) GitHub'a bağlı. `main`'e her push'ta otomatik build + deploy olur. Ayarlar: build `npm run build`, deploy `npx wrangler deploy`, preview `npx wrangler preview`, build değişkeni `NODE_VERSION=22`. Worker yapılandırması `wrangler.jsonc` (assets `./dist`, `404-page`, `auto-trailing-slash`); Worker adı Cloudflare'deki adla (`baskent-karavan`) aynı olmalı.
- `public/_redirects` Workers static assets tarafından da okunur (limit 2000 statik + 100 dinamik kural; yönlendirmeler dosyalardan önce uygulanır).
- Build'i kod değişikliği olmadan tetiklemek için: `git commit --allow-empty -m "build tetikle" && git push`.

## 4. Çoklu dil (i18n)

- Diller: **tr** (varsayılan, kök dizin), **en** (`/en/`), **de** (`/de/`), **ru** (`/ru/`). Eski sitedeki Google Translate (makine çevirisi) yerine elle yazılmış çeviriler.
- Tüm arayüz metinleri: `src/i18n/ui.ts` (`tr`, `en`, `de`, `ru` sözlükleri aynı anahtarlara sahip olmalı).
- Standart donanım maddelerinin çevirileri: `src/i18n/equipment.ts` (anahtar = Türkçe madde metni).
- Adresler `routes` tablosunda. **TR adresleri eski siteyle birebir aynı** (SEO): `/urunlerimiz/`, `/pixel-260/` … `/prime-540/`, `/etkinlikler/`, `/sikca-sorulan-sorular/`, `/iletisim/`, `/cerez-politikasi/`, blog yazıları kökte (`/cekme-karavan/` vb.).
- Yeni TR adresi: `/karavanini-tasarla/` (yapılandırıcı). `/blog/` eski sitede de vardı. Eski adres yönlendirmeleri `public/_redirects` içinde (bkz. 7.1).
- Blog yalnızca Türkçe; diğer dillerde menüde yok, footer'da "Blog (TR)" olarak bağlanıyor.
- Her sayfa `hreflang` alternatifleri üretir; dil değiştirici aynı sayfanın diğer dildeki karşılığına gider.

## 5. Dosya yapısı

```
astro.config.mjs            site URL, sitemap (i18n), eski URL yönlendirmeleri
public/images/products/<slug>/ext-XX.webp | int-XX.webp (+ -sm.webp küçük sürüm, 720px)
public/images/docs/         ISO 9001, O1/O2 tip onay, marka tescil belgeleri
public/images/events/       geçmiş etkinlik afişleri
public/images/blog/         blog görselleri
public/images/misc/         logo (logo-icon.png, logo-96.png), SSS bannerı
src/data/site.ts            firma bilgileri (telefon, adres, harita, saatler, sosyal medya, videolar)
src/data/products.ts        6 model: fiyat, slogan (4 dil), özet özellikler, standart donanım listesi (TR, orijinal)
src/data/extras.ts          EKSTRALAR: fiyat, grup, ikon, hangi modelde standart olduğu, 4 dilde ad/açıklama
src/data/blog.json          eski sitedeki 10 blog yazısı (HTML, temizlenmiş)
src/data/cerez-politikasi.html  eski sitedeki çerez politikası metni (TR)
src/i18n/ui.ts              diller, adres tablosu, url() yardımcıları, tüm metinler, SSS videoları
src/i18n/equipment.ts       donanım maddesi çevirileri
src/pages/[...path].astro   TÜM sayfaları üreten tek dinamik rota (dil × sayfa + blog)
src/pages/404.astro
src/layouts/Layout.astro    <head>, SEO, hreflang, Open Graph, JSON-LD (AutoDealer, Product, BlogPosting)
src/views/                  sayfa içerikleri: Home, Models, Product, Configure, Events, Faq, Contact, Blog, BlogPost, Privacy
src/components/
  Header.astro              sabit header, "Modeller" mega menü (görselli), mobil tam ekran menü
  LangSwitch.astro          dil seçici (details/summary)
  Configurator.astro        ⭐ model + ekstra seçimi, canlı toplam, WhatsApp mesajı
  ProductCard.astro         model kartı (üzerine gelince iç mekân fotoğrafına geçer)
  CompareTable.astro        modeller karşılaştırma tablosu
  Lightbox.astro            tüm sitede ortak galeri penceresi (a[data-lb="grup"])
  YouTube.astro             tıklanınca yüklenen YouTube oynatıcı (youtube-nocookie)
  ContactBlock.astro        iletişim bilgileri + Google Maps
  PageHero.astro, Footer.astro, FloatingWhatsApp.astro, Icon.astro
src/styles/global.css       renk değişkenleri, butonlar, bölümler, .reveal animasyonu, .prose
```

## 6. Yapılandırıcı (Configurator) nasıl çalışır

- `/karavanini-tasarla/` sayfasında ve her ürün sayfasının `#yapilandir` bölümünde.
- Model fiyatı + seçilen ekstralar = toplam (animasyonlu sayaç). Modelde **standart** olan ekstra "Standart" etiketiyle gösterilir, seçilemez ve fiyata eklenmez (`standardOn`).
- "WhatsApp'tan Teklif Al" → `wa.me/905427425530` hazır mesajla açılır: model + fiyat, seçilen ekstralar + fiyatları, tahmini toplam (KDV dahil), isteğe bağlı ad/şehir ve seçimi geri açan paylaşım linki.
- Mesaj ziyaretçinin dilinde gider.
- Yapılandırıcı sayfasında seçim adres çubuğuna yazılır: `?model=prime-400&x=ac,tv` (paylaşılabilir, sayfa yenilenince korunur).
- Mobilde altta "toplam + Özeti gör" çubuğu çıkar; bu sırada WhatsApp/Ara çubuğu gizlenir.

## 7. Önemli kararlar ve dikkat edilecekler

- **Ekstra fiyatları TAHMİNİDİR.** Kullanıcı "piyasa tahmini koy" dedi. Firmadan gerçek liste gelince sadece `src/data/extras.ts` içindeki `price` alanları güncellenmeli. Sitede "bilgilendirme amaçlıdır" uyarısı var.
- Model fiyatları ve standart donanım listeleri eski siteden birebir alındı (Kasım 2026).
- Görseller eski siteden alındı, WebP'ye çevrildi (en fazla 1920px) ve `-sm.webp` küçük sürümleri üretildi. Eski sitedeki 3 blog görseli bozuk olduğu için alınamadı ve yazılardan çıkarıldı.
- Blog yazılarında artık olmayan eski modellere (Medusa 375, Calypso 360, Petra 300) verilen linkler `/urunlerimiz/`'e çevrildi.
- **Sahte yorum yok.** Sadece gerçek Google puanı (4.8, 500+) gösteriliyor ve Google Haritalar'a bağlanıyor.
- Analitik (Google Analytics / Yandex Metrica) **yeni sitede kurulu değil**. Eski çerez politikası metni bunlardan bahsediyor; analitik eklenmeyecekse politika metni gözden geçirilmeli.
- Eski sitedeki çerez bildirimi kaldırıldı (site kendi çerezini kullanmıyor; YouTube tıklanana kadar yüklenmiyor, nocookie alan adıyla).
- Header'ın `backdrop-filter`'ı `::before` pseudo-elemanında; header'ın kendisine verilirse mobil menü (absolute/fixed) bozulur.
- Ürün sayfası grid'i mobilde `minmax(0, 1fr)` olmalı; aksi halde küçük resim şeridi sayfayı yatayda taşırıyor (yaşandı ve düzeltildi).
- Mobilde (390px) yatay kaydırma olmamalı; tüm 64 sayfa test edildi.

## 7.1 SEO ve eski siteden geçiş (önemli)

- Eski WordPress sitesinin tüm adresleri `seo/legacy-wordpress.json` dosyasında (sitemap'ler, her sayfanın title/description'ı, 545 medya/ek sayfası). Ürün galerilerinin eski sırası `seo/legacy-galleries.json`.
- **Aynı adreste yaşayan sayfalar (23):** ana sayfa, 6 model, ürünlerimiz, etkinlikler, SSS, iletişim, çerez politikası, blog ve 10 blog yazısı.
- **Türkçe sayfalarda `<title>` ve meta description eski siteyle birebir aynı** — `[...path].astro` bunu `legacy-wordpress.json`'dan otomatik alır. Tek istisna ana sayfa: eski başlık sadece "Başkent Karavan" idi, yeni başlık "Başkent Karavan | Ankara Çekme Karavan Üreticisi" (marka hâlâ başta).
- **301 yönlendirmeleri:** `public/_redirects` (Cloudflare Pages formatı). Elle düzenlemeyin; `python scripts/generate-redirects.py` ile yeniden üretin. İçerik: 545 WordPress ek (attachment) sayfası → ilgili model sayfası (bilinmeyenler `/urunlerimiz/`), eski görsel dosyaları (`/wp-content/uploads/...`, `-scaled` ve küçük boyut sürümleri dahil) → yeni WebP'ler, eski sitemap adresleri → `/sitemap-index.xml`, `/karavan-malzemeleri/` ve `/karavan-satin-al/` → `/urunlerimiz/`, `/privacy-policy/` → `/cerez-politikasi/`, kategori/yazar/tarih arşivleri ve feed'ler → `/blog/`. Cloudflare limiti: 2000 statik + 100 dinamik kural (şu an ~1000).
- `_redirects` canlı bir sayfanın adresini ASLA içermemeli (Cloudflare yönlendirmeyi dosyadan önce uygular). Script bunu `LIVE` kümesiyle engelliyor; yeni sayfa eklenirse oraya da ekleyin.
- Her sayfada: canonical (www + sonda `/`), `robots: index, follow, max-image-preview:large` (eskisiyle aynı), hreflang (tr/en/de/ru + x-default), Open Graph + Twitter kartı, JSON-LD: `AutoDealer` (Organization), `WebSite`, `WebPage`/`CollectionPage`/`ContactPage`, `BreadcrumbList`; ürünlerde `Product`+`Offer`, yazılarda `BlogPosting` (og:type article), SSS'de `FAQPage`.
- Eski sitede HTML doğrulama etiketi yoktu (Search Console büyük ihtimalle DNS ile doğrulanmış; DNS kaydı silinmemeli). Etiket gerekirse `site.ts` → `googleSiteVerification` / `yandexVerification`.
- Eski sitede Yandex Metrica (sayaç 64686859) vardı; yeni sitede kapalı. Açmak için `site.ts` → `yandexMetricaId: 64686859` (çerez bildirimi de eklenmeli).
- Yayına alındıktan sonra: Search Console'a `https://www.baskentkaravan.com/sitemap-index.xml` gönderin, `baskentkaravan.com` (www'suz) → `www` 301 kuralını Cloudflare Redirect Rules ile ekleyin.

## 8. Yapılabilecekler

- Firmanın gerçek ekstra fiyat listesi
- Yeni etkinlikler (`src/views/Events.astro` → "Yaklaşan etkinlikler")
- Instagram hesabı varsa `site.social`'a eklemek
- Analitik (KVKK uyumlu çerez onayıyla birlikte)
- Blog yazılarının diğer dillere çevirisi

## 9. Değişiklik geçmişi

- **2026-11-06:** Proje oluşturuldu. Eski siteden 6 model (fiyat, donanım, 147 galeri fotoğrafı), belgeler, etkinlikler, 9 SSS videosu, 10 blog yazısı, çerez politikası aktarıldı. 4 dil (TR/EN/DE/RU), ekstralarla canlı fiyat hesaplayan yapılandırıcı ve WhatsApp teklif akışı eklendi. 16 ekstra (buzdolabı, güneş paneli, jel akü, frenli şasi, klima, inverter, tente vb.) tahmini fiyatlarla.
- **2026-11-11:** SEO geçişi: eski sitenin 570 adresi (sayfalar + 545 ek sayfası) tarandı; Türkçe title/description eski siteyle eşitlendi; ~1000 kuralla `public/_redirects` (301) eklendi; BreadcrumbList, WebSite, WebPage, FAQPage şemaları, robots meta, Twitter kartı, doğrulama/Metrica ayarları eklendi. Astro `redirects` ayarı kaldırıldı (yerine `_redirects`).
- **2026-11-11:** GitHub reposu (hburaker/baskent-karavan) ve Cloudflare Workers otomatik yayını kuruldu; `wrangler.jsonc` eklendi; git push ayarları ve bu bölüm (3.1) eklendi.
