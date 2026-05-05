export const revalidate = 10
import {C} from './Colors'
import {client} from '@/sanity/client'
import {lokalniProjektyQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import Link from 'next/link'
import AnimateIn from './AnimateIn'

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

export default async function LocalProjects() {
  const projekty = await client.fetch(lokalniProjektyQuery)

  return (
    <section id="lokalni" style={{
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative', background: C.cream,
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> 003 — Lokální projekty
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0}}>
              Doma<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.green}}>v Česku.</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.ink}aa`}}>
            Dlouhodobé projekty v Praze s podporou ESC. Každý projekt se skládá z několika akcí rozložených do měsíců.
          </p>
        </div>

        {projekty.length === 0 ? (
          <div style={{
            padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center',
            border: `1.5px dashed ${C.ink}30`, borderRadius: 20,
            color: `${C.ink}88`, fontSize: 'clamp(15px, 1.2vw, 20px)',
          }}>
            Zatím zde nejsou žádné lokální projekty. Brzy přibudou!
          </div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(clamp(300px, 40vw, 520px), 100%), 1fr))', gap: 'clamp(20px, 2vw, 32px)'}}>

            {/* Static card: Bylinkové zahrady */}
            <AnimateIn delay={0}>
              <Link href="/lokalni/bylinkova-zahrada" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="local-card" style={{
                  background: C.cream, borderRadius: 28, overflow: 'hidden',
                  border: `1.5px solid ${C.ink}15`,
                  display: 'flex', flexDirection: 'column', height: '100%',
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
                  cursor: 'pointer',
                }}>
                  {/* Image zone */}
                  <div style={{
                    height: 'clamp(220px, 20vw, 320px)',
                    background: 'linear-gradient(135deg, #1e3318 0%, #2d5a20 45%, #4a9b4e 100%)',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {/* Herb SVG illustration */}
                    <svg viewBox="0 0 400 200" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.35}} fill="none">
                      {/* Stems */}
                      {[60,110,160,210,260,310,355].map((x,i) => (
                        <line key={i} x1={x} y1="200" x2={x+(i%2?-8:8)} y2={60+(i%3)*20}
                          stroke="#a8d5a0" strokeWidth="3" strokeLinecap="round"/>
                      ))}
                      {/* Feathery branches */}
                      {[60,160,260,355].map((x,i) => [0.35,0.55,0.72].map((y,j) => (
                        <g key={`${i}-${j}`}>
                          <line x1={x} y1={200-y*140} x2={x-18+(i%2)*4} y2={200-y*140-14} stroke="#a8d5a0" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                          <line x1={x} y1={200-y*140} x2={x+18-(i%2)*4} y2={200-y*140-14} stroke="#a8d5a0" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
                        </g>
                      )))}
                      {/* Spike tops */}
                      {[110,210,310].map((x,i) => (
                        <ellipse key={i} cx={x} cy={55+(i%2)*15} rx="8" ry="22" fill="#a8d5a0" opacity="0.7"/>
                      ))}
                      {/* Round bushes */}
                      {[85,185,335].map((x,i) => (
                        <ellipse key={i} cx={x} cy={90+(i%2)*12} rx="20" ry="16" fill="#7ec87a" opacity="0.5"/>
                      ))}
                    </svg>
                    {/* Status badge */}
                    <div style={{
                      position: 'absolute', top: 20, left: 20,
                      padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                      background: `${C.cream}ee`, color: C.green,
                      fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                    }}>Probíhající</div>
                    {/* Count badge */}
                    <div style={{
                      position: 'absolute', bottom: 20, right: 20,
                      padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                      background: C.dark, color: C.cream,
                      fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 700, letterSpacing: '0.08em',
                    }}>6 truhlíků</div>
                  </div>

                  {/* Content */}
                  <div style={{padding: 'clamp(28px, 2.5vw, 44px)', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{
                      fontSize: 'clamp(30px, 2.6vw, 48px)', fontWeight: 800, lineHeight: 1.05,
                      letterSpacing: '-0.03em', margin: '0 0 16px', color: C.dark,
                    }}>Bylinkové zahrady</h3>
                    <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.6, color: `${C.ink}cc`, margin: '0 0 28px'}}>
                      Šest bylinkových truhlíků plných vůní, chutí a příběhů. Prozkoumej každou bylinu.
                    </p>
                    <div className="grid-2col" style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
                      paddingTop: 24, paddingBottom: 24, borderTop: `1.5px dashed ${C.ink}25`,
                      marginBottom: 'auto',
                    }}>
                      <div>
                        <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 5, fontWeight: 700}}>Truhlíků</div>
                        <div style={{fontWeight: 800, fontSize: 'clamp(28px, 2.5vw, 44px)', color: C.green, lineHeight: 1}}>6</div>
                      </div>
                      <div>
                        <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 5, fontWeight: 700}}>Bylin</div>
                        <div style={{fontWeight: 800, fontSize: 'clamp(28px, 2.5vw, 44px)', color: C.orange, lineHeight: 1}}>39</div>
                      </div>
                    </div>
                    <div style={{
                      marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10,
                      padding: 'clamp(14px, 1.2vw, 18px) clamp(20px, 1.8vw, 28px)', borderRadius: 100,
                      background: C.dark, color: C.cream,
                      fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.08em',
                      textTransform: 'uppercase', alignSelf: 'flex-start',
                    }}>Zobrazit projekt →</div>
                  </div>
                </div>
              </Link>
            </AnimateIn>

            {projekty.map((p, i) => {
              const barvaStatus = STATUS_BARVY[p.status] || C.green
              const nazevStatus = STATUS_NAZVY[p.status] || p.status
              const fotkaUrl = p.hlavniFotka ? urlFor(p.hlavniFotka).width(1000).height(600).url() : null
              const pocetAkci = p.akce?.length || 0

             return (
                <AnimateIn key={p._id} delay={i * 80}>
                <Link href={`/lokalni/${p.slug?.current}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  <div className="local-card" style={{
                    background: C.cream, borderRadius: 28, overflow: 'hidden',
                    border: `1.5px solid ${C.ink}15`,
                    display: 'flex', flexDirection: 'column', height: '100%',
                    transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
                    cursor: 'pointer',
                  }}>
                    {fotkaUrl ? (
                      <div style={{
                        height: 'clamp(220px, 20vw, 320px)',
                        backgroundImage: `url(${fotkaUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                      }}>
                        <div style={{
                          position: 'absolute', top: 20, left: 20,
                          padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                          background: `${C.cream}ee`, color: barvaStatus,
                          fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                        }}>{nazevStatus}</div>
                        {pocetAkci > 0 && (
                          <div style={{
                            position: 'absolute', bottom: 20, right: 20,
                            padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                            background: C.dark, color: C.cream,
                            fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 700, letterSpacing: '0.08em',
                          }}>{pocetAkci} {pocetAkci === 1 ? 'akce' : pocetAkci < 5 ? 'akce' : 'akcí'}</div>
                        )}
                      </div>
                    ) : (
                      <div style={{
                        height: 'clamp(180px, 15vw, 240px)',
                        background: `linear-gradient(135deg, ${barvaStatus}, ${barvaStatus}aa)`,
                        position: 'relative',
                      }}>
                        <div style={{position: 'absolute', inset: 0, opacity: 0.15,
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }} />
                        <div style={{
                          position: 'absolute', top: 20, left: 20,
                          padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                          background: `${C.cream}ee`, color: barvaStatus,
                          fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                        }}>{nazevStatus}</div>
                      </div>
                    )}

                    <div style={{padding: 'clamp(28px, 2.5vw, 44px)', flex: 1, display: 'flex', flexDirection: 'column'}}>
                     <h3 style={{
                        fontSize: 'clamp(30px, 2.6vw, 48px)', fontWeight: 800, lineHeight: 1.05,
                        letterSpacing: '-0.03em', margin: '0 0 16px', color: C.dark,
                        wordBreak: 'break-word', overflowWrap: 'break-word', hyphens: 'auto',
                      }}>
                        {p.nazev}
                      </h3>

                      {p.podnadpis && (
                        <p style={{fontSize: 'clamp(16px, 1.2vw, 20px)', lineHeight: 1.6, color: `${C.ink}cc`, margin: '0 0 28px'}}>
                          {p.podnadpis}
                        </p>
                      )}
                      {(p.obdobiOd || p.obdobiDo) && (
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: 10,
                          padding: 'clamp(8px, 0.7vw, 12px) clamp(16px, 1.2vw, 20px)', borderRadius: 100,
                          background: `${C.teal}15`, color: C.teal,
                          fontSize: 'clamp(12px, 0.95vw, 15px)', fontWeight: 700, letterSpacing: '0.06em',
                          marginBottom: 28, alignSelf: 'flex-start',
                        }}>
                          <span style={{fontSize: 14}}>📅</span>
                          {p.obdobiOd && p.obdobiDo
                            ? `${p.obdobiOd} — ${p.obdobiDo}`
                            : p.obdobiOd
                              ? `Od ${p.obdobiOd}`
                              : `Do ${p.obdobiDo}`}
                        </div>
                      )}

                      {(p.statPocetAkci || p.statPocetUcastniku) && (
                        <div style={{
                          display: 'grid', gridTemplateColumns: p.statPocetAkci && p.statPocetUcastniku ? '1fr 1fr' : '1fr', gap: 20,
                          paddingTop: 24, paddingBottom: 24, borderTop: `1.5px dashed ${C.ink}25`,
                          marginBottom: 'auto',
                        }}>
                          {p.statPocetAkci && (
                            <div>
                              <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 5, fontWeight: 700}}>Akcí celkem</div>
                              <div style={{fontWeight: 800, fontSize: 'clamp(28px, 2.5vw, 44px)', color: C.green, lineHeight: 1}}>{p.statPocetAkci}</div>
                            </div>
                          )}
                          {p.statPocetUcastniku && (
                            <div>
                              <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 5, fontWeight: 700}}>Účastníků</div>
                              <div style={{fontWeight: 800, fontSize: 'clamp(28px, 2.5vw, 44px)', color: C.orange, lineHeight: 1}}>{p.statPocetUcastniku}</div>
                            </div>
                          )}
                        </div>
                      )}

                      <div style={{
                        marginTop: 20, display: 'inline-flex', alignItems: 'center', gap: 10,
                        padding: 'clamp(14px, 1.2vw, 18px) clamp(20px, 1.8vw, 28px)', borderRadius: 100,
                        background: C.dark, color: C.cream,
                        fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.08em',
                        textTransform: 'uppercase', alignSelf: 'flex-start',
                      }}>Zobrazit projekt →</div>
                    </div>
                 </div>
                </Link>
                </AnimateIn>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}