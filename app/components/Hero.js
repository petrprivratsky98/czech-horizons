'use client'

import {useState, useEffect} from 'react'
import {useTranslations} from 'next-intl'
import {C} from './Colors'
import Mountains from './Mountains'
import GlobeCanvas from './GlobeCanvas'

export default function Hero() {
  const t = useTranslations('hero')
  const [scrollY, setScrollY] = useState(0)
  const [mouse, setMouse] = useState({x: 0, y: 0})

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    const onMouse = (e) => setMouse({x: e.clientX, y: e.clientY})
    window.addEventListener('scroll', onScroll, {passive: true})
    window.addEventListener('mousemove', onMouse)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      background: C.cream,
      padding: 'clamp(100px, 12vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${C.dark}cc 0%, ${C.dark}99 50%, ${C.dark}aa 100%)`,
        zIndex: 1, pointerEvents: 'none',
      }} />

      <Mountains scrollY={scrollY} opacity={0.25} />

      <div style={{
        position: 'absolute', top: 0, right: '-10%', width: '60%', height: '70%',
        background: `radial-gradient(circle, ${C.orange}22 0%, transparent 60%)`,
        filter: 'blur(40px)',
        transform: `translate(${mouse.x * 0.02}px, ${mouse.y * 0.02 + scrollY * 0.1}px)`,
        transition: 'transform 0.8s ease-out', pointerEvents: 'none', zIndex: 3,
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: '50%', height: '60%',
        background: `radial-gradient(circle, ${C.teal}20 0%, transparent 60%)`,
        filter: 'blur(50px)',
        transform: `translate(${-mouse.x * 0.015}px, ${-scrollY * 0.08}px)`,
        transition: 'transform 0.8s ease-out', pointerEvents: 'none', zIndex: 3,
      }} />

      <div style={{position: 'relative', zIndex: 10, maxWidth: 1400, margin: '0 auto', width: '100%'}}>
        <div style={{
          position: 'absolute', top: 0, right: '-2%',
          width: '60%', height: '100%',
          zIndex: 11, pointerEvents: 'none',
        }}>
          <GlobeCanvas />
        </div>

        <div style={{maxWidth: 'min(1100px, 65%)', paddingTop: 40, position: 'relative', zIndex: 12}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'clamp(24px, 4vw, 40px)'}}>
            <div style={{width: 40, height: 1, background: C.cream}} />
            <span style={{fontSize: 'clamp(10px, 1vw, 11px)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cream}}>
              {t('eyebrow')}
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(38px, 10vw, 140px)', fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.035em', margin: '0 0 clamp(28px, 3vw, 48px)',
            color: C.cream, textShadow: '0 4px 32px rgba(0,0,0,0.4)',
          }}>
            <span style={{display: 'block', whiteSpace: 'nowrap'}}>{t('h1_1')}</span>
            <span style={{display: 'block', whiteSpace: 'nowrap', color: C.cream, fontWeight: 800, letterSpacing: '-0.035em'}}>{t('h1_2')}</span>
            <span style={{
              display: 'block', whiteSpace: 'nowrap', fontSize: '1.15em', color: C.orange,
              fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.03em',
              lineHeight: 0.9, marginTop: '0.05em',
            }}>
              {t('h1_3')}<span style={{color: C.yellow}}>.</span>
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.4vw, 22px)', lineHeight: 1.6, maxWidth: 'clamp(440px, 38vw, 600px)',
            color: `${C.cream}ee`, marginBottom: 'clamp(24px, 4vw, 40px)', fontWeight: 400,
            textShadow: '0 2px 16px rgba(0,0,0,0.5)',
          }}>
            {t('descPre')}
            <strong style={{color: C.yellow, fontWeight: 600}}>{t('health')}</strong>
            {t('descMid1')}
            <strong style={{color: C.green, fontWeight: 600}}>{t('environment')}</strong>
            {t('descMid2')}
            <strong style={{color: C.orange, fontWeight: 600}}>{t('preparedness')}</strong>
            {t('descPost')}
          </p>

          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <a href="#projekty" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 32px', borderRadius: 100,
              background: C.orange, color: C.cream,
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
              textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>{t('ctaProjects')}</a>
            <a href="#eventy" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 32px', borderRadius: 100,
              background: 'transparent', color: C.cream, border: `1.5px solid ${C.cream}`,
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
              textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap',
            }}>{t('ctaEvents')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
