import Link from 'next/link'
import { AlertTriangle, ChevronRight, HelpCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'

export const metadata = {
  title: 'GYIK & Szabályok – Budapest Match Tickets',
  description:
    'Gyakran ismételt kérdések és az oldal használati feltételei a budapestmatchtickets.com árösszehasonlító platformon.',
}

const faqSections = [
  {
    title: 'Az oldalról általánosan',
    items: [
      {
        q: 'Mi az a budapestmatchtickets.com?',
        a: 'A budapestmatchtickets.com egy sportesemény jegyár-összehasonlító platform. Összegyűjtjük és megjelenítjük a különböző jegyértékesítő partnerek aktuális árait, hogy Ön könnyedén megtalálja a legjobb ajánlatot. Mi magunk nem értékesítünk jegyeket.',
      },
      {
        q: 'Értékesítenek Önök jegyeket?',
        a: 'Nem. A budapestmatchtickets.com kizárólag árösszehasonlítási platform. Jegyeket mi nem adunk el – a vásárlás kizárólag a partnereink weboldalán lehetséges. Semmilyen fizetési adatot, személyes adatot nem gyűjtünk be a jegyvásárláshoz.',
      },
      {
        q: 'Ingyenes-e a szolgáltatás?',
        a: 'Igen, az árösszehasonlítás teljesen ingyenes. Semmilyen regisztráció, előfizetés vagy fizetés nem szükséges az árak megtekintéséhez és az oldalunk használatához.',
      },
      {
        q: 'Ki üzemelteti az oldalt?',
        a: 'Az oldalt a FISCUS NOSTRUM FUND SERVICES LIMITED üzemelteti, amely egy Cipruson bejegyzett vállalkozás (székhely: Myrianthous Anna, Panagioti Kaspi 5Α., Nicosia 1095, Cyprus).',
      },
    ],
  },
  {
    title: 'Árakról és partnerekről',
    items: [
      {
        q: 'Megbízhatók a megjelenített árak?',
        a: 'Az árak tájékoztató jellegűek és a partnereink weboldalairól kapott adatokon alapulnak. Az árak időszakosan változhatnak, és előfordulhat, hogy a partner weboldalán eltérő (magasabb vagy alacsonyabb) árat talál. A vásárlás előtt mindig ellenőrizze az aktuális árat közvetlenül a partnernél.',
      },
      {
        q: 'Mennyire frissek az áradatok?',
        a: 'Az árakat rendszeresen frissítjük, de nem tudunk garantálni valós idejű áradatokat. Az árak változhatnak, ezért a tényleges árat mindig a partner weboldalán kell ellenőrizni a vásárlás előtt.',
      },
      {
        q: 'Kik a partnerjeik?',
        a: 'Csak ellenőrzött és megbízható jegyértékesítő platformokkal dolgozunk együtt. Jelenleg partnerek: Ticketportal, Jegymester, Viagogo, StubHub, Eventim, UEFA Tickets. A partnerek listája bővülhet.',
      },
      {
        q: 'Kapnak-e jutalékot, ha a partner weboldalán vásárolok?',
        a: 'Igen, egyes esetekben affiliate (partneri) jutalékot kaphatunk, ha Ön az oldalunkon lévő linken keresztül jut el a partner weboldalára és ott vásárol. Ez azonban semmilyen hatással nincs a feltüntetett árakra – az árak azonosak a partner weboldalán közvetlenül elérhető árakkal.',
      },
      {
        q: 'Mi a teendő, ha az ár eltér a partnernél?',
        a: 'Ha eltérést tapasztal az oldalunkon megjelenített ár és a partner weboldalán szereplő ár között, kérjük, jelezze nekünk az info@budapestmatchtickets.com e-mail-címen. Az árak frissítésén folyamatosan dolgozunk.',
      },
    ],
  },
  {
    title: 'Adatkezelés és biztonság',
    items: [
      {
        q: 'Milyen adatokat gyűjtenek be?',
        a: 'Mi nem gyűjtünk be személyes adatokat a jegyvásárláshoz. Az oldalon való böngészéshez regisztráció nem szükséges. Analitikai célokból anonimizált látogatói adatokat gyűjthetünk (pl. megtekintett oldalak száma), amelyről bővebben az Adatvédelmi irányelvekben olvashat.',
      },
      {
        q: 'Biztonságos az oldaluk?',
        a: 'A mi oldalunkon semmilyen fizetési adatot nem kérünk be és nem tárolunk. A jegyvásárlás és minden fizetési tranzakció kizárólag a partner weboldalán zajlik, amelyek saját biztonsági megoldásaikkal védik az Ön adatait.',
      },
      {
        q: 'Használnak sütiket (cookie-kat)?',
        a: 'Igen, az oldal működéséhez és elemzéséhez sütiket használunk. A sütik használatáról bővebben a Süti irányelvek oldalon olvashat. Az oldalra való belépéssel Ön elfogadja a sütik használatát.',
      },
    ],
  },
  {
    title: 'Technikai kérdések',
    items: [
      {
        q: 'Hogyan keressek eseményt?',
        a: 'Az Esemény katalógus oldalon böngészheti az összes elérhető sportesemény listáját. Szűrheti az eseményeket kategória szerint, vagy kereshet az esemény neve alapján.',
      },
      {
        q: 'Miért nem látok minden eseményt?',
        a: 'Jelenleg csak azokat az eseményeket jelenítjük meg, amelyekhez legalább egy ellenőrzött partnerünknél elérhető jegy. Folyamatosan bővítjük az esemény kínálatunkat.',
      },
      {
        q: 'Hogyan iratkozzak fel értesítőre?',
        a: 'Jelenleg nem kínálunk értesítő feliratkozási lehetőséget. Rendszeresen látogasson vissza az oldalra az új események és árak megtekintéséhez.',
      },
    ],
  },
]

const usageRules = [
  'Az oldal kizárólag tájékoztató, árösszehasonlítási célokat szolgál.',
  'Az oldalon megjelenített tartalom szerzői jogi védelem alatt áll.',
  'Az árak és egyéb adatok kizárólag tájékoztató jellegűek – ezek pontosságáért felelősséget nem vállalunk.',
  'Az oldalon megjelenő partnerlinken keresztüli vásárlásért és az annak eredményéül létrejött szerződésért kizárólag az érintett partner felelős.',
  'Tilos az oldalon található adatokat automatizált eszközökkel (scraping, bot) gyűjteni.',
  'Az oldal tartalmát kereskedelmi célból reprodukálni, terjeszteni tilos előzetes írásos engedélyünk nélkül.',
  'Fenntartjuk a jogot az oldal tartalmának, elérhetőségének bármikor, előzetes értesítés nélküli módosítására.',
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="border-b border-border bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Főoldal</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">GYIK &amp; Szabályok</span>
          </nav>
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
            Tudnivalók
          </span>
          <h1 className="font-heading mt-3 text-5xl font-bold text-foreground md:text-6xl text-balance">
            GYIK &amp; Szabályok
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Minden, amit tudnia kell az oldalunk működéséről, az árösszehasonlításról és a használati feltételekről.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Disclaimer */}
        <DisclaimerBanner size="lg" />

        {/* FAQ sections */}
        {faqSections.map((section) => (
          <section key={section.title}>
            <div className="mb-8 flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-primary shrink-0" />
              <h2 className="font-heading text-2xl font-bold text-foreground">{section.title}</h2>
            </div>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.q} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-heading text-base font-bold text-foreground">{item.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Usage rules */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-primary shrink-0" />
            <h2 className="font-heading text-2xl font-bold text-foreground">Használati szabályok</h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-8">
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              Az oldal használatával Ön elfogadja az alábbi szabályokat és feltételeket:
            </p>
            <ol className="space-y-3">
              {usageRules.map((rule, i) => (
                <li key={i} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 font-heading text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Disclaimer repeat */}
        <section>
          <div className="rounded-lg border-2 border-disclaimer-border bg-disclaimer-bg p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-0.5 h-7 w-7 shrink-0 text-primary" />
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-wide text-primary">
                  Jogi nyilatkozat
                </p>
                <p className="mt-3 text-base leading-relaxed text-disclaimer-text">
                  A budapestmatchtickets.com kizárólag tájékoztató jellegű árösszehasonlítást végez.
                  Az oldalon feltüntetett árak, adatok és információk valósságáért, pontosságáért
                  és teljességéért felelősséget nem vállalunk. Az oldalon keresztül kötött vásárlásokból,
                  vagy az áradatok esetleges pontatlanságából eredő károkért, reklamációkért az üzemeltető
                  nem vállal felelősséget. A jegyek megvásárlásával kapcsolatban a partnernél kötött
                  szerződésre az érintett partner általános szerződési feltételei az irányadók.
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  A jogi kérdésekkel kapcsolatban forduljon hozzánk:{' '}
                  <a href="mailto:info@budapestmatchtickets.com" className="text-primary hover:underline">
                    info@budapestmatchtickets.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
