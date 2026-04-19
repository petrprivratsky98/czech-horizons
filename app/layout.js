import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Czech Horizons',
  description: 'Posouváme tvůj horizont poznání. Spolek propojující ekologii, wellbeing a mezinárodní spolupráci.',
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