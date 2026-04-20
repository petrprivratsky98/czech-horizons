import {C} from '@/app/components/Colors'
import {client} from '@/sanity/client'
import {lokalniProjektDetailQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import {PortableText} from '@portabletext/react'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

export const revalidate = 0

export default async function LokalniProjektDetail({params}) {
  const {slug} = await params
  const projekt = await client.fetch(lokalniProjektDetailQuery, {slug})

  if (!projekt) {
    return (
      <main>
        <Nav />
        <section style={{minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', background: C.cream}}>
          <div style={{textAlign: 'center'}}>
            <h1 style={{fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: C.dark, marginBottom: 16}}>Projekt nenalezen</h1>
            <p style={{fontSize: 18, color: `${C.ink}aa`, marginBottom: 32}}>Tento lokální projekt neexistuje nebo byl smazán.</p>
            <Link href="/#lokalni" style={{
              display: 'inline-block', padding: '16px 32px', background: C.orange,
              color: C.cream, borderRadius: 100, textDecoration: 'none', fontWeight: 700,
            }}>← Zpět na homepage</Link>
          </div>
        </section>
      </main>
    )
  }

  const hlavniFotkaUrl = projekt.hlavniFotka ? urlFor(projekt.hlavniFotka).width(1600).height(900).url() : null

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    const mesice = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec']
    return `${mesice[d.getMonth()]} ${d.getFullYear()}`
  }

  const obdobi = `${formatDate(projekt.obdobiOd)} — ${formatDate(projekt.obdobiDo)}`

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{
        background: C.cream, color: C.ink,
        padding: 'clamp(100px, 12vw, 180px) clamp(24px, 5vw, 80px) clamp(40px, 5vw, 80px)',
      }}>
        <div style={{maxWidth: 1400, margin: '0 auto'}}>
          <Link href="/#lokalni" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: C.teal, textDecoration: 'none', marginBottom: 32,
          }}>← Zpět na projekty</Link>

          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.orange}}>
            ❋ Lokální projekt
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 5.5vw, 88px)', fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.03em', margin: '0 0 24px', color: C.dark,
          }}>{projekt.nazev}</h1>

          {projekt.podnadpis && (
            <p style={{fontSize: 'clamp(18px, 1.5vw, 26px)', color: `${C.ink}bb`, margin: '0 0 32px', maxWidth: 900, lineHeight: 1.5}}>
              {projekt.podnadpis}
            </p>
          )}

          <div style={{display: 'inline-block', padding: '8px 20px', borderRadius: 100, background: `${C.teal}15`, color: C.teal, fontSize: 14, fontWeight: 700, letterSpacing: '0.05em'}}>
            📅 {obdobi}
          </div>
        </div>
      </section>

      {/* Fotka */}
      {hlavniFotkaUrl && (
        <div style={{padding: '0 clamp(24px, 5vw, 80px)', background: C.cream}}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{
              height: 'clamp(220px, 30vw, 420px)',
              backgroundImage: `url(${hlavniFotkaUrl})`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              borderRadius: 24,
            }} />
          </div>
        </div>
      )}

      {/* Staty */}
      <section style={{background: C.cream, padding: 'clamp(40px, 5vw, 80px) clamp(24px, 5vw, 80px)'}}>
        <div style={{maxWidth: 1400, margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24}}>
            {projekt.statPocetAkci !== undefined && (
              <div style={{padding: 'clamp(24px, 2.5vw, 40px)', background: C.creamDark, borderRadius: 20}}>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 8}}>Akcí celkem</div>
                <div style={{fontSize: 'clamp(40px, 4vw, 72px)', fontWeight: 800, lineHeight: 1, color: C.orange}}>{projekt.statPocetAkci}</div>
              </div>
            )}
            {projekt.statPocetUcastniku !== undefined && (
              <div style={{padding: 'clamp(24px, 2.5vw, 40px)', background: C.creamDark, borderRadius: 20}}>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 8}}>Účastníků</div>
                <div style={{fontSize: 'clamp(40px, 4vw, 72px)', fontWeight: 800, lineHeight: 1, color: C.green}}>{projekt.statPocetUcastniku}</div>
              </div>
            )}
            {projekt.status && (
              <div style={{padding: 'clamp(24px, 2.5vw, 40px)', background: C.creamDark, borderRadius: 20}}>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 8}}>Stav</div>
                <div style={{fontSize: 'clamp(20px, 1.8vw, 28px)', fontWeight: 800, lineHeight: 1.2, color: C.dark}}>{projekt.status}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popis */}
      {projekt.popis && (
        <section style={{background: C.cream, padding: 'clamp(40px, 5vw, 80px) clamp(24px, 5vw, 80px)'}}>
          <div style={{maxWidth: 900, margin: '0 auto'}}>
            <div style={{fontSize: 'clamp(16px, 1.25vw, 20px)', lineHeight: 1.7, color: `${C.ink}cc`}}>
              <PortableText value={projekt.popis} />
            </div>
          </div>
        </section>
      )}

      {/* Akce */}
      {projekt.akce && projekt.akce.length > 0 && (
        <section style={{background: C.dark, color: C.cream, padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)'}}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
              <span style={{color: C.orange}}>❋</span> Akce v rámci projektu
            </div>
            <h2 style={{fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', margin: '0 0 48px', color: C.cream}}>
              {projekt.akce.length} {projekt.akce.length === 1 ? 'akce' : projekt.akce.length < 5 ? 'akce' : 'akcí'}<span style={{color: C.orange}}>.</span>
            </h2>

            <div style={{display: 'grid', gap: 16}}>
              {projekt.akce.map((a, i) => {
                const d = new Date(a.datum)
                const den = d.getDate()
                const mesic = ['LED', 'ÚN', 'BŘE', 'DUB', 'KVĚ', 'ČVN', 'ČVC', 'SRP', 'ZÁŘ', 'ŘÍJ', 'LIS', 'PRO'][d.getMonth()]
                const rok = d.getFullYear()
                const status = new Date(a.datum) < new Date() ? 'Proběhlo' : 'Nadcházející'

                return (
                  <div key={a._id} style={{
                    background: `${C.cream}06`,
                    border: `1.5px solid ${C.cream}15`,
                    borderRadius: 20,
                    padding: 'clamp(24px, 2.5vw, 36px)',
                    display: 'grid', gridTemplateColumns: 'auto auto 1fr auto', gap: 'clamp(20px, 2.5vw, 40px)',
                    alignItems: 'center',
                  }}>
                    <div style={{fontSize: 'clamp(16px, 1.5vw, 22px)', fontWeight: 800, color: C.yellow, fontFamily: 'monospace'}}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{textAlign: 'center', minWidth: 72}}>
                      <div style={{fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 800, lineHeight: 1, color: C.orange}}>{den}</div>
                      <div style={{fontSize: 11, letterSpacing: '0.15em', fontWeight: 700, color: C.yellow}}>{mesic} {rok}</div>
                    </div>
                    <div>
                      <h3 style={{fontSize: 'clamp(20px, 1.8vw, 28px)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 6px', color: C.cream}}>{a.nazev}</h3>
                      {a.misto && <div style={{fontSize: 14, color: `${C.cream}99`}}>📍 {a.misto}</div>}
                    </div>
                    <div style={{fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: status === 'Proběhlo' ? `${C.cream}66` : C.green}}>
                      {status}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Galerie */}
      {projekt.galerie && projekt.galerie.length > 0 && (
        <section style={{background: C.cream, padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px)'}}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.orange}}>
              ❋ Fotogalerie
            </div>
            <h2 style={{fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.02em', margin: '0 0 40px', color: C.dark}}>
              Jak to vypadá<span style={{color: C.orange}}>.</span>
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16}}>
              {projekt.galerie.map((obr, i) => (
                <div key={i} style={{
                  aspectRatio: '4 / 3',
                  backgroundImage: `url(${urlFor(obr).width(800).url()})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  borderRadius: 16,
                }} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}