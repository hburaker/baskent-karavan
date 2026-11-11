import type { Lang } from '../i18n/ui';

// Ürün içerikleri birebir eski siteden (baskentkaravan.com) alınmıştır.
// Fiyatlar KDV dahildir. Fiyat değişirse sadece `price` alanını güncelleyin.

export type Localized = Record<Lang, string>;

export interface Product {
  slug: string; // eski sitedeki URL ile aynı (SEO için korunur)
  name: string;
  series: 'Pixel' | 'Ares' | 'Hera' | 'Prime';
  price: number;
  capacity?: string; // eski sitede sadece Pixel 260 için verilmiş
  ext: number; // public/images/products/<slug>/ext-XX.webp adedi
  int: number; // public/images/products/<slug>/int-XX.webp adedi
  hero: number; // kartlarda kullanılacak dış görsel numarası
  heroInt: number; // kart üzerine gelince gösterilecek iç görsel numarası
  trademark?: string; // marka tescil belgesi görseli
  tagline: Localized;
  specs: {
    axle: string; // dingil kapasitesi
    brakes: boolean;
    water: number; // litre
    wheel: string;
    fridge?: number; // litre
    solar: boolean;
    batteries: number; // 100 Ah jel akü adedi
    heater: boolean;
    awning: boolean;
    fixedBed: boolean;
    bunk: 'none' | 'folding' | 'double';
  };
  equipment: string[]; // Türkçe orijinal metin; çevirileri src/i18n/equipment.ts içinde
}

export const products: Product[] = [
  {
    slug: 'pixel-260',
    name: 'Pixel 260',
    series: 'Pixel',
    price: 275000,
    capacity: '2-3',
    ext: 12,
    int: 16,
    hero: 2,
    heroInt: 1,
    tagline: {
      tr: 'Kompakt, hafif ve şehir dışına ilk adım için ideal. 2-3 kişilik giriş modelimiz.',
      en: 'Compact, light and perfect for your first escape. Our 2–3 person entry model.',
      de: 'Kompakt, leicht und ideal für den ersten Ausflug. Unser Einstiegsmodell für 2–3 Personen.',
      ru: 'Компактный и лёгкий — идеален для первого путешествия. Базовая модель на 2–3 человека.',
    },
    specs: { axle: '750 kg', brakes: false, water: 55, wheel: '13"', solar: false, batteries: 0, heater: false, awning: false, fixedBed: false, bunk: 'none' },
    equipment: [
      'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)',
      'Torsiyonlu Dingil ve Ön Kaplin 750 kg (AL-KO, KNOTT, SCHLEGL, JARUP)',
      'Dışa Açılır Pistonlu Yan Camlar',
      'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra',
      'Katlanabilir Çift Kişilik Yatağa Dönüşen Masa',
      'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma',
      '55 Litre Poliüretan Temiz Su Deposu',
      '13" Jant, Lastik',
      'Karavan Destek Ayağı 4 Adet',
      '1 Adet 12 Volt Su Pompası (Hidrofor)',
      'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk',
      'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı',
      'Bas Çek - Tut Çek Mobilya Kilitleri',
      'Fiber Ön Tüplük Depo',
      'Özel Karavan Kapı Kilit Sistemi',
      'Dış Aydınlatma',
      'Anahtar, Priz, Araç Bağlantı Soketi',
      '220 Volt Priz 2 Adet',
    ],
  },
  {
    slug: 'ares-330',
    name: 'Ares 330',
    series: 'Ares',
    price: 450000,
    ext: 8,
    int: 14,
    hero: 2,
    heroInt: 3,
    trademark: 'ares-marka-tescil',
    tagline: {
      tr: 'Güneş enerjisi, buzdolabı ve frenli şasi standart. Şebekeden bağımsız kamp için hazır.',
      en: 'Solar power, fridge and braked chassis as standard. Ready for off-grid camping.',
      de: 'Solaranlage, Kühlschrank und gebremstes Fahrgestell serienmäßig. Bereit für autarkes Camping.',
      ru: 'Солнечная панель, холодильник и шасси с тормозами — в стандарте. Готов к автономному кемпингу.',
    },
    specs: { axle: '750 kg', brakes: true, water: 55, wheel: '13"', fridge: 90, solar: true, batteries: 1, heater: false, awning: false, fixedBed: false, bunk: 'folding' },
    equipment: [
      'Güneş Paneli 2x205 Mono Kristal Panel, 100 Amper Jel Akü, MPPT',
      'Portatif WC',
      '90 Litre Buz Dolabı',
      'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)',
      'Torsiyonlu Frenli Dingil ve Ön Kaplin 750 kg (AL-KO, KNOTT, SCHLEGL, JARUP)',
      'Dışa Açılır Pistonlu Ön, Arka, Yan Cam ve Tavan Heki',
      'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra',
      'Katlanabilir Çift Kişilik Yatağa Dönüşen Masa',
      'Oturma Gruplu Katlanabilir Ranza ve Yatak',
      'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma',
      '55 Litre Poliüretan Temiz Su Deposu',
      '13" Jant, Lastik',
      'Karavan Destek Ayağı 4 Adet',
      '1 Adet 12 Volt Su Pompası (Hidrofor)',
      'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk',
      'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı',
      'Bas Çek - Tut Çek Mobilya Kilitleri',
      'Fiber Ön Tüplük Depo',
      'Özel Karavan Kapı Kilit Sistemi',
    ],
  },
  {
    slug: 'hera-380',
    name: 'Hera 380',
    series: 'Hera',
    price: 500000,
    ext: 12,
    int: 16,
    hero: 6,
    heroInt: 2,
    trademark: 'hera-marka-tescil',
    tagline: {
      tr: 'Mutfak camıyla ferah bir iç mekân, 1000 kg\'a kadar dingil seçeneği. Aileler için dengeli seçim.',
      en: 'A bright interior with a kitchen window and up to 1000 kg axle. The balanced choice for families.',
      de: 'Heller Innenraum mit Küchenfenster und Achse bis 1000 kg. Die ausgewogene Wahl für Familien.',
      ru: 'Светлый салон с кухонным окном и осью до 1000 кг. Сбалансированный выбор для семьи.',
    },
    specs: { axle: '750–1000 kg', brakes: true, water: 55, wheel: '13"', fridge: 90, solar: true, batteries: 1, heater: false, awning: false, fixedBed: false, bunk: 'folding' },
    equipment: [
      'Güneş Paneli 2x205 Mono Kristal Panel, 100 Amper Jel Akü, MPPT',
      'Portatif WC',
      '90 Litre Buz Dolabı',
      'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)',
      'Torsiyonlu Frenli Dingil ve Ön Kaplin 750–1000 kg (AL-KO, KNOTT, SCHLEGL, JARUP)',
      'Dışa Açılır Pistonlu Ön, Arka, Yan, Mutfak Camı ve Tavan Heki',
      'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra',
      'Katlanabilir Çift Kişilik Yatağa Dönüşen Masa',
      'Oturma Gruplu Katlanabilir Ranza ve Yatak',
      'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma',
      '55 Litre Poliüretan Temiz Su Deposu',
      '13" Jant, Lastik',
      'Karavan Destek Ayağı 4 Adet',
      '1 Adet 12 Volt Su Pompası (Hidrofor)',
      'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk',
      'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı',
      'Bas Çek - Tut Çek Mobilya Kilitleri',
      'Fiber Ön Tüplük Depo',
      'Özel Karavan Kapı Kilit Sistemi',
    ],
  },
  {
    slug: 'prime-400',
    name: 'Prime 400',
    series: 'Prime',
    price: 650000,
    ext: 12,
    int: 16,
    hero: 1,
    heroInt: 2,
    tagline: {
      tr: 'Dizel ısıtıcı, kasetli tente ve çift katlı pleksi camlarla dört mevsim konfor. Prime serisinin kapısı.',
      en: 'Four-season comfort with diesel heater, cassette awning and double-glazed acrylic windows.',
      de: 'Ganzjahreskomfort mit Dieselheizung, Kassettenmarkise und doppelverglasten Acrylfenstern.',
      ru: 'Комфорт в любой сезон: дизельный отопитель, кассетная маркиза и двойные акриловые окна.',
    },
    specs: { axle: '750–1000 kg', brakes: true, water: 70, wheel: '13"', fridge: 90, solar: true, batteries: 2, heater: true, awning: true, fixedBed: false, bunk: 'folding' },
    equipment: [
      'Güneş Paneli 2x205 Mono Kristal Panel, 2x100 Amper Jel Akü, MPPT',
      'Portatif WC ve Dış Duş',
      '90 Litre Buz Dolabı',
      'Dizel Ortam Isıtıcısı',
      'Kasetli Tente',
      'Sineklik ve Karartmalı Perdeler',
      'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)',
      'Torsiyonlu Frenli Dingil ve Ön Kaplin 750–1000 kg (AL-KO, KNOTT, SCHLEGL, JARUP)',
      'Dışa Açılır Pistonlu Pleksi Çift Katlı Ön, Yan, Mutfak Camı ve Tavan Heki',
      'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra',
      'Katlanabilir Çift Kişilik Yatağa Dönüşen Masa',
      'Oturma Gruplu Katlanabilir Ranza ve Yatak',
      'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma',
      '70 Litre Poliüretan Temiz Su Deposu',
      '13" Jant, Lastik',
      'Karavan Destek Ayağı 4 Adet',
      '1 Adet 12 Volt Su Pompası (Hidrofor)',
      'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk',
      'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı',
    ],
  },
  {
    slug: 'prime-460',
    name: 'Prime 460',
    series: 'Prime',
    price: 750000,
    ext: 5,
    int: 8,
    hero: 3,
    heroInt: 1,
    tagline: {
      tr: 'Sabit çift kişilik yatak, 100 litre su deposu ve 14" jantlar. Uzun yolların rahat evi.',
      en: 'Fixed double bed, 100-litre water tank and 14" wheels. A comfortable home for long journeys.',
      de: 'Festes Doppelbett, 100-Liter-Wassertank und 14"-Räder. Ein bequemes Zuhause für lange Reisen.',
      ru: 'Стационарная двуспальная кровать, бак 100 л и 14" колёса. Уютный дом для дальних поездок.',
    },
    specs: { axle: '1000–1500 kg', brakes: true, water: 100, wheel: '14"', fridge: 90, solar: true, batteries: 2, heater: true, awning: true, fixedBed: true, bunk: 'folding' },
    equipment: [
      'Güneş Paneli 2x205 Mono Kristal Panel, 2x100 Amper Jel Akü, MPPT',
      'Portatif WC ve Dış Duş',
      '90 Litre Buz Dolabı',
      'Dizel Ortam Isıtıcısı',
      'Kasetli Tente',
      'Sineklik ve Karartmalı Perdeler',
      'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)',
      'Torsiyonlu Frenli Dingil ve Ön Kaplin 1000–1500 kg (AL-KO, KNOTT, SCHLEGL, JARUP)',
      'Dışa Açılır Pistonlu Pleksi Çift Katlı Ön, Yan, Mutfak Camı ve Tavan Heki',
      'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra',
      'Çift Kişilik Sabit Yatak',
      'Oturma Gruplu Katlanabilir Ranza ve Yatak',
      'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma',
      '100 Litre Poliüretan Temiz Su Deposu',
      '14" Jant, Lastik',
      'Karavan Destek Ayağı 4 Adet',
      '1 Adet 12 Volt Su Pompası (Hidrofor)',
      'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk',
      'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı',
    ],
  },
  {
    slug: 'prime-540',
    name: 'Prime 540',
    series: 'Prime',
    price: 850000,
    ext: 12,
    int: 16,
    hero: 3,
    heroInt: 1,
    tagline: {
      tr: 'Serinin amiral gemisi: 138 litre buzdolabı, sabit yatak ve 2 katlı ranza ile kalabalık aileler için.',
      en: 'The flagship: 138-litre fridge, fixed bed and bunk beds — built for larger families.',
      de: 'Das Flaggschiff: 138-Liter-Kühlschrank, festes Bett und Etagenbett — für größere Familien.',
      ru: 'Флагман серии: холодильник 138 л, стационарная кровать и двухъярусная кровать для большой семьи.',
    },
    specs: { axle: '1000–1500 kg', brakes: true, water: 100, wheel: '14"', fridge: 138, solar: true, batteries: 2, heater: true, awning: true, fixedBed: true, bunk: 'double' },
    equipment: [
      'Güneş Paneli 2x205 Mono Kristal Panel, 2x100 Amper Jel Akü, MPPT',
      'Portatif WC ve Dış Duş',
      'Buz Dolabı 138 Litre (12 Volt)',
      'Dizel Ortam Isıtıcısı',
      'Kasetli Tente',
      'Sineklik ve Karartmalı Perdeler',
      'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)',
      'Torsiyonlu Frenli Dingil ve Ön Kaplin 1000–1500 kg (AL-KO, KNOTT, SCHLEGL, JARUP)',
      'Dışa Açılır Pistonlu Pleksi Çift Katlı Ön, Yan, Mutfak Camı ve Tavan Heki',
      'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra',
      'Çift Kişilik Sabit Yatak',
      'Oturma Gruplu Katlanabilir Yatak ve 2 Katlı Ranza',
      'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma',
      '100 Litre Poliüretan Temiz Su Deposu',
      '14" Jant, Lastik',
      'Karavan Destek Ayağı 4 Adet',
      '1 Adet 12 Volt Su Pompası (Hidrofor)',
      'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk',
      'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı',
    ],
  },
];

const pad = (n: number) => String(n).padStart(2, '0');
export const img = (slug: string, kind: 'ext' | 'int', n: number, small = false) =>
  `/images/products/${slug}/${kind}-${pad(n)}${small ? '-sm' : ''}.webp`;

export const gallery = (p: Product, kind: 'ext' | 'int') =>
  Array.from({ length: p[kind] }, (_, i) => ({ full: img(p.slug, kind, i + 1), thumb: img(p.slug, kind, i + 1, true) }));

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
