import {client} from '@/sanity/client'
import {lokalniProjektDetailQuery} from '@/sanity/queries'
import {BylinkoveZahradyClient} from './Client'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'

export const revalidate = 60

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
