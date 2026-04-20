'use client'

import {useEffect, useState} from 'react'
import {C} from './Colors'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, {passive: true})
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Zpět nahoru"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: C.orange,
        color: C.cream,
        border: 'none',
        cursor: 'pointer',
        fontSize: 26,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        zIndex: 900,
        fontFamily: 'var(--font-poppins), sans-serif',
      }}
    >
      ↑
    </button>
  )
}