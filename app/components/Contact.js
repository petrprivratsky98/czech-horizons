import {getTranslations} from 'next-intl/server'
import Image from 'next/image'
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

            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              <a href="mailto:info@czechhorizons.eu" className="contact-card contact-card--email" style={{
                padding: '16px 20px', borderRadius: 16,
                background: C.cream, border: `1.5px solid ${C.ink}12`,
                textDecoration: 'none', color: C.ink,
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `linear-gradient(135deg, ${C.orange}, ${C.yellow})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>📧</div>
                <div>
                  <div style={{fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: `${C.ink}66`, marginBottom: 2}}>{t('emailLabel')}</div>
                  <div style={{fontSize: 'clamp(14px, 1.1vw, 17px)', fontWeight: 700, color: C.dark, wordBreak: 'break-all'}}>info@czechhorizons.eu</div>
                </div>
                <span style={{marginLeft: 'auto', fontSize: 18, color: `${C.ink}30`}}>↗</span>
              </a>

              <a href="https://www.instagram.com/czech.horizons/" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--ig" style={{
                padding: '16px 20px', borderRadius: 16,
                background: C.cream, border: `1.5px solid ${C.ink}12`,
                textDecoration: 'none', color: C.ink,
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <Image src="/ig.png" alt="Instagram" width={44} height={44} style={{borderRadius: 12, objectFit: 'cover', flexShrink: 0}} />
                <div>
                  <div style={{fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: `${C.ink}66`, marginBottom: 2}}>{t('igLabel')}</div>
                  <div style={{fontSize: 'clamp(14px, 1.1vw, 17px)', fontWeight: 700, color: C.dark}}>@czech.horizons</div>
                </div>
                <span style={{marginLeft: 'auto', fontSize: 18, color: `${C.ink}30`}}>↗</span>
              </a>
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
