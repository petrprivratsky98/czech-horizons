import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://www.czechhorizons.eu'),
  title: {
    default: 'Czech Horizons — Posouváme tvůj horizont poznání',
    template: '%s | Czech Horizons',
  },
  description: 'Spolek propojující ekologii, wellbeing a mezinárodní spolupráci skrze Erasmus+, dobrovolnické programy a lokální akce v Praze.',
  keywords: ['Erasmus+', 'výměna mládeže', 'tréninkový kurz', 'dobrovolnictví', 'DiscoverEU', 'ESC', 'ekologie', 'Praha', 'spolek', 'mezinárodní spolupráce'],
  authors: [{name: 'Czech Horizons'}],
  creator: 'Czech Horizons',
  publisher: 'Czech Horizons',
  openGraph: {
    title: 'Czech Horizons — Posouváme tvůj horizont poznání',
    description: 'Spolek propojující ekologii, wellbeing a mezinárodní spolupráci skrze Erasmus+, dobrovolnické programy a lokální akce v Praze.',
    url: 'https://www.czechhorizons.eu',
    siteName: 'Czech Horizons',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Czech Horizons — Posouváme tvůj horizont poznání',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Czech Horizons — Posouváme tvůj horizont poznání',
    description: 'Spolek propojující ekologii, wellbeing a mezinárodní spolupráci skrze Erasmus+, dobrovolnické programy a lokální akce v Praze.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({children}) {
  return (
    <html lang="cs" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1.8/dist/TwemojiCountryFlags.css"
        />
      </head>
      <body style={{fontFamily: 'Twemoji Country Flags, var(--font-poppins), sans-serif', margin: 0, padding: 0}}>
        {children}
      </body>
    </html>
  )
}