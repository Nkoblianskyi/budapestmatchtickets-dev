'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/katalogus', label: 'Katalógus' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/gyik', label: 'GYIK' },
]

function MobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return <div className="w-9 h-9 md:hidden" aria-hidden="true" suppressHydrationWarning />

  return (
    <>
      <div className="md:hidden">
        <button
          type="button"
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="absolute left-0 top-full w-full border-t border-border bg-background md:hidden">
          <ul className="container mx-auto flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">

          <Link href="/" className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold leading-none text-primary md:text-2xl">
                BUDAPEST
              </span>
              <span className="font-heading text-sm font-medium leading-none text-muted-foreground">
                MATCH TICKETS
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <MobileNav />

        </div>
      </div>
    </header>
  )
}
