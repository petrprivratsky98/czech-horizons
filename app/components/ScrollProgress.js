'use client'

import {useEffect, useState} from 'react'
import {C} from './Colors'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      const p = total > 0 ? (current / total) * 100 : 0
      setProgress(p)
    }
    window.addEventListener('scroll', onScroll, {passive: true})
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 4, zIndex: 9999, pointerEvents: 'none',
      background: `${C.dark}10`,
    }}>
      <div style={{
        width: `${progress}%`, height: '100%',
        background: `linear-gradient(90deg, ${C.orange}, ${C.yellow}, ${C.green}, ${C.teal})`,
        transition: 'width 0.15s ease-out',
        boxShadow: `0 0 12px ${C.orange}bb`,
      }} />
    </div>
  )
}