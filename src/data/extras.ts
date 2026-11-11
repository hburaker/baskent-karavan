import type { Localized } from './products';

// EKSTRA DONANIMLAR
// ⚠️ Fiyatlar piyasa ortalamasına göre TAHMİNİ olarak girildi (KDV dahil, TL).
// Firmanın gerçek fiyat listesi gelince sadece `price` alanlarını güncelleyin.
// `standardOn`: bu donanımın STANDART geldiği modeller (orijinal sitedeki "Standart Donanımlar" listesine göre).
// Standart olan modelde ekstra "Standart" etiketiyle gösterilir ve fiyata eklenmez.

export type ExtraGroup = 'energy' | 'comfort' | 'chassis' | 'outdoor';

export interface Extra {
  id: string;
  group: ExtraGroup;
  icon: string;
  price: number;
  standardOn: string[];
  name: Localized;
  desc: Localized;
}

const NOT_PIXEL = ['ares-330', 'hera-380', 'prime-400', 'prime-460', 'prime-540'];
const PRIME = ['prime-400', 'prime-460', 'prime-540'];

export const extras: Extra[] = [
  // ——— ENERJİ ———
  {
    id: 'solar',
    group: 'energy',
    icon: 'sun',
    price: 34000,
    standardOn: NOT_PIXEL,
    name: { tr: 'Güneş Enerji Paketi', en: 'Solar Power Pack', de: 'Solarpaket', ru: 'Солнечный пакет' },
    desc: {
      tr: '2×205 W mono kristal panel, 100 Ah jel akü ve MPPT şarj kontrol cihazı',
      en: '2×205 W monocrystalline panels, 100 Ah gel battery and MPPT charge controller',
      de: '2×205 W Monokristallin-Module, 100 Ah Gel-Batterie und MPPT-Laderegler',
      ru: '2×205 Вт монокристаллические панели, гелевый АКБ 100 А·ч и MPPT-контроллер',
    },
  },
  {
    id: 'gel-battery',
    group: 'energy',
    icon: 'battery',
    price: 9500,
    standardOn: [],
    name: { tr: 'İlave 100 Ah Jel Akü', en: 'Extra 100 Ah Gel Battery', de: 'Zusätzliche 100 Ah Gel-Batterie', ru: 'Доп. гелевый АКБ 100 А·ч' },
    desc: {
      tr: 'Daha uzun şebekeden bağımsız kullanım için ek enerji depolama',
      en: 'More storage for longer off-grid stays',
      de: 'Mehr Speicher für längere autarke Aufenthalte',
      ru: 'Больше энергии для длительной автономной стоянки',
    },
  },
  {
    id: 'inverter',
    group: 'energy',
    icon: 'plug',
    price: 12500,
    standardOn: [],
    name: { tr: '1500 W Tam Sinüs İnverter', en: '1500 W Pure Sine Inverter', de: '1500 W Sinus-Wechselrichter', ru: 'Инвертор 1500 Вт (чистый синус)' },
    desc: {
      tr: 'Aküden 220 V elde edin; laptop, kahve makinesi gibi cihazlar için',
      en: 'Get 220 V from the battery for laptops, coffee makers and more',
      de: '220 V aus der Batterie für Laptop, Kaffeemaschine & Co.',
      ru: '220 В от аккумулятора для ноутбука, кофемашины и др.',
    },
  },

  // ——— KONFOR ———
  {
    id: 'fridge',
    group: 'comfort',
    icon: 'fridge',
    price: 21000,
    standardOn: NOT_PIXEL,
    name: { tr: 'Buzdolabı 90 L (12 V)', en: 'Fridge 90 L (12 V)', de: 'Kühlschrank 90 L (12 V)', ru: 'Холодильник 90 л (12 В)' },
    desc: {
      tr: 'Kompresörlü, düşük tüketimli karavan tipi buzdolabı',
      en: 'Low-consumption compressor caravan fridge',
      de: 'Sparsamer Kompressor-Kühlschrank für Wohnwagen',
      ru: 'Компрессорный экономичный холодильник для каравана',
    },
  },
  {
    id: 'heater',
    group: 'comfort',
    icon: 'flame',
    price: 17500,
    standardOn: PRIME,
    name: { tr: 'Dizel Ortam Isıtıcısı', en: 'Diesel Air Heater', de: 'Diesel-Standheizung', ru: 'Дизельный отопитель' },
    desc: {
      tr: 'Kış kampı için sessiz ve ekonomik sıcak hava ısıtıcı',
      en: 'Quiet, economical warm-air heating for winter camping',
      de: 'Leise, sparsame Warmluftheizung fürs Wintercamping',
      ru: 'Тихий и экономичный воздушный отопитель для зимы',
    },
  },
  {
    id: 'ac',
    group: 'comfort',
    icon: 'snow',
    price: 52000,
    standardOn: [],
    name: { tr: 'Çatı Tipi Klima', en: 'Roof Air Conditioner', de: 'Dach-Klimaanlage', ru: 'Крышный кондиционер' },
    desc: {
      tr: 'Yaz sıcağında serin bir iç mekân (220 V bağlantı ile)',
      en: 'A cool interior in summer heat (with 220 V hook-up)',
      de: 'Kühler Innenraum bei Sommerhitze (mit 220 V Anschluss)',
      ru: 'Прохлада в салоне летом (при подключении 220 В)',
    },
  },
  {
    id: 'wc',
    group: 'comfort',
    icon: 'wc',
    price: 4500,
    standardOn: NOT_PIXEL,
    name: { tr: 'Portatif WC', en: 'Portable Toilet', de: 'Mobile Toilette', ru: 'Портативный туалет' },
    desc: {
      tr: 'Kokusuz, kolay boşaltılan kimyasal tuvalet',
      en: 'Odour-free chemical toilet, easy to empty',
      de: 'Geruchsfreie Chemietoilette, leicht zu entleeren',
      ru: 'Химический туалет без запаха, легко опорожняется',
    },
  },
  {
    id: 'blinds',
    group: 'comfort',
    icon: 'blinds',
    price: 11000,
    standardOn: PRIME,
    name: { tr: 'Sineklik ve Karartmalı Perde', en: 'Fly Screens & Blackout Blinds', de: 'Fliegengitter & Verdunkelung', ru: 'Москитные сетки и шторы блэкаут' },
    desc: {
      tr: 'Tüm camlar için kasetli sineklik ve karartma perdesi',
      en: 'Cassette fly screens and blackout blinds for all windows',
      de: 'Kassetten-Fliegengitter und Verdunkelung für alle Fenster',
      ru: 'Кассетные сетки и затемнение для всех окон',
    },
  },
  {
    id: 'roof-hatch',
    group: 'comfort',
    icon: 'hatch',
    price: 6500,
    standardOn: NOT_PIXEL,
    name: { tr: 'Tavan Heki', en: 'Roof Skylight', de: 'Dachhaube', ru: 'Люк в крыше' },
    desc: {
      tr: 'Gün ışığı ve doğal havalandırma için açılır tavan penceresi',
      en: 'Opening roof window for daylight and fresh air',
      de: 'Ausstellbares Dachfenster für Licht und Frischluft',
      ru: 'Открывающийся люк для света и вентиляции',
    },
  },
  {
    id: 'tv',
    group: 'comfort',
    icon: 'tv',
    price: 9500,
    standardOn: [],
    name: { tr: '24" LED TV + Anten', en: '24" LED TV + Antenna', de: '24" LED-TV + Antenne', ru: 'LED-ТВ 24" + антенна' },
    desc: {
      tr: '12 V uyumlu televizyon, duvar aparatı ve anten',
      en: '12 V-compatible TV with wall bracket and antenna',
      de: '12-V-Fernseher mit Wandhalterung und Antenne',
      ru: 'Телевизор 12 В с кронштейном и антенной',
    },
  },

  // ——— ŞASİ & GÜVENLİK ———
  {
    id: 'braked-chassis',
    group: 'chassis',
    icon: 'brake',
    price: 24000,
    standardOn: NOT_PIXEL,
    name: { tr: 'Frenli Şasi', en: 'Braked Chassis', de: 'Gebremstes Fahrgestell', ru: 'Шасси с тормозами' },
    desc: {
      tr: 'Ataletli fren sistemli torsiyonlu dingil (AL-KO / KNOTT)',
      en: 'Torsion axle with overrun brake system (AL-KO / KNOTT)',
      de: 'Gummifederachse mit Auflaufbremse (AL-KO / KNOTT)',
      ru: 'Торсионная ось с инерционным тормозом (AL-KO / KNOTT)',
    },
  },
  {
    id: 'spare-wheel',
    group: 'chassis',
    icon: 'wheel',
    price: 4000,
    standardOn: [],
    name: { tr: 'Stepne (Yedek Jant + Lastik)', en: 'Spare Wheel', de: 'Reserverad', ru: 'Запасное колесо' },
    desc: {
      tr: 'Taşıma aparatıyla birlikte yedek jant ve lastik',
      en: 'Spare rim and tyre with carrier',
      de: 'Ersatzfelge und Reifen mit Halterung',
      ru: 'Запасной диск и шина с креплением',
    },
  },
  {
    id: 'camera',
    group: 'chassis',
    icon: 'camera',
    price: 5500,
    standardOn: [],
    name: { tr: 'Geri Görüş Kamerası', en: 'Rear-view Camera', de: 'Rückfahrkamera', ru: 'Камера заднего вида' },
    desc: {
      tr: 'Kablosuz monitörlü kamera ile güvenli manevra',
      en: 'Wireless camera and monitor for safe manoeuvring',
      de: 'Funkkamera mit Monitor für sicheres Rangieren',
      ru: 'Беспроводная камера с монитором для безопасных манёвров',
    },
  },
  {
    id: 'mover',
    group: 'chassis',
    icon: 'mover',
    price: 65000,
    standardOn: [],
    name: { tr: 'Karavan Mover', en: 'Caravan Mover', de: 'Rangierhilfe (Mover)', ru: 'Мувер для каравана' },
    desc: {
      tr: 'Uzaktan kumandayla aracı bağlamadan park ve manevra',
      en: 'Park and manoeuvre by remote control, no car needed',
      de: 'Per Fernbedienung rangieren und parken, ohne Zugfahrzeug',
      ru: 'Парковка и манёвры с пульта без автомобиля',
    },
  },

  // ——— DIŞ YAŞAM ———
  {
    id: 'awning',
    group: 'outdoor',
    icon: 'awning',
    price: 24000,
    standardOn: PRIME,
    name: { tr: 'Kasetli Tente', en: 'Cassette Awning', de: 'Kassettenmarkise', ru: 'Кассетная маркиза' },
    desc: {
      tr: 'Gölge ve yağmurdan korunan geniş bir dış yaşam alanı',
      en: 'A shaded outdoor living space, protected from rain',
      de: 'Schattiger Außenbereich, geschützt vor Regen',
      ru: 'Тень и защита от дождя для зоны отдыха',
    },
  },
  {
    id: 'outdoor-shower',
    group: 'outdoor',
    icon: 'shower',
    price: 3500,
    standardOn: PRIME,
    name: { tr: 'Dış Duş', en: 'Outdoor Shower', de: 'Außendusche', ru: 'Наружный душ' },
    desc: {
      tr: 'Plaj ve doğa dönüşü için pratik dış duş çıkışı',
      en: 'Handy outdoor shower after the beach or a hike',
      de: 'Praktische Außendusche nach Strand oder Wanderung',
      ru: 'Удобный душ снаружи после пляжа или похода',
    },
  },
  {
    id: 'bike-rack',
    group: 'outdoor',
    icon: 'bike',
    price: 6500,
    standardOn: [],
    name: { tr: 'Bisiklet Taşıyıcı', en: 'Bike Rack', de: 'Fahrradträger', ru: 'Велобагажник' },
    desc: {
      tr: '2 bisiklet kapasiteli ön (çeki demiri) taşıyıcı',
      en: 'Drawbar-mounted carrier for 2 bikes',
      de: 'Deichselträger für 2 Fahrräder',
      ru: 'Крепление на дышло для 2 велосипедов',
    },
  },
];

export const isStandard = (extra: Extra, slug: string) => extra.standardOn.includes(slug);
