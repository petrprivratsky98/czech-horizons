import {C} from './Colors'
import {client} from '@/sanity/client'
import {aktualniProjektyQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import AnimateIn from './AnimateIn'
export const revalidate = 0

const TYP_NAZVY = {
  vymena: 'Výměna mládeže',
  trening: 'Tréninkový kurz',
}

const TYP_BARVY = {
  vymena: C.orange,
  trening: C.yellow,
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

export default async function CurrentProjects() {
  const projekty = await client.fetch(aktualniProjektyQuery)

  return (
    <section id="projekty" style={{
      background: C.dark, color: C.cream,
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto', position: 'relative'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
              <span style={{color: C.orange}}>❋</span> 002 — Aktuálně volné
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0, color: C.cream}}>
              Kam teď<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.yellow}}>vyrazit.</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.cream}bb`}}>
            Výměny mládeže, tréninkové kurzy. Vše plně hrazené z Erasmus+, letenky, ubytování, jídlo.
          </p>
        </div>

        {projekty.length === 0 ? (
          <div style={{
            padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center',
            border: `1.5px dashed ${C.cream}30`, borderRadius: 20,
            color: `${C.cream}88`, fontSize: 'clamp(15px, 1.2vw, 20px)',
          }}>
            Momentálně nemáme volné projekty. Sleduj nás na Instagramu, pravidelně přidáváme nové!
          </div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(380px, 30vw, 520px), 520px))', gap: 'clamp(20px, 2vw, 32px)', justifyContent: 'start'}}>
            {projekty.map((p, i) => {
              const barva = TYP_BARVY[p.typ] || C.orange
              const typNazev = TYP_NAZVY[p.typ] || p.typ
              const fotkaUrl = p.fotka ? urlFor(p.fotka).width(1000).height(600).url() : null
              const zemeInfo = p.zeme ? ZEME_INFO[p.zeme] : null
              const pocetUcastniku = p.pocetUcastniku
                ? p.groupLeaderi
                  ? `${p.pocetUcastniku} + ${p.groupLeaderi} group leader${p.groupLeaderi > 1 ? 'ů' : ''}`
                  : `${p.pocetUcastniku} účastníků`
                : null
              const vek = (p.vekOd || p.vekDo)
                ? (p.vekOd && p.vekDo ? `${p.vekOd}–${p.vekDo} let` : (p.vekOd ? `${p.vekOd}+ let` : `do ${p.vekDo} let`))
                : null

                // Spočítat dny do deadline
              let deadlineBadge = null
              let deadlineBarva = barva
              let jeUzavreno = false
              if (p.deadlinePrihlasky) {
                const dnes = new Date()
                dnes.setHours(0, 0, 0, 0)
                const deadline = new Date(p.deadlinePrihlasky)
                deadline.setHours(0, 0, 0, 0)
                const rozdilMs = deadline.getTime() - dnes.getTime()
                const dnu = Math.ceil(rozdilMs / (1000 * 60 * 60 * 24))
                if (dnu < 0) {
                  jeUzavreno = true
                  deadlineBadge = 'Přihlášky uzavřeny'
                  deadlineBarva = C.dark
                } else if (dnu === 0) {
                  deadlineBadge = 'Deadline dnes!'
                  deadlineBarva = C.orange
                } else if (dnu === 1) {
                  deadlineBadge = 'Zbývá 1 den'
                  deadlineBarva = C.orange
                } else if (dnu <= 7) {
                  deadlineBadge = `Zbývá ${dnu} dní`
                  deadlineBarva = C.orange
                } else {
                  const d = deadline.getDate()
                  const m = deadline.getMonth() + 1
                  const r = deadline.getFullYear()
                  deadlineBadge = `Do ${d}. ${m}. ${r}`
                  deadlineBarva = C.teal
                }
              }

             return (
                <AnimateIn key={p._id} delay={i * 80}>
                <div className="project-card" style={{
                  background: C.cream, borderRadius: 28, overflow: 'hidden',
                  border: `1.5px solid ${C.cream}25`,
                  display: 'flex', flexDirection: 'column', height: '100%',
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
                  color: C.ink,
                  
                }}>
                  {fotkaUrl ? (
                    <div style={{
                      height: 'clamp(220px, 20vw, 320px)',
                      backgroundImage: `url(${fotkaUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      height: 'clamp(220px, 20vw, 320px)',
                      backgroundImage: `url(${fotkaUrl})`,
                      
                    }}>
                      {zemeInfo && (
                        <div style={{
                          position: 'absolute', top: 20, left: 20,
                          fontSize: 'clamp(36px, 3vw, 48px)',
                          background: `${C.cream}ee`,
                          width: 'clamp(64px, 5vw, 80px)', height: 'clamp(64px, 5vw, 80px)',
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        }}>{zemeInfo.vlajka}</div>
                      )}
                      <div style={{
                        position: 'absolute', bottom: 20, right: 20,
                        padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                        background: `${C.cream}ee`, color: C.dark,
                        fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                      }}>{typNazev}</div>
                      {deadlineBadge && (
                        <div style={{
                          position: 'absolute', top: 20, right: 20,
                          padding: 'clamp(7px, 0.6vw, 10px) clamp(14px, 1.2vw, 20px)', borderRadius: 100,
                          background: deadlineBarva, color: C.cream,
                          fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                        }}>⏰ {deadlineBadge}</div>
                      )}
                    </div>
                  ) : (
                    <div style={{
                      height: 'clamp(180px, 15vw, 240px)',
                      background: `linear-gradient(135deg, ${barva}, ${barva}aa)`,
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{position: 'absolute', inset: 0, opacity: 0.15,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      }} />
                      {zemeInfo && (
                        <div style={{
                          position: 'absolute', top: 24, left: 24,
                          fontSize: 'clamp(40px, 3.5vw, 54px)',
                          background: `${C.cream}ee`,
                          width: 'clamp(70px, 5.5vw, 88px)', height: 'clamp(70px, 5.5vw, 88px)',
                          borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>{zemeInfo.vlajka}</div>
                      )}
                    <div style={{
                        position: 'absolute', bottom: 20, right: 20,
                        padding: 'clamp(7px, 0.6vw, 10px) clamp(16px, 1.3vw, 22px)', borderRadius: 100,
                        background: `${C.cream}ee`, color: C.dark,
                        fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase',
                      }}>{typNazev}</div>
                      {deadlineBadge && (
                        <div style={{
                          position: 'absolute', top: 20, right: 20,
                          padding: 'clamp(7px, 0.6vw, 10px) clamp(14px, 1.2vw, 20px)', borderRadius: 100,
                          background: deadlineBarva, color: C.cream,
                          fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                        }}>⏰ {deadlineBadge}</div>
                      )}
                    </div>
                  )}

                  <div style={{padding: 'clamp(28px, 2.5vw, 44px)', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    {(zemeInfo || p.mesto) && (
                      <div style={{fontSize: 'clamp(13px, 1vw, 16px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 12}}>
                        {[zemeInfo?.nazev, p.mesto].filter(Boolean).join(' · ')}
                      </div>
                    )}
                    <h3 style={{fontSize: 'clamp(28px, 2.4vw, 44px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 18px', color: C.dark}}>
                      {p.nazev}
                    </h3>

                    {p.popis && (
                      <p style={{fontSize: 'clamp(15px, 1.15vw, 19px)', lineHeight: 1.65, color: `${C.ink}cc`, margin: '0 0 28px'}}>
                        {p.popis}
                      </p>
                    )}

                    <div style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
                      paddingTop: 24, paddingBottom: 28, borderTop: `1.5px dashed ${C.ink}25`,
                      marginBottom: 'auto',
                    }}>
                      {p.datum && (
                        <div style={{gridColumn: vek ? 'auto' : 'span 2'}}>
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 700}}>Termín</div>
                          <div style={{fontWeight: 700, fontSize: 'clamp(16px, 1.3vw, 20px)', color: C.dark}}>{p.datum}</div>
                        </div>
                      )}
                      {vek && (
                        <div>
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 700}}>Věk</div>
                          <div style={{fontWeight: 700, fontSize: 'clamp(16px, 1.3vw, 20px)', color: C.dark}}>{vek}</div>
                        </div>
                      )}
                      {pocetUcastniku && (
                        <div style={{gridColumn: 'span 2'}}>
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 700}}>Účastníci</div>
                          <div style={{fontWeight: 700, fontSize: 'clamp(16px, 1.3vw, 20px)', color: C.dark}}>{pocetUcastniku}</div>
                        </div>
                      )}
                    </div>

                    {(p.odkazPrihlaska || p.odkazInfopack) && (
                      <div style={{display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap'}}>
                       {p.odkazPrihlaska && (
                          jeUzavreno ? (
                            <div style={{
                              flex: 1, padding: 'clamp(14px, 1.2vw, 18px) clamp(18px, 1.5vw, 26px)', borderRadius: 100,
                              background: `${C.ink}25`, color: `${C.ink}99`,
                              fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.06em', textAlign: 'center',
                              textTransform: 'uppercase', cursor: 'not-allowed',
                            }}>Přihlášky uzavřeny</div>
                          ) : (
                            <a href={p.odkazPrihlaska} target="_blank" rel="noopener noreferrer" style={{
                              flex: 1, padding: 'clamp(14px, 1.2vw, 18px) clamp(18px, 1.5vw, 26px)', borderRadius: 100, background: barva, color: C.dark,
                              fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.06em', textAlign: 'center',
                              textDecoration: 'none', textTransform: 'uppercase',
                            }}>Přihláška ↗</a>
                          )
                        )}
                        {p.odkazInfopack && (
                          <a href={p.odkazInfopack} target="_blank" rel="noopener noreferrer" style={{
                            padding: 'clamp(14px, 1.2vw, 18px) clamp(18px, 1.5vw, 26px)', borderRadius: 100, border: `1.5px solid ${C.ink}40`,
                            fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 700, textDecoration: 'none', color: C.ink,
                            letterSpacing: '0.06em', textTransform: 'uppercase',
                          }}>Infopack ↗</a>
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