export const revalidate = 10
import {getTranslations} from 'next-intl/server'
import {C} from './Colors'
import {client} from '@/sanity/client'
import {clenoveTimuQuery} from '@/sanity/queries'
import {urlFor} from '@/sanity/imageUrl'
import AnimateIn from './AnimateIn'

export default async function About() {
  const t = await getTranslations('about')
  const values = t.raw('values')
  const tym = await client.fetch(clenoveTimuQuery)

  return (
    <section id="o-nas" style={{
      background: C.dark, color: C.cream,
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto', position: 'relative'}}>
        <div style={{marginBottom: 'clamp(60px, 8vw, 120px)'}}>
          <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
            <span style={{color: C.orange}}>❋</span> {t('label')}
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start'}}>
            <h2 style={{
              fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9,
              letterSpacing: '-0.03em', margin: 0, color: C.cream,
            }}>
              {t('h1')}<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.yellow}}>{t('h2')}</span>
            </h2>

            <div style={{fontSize: 'clamp(17px, 1.35vw, 22px)', lineHeight: 1.7, color: `${C.cream}cc`}}>
              <p style={{margin: '0 0 24px'}}>
                {t('desc1')}
                <strong style={{color: C.orange}}>{t('health')}</strong>
                {t('desc1mid1')}
                <strong style={{color: C.green}}>{t('environment')}</strong>
                {t('desc1mid2')}
                <strong style={{color: C.yellow}}>{t('preparedness')}</strong>
                {t('desc1end')}
              </p>
              <p style={{margin: 0}}>{t('desc2')}</p>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          gap: 'clamp(16px, 2vw, 32px)',
          marginBottom: 'clamp(60px, 8vw, 120px)',
        }}>
          {values.map((h, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div style={{
                padding: 'clamp(28px, 3vw, 48px)',
                background: `${C.cream}06`, border: `1.5px solid ${C.cream}15`,
                borderRadius: 24, height: '100%',
              }}>
                <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', letterSpacing: '0.2em', fontWeight: 700,
                  color: i === 0 ? C.orange : i === 1 ? C.green : C.yellow, marginBottom: 16}}>
                  {h.cislo}
                </div>
                <h3 style={{fontSize: 'clamp(28px, 2.6vw, 44px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.02em', margin: '0 0 16px', color: C.cream}}>
                  {h.nazev}
                </h3>
                <p style={{fontSize: 'clamp(15px, 1.15vw, 19px)', lineHeight: 1.6, color: `${C.cream}99`, margin: 0}}>
                  {h.popis}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {tym.length > 0 && (
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
              <span style={{color: C.orange}}>❋</span> {t('teamLabel')}
            </div>
            <h3 style={{
              fontSize: 'clamp(36px, 5vw, 80px)', fontWeight: 800, lineHeight: 0.95,
              letterSpacing: '-0.03em', margin: '0 0 clamp(40px, 5vw, 64px)', color: C.cream,
            }}>
              {t('teamHeading')}<span style={{color: C.orange}}>.</span>
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(260px, 22vw, 360px), 1fr))',
              gap: 'clamp(20px, 2vw, 32px)',
            }}>
              {tym.map((c, i) => {
                const fotkaUrl = c.fotka ? urlFor(c.fotka).width(800).height(800).url() : null
                return (
                  <AnimateIn key={c._id} delay={i * 100}>
                    <div className="team-card" style={{
                      background: `${C.cream}06`, border: `1.5px solid ${C.cream}15`,
                      borderRadius: 24, overflow: 'hidden',
                      display: 'flex', flexDirection: 'column', height: '100%',
                      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s',
                    }}>
                      {fotkaUrl ? (
                        <div style={{
                          aspectRatio: '1 / 1',
                          backgroundImage: `url(${fotkaUrl})`,
                          backgroundSize: 'cover', backgroundPosition: 'center',
                        }} />
                      ) : (
                        <div style={{
                          aspectRatio: '1 / 1',
                          background: `linear-gradient(135deg, ${C.orange}aa, ${C.yellow}aa)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 'clamp(80px, 8vw, 140px)', fontWeight: 800, color: C.dark,
                        }}>{c.jmeno?.charAt(0) || '?'}</div>
                      )}

                      <div style={{padding: 'clamp(24px, 2.5vw, 36px)', flex: 1, display: 'flex', flexDirection: 'column'}}>
                        <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.yellow, marginBottom: 10}}>
                          {c.role_en || c.role}
                        </div>
                        <h4 style={{
                          fontSize: 'clamp(22px, 2vw, 32px)', fontWeight: 800, lineHeight: 1.1,
                          letterSpacing: '-0.02em', margin: '0 0 16px', color: C.cream,
                        }}>{c.jmeno}</h4>

                        {(c.bio_en || c.bio) && (
                          <p style={{
                            fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.6,
                            color: `${C.cream}aa`, margin: '0 0 20px',
                          }}>{c.bio_en || c.bio}</p>
                        )}

                        {(c.email || c.telefon) && (
                          <div style={{
                            display: 'flex', flexDirection: 'column', gap: 8,
                            marginBottom: 16, paddingTop: 16, borderTop: `1px dashed ${C.cream}20`,
                          }}>
                            {c.email && (
                              <a href={`mailto:${c.email}`} style={{
                                fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}cc`,
                                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                                wordBreak: 'break-all',
                              }}>
                                <span style={{fontSize: 14}}>📧</span>
                                <span>{c.email}</span>
                              </a>
                            )}
                            {c.telefon && (
                              <a href={`tel:${c.telefon.replace(/\s/g, '')}`} style={{
                                fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}cc`,
                                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                              }}>
                                <span style={{fontSize: 14}}>📞</span>
                                <span>{c.telefon}</span>
                              </a>
                            )}
                          </div>
                        )}

                        {(c.instagram || c.linkedin) && (
                          <div style={{display: 'flex', gap: 8, marginTop: 'auto', flexWrap: 'wrap'}}>
                            {c.instagram && (
                              <a href={c.instagram} target="_blank" rel="noopener noreferrer" style={{
                                padding: '10px 16px', borderRadius: 100,
                                background: `${C.cream}10`, color: C.cream,
                                fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 700, letterSpacing: '0.05em',
                                textDecoration: 'none',
                              }}>Instagram ↗</a>
                            )}
                            {c.linkedin && (
                              <a href={c.linkedin} target="_blank" rel="noopener noreferrer" style={{
                                padding: '10px 16px', borderRadius: 100,
                                background: `${C.cream}10`, color: C.cream,
                                fontSize: 'clamp(11px, 0.85vw, 14px)', fontWeight: 700, letterSpacing: '0.05em',
                                textDecoration: 'none',
                              }}>LinkedIn ↗</a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimateIn>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
