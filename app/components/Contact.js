import {getTranslations} from 'next-intl/server'
import {C} from './Colors'
import ContactForm from './ContactForm'

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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
          gap: 'clamp(48px, 6vw, 100px)',
          alignItems: 'start',
        }}>

          {/* Left — info */}
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> {t('label')}
            </div>
            <h2 style={{
              fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9,
              letterSpacing: '-0.03em', margin: '0 0 clamp(20px, 2.5vw, 32px)',
            }}>
              {t('h1')}<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.orange}}>{t('h2')}</span>
            </h2>
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 20px)', lineHeight: 1.6,
              color: `${C.ink}bb`, margin: '0 0 clamp(28px, 3.5vw, 44px)', maxWidth: 480,
            }}>{t('desc')}</p>

            <div style={{display: 'grid', gap: 12}}>
              <a href="mailto:info@czechhorizons.eu" style={{
                padding: 'clamp(18px, 1.8vw, 26px)', borderRadius: 20,
                background: C.cream, border: `1.5px solid ${C.ink}12`,
                textDecoration: 'none', color: C.ink,
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'border-color 0.3s',
              }}>
                <div style={{
                  width: 'clamp(48px, 4vw, 60px)', height: 'clamp(48px, 4vw, 60px)',
                  borderRadius: 14, background: `linear-gradient(135deg, ${C.orange}, ${C.yellow})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(22px, 2vw, 28px)', flexShrink: 0,
                }}>📧</div>
                <div>
                  <div style={{fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 3}}>{t('emailLabel')}</div>
                  <div style={{fontSize: 'clamp(15px, 1.2vw, 19px)', fontWeight: 700, color: C.dark, wordBreak: 'break-all'}}>info@czechhorizons.eu</div>
                </div>
              </a>

              <a href="https://www.instagram.com/czech.horizons/" target="_blank" rel="noopener noreferrer" style={{
                padding: 'clamp(18px, 1.8vw, 26px)', borderRadius: 20,
                background: C.cream, border: `1.5px solid ${C.ink}12`,
                textDecoration: 'none', color: C.ink,
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'border-color 0.3s',
              }}>
                <div style={{
                  width: 'clamp(48px, 4vw, 60px)', height: 'clamp(48px, 4vw, 60px)',
                  borderRadius: 14, background: `linear-gradient(135deg, ${C.green}, ${C.teal})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(22px, 2vw, 28px)', flexShrink: 0,
                }}>📸</div>
                <div>
                  <div style={{fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 3}}>{t('igLabel')}</div>
                  <div style={{fontSize: 'clamp(15px, 1.2vw, 19px)', fontWeight: 700, color: C.dark}}>@czech.horizons</div>
                </div>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61565942690033" target="_blank" rel="noopener noreferrer" style={{
                padding: 'clamp(18px, 1.8vw, 26px)', borderRadius: 20,
                background: C.cream, border: `1.5px solid ${C.ink}12`,
                textDecoration: 'none', color: C.ink,
                display: 'flex', alignItems: 'center', gap: 16,
                transition: 'border-color 0.3s',
              }}>
                <div style={{
                  width: 'clamp(48px, 4vw, 60px)', height: 'clamp(48px, 4vw, 60px)',
                  borderRadius: 14, background: `linear-gradient(135deg, #1877F2, #0a5ab5)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(22px, 2vw, 28px)', flexShrink: 0,
                }}>📘</div>
                <div>
                  <div style={{fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 3}}>{t('fbLabel')}</div>
                  <div style={{fontSize: 'clamp(15px, 1.2vw, 19px)', fontWeight: 700, color: C.dark}}>Czech Horizons</div>
                </div>
              </a>

              <div style={{
                padding: 'clamp(18px, 1.8vw, 26px)', borderRadius: 20,
                background: C.cream, border: `1.5px solid ${C.ink}12`,
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <div style={{
                  width: 'clamp(48px, 4vw, 60px)', height: 'clamp(48px, 4vw, 60px)',
                  borderRadius: 14, background: `linear-gradient(135deg, ${C.teal}, ${C.dark})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(22px, 2vw, 28px)', flexShrink: 0,
                }}>📍</div>
                <div>
                  <div style={{fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: C.teal, marginBottom: 3}}>{t('locationLabel')}</div>
                  <div style={{fontSize: 'clamp(15px, 1.2vw, 19px)', fontWeight: 700, color: C.dark}}>{t('location')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: C.creamDark,
            borderRadius: 28,
            padding: 'clamp(28px, 3.5vw, 52px)',
            border: `1.5px solid ${C.ink}10`,
          }}>
            <div style={{fontSize: 'clamp(20px, 2vw, 30px)', fontWeight: 800, color: C.dark, marginBottom: 6, letterSpacing: '-0.02em'}}>
              {t('formTitle')}
            </div>
            <p style={{fontSize: 'clamp(14px, 1.05vw, 16px)', color: `${C.ink}88`, margin: '0 0 28px', lineHeight: 1.6}}>
              {t('formDesc')}
            </p>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
