export const revalidate = 10
import {getTranslations} from 'next-intl/server'
import {C} from './Colors'
import {client} from '@/sanity/client'
import {aktualniProjektyQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import AnimateIn from './AnimateIn'

const TYP_BARVY = {
  vymena: C.orange,
  trening: C.yellow,
}

const ZEME_VLAJKY = {
  AT:'🇦🇹',BE:'🇧🇪',BG:'🇧🇬',HR:'🇭🇷',CY:'🇨🇾',CZ:'🇨🇿',DK:'🇩🇰',EE:'🇪🇪',
  FI:'🇫🇮',FR:'🇫🇷',DE:'🇩🇪',GR:'🇬🇷',HU:'🇭🇺',IS:'🇮🇸',IE:'🇮🇪',IT:'🇮🇹',
  LV:'🇱🇻',LI:'🇱🇮',LT:'🇱🇹',LU:'🇱🇺',MT:'🇲🇹',NL:'🇳🇱',MK:'🇲🇰',NO:'🇳🇴',
  PL:'🇵🇱',PT:'🇵🇹',RO:'🇷🇴',RS:'🇷🇸',SK:'🇸🇰',SI:'🇸🇮',ES:'🇪🇸',SE:'🇸🇪',TR:'🇹🇷',
}

export default async function CurrentProjects() {
  const t = await getTranslations('currentProjects')
  const tCountries = await getTranslations('countries')
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
              <span style={{color: C.orange}}>❋</span> {t('label')}
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0, color: C.cream}}>
              {t('h1')}<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.yellow}}>{t('h2')}</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.cream}bb`}}>
            {t('desc')}
          </p>
        </div>

        {projekty.length === 0 ? (
          <div style={{
            padding: 'clamp(40px, 6vw, 80px)', textAlign: 'center',
            border: `1.5px dashed ${C.cream}30`, borderRadius: 20,
            color: `${C.cream}88`, fontSize: 'clamp(15px, 1.2vw, 20px)',
          }}>{t('empty')}</div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(clamp(300px, 40vw, 520px), 100%), 1fr))', gap: 'clamp(20px, 2vw, 32px)'}}>
            {projekty.map((p, i) => {
              const barva = TYP_BARVY[p.typ] || C.orange
              const typNazev = t(`types.${p.typ}`)
              const fotkaUrl = p.fotka ? urlFor(p.fotka).width(1000).height(600).url() : null
              const zemeNazev = p.zeme ? tCountries(p.zeme) : null
              const vlajka = p.zeme ? ZEME_VLAJKY[p.zeme] : null
              const pocetUcastniku = p.pocetUcastniku
                ? p.groupLeaderi
                  ? t(p.groupLeaderi > 1 ? 'groupLeadersPlural' : 'groupLeaders', {n: p.pocetUcastniku, gl: p.groupLeaderi})
                  : t('participants', {n: p.pocetUcastniku})
                : null
              const vek = (p.vekOd || p.vekDo)
                ? (p.vekOd && p.vekDo ? t('ageRange', {from: p.vekOd, to: p.vekDo})
                  : p.vekOd ? t('ageFrom', {from: p.vekOd})
                  : t('ageTo', {to: p.vekDo}))
                : null

              let deadlineBadge = null
              let deadlineBarva = barva
              let jeUzavreno = false
              if (p.deadlinePrihlasky) {
                const dnes = new Date()
                dnes.setHours(0, 0, 0, 0)
                const deadline = new Date(p.deadlinePrihlasky)
                deadline.setHours(0, 0, 0, 0)
                const dnu = Math.ceil((deadline.getTime() - dnes.getTime()) / (1000 * 60 * 60 * 24))
                if (dnu < 0) {
                  jeUzavreno = true
                  deadlineBadge = t('deadline.closed')
                  deadlineBarva = C.dark
                } else if (dnu === 0) {
                  deadlineBadge = t('deadline.today')
                  deadlineBarva = C.orange
                } else if (dnu === 1) {
                  deadlineBadge = t('deadline.day1')
                  deadlineBarva = C.orange
                } else if (dnu <= 7) {
                  deadlineBadge = t('deadline.days', {n: dnu})
                  deadlineBarva = C.orange
                } else {
                  const d = deadline.getDate()
                  const m = deadline.getMonth() + 1
                  const y = deadline.getFullYear()
                  deadlineBadge = t('deadline.until', {d, m, y})
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
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      position: 'relative',
                    }}>
                      {vlajka && (
                        <div style={{
                          position: 'absolute', top: 20, left: 20,
                          fontSize: 'clamp(36px, 3vw, 48px)', background: `${C.cream}ee`,
                          width: 'clamp(64px, 5vw, 80px)', height: 'clamp(64px, 5vw, 80px)',
                          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                        }}>{vlajka}</div>
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
                      {vlajka && (
                        <div style={{
                          position: 'absolute', top: 24, left: 24,
                          fontSize: 'clamp(40px, 3.5vw, 54px)', background: `${C.cream}ee`,
                          width: 'clamp(70px, 5.5vw, 88px)', height: 'clamp(70px, 5.5vw, 88px)',
                          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>{vlajka}</div>
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
                    {(zemeNazev || p.mesto) && (
                      <div style={{fontSize: 'clamp(13px, 1vw, 16px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 12}}>
                        {[zemeNazev, p.mesto].filter(Boolean).join(' · ')}
                      </div>
                    )}
                    <h3 style={{fontSize: 'clamp(28px, 2.4vw, 44px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 18px', color: C.dark}}>
                      {p.nazev_en || p.nazev}
                    </h3>

                    {(p.popis_en || p.popis) && (
                      <p style={{fontSize: 'clamp(15px, 1.15vw, 19px)', lineHeight: 1.65, color: `${C.ink}cc`, margin: '0 0 28px'}}>
                        {p.popis_en || p.popis}
                      </p>
                    )}

                    <div className="grid-2col" style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
                      paddingTop: 24, paddingBottom: 28, borderTop: `1.5px dashed ${C.ink}25`,
                      marginBottom: 'auto',
                    }}>
                      {p.datum && (
                        <div style={{gridColumn: vek ? 'auto' : 'span 2'}}>
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 700}}>{t('termLabel')}</div>
                          <div style={{fontWeight: 700, fontSize: 'clamp(16px, 1.3vw, 20px)', color: C.dark}}>{p.datum}</div>
                        </div>
                      )}
                      {vek && (
                        <div>
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 700}}>{t('ageLabel')}</div>
                          <div style={{fontWeight: 700, fontSize: 'clamp(16px, 1.3vw, 20px)', color: C.dark}}>{vek}</div>
                        </div>
                      )}
                      {pocetUcastniku && (
                        <div style={{gridColumn: 'span 2'}}>
                          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: C.teal, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 7, fontWeight: 700}}>{t('participantsLabel')}</div>
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
                            }}>{t('applyClosed')}</div>
                          ) : (
                            <a href={p.odkazPrihlaska} target="_blank" rel="noopener noreferrer" style={{
                              flex: 1, padding: 'clamp(14px, 1.2vw, 18px) clamp(18px, 1.5vw, 26px)', borderRadius: 100, background: barva, color: C.dark,
                              fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.06em', textAlign: 'center',
                              textDecoration: 'none', textTransform: 'uppercase',
                            }}>{t('apply')}</a>
                          )
                        )}
                        {p.odkazInfopack && (
                          <a href={p.odkazInfopack} target="_blank" rel="noopener noreferrer" style={{
                            padding: 'clamp(14px, 1.2vw, 18px) clamp(18px, 1.5vw, 26px)', borderRadius: 100, border: `1.5px solid ${C.ink}40`,
                            fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 700, textDecoration: 'none', color: C.ink,
                            letterSpacing: '0.06em', textTransform: 'uppercase',
                          }}>{t('infopack')}</a>
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
