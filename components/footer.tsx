import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Footer disclaimer */}
        <div className="mb-10 rounded-lg border border-disclaimer-border bg-disclaimer-bg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-heading text-base font-semibold uppercase tracking-wide text-disclaimer-text">
                Fontos jogi nyilatkozat
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A budapestmatchtickets.com kizárólag jegyárak összehasonlítására szolgáló platform. 
                <strong className="text-foreground"> Nem értékesítünk jegyeket</strong>, nem gyűjtünk be fizetési adatokat, és nem veszünk részt a jegyértékesítési folyamatban. 
                Az oldalon megjelenített árak tájékoztató jellegűek és eltérhetnek a partner oldalain megjelenő aktuális áraktól. 
                Minden vásárlás kizárólag a partner platformokon történik. A jegyek megvásárlása előtt mindig ellenőrizze az árakat közvetlenül a partnerek weboldalán.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex flex-col">
              <span className="font-heading text-2xl font-bold text-primary">BUDAPEST</span>
              <span className="font-heading text-sm font-medium text-muted-foreground">MATCH TICKETS</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sportesemény jegyárak összehasonlítása Magyarországon és Európában. 
              Segítünk megtalálni a legjobb árat – de mi magunk jegyeket nem adunk el.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} FISCUS NOSTRUM FUND SERVICES LIMITED. Minden jog fenntartva.
            </p>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigáció
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Főoldal</Link></li>
              <li><Link href="/katalogus" className="text-muted-foreground hover:text-primary transition-colors">Esemény katalógus</Link></li>
              <li><Link href="/rolunk" className="text-muted-foreground hover:text-primary transition-colors">Rólunk</Link></li>
              <li><Link href="/gyik" className="text-muted-foreground hover:text-primary transition-colors">GYIK &amp; Szabályok</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Jogi információk
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/adatvedelmi-iranyelvek" className="text-muted-foreground hover:text-primary transition-colors">Adatvédelmi irányelvek</Link></li>
              <li><Link href="/suti-iranyelvek" className="text-muted-foreground hover:text-primary transition-colors">Süti irányelvek</Link></li>
              <li>
                <p className="text-muted-foreground text-xs mt-4">
                  FISCUS NOSTRUM FUND SERVICES LIMITED<br />
                  Myrianthous Anna<br />
                  Panagioti Kaspi 5Α.<br />
                  Nicosia 1095<br />
                  Cyprus<br />
                  <a href="mailto:info@budapestmatchtickets.com" className="hover:text-primary transition-colors">
                    info@budapestmatchtickets.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
