'use client'

import {useEffect, useRef, useState} from 'react'

export default function AnimateIn({children, delay = 0, direction = 'up'}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {threshold: 0.1, rootMargin: '0px 0px -80px 0px'}
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const translations = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(40px)',
    right: 'translateX(-40px)',
    none: 'none',
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : translations[direction],
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}