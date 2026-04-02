import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Calendar,
  MapPin,
  Clock,
  Tag,
  ExternalLink,
  AlertTriangle,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  TrendingDown,
  Users,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { events, formatPrice, formatDate } from '@/lib/data'
import { EventCard } from '@/components/event-card'

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) return {}
  return {
    title: `${event.title} – Jegyárak összehasonlítása | Budapest Match Tickets`,
    description: `${event.title} jegyárai összehasonlítva. ${event.venue}, ${event.city} – ${formatDate(event.date)}. Ártartomány: ${formatPrice(event.priceFrom)} – ${formatPrice(event.priceTo)}.`,
  }
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) notFound()

  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 3)
  const otherEvents = relatedEvents.length
    ? relatedEvents
    : events.filter((e) => e.id !== event.id).slice(0, 3)

  const sortedPartners = [...event.partners].sort((a, b) => a.priceFrom - b.priceFrom)
  const cheapest = sortedPartners[0]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── HERO ── full-bleed split: image left, title right on desktop */}
      <section className="relative grid lg:grid-cols-[1fr_480px] min-h-[70vh]">
        {/* Image panel */}
        <div className="relative min-h-[300px] lg:min-h-0">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          {/* Edge fade toward right panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:hidden" />

          {/* Breadcrumb overlaid on image */}
          <nav className="absolute top-5 left-5 right-5 flex items-center gap-2 text-xs text-white/70 z-10">
            <Link href="/" className="hover:text-primary transition-colors">Főoldal</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/katalogus" className="hover:text-primary transition-colors">Katalógus</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90 truncate max-w-[160px]">{event.title}</span>
          </nav>
        </div>

        {/* Info panel */}
        <div className="relative z-10 flex flex-col justify-end lg:justify-center bg-background px-6 py-10 lg:px-10 -mt-16 lg:mt-0">
          <Badge className="mb-4 self-start bg-primary/20 text-primary border border-primary/40 font-semibold uppercase tracking-widest text-xs">
            {event.category}
          </Badge>

          <h1 className="font-heading text-3xl font-extrabold leading-tight text-foreground text-balance md:text-4xl xl:text-5xl">
            {event.title}
          </h1>

          {event.teams && (
            <p className="mt-3 font-heading text-base font-medium text-muted-foreground tracking-wide">
              {event.teams}
            </p>
          )}

          {/* Meta pills */}
          <div className="mt-6 flex flex-col gap-2.5 text-sm">
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Calendar className="h-3.5 w-3.5 text-primary" />
              </span>
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <Clock className="h-3.5 w-3.5 text-primary" />
              </span>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2.5 text-muted-foreground">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                <MapPin className="h-3.5 w-3.5 text-primary" />
              </span>
              <span>{event.venue}, {event.city}</span>
            </div>
          </div>

          {/* Price snapshot */}
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Legalacsonyabb ár
            </p>
            <div className="flex items-end gap-2">
              <span className="font-heading text-5xl font-black text-primary leading-none">
                {formatPrice(event.priceFrom)}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              – {formatPrice(event.priceTo)} (legmagasabb ár)
            </p>
          </div>

          <Link
            href="#prices"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-none border-2 border-primary bg-primary px-6 py-3 font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            Árak összehasonlítása
          </Link>
        </div>
      </section>

      {/* ── DISCLAIMER BANNER ── Google Ads compliant: top 20%, permanent, body-size text */}
      <div className="w-full border-y-4 border-primary bg-primary/15 px-4 py-8 md:py-11">
        <div className="container mx-auto flex items-start gap-5">
          <AlertTriangle className="mt-1 h-9 w-9 shrink-0 text-primary md:h-11 md:w-11" />
          <div>
            <p className="font-heading text-xl font-extrabold uppercase tracking-widest text-primary md:text-3xl">
              Másodlagos piac – Ez az oldal nem értékesít jegyeket
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground md:text-lg">
              A <strong>budapestmatchtickets.com</strong> egy <strong>másodlagos piac (secondary market)</strong> árösszehasonlító platform.
              Nem vagyunk elsődleges jegyforgalmazó. Az oldalon látható jegyek <strong>viszonteladóktól</strong> származnak,
              és <strong>áraik meghaladhatják az eredeti névértéket (face value).</strong>{' '}
              Fizetési adatokat nem kérünk be és nem tárolunk. A vásárlás kizárólag a partner weboldalán történhet.
            </p>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container mx-auto grid grid-cols-3 divide-x divide-border">
          <div className="px-6 py-5 text-center">
            <p className="font-heading text-2xl font-black text-primary">
              {event.partners.length}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
              Partner összehasonlítva
            </p>
          </div>
          <div className="px-6 py-5 text-center">
            <p className="font-heading text-2xl font-black text-primary">
              {formatPrice(event.priceFrom)}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
              Legjobb ár
            </p>
          </div>
          <div className="px-6 py-5 text-center">
            <p className="font-heading text-2xl font-black text-foreground">
              {event.city}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
              Helyszín városa
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-14 lg:grid-cols-[1fr_340px]">

          {/* LEFT column */}
          <div className="space-y-14">

            {/* About */}
            <div>
              <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Az eseményről
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
                {event.description}
              </p>
            </div>

            {/* Price comparison */}
            <div id="prices">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h2 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    Jegyárak összehasonlítása
                  </h2>
                  <p className="font-heading text-2xl font-extrabold text-foreground">
                    {event.partners.length} platform, egy helyen
                  </p>
                </div>
                <TrendingDown className="h-8 w-8 text-primary shrink-0" />
              </div>

              {/* Partner rows */}
              <div className="space-y-3">
                {sortedPartners.map((partner, index) => {
                  const isBest = index === 0
                  const savings =
                    index > 0
                      ? Math.round(((partner.priceFrom - cheapest.priceFrom) / cheapest.priceFrom) * 100)
                      : 0

                  return (
                    <div
                      key={partner.name}
                      className={`group relative overflow-hidden rounded-none border-l-4 transition-all ${
                        isBest
                          ? 'border-l-primary bg-primary/5 border border-primary/30'
                          : 'border-l-border bg-card border border-border hover:border-l-primary/50'
                      }`}
                    >
                      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* Partner info */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-secondary text-xl font-black text-foreground">
                            {partner.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-heading text-base font-bold text-foreground">
                                {partner.name}
                              </span>
                              {isBest && (
                                <span className="rounded-none bg-primary px-2 py-0.5 font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground">
                                  Legolcsóbb
                                </span>
                              )}
                              {partner.badge && partner.badge !== 'Legjobb ár' && (
                                <span className="rounded-none border border-primary/50 bg-primary/10 px-2 py-0.5 font-heading text-xs font-bold uppercase tracking-wider text-primary">
                                  {partner.badge}
                                </span>
                              )}
                              {savings > 0 && (
                                <span className="rounded-none border border-border bg-secondary px-2 py-0.5 font-heading text-xs text-muted-foreground">
                                  +{savings}% a legolcsóbbhoz képest
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Price + CTA */}
                        <div className="flex items-center gap-4 sm:shrink-0">
                          <div className="text-right">
                            <p className="font-heading text-2xl font-black text-primary leading-none">
                              {formatPrice(partner.priceFrom)}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              – {formatPrice(partner.priceTo)}
                            </p>
                          </div>
                          <a
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center gap-2 rounded-none bg-primary px-5 py-3 font-heading text-xs font-black uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85 whitespace-nowrap"
                          >
                            Megnézem
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Inline disclaimer under prices */}
              <div className="mt-6 flex items-start gap-4 border-2 border-primary/50 bg-primary/10 p-5 md:p-6">
                <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-primary md:h-7 md:w-7" />
                <div>
                  <p className="font-heading text-sm font-extrabold uppercase tracking-widest text-primary md:text-base">
                    Másodlagos piac – Emlékeztető
                  </p>
                  <p className="mt-1.5 text-base leading-relaxed text-foreground md:text-base">
                    A fenti árak viszonteladói árak és <strong>meghaladhatják az eredeti névértéket (face value).</strong>{' '}
                    Ez az oldal nem értékesít jegyeket — a vásárlás kizárólag a partner weboldalán lehetséges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT column — sticky sidebar */}
          <div>
            <div className="sticky top-24 space-y-5">

              {/* Quick-info card */}
              <div className="border border-border bg-card p-6">
                <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-5">
                  Esemény adatok
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-muted-foreground mb-0.5">Dátum</dt>
                    <dd className="font-heading font-bold text-foreground text-sm">{formatDate(event.date)}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground mb-0.5">Kezdés</dt>
                    <dd className="font-heading font-bold text-foreground text-sm">{event.time}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground mb-0.5">Helyszín</dt>
                    <dd className="font-heading font-bold text-foreground text-sm">{event.venue}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground mb-0.5">Város</dt>
                    <dd className="font-heading font-bold text-foreground text-sm">{event.city}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground mb-0.5">Kategória</dt>
                    <dd className="font-heading font-bold text-foreground text-sm">{event.category}</dd>
                  </div>
                  <div className="border-t border-border pt-4">
                    <dt className="text-xs text-muted-foreground mb-1">Ártartomány</dt>
                    <dd className="font-heading text-3xl font-black text-primary leading-none">
                      {formatPrice(event.priceFrom)}
                    </dd>
                    <p className="text-xs text-muted-foreground mt-0.5">– {formatPrice(event.priceTo)}</p>
                  </div>
                </dl>
              </div>

              {/* Safety card */}
              <div className="border-2 border-primary/30 bg-primary/8 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <p className="font-heading text-xs font-black uppercase tracking-widest text-primary">
                    Biztonságos böngészés
                  </p>
                </div>
                <ul className="space-y-2.5">
                  {[
                    'Nem értékesítünk jegyeket',
                    'Nem gyűjtünk fizetési adatot',
                    'Az árak tájékoztató jellegűek',
                    'A vásárlás a partner oldalán zajlik',
                    'Összehasonlítunk, nem közvetítünk',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back button */}
              <Link
                href="/katalogus"
                className="flex w-full items-center justify-center gap-2 border border-border bg-secondary px-4 py-3 font-heading text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Vissza a katalógushoz
              </Link>
            </div>
          </div>
        </div>

        {/* ── RELATED EVENTS ── */}
        {otherEvents.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-end justify-between border-b border-border pb-4">
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Hasonló sportesemények
                </p>
                <h2 className="font-heading text-2xl font-extrabold text-foreground">
                  Más események
                </h2>
              </div>
              <Link
                href="/katalogus"
                className="flex items-center gap-1 font-heading text-xs font-bold uppercase tracking-widest text-primary hover:underline"
              >
                Összes <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherEvents.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
