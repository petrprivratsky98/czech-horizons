import {C} from '../../components/Colors'
import {client} from '@/sanity/client'
import {lokalniProjektDetailQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import {PortableText} from 'next-sanity'
import Nav from '../../components/Nav'
import Link from 'next/link'
import {notFound} from 'next/navigation'

const STATUS_NAZVY = {
  probihajici: 'Probíhající',
  ukonceny: 'Ukončený',
  pripravovany: 'Připravovaný',
}

const STATUS_BARVY = {
  probihajici: C.green,
  ukonceny: C.teal,
  pripravovany: C.yellow,
}

const MESICE_CZ = ['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec']

function formatDatum(isoDatum) {
  if (!isoDatum) return null
  const d = new Date(isoDatum)
  return `${d.getDate()}. ${MESICE_CZ[d.getMonth()]} ${d.getFullYear()}`
}

export default async function LokalniProjektDetail({params}) {
  const {slug} = await params
  const p = await client.fetch(lokalniProjektDetailQuery, {slug})

  if (!p) {
    notFound()
  }

  const barvaStatus = STATUS_BARVY[p.status] || C.green
  const nazevStatus = STATUS_NAZVY[p.status] || p.status
  const fotkaUrl = p.hlavniFotka ? urlFor(p.hlavniFotka).width(1600).height(700).url() : null

  const akce = (p.akce || []).slice().sort((a, b) => {
    const dA = a.datum ? new Date(a.datum).getTime() : 0
    const dB = b.datum ? new Date(b.datum).getTime() : 0
    return dA - dB
  })

  const galerie = p.galerie || []

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{
        background: C.cream, color: C.ink,
        padding: 'clamp(120px, 13vw, 180px) clamp(24px, 5vw, 80px) clamp(32px, 4vw, 56px)',
        position: 'relative',
      }}>
        <div style={{maxWidth: 1400, margin: '0 auto'}}>
          <Link href="/#lokalni" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: C.teal, fontSize: 'clamp(13px, 1vw, 16px)',
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none', marginBottom: 'clamp(20px, 2.5vw, 36px)',
          }}>← Zpět na lokální projekty</Link>

          <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap'}}>
            <div style={{
              padding: 'clamp(8px, 0.7vw, 12px) clamp(18px, 1.4vw, 24px)', borderRadius: 100,
              background: `${barvaStatus}18`, color: barvaStatus,
              fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>{nazevStatus}</div>
            {(p.obdobiOd || p.obdobiDo) && (
              <div style={{
                padding: 'clamp(8px, 0.7vw, 12px) clamp(18px, 1.4vw, 24px)', borderRadius: 100,
                background: `${C.teal}15`, color: C.teal,
                fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 700, letterSpacing: '0.06em',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                <span>📅</span>
                {p.obdobiOd && p.obdobiDo
                  ? `${p.obdobiOd} — ${p.obdobiDo}`
                  : p.obdobiOd ? `Od ${p.obdobiOd}` : `Do ${p.obdobiDo}`}
              </div>
            )}
          </div>

          <h1 style={{
            fontSize: 'clamp(38px, 5vw, 92px)',
            fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em',
            margin: '0 0 clamp(14px, 1.6vw, 24px)',
            wordBreak: 'break-word', overflowWrap: 'break-word',
            color: C.dark,
          }}>{p.nazev}</h1>

          {p.podnadpis && (
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.5,
              maxWidth: 800, color: `${C.ink}cc`, fontWeight: 400, margin: 0,
            }}>{p.podnadpis}</p>
          )}
        </div>
      </section>

      {/* Featured image — menší */}
      {fotkaUrl && (
        <section style={{padding: '0 clamp(24px, 5vw, 80px)', background: C.cream}}>
          <div style={{
            maxWidth: 1400, margin: '0 auto',
            height: 'clamp(220px, 30vw, 420px)',
            borderRadius: 24,
            backgroundImage: `url(${fotkaUrl})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            overflow: 'hidden',
          }} />
        </section>
      )}

      {/* Stats */}
      {(p.statPocetAkci || p.statPocetUcastniku) && (
        <section style={{
          background: C.cream,
          padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{
            maxWidth: 1400, margin: '0 auto',
            display: 'grid', gridTemplateColumns: p.statPocetAkci && p.statPocetUcastniku ? '1fr 1fr' : '1fr',
            gap: 'clamp(24px, 3vw, 48px)',
            paddingTop: 'clamp(28px, 3.5vw, 48px)',
            borderTop: `2px solid ${C.ink}15`,
          }}>
            {p.statPocetAkci && (
              <div>
                <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700}}>Akcí celkem</div>
                <div style={{fontWeight: 800, fontSize: 'clamp(48px, 5vw, 96px)', color: C.green, lineHeight: 1, letterSpacing: '-0.03em'}}>{p.statPocetAkci}</div>
              </div>
            )}
            {p.statPocetUcastniku && (
              <div>
                <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700}}>Účastníků</div>
                <div style={{fontWeight: 800, fontSize: 'clamp(48px, 5vw, 96px)', color: C.orange, lineHeight: 1, letterSpacing: '-0.03em'}}>{p.statPocetUcastniku}</div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Long description (Portable Text) */}
      {p.popis && p.popis.length > 0 && (
        <section style={{
          background: C.cream,
          padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 120px)',
        }}>
          <div style={{maxWidth: 900, margin: '0 auto'}}>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 24, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> O projektu
            </div>
            <div style={{
              fontSize: 'clamp(17px, 1.35vw, 22px)', lineHeight: 1.7, color: `${C.ink}dd`,
            }}>
              <PortableText
                value={p.popis}
                components={{
                  block: {
                    normal: ({children}) => <p style={{margin: '0 0 clamp(16px, 1.5vw, 28px)'}}>{children}</p>,
                    h2: ({children}) => <h2 style={{fontSize: 'clamp(28px, 2.6vw, 44px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', margin: 'clamp(32px, 4vw, 56px) 0 clamp(16px, 1.5vw, 24px)', color: C.dark}}>{children}</h2>,
                    h3: ({children}) => <h3 style={{fontSize: 'clamp(22px, 2vw, 32px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 'clamp(24px, 3vw, 40px) 0 clamp(12px, 1.2vw, 20px)', color: C.dark}}>{children}</h3>,
                  },
                  marks: {
                    strong: ({children}) => <strong style={{fontWeight: 700, color: C.dark}}>{children}</strong>,
                    em: ({children}) => <em style={{fontStyle: 'italic', color: C.teal}}>{children}</em>,
                    link: ({children, value}) => <a href={value.href} style={{color: C.orange, textDecoration: 'underline'}}>{children}</a>,
                  },
                  types: {
                    image: ({value}) => value?.asset ? (
                      <img
                        src={urlFor(value).width(1600).url()}
                        alt=""
                        style={{width: '100%', borderRadius: 20, margin: 'clamp(24px, 3vw, 40px) 0'}}
                      />
                    ) : null,
                  },
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Akce v rámci projektu */}
      {akce.length > 0 && (
        <section style={{
          background: C.dark, color: C.cream,
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{marginBottom: 'clamp(32px, 4vw, 64px)'}}>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
                <span style={{color: C.orange}}>❋</span> Akce v rámci projektu
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 800, lineHeight: 0.95,
                letterSpacing: '-0.03em', margin: 0, color: C.cream,
              }}>
                {akce.length} {akce.length === 1 ? 'akce' : akce.length < 5 ? 'akce' : 'akcí'}
              </h2>
            </div>

            <div style={{display: 'grid', gap: 'clamp(12px, 1.5vw, 20px)'}}>
              {akce.map((a, i) => {
                const datum = formatDatum(a.datum)
                const jeProsle = a.status === 'proběhlo' || (a.datum && new Date(a.datum) < new Date())

                return (
                  <div key={a._id} style={{
                    background: `${C.cream}08`,
                    border: `1.5px solid ${C.cream}15`,
                    borderRadius: 20,
                    padding: 'clamp(20px, 2vw, 32px) clamp(24px, 2.5vw, 40px)',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: 'clamp(16px, 2vw, 32px)',
                    alignItems: 'center',
                  }}>
                    <div style={{
                      fontSize: 'clamp(32px, 3vw, 56px)', fontWeight: 800,
                      color: jeProsle ? C.teal : C.orange,
                      lineHeight: 1, letterSpacing: '-0.03em',
                      minWidth: 'clamp(48px, 4vw, 80px)',
                    }}>{String(i + 1).padStart(2, '0')}</div>

                    <div>
                      <h3 style={{
                        fontSize: 'clamp(18px, 1.5vw, 26px)', fontWeight: 700,
                        margin: '0 0 6px', color: C.cream, letterSpacing: '-0.01em',
                      }}>{a.nazev}</h3>
                      {datum && (
                        <div style={{fontSize: 'clamp(13px, 1vw, 16px)', color: `${C.cream}88`, fontWeight: 500}}>
                          {datum}
                        </div>
                      )}
                    </div>

                    <div style={{
                      padding: 'clamp(6px, 0.6vw, 10px) clamp(14px, 1.2vw, 18px)', borderRadius: 100,
                      background: jeProsle ? `${C.teal}22` : `${C.orange}22`,
                      color: jeProsle ? C.teal : C.orange,
                      fontSize: 'clamp(10px, 0.8vw, 13px)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                    }}>
                      {jeProsle ? 'Proběhlo' : 'Nadcházející'}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Fotogalerie */}
      {galerie.length > 0 && (
        <section style={{
          background: C.cream,
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{marginBottom: 'clamp(32px, 4vw, 64px)'}}>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
                <span style={{color: C.orange}}>❋</span> Fotogalerie
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 800, lineHeight: 0.95,
                letterSpacing: '-0.03em', margin: 0, color: C.dark,
              }}>
                {galerie.length} {galerie.length === 1 ? 'fotka' : galerie.length < 5 ? 'fotky' : 'fotek'}
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(260px, 22vw, 360px), 1fr))',
              gap: 'clamp(12px, 1.5vw, 20px)',
            }}>
              {galerie.map((fotka, i) => {
                const url = fotka?.asset ? urlFor(fotka).width(900).height(900).url() : null
                if (!url) return null
                return (
                  <div key={fotka._key || i} style={{
                    aspectRatio: '1 / 1',
                    borderRadius: 20,
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                    {fotka.popisek && (
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        padding: 'clamp(16px, 1.5vw, 24px)',
                        background: `linear-gradient(to top, ${C.dark}dd, transparent)`,
                        color: C.cream,
                        fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 600,
                      }}>
                        {fotka.popisek}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Call to action back */}
      <section style={{
        background: C.cream,
        padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)',
        textAlign: 'center',
        borderTop: `2px solid ${C.ink}10`,
      }}>
        <Link href="/#lokalni" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: 'clamp(14px, 1.2vw, 18px) clamp(28px, 2.2vw, 40px)',
          borderRadius: 100, background: C.dark, color: C.cream,
          fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.08em',
          textTransform: 'uppercase', textDecoration: 'none',
        }}>← Zpět na všechny lokální projekty</Link>
      </section>
    </main>
  )
}