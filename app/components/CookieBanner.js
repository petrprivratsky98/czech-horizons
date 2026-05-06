'use client'

import {useState} from 'react'
import {useTranslations} from 'next-intl'
import {C} from './Colors'
import {Link} from '@/i18n/navigation'

export const COOKIE_KEY = 'ch_cookie_consent'

export default function CookieBanner() {
  const t = useTranslations('cookies')
  // Component is loaded with ssr:false so localStorage is always available here
  const [consent, setConsent] = useState(() => localStorage.getItem(COOKIE_KEY))

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'all')
    setConsent('all')
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {analytics_storage: 'granted'})
    }
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'essential')
    setConsent('essential')
  }

  if (consent) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9000,
      padding: 'clamp(16px, 2vw, 24px) clamp(24px, 5vw, 80px)',
      background: C.dark,
      borderTop: `1.5px solid ${C.cream}15`,
      backdropFilter: 'blur(12px)',
      display: 'flex', alignItems: 'center', gap: 'clamp(16px, 2vw, 32px)',
      flexWrap: 'wrap',
      boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
      animation: 'cookieSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
    }}>
      <style>{`
        @keyframes cookieSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>

      <p style={{
        flex: 1, minWidth: 220,
        fontSize: 'clamp(13px, 1vw, 15px)', lineHeight: 1.6,
        color: `${C.cream}bb`, margin: 0,
      }}>
        {t('text')}{' '}
        <Link href="/zasady" style={{color: `${C.cream}66`, textDecoration: 'underline', fontSize: 'inherit'}}>
          {t('privacy')}
        </Link>
      </p>

      <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', flexShrink: 0}}>
        <button onClick={decline} style={{
          padding: '10px 20px', borderRadius: 100,
          border: `1.5px solid ${C.cream}30`, background: 'transparent',
          color: `${C.cream}99`, fontSize: 13, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          cursor: 'pointer', fontFamily: 'var(--font-poppins), sans-serif',
          transition: 'border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = `${C.cream}66`; e.currentTarget.style.color = C.cream }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = `${C.cream}30`; e.currentTarget.style.color = `${C.cream}99` }}
        >
          {t('decline')}
        </button>
        <button onClick={accept} style={{
          padding: '10px 24px', borderRadius: 100,
          border: 'none', background: C.orange,
          color: C.cream, fontSize: 13, fontWeight: 800,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          cursor: 'pointer', fontFamily: 'var(--font-poppins), sans-serif',
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
        >
          {t('accept')}
        </button>
      </div>
    </div>
  )
}
