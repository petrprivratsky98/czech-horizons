'use client'

import {C} from './Colors'

export default function Mountains({scrollY = 0, opacity = 1}) {
  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      opacity,
    }}>
      {/* Far soft blobs for atmosphere */}
      <div style={{
        position: 'absolute', top: '10%', left: '-5%', width: '55%', height: '55%',
        background: `radial-gradient(circle, ${C.yellow}18 0%, transparent 60%)`,
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', top: '30%', right: '-10%', width: '60%', height: '65%',
        background: `radial-gradient(circle, ${C.orange}15 0%, transparent 55%)`,
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '10%', width: '70%', height: '60%',
        background: `radial-gradient(circle, ${C.teal}12 0%, transparent 60%)`,
        filter: 'blur(80px)',
      }} />

      {/* Topographic contour lines (very subtle) */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        transform: `translateY(${scrollY * 0.08}px)`,
      }} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={C.dark} strokeWidth="0.4" opacity="0.12" strokeLinejoin="round" strokeLinecap="round">
          <path d="M0,300 Q 200,280 400,300 T 800,290 T 1200,310 T 1400,300" />
          <path d="M0,340 Q 200,320 400,340 T 800,330 T 1200,350 T 1400,340" />
          <path d="M0,380 Q 200,360 400,380 T 800,370 T 1200,390 T 1400,380" />
        </g>
      </svg>

      {/* Organic layered hills (soft, like watercolor) */}
      <svg style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '65%',
        transform: `translateY(${scrollY * 0.15}px)`,
      }} viewBox="0 0 1400 600" preserveAspectRatio="xMidYMax slice">
        {/* Farthest hill — soft teal */}
        <path d="M0,600 L0,340 Q 200,280 400,310 Q 600,340 800,290 Q 1000,250 1200,300 Q 1300,320 1400,290 L1400,600 Z"
          fill={C.teal} opacity="0.08" />
        {/* Second hill — soft green */}
        <path d="M0,600 L0,420 Q 180,370 360,400 Q 540,430 720,380 Q 900,340 1080,390 Q 1260,420 1400,390 L1400,600 Z"
          fill={C.green} opacity="0.12" />
      </svg>

      {/* Subtle horizontal line for horizon feel */}
      <div style={{
        position: 'absolute', left: '10%', right: '10%', top: '62%',
        height: 1, background: `linear-gradient(90deg, transparent, ${C.dark}22, transparent)`,
      }} />

      {/* Small decorative peak marker dots */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
      }} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        <g opacity="0.25">
          <circle cx="220" cy="340" r="2.5" fill={C.orange} />
          <circle cx="540" cy="310" r="2" fill={C.orange} />
          <circle cx="920" cy="290" r="2.5" fill={C.green} />
          <circle cx="1180" cy="320" r="2" fill={C.teal} />
        </g>
      </svg>
    </div>
  )
}