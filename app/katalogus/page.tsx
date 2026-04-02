'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import { EventCard } from '@/components/event-card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroDisclaimer } from '@/components/disclaimer-banner'
import { Button } from '@/components/ui/button'
import { upcomingEvents } from '@/lib/data'

const categories = ['Összes', ...Array.from(new Set(upcomingEvents.map((e) => e.category)))]

export default function KatalogusPage() {
  const [activeCategory, setActiveCategory] = useState('Összes')

  const filtered =
    activeCategory === 'Összes'
      ? upcomingEvents
      : upcomingEvents.filter((e) => e.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with disclaimer */}
      <section className="relative flex flex-col overflow-hidden border-b border-border">
        {/* Disclaimer top 20% */}
        <div className="w-full">
          <HeroDisclaimer />
        </div>
        {/* Hero body */}
        <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
            Összes esemény
          </span>
          <h1 className="font-heading mt-3 text-5xl font-bold text-foreground md:text-6xl">
            Esemény katalógus
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Böngésszen {upcomingEvents.length} közelgő sportesemény között. Hasonlítsa össze az árakat és vásároljon a legjobb helyen.
            Az árak tájékoztató jellegűek – a vásárlás a partner weboldalán történik.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
                    activeCategory === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="container mx-auto px-4 py-12">
        <p className="mb-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span> esemény találva
          {activeCategory !== 'Összes' && ` – ${activeCategory}`}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
