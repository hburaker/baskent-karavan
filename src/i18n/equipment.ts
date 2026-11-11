import type { Lang } from './ui';

// Standart donanım maddelerinin çevirileri. Anahtar = Türkçe orijinal metin (src/data/products.ts).
// Yeni bir madde eklenirse buraya da çevirisini ekleyin; eklenmezse Türkçesi gösterilir.
const BR = '(AL-KO, KNOTT, SCHLEGL, JARUP)';
const E: Record<string, Partial<Record<Lang, string>>> = {
  'Dış Kabuk ve Zemin CTP Sandviç Panel (Tam İzolasyon 32 Dns, Yüksek Yoğunluklu)': {
    en: 'Shell and floor in CTP sandwich panel (full insulation, 32 dns high density)',
    de: 'Außenhaut und Boden aus CTP-Sandwichpaneel (Vollisolierung, 32 dns, hohe Dichte)',
    ru: 'Корпус и пол из сэндвич-панели CTP (полная изоляция, 32 dns, высокая плотность)',
  },
  [`Torsiyonlu Dingil ve Ön Kaplin 750 kg ${BR}`]: {
    en: `Torsion axle and coupling, 750 kg ${BR}`,
    de: `Gummifederachse und Kupplung, 750 kg ${BR}`,
    ru: `Торсионная ось и сцепка, 750 кг ${BR}`,
  },
  [`Torsiyonlu Frenli Dingil ve Ön Kaplin 750 kg ${BR}`]: {
    en: `Braked torsion axle and coupling, 750 kg ${BR}`,
    de: `Gebremste Gummifederachse und Kupplung, 750 kg ${BR}`,
    ru: `Торсионная ось с тормозами и сцепка, 750 кг ${BR}`,
  },
  [`Torsiyonlu Frenli Dingil ve Ön Kaplin 750–1000 kg ${BR}`]: {
    en: `Braked torsion axle and coupling, 750–1000 kg ${BR}`,
    de: `Gebremste Gummifederachse und Kupplung, 750–1000 kg ${BR}`,
    ru: `Торсионная ось с тормозами и сцепка, 750–1000 кг ${BR}`,
  },
  [`Torsiyonlu Frenli Dingil ve Ön Kaplin 1000–1500 kg ${BR}`]: {
    en: `Braked torsion axle and coupling, 1000–1500 kg ${BR}`,
    de: `Gebremste Gummifederachse und Kupplung, 1000–1500 kg ${BR}`,
    ru: `Торсионная ось с тормозами и сцепка, 1000–1500 кг ${BR}`,
  },
  'Dışa Açılır Pistonlu Yan Camlar': {
    en: 'Outward-opening side windows with gas struts',
    de: 'Ausstellbare Seitenfenster mit Gasdruckfedern',
    ru: 'Боковые окна, открывающиеся наружу, с газовыми упорами',
  },
  'Dışa Açılır Pistonlu Ön, Arka, Yan Cam ve Tavan Heki': {
    en: 'Outward-opening front, rear and side windows with gas struts, plus roof skylight',
    de: 'Ausstellbare Front-, Heck- und Seitenfenster mit Gasdruckfedern, Dachhaube',
    ru: 'Открывающиеся наружу переднее, заднее и боковые окна с упорами, люк в крыше',
  },
  'Dışa Açılır Pistonlu Ön, Arka, Yan, Mutfak Camı ve Tavan Heki': {
    en: 'Outward-opening front, rear, side and kitchen windows with gas struts, plus roof skylight',
    de: 'Ausstellbare Front-, Heck-, Seiten- und Küchenfenster, Dachhaube',
    ru: 'Открывающиеся наружу переднее, заднее, боковые и кухонное окна, люк в крыше',
  },
  'Dışa Açılır Pistonlu Pleksi Çift Katlı Ön, Yan, Mutfak Camı ve Tavan Heki': {
    en: 'Double-glazed acrylic front, side and kitchen windows with gas struts, plus roof skylight',
    de: 'Doppelverglaste Acryl-Front-, Seiten- und Küchenfenster, Dachhaube',
    ru: 'Двойные акриловые переднее, боковые и кухонное окна с упорами, люк в крыше',
  },
  'Mobilyalar Marin Tipi Suya Dayanıklı Masif Lam, Kavak Kontra': {
    en: 'Marine-grade water-resistant furniture in solid wood and poplar plywood',
    de: 'Wasserfeste Möbel in Marinequalität aus Massivholz und Pappelsperrholz',
    ru: 'Влагостойкая мебель морского класса из массива и тополиной фанеры',
  },
  'Katlanabilir Çift Kişilik Yatağa Dönüşen Masa': {
    en: 'Folding table that converts into a double bed',
    de: 'Klapptisch, umbaubar zum Doppelbett',
    ru: 'Складной стол, трансформирующийся в двуспальную кровать',
  },
  'Oturma Gruplu Katlanabilir Ranza ve Yatak': {
    en: 'Seating area with folding bunk and bed',
    de: 'Sitzgruppe mit klappbarem Etagenbett und Bett',
    ru: 'Обеденная зона со складной верхней полкой и кроватью',
  },
  'Oturma Gruplu Katlanabilir Yatak ve 2 Katlı Ranza': {
    en: 'Seating area with folding bed and two-tier bunk beds',
    de: 'Sitzgruppe mit Klappbett und zweistöckigem Etagenbett',
    ru: 'Обеденная зона со складной кроватью и двухъярусной кроватью',
  },
  'Çift Kişilik Sabit Yatak': { en: 'Fixed double bed', de: 'Festes Doppelbett', ru: 'Стационарная двуспальная кровать' },
  'Ledli Sinyalizasyon Lambalar ve İç Led Aydınlatma': {
    en: 'LED signal lights and LED interior lighting',
    de: 'LED-Signalleuchten und LED-Innenbeleuchtung',
    ru: 'Светодиодные сигнальные фонари и LED-освещение салона',
  },
  '55 Litre Poliüretan Temiz Su Deposu': { en: '55-litre polyurethane fresh water tank', de: '55-Liter-Frischwassertank aus Polyurethan', ru: 'Бак чистой воды 55 л (полиуретан)' },
  '70 Litre Poliüretan Temiz Su Deposu': { en: '70-litre polyurethane fresh water tank', de: '70-Liter-Frischwassertank aus Polyurethan', ru: 'Бак чистой воды 70 л (полиуретан)' },
  '100 Litre Poliüretan Temiz Su Deposu': { en: '100-litre polyurethane fresh water tank', de: '100-Liter-Frischwassertank aus Polyurethan', ru: 'Бак чистой воды 100 л (полиуретан)' },
  '13" Jant, Lastik': { en: '13" rims and tyres', de: '13"-Felgen und Reifen', ru: 'Диски и шины 13"' },
  '14" Jant, Lastik': { en: '14" rims and tyres', de: '14"-Felgen und Reifen', ru: 'Диски и шины 14"' },
  'Karavan Destek Ayağı 4 Adet': { en: '4 corner steadies', de: '4 Stützen', ru: '4 опорные стойки' },
  '1 Adet 12 Volt Su Pompası (Hidrofor)': { en: '12 V water pump', de: '12-V-Wasserpumpe', ru: 'Водяной насос 12 В' },
  'Mutfak Dolabı Ankastre Ocak Çiftli Krom Evye, Musluk': {
    en: 'Kitchen unit with built-in hob, double chrome sink and tap',
    de: 'Küchenzeile mit Einbaukochfeld, Doppel-Chromspüle und Armatur',
    ru: 'Кухонный блок со встроенной плитой, двойной хромированной мойкой и смесителем',
  },
  'Duş Kabini, Banyo Lavabo, Batarya ve Havalandırma Camı': {
    en: 'Shower cabin, washbasin, mixer tap and bathroom vent window',
    de: 'Duschkabine, Waschbecken, Armatur und Lüftungsfenster',
    ru: 'Душевая кабина, раковина, смеситель и вентиляционное окно',
  },
  'Bas Çek - Tut Çek Mobilya Kilitleri': { en: 'Push-lock furniture latches', de: 'Push-Lock-Möbelverschlüsse', ru: 'Кнопочные мебельные замки' },
  'Fiber Ön Tüplük Depo': { en: 'Fibreglass front gas-bottle locker', de: 'GFK-Gaskasten vorne', ru: 'Передний газовый отсек из стеклопластика' },
  'Özel Karavan Kapı Kilit Sistemi': { en: 'Caravan-specific door lock system', de: 'Spezielles Wohnwagen-Türschloss', ru: 'Специальный дверной замок для каравана' },
  'Dış Aydınlatma': { en: 'Exterior lighting', de: 'Außenbeleuchtung', ru: 'Наружное освещение' },
  'Anahtar, Priz, Araç Bağlantı Soketi': { en: 'Switches, sockets and vehicle connection plug', de: 'Schalter, Steckdosen und Fahrzeugstecker', ru: 'Выключатели, розетки и разъём подключения к авто' },
  '220 Volt Priz 2 Adet': { en: '2 × 220 V sockets', de: '2 × 220-V-Steckdosen', ru: '2 розетки 220 В' },
  'Güneş Paneli 2x205 Mono Kristal Panel, 100 Amper Jel Akü, MPPT': {
    en: 'Solar: 2×205 W monocrystalline panels, 100 Ah gel battery, MPPT',
    de: 'Solar: 2×205 W Monokristallin, 100 Ah Gel-Batterie, MPPT',
    ru: 'Солнечная система: 2×205 Вт, гелевый АКБ 100 А·ч, MPPT',
  },
  'Güneş Paneli 2x205 Mono Kristal Panel, 2x100 Amper Jel Akü, MPPT': {
    en: 'Solar: 2×205 W monocrystalline panels, 2×100 Ah gel batteries, MPPT',
    de: 'Solar: 2×205 W Monokristallin, 2×100 Ah Gel-Batterien, MPPT',
    ru: 'Солнечная система: 2×205 Вт, 2 гелевых АКБ по 100 А·ч, MPPT',
  },
  'Portatif WC': { en: 'Portable toilet', de: 'Mobile Toilette', ru: 'Портативный туалет' },
  'Portatif WC ve Dış Duş': { en: 'Portable toilet and outdoor shower', de: 'Mobile Toilette und Außendusche', ru: 'Портативный туалет и наружный душ' },
  '90 Litre Buz Dolabı': { en: '90-litre fridge', de: '90-Liter-Kühlschrank', ru: 'Холодильник 90 л' },
  'Buz Dolabı 138 Litre (12 Volt)': { en: '138-litre fridge (12 V)', de: '138-Liter-Kühlschrank (12 V)', ru: 'Холодильник 138 л (12 В)' },
  'Dizel Ortam Isıtıcısı': { en: 'Diesel air heater', de: 'Diesel-Standheizung', ru: 'Дизельный отопитель' },
  'Kasetli Tente': { en: 'Cassette awning', de: 'Kassettenmarkise', ru: 'Кассетная маркиза' },
  'Sineklik ve Karartmalı Perdeler': { en: 'Fly screens and blackout blinds', de: 'Fliegengitter und Verdunkelungsrollos', ru: 'Москитные сетки и шторы блэкаут' },
};

export const tEquip = (item: string, lang: Lang) => (lang === 'tr' ? item : E[item]?.[lang] ?? item);
