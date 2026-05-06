'use client'

import {useState} from 'react'
import {useTranslations} from 'next-intl'
import {C} from './Colors'
import AnimateIn from './AnimateIn'
import {Link} from '@/i18n/navigation'

const TYP_BARVY = {
  vymena: C.orange, trening: C.yellow, lokalni: C.green, jine: C.teal,
}

const ZEME_VLAJKY = {
  AT:'🇦🇹',BE:'🇧🇪',BG:'🇧🇬',HR:'🇭🇷',CY:'🇨🇾',CZ:'🇨🇿',DK:'🇩🇰',EE:'🇪🇪',
  FI:'🇫🇮',FR:'🇫🇷',DE:'🇩🇪',GR:'🇬🇷',HU:'🇭🇺',IS:'🇮🇸',IE:'🇮🇪',IT:'🇮🇹',
  LV:'🇱🇻',LI:'🇱🇮',LT:'🇱🇹',LU:'🇱🇺',MT:'🇲🇹',NL:'🇳🇱',MK:'🇲🇰',NO:'🇳🇴',
  PL:'🇵🇱',PT:'🇵🇹',RO:'🇷🇴',RS:'🇷🇸',SK:'🇸🇰',SI:'🇸🇮',ES:'🇪🇸',SE:'🇸🇪',TR:'🇹🇷',
}

const INITIAL = 4
const STEP = 4

export default function RealizedProjectsList({projekty}) {
  const t = useTranslations('realizedProjects')
  const [zobrazeno, setZobrazeno] = useState(INITIAL)

  const viditelne = projekty.slice(0, zobrazeno)
  const zbyva = projekty.length - zobrazeno
  const vseZobrazeno = zobrazeno >= projekty.length

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(240px, 17vw, 320px), 1fr))',
        gap: 'clamp(14px, 1.5vw, 24px)',
      }}>
        {viditelne.map((p, i) => {
          const barva = TYP_BARVY[p.typ] || C.teal
          const typNazev = t(`types.${p.typ}`)
          const fotkaUrl = p.fotkaUrl
          const vlajka = p.zeme ? ZEME_VLAJKY[p.zeme] : null

          return (
            <AnimateIn key={p._id} delay={(i % STEP) * 80}>
              <Link href={`/realizovane/${p.slug?.current}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="realized-card" style={{
                  background: C.cream, borderRadius: 20, overflow: 'hidden',
                  border: `1.5px solid ${C.ink}15`,
                  display: 'flex', flexDirection: 'column', height: '100%',
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
                  cursor: 'pointer',
                }}>
                  {fotkaUrl ? (
                    <div style={{
                      aspectRatio: '16 / 10',
                      backgroundImage: `url(${fotkaUrl})`,
                      backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',
                    }}>
                      {vlajka && (
                        <div style={{
                          position: 'absolute', top: 12, left: 12,
                          fontSize: 'clamp(22px, 1.8vw, 30px)', background: `${C.cream}ee`,
                          width: 'clamp(42px, 3.2vw, 54px)', height: 'clamp(42px, 3.2vw, 54px)',
                          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        }}>{vlajka}</div>
                      )}
                      <div style={{
                        position: 'absolute', bottom: 12, right: 12,
                        padding: '5px 12px', borderRadius: 100,
                        background: `${C.cream}ee`, color: barva,
                        fontSize: 'clamp(9px, 0.7vw, 11px)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                      }}>{typNazev}</div>
                    </div>
                  ) : (
                    <div style={{
                      aspectRatio: '16 / 10',
                      background: `linear-gradient(135deg, ${barva}, ${barva}aa)`,
                      position: 'relative',
                    }}>
                      {vlajka && (
                        <div style={{
                          position: 'absolute', top: 12, left: 12,
                          fontSize: 'clamp(22px, 1.8vw, 30px)', background: `${C.cream}ee`,
                          width: 'clamp(42px, 3.2vw, 54px)', height: 'clamp(42px, 3.2vw, 54px)',
                          borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>{vlajka}</div>
                      )}
                      <div style={{
                        position: 'absolute', bottom: 12, right: 12,
                        padding: '5px 12px', borderRadius: 100,
                        background: `${C.cream}ee`, color: barva,
                        fontSize: 'clamp(9px, 0.7vw, 11px)', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase',
                      }}>{typNazev}</div>
                    </div>
                  )}

                  <div style={{padding: 'clamp(18px, 1.4vw, 24px)', flex: 1, display: 'flex', flexDirection: 'column'}}>
                    {(p.mesto || p.datum) && (
                      <div style={{fontSize: 'clamp(10px, 0.75vw, 12px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 8}}>
                        {[p.mesto, p.datum].filter(Boolean).join(' · ')}
                      </div>
                    )}
                    <h3 style={{
                      fontSize: 'clamp(17px, 1.3vw, 22px)', fontWeight: 800, lineHeight: 1.15,
                      letterSpacing: '-0.015em', margin: '0 0 10px', color: C.dark,
                      wordBreak: 'break-word', overflowWrap: 'break-word',
                    }}>{p.nazev_en || p.nazev}</h3>

                    {(p.kratkyPopis_en || p.kratkyPopis) && (
                      <p style={{
                        fontSize: 'clamp(12px, 0.9vw, 14px)', lineHeight: 1.55,
                        color: `${C.ink}99`, margin: '0 0 14px',
                        display: '-webkit-box', WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      }}>{p.kratkyPopis_en || p.kratkyPopis}</p>
                    )}

                    <div style={{
                      display: 'flex', gap: 6, flexWrap: 'wrap',
                      paddingTop: 12, marginBottom: 14,
                      borderTop: `1px dashed ${C.ink}20`, marginTop: 'auto',
                    }}>
                      {p.pocetUcastniku && (
                        <div style={{
                          padding: '4px 10px', borderRadius: 100,
                          background: `${barva}18`, color: barva,
                          fontSize: 'clamp(10px, 0.75vw, 12px)', fontWeight: 700,
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                        }}>👥 {p.pocetUcastniku}</div>
                      )}
                      {p.pocetFotek > 0 && (
                        <div style={{
                          padding: '4px 10px', borderRadius: 100,
                          background: `${C.teal}18`, color: C.teal,
                          fontSize: 'clamp(10px, 0.75vw, 12px)', fontWeight: 700,
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                        }}>📸 {p.pocetFotek}</div>
                      )}
                      {p.pocetFeedbacku > 0 && (
                        <div style={{
                          padding: '4px 10px', borderRadius: 100,
                          background: `${C.orange}18`, color: C.orange,
                          fontSize: 'clamp(10px, 0.75vw, 12px)', fontWeight: 700,
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                        }}>💬 {p.pocetFeedbacku}</div>
                      )}
                    </div>

                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '9px 16px', borderRadius: 100,
                      background: C.dark, color: C.cream,
                      fontSize: 'clamp(10px, 0.8vw, 12px)', fontWeight: 800, letterSpacing: '0.08em',
                      textTransform: 'uppercase', alignSelf: 'flex-start',
                    }}>{t('show')}</div>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          )
        })}
      </div>

      {!vseZobrazeno && (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 'clamp(32px, 4vw, 56px)'}}>
          <button
            onClick={() => setZobrazeno(z => z + STEP)}
            style={{
              padding: 'clamp(14px, 1.2vw, 18px) clamp(32px, 3vw, 48px)',
              background: C.dark, color: C.cream, border: 'none', borderRadius: 100,
              fontSize: 'clamp(13px, 1vw, 15px)', fontWeight: 800,
              letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
              fontFamily: 'var(--font-poppins), sans-serif',
              transition: 'transform 0.3s, background 0.3s',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = C.orange }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = C.dark }}
          >
            {t('loadMore')}
            <span style={{fontSize: '0.85em', opacity: 0.8}}>(+{Math.min(STEP, zbyva)})</span>
            ↓
          </button>
        </div>
      )}
    </>
  )
}
