import type { Metadata } from 'next'
import { Barlow, Oswald } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Budapest Match Tickets – Jegyárak összehasonlítása',
  description:
    'Budapestmatchtickets.com – Sportesemény jegyárak összehasonlítása Magyarországon és Európában. Nem értékesítünk jegyeket, csak összehasonlítjuk a partnerek árait.',
  keywords: 'jegyárak, sportesemény, Budapest, meccs, összehasonlítás, focimeccs, UEFA',
  openGraph: {
    title: 'Budapest Match Tickets – Jegyárak összehasonlítása',
    description: 'Sportesemény jegyárak összehasonlítása Magyarországon és Európában.',
    url: 'https://budapestmatchtickets.com',
    siteName: 'Budapest Match Tickets',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${barlow.variable} ${oswald.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
