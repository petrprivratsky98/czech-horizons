import {getTranslations} from 'next-intl/server'
import {C} from './Colors'

export default async function Contact() {
  const t = await getTranslations('contact')

  return (
    <section id="kontakt" style={{
      background: C.cream,
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '60%',
        background: `radial-gradient(circle, ${C.orange}15 0%, transparent 60%)`,
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '50%', height: '60%',
        background: `radial-gradient(circle, ${C.teal}15 0%, transparent 60%)`,
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{maxWidth: 1600, margin: '0 auto', position: 'relative'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'center'}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> {t('label')}
            </div>
            <h2 style={{
              fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9,
              letterSpacing: '-0.03em', margin: '0 0 clamp(24px, 3vw, 40px)',
            }}>
              {t('h1')}<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.orange}}>{t('h2')}</span>
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6,
              color: `${C.ink}cc`, margin: '0 0 clamp(32px, 4vw, 48px)', maxWidth: 520,
            }}>{t('desc')}</p>

            <a href="mailto:info@czechhorizons.eu" style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: 'clamp(18px, 1.6vw, 26px) clamp(32px, 3vw, 48px)', borderRadius: 100,
              background: C.orange, color: C.cream,
              fontSize: 'clamp(15px, 1.2vw, 20px)', fontWeight: 800, letterSpacing: '0.08em',
              textDecoration: 'none', textTransform: 'uppercase',
              boxShadow: `0 8px 32px ${C.orange}40`,
            }}>{t('cta')}</a>
          </div>

          <div style={{display: 'grid', gap: 16}}>
            <a href="mailto:info@czechhorizons.eu" style={{
              padding: 'clamp(24px, 2.5vw, 36px)', borderRadius: 24,
              background: C.cream, border: `1.5px solid ${C.ink}15`,
              textDecoration: 'none', color: C.ink,
              display: 'flex', alignItems: 'center', gap: 20,
            }}>
              <div style={{
                width: 'clamp(56px, 4.5vw, 72px)', height: 'clamp(56px, 4.5vw, 72px)',
                borderRadius: 16, background: `linear-gradient(135deg, ${C.orange}, ${C.yellow})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(28px, 2.4vw, 36px)', flexShrink: 0,
              }}>📧</div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 4}}>{t('emailLabel')}</div>
                <div style={{fontSize: 'clamp(16px, 1.3vw, 22px)', fontWeight: 700, color: C.dark, wordBreak: 'break-all'}}>info@czechhorizons.eu</div>
              </div>
            </a>

            <a href="https://www.instagram.com/czechhorizons/" target="_blank" rel="noopener noreferrer" style={{
              padding: 'clamp(24px, 2.5vw, 36px)', borderRadius: 24,
              background: C.cream, border: `1.5px solid ${C.ink}15`,
              textDecoration: 'none', color: C.ink,
              display: 'flex', alignItems: 'center', gap: 20,
            }}>
              <div style={{
                width: 'clamp(56px, 4.5vw, 72px)', height: 'clamp(56px, 4.5vw, 72px)',
                borderRadius: 16, background: `linear-gradient(135deg, ${C.green}, ${C.teal})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(28px, 2.4vw, 36px)', flexShrink: 0,
              }}>📸</div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 4}}>{t('igLabel')}</div>
                <div style={{fontSize: 'clamp(16px, 1.3vw, 22px)', fontWeight: 700, color: C.dark}}>@czechhorizons</div>
              </div>
            </a>

            <div style={{
              padding: 'clamp(24px, 2.5vw, 36px)', borderRadius: 24,
              background: C.cream, border: `1.5px solid ${C.ink}15`,
              display: 'flex', alignItems: 'center', gap: 20,
            }}>
              <div style={{
                width: 'clamp(56px, 4.5vw, 72px)', height: 'clamp(56px, 4.5vw, 72px)',
                borderRadius: 16, background: `linear-gradient(135deg, ${C.teal}, ${C.dark})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 'clamp(28px, 2.4vw, 36px)', flexShrink: 0,
              }}>📍</div>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 4}}>{t('locationLabel')}</div>
                <div style={{fontSize: 'clamp(16px, 1.3vw, 22px)', fontWeight: 700, color: C.dark}}>{t('location')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
