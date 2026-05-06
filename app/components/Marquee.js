'use client'

import {useTranslations} from 'next-intl'
import {C} from './Colors'

export default function Marquee() {
  const t = useTranslations('marquee')
  const cities = t.raw('cities')

  return (
    <section style={{
      background: C.dark, color: C.cream,
      padding: '22px 0', overflow: 'hidden', position: 'relative', zIndex: 4,
    }}>
      <div style={{
        display: 'flex', gap: 40, whiteSpace: 'nowrap',
        animation: 'marquee 90s linear infinite',
        fontSize: 28, fontWeight: 300, fontStyle: 'italic',
      }}>
        {[0, 1].map((r) => (
          <div key={r} style={{display: 'flex', gap: 40}}>
            {cities.map((city, i) => (
              <span key={i} style={{display: 'inline-flex', alignItems: 'center', gap: 40}}>
                {city}
                <span style={{
                  color: i % 4 === 0 ? C.orange : i % 4 === 1 ? C.green : i % 4 === 2 ? C.yellow : C.teal,
                  fontSize: 16,
                }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
