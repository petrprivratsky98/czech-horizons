import {C} from './Colors'
import {client} from '@/sanity/client'
import {nadchazejiciAkceQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import AnimateIn from './AnimateIn'

const KATEGORIE_BARVY = {
  uklid: C.green,
  workshop: C.orange,
  setkani: C.teal,
  infosession: C.yellow,
  vylet: C.green,
  jine: C.dark,
}

const KATEGORIE_NAZVY = {
  uklid: 'Úklidová akce',
  workshop: 'Workshop',
  setkani: 'Setkání',
  infosession: 'Infosession',
  vylet: 'Výlet',
  jine: 'Jiné',
}

const MESICE_CZ = ['LED','ÚNO','BŘE','DUB','KVĚ','ČVN','ČVC','SRP','ZÁŘ','ŘÍJ','LIS','PRO']

function formatDatum(isoDatum) {
  if (!isoDatum) return {day: '--', month: '---', year: '----', time: ''}
  const d = new Date(isoDatum)
  return {
    day: String(d.getDate()).padStart(2, '0'),
    month: MESICE_CZ[d.getMonth()],
    year: String(d.getFullYear()),
    time: d.toLocaleTimeString('cs-CZ', {hour: '2-digit', minute: '2-digit'}),
  }
}

export default async function Events() {
  const akce = await client.fetch(nadchazejiciAkceQuery)

  return (
    <section id="eventy" style={{
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> 001 — Kalendář
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0}}>
              Nadcházející<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.orange}}>akce</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.ink}aa`}}>
            Úklidy, workshopy, setkání. Přidej se k nám, některé akce jsou pravidelné, jiné jednorázové.
          </p>
        </div>

        {akce.length === 0 ? (
          <div style={{
            padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center',
            border: `1.5px dashed ${C.ink}30`, borderRadius: 20,
            color: `${C.ink}88`, fontSize: 'clamp(15px, 1.2vw, 20px)',
          }}>
            Momentálně nejsou naplánované žádné akce. Sleduj nás na Instagramu!
          </div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(380px, 30vw, 520px), 520px))', gap: 'clamp(20px, 2vw, 32px)', justifyContent: 'start'}}>
            {akce.map((a, i) => {
              const datum = formatDatum(a.datum)
              const barva = KATEGORIE_BARVY[a.kategorie] || C.dark
              const fotkaUrl = a.fotka ? urlFor(a.fotka).width(1000).height(600).url() : null
              const mapaLink = a.odkazMapa || null

              return (
                <AnimateIn key={a._id} delay={i * 80}>
                <div className="event-card" style={{
                  background: C.cream, borderRadius: 28, overflow: 'hidden',
                  border: `1.5px solid ${C.ink}15`,
                  display: 'flex', flexDirection: 'column', height: '100%',
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
                  cursor: 'default',
                }}>
                  {fotkaUrl ? (
                    <div className="card-photo" style={{
                      height: 'clamp(220px, 20vw, 320px)',
                      backgroundImage: `url(${fotkaUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                    }}>
                      <div style={{
                        position: 'absolute', top: 20, left: 20,
                        background: C.cream, color: barva,
                        padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                        fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                      }}>{KATEGORIE_NAZVY[a.kategorie] || a.kategorie}</div>
                    </div>
                  ) : (
                    <div style={{
                      height: 'clamp(140px, 12vw, 180px)',
                      background: `linear-gradient(135deg, ${barva}, ${barva}88)`,
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{
                        position: 'absolute', inset: 0, opacity: 0.15,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      }} />
                      <div style={{
                        position: 'absolute', top: 20, left: 20,
                        background: C.cream, color: barva,
                        padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                        fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                      }}>{KATEGORIE_NAZVY[a.kategorie] || a.kategorie}</div>
                    </div>
                  )}

                  <div style={{padding: 'clamp(28px, 2.5vw, 44px)', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 'clamp(18px, 1.8vw, 28px)'}}>
                      <div style={{fontSize: 'clamp(52px, 5vw, 88px)', fontWeight: 800, lineHeight: 0.85, letterSpacing: '-0.04em', color: barva}}>{datum.day}</div>
                      <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1}}>
                        <span style={{fontSize: 'clamp(14px, 1.1vw, 18px)', fontWeight: 800, letterSpacing: '0.1em', color: C.dark}}>{datum.month}</span>
                        <span style={{fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 600, color: `${C.ink}88`, marginTop: 6}}>{datum.year}</span>
                      </div>
                    </div>

                    <h3 style={{fontSize: 'clamp(24px, 2vw, 36px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 16px', color: C.dark}}>
                      {a.nazev}
                    </h3>

                    {a.popis && (
                      <p style={{fontSize: 'clamp(15px, 1.15vw, 19px)', lineHeight: 1.65, color: `${C.ink}cc`, margin: '0 0 28px'}}>
                        {a.popis}
                      </p>
                    )}

                    <div style={{paddingTop: 24, borderTop: `1.5px dashed ${C.ink}25`, display: 'grid', gap: 10, marginBottom: 'auto'}}>
                      {(a.misto || a.adresa) && (
                        <div style={{display: 'flex', alignItems: 'center', gap: 10, color: C.dark}}>
                          <span style={{fontSize: 'clamp(16px, 1.3vw, 20px)'}}>📍</span>
                          <span style={{fontSize: 'clamp(15px, 1.1vw, 18px)', fontWeight: 600}}>{[a.misto, a.adresa].filter(Boolean).join(' · ')}</span>
                        </div>
                      )}
                      <div style={{display: 'flex', alignItems: 'center', gap: 10, color: C.dark}}>
                        <span style={{fontSize: 'clamp(16px, 1.3vw, 20px)'}}>🕐</span>
                        <span style={{fontSize: 'clamp(15px, 1.1vw, 18px)', fontWeight: 600}}>{datum.time}{a.casDo ? ` – ${a.casDo}` : ''}</span>
                      </div>
                      {a.kapacita && (
                        <div style={{display: 'flex', alignItems: 'center', gap: 10, color: C.dark}}>
                          <span style={{fontSize: 'clamp(16px, 1.3vw, 20px)'}}>👥</span>
                          <span style={{fontSize: 'clamp(15px, 1.1vw, 18px)', fontWeight: 600}}>Kapacita: {a.kapacita}</span>
                        </div>
                      )}
                    </div>

                    {(mapaLink || a.odkazFB || a.odkazIG) && (
                      <div style={{display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap'}}>
                        {mapaLink && (
                          <a href={mapaLink} target="_blank" rel="noopener noreferrer" style={{
                            padding: 'clamp(12px, 1vw, 16px) clamp(16px, 1.3vw, 22px)', borderRadius: 100, background: barva, color: C.cream,
                            fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 800, letterSpacing: '0.08em', textDecoration: 'none',
                            textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 6,
                          }}>📍 Mapa</a>
                        )}
                        {a.odkazFB && (
                          <a href={a.odkazFB} target="_blank" rel="noopener noreferrer" style={{
                            padding: 'clamp(12px, 1vw, 16px) clamp(16px, 1.3vw, 22px)', borderRadius: 100, background: C.ink, color: C.cream,
                            fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none',
                          }}>Facebook ↗</a>
                        )}
                        {a.odkazIG && (
                          <a href={a.odkazIG} target="_blank" rel="noopener noreferrer" style={{
                            padding: 'clamp(12px, 1vw, 16px) clamp(16px, 1.3vw, 22px)', borderRadius: 100, border: `1.5px solid ${C.ink}40`,
                            fontSize: 'clamp(12px, 0.9vw, 15px)', fontWeight: 700, letterSpacing: '0.05em', textDecoration: 'none', color: C.ink,
                          }}>Instagram ↗</a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                </AnimateIn>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}