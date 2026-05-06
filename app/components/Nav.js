'use client'

import {useState, useEffect} from 'react'
import {useTranslations, useLocale} from 'next-intl'
import Image from 'next/image'
import {C} from './Colors'
import Logo from './Logo'
import {Link, usePathname, useRouter} from '@/i18n/navigation'

export default function Nav() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const NAV_LINKS = [
    {href: '/#eventy',    label: t('events')},
    {href: '/#projekty',  label: t('projects')},
    {href: '/#lokalni',   label: t('local')},
    {href: '/lokalni/bylinkova-zahrada', label: t('garden'), isLink: true},
    {href: '/#realizovane', label: t('realized')},
    {href: '/#programy',  label: t('programs')},
    {href: '/#o-nas',     label: t('about')},
  ]

  const linkStyle = {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: scrolled ? C.ink : C.cream,
    textDecoration: 'none',
    cursor: 'pointer',
    textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.4)',
    transition: 'color 0.3s',
  }

  const otherLocale = locale === 'cs' ? 'en' : 'cs'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '20px clamp(24px, 5vw, 80px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        background: scrolled ? `${C.cream}ee` : menuOpen ? `${C.dark}ee` : 'transparent',
        borderBottom: scrolled ? `1px solid ${C.dark}15` : '1px solid transparent',
        transition: 'all 0.3s',
      }}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{
          display: 'flex', alignItems: 'center', gap: 20,
          textDecoration: 'none', color: 'inherit',
        }}>
          <Logo size={72} animated />
          <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1.1}}>
            <span style={{
              fontSize: 'clamp(22px, 1.8vw, 32px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: scrolled ? C.ink : C.cream,
              textShadow: scrolled ? 'none' : '0 2px 12px rgba(0,0,0,0.4)',
              transition: 'color 0.3s',
            }}>Czech Horizons</span>
            <span style={{
              fontSize: 'clamp(11px, 0.85vw, 13px)',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: scrolled ? C.ink : C.cream,
              opacity: 0.85,
              marginTop: 4,
              textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.4)',
              transition: 'color 0.3s',
            }}>
              {t('tagline')}
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-desktop">
          {NAV_LINKS.map(({href, label, isLink}) =>
            isLink
              ? <Link key={href} href={href} style={linkStyle}>{label}</Link>
              : <a key={href} href={href} style={linkStyle}>{label}</a>
          )}
          <a href="https://www.instagram.com/czech.horizons/" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center',
            opacity: 0.85, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '1' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '0.85' }}
          >
            <Image src="/ig.png" alt="Instagram" width={30} height={30} style={{
              borderRadius: 8, objectFit: 'cover',
              filter: scrolled ? 'none' : 'brightness(0) invert(1)',
              transition: 'filter 0.3s',
            }} />
          </a>
          <button
            onClick={() => router.replace(pathname, {locale: otherLocale})}
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: scrolled ? C.ink : C.cream,
              background: 'transparent',
              border: `1.5px solid ${scrolled ? C.ink : C.cream}`,
              padding: '8px 16px',
              borderRadius: 100,
              cursor: 'pointer',
              transition: 'all 0.3s',
              opacity: 0.7,
            }}
          >{t('langSwitch')}</button>
          <Link href="/#kontakt" style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '12px 24px',
            borderRadius: 100,
            background: C.orange,
            color: C.cream,
            textDecoration: 'none',
            cursor: 'pointer',
            boxShadow: scrolled ? 'none' : '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'all 0.3s',
          }}>{t('contact')} ↗</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
          style={{zIndex: 501}}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <rect y="0"  width="28" height="2.5" rx="1.25" fill={menuOpen ? C.cream : (scrolled ? C.ink : C.cream)}
              style={{transition:'all 0.3s', transformOrigin:'14px 1.25px',
                transform: menuOpen ? 'rotate(45deg) translate(0,8px)' : 'none'}}/>
            <rect y="8.75" width="28" height="2.5" rx="1.25" fill={menuOpen ? C.cream : (scrolled ? C.ink : C.cream)}
              style={{transition:'all 0.3s', opacity: menuOpen ? 0 : 1}}/>
            <rect y="17.5" width="28" height="2.5" rx="1.25" fill={menuOpen ? C.cream : (scrolled ? C.ink : C.cream)}
              style={{transition:'all 0.3s', transformOrigin:'14px 18.75px',
                transform: menuOpen ? 'rotate(-45deg) translate(0,-8px)' : 'none'}}/>
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}>
        <div style={{display:'flex',flexDirection:'column',gap:4,flex:1}}>
          {NAV_LINKS.map(({href, label, isLink}) =>
            isLink
              ? <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                  fontSize:'clamp(30px,8vw,52px)',fontWeight:800,color:C.cream,
                  textDecoration:'none',lineHeight:1.3,letterSpacing:'-0.02em',
                  padding:'8px 0',borderBottom:`1px solid ${C.cream}12`,
                }}>{label}</Link>
              : <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                  fontSize:'clamp(30px,8vw,52px)',fontWeight:800,color:C.cream,
                  textDecoration:'none',lineHeight:1.3,letterSpacing:'-0.02em',
                  padding:'8px 0',borderBottom:`1px solid ${C.cream}12`,
                }}>{label}</a>
          )}
        </div>
        <div style={{display:'flex', gap:16, marginTop:32, alignItems:'center', flexWrap:'wrap'}}>
          <Link href="/#kontakt" onClick={() => setMenuOpen(false)} style={{
            display:'inline-flex',alignItems:'center',gap:12,
            padding:'18px 36px',borderRadius:100,background:C.orange,
            color:C.cream,fontSize:16,fontWeight:800,letterSpacing:'0.08em',
            textDecoration:'none',textTransform:'uppercase',
          }}>{t('contact')} ↗</Link>
          <button
            onClick={() => { setMenuOpen(false); router.replace(pathname, {locale: otherLocale}) }}
            style={{
              padding:'18px 28px',borderRadius:100,
              background:'transparent', border:`2px solid ${C.cream}40`,
              color:C.cream,fontSize:16,fontWeight:800,letterSpacing:'0.08em',
              textTransform:'uppercase',cursor:'pointer',
            }}
          >{t('langSwitch')}</button>
          <a href="https://www.instagram.com/czech.horizons/" target="_blank" rel="noopener noreferrer">
            <Image src="/ig.png" alt="Instagram" width={44} height={44} style={{borderRadius: 12, objectFit: 'cover'}} />
          </a>
        </div>
      </div>
    </>
  )
}
