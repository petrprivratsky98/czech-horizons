'use client'
import {useState, useEffect} from 'react'
import {C} from '@/app/components/Colors'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import {TRUHLIKY} from './data'

// ─── Herb shape classifier ─────────────────────────────────────────────────────

function herbShape(nazev) {
  const n = nazev.toLowerCase()
  if (/levandule/.test(n)) return 'lavender'
  if (/rozmarýn/.test(n)) return 'rosemary'
  if (/šalvěj/.test(n)) return 'sage'
  if (/petržel|kerblík|koriandr|mařinka/.test(n)) return 'parsley'
  if (/kopr|fenykl/.test(n)) return 'fennel'
  if (/máta|meduňka/.test(n)) return 'mint'
  if (/tymián|mateřídouška|santolína/.test(n)) return 'thyme'
  if (/pažitka/.test(n)) return 'chives'
  if (/netřesk/.test(n)) return 'rosette'
  if (/libeček|celer/.test(n)) return 'lovage'
  if (/šťovík|třezalka|ostropestřec|angínovník/.test(n)) return 'upright'
  if (/yzop|šanta/.test(n)) return 'hyssop'
  if (/pelyněk/.test(n)) return 'artemisia'
  return 'bushy'
}

// ─── Herb SVG shapes ───────────────────────────────────────────────────────────

function HerbShape({type, color, h = 36, seed = 0}) {
  const lean = ((seed % 5) - 2) * 1.3
  const sx = 10 + lean * 0.3

  if (type === 'lavender') return (
    <svg width="20" height={h} viewBox={`0 0 20 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      {[0.65, 0.5].map((y, i) => (
        <g key={i}>
          <ellipse cx={sx-3} cy={h*y} rx="2.5" ry="4.5" fill={`${color}55`} transform={`rotate(-28 ${sx-3} ${h*y})`}/>
          <ellipse cx={sx+3} cy={h*y} rx="2.5" ry="4.5" fill={`${color}55`} transform={`rotate(28 ${sx+3} ${h*y})`}/>
        </g>
      ))}
      <line x1="10" y1={h} x2={sx} y2={h*0.28} stroke={`${color}99`} strokeWidth="1.6" strokeLinecap="round"/>
      <rect x={sx-2.5} y={h*0.07} width="5" height={h*0.23} rx="2.5" fill={color} opacity="0.92"/>
      {[h*0.12, h*0.2, h*0.27].map((y, i) => (
        <g key={i}>
          <circle cx={sx-3.5} cy={y} r="1.3" fill={color} opacity={0.75-i*0.1}/>
          <circle cx={sx+3.5} cy={y} r="1.3" fill={color} opacity={0.75-i*0.1}/>
        </g>
      ))}
    </svg>
  )

  if (type === 'rosemary') return (
    <svg width="20" height={h} viewBox={`0 0 20 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="10" y1={h} x2={sx} y2={h*0.1} stroke={`${color}aa`} strokeWidth="2" strokeLinecap="round"/>
      {[0.22, 0.36, 0.5, 0.64, 0.78].map((y, i) => (
        <g key={i}>
          <line x1={sx} y1={h*y} x2={sx-6-(i%2)*2} y2={h*y-5} stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.78"/>
          <line x1={sx} y1={h*y} x2={sx+6+(i%2)*2} y2={h*y-5} stroke={color} strokeWidth="1.3" strokeLinecap="round" opacity="0.78"/>
          <circle cx={sx-7-(i%2)*2} cy={h*y-5} r="1.1" fill={color} opacity="0.6"/>
          <circle cx={sx+7+(i%2)*2} cy={h*y-5} r="1.1" fill={color} opacity="0.6"/>
        </g>
      ))}
    </svg>
  )

  if (type === 'sage') return (
    <svg width="22" height={h} viewBox={`0 0 22 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="11" y1={h} x2={sx} y2={h*0.52} stroke={`${color}88`} strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx={sx} cy={h*0.34} rx={8.5} ry={h*0.34} fill={color} opacity="0.7"/>
      <ellipse cx={sx-5} cy={h*0.5} rx="5.5" ry={h*0.2} fill={color} opacity="0.52"/>
      <ellipse cx={sx+5} cy={h*0.5} rx="5.5" ry={h*0.2} fill={color} opacity="0.52"/>
      <ellipse cx={sx} cy={h*0.2} rx="4.5" ry={h*0.13} fill={`${color}cc`} opacity="0.4"/>
    </svg>
  )

  if (type === 'parsley') return (
    <svg width="18" height={h} viewBox={`0 0 18 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="9" y1={h} x2={sx} y2={h*0.08} stroke={`${color}77`} strokeWidth="1.8" strokeLinecap="round"/>
      {[0.2, 0.36, 0.52, 0.68].map((y, i) => (
        <g key={i}>
          <path d={`M${sx},${h*y} Q${sx-5},${h*y-8} ${sx-8},${h*y-13}`} stroke={color} strokeWidth="1.4" fill="none" opacity="0.82" strokeLinecap="round"/>
          <path d={`M${sx},${h*y} Q${sx+5},${h*y-8} ${sx+8},${h*y-13}`} stroke={color} strokeWidth="1.4" fill="none" opacity="0.82" strokeLinecap="round"/>
          <circle cx={sx-8} cy={h*y-13} r="2.2" fill={color} opacity="0.65"/>
          <circle cx={sx+8} cy={h*y-13} r="2.2" fill={color} opacity="0.65"/>
        </g>
      ))}
    </svg>
  )

  if (type === 'fennel') return (
    <svg width="18" height={h} viewBox={`0 0 18 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="9" y1={h} x2={sx} y2={h*0.05} stroke={`${color}88`} strokeWidth="2" strokeLinecap="round"/>
      {[0.15, 0.28, 0.42, 0.56, 0.7].map((y, i) => (
        <g key={i}>
          <path d={`M${sx},${h*y} Q${sx-5},${h*y-6} ${sx-8},${h*y-10}`} stroke={color} strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
          <path d={`M${sx},${h*y} Q${sx+5},${h*y-6} ${sx+8},${h*y-10}`} stroke={color} strokeWidth="1.2" fill="none" opacity="0.75" strokeLinecap="round"/>
        </g>
      ))}
      {[0,60,120,180,240,300].map((a, i) => (
        <circle key={i} cx={sx + Math.cos(a*Math.PI/180)*4} cy={h*0.06 + Math.sin(a*Math.PI/180)*2.5} r="1.2" fill={`${color}ee`} opacity="0.82"/>
      ))}
    </svg>
  )

  if (type === 'mint') return (
    <svg width="22" height={h} viewBox={`0 0 22 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="11" y1={h} x2={sx} y2={h*0.44} stroke={`${color}88`} strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx={sx} cy={h*0.28} rx="7.5" ry={h*0.28} fill={color} opacity="0.68"/>
      <ellipse cx={sx-5} cy={h*0.44} rx="5.5" ry={h*0.22} fill={color} opacity="0.5"/>
      <ellipse cx={sx+5} cy={h*0.44} rx="5.5" ry={h*0.22} fill={color} opacity="0.5"/>
      <ellipse cx={sx-2} cy={h*0.14} rx="3.5" ry={h*0.13} fill={`${color}bb`} opacity="0.5"/>
      <ellipse cx={sx+2} cy={h*0.14} rx="3.5" ry={h*0.13} fill={`${color}bb`} opacity="0.5"/>
    </svg>
  )

  if (type === 'thyme') return (
    <svg width="28" height={Math.max(1, Math.round(h*0.55))} viewBox={`0 0 28 ${Math.max(1,Math.round(h*0.55))}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <ellipse cx="14" cy={h*0.36} rx={12.5} ry={h*0.27} fill={color} opacity="0.52"/>
      <ellipse cx="7" cy={h*0.48} rx="7.5" ry={h*0.18} fill={color} opacity="0.38"/>
      <ellipse cx="21" cy={h*0.48} rx="7.5" ry={h*0.18} fill={color} opacity="0.38"/>
      {[4,7,10,13,17,20,24].map((x, i) => (
        <circle key={i} cx={x} cy={h*0.3-(i%2)*5} r="2.5" fill={color} opacity="0.78"/>
      ))}
    </svg>
  )

  if (type === 'chives') return (
    <svg width="20" height={h} viewBox={`0 0 20 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      {[-7,-3.5,0,3.5,7].map((x, i) => (
        <path key={i}
          d={`M${10+x},${h} Q${10+x+x*0.2+lean*0.3},${h*0.55} ${10+x+x*0.35+lean*0.4},${h*(0.06+i%3*0.03)}`}
          stroke={color} strokeWidth="2.2" fill="none" opacity={0.65+i*0.04} strokeLinecap="round"/>
      ))}
    </svg>
  )

  if (type === 'rosette') {
    const rh = Math.max(1, Math.round(h*0.45))
    return (
      <svg width="26" height={rh} viewBox={`0 0 26 ${rh}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
        {[0,40,80,120,160,200,240,280,320].map((a, i) => (
          <ellipse key={i} cx={13+Math.cos(a*Math.PI/180)*8} cy={rh*0.5+Math.sin(a*Math.PI/180)*5}
            rx="5" ry="3.5" fill={color} opacity="0.62"
            transform={`rotate(${a} ${13+Math.cos(a*Math.PI/180)*8} ${rh*0.5+Math.sin(a*Math.PI/180)*5})`}/>
        ))}
        <circle cx="13" cy={rh*0.5} r="4.5" fill={`${color}dd`} opacity="0.85"/>
      </svg>
    )
  }

  if (type === 'lovage') return (
    <svg width="22" height={h} viewBox={`0 0 22 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="11" y1={h} x2={sx} y2={h*0.28} stroke={`${color}aa`} strokeWidth="2.2" strokeLinecap="round"/>
      <path d={`M${sx},${h*0.28} Q${sx-8},${h*0.18} ${sx-11},${h*0.08}`} stroke={color} strokeWidth="1.5" fill="none" opacity="0.82"/>
      <path d={`M${sx},${h*0.28} Q${sx+8},${h*0.18} ${sx+11},${h*0.08}`} stroke={color} strokeWidth="1.5" fill="none" opacity="0.82"/>
      <ellipse cx={sx-11} cy={h*0.08} rx="5.5" ry="7.5" fill={color} opacity="0.72"/>
      <ellipse cx={sx+11} cy={h*0.08} rx="5.5" ry="7.5" fill={color} opacity="0.72"/>
      <path d={`M${sx},${h*0.5} Q${sx-6},${h*0.4} ${sx-8},${h*0.34}`} stroke={color} strokeWidth="1.3" fill="none" opacity="0.65"/>
      <path d={`M${sx},${h*0.5} Q${sx+6},${h*0.4} ${sx+8},${h*0.34}`} stroke={color} strokeWidth="1.3" fill="none" opacity="0.65"/>
      <ellipse cx={sx-8} cy={h*0.34} rx="4" ry="5.5" fill={color} opacity="0.52"/>
      <ellipse cx={sx+8} cy={h*0.34} rx="4" ry="5.5" fill={color} opacity="0.52"/>
    </svg>
  )

  if (type === 'upright') return (
    <svg width="18" height={h} viewBox={`0 0 18 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="9" y1={h} x2={sx} y2={h*0.15} stroke={`${color}99`} strokeWidth="2" strokeLinecap="round"/>
      {[0.2, 0.38, 0.55, 0.72].map((y, i) => (
        <g key={i}>
          <ellipse cx={sx-4} cy={h*y} rx="4" ry="5.5" fill={color} opacity="0.6"
            transform={`rotate(-20 ${sx-4} ${h*y})`}/>
          <ellipse cx={sx+4} cy={h*y} rx="4" ry="5.5" fill={color} opacity="0.6"
            transform={`rotate(20 ${sx+4} ${h*y})`}/>
        </g>
      ))}
    </svg>
  )

  if (type === 'hyssop') return (
    <svg width="18" height={h} viewBox={`0 0 18 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="9" y1={h} x2={sx} y2={h*0.26} stroke={`${color}99`} strokeWidth="1.6" strokeLinecap="round"/>
      <rect x={sx-2.2} y={h*0.08} width="4.5" height={h*0.2} rx="2.2" fill={color} opacity="0.9"/>
      <rect x={sx-5} y={h*0.2} width="3" height={h*0.12} rx="1.5" fill={color} opacity="0.58"
        transform={`rotate(-15 ${sx-5} ${h*0.2})`}/>
      <rect x={sx+5} y={h*0.2} width="3" height={h*0.12} rx="1.5" fill={color} opacity="0.58"
        transform={`rotate(15 ${sx+5} ${h*0.2})`}/>
      {[0.44, 0.6, 0.75].map((y, i) => (
        <g key={i}>
          <ellipse cx={sx-3} cy={h*y} rx="2.5" ry="3.5" fill={`${color}66`} transform={`rotate(-20 ${sx-3} ${h*y})`}/>
          <ellipse cx={sx+3} cy={h*y} rx="2.5" ry="3.5" fill={`${color}66`} transform={`rotate(20 ${sx+3} ${h*y})`}/>
        </g>
      ))}
    </svg>
  )

  if (type === 'artemisia') return (
    <svg width="18" height={h} viewBox={`0 0 18 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="9" y1={h} x2={sx} y2={h*0.14} stroke={`${color}88`} strokeWidth="1.8" strokeLinecap="round"/>
      {[0.2, 0.32, 0.44, 0.58, 0.72].map((y, i) => (
        <g key={i}>
          <path d={`M${sx},${h*y} Q${sx-4},${h*y-6} ${sx-6},${h*y-9}`} stroke={`${color}99`} strokeWidth="1.2" fill="none" opacity="0.7" strokeLinecap="round"/>
          <path d={`M${sx},${h*y} Q${sx+4},${h*y-6} ${sx+6},${h*y-9}`} stroke={`${color}99`} strokeWidth="1.2" fill="none" opacity="0.7" strokeLinecap="round"/>
        </g>
      ))}
      {[0.12, 0.18, 0.24].map((y, i) => (
        <circle key={i} cx={sx+(i-1)*4} cy={h*y} r="1.2" fill={color} opacity="0.62"/>
      ))}
    </svg>
  )

  return (
    <svg width="22" height={h} viewBox={`0 0 22 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="11" y1={h} x2={sx} y2={h*0.5} stroke={`${color}88`} strokeWidth="1.8" strokeLinecap="round"/>
      <ellipse cx={sx} cy={h*0.32} rx={8} ry={h*0.32} fill={color} opacity="0.68"/>
      <ellipse cx={sx-5} cy={h*0.5} rx="5.5" ry={h*0.2} fill={color} opacity="0.5"/>
      <ellipse cx={sx+5} cy={h*0.5} rx="5.5" ry={h*0.2} fill={color} opacity="0.5"/>
    </svg>
  )
}

// ─── SVG property pictograms (28px) ───────────────────────────────────────────

function IconSun({text}) {
  const t = (text || '').toLowerCase()
  const isShade = /^stín/.test(t)
  const isPartial = /polostín/.test(t)

  if (isShade) return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="18.5" rx="10" ry="5.5" fill="#94afc0" opacity="0.8"/>
      <ellipse cx="10" cy="16" rx="5.5" ry="5" fill="#a8c2d0" opacity="0.88"/>
      <ellipse cx="17.5" cy="15" rx="5" ry="4.5" fill="#a8c2d0" opacity="0.88"/>
      <ellipse cx="14" cy="13" rx="5.5" ry="5" fill="#c4d8e4" opacity="0.85"/>
    </svg>
  )

  if (isPartial) return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="5.5" fill="#f2b63a" opacity="0.16"/>
      <path d="M14,8.5 A5.5,5.5 0 0,0 14,19.5 Z" fill="#f2b63a" opacity="0.92"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => {
        const cos = Math.cos(a*Math.PI/180), sin = Math.sin(a*Math.PI/180)
        return <line key={i} x1={14+cos*7.5} y1={14+sin*7.5} x2={14+cos*9.8} y2={14+sin*9.8}
          stroke="#f2b63a" strokeWidth="2" strokeLinecap="round"
          opacity={cos < -0.1 ? 0.9 : 0.12}/>
      })}
    </svg>
  )

  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="5.5" fill="#f2b63a"/>
      {[0,45,90,135,180,225,270,315].map((a, i) => {
        const cos = Math.cos(a*Math.PI/180), sin = Math.sin(a*Math.PI/180)
        return <line key={i} x1={14+cos*7.5} y1={14+sin*7.5} x2={14+cos*9.8} y2={14+sin*9.8}
          stroke="#f2b63a" strokeWidth="2" strokeLinecap="round"/>
      })}
    </svg>
  )
}

function IconWater({text}) {
  const low = /nízká/.test(text), high = /vyšší/.test(text)
  const n = low ? 1 : high ? 3 : 2
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
      {[0,1,2].map(i => (
        <path key={i} d={`M${2.5+i*6+3},16 Q${2.5+i*6},11 ${2.5+i*6+3},8 Q${2.5+i*6+6},11 ${2.5+i*6+3},16 Z`}
          fill="#2d8a7a" opacity={i < n ? 0.85 : 0.18}/>
      ))}
    </svg>
  )
}

function IconFrost({text}) {
  const hardy = /^ano/.test(text)
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
      {hardy ? (
        [0,60,120].map((a, i) => {
          const cos = Math.cos(a*Math.PI/180), sin = Math.sin(a*Math.PI/180)
          return <g key={i}>
            <line x1={10-cos*7.5} y1={10-sin*7.5} x2={10+cos*7.5} y2={10+sin*7.5} stroke="#7dd3e8" strokeWidth="1.6" strokeLinecap="round"/>
            {[0.45,-0.45].map((f,j) => {
              const a2 = (a+90)*Math.PI/180
              return <line key={j} x1={10+cos*7.5*f} y1={10+sin*7.5*f}
                x2={10+cos*7.5*f+Math.cos(a2)*3.5} y2={10+sin*7.5*f+Math.sin(a2)*3.5}
                stroke="#7dd3e8" strokeWidth="1.2" strokeLinecap="round"/>
            })}
          </g>
        })
      ) : (
        <>
          <circle cx="10" cy="10" r="6" stroke="#e8823d" strokeWidth="1.5" opacity="0.35"/>
          <line x1="6" y1="6" x2="14" y2="14" stroke="#e8823d" strokeWidth="2" strokeLinecap="round"/>
        </>
      )}
    </svg>
  )
}

function IconBee({active}) {
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
      <ellipse cx="10" cy="12.5" rx="4.5" ry="5.5" fill={active ? '#f2b63a' : '#f2b63a28'}/>
      {active && <>
        <line x1="6.5" y1="10" x2="13.5" y2="10" stroke="#1a3d3a" strokeWidth="1" opacity="0.7"/>
        <line x1="5.8" y1="12.5" x2="14.2" y2="12.5" stroke="#1a3d3a" strokeWidth="1" opacity="0.7"/>
        <line x1="6.5" y1="15" x2="13.5" y2="15" stroke="#1a3d3a" strokeWidth="1" opacity="0.7"/>
        <path d="M5.5,9.5 Q2,6 5,5 Q6.5,7 10,8" fill="white" opacity="0.7"/>
        <path d="M14.5,9.5 Q18,6 15,5 Q13.5,7 10,8" fill="white" opacity="0.7"/>
      </>}
    </svg>
  )
}

function IconLifespan({text}) {
  const annual = /jednoletka/.test(text), biennial = /dvouletka/.test(text)
  return (
    <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
      {annual && <text x="5" y="15" fontSize="13" fontWeight="800" fill="#e8823d">1</text>}
      {biennial && <text x="4" y="15" fontSize="13" fontWeight="800" fill="#f2b63a">2</text>}
      {!annual && !biennial && <>
        <path d="M5,10 Q5,4 10,4 Q15,4 15,10 Q15,16 10,16 Q7,16 5.5,13.5" stroke="#4a9b4e" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M4.5,13.5 L5.5,13.5 L5.5,15" stroke="#4a9b4e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </>}
    </svg>
  )
}

function PropPics({herb}) {
  return (
    <div style={{display:'flex',gap:6,alignItems:'center'}}>
      <IconSun text={herb.svetlo}/>
      <IconWater text={herb.voda}/>
      <IconFrost text={herb.mrazuvzdornost}/>
      <IconBee active={herb.opylovaci}/>
      <IconLifespan text={herb.zivotnost}/>
    </div>
  )
}

// ─── Planter box (redesigned) ──────────────────────────────────────────────────

const HERB_X = [7, 17, 27, 38, 50, 62, 73, 83, 92]
const HERB_H = [44, 58, 40, 64, 50, 38, 60, 46, 54]

function PlanterBox({truhlík, index, onClick}) {
  const [hovered, setHovered] = useState(false)
  const herbs = truhlík.bylinky.slice(0, 9)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width:'100%', border:'none', padding:0, background:'none',
        cursor:'pointer', display:'flex', flexDirection:'column',
        transform: hovered ? 'translateY(-8px) scale(1.015)' : 'none',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{
        borderRadius:20, overflow:'hidden',
        boxShadow: hovered
          ? `0 28px 64px rgba(0,0,0,0.52), 0 0 0 2px ${truhlík.barvaHex}60`
          : '0 8px 28px rgba(0,0,0,0.36)',
        transition: 'box-shadow 0.4s',
      }}>
        {/* Soil zone */}
        <div style={{
          height:'clamp(130px,15vw,200px)',
          background:'linear-gradient(to bottom, #07120504 0%, #0b1908 25%, #0f2010 75%, #162a0f 100%)',
          position:'relative', overflow:'hidden',
        }}>
          {/* Sky tint */}
          <div style={{
            position:'absolute',top:0,left:0,right:0,height:'45%',
            background:`linear-gradient(to bottom, ${truhlík.barvaHex}0e, transparent)`,
            pointerEvents:'none',
          }}/>
          {/* Ground strip */}
          <div style={{
            position:'absolute',bottom:0,left:0,right:0,height:18,
            background:'linear-gradient(to right, #3e2008, #5a300e, #3e2008)',
            borderTop:'1px solid rgba(255,255,255,0.04)',
          }}/>
          {/* Soil pebbles */}
          <div style={{position:'absolute',bottom:6,left:0,right:0,display:'flex',justifyContent:'space-evenly',opacity:0.3,pointerEvents:'none',padding:'0 6px'}}>
            {Array.from({length:20},(_,i)=>(
              <div key={i} style={{width:i%3===0?3:2,height:i%3===0?3:2,borderRadius:'50%',background:'#8a5c28'}}/>
            ))}
          </div>
          {/* Color glow from below */}
          <div style={{
            position:'absolute',bottom:0,left:0,right:0,height:'65%',
            background:`radial-gradient(ellipse at 50% 100%, ${truhlík.barvaHex}2a, transparent 68%)`,
            pointerEvents:'none',
          }}/>
          {/* Scattered herbs */}
          {herbs.map((herb, i) => (
            <div key={i} style={{
              position:'absolute',
              bottom:16,
              left:`${HERB_X[i] ?? 50}%`,
              transform:'translateX(-50%)',
              zIndex:1,
            }}>
              <HerbShape type={herbShape(herb.nazev)} color={truhlík.barvaHex} h={HERB_H[i] ?? 44} seed={i}/>
            </div>
          ))}
        </div>

        {/* Wood panel */}
        <div style={{
          background:'linear-gradient(160deg, #c08040 0%, #9a6330 45%, #7a4e24 100%)',
          padding:'clamp(12px,1.5vw,18px) clamp(16px,2vw,24px)',
          borderTop:'3px solid #4e2e0e',
          display:'flex', alignItems:'center', gap:16,
        }}>
          <div style={{
            fontSize:'clamp(28px,3.2vw,48px)', fontWeight:800, lineHeight:1,
            color:truhlík.barvaHex, flexShrink:0, fontFamily:'monospace',
            filter:'brightness(1.4)',
            textShadow:`0 2px 14px ${truhlík.barvaHex}55`,
            transition:'transform 0.3s',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}>
            {String(index+1).padStart(2,'0')}
          </div>
          <div style={{flex:1, minWidth:0}}>
            <div style={{
              fontSize:'clamp(13px,1.1vw,17px)', fontWeight:800, color:'rgba(255,255,255,0.95)',
              lineHeight:1.25, letterSpacing:'-0.01em',
              whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
            }}>
              {truhlík.nazev}
            </div>
            <div style={{fontSize:11,color:'rgba(255,255,255,0.4)',marginTop:4,fontWeight:600,letterSpacing:'0.04em'}}>
              {truhlík.bylinky.length} bylin
            </div>
          </div>
          <div style={{
            width:32, height:32, borderRadius:'50%', flexShrink:0,
            background:`${truhlík.barvaHex}22`, border:`1.5px solid ${truhlík.barvaHex}50`,
            display:'flex', alignItems:'center', justifyContent:'center',
            color:truhlík.barvaHex, fontSize:20, fontWeight:700,
            filter:'brightness(1.4)',
            transition:'transform 0.3s',
            transform: hovered ? 'translateX(4px)' : 'none',
          }}>›</div>
        </div>
      </div>
      {/* Legs */}
      <div style={{display:'flex',justifyContent:'space-between',padding:'0 18%'}}>
        <div style={{width:10,height:12,background:'#4e2e0e',borderRadius:'0 0 4px 4px'}}/>
        <div style={{width:10,height:12,background:'#4e2e0e',borderRadius:'0 0 4px 4px'}}/>
      </div>
    </button>
  )
}

// ─── Herb card ─────────────────────────────────────────────────────────────────

function HerbCard({herb, accentColor, index, onClick}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      width:'100%', textAlign:'left',
      background: hovered ? C.cream : C.creamDark,
      border:`1.5px solid ${hovered ? accentColor+'60' : C.ink+'12'}`,
      borderRadius:16, padding:'clamp(16px,1.5vw,22px)',
      cursor:'pointer', transition:'all 0.3s cubic-bezier(0.16,1,0.3,1)',
      transform: hovered ? 'translateY(-3px)' : 'none',
      boxShadow: hovered ? `0 12px 32px ${accentColor}20` : 'none',
      animation:`herbFlyIn 0.5s cubic-bezier(0.16,1,0.3,1) ${index*40}ms both`,
    }}>
      <div style={{width:24,height:3,borderRadius:2,background:accentColor,marginBottom:12,opacity:0.65}}/>
      <div style={{fontSize:'clamp(14px,1.1vw,17px)',fontWeight:800,color:C.dark,marginBottom:3,lineHeight:1.25}}>
        {herb.nazev}
      </div>
      <div style={{fontSize:11,color:C.ink,opacity:0.42,fontStyle:'italic',marginBottom:12,lineHeight:1.3,
        whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
        {herb.latinsky.split('/')[0].trim()}
      </div>
      <PropPics herb={herb}/>
    </button>
  )
}

// ─── Planter detail view ───────────────────────────────────────────────────────

function PlanterView({truhlík, onHerbClick, onBack}) {
  return (
    <div style={{maxWidth:1400,margin:'0 auto',padding:'clamp(32px,4vw,56px) clamp(24px,5vw,80px)'}}>
      <div style={{display:'flex',alignItems:'center',gap:20,marginBottom:'clamp(32px,4vw,52px)',flexWrap:'wrap'}}>
        <button onClick={onBack} className="back-btn" style={{
          display:'flex',alignItems:'center',gap:8,
          background:'rgba(255,255,255,0.07)',border:'1.5px solid rgba(255,255,255,0.14)',
          borderRadius:100,padding:'10px 22px',color:C.cream,
          fontSize:13,fontWeight:700,cursor:'pointer',letterSpacing:'0.08em',textTransform:'uppercase',
          transition:'background 0.2s',flexShrink:0,
        }}>← Zpět na truhlíky</button>
        <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <div style={{width:10,height:10,borderRadius:'50%',background:truhlík.barvaHex,boxShadow:`0 0 14px ${truhlík.barvaHex}`,flexShrink:0}}/>
          <h2 style={{fontSize:'clamp(22px,2.5vw,42px)',fontWeight:800,color:C.cream,margin:0,letterSpacing:'-0.025em',lineHeight:1.05}}>
            {truhlík.nazev}
            <span style={{fontWeight:300,fontStyle:'italic',color:truhlík.barvaHex,marginLeft:12,fontSize:'clamp(16px,1.8vw,28px)'}}>
              — {truhlík.bylinky.length} bylin
            </span>
          </h2>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(clamp(160px,18vw,230px),1fr))',gap:'clamp(10px,1.2vw,16px)'}}>
        {truhlík.bylinky.map((herb, i) => (
          <HerbCard key={i} herb={herb} accentColor={truhlík.barvaHex} index={i} onClick={() => onHerbClick(herb)}/>
        ))}
      </div>
    </div>
  )
}

// ─── Herb modal ────────────────────────────────────────────────────────────────

function PropRow({label, value}) {
  if (value === null || value === undefined) return null
  return (
    <div style={{display:'flex',gap:12,padding:'8px 0',borderBottom:`1px solid ${C.creamDark}`}}>
      <span style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:C.teal,flexShrink:0,width:96,paddingTop:1}}>{label}</span>
      <span style={{fontSize:14,color:C.ink,lineHeight:1.5}}>{value === true ? 'ano' : value === false ? 'ne' : value}</span>
    </div>
  )
}

function HerbModal({herb, planterColor, onClose}) {
  const paras = herb.popis ? herb.popis.split('\n\n') : []
  return (
    <div role="dialog" aria-modal="true" aria-label={herb.nazev}
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{position:'fixed',inset:0,zIndex:1000,background:'rgba(10,26,24,0.88)',backdropFilter:'blur(6px)',
        display:'flex',alignItems:'flex-end',justifyContent:'center',padding:'clamp(16px,3vw,48px)'}}>
      <div style={{background:C.cream,borderRadius:20,maxWidth:740,width:'100%',maxHeight:'90vh',overflowY:'auto',
        boxShadow:'0 32px 80px rgba(0,0,0,0.45)',display:'flex',flexDirection:'column',
        animation:'herbFlyIn 0.4s cubic-bezier(0.16,1,0.3,1) both'}}>
        <div style={{padding:'clamp(22px,3vw,34px) clamp(22px,3vw,34px) 0',display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16}}>
          <div style={{flex:1}}>
            <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.2em',color:C.teal,marginBottom:8}}>
              <span style={{color:C.orange}}>❋</span> bylinka
            </div>
            <h2 style={{fontSize:'clamp(24px,2.8vw,42px)',fontWeight:800,color:C.dark,margin:'0 0 4px',letterSpacing:'-0.03em',lineHeight:1.05}}>
              {herb.nazev}
            </h2>
            <div style={{fontSize:'clamp(12px,0.95vw,15px)',fontStyle:'italic',color:C.ink,opacity:0.5}}>
              {herb.latinsky}
              {herb.synonymum && <span style={{opacity:0.7}}> · syn. {herb.synonymum}</span>}
            </div>
          </div>
          <button onClick={onClose} aria-label="Zavřít" style={{flexShrink:0,width:40,height:40,borderRadius:100,
            border:`1px solid ${C.creamDark}`,background:C.creamDark,cursor:'pointer',fontSize:20,color:C.dark,
            display:'flex',alignItems:'center',justifyContent:'center',lineHeight:1,transition:'background 0.2s'}}>×</button>
        </div>
        <div style={{padding:'clamp(14px,1.8vw,20px) clamp(22px,3vw,34px)',display:'flex',alignItems:'center',gap:8,
          borderBottom:`2px solid ${planterColor}22`}}>
          <PropPics herb={herb}/>
          <div style={{height:2,flex:1,minWidth:40,background:`linear-gradient(to right, ${planterColor}, transparent)`,borderRadius:1,marginLeft:6}}/>
        </div>
        <div style={{padding:'0 clamp(22px,3vw,34px)'}}>
          <PropRow label="Světlo" value={herb.svetlo}/>
          <PropRow label="Voda" value={herb.voda}/>
          <PropRow label="Sklizeň" value={herb.sklizen}/>
          <PropRow label="Životnost" value={herb.zivotnost}/>
          <PropRow label="Mráz" value={herb.mrazuvzdornost}/>
          <PropRow label="Opylovači" value={herb.opylovaci}/>
          <PropRow label="Sbírá se" value={herb.coSeSbira}/>
        </div>
        {paras[0] && (
          <div style={{padding:'clamp(16px,2vw,22px) clamp(22px,3vw,34px) 0'}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:C.teal,marginBottom:8}}>K čemu se používá</div>
            <p style={{fontSize:'clamp(13px,1vw,15px)',lineHeight:1.75,color:C.ink,margin:0,opacity:0.82}}>{paras[0]}</p>
          </div>
        )}
        {paras[1] && (
          <div style={{padding:'clamp(16px,2vw,22px) clamp(22px,3vw,34px) 0',marginTop:4}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:C.teal,marginBottom:8}}>Jak ji pěstovat</div>
            <p style={{fontSize:'clamp(13px,1vw,15px)',lineHeight:1.75,color:C.ink,margin:0,opacity:0.82}}>{paras[1]}</p>
          </div>
        )}
        {herb.upozorneni && (
          <div style={{margin:'clamp(18px,2.5vw,26px) clamp(22px,3vw,34px)',padding:'14px 18px',
            background:C.orange+'10',borderLeft:`3px solid ${C.orange}`,borderRadius:'0 10px 10px 0'}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:C.orange,marginBottom:6}}>Upozornění / zajímavost</div>
            <p style={{fontSize:'clamp(12px,0.9vw,14px)',lineHeight:1.65,color:C.ink,margin:0,opacity:0.82}}>{herb.upozorneni}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Contact form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@czech-horizons.cz', {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify({
          _subject: `Bylinkové zahrady – zpráva od ${name}`,
          jmeno: name,
          email,
          zprava: msg,
        }),
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') return (
    <div style={{padding:'clamp(32px,4vw,56px)',textAlign:'center',border:`1.5px solid ${C.green}40`,borderRadius:20,background:`${C.green}08`}}>
      <div style={{fontSize:'clamp(36px,4vw,64px)',marginBottom:16}}>🌿</div>
      <h3 style={{fontSize:'clamp(22px,2.2vw,36px)',fontWeight:800,color:C.cream,margin:'0 0 12px',letterSpacing:'-0.02em'}}>Díky, ozveme se!</h3>
      <p style={{fontSize:'clamp(15px,1.1vw,18px)',color:`${C.cream}99`,margin:0}}>Vaši zprávu jsme obdrželi.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:16}}>
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        <label style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:`${C.cream}66`}}>
          Vaše jméno *
        </label>
        <input type="text" required value={name} onChange={e => setName(e.target.value)}
          placeholder="Jan Novák"
          style={{padding:'12px 16px',borderRadius:10,border:`1.5px solid rgba(255,255,255,0.12)`,
            background:'rgba(255,255,255,0.06)',color:C.cream,fontSize:15,outline:'none',
            transition:'border-color 0.2s'}}/>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        <label style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:`${C.cream}66`}}>
          Váš e-mail *
        </label>
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
          placeholder="vas@email.cz"
          style={{padding:'12px 16px',borderRadius:10,border:`1.5px solid rgba(255,255,255,0.12)`,
            background:'rgba(255,255,255,0.06)',color:C.cream,fontSize:15,outline:'none',
            transition:'border-color 0.2s'}}/>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:6}}>
        <label style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:`${C.cream}66`}}>
          Zpráva *
        </label>
        <textarea required value={msg} onChange={e => setMsg(e.target.value)} rows={4}
          placeholder="Napište nám..."
          style={{padding:'12px 16px',borderRadius:10,border:`1.5px solid rgba(255,255,255,0.12)`,
            background:'rgba(255,255,255,0.06)',color:C.cream,fontSize:15,outline:'none',resize:'vertical',
            transition:'border-color 0.2s',fontFamily:'inherit'}}/>
      </div>
      <button type="submit" disabled={status==='sending'} style={{
        alignSelf:'flex-start',padding:'14px 32px',borderRadius:100,border:'none',
        background: status==='sending' ? `${C.green}66` : C.green,
        color:C.dark,fontSize:14,fontWeight:800,cursor: status==='sending' ? 'default' : 'pointer',
        letterSpacing:'0.06em',textTransform:'uppercase',transition:'background 0.2s',
      }}>
        {status==='sending' ? 'Odesílám…' : 'Odeslat zprávu'}
      </button>
      {status==='error' && (
        <div style={{fontSize:13,color:`${C.cream}bb`,margin:0,lineHeight:1.6}}>
          Odeslání se nezdařilo. Napište nám přímo na{' '}
          <a href="mailto:info@czech-horizons.cz" style={{color:C.green,textDecoration:'underline'}}>
            info@czech-horizons.cz
          </a>
        </div>
      )}
    </form>
  )
}

// ─── Main page export ──────────────────────────────────────────────────────────

export function BylinkoveZahradyClient({akce = []}) {
  const [view, setView] = useState('overview')
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [activeHerb, setActiveHerb] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (activeHerb) setActiveHerb(null)
      else if (view === 'planter') { setView('overview'); setSelectedIdx(null) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeHerb, view])

  useEffect(() => {
    document.body.style.overflow = activeHerb ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeHerb])

  const selectedTruhlík = selectedIdx !== null ? TRUHLIKY[selectedIdx] : null

  const handlePlanterClick = (idx) => {
    setSelectedIdx(idx)
    setView('planter')
    setActiveHerb(null)
  }

  const handleBack = () => {
    setView('overview')
    setSelectedIdx(null)
    setActiveHerb(null)
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return {}
    const d = new Date(dateStr)
    const m = ['LED','ÚN','BŘE','DUB','KVĚ','ČVN','ČVC','SRP','ZÁŘ','ŘÍJ','LIS','PRO'][d.getMonth()]
    return {den: d.getDate(), mesic: m, rok: d.getFullYear()}
  }

  return (
    <>
      <style>{`
        @keyframes herbFlyIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .back-btn:hover { background: rgba(255,255,255,0.12) !important; }
        input:focus, textarea:focus { border-color: rgba(255,255,255,0.35) !important; }
      `}</style>

      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section style={{padding:'clamp(120px,14vw,200px) clamp(24px,5vw,80px) clamp(80px,10vw,120px)',background:C.cream}}>
          <div style={{maxWidth:1400,margin:'0 auto'}}>
            <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:32,color:C.teal}}>
              <span style={{color:C.orange}}>❋</span> Lokální projekt — Praha 6, Hanspaulka
            </div>
            <h1 style={{fontSize:'clamp(44px,6.5vw,112px)',fontWeight:800,lineHeight:0.9,letterSpacing:'-0.03em',margin:'0 0 clamp(20px,2.5vw,32px)',color:C.dark}}>
              Sousedská<br/>
              <span style={{fontWeight:300,fontStyle:'italic',color:C.green}}>bylinková zahrádka.</span>
            </h1>

            {/* Stats */}
            <div style={{display:'flex',gap:'clamp(20px,3vw,48px)',alignItems:'flex-end',marginBottom:'clamp(24px,3vw,40px)',flexWrap:'wrap'}}>
              <div>
                <div style={{fontSize:'clamp(44px,5.5vw,76px)',fontWeight:800,lineHeight:0.9,color:C.orange}}>6</div>
                <div style={{fontSize:'clamp(11px,0.85vw,14px)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:`${C.ink}55`,marginTop:8}}>truhlíků</div>
              </div>
              <div style={{width:1,height:52,background:`${C.ink}18`,marginBottom:4,flexShrink:0}}/>
              <div>
                <div style={{fontSize:'clamp(44px,5.5vw,76px)',fontWeight:800,lineHeight:0.9,color:C.green}}>50+</div>
                <div style={{fontSize:'clamp(11px,0.85vw,14px)',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:`${C.ink}55`,marginTop:8}}>druhů bylin</div>
              </div>
            </div>

            <p style={{fontSize:'clamp(16px,1.2vw,21px)',lineHeight:1.65,color:C.ink,maxWidth:540,opacity:0.75,margin:'0 0 clamp(24px,3vw,40px)'}}>
              Šest bylinkových truhlíků plných vůní, chutí a příběhů — volně přístupných každému, kdo jde kolem.
            </p>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <a href="#zahon" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:100,background:C.dark,color:C.cream,fontSize:14,fontWeight:800,textDecoration:'none',letterSpacing:'0.06em',textTransform:'uppercase'}}>
                Prozkoumat zahrádku ↓
              </a>
              <a href="#mapa" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'14px 28px',borderRadius:100,border:`1.5px solid ${C.ink}25`,color:C.ink,fontSize:14,fontWeight:700,textDecoration:'none',letterSpacing:'0.04em',opacity:0.75}}>
                📍 Kde nás najdete
              </a>
            </div>
          </div>
        </section>

        {/* ── Planters garden ──────────────────────────────────────────── */}
        <section id="zahon" style={{background:C.dark,padding: view==='overview' ? 'clamp(60px,8vw,100px) clamp(24px,5vw,80px) 0' : '0',minHeight:'65vh',transition:'padding 0.4s'}}>
          {view === 'overview' && (
            <div style={{maxWidth:1400,margin:'0 auto'}}>
              <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:'clamp(36px,5vw,64px)',color:C.teal}}>
                <span style={{color:C.orange}}>❋</span> 001 — Záhon
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(clamp(220px,28vw,380px),1fr))',gap:'clamp(16px,2vw,32px)'}}>
                {TRUHLIKY.map((t, i) => (
                  <PlanterBox key={t.id} truhlík={t} index={i} onClick={() => handlePlanterClick(i)}/>
                ))}
              </div>
            </div>
          )}
          {view === 'planter' && selectedTruhlík && (
            <PlanterView truhlík={selectedTruhlík} onHerbClick={setActiveHerb} onBack={handleBack}/>
          )}
          <div style={{height:28,background:'linear-gradient(to bottom, transparent, rgba(0,0,0,0.32))',marginTop: view==='overview' ? 'clamp(40px,5vw,72px)' : 'clamp(24px,3vw,40px)'}}/>
        </section>

        {/* ── Přijďte, přivonějte ───────────────────────────────────────── */}
        <section style={{background:C.creamDark,padding:'clamp(60px,8vw,100px) clamp(24px,5vw,80px)'}}>
          <div style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'clamp(260px,36%,480px) 1fr',gap:'clamp(40px,6vw,100px)',alignItems:'start'}}>
            <div>
              <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:20,color:C.teal}}>
                <span style={{color:C.orange}}>❋</span> 002 — Jak zahradu používat
              </div>
              <h2 style={{fontSize:'clamp(36px,5vw,72px)',fontWeight:800,lineHeight:0.95,letterSpacing:'-0.03em',margin:'0 0 clamp(20px,2.5vw,36px)',color:C.dark}}>
                Přijďte,<br/>přivonějte<span style={{color:C.orange}}>.</span>
              </h2>
              <p style={{fontSize:'clamp(16px,1.2vw,20px)',lineHeight:1.65,color:`${C.ink}bb`,margin:0,maxWidth:420}}>
                Zahrádka je volně přístupná každý den. Bylinky jsou tady pro všechny — pro zvědavce, kuchaře i ty, kteří si chtějí jen odpočinout.
              </p>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:12}}>
              {[
                {icon:'🌿', n:'01', title:'Přivonějte si',      text:'Bylinky si klidně prohlédněte, přivonějte nebo trochu natrháte.'},
                {icon:'✂️', n:'02', title:'Trhejte šetrně',     text:'Trhejte prosím šetrně — pár lístků, ne celé rostliny.'},
                {icon:'🌱', n:'03', title:'Nechte kořeny',      text:'Nechte rostliny v zemi — trhejte jen to, co roste nad zemí.'},
                {icon:'🙏', n:'04', title:'Berte s mírou',      text:'Berte jen tolik, kolik opravdu využijete.'},
                {icon:'💧', n:'05', title:'Zálivka pomůže',     text:'Pokud vidíte suchý truhlík, pomůže mu sklenka vody.'},
                {icon:'📱', n:'06', title:'QR kód u truhlíku',  text:'U každého truhlíku najdete QR kód s podrobnostmi o bylinkách.'},
              ].map(({icon, n, title, text}, i) => (
                <div key={i} style={{
                  padding:'clamp(18px,1.8vw,24px)',
                  background:C.cream,
                  borderRadius:16,
                  border:`1px solid ${C.ink}08`,
                  position:'relative',
                  overflow:'hidden',
                }}>
                  <div style={{
                    position:'absolute', top:-6, right:10,
                    fontSize:'clamp(48px,5vw,68px)', fontWeight:800,
                    color:`${C.ink}05`, lineHeight:1, fontFamily:'monospace',
                    userSelect:'none', pointerEvents:'none',
                  }}>{n}</div>
                  <span style={{fontSize:'clamp(22px,2.5vw,30px)',display:'block',marginBottom:10}}>{icon}</span>
                  <div style={{fontSize:'clamp(13px,1.05vw,16px)',fontWeight:800,color:C.dark,marginBottom:6,lineHeight:1.25}}>{title}</div>
                  <p style={{fontSize:'clamp(12px,0.92vw,14px)',lineHeight:1.65,color:C.ink,margin:0,opacity:0.7}}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Kde nás najdete ───────────────────────────────────────────── */}
        <section id="mapa" style={{background:C.dark,padding:'clamp(60px,8vw,100px) clamp(24px,5vw,80px)'}}>
          <div style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(40px,6vw,80px)',alignItems:'start'}}>
            <div>
              <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:20,color:C.teal}}>
                <span style={{color:C.orange}}>❋</span> 003 — Kde nás najdete
              </div>
              <h2 style={{fontSize:'clamp(36px,4.5vw,68px)',fontWeight:800,lineHeight:0.95,letterSpacing:'-0.03em',margin:'0 0 28px',color:C.cream}}>
                Parčík za<br/>
                <span style={{fontWeight:300,fontStyle:'italic',color:C.green}}>Tescem.</span>
              </h2>
              <div style={{display:'flex',flexDirection:'column',gap:16,marginBottom:32}}>
                <div style={{display:'flex',gap:14,alignItems:'flex-start',padding:'18px 20px',background:`${C.cream}08`,border:`1px solid ${C.cream}12`,borderRadius:14}}>
                  <span style={{fontSize:20,flexShrink:0}}>📍</span>
                  <div>
                    <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:`${C.cream}55`,marginBottom:4}}>Adresa</div>
                    <div style={{fontSize:'clamp(15px,1.2vw,18px)',color:C.cream,fontWeight:600,lineHeight:1.4}}>
                      Parčík za Tescem na Hanspaulce<br/>
                      <span style={{fontWeight:400,opacity:0.65,fontSize:'0.88em'}}>Praha 6 — Dejvice</span>
                    </div>
                  </div>
                </div>
                <div style={{display:'flex',gap:14,alignItems:'flex-start',padding:'18px 20px',background:`${C.cream}08`,border:`1px solid ${C.cream}12`,borderRadius:14}}>
                  <span style={{fontSize:20,flexShrink:0}}>🧭</span>
                  <div>
                    <div style={{fontSize:12,fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:`${C.cream}55`,marginBottom:4}}>GPS souřadnice</div>
                    <div style={{fontSize:'clamp(14px,1.1vw,16px)',color:`${C.cream}cc`,fontFamily:'monospace',lineHeight:1.6}}>
                      50°06′14.7″N<br/>14°22′18.2″E
                    </div>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="https://www.google.com/maps?q=50.104083,14.371722" target="_blank" rel="noopener noreferrer"
                  style={{display:'inline-flex',alignItems:'center',gap:10,padding:'14px 24px',borderRadius:100,
                    background:C.green,color:C.dark,fontSize:14,fontWeight:800,textDecoration:'none',
                    letterSpacing:'0.06em',textTransform:'uppercase'}}>
                  Google Maps ↗
                </a>
                <a href="https://mapy.cz/zakladni?x=14.371722&y=50.104083&z=17" target="_blank" rel="noopener noreferrer"
                  style={{display:'inline-flex',alignItems:'center',gap:10,padding:'14px 24px',borderRadius:100,
                    border:`1.5px solid ${C.cream}22`,color:C.cream,fontSize:14,fontWeight:700,textDecoration:'none',
                    letterSpacing:'0.04em',textTransform:'uppercase',opacity:0.8}}>
                  Mapy.cz ↗
                </a>
              </div>
            </div>

            <div style={{borderRadius:20,overflow:'hidden',border:`2px solid ${C.cream}12`,boxShadow:'0 16px 48px rgba(0,0,0,0.35)',aspectRatio:'1/1',background:C.dark}}>
              <iframe
                title="Mapa - Sousedská bylinková zahrádka"
                src="https://www.openstreetmap.org/export/embed.html?bbox=14.368722%2C50.102083%2C14.374722%2C50.106083&layer=mapnik&marker=50.104083%2C14.371722"
                width="100%" height="100%"
                style={{border:'none',display:'block'}}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Proč jsme zahrádku vytvořili ─────────────────────────────── */}
        <section style={{background:C.cream,padding:'clamp(60px,8vw,100px) clamp(24px,5vw,80px)'}}>
          <div style={{maxWidth:1400,margin:'0 auto'}}>
            <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:20,color:C.teal}}>
              <span style={{color:C.orange}}>❋</span> 004 — Proč jsme zahrádku vytvořili
            </div>
            <div style={{display:'grid',gridTemplateColumns:'clamp(300px,50%,600px) 1fr',gap:'clamp(40px,6vw,100px)',alignItems:'start'}}>
              <div>
                <h2 style={{fontSize:'clamp(36px,5vw,72px)',fontWeight:800,lineHeight:0.95,letterSpacing:'-0.03em',margin:'0 0 clamp(24px,3vw,36px)',color:C.dark}}>
                  Malé místo<br/>
                  <span style={{fontWeight:300,fontStyle:'italic',color:C.green}}>s velkým smyslem.</span>
                </h2>
                <p style={{fontSize:'clamp(16px,1.2vw,20px)',lineHeight:1.7,color:`${C.ink}bb`,margin:'0 0 20px'}}>
                  Bylinkové zahrady jsme vytvořili proto, aby na Hanspaulce vzniklo malé místo, kde se lidé mohou zastavit, přivonět si k bylinkám, něco se dozvědět a třeba si i pár lístků odnést domů.
                </p>
                <p style={{fontSize:'clamp(16px,1.2vw,20px)',lineHeight:1.7,color:`${C.ink}bb`,margin:0}}>
                  Nejde jen o pěstování. Chceme podpořit sousedský život, ukázat, že i malý veřejný prostor může mít smysl, a přiblížit lidem bylinky, které z kuchyně dobře znají — ale málokdy je vidí růst přímo před sebou.
                </p>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:20}}>
                {[
                  {barva:C.green, nadpis:'Komunitní pilot', text:'Zahrádka je pilotní krok — chceme zjistit, jestli má na Hanspaulce smysl rozvíjet podobné komunitní a zelené aktivity i dál.'},
                  {barva:C.teal, nadpis:'Sousedské vztahy', text:'Projekt má posílit sousedské vazby, propojit různé generace a ověřit zájem o větší komunitní zahradu.'},
                  {barva:C.orange, nadpis:'Edukace o bylinkách', text:'Chceme ukázat, jak různé bylinky vypadají, jak rostou a jak je lze zapojit do každodenní kuchyně.'},
                ].map(({barva, nadpis, text}, i) => (
                  <div key={i} style={{padding:'clamp(20px,2vw,28px)',borderRadius:16,border:`1.5px solid ${barva}20`,background:`${barva}08`}}>
                    <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:10}}>
                      <div style={{width:8,height:8,borderRadius:'50%',background:barva,boxShadow:`0 0 8px ${barva}`,flexShrink:0}}/>
                      <div style={{fontSize:13,fontWeight:800,textTransform:'uppercase',letterSpacing:'0.1em',color:barva}}>{nadpis}</div>
                    </div>
                    <p style={{fontSize:'clamp(14px,1.1vw,17px)',lineHeight:1.65,color:`${C.ink}bb`,margin:0}}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Zapojte se ────────────────────────────────────────────────── */}
        <section style={{background:C.dark,padding:'clamp(60px,8vw,100px) clamp(24px,5vw,80px)'}}>
          <div style={{maxWidth:1400,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(40px,6vw,80px)',alignItems:'start'}}>
            <div>
              <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:20,color:C.teal}}>
                <span style={{color:C.orange}}>❋</span> 005 — Zapojte se
              </div>
              <h2 style={{fontSize:'clamp(36px,5vw,72px)',fontWeight:800,lineHeight:0.95,letterSpacing:'-0.03em',margin:'0 0 24px',color:C.cream}}>
                Chcete<br/>
                <span style={{fontWeight:300,fontStyle:'italic',color:C.green}}>pomoct?</span>
              </h2>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {[
                  'Napište nám, pokud chcete pomoct se zaléváním',
                  'Pošlete nám recept s bylinkou z naší zahrádky',
                  'Dejte nám vědět, co byste v zahradě chtěli příště',
                  'Vyplňte dotazník k větší komunitní zahradě',
                ].map((item, i) => (
                  <div key={i} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                    <div style={{width:6,height:6,borderRadius:'50%',background:C.green,flexShrink:0,marginTop:7,boxShadow:`0 0 6px ${C.green}`}}/>
                    <p style={{fontSize:'clamp(15px,1.1vw,18px)',lineHeight:1.6,color:`${C.cream}cc`,margin:0}}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm/>
            </div>
          </div>
        </section>

        {/* ── Akce ──────────────────────────────────────────────────────── */}
        {akce.length > 0 && (
          <section style={{background:C.dark,padding:'0 clamp(24px,5vw,80px) clamp(60px,8vw,100px)'}}>
            <div style={{maxWidth:1400,margin:'0 auto'}}>
              <div style={{height:1,background:`${C.cream}12`,marginBottom:'clamp(40px,5vw,72px)'}}/>
              <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:20,color:C.yellow}}>
                <span style={{color:C.orange}}>❋</span> 006 — Akce v rámci projektu
              </div>
              <h2 style={{fontSize:'clamp(32px,4.5vw,68px)',fontWeight:800,lineHeight:0.95,letterSpacing:'-0.03em',margin:'0 0 clamp(32px,4vw,56px)',color:C.cream}}>
                {akce.length} {akce.length === 1 ? 'akce' : akce.length < 5 ? 'akce' : 'akcí'}<span style={{color:C.orange}}>.</span>
              </h2>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {akce.map((a, i) => {
                  const dt = formatDate(a.datum)
                  const probehl = new Date(a.datum) < new Date()
                  return (
                    <div key={a._id} style={{
                      background:`${C.cream}05`,border:`1.5px solid ${C.cream}12`,borderRadius:18,
                      padding:'clamp(20px,2.5vw,32px)',
                      display:'grid',gridTemplateColumns:'auto auto 1fr auto',gap:'clamp(16px,2vw,36px)',alignItems:'center',
                    }}>
                      <div style={{fontSize:'clamp(14px,1.3vw,20px)',fontWeight:800,color:C.yellow,fontFamily:'monospace'}}>
                        {String(i+1).padStart(2,'0')}
                      </div>
                      <div style={{textAlign:'center',minWidth:64}}>
                        <div style={{fontSize:'clamp(28px,2.8vw,44px)',fontWeight:800,lineHeight:1,color:C.orange}}>{dt.den}</div>
                        <div style={{fontSize:10,letterSpacing:'0.15em',fontWeight:700,color:C.yellow}}>{dt.mesic} {dt.rok}</div>
                      </div>
                      <div>
                        <h3 style={{fontSize:'clamp(17px,1.6vw,24px)',fontWeight:800,lineHeight:1.2,margin:'0 0 4px',color:C.cream}}>{a.nazev}</h3>
                        {a.misto && <div style={{fontSize:13,color:`${C.cream}88`}}>📍 {a.misto}</div>}
                      </div>
                      <div style={{fontSize:11,letterSpacing:'0.1em',textTransform:'uppercase',fontWeight:700,
                        color: probehl ? `${C.cream}55` : C.green}}>
                        {probehl ? 'Proběhlo' : 'Nadcházející'}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Odkud bylinky máme ───────────────────────────────────────── */}
        <section style={{background:C.cream,padding:'clamp(48px,6vw,80px) clamp(24px,5vw,80px)'}}>
          <div style={{maxWidth:1400,margin:'0 auto'}}>
            <div style={{fontSize:'clamp(11px,0.85vw,14px)',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:700,marginBottom:20,color:C.teal}}>
              <span style={{color:C.orange}}>❋</span> Odkud bylinky máme
            </div>
            <h2 style={{fontSize:'clamp(28px,3.5vw,52px)',fontWeight:800,lineHeight:0.95,letterSpacing:'-0.025em',margin:'0 0 clamp(28px,3.5vw,44px)',color:C.dark}}>
              Bylinky s dobrým<br/>
              <span style={{fontWeight:300,fontStyle:'italic',color:C.green}}>původem.</span>
            </h2>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(240px,1fr))',gap:20}}>
              {[
                {emoji:'🌱', nazev:'Zahradnictví Spomyšl', popis:'Rodinné zahradnictví s bohatou nabídkou bylinkových sazenic pěstovaných s péčí a zkušenostmi.'},
                {emoji:'🌿', nazev:'Zahradnictví Chládek', popis:'Osvědčený dodavatel kvalitních bylin, s nimiž spolupracujeme opakovaně a s radostí.'},
                {emoji:'🔬', nazev:'Výzkumné skleníky ČZU', popis:'Česká zemědělská univerzita nám poskytuje vzácnější a méně běžné druhy bylin ze svých výzkumných sbírek.'},
              ].map(({emoji, nazev, popis}, i) => (
                <div key={i} style={{
                  padding:'clamp(22px,2.2vw,30px)',
                  borderRadius:16,
                  background:C.creamDark,
                  border:`1px solid ${C.ink}10`,
                }}>
                  <span style={{fontSize:28,display:'block',marginBottom:14}}>{emoji}</span>
                  <div style={{fontSize:'clamp(15px,1.2vw,18px)',fontWeight:800,color:C.dark,marginBottom:8,lineHeight:1.2}}>{nazev}</div>
                  <p style={{fontSize:'clamp(13px,0.95vw,15px)',lineHeight:1.65,color:C.ink,margin:0,opacity:0.68}}>{popis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Acknowledgements / EU-ESC ─────────────────────────────────── */}
        <section style={{background:C.creamDark,padding:'clamp(40px,5vw,72px) clamp(24px,5vw,80px)'}}>
          <div style={{maxWidth:1400,margin:'0 auto'}}>
            <div style={{height:1,background:`${C.ink}15`,marginBottom:'clamp(28px,3.5vw,48px)'}}/>
            <p style={{fontSize:'clamp(13px,1vw,16px)',color:`${C.ink}88`,margin:'0 0 clamp(24px,3vw,36px)',lineHeight:1.65}}>
              Projekt realizuje <strong style={{color:C.ink}}>Czech Horizons z. s.</strong> za podpory <strong style={{color:C.ink}}>Evropského sboru solidarity</strong>.
            </p>
            <div style={{display:'flex',gap:'clamp(16px,2.5vw,32px)',alignItems:'center',flexWrap:'wrap'}}>
              <img src="/logoeu.png" alt="Evropská unie" style={{height:52,objectFit:'contain',display:'block'}}/>
              <img src="/logoesc.png" alt="Evropský sbor solidarity" style={{height:60,objectFit:'contain',display:'block'}}/>
              <img src="/logodzs.png" alt="Dům zahraniční spolupráce" style={{height:48,objectFit:'contain',display:'block'}}/>
              <img src="/czulogo.png" alt="Česká zemědělská univerzita" style={{height:44,objectFit:'contain',display:'block'}}/>
              <img src="/logopraha6.png" alt="Praha 6" style={{height:44,objectFit:'contain',display:'block'}}/>
            </div>
            <p style={{fontSize:11,color:`${C.ink}55`,margin:'clamp(16px,2vw,24px) 0 0',lineHeight:1.6,maxWidth:700}}>
              Tento projekt byl podpořen z programu Evropský sbor solidarity Evropské unie. Vyjádřené názory jsou výlučně názory autorů a Evropská unie za ně nenese žádnou odpovědnost.
            </p>
          </div>
        </section>

      </main>
      <Footer />

      {activeHerb && (
        <HerbModal herb={activeHerb} planterColor={selectedTruhlík?.barvaHex ?? C.green} onClose={() => setActiveHerb(null)}/>
      )}
    </>
  )
}

export default BylinkoveZahradyClient
