'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { C } from '../../components/Colors'

const DEG = Math.PI / 180

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  VARIANT 1 — European City Network
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const CITIES = [
  { lat: 50.08, lng: 14.42, home: true },   // Praha
  { lat: 52.52, lng: 13.41 },               // Berlín
  { lat: 48.86, lng: 2.35 },                // Paříž
  { lat: 40.42, lng: -3.70 },               // Madrid
  { lat: 41.90, lng: 12.49 },               // Řím
  { lat: 48.21, lng: 16.37 },               // Vídeň
  { lat: 52.23, lng: 21.01 },               // Varšava
  { lat: 47.50, lng: 19.04 },               // Budapešť
  { lat: 52.37, lng: 4.90 },                // Amsterdam
  { lat: 59.33, lng: 18.07 },               // Stockholm
  { lat: 38.72, lng: -9.14 },               // Lisabon
  { lat: 37.98, lng: 23.73 },               // Athény
  { lat: 55.68, lng: 12.57 },               // Kodaň
  { lat: 53.33, lng: -6.25 },               // Dublin
  { lat: 48.15, lng: 17.11 },               // Bratislava
  { lat: 46.05, lng: 14.50 },               // Ljubljana
  { lat: 45.81, lng: 15.98 },               // Záhřeb
  { lat: 44.43, lng: 26.10 },               // Bukurešť
  { lat: 60.17, lng: 24.94 },               // Helsinki
  { lat: 59.91, lng: 10.75 },               // Oslo
  { lat: 59.44, lng: 24.75 },               // Tallinn
  { lat: 54.69, lng: 25.28 },               // Vilnius
  { lat: 56.95, lng: 24.11 },               // Riga
  { lat: 44.80, lng: 20.46 },               // Bělehrad
  { lat: 42.70, lng: 23.32 },               // Sofie
  { lat: 41.99, lng: 21.43 },               // Skopje
  { lat: 39.93, lng: 32.86 },               // Ankara
  { lat: 64.13, lng: -21.82 },              // Reykjavík
  { lat: 46.95, lng: 7.44 },                // Bern
  { lat: 50.85, lng: 4.35 },                // Brusel
  { lat: 49.61, lng: 6.13 },                // Lucemburk
  { lat: 35.90, lng: 14.51 },               // Valletta
  { lat: 35.17, lng: 33.38 },               // Nikósia
]

const LNG_MIN = -25, LNG_MAX = 42, LAT_MIN = 28, LAT_MAX = 70
const MAP_W = LNG_MAX - LNG_MIN, MAP_H = LAT_MAX - LAT_MIN
const MAP_ASPECT = MAP_W / MAP_H

// Simplified Europe outlines — [lng, lat] pairs
const CONTINENTAL = [
  [-5.3, 36.1], [0.0, 37.5], [0.8, 40.5], [3.0, 42.5],
  [5.0, 43.3], [7.5, 43.7], [8.0, 44.0],
  [10.0, 43.5], [11.5, 42.3], [13.0, 40.8], [15.5, 38.3],
  [15.8, 37.6], [16.2, 38.5],
  [18.5, 40.4], [17.8, 41.0], [16.5, 41.5],
  [14.5, 42.5], [13.5, 44.0], [13.5, 45.5],
  [14.0, 45.2], [16.5, 43.0], [19.0, 42.0], [20.5, 40.5],
  [21.5, 37.5], [23.5, 37.0], [26.0, 38.5],
  [28.5, 41.5],
  [28.5, 43.5], [30.0, 45.5], [31.0, 46.5],
  [33.0, 46.5], [37.0, 47.0], [40.0, 48.5], [38.0, 55.0], [33.0, 60.0],
  [28.5, 60.5], [25.5, 60.2], [23.5, 59.5],
  [22.5, 57.0], [21.0, 57.5], [20.0, 57.5],
  [18.5, 54.5], [14.5, 54.0],
  [9.5, 55.0], [8.5, 55.0],
  [8.0, 55.5], [6.5, 53.5], [4.0, 52.5], [2.5, 51.2], [2.0, 51.0],
  [1.5, 50.5], [-1.5, 49.5], [-2.0, 47.5],
  [-4.7, 48.0], [-4.5, 47.5],
  [-2.0, 47.0], [-2.0, 45.0], [-1.8, 43.4],
  [-4.0, 43.6], [-8.0, 43.7], [-9.0, 43.3],
  [-8.8, 42.7], [-8.8, 41.8], [-9.3, 40.8], [-9.5, 38.5],
  [-9.5, 37.0], [-9.5, 36.1],
  [-8.7, 37.0], [-7.0, 37.0], [-6.2, 36.5], [-5.3, 36.1],
]

const SCANDINAVIA = [
  [5.0, 58.0], [5.5, 62.0], [7.0, 63.0], [14.0, 67.0],
  [17.5, 68.5], [20.0, 69.5], [24.0, 69.8],
  [28.5, 69.5], [30.0, 67.0],
  [29.0, 65.0], [26.0, 65.5], [25.0, 65.0],
  [24.0, 64.0], [22.0, 63.5], [21.0, 63.0],
  [20.5, 62.0], [19.5, 61.0], [18.5, 59.5],
  [18.0, 59.3], [17.5, 58.5], [16.0, 57.5],
  [14.5, 56.2], [13.0, 55.5], [12.5, 56.0],
  [11.0, 57.7], [8.5, 58.0], [7.0, 58.0], [5.0, 58.0],
]

function CityNetworkCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    let raf, pulse = 0

    const cities = CITIES.map(c => ({
      ...c,
      nx: (c.lng - LNG_MIN) / MAP_W,
      ny: (LAT_MAX - c.lat) / MAP_H,
    }))

    const THRESH = 0.22
    const edges = []
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        const d = Math.hypot(cities[i].nx - cities[j].nx, cities[i].ny - cities[j].ny)
        if (d < THRESH) edges.push({ i, j, t: 1 - d / THRESH })
      }
    }

    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight
      if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
        canvas.width = Math.round(W * dpr)
        canvas.height = Math.round(H * dpr)
      }
      const ctx = canvas.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)
      pulse += 0.02

      // Letter-box map to preserve aspect ratio
      let mW, mH, mX, mY
      if (W / H > MAP_ASPECT) {
        mH = H * 0.85; mW = mH * MAP_ASPECT
        mX = (W - mW) / 2; mY = H * 0.075
      } else {
        mW = W * 0.92; mH = mW / MAP_ASPECT
        mX = W * 0.04; mY = (H - mH) / 2
      }

      const ox = (mouseRef.current.x - 0.5) * 28
      const oy = (mouseRef.current.y - 0.5) * 14

      ctx.save()
      ctx.translate(ox, oy)

      // Europe outlines
      const toXY = (lng, lat) => [(lng - LNG_MIN) / MAP_W * mW + mX, (LAT_MAX - lat) / MAP_H * mH + mY]
      const drawOutline = (coords) => {
        ctx.beginPath()
        const [sx, sy] = toXY(coords[0][0], coords[0][1])
        ctx.moveTo(sx, sy)
        for (let i = 1; i < coords.length; i++) {
          const [px, py] = toXY(coords[i][0], coords[i][1])
          ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.fillStyle = 'rgba(247,242,232,0.04)'
        ctx.fill()
        ctx.strokeStyle = 'rgba(247,242,232,0.09)'
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
      drawOutline(CONTINENTAL)
      drawOutline(SCANDINAVIA)

      for (const e of edges) {
        const ax = cities[e.i].nx * mW + mX, ay = cities[e.i].ny * mH + mY
        const bx = cities[e.j].nx * mW + mX, by = cities[e.j].ny * mH + mY
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.strokeStyle = `rgba(247,242,232,${e.t * 0.16})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      }

      for (const c of cities) {
        const cx = c.nx * mW + mX, cy = c.ny * mH + mY

        if (c.home) {
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70)
          grad.addColorStop(0, 'rgba(232,130,61,0.18)')
          grad.addColorStop(1, 'rgba(232,130,61,0)')
          ctx.fillStyle = grad
          ctx.beginPath(); ctx.arc(cx, cy, 70, 0, Math.PI * 2); ctx.fill()

          const p = Math.sin(pulse) * 0.5 + 0.5
          for (let ring = 0; ring < 3; ring++) {
            ctx.beginPath()
            ctx.arc(cx, cy, 10 + ring * 10 + p * 5, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(232,130,61,${(1 - ring / 3) * 0.2 * p})`
            ctx.lineWidth = 1; ctx.stroke()
          }
          ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2)
          ctx.fillStyle = '#e8823d'; ctx.fill()
        } else {
          ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(247,242,232,0.42)'; ctx.fill()
        }
      }

      ctx.restore()
      raf = requestAnimationFrame(draw)
    }

    const onMouse = e => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
    }
    window.addEventListener('mousemove', onMouse)
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMouse) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  VARIANT 2 — Wireframe Globe
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function GlobeCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    let raf, theta = 0

    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight
      if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
        canvas.width = Math.round(W * dpr)
        canvas.height = Math.round(H * dpr)
      }
      const ctx = canvas.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      theta += 0.004

      const R = Math.min(W, H) * 0.4
      const cx = W * 0.5, cy = H * 0.5
      const tiltX = (mouseRef.current.y - 0.5) * 0.55
      const tiltY = (mouseRef.current.x - 0.5) * 0.35

      const project = (lat, lng) => {
        const φ = lat * DEG, λ = lng * DEG + theta
        const x0 = R * Math.cos(φ) * Math.sin(λ)
        const y0 = -R * Math.sin(φ)
        const z0 = R * Math.cos(φ) * Math.cos(λ)
        // rotate around X axis (tiltX)
        const y1 = y0 * Math.cos(tiltX) - z0 * Math.sin(tiltX)
        const z1 = y0 * Math.sin(tiltX) + z0 * Math.cos(tiltX)
        // rotate around Y axis (tiltY)
        const x2 = x0 * Math.cos(tiltY) + z1 * Math.sin(tiltY)
        const z2 = -x0 * Math.sin(tiltY) + z1 * Math.cos(tiltY)
        return { sx: x2 + cx, sy: y1 + cy, z: z2 }
      }

      const drawLines = (pts) => {
        for (let i = 0; i < pts.length - 1; i++) {
          const a = pts[i], b = pts[i + 1]
          const avgZ = (a.z + b.z) * 0.5
          if (avgZ < -R * 0.12) continue
          const alpha = avgZ > 0 ? 0.07 + (avgZ / R) * 0.35 : 0.035
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy)
          ctx.strokeStyle = `rgba(247,242,232,${alpha})`
          ctx.lineWidth = 0.7; ctx.stroke()
        }
      }

      // Sphere atmosphere glow
      const atm = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.1)
      atm.addColorStop(0, 'rgba(45,138,122,0.06)')
      atm.addColorStop(1, 'rgba(45,138,122,0)')
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2)
      ctx.fillStyle = atm; ctx.fill()

      // Meridians every 20°
      for (let lng = 0; lng < 360; lng += 20) {
        const pts = []
        for (let lat = -88; lat <= 88; lat += 4) pts.push(project(lat, lng))
        drawLines(pts)
      }

      // Parallels every 20°
      for (let lat = -80; lat <= 80; lat += 20) {
        const pts = []
        for (let lng = 0; lng <= 364; lng += 4) pts.push(project(lat, lng))
        drawLines(pts)
      }

      // Equator slightly brighter
      const eq = []
      for (let lng = 0; lng <= 364; lng += 2) eq.push(project(0, lng))
      for (let i = 0; i < eq.length - 1; i++) {
        const a = eq[i], b = eq[i + 1]
        const avgZ = (a.z + b.z) * 0.5
        if (avgZ < 0) continue
        ctx.beginPath(); ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy)
        ctx.strokeStyle = `rgba(45,138,122,${0.1 + (avgZ / R) * 0.25})`
        ctx.lineWidth = 1; ctx.stroke()
      }

      // Edge circle
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(232,130,61,0.22)'; ctx.lineWidth = 1.5; ctx.stroke()

      // Praha dot
      const pr = project(50.08, 14.42)
      if (pr.z > -R * 0.15) {
        const op = Math.min(1, (pr.z + R * 0.15) / (R * 1.1))
        const glw = ctx.createRadialGradient(pr.sx, pr.sy, 0, pr.sx, pr.sy, 22)
        glw.addColorStop(0, `rgba(232,130,61,${op * 0.4})`)
        glw.addColorStop(1, 'rgba(232,130,61,0)')
        ctx.beginPath(); ctx.arc(pr.sx, pr.sy, 22, 0, Math.PI * 2)
        ctx.fillStyle = glw; ctx.fill()
        ctx.beginPath(); ctx.arc(pr.sx, pr.sy, 4.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,130,61,${op})`; ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onMouse = e => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
    }
    window.addEventListener('mousemove', onMouse)
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMouse) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  VARIANT 3 — Particle Network
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const PCOLORS = [
  [247, 242, 232],  // cream (most common)
  [247, 242, 232],
  [247, 242, 232],
  [232, 130, 61],   // orange
  [45, 138, 122],   // teal
  [74, 155, 78],    // green
]

function ParticlesCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    let raf
    let particles = []

    const initParticles = (W, H) => {
      particles = Array.from({ length: 75 }, () => {
        const [r, g, b] = PCOLORS[Math.floor(Math.random() * PCOLORS.length)]
        return {
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          size: Math.random() * 2 + 1,
          r, g, b,
          alpha: Math.random() * 0.35 + 0.18,
        }
      })
    }

    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight
      const needsResize = canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)
      if (needsResize) {
        canvas.width = Math.round(W * dpr)
        canvas.height = Math.round(H * dpr)
        initParticles(W, H)
      }

      const ctx = canvas.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, W, H)

      const mx = mouseRef.current.x, my = mouseRef.current.y

      for (const p of particles) {
        const dx = mx - p.x, dy = my - p.y
        const md = Math.hypot(dx, dy)
        if (md < 200 && md > 1) {
          p.vx += (dx / md) * 0.025
          p.vy += (dy / md) * 0.025
        }
        p.x += p.vx; p.y += p.vy
        const spd = Math.hypot(p.vx, p.vy)
        if (spd > 1.3) { p.vx /= spd / 1.3; p.vy /= spd / 1.3 }
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx) }
        if (p.x > W) { p.x = W; p.vx = -Math.abs(p.vx) }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy) }
        if (p.y > H) { p.y = H; p.vy = -Math.abs(p.vy) }
      }

      // Mouse glow
      if (mx > -999) {
        const mglow = ctx.createRadialGradient(mx, my, 0, mx, my, 180)
        mglow.addColorStop(0, 'rgba(232,130,61,0.09)')
        mglow.addColorStop(1, 'rgba(232,130,61,0)')
        ctx.fillStyle = mglow; ctx.fillRect(0, 0, W, H)
      }

      // Edges
      const MAX = 130
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (d < MAX) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(247,242,232,${(1 - d / MAX) * 0.1})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }

      // Dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.alpha})`;
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onMouse = e => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMouse)
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMouse) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TEST PAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const VARIANTS = [
  { n: 1, label: 'Síť měst', Component: CityNetworkCanvas },
  { n: 2, label: 'Glóbus', Component: GlobeCanvas },
  { n: 3, label: 'Částice', Component: ParticlesCanvas },
]

function HeroVariant({ n, label, Component }) {
  return (
    <section id={`v${n}`} style={{
      position: 'relative', overflow: 'hidden',
      background: C.dark, minHeight: '100svh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(135deg, ${C.dark}cc 0%, ${C.dark}99 50%, ${C.dark}aa 100%)`,
      }} />

      {/* animated element */}
      <div style={{
        position: 'absolute', top: 0, right: '-2%',
        width: '62%', height: '100%',
        zIndex: 5, pointerEvents: 'none',
      }}>
        <Component />
      </div>

      {/* big background number */}
      <div style={{
        position: 'absolute', bottom: 20, right: 32, zIndex: 4,
        fontSize: 'clamp(100px, 18vw, 260px)', fontWeight: 800, lineHeight: 1,
        color: 'rgba(247,242,232,0.035)', letterSpacing: '-0.05em', userSelect: 'none',
      }}>{n}</div>

      {/* text content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '5px 14px', borderRadius: 100, marginBottom: 32,
          background: 'rgba(232,130,61,0.18)', border: '1px solid rgba(232,130,61,0.4)',
          color: C.orange, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          Varianta {n} — {label}
        </div>

        <div style={{ maxWidth: 'min(580px, 52%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'clamp(20px, 3vw, 36px)' }}>
            <div style={{ width: 40, height: 1, background: C.cream }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cream }}>
              Est. 2025 · Praha · Erasmus+ partner
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(38px, 9vw, 120px)', fontWeight: 800, lineHeight: 0.95,
            letterSpacing: '-0.035em', margin: '0 0 clamp(24px, 3vw, 44px)', color: C.cream,
          }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Posouváme</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>tvůj</span>
            <span style={{
              display: 'block', whiteSpace: 'nowrap', color: C.orange,
              fontWeight: 300, fontStyle: 'italic', fontSize: '1.1em', lineHeight: 0.9,
            }}>horizont.</span>
          </h2>

          <p style={{
            fontSize: 'clamp(15px, 1.3vw, 20px)', lineHeight: 1.65,
            color: `${C.cream}cc`, maxWidth: 480, marginBottom: 'clamp(24px, 3vw, 40px)',
          }}>
            Spolek propojující zdraví, životní prostředí a připravenost na krizi skrze Erasmus+, dobrovolnické programy a lokální akce v Praze.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '15px 30px', borderRadius: 100,
              background: C.orange, color: C.cream,
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>Aktuální projekty ↗</span>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '15px 30px', borderRadius: 100,
              border: `1.5px solid ${C.cream}`, color: C.cream,
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>Události</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TestAnimaceClient() {
  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center',
        padding: '10px 24px',
        background: `${C.ink}ee`, backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(247,242,232,0.07)',
      }}>
        {VARIANTS.map(v => (
          <a key={v.n} href={`#v${v.n}`} style={{
            padding: '7px 18px', borderRadius: 100,
            background: 'rgba(247,242,232,0.06)',
            color: C.cream, fontSize: 12, fontWeight: 600,
            textDecoration: 'none', border: '1px solid rgba(247,242,232,0.1)',
            letterSpacing: '0.04em', whiteSpace: 'nowrap',
          }}>
            {v.n} — {v.label}
          </a>
        ))}
        <Link href="/" style={{
          padding: '7px 18px', borderRadius: 100, marginLeft: 8,
          background: 'rgba(232,130,61,0.14)',
          color: C.orange, fontSize: 12, fontWeight: 600,
          textDecoration: 'none', border: '1px solid rgba(232,130,61,0.28)',
          whiteSpace: 'nowrap',
        }}>
          ← Zpět
        </Link>
      </nav>

      {VARIANTS.map(v => (
        <HeroVariant key={v.n} n={v.n} label={v.label} Component={v.Component} />
      ))}
    </>
  )
}
