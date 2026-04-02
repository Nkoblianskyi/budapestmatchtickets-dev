import Link from 'next/link'
import {
  ShieldCheck,
  Users,
  Globe,
  BarChart3,
  AlertTriangle,
  ChevronRight,
  Mail,
  MapPin,
  Building2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'

export const metadata = {
  title: 'Rólunk – Budapest Match Tickets',
  description:
    'A budapestmatchtickets.com egy független sportesemény jegyár-összehasonlító platform, amelyet sportrajongók hoztak létre sportrajongóknak.',
}

const values = [
  {
    icon: BarChart3,
    title: 'Átlátható összehasonlítás',
    description:
      'Egy oldalon jelenítjük meg az összes ellenőrzött partner aktuális árait, hogy Ön azonnal lássa, hol találja a legjobb ajánlatot.',
  },
  {
    icon: ShieldCheck,
    title: 'Adatbiztonság',
    description:
      'Mi semmilyen fizetési vagy személyes adatot nem gyűjtünk be. Az összes tranzakció kizárólag a partner weboldalán zajlik.',
  },
  {
    icon: Globe,
    title: 'Széles lefedettség',
    description:
      'Nem csak Magyarország – Európa számos sportesemény jegyárait is összehasonlítjuk, segítve az utazó szurkolókat.',
  },
  {
    icon: Users,
    title: 'Sportrajongóknak',
    description:
      'Oldalunkat sportszerető emberek üzemeltetik. Pontosan tudjuk, milyen az, amikor az ember jegyet akar venni, de nem tudja, hol a legjobb ár.',
  },
]

const teamMembers = [
  {
    name: 'Kovács Tamás',
    role: 'Alapító & vezető szerkesztő',
    description: 'Futballrajongó, aki megelégelte a különböző oldalak közötti keresgélést.',
  },
  {
    name: 'Nagy Eszter',
    role: 'Partner kapcsolatok',
    description: 'Kapcsolatot tart a jegyértékesítő partnerekkel és biztosítja az árak pontosságát.',
  },
  {
    name: 'Fekete Péter',
    role: 'Technológia & fejlesztés',
    description: 'Az oldal technikai hátterét biztosítja, hogy az árösszehasonlítás mindig gyors és megbízható legyen.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="border-b border-border bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Főoldal</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Rólunk</span>
          </nav>
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
            Rólunk
          </span>
          <h1 className="font-heading mt-3 text-5xl font-bold text-foreground md:text-6xl text-balance">
            Ki vagyunk mi?
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A <strong className="text-foreground">budapestmatchtickets.com</strong> egy független sportesemény
            jegyár-összehasonlító platform, amelyet sportrajongók hoztak létre sportrajongóknak.
            <strong className="text-foreground"> Nem értékesítünk jegyeket.</strong>
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Disclaimer */}
        <DisclaimerBanner size="lg" />

        {/* Mission */}
        <section>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                Küldetésünk
              </span>
              <h2 className="font-heading mt-3 text-4xl font-bold text-foreground">
                Miért hoztuk létre ezt az oldalt?
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Sportrendezvényekre szóló jegyek keresésekor rengeteg időt vesz igénybe, ha minden
                jegyértékesítő oldalt egyenként kell felkeresni, összehasonlítani az árakat és
                megtalálni a legjobb ajánlatot. Ez különösen igaz a magyarországi és európai
                sportesemények esetében, ahol számos különböző platform kínál jegyeket eltérő árakon.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A <strong className="text-foreground">budapestmatchtickets.com</strong> ezt a problémát
                oldja meg: egyetlen oldalon összegyűjtjük és összehasonlítjuk az összes ellenőrzött
                partner aktuális árait. Így Ön percek alatt megtalálhatja a legjobb ajánlatot – anélkül
                hogy tucatnyi oldalt kellene felkeresnie.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Fontos: mi csupán az árakat mutatjuk meg. A tényleges jegyvásárlás mindig a partner
                weboldalán történik – mi nem veszünk részt a tranzakcióban és semmilyen fizetési adatot
                nem gyűjtünk be.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="font-heading text-4xl font-bold text-primary">17+</p>
                <p className="mt-2 text-sm text-muted-foreground">Aktív esemény</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="font-heading text-4xl font-bold text-primary">6</p>
                <p className="mt-2 text-sm text-muted-foreground">Ellenőrzött partner</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="font-heading text-4xl font-bold text-primary">100%</p>
                <p className="mt-2 text-sm text-muted-foreground">Ingyenes használat</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="font-heading text-4xl font-bold text-primary">0</p>
                <p className="mt-2 text-sm text-muted-foreground">Fizetési adat gyűjtve</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="text-center mb-12">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Értékeink
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground">
              Amiben hiszünk
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => (
              <div key={val.title} className="rounded-lg border border-border bg-card p-8">
                <val.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="font-heading text-lg font-bold text-foreground">{val.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How we work */}
        <section className="rounded-lg border border-border bg-card p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
                Hogyan működünk
              </span>
              <h2 className="font-heading mt-3 text-3xl font-bold text-foreground">
                Az árösszehasonlítás folyamata
              </h2>
              <div className="mt-6 space-y-5">
                {[
                  {
                    step: '01',
                    title: 'Partnerektől gyűjtjük az áradatokat',
                    desc: 'Rendszeresen frissítjük az árakat ellenőrzött partnereink weboldalairól.',
                  },
                  {
                    step: '02',
                    title: 'Összehasonlítjuk és megjelenítjük',
                    desc: 'Az adatokat strukturált, könnyen áttekinthető formában jelenítjük meg.',
                  },
                  {
                    step: '03',
                    title: 'Ön dönt és a partnernél vásárol',
                    desc: 'A legjobb ár megtalálása után Ön egyenesen a partner weboldalára kerül – ott folytatódik minden.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xs font-bold text-primary-foreground">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-heading font-bold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-disclaimer-border bg-disclaimer-bg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-heading font-bold text-primary uppercase tracking-wide text-sm">
                      Fontos tudnivaló
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-disclaimer-text">
                      Az oldalunkon megjelenített árak tájékoztató jellegűek. Az árak időszakosan
                      változhatnak, és előfordulhat, hogy a partner weboldalán eltérő árat talál.
                      Mindig ellenőrizze az aktuális árat közvetlenül a partnernél a vásárlás előtt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-6">
                <p className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground mb-3">
                  Mit NEM csinálunk
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Nem adunk el jegyeket',
                    'Nem gyűjtünk fizetési adatokat',
                    'Nem kérünk regisztrációt',
                    'Nem veszünk részt a vásárlási folyamatban',
                    'Nem vállalunk felelősséget az árak pontosságáért',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company info */}
        <section>
          <div className="text-center mb-12">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Vállalati adatok
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold text-foreground">
              Kapcsolat &amp; céginformáció
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8">
              <Building2 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">Üzemeltető</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                Ciprus bejegyzett vállalkozás
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <MapPin className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">Székhely</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Myrianthous Anna<br />
                Panagioti Kaspi 5Α.<br />
                Nicosia 1095<br />
                Cyprus
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8">
              <Mail className="mb-4 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold text-foreground">Elérhetőség</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <a
                  href="mailto:info@budapestmatchtickets.com"
                  className="hover:text-primary transition-colors"
                >
                  info@budapestmatchtickets.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Kezdje el az összehasonlítást
          </h2>
          <p className="mt-4 text-muted-foreground">
            Böngésszen a közelgő sportesemények között és találja meg a legjobb jegyárat.
          </p>
          <div className="mt-6 flex flex-col gap-3 items-center sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="font-heading font-semibold uppercase tracking-wide">
              <Link href="/katalogus">
                Esemény katalógus
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-heading font-semibold uppercase tracking-wide">
              <Link href="/gyik">GYIK megtekintése</Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
