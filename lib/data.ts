export interface Event {
  id: string
  slug: string
  title: string
  category: string
  venue: string
  city: string
  date: string
  time: string
  imageUrl: string
  priceFrom: number
  priceTo: number
  currency: string
  featured?: boolean
  partners: Partner[]
  description: string
  teams?: string
}

export interface Partner {
  name: string
  logo: string
  priceFrom: number
  priceTo: number
  url: string
  badge?: string
}

export const events: Event[] = [
  {
    id: '1',
    slug: 'ferencvaros-vs-ujpest',
    title: 'Ferencváros – Újpest FC',
    category: 'Labdarúgás',
    teams: 'Ferencváros vs Újpest FC',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    date: '2026-05-10',
    time: '18:00',
    imageUrl: '/images/events/soccer-green.jpg',
    priceFrom: 3500,
    priceTo: 22000,
    currency: 'HUF',
    featured: true,
    description:
      'A Ferencváros és az Újpest FC közötti rangadó az OTP Bank Ligában. Budapest két ikonikus csapatának találkozója a Groupama Arénában.',
    partners: [
      { name: 'Ticketmaster', logo: '/images/partners/jegymester.svg', priceFrom: 3500, priceTo: 18000, url: 'https://jegymester.hu', badge: 'Legjobb ár' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 4200, priceTo: 20000, url: 'https://eventim.hu' },
      { name: 'StubHub', logo: '/images/partners/stubhub.svg', priceFrom: 5500, priceTo: 22000, url: 'https://stubhub.com' },
    ],
  },
  {
    id: '2',
    slug: 'hungaroring-formula1',
    title: 'Magyar Nagydíj – Formula 1',
    category: 'Motorsport',
    teams: '',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    date: '2026-07-19',
    time: '14:00',
    imageUrl: '/images/events/formula1.jpg',
    priceFrom: 25000,
    priceTo: 280000,
    currency: 'HUF',
    featured: true,
    description:
      'A Magyar Formula 1 Nagydíj a Hungaroringen. Az F1-es szezon egyik legizgalmasabb állomása, ahol a világ legjobb versenyzői mérik össze tudásukat.',
    partners: [
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 25000, priceTo: 260000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
      { name: 'StubHub', logo: '/images/partners/stubhub.svg', priceFrom: 28000, priceTo: 270000, url: 'https://stubhub.com' },
      { name: 'SeatGeek', logo: '/images/partners/seatgeek.svg', priceFrom: 30000, priceTo: 280000, url: 'https://seatgeek.com' },
    ],
  },
  {
    id: '3',
    slug: 'budapest-honved-vs-mtu',
    title: 'Budapest Honvéd – MTK Budapest',
    category: 'Labdarúgás',
    teams: 'Budapest Honvéd vs MTK Budapest',
    venue: 'Bozsik Aréna',
    city: 'Budapest',
    date: '2026-05-17',
    time: '20:00',
    imageUrl: '/images/events/soccer-night.jpg',
    priceFrom: 2000,
    priceTo: 12000,
    currency: 'HUF',
    featured: false,
    description:
      'Budapesti derby az OTP Bank Ligában. A Bozsik Arénában a Honvéd és az MTK csap össze ebben az izgalmas rangadóban.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 2000, priceTo: 10000, url: 'https://jegymester.hu' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 2500, priceTo: 12000, url: 'https://eventim.hu', badge: 'Legjobb ár' },
    ],
  },
  {
    id: '4',
    slug: 'euro-league-ferencvaros',
    title: 'UEFA Konferencialiga – Ferencváros',
    category: 'Labdarúgás',
    teams: 'Ferencváros vs Európai csapat',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    date: '2026-06-05',
    time: '21:00',
    imageUrl: '/images/events/euro-night.jpg',
    priceFrom: 8000,
    priceTo: 45000,
    currency: 'HUF',
    featured: true,
    description:
      'A Ferencváros európai kupameccse a Groupama Arénában. Izgalmas UEFA Konferencialiga mérkőzés a Budapest szívében.',
    partners: [
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 8000, priceTo: 42000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
      { name: 'StubHub', logo: '/images/partners/stubhub.svg', priceFrom: 10000, priceTo: 44000, url: 'https://stubhub.com' },
      { name: 'LiveFootballTickets', logo: '/images/partners/livefootballtickets.svg', priceFrom: 9000, priceTo: 45000, url: 'https://livefootballtickets.com' },
    ],
  },
  {
    id: '5',
    slug: 'handball-veszprem-pick',
    title: 'Veszprém HC – Pick Szeged',
    category: 'Kézilabda',
    teams: 'Veszprém HC vs Pick Szeged',
    venue: 'Veszprém Aréna',
    city: 'Veszprém',
    date: '2026-05-24',
    time: '19:30',
    imageUrl: '/images/events/handball.jpg',
    priceFrom: 3000,
    priceTo: 18000,
    currency: 'HUF',
    featured: false,
    description:
      'A magyar kézilabda csúcskategóriájának meccse. Veszprém és Pick Szeged rangadója a Veszprém Arénában.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 3000, priceTo: 15000, url: 'https://jegymester.hu', badge: 'Legjobb ár' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 3500, priceTo: 18000, url: 'https://eventim.hu' },
    ],
  },
  {
    id: '6',
    slug: 'waterpolo-budapest-open',
    title: 'LEN Szuperkupa – Vízilabda',
    category: 'Vízilabda',
    teams: 'Magyarország vs Szerbia',
    venue: 'Duna Aréna',
    city: 'Budapest',
    date: '2026-06-14',
    time: '17:00',
    imageUrl: '/images/events/waterpolo.jpg',
    priceFrom: 2500,
    priceTo: 14000,
    currency: 'HUF',
    featured: false,
    description:
      'A LEN Szuperkupa vízilabda mérkőzése Budapesten a Duna Arénában. Magyarország legjobb csapata Európa élvonalával méri össze erejét.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 2500, priceTo: 12000, url: 'https://jegymester.hu' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 3000, priceTo: 14000, url: 'https://eventim.hu', badge: 'Legjobb ár' },
    ],
  },
  {
    id: '7',
    slug: 'athletics-world-series-budapest',
    title: 'Gyémánt Liga – Atlétika Budapest',
    category: 'Atlétika',
    teams: '',
    venue: 'Nemzeti Atlétikai Központ',
    city: 'Budapest',
    date: '2026-07-02',
    time: '18:00',
    imageUrl: '/images/events/athletics.jpg',
    priceFrom: 5000,
    priceTo: 35000,
    currency: 'HUF',
    featured: true,
    description:
      'A Diamond League sorozat budapesti állomása a Nemzeti Atlétikai Központban. Világ legjobb atléták gyűlnek össze Budapesten.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 3500, priceTo: 18000, url: 'https://jegymester.hu' },
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 4000, priceTo: 20000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
    ],
  },
  {
    id: '8',
    slug: 'boxing-gala-budapest',
    title: 'Galán Esti Bokszgála – Budapest',
    category: 'Ökölvívás',
    teams: '',
    venue: 'Budapest Sportaréna',
    city: 'Budapest',
    date: '2026-06-20',
    time: '19:00',
    imageUrl: '/images/events/boxing.jpg',
    priceFrom: 6000,
    priceTo: 50000,
    currency: 'HUF',
    featured: false,
    description:
      'Professzionális bokszgála a Budapest Sportarénában. Magyar és nemzetközi bokszoló ászok csata estéje.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 6000, priceTo: 45000, url: 'https://jegymester.hu', badge: 'Legjobb ár' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 7000, priceTo: 50000, url: 'https://eventim.hu' },
    ],
  },
  {
    id: '9',
    slug: 'tennis-budapest-open',
    title: 'Budapest Open – Tenisz WTA',
    category: 'Tenisz',
    teams: '',
    venue: 'Romai Tenisz Akadémia',
    city: 'Budapest',
    date: '2026-07-15',
    time: '13:00',
    imageUrl: '/images/events/tennis.jpg',
    priceFrom: 4000,
    priceTo: 28000,
    currency: 'HUF',
    featured: false,
    description:
      'A Budapest Open WTA tenisztorna izgalmas mérkőzései. Európa legjobb játékosnői csapnak össze a magyar közönség előtt.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 4000, priceTo: 25000, url: 'https://jegymester.hu' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 4500, priceTo: 28000, url: 'https://eventim.hu', badge: 'Legjobb ár' },
    ],
  },
  {
    id: '10',
    slug: 'basketball-alba-berlin-fradi',
    title: 'EuroLeague – Alba Berlin vs Fradi',
    category: 'Kosárlabda',
    teams: 'Alba Berlin vs Ferencváros',
    venue: 'Mercedes-Benz Arena',
    city: 'Berlin',
    date: '2026-05-29',
    time: '20:30',
    imageUrl: '/images/events/basketball.jpg',
    priceFrom: 15000,
    priceTo: 75000,
    currency: 'HUF',
    featured: false,
    description:
      'EuroLeague kosárlabda-mérkőzés Berlinben. Magyar szurkolók figyelmébe ajánlott, hiszen a Ferencváros kosárlabda csapata játszik.',
    partners: [
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 15000, priceTo: 70000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
      { name: 'StubHub', logo: '/images/partners/stubhub.svg', priceFrom: 18000, priceTo: 75000, url: 'https://stubhub.com' },
    ],
  },
  {
    id: '11',
    slug: 'ice-hockey-alba-hungary',
    title: 'ICEHL – FEHA19 vs Acroni Jesenice',
    category: 'Jégkorong',
    teams: 'FEHA19 vs Acroni Jesenice',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    date: '2026-05-31',
    time: '17:00',
    imageUrl: '/images/events/icehockey.jpg',
    priceFrom: 2800,
    priceTo: 16000,
    currency: 'HUF',
    featured: false,
    description:
      'Az Ice Hockey League meccs Budapesten. Izgalmas jégkorong mérkőzés az osztrák-magyar-olasz bajnokságban.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 2800, priceTo: 14000, url: 'https://jegymester.hu', badge: 'Legjobb ár' },
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 3200, priceTo: 16000, url: 'https://eventim.hu' },
    ],
  },
  {
    id: '12',
    slug: 'cycling-tour-de-hongrie',
    title: 'Tour de Hongrie – Kerékpározás',
    category: 'Kerékpározás',
    teams: '',
    venue: 'Hősök tere',
    city: 'Budapest',
    date: '2026-06-08',
    time: '16:00',
    imageUrl: '/images/events/cycling.jpg',
    priceFrom: 1500,
    priceTo: 8000,
    currency: 'HUF',
    featured: false,
    description:
      'A Tour de Hongrie záróetapja Budapesten, a Hősök terén ér véget. Izgalmas befutó a magyar fővárosban.',
    partners: [
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 1500, priceTo: 7000, url: 'https://eventim.hu', badge: 'Legjobb ár' },
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 2000, priceTo: 8000, url: 'https://jegymester.hu' },
    ],
  },
  {
    id: '13',
    slug: 'swimming-world-cup-budapest',
    title: 'FINA Világkupa – Úszás Budapest',
    category: 'Úszás',
    teams: '',
    venue: 'Duna Aréna',
    city: 'Budapest',
    date: '2026-08-10',
    time: '10:00',
    imageUrl: '/images/events/swimming.jpg',
    priceFrom: 3500,
    priceTo: 20000,
    currency: 'HUF',
    featured: false,
    description:
      'A FINA Világkupa sorozat budapesti állomása a Duna Arénában. A világ legjobb úszói mérik össze tudásukat.',
    partners: [
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 3500, priceTo: 18000, url: 'https://jegymester.hu' },
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 4000, priceTo: 20000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
    ],
  },
  {
    id: '14',
    slug: 'volleyball-nations-league',
    title: 'VNL – Magyarország vs Brazília',
    category: 'Röplabda',
    teams: 'Magyarország vs Brazília',
    venue: 'Budapest Sportaréna',
    city: 'Budapest',
    date: '2026-06-25',
    time: '19:00',
    imageUrl: '/images/events/volleyball.jpg',
    priceFrom: 4000,
    priceTo: 22000,
    currency: 'HUF',
    featured: false,
    description:
      'A Volleyball Nations League mérkőzése Budapesten. Magyarország a világ egyik legjobb csapatával, Brazíliával csap össze.',
    partners: [
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 4000, priceTo: 20000, url: 'https://eventim.hu', badge: 'Legjobb ár' },
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 4500, priceTo: 22000, url: 'https://jegymester.hu' },
    ],
  },
  {
    id: '15',
    slug: 'rugby-europe-hungary-spain',
    title: 'Rugby Europe – Magyarország vs Spanyolország',
    category: 'Rögbi',
    teams: 'Magyarország vs Spanyolország',
    venue: 'Illés Gyula Stadion',
    city: 'Budapest',
    date: '2026-07-05',
    time: '15:00',
    imageUrl: '/images/events/rugby.jpg',
    priceFrom: 2000,
    priceTo: 10000,
    currency: 'HUF',
    featured: false,
    description:
      'Rugby Europe bajnokság mérkőzése Budapesten. A magyar válogatott a spanyolok ellen játszik ezen a fontos mérkőzésen.',
    partners: [
      { name: 'Eventim', logo: '/images/partners/eventim.svg', priceFrom: 2000, priceTo: 9000, url: 'https://eventim.hu', badge: 'Legjobb ár' },
      { name: 'Jegymester', logo: '/images/partners/jegymester.svg', priceFrom: 2500, priceTo: 10000, url: 'https://jegymester.hu' },
    ],
  },
  {
    id: '16',
    slug: 'darts-grand-prix-budapest',
    title: 'PDC Darts Grand Prix – Budapest',
    category: 'Darts',
    teams: '',
    venue: 'BOK Csarnok',
    city: 'Budapest',
    date: '2026-08-22',
    time: '16:00',
    imageUrl: '/images/events/darts.jpg',
    priceFrom: 8000,
    priceTo: 38000,
    currency: 'HUF',
    featured: false,
    description:
      'PDC Darts Grand Prix Budapesten, a BOK Csarnokban. A világ legjobb dartsjátékosai mutatkoznak be a magyar közönségnek.',
    partners: [
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 8000, priceTo: 35000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
      { name: 'StubHub', logo: '/images/partners/stubhub.svg', priceFrom: 9000, priceTo: 38000, url: 'https://stubhub.com' },
    ],
  },
  {
    id: '17',
    slug: 'champions-league-final-2026',
    title: 'UEFA Bajnokok Ligája – Döntő',
    category: 'Labdarúgás',
    teams: 'TBD vs TBD',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    date: '2026-05-30',
    time: '21:00',
    imageUrl: '/images/events/champions-league.jpg',
    priceFrom: 50000,
    priceTo: 500000,
    currency: 'HUF',
    featured: true,
    description:
      'Az UEFA Bajnokok Ligája döntője Budapesten, a Puskás Arénában. Európa legrangosabb klubfutball eseménye a magyar fővárosban.',
    partners: [
      { name: 'Viagogo', logo: '/images/partners/viagogo.svg', priceFrom: 50000, priceTo: 480000, url: 'https://viagogo.com', badge: 'Legjobb ár' },
      { name: 'StubHub', logo: '/images/partners/stubhub.svg', priceFrom: 55000, priceTo: 480000, url: 'https://stubhub.com' },
      { name: 'LiveFootballTickets', logo: '/images/partners/livefootballtickets.svg', priceFrom: 60000, priceTo: 500000, url: 'https://livefootballtickets.com' },
    ],
  },
]

export const partners = [
  { name: 'Jegymester', url: 'https://jegymester.hu', description: 'Magyar jegyértékesítő platform – sport, zene, színház' },
  { name: 'Eventim', url: 'https://eventim.hu', description: 'Európai vezető jegyértékesítő' },
  { name: 'Viagogo', url: 'https://viagogo.com', description: 'Globális jegyviszonteladó platform' },
  { name: 'StubHub', url: 'https://stubhub.com', description: 'Megbízható jegykereskedelem világszerte' },
  { name: 'SeatGeek', url: 'https://seatgeek.com', description: 'Átlátható árú jegykeresési platform' },
  { name: 'LiveFootballTickets', url: 'https://livefootballtickets.com', description: 'Specializált focijegy-viszonteladó' },
]

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('hu-HU').format(amount) + ' Ft'
}

export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return new Intl.DateTimeFormat('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function isUpcoming(dateStr: string): boolean {
  const [year, month, day] = dateStr.split('-').map(Number)
  const eventDate = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return eventDate >= today
}

export const upcomingEvents = events.filter((e) => isUpcoming(e.date))
