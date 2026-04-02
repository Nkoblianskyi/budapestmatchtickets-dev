import Link from 'next/link'
import { ChevronRight, ShieldCheck } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Adatvédelmi irányelvek – Budapest Match Tickets',
  description:
    'A budapestmatchtickets.com adatvédelmi irányelvei – hogyan kezeljük az Ön személyes adatait.',
}

const sections = [
  {
    id: 'adatkezelo',
    title: '1. Adatkezelő adatai',
    content: (
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>Az adatkezelő neve és elérhetőségei:</p>
        <ul className="space-y-1 pl-4">
          <li><strong className="text-foreground">Cégnév:</strong> FISCUS NOSTRUM FUND SERVICES LIMITED</li>
          <li><strong className="text-foreground">Székhely:</strong> Myrianthous Anna, Panagioti Kaspi 5Α., Nicosia 1095, Cyprus</li>
          <li><strong className="text-foreground">E-mail:</strong> <a href="mailto:info@budapestmatchtickets.com" className="text-primary hover:underline">info@budapestmatchtickets.com</a></li>
          <li><strong className="text-foreground">Weboldal:</strong> www.budapestmatchtickets.com</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'adatok',
    title: '2. Milyen adatokat gyűjtünk?',
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          A budapestmatchtickets.com <strong className="text-foreground">nem gyűjt személyes azonosító adatokat</strong> (pl.
          név, e-mail-cím, telefonszám) az oldal böngészésekor. Nem kérünk regisztrációt és nem végzünk
          jegyvásárlást, ezért fizetési adatokat sem gyűjtünk be.
        </p>
        <p>Az alábbi, automatikusan gyűjtött adatokat kezelhetjük:</p>
        <ul className="space-y-2 pl-4">
          {[
            'IP-cím (anonimizált formában)',
            'Böngésző típusa és verziója',
            'Operációs rendszer',
            'Megtekintett oldalak, kattintások (anonimizált)',
            'Az oldalon töltött idő',
            'Hivatkozó URL (ha van)',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Ezeket az adatokat kizárólag statisztikai és weboldal-fejlesztési célokra használjuk, és
          nem kapcsoljuk össze személyes azonosítással.
        </p>
      </div>
    ),
  },
  {
    id: 'cel',
    title: '3. Az adatkezelés célja és jogalapja',
    content: (
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>Az automatikusan gyűjtött adatokat az alábbi célokra és jogalapokon kezeljük:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-heading font-semibold text-foreground">Cél</th>
                <th className="text-left py-2 pr-4 font-heading font-semibold text-foreground">Jogalap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ['Oldal technikai működése', 'Jogos érdek (GDPR 6. cikk (1) f)'],
                ['Statisztikai elemzés, látogatókövetés', 'Jogos érdek (GDPR 6. cikk (1) f)'],
                ['Biztonság, visszaélések megelőzése', 'Jogos érdek (GDPR 6. cikk (1) f)'],
                ['Kapcsolatfelvétel e-mailben', 'Hozzájárulás (GDPR 6. cikk (1) a)'],
              ].map(([cel, jogalap]) => (
                <tr key={cel}>
                  <td className="py-2 pr-4 text-muted-foreground">{cel}</td>
                  <td className="py-2 text-muted-foreground">{jogalap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'megosztás',
    title: '4. Adatmegosztás harmadik felekkel',
    content: (
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          Személyes adatait nem adjuk el, nem adjuk bérbe és nem osztjuk meg kereskedelmi célokra
          harmadik felekkel. Az anonimizált statisztikai adatokat az alábbi szolgáltatókkal oszthatjuk meg:
        </p>
        <ul className="space-y-2 pl-4">
          {[
            'Google LLC (Google Analytics) – webstatisztikák',
            'Tárhelyszolgáltató – az oldal üzemeltetéséhez szükséges mértékben',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Felhívjuk figyelmét, hogy amennyiben partnereink weboldalára navigál az oldalunkon lévő linken
          keresztül, az adott partner a saját adatvédelmi irányelvei szerint kezeli az adatait.
          Mi semmilyen adatot nem adunk át a partnereknek az Ön személyéről.
        </p>
      </div>
    ),
  },
  {
    id: 'megorzés',
    title: '5. Adatmegőrzési idő',
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Az automatikusan gyűjtött, anonimizált statisztikai adatokat legfeljebb 26 hónapig őrizzük meg.
        Amennyiben e-mailben keresi meg ügyfélszolgálatunkat, az e-mail-levelezést az ügymenet lezárásától
        számított 1 évig tároljuk, ezt követően töröljük.
      </p>
    ),
  },
  {
    id: 'jogok',
    title: '6. Az Ön jogai',
    content: (
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        <p>
          Az EU Általános Adatvédelmi Rendelet (GDPR) alapján az alábbi jogok illetik meg Önt személyes
          adatai kezelésével kapcsolatban:
        </p>
        <ul className="space-y-2 pl-4">
          {[
            'Hozzáférési jog – jogosult tájékoztatást kérni az Önre vonatkozóan általunk kezelt adatokról',
            'Helyesbítési jog – kérheti a pontatlan adatok javítását',
            'Törléshez való jog ("az elfeledtetéshez való jog")',
            'Az adatkezelés korlátozásához való jog',
            'Adathordozhatósághoz való jog',
            'Tiltakozási jog a jogos érdeken alapuló adatkezeléssel szemben',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Jogai gyakorlásához írjon nekünk az{' '}
          <a href="mailto:info@budapestmatchtickets.com" className="text-primary hover:underline">
            info@budapestmatchtickets.com
          </a>{' '}
          e-mail-címre. Kérelmére 30 napon belül válaszolunk.
        </p>
        <p>
          Panaszt a ciprusi adatvédelmi hatóságnál (Office of the Commissioner for Personal Data Protection,
          Ciprus) is benyújthat.
        </p>
      </div>
    ),
  },
  {
    id: 'sütik',
    title: '7. Sütik (cookie-k)',
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Az oldalon használt sütikről részletes tájékoztatást a{' '}
        <Link href="/suti-iranyelvek" className="text-primary hover:underline">
          Süti irányelvek
        </Link>{' '}
        oldalon talál.
      </p>
    ),
  },
  {
    id: 'gyermekek',
    title: '8. Gyermekek védelme',
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Oldalunk nem irányul 16 év alatti személyeknek, és tudatosan nem gyűjtünk adatokat 16 év alatti
        személyektől. Ha tudomásunkra jut, hogy ilyen személytől gyűjtöttünk adatot, azt haladéktalanul
        töröljük.
      </p>
    ),
  },
  {
    id: 'változás',
    title: '9. Az irányelvek változása',
    content: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Fenntartjuk a jogot az adatvédelmi irányelvek bármikori módosítására. A módosítások ezen az
        oldalon kerülnek közzétételre a hatályba lépés dátumával. Az oldal folyamatos használatával
        Ön elfogadja a módosított irányelveket. Lényeges változás esetén e-mailes értesítést küldünk,
        ha rendelkezünk az Ön e-mail-címével.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="border-b border-border bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Főoldal</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">Adatvédelmi irányelvek</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
              Jogi dokumentum
            </span>
          </div>
          <h1 className="font-heading text-5xl font-bold text-foreground md:text-6xl text-balance">
            Adatvédelmi irányelvek
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Utolsó frissítés: 2026.  &nbsp;·&nbsp; Hatályos: 2026.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-8 lg:gap-16">
            {/* Table of contents (desktop) */}
            <aside className="hidden lg:block shrink-0 w-56">
              <div className="sticky top-24">
                <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Tartalomjegyzék
                </p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 space-y-8">
              {/* Intro */}
              <div className="rounded-lg border border-border bg-card p-8">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  A <strong className="text-foreground">budapestmatchtickets.com</strong> komolyan veszi az
                  Ön magánéletének védelmét. Ez az adatvédelmi irányelv tájékoztatja Önt arról, hogyan
                  gyűjtjük, kezeljük és védjük az Ön adatait, amikor oldalunkat használja. Az irányelv
                  megfelel az EU Általános Adatvédelmi Rendeletének (GDPR).
                </p>
              </div>

              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-lg border border-border bg-card p-8 scroll-mt-24"
                >
                  <h2 className="font-heading text-xl font-bold text-foreground mb-5">{section.title}</h2>
                  {section.content}
                </section>
              ))}

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/suti-iranyelvek" className="text-sm text-primary hover:underline font-heading font-semibold">
                  Süti irányelvek megtekintése
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/gyik" className="text-sm text-primary hover:underline font-heading font-semibold">
                  GYIK &amp; Szabályok
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/rolunk" className="text-sm text-primary hover:underline font-heading font-semibold">
                  Rólunk
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
