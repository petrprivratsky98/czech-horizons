'use client'
import {useState, useEffect} from 'react'
import {C} from '@/app/components/Colors'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import {TRUHLIKY} from './data'

// ─── Planter card ────────────────────────────────────────────────────────────

function PlanterCard({truhlík, index, isActive, onClick}) {
  const isZadni = truhlík.rada === 'zadni'
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-pressed={isActive}
      style={{
        width: '100%',
        cursor: 'pointer',
        border: 'none',
        padding: 0,
        background: 'none',
        display: 'flex',
        flexDirection: 'column',
        transform: isActive
          ? 'translateY(-6px)'
          : hovered
          ? 'translateY(-3px)'
          : isZadni
          ? 'translateY(0) scale(0.97)'
          : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isZadni ? 0.9 : 1,
      }}
    >
      <div
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          boxShadow: isActive
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 3px ${truhlík.barvaHex}`
            : hovered
            ? '0 12px 40px rgba(0,0,0,0.45)'
            : '0 6px 24px rgba(0,0,0,0.3)',
          border: `3px solid ${isActive ? truhlík.barvaHex : '#5C3D1E'}`,
          transition: 'box-shadow 0.35s, border-color 0.35s',
        }}
      >
        {/* Plant zone */}
        <div
          style={{
            background: '#243d22',
            padding: '24px 20px 16px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: 5,
            minHeight: 96,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle radial glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(ellipse at 50% 100%, ${truhlík.barvaHex}30, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
          {/* Herb stalks */}
          {truhlík.bylinky.slice(0, Math.min(truhlík.bylinky.length, 10)).map((b, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 4,
                height: 14 + (i % 5) * 8,
                background:
                  i % 2 === 0 ? 'rgba(255,255,255,0.55)' : truhlík.barvaHex + 'cc',
                borderRadius: '4px 4px 1px 1px',
                transition: 'height 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Wood body */}
        <div
          style={{
            background: 'linear-gradient(to bottom, #9B6B35, #7A5228)',
            padding: '14px 18px 18px',
            borderTop: '4px solid #5C3D1E',
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: truhlík.barvaHex + '30',
              border: `1px solid ${truhlík.barvaHex}70`,
              borderRadius: 100,
              padding: '3px 10px',
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: truhlík.barvaHex,
                boxShadow: `0 0 6px ${truhlík.barvaHex}`,
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: truhlík.barvaHex,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                filter: 'brightness(1.3)',
              }}
            >
              {truhlík.bylinky.length} bylin
            </span>
          </div>

          <div
            style={{
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
              marginBottom: 8,
            }}
          >
            {truhlík.nazev}
          </div>

          <div
            style={{
              fontSize: 11,
              color: isActive ? truhlík.barvaHex : 'rgba(255,255,255,0.4)',
              letterSpacing: '0.06em',
              fontWeight: isActive ? 700 : 400,
              filter: isActive ? 'brightness(1.3)' : 'none',
              transition: 'color 0.3s',
            }}
          >
            {isActive ? '▼ Otevřeno' : 'Rozkliknout ▸'}
          </div>
        </div>
      </div>

      {/* Planter legs */}
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 18%'}}>
        <div style={{width: 10, height: 10, background: '#5C3D1E', borderRadius: '0 0 2px 2px'}} />
        <div style={{width: 10, height: 10, background: '#5C3D1E', borderRadius: '0 0 2px 2px'}} />
      </div>
    </button>
  )
}

// ─── Herb card in panel ───────────────────────────────────────────────────────

function HerbCard({herb, accentColor, onClick}) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '100%',
        textAlign: 'left',
        background: hovered ? C.cream : C.creamDark,
        border: `1px solid ${hovered ? accentColor + '80' : C.creamDark}`,
        borderRadius: 10,
        padding: '14px 16px',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 24px rgba(0,0,0,0.08)` : 'none',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(13px, 1vw, 15px)',
          fontWeight: 700,
          color: C.dark,
          marginBottom: 4,
          lineHeight: 1.3,
        }}
      >
        {herb.nazev}
      </div>
      <div
        style={{
          fontSize: 11,
          color: C.ink,
          opacity: 0.5,
          fontStyle: 'italic',
          lineHeight: 1.3,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {herb.latinsky.split('/')[0].trim()}
      </div>
    </button>
  )
}

// ─── Herbs panel ─────────────────────────────────────────────────────────────

function HerbsPanel({truhlík, onHerbClick}) {
  return (
    <div
      style={{
        maxWidth: 1400,
        margin: '0 auto',
        padding: 'clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)',
      }}
    >
      {/* Panel header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 'clamp(24px, 3vw, 40px)',
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: truhlík.barvaHex,
            boxShadow: `0 0 12px ${truhlík.barvaHex}`,
            flexShrink: 0,
          }}
        />
        <h2
          style={{
            fontSize: 'clamp(20px, 2.2vw, 36px)',
            fontWeight: 800,
            color: C.cream,
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          {truhlík.nazev}
          <span
            style={{
              fontWeight: 300,
              fontStyle: 'italic',
              color: truhlík.barvaHex,
              marginLeft: 12,
            }}
          >
            — {truhlík.bylinky.length} bylin
          </span>
        </h2>
      </div>

      {/* Herbs grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(160px, 18vw, 240px), 1fr))',
          gap: 'clamp(8px, 1vw, 14px)',
        }}
      >
        {truhlík.bylinky.map((herb, i) => (
          <HerbCard
            key={i}
            herb={herb}
            accentColor={truhlík.barvaHex}
            onClick={() => onHerbClick(herb)}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Herb modal ───────────────────────────────────────────────────────────────

function PropRow({label, value}) {
  if (!value) return null
  return (
    <div style={{display: 'flex', gap: 12, padding: '8px 0', borderBottom: `1px solid ${C.creamDark}`}}>
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: C.teal,
          flexShrink: 0,
          width: 100,
          paddingTop: 1,
        }}
      >
        {label}
      </span>
      <span style={{fontSize: 14, color: C.ink, lineHeight: 1.5}}>{value}</span>
    </div>
  )
}

function HerbModal({herb, planterColor, onClose}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={herb.nazev}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(10,26,24,0.85)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 48px)',
      }}
    >
      <div
        style={{
          background: C.cream,
          borderRadius: 16,
          maxWidth: 720,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Modal header */}
        <div
          style={{
            padding: 'clamp(20px, 3vw, 32px) clamp(20px, 3vw, 32px) 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
          }}
        >
          <div style={{flex: 1}}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: C.teal,
                marginBottom: 8,
              }}
            >
              <span style={{color: C.orange}}>❋</span> bylinka
            </div>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.8vw, 40px)',
                fontWeight: 800,
                color: C.dark,
                margin: '0 0 4px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
              }}
            >
              {herb.nazev}
            </h2>
            <div
              style={{
                fontSize: 'clamp(12px, 0.95vw, 15px)',
                fontStyle: 'italic',
                color: C.ink,
                opacity: 0.55,
              }}
            >
              {herb.latinsky}
              {herb.synonymum && (
                <span style={{opacity: 0.7}}> · syn. {herb.synonymum}</span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Zavřít"
            style={{
              flexShrink: 0,
              width: 40,
              height: 40,
              borderRadius: 100,
              border: `1px solid ${C.creamDark}`,
              background: C.creamDark,
              cursor: 'pointer',
              fontSize: 20,
              color: C.dark,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              transition: 'background 0.2s',
            }}
          >
            ×
          </button>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 2,
            background: `linear-gradient(to right, ${planterColor}, transparent)`,
            margin: 'clamp(16px, 2vw, 24px) clamp(20px, 3vw, 32px)',
          }}
        />

        {/* Properties */}
        <div style={{padding: '0 clamp(20px, 3vw, 32px)'}}>
          <PropRow label="Světlo" value={herb.svetlo} />
          <PropRow label="Voda" value={herb.voda} />
          <PropRow label="Sklizeň" value={herb.sklizen} />
          <PropRow label="Životnost" value={herb.zivotnost} />
          <PropRow label="Mráz" value={herb.mrazuvzdornost} />
          <PropRow label="Opylovači" value={herb.opylovaci ? 'ano' : 'ne'} />
          <PropRow label="Sbírá se" value={herb.coSeSbira} />
        </div>

        {/* Description */}
        {herb.popis && (
          <div
            style={{
              padding: 'clamp(20px, 2.5vw, 28px) clamp(20px, 3vw, 32px) 0',
            }}
          >
            {herb.popis.split('\n\n').map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 'clamp(13px, 1vw, 15px)',
                  lineHeight: 1.75,
                  color: C.ink,
                  margin: i === 0 ? 0 : '16px 0 0',
                  opacity: 0.85,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Warning / interesting fact */}
        {herb.upozorneni && (
          <div
            style={{
              margin: 'clamp(20px, 2.5vw, 28px) clamp(20px, 3vw, 32px)',
              padding: '14px 18px',
              background: C.orange + '12',
              borderLeft: `3px solid ${C.orange}`,
              borderRadius: '0 8px 8px 0',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: C.orange,
                marginBottom: 6,
              }}
            >
              Upozornění / zajímavost
            </div>
            <p
              style={{
                fontSize: 'clamp(12px, 0.9vw, 14px)',
                lineHeight: 1.65,
                color: C.ink,
                margin: 0,
                opacity: 0.85,
              }}
            >
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
  const [activePlanter, setActivePlanter] = useState(null)
  const [activeHerb, setActiveHerb] = useState(null)

  // Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (activeHerb) setActiveHerb(null)
      else if (activePlanter !== null) setActivePlanter(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeHerb, activePlanter])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeHerb ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeHerb])

  const handlePlanterClick = (index) => {
    setActivePlanter((prev) => (prev === index ? null : index))
    setActiveHerb(null)
  }

  const activeTruhlík = activePlanter !== null ? TRUHLIKY[activePlanter] : null

  return (
    <>
      <Nav />

      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section
          style={{
            padding:
              'clamp(120px, 14vw, 200px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 120px)',
            background: C.cream,
          }}
        >
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            <div
              style={{
                fontSize: 'clamp(11px, 0.85vw, 14px)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 32,
                color: C.teal,
              }}
            >
              <span style={{color: C.orange}}>❋</span> 001 — Lokální projekt
            </div>

            <h1
              style={{
                fontSize: 'clamp(48px, 7vw, 120px)',
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: '-0.03em',
                margin: '0 0 clamp(24px, 3vw, 40px)',
                color: C.dark,
              }}
            >
              Bylinkové
              <br />
              <span
                style={{
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: C.green,
                }}
              >
                zahrady.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 1.2vw, 20px)',
                lineHeight: 1.65,
                color: C.ink,
                maxWidth: 560,
                opacity: 0.8,
                margin: 0,
              }}
            >
              Šest truhlíků plných vůní, chutí a příběhů. Klikni na libovolný
              truhlík a prozkoumej byliny, které v něm rostou.
            </p>
          </div>
        </section>

        {/* ── Garden ────────────────────────────────────────────────── */}
        <section
          style={{
            background: C.dark,
            padding:
              'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px) 0',
          }}
        >
          <div style={{maxWidth: 1400, margin: '0 auto'}}>
            {/* Section label */}
            <div
              style={{
                fontSize: 'clamp(11px, 0.85vw, 14px)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 'clamp(32px, 4vw, 56px)',
                color: C.teal,
              }}
            >
              <span style={{color: C.orange}}>❋</span> 002 — Záhon
            </div>

            {/* Row label – back */}
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              Zadní řada
            </div>

            {/* Back row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(12px, 1.5vw, 24px)',
                marginBottom: 'clamp(20px, 2.5vw, 36px)',
              }}
            >
              {TRUHLIKY.slice(0, 3).map((truhlík, i) => (
                <PlanterCard
                  key={truhlík.id}
                  truhlík={truhlík}
                  index={i}
                  isActive={activePlanter === i}
                  onClick={() => handlePlanterClick(i)}
                />
              ))}
            </div>

            {/* Front row label */}
            <div
              style={{
                fontSize: 10,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.25)',
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              Přední řada
            </div>

            {/* Front row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp(12px, 1.5vw, 24px)',
              }}
            >
              {TRUHLIKY.slice(3, 6).map((truhlík, i) => (
                <PlanterCard
                  key={truhlík.id}
                  truhlík={truhlík}
                  index={i + 3}
                  isActive={activePlanter === i + 3}
                  onClick={() => handlePlanterClick(i + 3)}
                />
              ))}
            </div>
          </div>

          {/* Herbs panel */}
          <div
            style={{
              maxHeight: activeTruhlík ? '2000px' : 0,
              opacity: activeTruhlík ? 1 : 0,
              overflow: 'hidden',
              transition:
                'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
              borderTop: activeTruhlík
                ? `1px solid rgba(255,255,255,0.08)`
                : 'none',
              marginTop: activeTruhlík ? 'clamp(32px, 4vw, 56px)' : 0,
            }}
          >
            {activeTruhlík && (
              <HerbsPanel truhlík={activeTruhlík} onHerbClick={setActiveHerb} />
            )}
          </div>

          {/* Ground strip */}
          <div
            style={{
              height: 24,
              background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
              marginTop: 'clamp(32px, 4vw, 56px)',
            }}
          />
        </section>
      </main>

      <Footer />

      {/* Herb modal */}
      {activeHerb && (
        <HerbModal
          herb={activeHerb}
          planterColor={activeTruhlík?.barvaHex ?? C.orange}
          onClose={() => setActiveHerb(null)}
        />
      )}
    </>
  )
}

export default BylinkoveZahradyPage
