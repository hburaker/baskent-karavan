"""
Eski WordPress sitesinin (baskentkaravan.com) tüm adreslerini yeni siteye 301 ile yönlendiren
Cloudflare Pages `public/_redirects` dosyasını üretir.

Girdi:
  seo/legacy-wordpress.json  -> eski sitenin sitemap'leri, SEO etiketleri ve WordPress medya listesi (545 ek sayfası)
  seo/legacy-galleries.json  -> eski ürün sayfalarındaki galeri görsellerinin sırası (yeni ext-XX / int-XX adlarının kaynağı)

Çalıştırma (proje kökünde):  python scripts/generate-redirects.py
Cloudflare limitleri: en fazla 2000 statik + 100 dinamik kural.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
legacy = json.load(open(os.path.join(ROOT, 'seo/legacy-wordpress.json'), encoding='utf-8'))
galleries = json.load(open(os.path.join(ROOT, 'seo/legacy-galleries.json'), encoding='utf-8'))
UP = '/wp-content/uploads/'

# Yeni sitenin ürettiği adresler (bunlar ASLA yönlendirilmez)
PRODUCTS = ['pixel-260', 'ares-330', 'hera-380', 'prime-400', 'prime-460', 'prime-540']
BLOG = [p['slug'] for p in legacy['posts']]
LIVE = {'/', '/urunlerimiz/', '/etkinlikler/', '/sikca-sorulan-sorular/', '/iletisim/', '/cerez-politikasi/',
        '/blog/', '/karavanini-tasarla/'} | {f'/{s}/' for s in PRODUCTS + BLOG}

static: list[tuple[str, str]] = []
seen = set()


def add(src: str, dst: str):
    if src in seen or src in LIVE or src == dst:
        return
    seen.add(src)
    static.append((src, dst))


def base(path: str) -> str:
    """'/wp-content/uploads/2025/10/A_PIXEL-260_001-768x432.jpg' -> '2025/10/A_PIXEL-260_001'"""
    p = path.split(UP, 1)[-1]
    p = re.sub(r'\.(jpe?g|png|gif|webp)$', '', p, flags=re.I)
    p = re.sub(r'-\d+x\d+$', '', p)
    p = re.sub(r'-(scaled|rotated)$', '', p)
    return p


# ---------- 1) Görseller: eski dosya -> yeni webp ----------
img_map: dict[str, str] = {}   # base -> yeni yol
img_variants: dict[str, set] = {}  # base -> eski sitede görülen tüm URL varyantları
for page, widgets in galleries.items():
    if page == '/urunlerimiz/':
        continue
    slug = page.strip('/')
    gals = [w for w in widgets if w['t'] == 'image-gallery']
    for kind, gal in zip(('ext', 'int'), gals):
        fulls = [u for u in gal['imgs'] if not re.search(r'-\d+x\d+\.(jpe?g|png|webp)$', u, re.I)]
        for i, u in enumerate(fulls, 1):
            img_map[base(u)] = f'/images/products/{slug}/{kind}-{i:02d}.webp'
        for u in gal['imgs']:
            img_variants.setdefault(base(u), set()).add(u.split('baskentkaravan.com', 1)[-1])

misc_images = {
    '2021/09/ares-310-marka-tescil-belgesi': '/images/docs/ares-marka-tescil.webp',
    '2021/09/hera-380-marka-tescil-belgesi': '/images/docs/hera-marka-tescil.webp',
    '2020/10/baskent-karavan-sertifika': '/images/docs/sertifika-1.webp',
    '2020/10/karavan-baskent-sertifika': '/images/docs/sertifika-2.webp',
    '2021/03/O1-BELGE-9999-1': '/images/docs/o1-tip-onay.webp',
    '2021/04/O2-BELGE': '/images/docs/o2-tip-onay.webp',
    '2022/01/camp-karavan-fuar-baskent-karavan': '/images/events/camp-karavan-fuar.webp',
    '2021/10/ankara-karavan-etkinligi-2021': '/images/events/ankara-karavan-etkinligi-2021.webp',
    '2021/10/ankara-karavan-etkinlikleri-2021': '/images/events/ankara-karavan-etkinlikleri-2021.webp',
    '2021/07/karavan-iletisim-merkezi': '/images/misc/iletisim-merkezi.png',
    '2023/10/Adsiz-tasarim': '/images/misc/sss-banner.webp',
    '2020/05/cropped-logocuk1': '/images/misc/logo-icon.png',
    '2020/12/kamp-yapma-karavanlari': '/images/blog/karavan-ev-1.webp',
    '2020/12/tatil-karavan-fiyatlari': '/images/blog/tatil-karavan-fiyatlari-1.webp',
    '2020/12/tecrubeli-ekip': '/images/blog/cekme-karavan-1.webp',
    '2020/12/nasil-inceleyebilirsiniz': '/images/blog/cekme-karavan-2.webp',
    '2020/12/karavan-satil-alma-islemleri': '/images/blog/cekme-karavan-3.webp',
    '2020/12/satilik-karavan': '/images/blog/satilik-karavan-1.webp',
    '2020/05/karavan-baskent-ortak': '/images/blog/baskent-karavan-fiyatlari-1.webp',
    '2020/05/karavan-manzarasi': '/images/blog/baskent-karavan-fiyatlari-3.webp',
}
img_map.update(misc_images)

# WordPress medya listesindeki asıl dosya adresleri de varyant olarak eklenir
for m in legacy['media']:
    if m['src'].startswith(UP):
        img_variants.setdefault(base(m['src']), set()).add(m['src'])

image_rules = []
for b, new in img_map.items():
    variants = set(img_variants.get(b, set()))
    for v in sorted(variants):
        image_rules.append((v, new))
    # yüklenen orijinal (boyutsuz, -scaled'siz) dosya: Google Görseller çoğu zaman bunu indeksler
    exts = {os.path.splitext(v)[1] for v in variants} or {'.jpg'}
    for e in sorted(exts):
        image_rules.append((f'{UP}{b}{e}', new))

# ---------- 2) WordPress ek (attachment) sayfaları -> ilgili model / sayfa ----------
RULES = [
    (r'pixel-260|piksel|oiksel', '/pixel-260/'),
    (r'prime-540', '/prime-540/'),
    (r'prime-460|img-20250108', '/prime-460/'),
    (r'prime-400', '/prime-400/'),
    (r'hera', '/hera-380/'),
    (r'ares|angel|luna|img-20250705', '/ares-330/'),
    (r'etkinli|fuar', '/etkinlikler/'),
    (r'logo', '/'),
    (r'sertifika|o1-belge|o2-belge', '/'),
    (r'medusa|petra|calypso|panzer|truva|carrepair|karavan-malzemeleri|karavan-satin-al|urunlerimiz', '/urunlerimiz/'),
]
attachment_rules = []
for m in legacy['media']:
    link = m['link']
    if link in LIVE:
        continue
    key = (link + ' ' + m['src']).lower()
    first = '/' + link.strip('/').split('/')[0] + '/'
    target = None
    if first != link and first in {f'/{s}/' for s in BLOG}:
        target = first  # blog yazısına bağlı ek sayfası -> yazının kendisi
    if not target:
        for pat, dst in RULES:
            if re.search(pat, key):
                target = dst
                break
    attachment_rules.append((link, target or '/urunlerimiz/'))  # bilinmeyen karavan fotoğrafları

# ---------- 3) Eski sayfalar ve WordPress arşivleri ----------
page_rules = [
    ('/karavan-malzemeleri/', '/urunlerimiz/'),
    ('/karavan-satin-al/', '/urunlerimiz/'),
    ('/privacy-policy/', '/cerez-politikasi/'),
    ('/category/cekme-karavan/', '/blog/'),
    ('/author/admin/', '/blog/'),
    ('/feed/', '/blog/'),
    ('/comments/feed/', '/blog/'),
    ('/sitemap.xml', '/sitemap-index.xml'),
    ('/page-sitemap.xml', '/sitemap-index.xml'),
    ('/post-sitemap.xml', '/sitemap-index.xml'),
    ('/attachment-sitemap.xml', '/sitemap-index.xml'),
    ('/sitemap.rss', '/sitemap-index.xml'),
    ('/wp-login.php', '/'),
]
dynamic_rules = [
    ('/category/*', '/blog/'),
    ('/author/*', '/blog/'),
    ('/tag/*', '/blog/'),
    ('/2020/*', '/blog/'),
    ('/2021/*', '/blog/'),
    ('/2022/*', '/blog/'),
    ('/2023/*', '/blog/'),
    ('/2024/*', '/blog/'),
    ('/2025/*', '/blog/'),
    ('/2026/*', '/blog/'),
    ('/wp-admin/*', '/'),
    # Taşınmayan eski görseller (eski modeller vb.) -> ürünler sayfası
    ('/wp-content/uploads/*', '/urunlerimiz/'),
]

# her yazının RSS beslemesi (/yazi/feed/) -> yazının kendisi
page_rules += [(f'/{b}/feed/', f'/{b}/') for b in BLOG]

for s, d in page_rules + image_rules + attachment_rules:
    add(s, d)

if len(static) > 2000 or len(dynamic_rules) > 100:
    sys.exit(f'Cloudflare limiti aşıldı: {len(static)} statik, {len(dynamic_rules)} dinamik')

out = [
    '# Bu dosya scripts/generate-redirects.py tarafından üretilir. Elle düzenlemeyin.',
    '# Eski WordPress adresleri -> yeni site (301 kalıcı yönlendirme)',
    f'# {len(static)} statik + {len(dynamic_rules)} dinamik kural',
    '',
]
out += [f'{s} {d} 301' for s, d in static]
out += ['', '# Genel kurallar (en sonda olmalı)']
out += [f'{s} {d} 301' for s, d in dynamic_rules]
path = os.path.join(ROOT, 'public/_redirects')
open(path, 'w', encoding='utf-8', newline='\n').write('\n'.join(out) + '\n')

summary = {}
for s, d in static:
    summary[d] = summary.get(d, 0) + 1
print(f'{path}: {len(static)} statik, {len(dynamic_rules)} dinamik kural')
for d, n in sorted(summary.items(), key=lambda x: -x[1])[:15]:
    print(f'  {n:4d} -> {d}')
