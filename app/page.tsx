import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  BarChart3,
  ExternalLink,
  ShieldCheck,
  Users,
  TrendingDown,
  ChevronRight,
  AlertTriangle,
  Star,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EventCard } from '@/components/event-card'
import { HeroDisclaimer } from '@/components/disclaimer-banner'
import { upcomingEvents, partners } from '@/lib/data'

const featuredEvents = upcomingEvents.filter((e) => e.featured).slice(0, 4)

const howItWorksSteps = [
  {
    icon: Search,
    title: 'Keresse meg az eseményt',
    description:
      'B\u00F6ng\u00E9sszen sportesem\u00E9nyek k\u00F6z\u00F6tt Magyarorsz\u00E1gon \u00E9s Eur\u00F3p\u00E1ban. Sz\u0171rje kateg\u00F3ria, d\u00E1tum vagy helysz\u00EDn szerint.',
  },
  {
    icon: BarChart3,
    title: 'Hasonlítsa össze az árakat',
    description:
      'Egy helyen l\u00E1tja az \u00F6sszes partner aktu\u00E1lis jegy\u00E1rait. Nincs t\u00F6bb oldalak k\u00F6z\u00F6tti ugr\u00E1l\u00E1s \u2013 az \u00F6sszehasonl\u00EDt\u00E1s n\u00E1lunk van.',
  },
  {
    icon: ExternalLink,
    title: 'Vásároljon a partnernél',
    description:
      'Miut\u00E1n megtal\u00E1lta a legjobb \u00E1rat, k\u00F6zvetlen\u00FCl a partner weboldal\u00E1n v\u00E1s\u00E1rolhatja meg a jegyet. Mi nem \u00E9rt\u00E9kes\u00FCt\u00FCnk.',
  },
]

const stats = [
  { value: '17+', label: 'Aktív esemény' },
  { value: '6', label: 'Megbízható partner' },
  { value: '100%', label: 'Ingyenes összehasonlítás' },
  { value: '0', label: 'Fizetési adat gyűjtve' },
]

const faqItems = [
  {
    q: 'Értékesítenek Önök jegyeket?',
    a: 'Nem. A budapestmatchtickets.com kizárólag árösszehasonlítási platform. Jegyeket kizárólag a partnereink értékesítenek.',
  },
  {
    q: 'Megbízhatók a megjelenített árak?',
    a: 'Az árak tájékoztató jellegűek és a partnerektől kapott adatokon alapulnak. Az aktuális ár mindig a partner weboldalán ellenőrizhető.',
  },
  {
    q: 'Biztonságos az oldaluk?',
    a: 'A mi oldalunkon semmilyen fizetési adatot nem kérünk be. A vásárlás és minden tranzakció kizárólag a partner weboldalán zajlik.',
  },
  {
    q: 'Mennyibe kerül a használat?',
    a: 'Az árösszehasonlítás teljesen ingyenes. Semmilyen regisztráció vagy fizetés nem szükséges az árak megtekintéséhez.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-[80vh] flex-col overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Budapest Puskás Aréna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Disclaimer – 20% of hero height, larger font */}
        <div className="relative z-10 w-full" style={{ minHeight: '20%' }}>
          <HeroDisclaimer />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
            Magyarország &amp; Európa
          </span>
          <h1 className="font-heading text-5xl font-bold leading-tight text-balance text-foreground md:text-7xl">
            Találd meg a legjobb<br />
            <span className="text-primary">jegyárat</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Összehasonlítjuk a sportesemény jegyárakat Magyarországon és Európában, 
            hogy te döntsd el – hol vásárolsz. Jegyeket mi nem adunk el.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="font-heading font-semibold uppercase tracking-wide">
              <Link href="/katalogus">
                Események böngészése
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-heading font-semibold uppercase tracking-wide">
              <Link href="#hogyan-mukodik">Hogyan működik?</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/30 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="hogyan-mukodik" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Hogyan működik
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground md:text-5xl">
              Egyszerű, átlátható, ingyenes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Nincs regisztráció, nincs rejtett díj. Csak hasonlítsd össze az árakat és vásárolj a legjobb helyen.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {howItWorksSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-lg border border-border bg-card p-8 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <div className="mb-5 mt-2 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          {/* Section disclaimer – Google Ads compliant */}
          <div className="mb-10 flex items-start gap-4 rounded-lg border-2 border-primary/60 bg-primary/10 p-5 md:p-7">
            <AlertTriangle className="mt-0.5 h-7 w-7 shrink-0 text-primary md:h-8 md:w-8" />
            <div>
              <p className="font-heading text-base font-extrabold uppercase tracking-widest text-primary md:text-xl">
                Másodlagos piac – Fontos tájékoztatás
              </p>
              <p className="mt-2 text-base leading-relaxed text-foreground md:text-lg">
                <strong>Ez az oldal másodlagos piac (secondary market) árösszehasonlító platform – nem értékesít jegyeket.</strong>{' '}
                Az itt látható jegyek viszonteladóktól származnak, és áraik meghaladhatják az eredeti névértéket (face value).
                A vásárlás kizárólag a partner weboldalán lehetséges.
              </p>
            </div>
          </div>

          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                Kiemelt események
              </span>
              <h2 className="font-heading mt-2 text-4xl font-bold text-foreground">
                Közelgő mérkőzések
              </h2>
            </div>
            <Button asChild variant="outline" className="hidden font-heading font-semibold uppercase tracking-wide sm:flex">
              <Link href="/katalogus">
                Mind megtekintése
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline" className="font-heading font-semibold uppercase tracking-wide">
              <Link href="/katalogus">Mind megtekintése</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* UNIQUE INFO SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Miért minket válasszon?
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground md:text-5xl">
              Az összehasonlítás ereje
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8">
              <TrendingDown className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">Jobb ár, kevesebb kutatás</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Azonnal látja az összes partner árait egyetlen oldalon. Átlagosan 15–40%-kal olcsóbban is megvásárolhat egy jegyet, ha összehasonlítja az árakat, ahelyett hogy csak az első oldalra kattintana.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <ShieldCheck className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">Átlátható &amp; biztonságos</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Mi semmilyen személyes vagy fizetési adatot nem kérünk be. Oldalunk kizárólag árinformációkat jelenít meg – Ön dönt, hol és hogyan vásárol.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <Globe className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-heading text-xl font-bold text-foreground">Magyarország &amp; Európa</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Nem csak a magyar piacon figyelünk – európai sportesemények jegyárait is összehasonlítjuk, segítve az utazó szurkolókat is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US PREVIEW */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                Rólunk
              </span>
              <h2 className="font-heading mt-3 text-4xl font-bold text-foreground md:text-5xl">
                Ki vagyunk mi?
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                A budapestmatchtickets.com az FISCUS NOSTRUM FUND SERVICES LIMITED által üzemeltetett független árösszehasonlító platform, amelyet sportrajongók hoztak létre sportrajongóknak.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Célunk egyszerű: segítünk Önnek megtalálni a legjobb árat a kedvenc sportesemény jegyéhez – anélkül, hogy Önnek különböző oldalakat kellene böngésznie. Mi nem adunk el jegyeket, nem gyűjtünk fizetési adatokat.
              </p>
              <Button asChild className="mt-6 font-heading font-semibold uppercase tracking-wide">
                <Link href="/rolunk">
                  Tudjon meg többet
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <Users className="mb-3 h-8 w-8 text-primary" />
                <p className="font-heading text-2xl font-bold text-foreground">10,000+</p>
                <p className="mt-1 text-sm text-muted-foreground">Havi látogató</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <Star className="mb-3 h-8 w-8 text-primary" />
                <p className="font-heading text-2xl font-bold text-foreground">4.8/5</p>
                <p className="mt-1 text-sm text-muted-foreground">Felhasználói értékelés</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 col-span-2">
                <ShieldCheck className="mb-3 h-8 w-8 text-primary" />
                <p className="font-heading text-xl font-bold text-foreground">Ciprus bejegyzett vállalkozás</p>
                <p className="mt-1 text-sm text-muted-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED<br />Myrianthous Anna, Panagioti Kaspi 5Α., Nicosia 1095, Cyprus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Partnereink
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground">
              Megbízható jegyértékesítők
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Csak ellenőrzött és megbízható partnerektől jelenítünk meg árakat. A vásárlás az ő oldalukon történik.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center rounded-lg border border-border bg-card p-5 text-center transition-colors hover:border-primary/40"
              >
                <p className="font-heading text-base font-bold text-foreground">{partner.name}</p>
                <p className="mt-2 text-xs text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Gyakori kérdések
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground">GYIK</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="font-heading font-bold text-foreground">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
            <div className="text-center pt-4">
              <Button asChild variant="outline" className="font-heading font-semibold uppercase tracking-wide">
                <Link href="/gyik">Összes kérdés megtekintése</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
