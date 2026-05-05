import {client} from '@/sanity/client'
import {lokalniProjektDetailQuery} from '@/sanity/queries'
import {BylinkoveZahradyClient} from './Client'

export const revalidate = 60

export default async function BylinkoveZahradyPage() {
  const projekt = await client.fetch(lokalniProjektDetailQuery, {slug: 'bylinkova-zahrada'})
  const akce = projekt?.akce ?? []
  return <BylinkoveZahradyClient akce={akce} />
}
