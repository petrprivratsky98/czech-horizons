import {client} from '@/sanity/client'
import {lokalniProjektDetailQuery} from '@/sanity/queries'
import {BylinkoveZahradyClient} from './Client'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import {getLocale} from 'next-intl/server'

export const revalidate = 60

export async function generateMetadata() {
  const locale = await getLocale()
  const isEn = locale === 'en'
  const title = isEn
    ? 'Herb Garden Hanspaulka | Czech Horizons'
    : 'Bylinková zahrada Hanspaulka | Czech Horizons'
  const description = isEn
    ? 'A community herb garden in Prague 6 – Hanspaulka. 6 planters, 50+ herb species. Come by, learn, and take some leaves home.'
    : 'Komunitní bylinková zahrada v Praze 6 – Hanspaulce. 6 truhlíků, 50+ druhů bylin. Přijďte se podívat, naučte se něco nového a utrhněte si pár lístků domů.'
  const url = `https://www.czechhorizons.eu/${locale}/lokalni/bylinkova-zahrada`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Czech Horizons',
      locale: isEn ? 'en_US' : 'cs_CZ',
      type: 'website',
      images: [{url: '/ogimage-zahrada.png', width: 1200, height: 630, alt: title}],
    },
    twitter: {card: 'summary_large_image', title, description, images: ['/ogimage-zahrada.png']},
  }
}

export default async function BylinkoveZahradyPage() {
  const projekt = await client.fetch(lokalniProjektDetailQuery, {slug: 'bylinkova-zahrada'})
  const akce = projekt?.akce ?? []
  return (
    <>
      <Nav />
      <BylinkoveZahradyClient akce={akce} />
      <Footer />
    </>
  )
}
