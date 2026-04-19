import {C} from '../../components/Colors'
import {client} from '@/sanity/client'
import {realizovanyProjektDetailQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import {PortableText} from 'next-sanity'
import Nav from '../../components/Nav'
import Link from 'next/link'
import {notFound} from 'next/navigation'

const TYP_NAZVY = {
  vymena: 'Výměna mládeže',
  trening: 'Tréninkový kurz',
  lokalni: 'Lokální akce',
  jine: 'Jiné',
}

const TYP_BARVY = {
  vymena: C.orange,
  trening: C.yellow,
  lokalni: C.green,
  jine: C.teal,
}

const ZEME_INFO = {
  AT: {nazev: 'Rakousko', vlajka: '🇦🇹'},
  BE: {nazev: 'Belgie', vlajka: '🇧🇪'},
  BG: {nazev: 'Bulharsko', vlajka: '🇧🇬'},
  HR: {nazev: 'Chorvatsko', vlajka: '🇭🇷'},
  CY: {nazev: 'Kypr', vlajka: '🇨🇾'},
  CZ: {nazev: 'Česko', vlajka: '🇨🇿'},
  DK: {nazev: 'Dánsko', vlajka: '🇩🇰'},
  EE: {nazev: 'Estonsko', vlajka: '🇪🇪'},
  FI: {nazev: 'Finsko', vlajka: '🇫🇮'},
  FR: {nazev: 'Francie', vlajka: '🇫🇷'},
  DE: {nazev: 'Německo', vlajka: '🇩🇪'},
  GR: {nazev: 'Řecko', vlajka: '🇬🇷'},
  HU: {nazev: 'Maďarsko', vlajka: '🇭🇺'},
  IS: {nazev: 'Island', vlajka: '🇮🇸'},
  IE: {nazev: 'Irsko', vlajka: '🇮🇪'},
  IT: {nazev: 'Itálie', vlajka: '🇮🇹'},
  LV: {nazev: 'Lotyšsko', vlajka: '🇱🇻'},
  LI: {nazev: 'Lichtenštejnsko', vlajka: '🇱🇮'},
  LT: {nazev: 'Litva', vlajka: '🇱🇹'},
  LU: {nazev: 'Lucembursko', vlajka: '🇱🇺'},
  MT: {nazev: 'Malta', vlajka: '🇲🇹'},
  NL: {nazev: 'Nizozemsko', vlajka: '🇳🇱'},
  MK: {nazev: 'Severní Makedonie', vlajka: '🇲🇰'},
  NO: {nazev: 'Norsko', vlajka: '🇳🇴'},
  PL: {nazev: 'Polsko', vlajka: '🇵🇱'},
  PT: {nazev: 'Portugalsko', vlajka: '🇵🇹'},
  RO: {nazev: 'Rumunsko', vlajka: '🇷🇴'},
  RS: {nazev: 'Srbsko', vlajka: '🇷🇸'},
  SK: {nazev: 'Slovensko', vlajka: '🇸🇰'},
  SI: {nazev: 'Slovinsko', vlajka: '🇸🇮'},
  ES: {nazev: 'Španělsko', vlajka: '🇪🇸'},
  SE: {nazev: 'Švédsko', vlajka: '🇸🇪'},
  TR: {nazev: 'Turecko', vlajka: '🇹🇷'},
}

export default async function RealizovanyProjektDetail({params}) {
  const {slug} = await params
  const p = await client.fetch(realizovanyProjektDetailQuery, {slug})

  if (!p) {
    notFound()
  }

  const barva = TYP_BARVY[p.typ] || C.teal
  const typNazev = TYP_NAZVY[p.typ] || p.typ
  const fotkaUrl = p.hlavniFotka ? urlFor(p.hlavniFotka).width(1600).height(700).url() : null
  const zemeInfo = p.zeme ? ZEME_INFO[p.zeme] : null
  const fotoalbum = p.fotoalbum || []
  const feedbacky = p.feedbacky || []

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
          <Link href="/#realizovane" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: C.teal, fontSize: 'clamp(13px, 1vw, 16px)',
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            textDecoration: 'none', marginBottom: 'clamp(20px, 2.5vw, 36px)',
          }}>← Zpět na realizované projekty</Link>

          <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, flexWrap: 'wrap'}}>
            <div style={{
              padding: 'clamp(8px, 0.7vw, 12px) clamp(18px, 1.4vw, 24px)', borderRadius: 100,
              background: `${barva}18`, color: barva,
              fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>{typNazev}</div>
            {(zemeInfo || p.mesto) && (
              <div style={{
                padding: 'clamp(8px, 0.7vw, 12px) clamp(18px, 1.4vw, 24px)', borderRadius: 100,
                background: `${C.teal}15`, color: C.teal,
                fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 700, letterSpacing: '0.06em',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                {zemeInfo && <span style={{fontSize: 18}}>{zemeInfo.vlajka}</span>}
                {[zemeInfo?.nazev, p.mesto].filter(Boolean).join(' · ')}
              </div>
            )}
            {p.datum && (
              <div style={{
                padding: 'clamp(8px, 0.7vw, 12px) clamp(18px, 1.4vw, 24px)', borderRadius: 100,
                background: `${C.ink}10`, color: C.ink,
                fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 700, letterSpacing: '0.06em',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>📅 {p.datum}</div>
            )}
          </div>

          <h1 style={{
            fontSize: 'clamp(38px, 5vw, 92px)',
            fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em',
            margin: '0 0 clamp(14px, 1.6vw, 24px)',
            wordBreak: 'break-word', overflowWrap: 'break-word',
            color: C.dark,
          }}>{p.nazev}</h1>

          {p.kratkyPopis && (
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.5,
              maxWidth: 800, color: `${C.ink}cc`, fontWeight: 400, margin: 0,
            }}>{p.kratkyPopis}</p>
          )}
        </div>
      </section>

      {/* Featured image */}
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
      {p.pocetUcastniku && (
        <section style={{
          background: C.cream,
          padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{
            maxWidth: 1400, margin: '0 auto',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(24px, 3vw, 48px)',
            paddingTop: 'clamp(28px, 3.5vw, 48px)',
            borderTop: `2px solid ${C.ink}15`,
          }}>
            {p.pocetUcastniku && (
              <div>
                <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700}}>Účastníků</div>
                <div style={{fontWeight: 800, fontSize: 'clamp(48px, 5vw, 96px)', color: C.orange, lineHeight: 1, letterSpacing: '-0.03em'}}>{p.pocetUcastniku}</div>
              </div>
            )}
            {fotoalbum.length > 0 && (
              <div>
                <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700}}>Fotek v albu</div>
                <div style={{fontWeight: 800, fontSize: 'clamp(48px, 5vw, 96px)', color: C.green, lineHeight: 1, letterSpacing: '-0.03em'}}>{fotoalbum.length}</div>
              </div>
            )}
            {feedbacky.length > 0 && (
              <div>
                <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700}}>Ohlasů</div>
                <div style={{fontWeight: 800, fontSize: 'clamp(48px, 5vw, 96px)', color: C.teal, lineHeight: 1, letterSpacing: '-0.03em'}}>{feedbacky.length}</div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Long description */}
      {p.dlouhyPopis && p.dlouhyPopis.length > 0 && (
        <section style={{
          background: C.cream,
          padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 120px)',
        }}>
          <div style={{maxWidth: 900, margin: '0 auto'}}>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 24, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> Jak to bylo
            </div>
            <div style={{fontSize: 'clamp(17px, 1.35vw, 22px)', lineHeight: 1.7, color: `${C.ink}dd`}}>
              <PortableText
                value={p.dlouhyPopis}
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
                }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Feedbacky účastníků */}
      {feedbacky.length > 0 && (
        <section style={{
          background: C.dark, color: C.cream,
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{marginBottom: 'clamp(32px, 4vw, 64px)'}}>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
                <span style={{color: C.orange}}>❋</span> Co na to účastníci
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 800, lineHeight: 0.95,
                letterSpacing: '-0.03em', margin: 0, color: C.cream,
              }}>Ohlasy</h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(320px, 28vw, 440px), 1fr))',
              gap: 'clamp(16px, 2vw, 28px)',
            }}>
              {feedbacky.map((f, i) => {
                const fotkaFb = f.fotka ? urlFor(f.fotka).width(200).height(200).url() : null
                return (
                  <div key={i} style={{
                    background: `${C.cream}08`,
                    border: `1.5px solid ${C.cream}15`,
                    borderRadius: 24,
                    padding: 'clamp(24px, 2.5vw, 40px)',
                    display: 'flex', flexDirection: 'column', gap: 20,
                  }}>
                    <div style={{fontSize: 'clamp(44px, 4vw, 64px)', lineHeight: 0.8, color: C.orange, fontWeight: 800}}>"</div>
                    <p style={{
                      fontSize: 'clamp(16px, 1.25vw, 20px)', lineHeight: 1.6,
                      color: C.cream, fontWeight: 400, margin: 0, fontStyle: 'italic',
                      flex: 1,
                    }}>{f.text}</p>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      paddingTop: 20, borderTop: `1px solid ${C.cream}15`,
                    }}>
                      {fotkaFb ? (
                        <div style={{
                          width: 'clamp(44px, 3.5vw, 56px)', height: 'clamp(44px, 3.5vw, 56px)',
                          borderRadius: '50%',
                          backgroundImage: `url(${fotkaFb})`,
                          backgroundSize: 'cover', backgroundPosition: 'center',
                        }} />
                      ) : (
                        <div style={{
                          width: 'clamp(44px, 3.5vw, 56px)', height: 'clamp(44px, 3.5vw, 56px)',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${C.orange}, ${C.yellow})`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 'clamp(18px, 1.5vw, 24px)', fontWeight: 800, color: C.dark,
                        }}>{f.jmeno?.charAt(0) || '?'}</div>
                      )}
                      <div>
                        <div style={{fontSize: 'clamp(15px, 1.1vw, 18px)', fontWeight: 700, color: C.cream}}>{f.jmeno}</div>
                        {f.vek && (
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}88`, fontWeight: 500}}>{f.vek} let</div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Fotoalbum */}
      {fotoalbum.length > 0 && (
        <section style={{
          background: C.cream,
          padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
        }}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{marginBottom: 'clamp(32px, 4vw, 64px)'}}>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
                <span style={{color: C.orange}}>❋</span> Fotoalbum
              </div>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 800, lineHeight: 0.95,
                letterSpacing: '-0.03em', margin: 0, color: C.dark,
              }}>
                {fotoalbum.length} {fotoalbum.length === 1 ? 'fotka' : fotoalbum.length < 5 ? 'fotky' : 'fotek'}
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(260px, 22vw, 360px), 1fr))',
              gap: 'clamp(12px, 1.5vw, 20px)',
            }}>
              {fotoalbum.map((fotka, i) => {
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

      {/* CTA zpět */}
      <section style={{
        background: C.cream,
        padding: 'clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)',
        textAlign: 'center',
        borderTop: `2px solid ${C.ink}10`,
      }}>
        <Link href="/#realizovane" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: 'clamp(14px, 1.2vw, 18px) clamp(28px, 2.2vw, 40px)',
          borderRadius: 100, background: C.dark, color: C.cream,
          fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.08em',
          textTransform: 'uppercase', textDecoration: 'none',
        }}>← Zpět na všechny realizované projekty</Link>
      </section>
    </main>
  )
}