import { AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DisclaimerBannerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function DisclaimerBanner({ className, size = 'md' }: DisclaimerBannerProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-lg border border-disclaimer-border bg-disclaimer-bg p-4',
        className
      )}
    >
      <AlertTriangle
        className={cn(
          'shrink-0 text-primary mt-0.5',
          size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
        )}
      />
      <div>
        <p
          className={cn(
            'font-heading font-semibold uppercase tracking-wide text-disclaimer-text',
            size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm'
          )}
        >
          Figyelem – Nem értékesítünk jegyeket
        </p>
        <p
          className={cn(
            'mt-1 leading-relaxed text-muted-foreground',
            size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'
          )}
        >
          A budapestmatchtickets.com <strong className="text-foreground">kizárólag árösszehasonlító platform</strong>. 
          Nem értékesítünk jegyeket, nem gyűjtünk fizetési adatokat. Az árak tájékoztató jellegűek – 
          a tényleges árat a partner oldalán kell ellenőrizni. A jegy megvásárlása a partnernél történik.
        </p>
      </div>
    </div>
  )
}

export function HeroDisclaimer() {
  return (
    <div className="flex w-full items-start gap-4 border-b-4 border-primary bg-primary/15 px-5 py-7 md:px-10 md:py-10">
      <AlertTriangle className="mt-1 h-8 w-8 shrink-0 text-primary md:h-10 md:w-10" />
      <div className="flex-1">
        <p className="font-heading text-xl font-extrabold uppercase tracking-widest text-primary md:text-3xl">
          Fontos nyilatkozat – Másodlagos piac
        </p>
        <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
          A <strong>budapestmatchtickets.com</strong> egy <strong>másodlagos piac (secondary market)</strong> árösszehasonlító platform.{' '}
          <strong>Nem vagyunk jegyek elsődleges forgalmazója.</strong> Az oldalon megjelenített jegyek viszonteladóktól származnak,
          és <strong>áraik meghaladhatják az eredeti névértéket (face value).</strong>{' '}
          Jegyeket nem értékesítünk és fizetési adatokat nem gyűjtünk. A vásárlás kizárólag a partner weboldalán történhet.
        </p>
      </div>
    </div>
  )
}
