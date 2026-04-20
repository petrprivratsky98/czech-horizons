export const revalidate = 10

import {C} from './Colors'
import {client} from '@/sanity/client'
import {realizovaneProjektyQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import RealizedProjectsList from './RealizedProjectsList'

export default async function RealizedProjects() {
  const projekty = await client.fetch(realizovaneProjektyQuery)

  // Přidáme pre-computed photo URL (serverová práce)
  const projektySFotkou = projekty.map((p) => ({
    ...p,
    fotkaUrl: p.hlavniFotka ? urlFor(p.hlavniFotka).width(800).height(500).url() : null,
  }))

  return (
    <section id="realizovane" style={{
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative', background: C.cream,
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> 004 — Realizované projekty
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0}}>
              Za námi<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.teal}}>je stopa.</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.ink}aa`}}>
            Projekty, které jsme absolvovali. Fotky, příběhy a ohlasy účastníků.
          </p>
        </div>

        {projekty.length === 0 ? (
          <div style={{
            padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center',
            border: `1.5px dashed ${C.ink}30`, borderRadius: 20,
            color: `${C.ink}88`, fontSize: 'clamp(15px, 1.2vw, 20px)',
          }}>
            Zatím žádné realizované projekty, ale první přijdou brzy!
          </div>
        ) : (
          <RealizedProjectsList projekty={projektySFotkou} />
        )}
      </div>
    </section>
  )
}