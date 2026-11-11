// Firma bilgileri için TEK doğru kaynak. Telefon/adres değişirse sadece burayı güncelleyin.
export const site = {
  name: 'Başkent Karavan',
  legalName: 'Başkent Karavan Römork A.Ş.',
  url: 'https://www.baskentkaravan.com',
  slogan: 'Seyahatte Eskimeyen Moda',

  // WhatsApp yönlendirmesinin gittiği numara (sonu 5530)
  whatsapp: '905427425530',
  phones: [
    { label: 'ankara', display: '0542 742 55 30', tel: '+905427425530', whatsapp: true },
    { label: 'ankara', display: '0542 742 55 36', tel: '+905427425536', whatsapp: false },
    { label: 'center', display: '0312 802 06 05', tel: '+903128020605', whatsapp: false },
  ],
  email: 'baskentkaravan@gmail.com',

  address: {
    street: 'Saray Mahallesi, 642. Cadde No:20',
    district: 'Kahramankazan',
    city: 'Ankara',
    postalCode: '06980',
    country: 'TR',
    full: 'Saray Mahallesi, 642. Cadde No:20, 06980 Kahramankazan / Ankara',
  },
  lat: 40.0619271,
  lng: 32.6280862,
  placeId: 'ChIJ28osB5xJ0xQRG97oHc86UXM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ba%C5%9Fkent%20Karavan%20Kahramankazan&query_place_id=ChIJ28osB5xJ0xQRG97oHc86UXM',
  mapsEmbed:
    'https://maps.google.com/maps?q=Ba%C5%9Fkent%20Karavan%2C%20Saray%2C%20642%20Cadde%20No%3A20%2C%20Kahramankazan%2FAnkara&t=m&z=14&output=embed&iwloc=near',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Ba%C5%9Fkent%20Karavan&destination_place_id=ChIJ28osB5xJ0xQRG97oHc86UXM',

  // Google işletme puanı (Kasım 2026 itibarıyla 4.8 / 510 yorum). Güncellemek için burayı değiştirin.
  googleRating: 4.8,
  googleReviewsLabel: '500+',

  // Çalışma saatleri (gün numarası: 1 = Pazartesi)
  hours: [
    { days: 'weekdays', open: '08:30', close: '18:00' },
    { days: 'saturday', open: '09:00', close: '16:00' },
    { days: 'sunday', open: null, close: null },
  ],

  social: {
    facebook: 'https://www.facebook.com/BaskentKaravann/',
    youtube: 'https://www.youtube.com/channel/UCFMmUZKy-xok3Io2s_iip6Q',
  },

  // Arama motoru doğrulama kodları (Search Console / Yandex Webmaster "HTML etiketi" yöntemi). Boşsa etiket basılmaz.
  googleSiteVerification: '' as string,
  yandexVerification: '' as string,
  // Eski sitede Yandex Metrica (sayaç 64686859) vardı. Ziyaret istatistiklerine devam etmek için
  // aşağıya 64686859 yazın. Not: analitik açılınca KVKK gereği çerez bildirimi de gösterilmeli.
  yandexMetricaId: null as number | null,

  videos: {
    allModels: '-w--OBbdVK4',
    event: 'g_QcFmIDf-Y',
  },
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
