'use client'

import {useState, useEffect} from 'react'
import {C} from './Colors'
import Logo from './Logo'
import Link from 'next/link'

const NAV_LINKS = [
  {href: '/#eventy',    label: 'Eventy'},
  {href: '/#projekty',  label: 'Projekty'},
  {href: '/#lokalni',   label: 'Lokální'},
  {href: '/lokalni/bylinkova-zahrada', label: 'Zahrádka', isLink: true},
  {href: '/#realizovane', label: 'Realizované'},
  {href: '/#programy',  label: 'Programy'},
  {href: '/#o-nas',     label: 'O nás'},
]

export default function Nav() {
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
              Rozšiř svůj obzor
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
          <a href="/#kontakt" style={{
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
          }}>Kontakt ↗</a>
        </div>

        {/* Hamburger button */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
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
        <a href="/#kontakt" onClick={() => setMenuOpen(false)} style={{
          display:'inline-flex',alignItems:'center',gap:12,marginTop:32,
          padding:'18px 36px',borderRadius:100,background:C.orange,
          color:C.cream,fontSize:16,fontWeight:800,letterSpacing:'0.08em',
          textDecoration:'none',textTransform:'uppercase',alignSelf:'flex-start',
        }}>Kontakt ↗</a>
      </div>
    </>
  )
}
