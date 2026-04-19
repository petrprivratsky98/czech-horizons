'use client'

import {C} from './Colors'

export default function Compass({scrollY = 0, mouseX = 0, mouseY = 0}) {
  const starRay = (angle, length, width) => {
    return (
      <g transform={`rotate(${angle} 250 250)`}>
        <polygon points={`250,${250 - length} ${250 - width},250 250,${250 + length * 0.1} ${250 + width},250`} />
      </g>
    )
  }

  return (
    <svg style={{
      width: '100%', height: '100%',
      overflow: 'visible',
      transform: `rotate(${scrollY * 0.06}deg) translate(${mouseX * 0.005}px, ${mouseY * 0.005}px)`,
      transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
    }} viewBox="0 0 500 500">
      <defs>
        <radialGradient id="compassGlow">
          <stop offset="0%" stopColor={C.cream} stopOpacity="0.4" />
          <stop offset="60%" stopColor={C.cream} stopOpacity="0.08" />
          <stop offset="100%" stopColor={C.cream} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={C.orange} />
          <stop offset="33%" stopColor={C.yellow} />
          <stop offset="66%" stopColor={C.green} />
          <stop offset="100%" stopColor={C.teal} />
        </linearGradient>
      </defs>

      {/* Atmospheric glow */}
      <circle cx="250" cy="250" r="240" fill="url(#compassGlow)" />

      {/* Rings */}
      <circle cx="250" cy="250" r="230" fill="none" stroke="url(#ringGrad)" strokeWidth="2" opacity="0.85" />
      <circle cx="250" cy="250" r="218" fill="none" stroke={C.cream} strokeWidth="0.5" opacity="0.3" />
      <circle cx="250" cy="250" r="195" fill="none" stroke={C.cream} strokeWidth="0.4" opacity="0.2" />

      {/* Degree tick marks */}
      {Array.from({length: 36}).map((_, i) => {
        const angle = (i * 10 - 90) * Math.PI / 180
        const isMajor = i % 9 === 0
        const innerR = isMajor ? 208 : 215
        const outerR = 228
        const round = (n) => Math.round(n * 100) / 100
        return (
          <line key={`tick-${i}`}
            x1={round(250 + innerR * Math.cos(angle))}
            y1={round(250 + innerR * Math.sin(angle))}
            x2={round(250 + outerR * Math.cos(angle))}
            y2={round(250 + outerR * Math.sin(angle))}
            stroke={C.cream}
            strokeWidth={isMajor ? 2.5 : 1}
            opacity={isMajor ? 0.8 : 0.35}
          />
        )
      })}

    {/* Dots on diagonals */}
      {[45, 135, 225, 315].map((a, i) => {
        const rad = (a - 90) * Math.PI / 180
        const round = (n) => Math.round(n * 100) / 100
        return (
          <circle key={i}
            cx={round(250 + 165 * Math.cos(rad))}
            cy={round(250 + 165 * Math.sin(rad))}
            r="4"
            fill={i % 2 === 0 ? C.orange : C.teal}
            opacity="0.6" />
        )
      })}

      {/* Smallest rays */}
      <g fill={C.teal} opacity="0.45">
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) =>
          <g key={i}>{starRay(angle, 85, 5)}</g>
        )}
      </g>

      {/* Intercardinal rays */}
      <g fill={C.green} opacity="0.85">
        {[45, 135, 225, 315].map((angle, i) =>
          <g key={i}>{starRay(angle, 135, 11)}</g>
        )}
      </g>

      {/* Cardinal main rays */}
      <g>
        <g fill={C.orange} opacity="0.95">{starRay(0, 185, 17)}</g>
        <g fill={C.yellow} opacity="0.95">{starRay(90, 185, 17)}</g>
        <g fill={C.teal} opacity="0.95">{starRay(180, 185, 17)}</g>
        <g fill={C.green} opacity="0.95">{starRay(270, 185, 17)}</g>
      </g>

      {/* Inner highlights */}
      <g opacity="0.6">
        <g fill={C.yellow}>{starRay(0, 160, 7)}</g>
        <g fill={C.orange}>{starRay(90, 160, 7)}</g>
        <g fill={C.green}>{starRay(180, 160, 7)}</g>
        <g fill={C.teal}>{starRay(270, 160, 7)}</g>
      </g>

      {/* Cardinal labels — bez pozadí, jen tučné s text shadow */}
      {[
        {l: 'N', x: 250, y: -5, color: C.orange},
        {l: 'E', x: 505, y: 258, color: C.yellow},
        {l: 'S', x: 250, y: 520, color: C.teal},
        {l: 'W', x: -5, y: 258, color: C.green},
      ].map(({l, x, y, color}) => (
        <g key={l} transform={`rotate(${-scrollY * 0.06}, ${x}, ${y - 8})`}>
          <text x={x} y={y}
            textAnchor="middle"
            fontFamily="var(--font-poppins), sans-serif"
            fontSize="32"
            fontWeight="800"
            fill={color}
            letterSpacing="0.05em"
            style={{filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.6))'}}>{l}</text>
        </g>
      ))}

    {/* Jemná krémová záře za logem — žádný tvrdý okraj */}
      <circle cx="250" cy="250" r="80" fill={C.cream} opacity="0.25" style={{filter: 'blur(20px)'}} />
      <circle cx="250" cy="250" r="60" fill={C.cream} opacity="0.3" style={{filter: 'blur(15px)'}} />

      {/* Logo counter-rotating */}
      <g transform={`translate(250, 250) rotate(${-scrollY * 0.06})`}>
        <image href="/logo.png" x="-60" y="-60" width="120" height="120" preserveAspectRatio="xMidYMid meet" />
      </g>

      {/* Orbiting decorative dots */}
      <circle cx="250" cy="15" r="5" fill={C.orange}>
        <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="25s" repeatCount="indefinite" />
      </circle>
      <circle cx="250" cy="485" r="4" fill={C.teal}>
        <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="-360 250 250" dur="35s" repeatCount="indefinite" />
      </circle>
      <circle cx="15" cy="250" r="4.5" fill={C.yellow}>
        <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="40s" repeatCount="indefinite" />
      </circle>
      <circle cx="485" cy="250" r="4.5" fill={C.green}>
        <animateTransform attributeName="transform" type="rotate" from="0 250 250" to="-360 250 250" dur="45s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}