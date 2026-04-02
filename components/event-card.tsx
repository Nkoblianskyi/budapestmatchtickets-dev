import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Tag, AlertTriangle } from 'lucide-react'
import { type Event, formatPrice, formatDate } from '@/lib/data'
import { Badge } from '@/components/ui/badge'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Link href={`/esemeny/${event.slug}`} className="group block">
      <article className="overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        {/* Event image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
              {event.category}
            </Badge>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <h3 className="font-heading text-lg font-bold leading-tight text-foreground text-balance group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>{formatDate(event.date)} – {event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span>{event.venue}, {event.city}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4 border-t border-border pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Ártartomány</p>
                <p className="font-heading text-xl font-bold text-primary leading-none">
                  {formatPrice(event.priceFrom)} – {formatPrice(event.priceTo)}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">
                {event.partners.length} partner
              </span>
            </div>
            {/* Disclaimer – Google Ads compliant, same size as body text */}
            <div className="mt-4 rounded-md border-2 border-primary/60 bg-primary/10 px-4 py-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div className="space-y-1.5">
                  <p className="text-base font-extrabold text-primary leading-tight">
                    Másodlagos piac – Nem értékesítünk jegyeket
                  </p>
                  <p className="text-base leading-snug text-foreground/90">
                    Ez az oldal viszonteladói árakat hasonlít össze. Az árak meghaladhatják az eredeti névértéket.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
