import {getTranslations} from 'next-intl/server'
import {C} from './Colors'
import AnimateIn from './AnimateIn'

const PROGRAM_COLORS = {
  erasmus: C.orange,
  discover: C.green,
  esc: C.teal,
  podnikatele: C.yellow,
}

const PROGRAM_ICONS = {
  erasmus: '🎓',
  discover: '🚄',
  esc: '🤝',
  podnikatele: '💼',
}

const PROGRAM_LINKS = {
  erasmus: 'https://www.dzs.cz/program/erasmus',
  discover: 'https://youth.europa.eu/discovereu_cs',
  esc: 'https://europa.eu/youth/solidarity_cs',
  podnikatele: 'https://www.erasmus-entrepreneurs.eu/',
}

export default async function EuropeanPrograms() {
  const t = await getTranslations('programs')
  const items = t.raw('items')

  return (
    <section id="programy" style={{
      background: C.cream,
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> {t('label')}
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0}}>
              {t('h1')}<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.orange}}>{t('h2')}</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.ink}aa`}}>
            {t('desc')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(clamp(300px, 40vw, 700px), 100%), 1fr))',
          gap: 'clamp(20px, 2vw, 32px)',
        }}>
          {items.map((p, i) => {
            const barva = PROGRAM_COLORS[p.kod] || C.orange
            const ikona = PROGRAM_ICONS[p.kod] || '🌍'
            const odkaz = PROGRAM_LINKS[p.kod] || '#'

            return (
              <AnimateIn key={p.kod} delay={i * 100}>
              <a href={odkaz} target="_blank" rel="noopener noreferrer" className="program-card" style={{
                textDecoration: 'none', color: 'inherit',
                background: C.cream, borderRadius: 32,
                border: `2px solid ${barva}25`,
                padding: 'clamp(32px, 3.5vw, 56px)',
                display: 'flex', flexDirection: 'column', height: '100%',
                position: 'relative', overflow: 'hidden',
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
              }}>
                <div style={{
                  position: 'absolute', top: -60, right: -60, width: 240, height: 240,
                  borderRadius: '50%', background: `${barva}12`, filter: 'blur(40px)',
                }} />

                <div style={{position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 'clamp(20px, 2vw, 32px)'}}>
                  <div style={{
                    width: 'clamp(64px, 5vw, 88px)', height: 'clamp(64px, 5vw, 88px)',
                    borderRadius: 20, background: `linear-gradient(135deg, ${barva}, ${barva}aa)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 'clamp(32px, 2.8vw, 44px)', boxShadow: `0 8px 24px ${barva}40`, flexShrink: 0,
                  }}>{ikona}</div>
                  <div style={{flex: 1, minWidth: 0}}>
                    <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: barva, marginBottom: 8}}>
                      {p.podnadpis}
                    </div>
                    <h3 style={{
                      fontSize: 'clamp(28px, 2.6vw, 48px)', fontWeight: 800, lineHeight: 1.1,
                      letterSpacing: '-0.02em', margin: 0, color: C.dark, wordBreak: 'break-word',
                    }}>{p.nazev}</h3>
                  </div>
                </div>

                <p style={{
                  fontSize: 'clamp(15px, 1.2vw, 20px)', lineHeight: 1.6,
                  color: `${C.ink}cc`, margin: '0 0 clamp(20px, 2vw, 32px)', position: 'relative',
                }}>{p.popis}</p>

                <ul className="grid-2col" style={{
                  listStyle: 'none', padding: 0, margin: '0 0 clamp(24px, 2.5vw, 40px)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, position: 'relative',
                }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 600, color: C.dark,
                    }}>
                      <span style={{width: 8, height: 8, borderRadius: '50%', background: barva, flexShrink: 0}} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div style={{
                  marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: 'clamp(14px, 1.2vw, 18px) clamp(24px, 2vw, 32px)', borderRadius: 100,
                  background: C.dark, color: C.cream,
                  fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', alignSelf: 'flex-start', position: 'relative',
                }}>{t('officialWeb')}</div>
              </a>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
