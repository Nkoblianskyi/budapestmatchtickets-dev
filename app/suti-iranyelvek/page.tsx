import Link from 'next/link'
import { ChevronRight, Cookie } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Süti irányelvek – Budapest Match Tickets',
  description:
    'A budapestmatchtickets.com süti (cookie) irányelve – hogyan és mire használjuk a sütiket.',
}

const cookieTypes = [
  {
    name: 'Szükséges sütik',
    description:
      'Ezek a sütik az oldal alapvető működéséhez szükségesek. Nélkülük az oldal nem tud megfelelően működni. Ezeket nem lehet kikapcsolni.',
    examples: [
      'Munkamenet-kezelő sütik (session cookies)',
      'Biztonság- és hitelesítési sütik',
      'Felhasználói beállítások tárolása',
    ],
    canDisable: false,
  },
  {
    name: 'Analitikai sütik',
    description:
      'Ezek a sütik segítenek megérteni, hogyan használják a látogatók az oldalunkat. Az adatok anonimizált formában gyűlnek össze, és az oldal fejlesztésére használjuk fel.',
    examples: [
      'Google Analytics – oldallátogatások száma',
      'Legnépszerűbb oldalak azonosítása',
      'Látogatói útvonalak elemzése',
    ],
    canDisable: true,
  },
  {
    name: 'Marketing sütik',
    description:
      'Ezek a sütik hirdetési célokra használhatók. Jelenleg ilyen sütiket aktívan nem alkalmazunk, de partnereink weboldalain elhelyezhetők ilyenek.',
    examples: [
      'Hirdetések személyre szabása',
      'Konverziókövetés',
      'Retargeting',
    ],
    canDisable: true,
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="border-b border-border bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Főoldal</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Süti irányelvek</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="h-8 w-8 text-primary" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Jogi dokumentum
            </span>
          </div>
          <h1 className="font-heading text-5xl font-bold text-foreground md:text-6xl text-balance">
            Süti irányelvek
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Utolsó frissítés: 2026
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* Introduction */}
          <section className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Mi az a süti (cookie)?</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A sütik kis szöveges fájlok, amelyeket a weboldal az Ön böngészőjén keresztül az eszközére ment.
              Segítenek az oldal hatékony működésében, emlékeznek a beállításaira, és információkat gyűjtenek
              arról, hogyan használja az oldalt. A sütiket az Ön böngészőjének beállításain keresztül bármikor
              törölheti vagy letilthatja, azonban ez egyes funkciók elérhetetlenségét okozhatja.
            </p>
          </section>

          {/* Cookie types */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Milyen sütiket használunk?</h2>
            <div className="space-y-5">
              {cookieTypes.map((type) => (
                <div key={type.name} className="rounded-lg border border-border bg-card p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">{type.name}</h3>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold font-heading ${
                        type.canDisable
                          ? 'bg-secondary text-muted-foreground'
                          : 'bg-primary/20 text-primary border border-primary/40'
                      }`}
                    >
                      {type.canDisable ? 'Kikapcsolható' : 'Kötelező'}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">{type.description}</p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground mb-2">Példák:</p>
                    <ul className="space-y-1">
                      {type.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to manage */}
          <section className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Hogyan kezelheti a sütiket?
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground mb-5">
              A legtöbb böngésző lehetőséget biztosít a sütik kezelésére. Az alábbi linkeken megtalálja a
              legnépszerűbb böngészők sütikezelési útmutatóit:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: 'Google Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                { name: 'Mozilla Firefox', url: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                { name: 'Apple Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' },
                { name: 'Microsoft Edge', url: 'https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge' },
              ].map((browser) => (
                <a
                  key={browser.name}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border bg-secondary/30 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {browser.name} sütikezelés
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Kérjük, vegye figyelembe, hogy egyes sütik letiltása az oldal egyes funkcióinak
              elérhetetlenségét okozhatja. A szükséges sütik letiltása esetén az oldal nem fog
              megfelelően működni.
            </p>
          </section>

          {/* Third party */}
          <section className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Harmadik feles sütik
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Oldalunkon harmadik féltől (pl. Google Analytics) származó sütik is elhelyezésre kerülhetnek.
              Ezen harmadik felek saját adatvédelmi irányelvei az irányadók az általuk gyűjtött adatokra.
              Az affiliate (partneri) linken keresztül a partner weboldalára navigálva az adott partner
              sütiirányelvei lépnek érvénybe.
            </p>
          </section>

          {/* Changes */}
          <section className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Az irányelvek változása
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fenntartjuk a jogot a süti irányelvek bármikori módosítására. A változásokat ezen az oldalon
              tesszük közzé a hatályba lépés dátumával együtt. Az oldal folyamatos használatával Ön
              elfogadja a módosított irányelveket.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-lg border border-border bg-card p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Kapcsolat</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Ha kérdése van a sütiirányelvekkel kapcsolatban, írjon nekünk:{' '}
              <a href="mailto:info@budapestmatchtickets.com" className="text-primary hover:underline">
                info@budapestmatchtickets.com
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              FISCUS NOSTRUM FUND SERVICES LIMITED – Myrianthous Anna, Panagioti Kaspi 5Α., Nicosia 1095, Cyprus
            </p>
          </section>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/adatvedelmi-iranyelvek" className="text-sm text-primary hover:underline font-heading font-semibold">
              Adatvédelmi irányelvek megtekintése
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/gyik" className="text-sm text-primary hover:underline font-heading font-semibold">
              GYIK &amp; Szabályok
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
