'use client'
import {useState, useEffect} from 'react'
import {C} from '@/app/components/Colors'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import {TRUHLIKY} from './data'

// Shape assigned per planter index
const SHAPES = ['feather', 'grass', 'spike', 'bush', 'grass', 'feather']

// ─── SVG property pictograms ──────────────────────────────────────────────────

function IconSun({text}) {
  const full = /světlo/.test(text) && !/^polostín|^stín/.test(text)
  const partial = /polostín/.test(text)
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r={full ? 4.5 : 3} fill="#f2b63a" opacity={full ? 1 : 0.55}/>
      {(full || partial) && [0,45,90,135,180,225,270,315].map((a, i) => {
        const r0 = full ? 6.5 : 5, r1 = full ? 8.5 : 6.5
        const cos = Math.cos(a * Math.PI / 180), sin = Math.sin(a * Math.PI / 180)
        return <line key={i} x1={10+cos*r0} y1={10+sin*r0} x2={10+cos*r1} y2={10+sin*r1}
          stroke="#f2b63a" strokeWidth="1.5" strokeLinecap="round"
          opacity={partial && i % 2 === 1 ? 0.25 : 0.9}/>
      })}
    </svg>
  )
}

function IconWater({text}) {
  const low = /nízká/.test(text)
  const high = /vyšší/.test(text)
  const n = low ? 1 : high ? 3 : 2
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      {[0, 1, 2].map(i => {
        const x = 2.5 + i * 6
        return <path key={i}
          d={`M${x+3},16 Q${x},11 ${x+3},8 Q${x+6},11 ${x+3},16 Z`}
          fill="#2d8a7a" opacity={i < n ? 0.85 : 0.18}/>
      })}
    </svg>
  )
}

function IconFrost({text}) {
  const hardy = /^ano/.test(text)
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      {hardy ? (
        <>
          {[0, 60, 120].map((a, i) => {
            const cos = Math.cos(a * Math.PI / 180), sin = Math.sin(a * Math.PI / 180)
            return <g key={i}>
              <line x1={10-cos*7.5} y1={10-sin*7.5} x2={10+cos*7.5} y2={10+sin*7.5}
                stroke="#7dd3e8" strokeWidth="1.6" strokeLinecap="round"/>
              {[0.45, -0.45].map((f, j) => {
                const a2 = (a + 90) * Math.PI / 180
                return <line key={j}
                  x1={10+cos*7.5*f} y1={10+sin*7.5*f}
                  x2={10+cos*7.5*f + Math.cos(a2)*3.5} y2={10+sin*7.5*f + Math.sin(a2)*3.5}
                  stroke="#7dd3e8" strokeWidth="1.2" strokeLinecap="round"/>
              })}
            </g>
          })}
        </>
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
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <ellipse cx="10" cy="12.5" rx="4.5" ry="5.5" fill={active ? '#f2b63a' : '#f2b63a28'}/>
      {active && <>
        <line x1="6.5" y1="10" x2="13.5" y2="10" stroke="#1a3d3a" strokeWidth="1" opacity="0.7"/>
        <line x1="5.8" y1="12.5" x2="14.2" y2="12.5" stroke="#1a3d3a" strokeWidth="1" opacity="0.7"/>
        <line x1="6.5" y1="15" x2="13.5" y2="15" stroke="#1a3d3a" strokeWidth="1" opacity="0.7"/>
        <path d="M5.5,9.5 Q2,6 5,5 Q6.5,7 10,8" fill="white" opacity="0.7"/>
        <path d="M14.5,9.5 Q18,6 15,5 Q13.5,7 10,8" fill="white" opacity="0.7"/>
        <circle cx="10" cy="5.5" r="2" fill="#1a3d3a" opacity="0.6"/>
      </>}
    </svg>
  )
}

function IconLifespan({text}) {
  const annual = /jednoletka/.test(text)
  const biennial = /dvouletka/.test(text)
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      {annual && <text x="5" y="15" fontSize="13" fontWeight="800" fill="#e8823d">1</text>}
      {biennial && <text x="4" y="15" fontSize="13" fontWeight="800" fill="#f2b63a">2</text>}
      {!annual && !biennial && <>
        <path d="M5,10 Q5,4 10,4 Q15,4 15,10 Q15,16 10,16 Q7,16 5.5,13.5"
          stroke="#4a9b4e" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <path d="M4.5,13.5 L5.5,13.5 L5.5,15"
          stroke="#4a9b4e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </>}
    </svg>
  )
}

function PropPics({herb}) {
  return (
    <div style={{display: 'flex', gap: 4, alignItems: 'center'}}>
      <IconSun text={herb.svetlo}/>
      <IconWater text={herb.voda}/>
      <IconFrost text={herb.mrazuvzdornost}/>
      <IconBee active={herb.opylovaci}/>
      <IconLifespan text={herb.zivotnost}/>
    </div>
  )
}

// ─── Herb silhouette SVG ──────────────────────────────────────────────────────

function HerbShape({type, color, h = 36, seed = 0}) {
  const j = seed % 4

  if (type === 'spike') return (
    <svg width="16" height={h} viewBox={`0 0 16 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <rect x="6.5" y={h*0.4} width="3" height={h*0.62} rx="1.5" fill={`${color}88`}/>
      <ellipse cx="8" cy={h*0.22} rx={3+j*0.3} ry={h*0.22} fill={color} opacity="0.9"/>
      <ellipse cx={5-j*0.5} cy={h*0.44} rx="2.5" ry="6" fill={color} opacity="0.48"
        transform={`rotate(-22 ${5-j*0.5} ${h*0.44})`}/>
      <ellipse cx={11+j*0.5} cy={h*0.44} rx="2.5" ry="6" fill={color} opacity="0.48"
        transform={`rotate(22 ${11+j*0.5} ${h*0.44})`}/>
    </svg>
  )

  if (type === 'bush') return (
    <svg width="22" height={h} viewBox={`0 0 22 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <rect x="9" y={h*0.52} width="4" height={h*0.5} rx="2" fill={`${color}77`}/>
      <ellipse cx="11" cy={h*0.36} rx={9+j*0.4} ry={h*0.36} fill={color} opacity="0.72"/>
      <ellipse cx={5+j} cy={h*0.55} rx="6" ry={h*0.22} fill={color} opacity="0.52"/>
      <ellipse cx={17-j} cy={h*0.55} rx="6" ry={h*0.22} fill={color} opacity="0.52"/>
      <ellipse cx="11" cy={h*0.22} rx="5" ry={h*0.17} fill={color} opacity="0.4"/>
    </svg>
  )

  if (type === 'feather') return (
    <svg width="16" height={h} viewBox={`0 0 16 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      <line x1="8" y1={h*0.1} x2="8" y2={h} stroke={`${color}77`} strokeWidth="2" strokeLinecap="round"/>
      {[0.22, 0.38, 0.54, 0.7].map((y, i) => (
        <g key={i}>
          <path d={`M8,${h*y} Q${3-j*0.5},${h*y-8} ${1},${h*y-13}`}
            stroke={color} strokeWidth="1.5" fill="none" opacity="0.78" strokeLinecap="round"/>
          <path d={`M8,${h*y} Q${13+j*0.5},${h*y-8} ${15},${h*y-13}`}
            stroke={color} strokeWidth="1.5" fill="none" opacity="0.78" strokeLinecap="round"/>
        </g>
      ))}
    </svg>
  )

  if (type === 'grass') return (
    <svg width="20" height={h} viewBox={`0 0 20 ${h}`} fill="none" style={{overflow:'visible',flexShrink:0}}>
      {[-6, -3, 0, 3, 6].map((x, i) => (
        <path key={i}
          d={`M${10+x},${h} Q${10+x+x*0.35},${h*0.5} ${10+x+x*0.55},${h*(0.08+(i%3)*0.04)}`}
          stroke={color} strokeWidth="2.2" fill="none" opacity={0.62 + i * 0.04} strokeLinecap="round"/>
      ))}
    </svg>
  )

  // spreading (default)
  return (
    <svg width="26" height={Math.round(h*0.65)} viewBox={`0 0 26 ${Math.round(h*0.65)}`}
      fill="none" style={{overflow:'visible',flexShrink:0}}>
      <ellipse cx="13" cy={h*0.38} rx={11+j*0.3} ry={h*0.28} fill={color} opacity="0.6"/>
      <ellipse cx={6+j} cy={h*0.52} rx="7" ry={h*0.18} fill={color} opacity="0.45"/>
      <ellipse cx={20-j} cy={h*0.52} rx="7" ry={h*0.18} fill={color} opacity="0.45"/>
      {[5, 9, 14, 20].map((x, i) => (
        <circle key={i} cx={x} cy={h*0.3-(i%2)*6} r="3" fill={color} opacity="0.78"/>
      ))}
    </svg>
  )
}

// ─── Planter box ──────────────────────────────────────────────────────────────

function PlanterBox({truhlík, index, onClick}) {
  const [hovered, setHovered] = useState(false)
  const shape = SHAPES[index]
  const herbs = truhlík.bylinky.slice(0, Math.min(truhlík.bylinky.length, 9))

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%', border: 'none', padding: 0, background: 'none',
        cursor: 'pointer', display: 'flex', flexDirection: 'column',
        transform: hovered ? 'translateY(-3px) scale(1.01)' : 'none',
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div style={{
        borderRadius: 14, overflow: 'hidden',
        border: `3px solid ${hovered ? truhlík.barvaHex + 'aa' : '#5C3D1E'}`,
        boxShadow: hovered
          ? `0 20px 56px rgba(0,0,0,0.42), 0 0 0 1px ${truhlík.barvaHex}44`
          : '0 6px 24px rgba(0,0,0,0.3)',
        transition: 'box-shadow 0.35s, border-color 0.35s',
      }}>
        {/* Soil zone with "long into the distance" perspective effect */}
        <div style={{overflow: 'hidden', background: '#0d1c0a'}}>
          <div style={{
            background: 'linear-gradient(to bottom, #0d1a0a 0%, #1a2e14 55%, #243d18 100%)',
            padding: '18px 14px 8px',
            minHeight: 96,
            position: 'relative',
            transform: 'perspective(260px) rotateX(20deg)',
            transformOrigin: 'center bottom',
          }}>
            {/* Top shadow — simulates back wall depth */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 18,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)',
              pointerEvents: 'none',
            }}/>
            {/* Accent glow from planter color */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, top: '35%',
              background: `radial-gradient(ellipse at 50% 100%, ${truhlík.barvaHex}22, transparent 70%)`,
              pointerEvents: 'none',
            }}/>
            {/* Herb silhouettes */}
            <div style={{
              display: 'flex', alignItems: 'flex-end',
              gap: 4, justifyContent: 'space-around',
              position: 'relative', zIndex: 1,
              flexWrap: 'nowrap', overflow: 'hidden',
            }}>
              {herbs.map((_, i) => (
                <HerbShape key={i} type={shape} color={truhlík.barvaHex}
                  h={26 + (i % 4) * 8} seed={i}/>
              ))}
            </div>
          </div>
        </div>

        {/* Wood body */}
        <div style={{
          background: 'linear-gradient(to bottom, #9B6B35, #7A5228)',
          padding: '10px 16px 13px',
          borderTop: '4px solid #5C3D1E',
        }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5}}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: `${truhlík.barvaHex}28`, border: `1px solid ${truhlík.barvaHex}55`,
              borderRadius: 100, padding: '3px 9px',
            }}>
              <div style={{width: 5, height: 5, borderRadius: '50%', background: truhlík.barvaHex, boxShadow: `0 0 5px ${truhlík.barvaHex}`}}/>
              <span style={{fontSize: 10, fontWeight: 700, color: truhlík.barvaHex, letterSpacing: '0.12em', textTransform: 'uppercase', filter: 'brightness(1.4)'}}>
                {truhlík.bylinky.length} bylin
              </span>
            </div>
            <span style={{fontSize: 11, color: 'rgba(255,255,255,0.38)', fontWeight: 600}}>▸</span>
          </div>
          <div style={{fontSize: 'clamp(13px, 1.1vw, 16px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.01em'}}>
            {truhlík.nazev}
          </div>
        </div>
      </div>

      {/* Legs */}
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 18%'}}>
        <div style={{width: 8, height: 10, background: '#5C3D1E', borderRadius: '0 0 3px 3px'}}/>
        <div style={{width: 8, height: 10, background: '#5C3D1E', borderRadius: '0 0 3px 3px'}}/>
      </div>
    </button>
  )
}

// ─── Herb card in planter view ────────────────────────────────────────────────

function HerbCard({herb, accentColor, index, onClick}) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%', textAlign: 'left',
        background: hovered ? C.cream : `${C.creamDark}`,
        border: `1.5px solid ${hovered ? accentColor + '60' : `${C.ink}12`}`,
        borderRadius: 16,
        padding: 'clamp(16px, 1.5vw, 22px)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? `0 12px 32px ${accentColor}20` : 'none',
        animation: `herbFlyIn 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 40}ms both`,
      }}
    >
      <div style={{width: 24, height: 3, borderRadius: 2, background: accentColor, marginBottom: 12, opacity: 0.65}}/>
      <div style={{fontSize: 'clamp(14px, 1.1vw, 17px)', fontWeight: 800, color: C.dark, marginBottom: 3, lineHeight: 1.25}}>
        {herb.nazev}
      </div>
      <div style={{fontSize: 11, color: C.ink, opacity: 0.42, fontStyle: 'italic', marginBottom: 10, lineHeight: 1.3,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
        {herb.latinsky.split('/')[0].trim()}
      </div>
      <PropPics herb={herb}/>
    </button>
  )
}

// ─── Planter detail view ──────────────────────────────────────────────────────

function PlanterView({truhlík, onHerbClick, onBack}) {
  return (
    <div style={{maxWidth: 1400, margin: '0 auto', padding: 'clamp(32px, 4vw, 56px) clamp(24px, 5vw, 80px)'}}>
      {/* Header */}
      <div style={{display: 'flex', alignItems: 'center', gap: 20, marginBottom: 'clamp(32px, 4vw, 52px)', flexWrap: 'wrap'}}>
        <button onClick={onBack} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.07)', border: '1.5px solid rgba(255,255,255,0.14)',
          borderRadius: 100, padding: '10px 22px',
          color: C.cream, fontSize: 13, fontWeight: 700, cursor: 'pointer',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}>
          ← Zpět
        </button>

        <div style={{display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap'}}>
          <div style={{
            width: 10, height: 10, borderRadius: '50%',
            background: truhlík.barvaHex, boxShadow: `0 0 14px ${truhlík.barvaHex}`,
            flexShrink: 0,
          }}/>
          <h2 style={{
            fontSize: 'clamp(22px, 2.5vw, 42px)', fontWeight: 800, color: C.cream,
            margin: 0, letterSpacing: '-0.025em', lineHeight: 1.05,
          }}>
            {truhlík.nazev}
            <span style={{fontWeight: 300, fontStyle: 'italic', color: truhlík.barvaHex, marginLeft: 12,
              fontSize: 'clamp(16px, 1.8vw, 28px)'}}>
              — {truhlík.bylinky.length} bylin
            </span>
          </h2>
        </div>
      </div>

      {/* Herb grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(160px, 18vw, 230px), 1fr))',
        gap: 'clamp(10px, 1.2vw, 16px)',
      }}>
        {truhlík.bylinky.map((herb, i) => (
          <HerbCard
            key={i} herb={herb} accentColor={truhlík.barvaHex}
            index={i} onClick={() => onHerbClick(herb)}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Herb modal ───────────────────────────────────────────────────────────────

function PropRow({label, value}) {
  if (!value && value !== false) return null
  return (
    <div style={{display: 'flex', gap: 12, padding: '8px 0', borderBottom: `1px solid ${C.creamDark}`}}>
      <span style={{
        fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.12em', color: C.teal,
        flexShrink: 0, width: 96, paddingTop: 1,
      }}>{label}</span>
      <span style={{fontSize: 14, color: C.ink, lineHeight: 1.5}}>
        {value === true ? 'ano' : value === false ? 'ne' : value}
      </span>
    </div>
  )
}

function HerbModal({herb, planterColor, onClose}) {
  return (
    <div
      role="dialog" aria-modal="true" aria-label={herb.nazev}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(10,26,24,0.88)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 48px)',
      }}
    >
      <div style={{
        background: C.cream, borderRadius: 20,
        maxWidth: 740, width: '100%', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
        display: 'flex', flexDirection: 'column',
        animation: 'herbFlyIn 0.4s cubic-bezier(0.16,1,0.3,1) both',
      }}>
        {/* Header */}
        <div style={{
          padding: 'clamp(22px, 3vw, 34px) clamp(22px, 3vw, 34px) 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16,
        }}>
          <div style={{flex: 1}}>
            <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: C.teal, marginBottom: 8}}>
              <span style={{color: C.orange}}>❋</span> bylinka
            </div>
            <h2 style={{fontSize: 'clamp(24px, 2.8vw, 42px)', fontWeight: 800, color: C.dark,
              margin: '0 0 4px', letterSpacing: '-0.03em', lineHeight: 1.05}}>
              {herb.nazev}
            </h2>
            <div style={{fontSize: 'clamp(12px, 0.95vw, 15px)', fontStyle: 'italic', color: C.ink, opacity: 0.5}}>
              {herb.latinsky}
              {herb.synonymum && <span style={{opacity: 0.7}}> · syn. {herb.synonymum}</span>}
            </div>
          </div>
          <button onClick={onClose} aria-label="Zavřít" style={{
            flexShrink: 0, width: 40, height: 40, borderRadius: 100,
            border: `1px solid ${C.creamDark}`, background: C.creamDark,
            cursor: 'pointer', fontSize: 20, color: C.dark,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            lineHeight: 1, transition: 'background 0.2s',
          }}>×</button>
        </div>

        {/* Pictogram row */}
        <div style={{
          padding: 'clamp(16px, 2vw, 22px) clamp(22px, 3vw, 34px)',
          display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap',
          borderBottom: `2px solid ${planterColor}22`,
        }}>
          <PropPics herb={herb}/>
          <div style={{
            height: 2, flex: 1, minWidth: 40,
            background: `linear-gradient(to right, ${planterColor}, transparent)`,
            borderRadius: 1, marginLeft: 8,
          }}/>
        </div>

        {/* Properties table */}
        <div style={{padding: '0 clamp(22px, 3vw, 34px)'}}>
          <PropRow label="Světlo" value={herb.svetlo}/>
          <PropRow label="Voda" value={herb.voda}/>
          <PropRow label="Sklizeň" value={herb.sklizen}/>
          <PropRow label="Životnost" value={herb.zivotnost}/>
          <PropRow label="Mráz" value={herb.mrazuvzdornost}/>
          <PropRow label="Opylovači" value={herb.opylovaci}/>
          <PropRow label="Sbírá se" value={herb.coSeSbira}/>
        </div>

        {/* Description */}
        {herb.popis && (
          <div style={{padding: 'clamp(20px, 2.5vw, 28px) clamp(22px, 3vw, 34px) 0'}}>
            {herb.popis.split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontSize: 'clamp(13px, 1vw, 15px)', lineHeight: 1.75, color: C.ink,
                margin: i === 0 ? 0 : '14px 0 0', opacity: 0.82,
              }}>{para}</p>
            ))}
          </div>
        )}

        {/* Warning */}
        {herb.upozorneni && (
          <div style={{
            margin: 'clamp(18px, 2.5vw, 26px) clamp(22px, 3vw, 34px)',
            padding: '14px 18px',
            background: C.orange + '10', borderLeft: `3px solid ${C.orange}`,
            borderRadius: '0 10px 10px 0',
          }}>
            <div style={{fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.15em', color: C.orange, marginBottom: 6}}>
              Upozornění / zajímavost
            </div>
            <p style={{fontSize: 'clamp(12px, 0.9vw, 14px)', lineHeight: 1.65, color: C.ink, margin: 0, opacity: 0.82}}>
              {herb.upozorneni}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function BylinkoveZahradyPage() {
  const [view, setView] = useState('overview')     // 'overview' | 'planter'
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [activeHerb, setActiveHerb] = useState(null)

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (activeHerb) setActiveHerb(null)
      else if (view === 'planter') { setView('overview'); setSelectedIdx(null) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeHerb, view])

  // Lock scroll when modal open
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

  return (
    <>
      <style>{`
        @keyframes herbFlyIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .planter-back-btn:hover { background: rgba(255,255,255,0.12) !important; }
      `}</style>

      <Nav />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section style={{
          padding: 'clamp(120px, 14vw, 200px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)',
          background: C.cream,
        }}>
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.2em',
              textTransform: 'uppercase', fontWeight: 700, marginBottom: 32, color: C.teal,
            }}>
              <span style={{color: C.orange}}>❋</span> 001 — Lokální projekt
            </div>

            <h1 style={{
              fontSize: 'clamp(48px, 7vw, 116px)', fontWeight: 800, lineHeight: 0.9,
              letterSpacing: '-0.03em', margin: '0 0 clamp(24px, 3vw, 40px)', color: C.dark,
            }}>
              Bylinkové
              <br />
              <span style={{fontWeight: 300, fontStyle: 'italic', color: C.green}}>zahrady.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(16px, 1.2vw, 21px)', lineHeight: 1.65, color: C.ink,
              maxWidth: 540, opacity: 0.78, margin: 0,
            }}>
              Šest truhlíků plných vůní, chutí a příběhů. Klikni na libovolný truhlík
              a prozkoumej byliny, které v něm rostou.
            </p>
          </div>
        </section>

        {/* ── Garden ───────────────────────────────────────────────────── */}
        <section style={{
          background: C.dark,
          padding: view === 'overview'
            ? 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px) 0'
            : '0',
          minHeight: '65vh',
          transition: 'padding 0.4s',
        }}>
          {view === 'overview' && (
            <div style={{maxWidth: 1400, margin: '0 auto'}}>
              {/* Section label */}
              <div style={{
                fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.2em',
                textTransform: 'uppercase', fontWeight: 700,
                marginBottom: 'clamp(36px, 5vw, 64px)', color: C.teal,
              }}>
                <span style={{color: C.orange}}>❋</span> 002 — Záhon
              </div>

              {/* Planter grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(220px, 28vw, 380px), 1fr))',
                gap: 'clamp(16px, 2vw, 32px)',
              }}>
                {TRUHLIKY.map((t, i) => (
                  <PlanterBox key={t.id} truhlík={t} index={i} onClick={() => handlePlanterClick(i)}/>
                ))}
              </div>
            </div>
          )}

          {view === 'planter' && selectedTruhlík && (
            <PlanterView
              truhlík={selectedTruhlík}
              onHerbClick={setActiveHerb}
              onBack={handleBack}
            />
          )}

          {/* Ground strip */}
          <div style={{
            height: 28,
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.32))',
            marginTop: view === 'overview' ? 'clamp(40px, 5vw, 72px)' : 'clamp(24px, 3vw, 40px)',
          }}/>
        </section>
      </main>

      <Footer />

      {/* Herb modal */}
      {activeHerb && (
        <HerbModal
          herb={activeHerb}
          planterColor={selectedTruhlík?.barvaHex ?? C.green}
          onClose={() => setActiveHerb(null)}
        />
      )}
    </>
  )
}

export default BylinkoveZahradyPage
