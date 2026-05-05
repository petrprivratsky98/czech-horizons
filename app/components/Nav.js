'use client'

import {useState, useEffect} from 'react'
import {C} from './Colors'
import Logo from './Logo'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      padding: '20px clamp(24px, 5vw, 80px)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      background: scrolled ? `${C.cream}ee` : 'transparent',
      borderBottom: scrolled ? `1px solid ${C.dark}15` : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <Link href="/" style={{
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

      <div style={{display: 'flex', gap: 32, alignItems: 'center'}}>
        <a href="/#eventy" style={linkStyle}>Eventy</a>
        <a href="/#projekty" style={linkStyle}>Projekty</a>
        <a href="/#lokalni" style={linkStyle}>Lokální</a>
        <Link href="/lokalni/bylinkova-zahrada" style={linkStyle}>Zahrádka</Link>
        <a href="/#realizovane" style={linkStyle}>Realizované</a>
        <a href="/#programy" style={linkStyle}>Programy</a>
        <a href="/#o-nas" style={linkStyle}>O nás</a>
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
    </nav>
  )
}