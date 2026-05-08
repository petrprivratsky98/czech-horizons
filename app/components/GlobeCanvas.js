'use client'
import { useEffect, useRef } from 'react'
import { C } from './Colors'
import { CAPITALS } from './capitals'

const DEG = Math.PI / 180

export default function GlobeCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    let raf, theta = 0, geoLines = null

    Promise.all([
      import('world-atlas/countries-110m.json'),
      import('topojson-client'),
    ]).then(([{ default: topo }, { mesh }]) => {
      geoLines = mesh(topo, topo.objects.countries).coordinates
    })

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

      const R = Math.min(W, H) * 0.42
      const cx = W * 0.5, cy = H * 0.5
      const tiltX = (mouseRef.current.y - 0.5) * 0.55
      const tiltY = (mouseRef.current.x - 0.5) * 0.35

      const project = (lat, lng) => {
        const φ = lat * DEG, λ = lng * DEG + theta
        const x0 = R * Math.cos(φ) * Math.sin(λ)
        const y0 = -R * Math.sin(φ)
        const z0 = R * Math.cos(φ) * Math.cos(λ)
        const y1 = y0 * Math.cos(tiltX) - z0 * Math.sin(tiltX)
        const z1 = y0 * Math.sin(tiltX) + z0 * Math.cos(tiltX)
        const x2 = x0 * Math.cos(tiltY) + z1 * Math.sin(tiltY)
        const z2 = -x0 * Math.sin(tiltY) + z1 * Math.cos(tiltY)
        return { sx: x2 + cx, sy: y1 + cy, z: z2 }
      }

      const drawLines = (pts) => {
        for (let i = 0; i < pts.length - 1; i++) {
          const a = pts[i], b = pts[i + 1]
          const avgZ = (a.z + b.z) * 0.5
          if (avgZ < -R * 0.12) continue
          const alpha = avgZ > 0 ? 0.025 + (avgZ / R) * 0.08 : 0.015
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy)
          ctx.strokeStyle = `rgba(247,242,232,${alpha})`
          ctx.lineWidth = 0.7; ctx.stroke()
        }
      }

      // Atmosphere glow
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
        ctx.strokeStyle = `rgba(45,138,122,${0.04 + (avgZ / R) * 0.1})`
        ctx.lineWidth = 0.8; ctx.stroke()
      }

      // Country borders
      if (geoLines) {
        ctx.beginPath()
        ctx.lineWidth = 0.5
        for (const line of geoLines) {
          for (let i = 0; i < line.length - 1; i++) {
            if (Math.abs(line[i + 1][0] - line[i][0]) > 180) continue
            const a = project(line[i][1], line[i][0])
            const b = project(line[i + 1][1], line[i + 1][0])
            if (a.z <= 0 || b.z <= 0) continue
            ctx.moveTo(a.sx, a.sy); ctx.lineTo(b.sx, b.sy)
          }
        }
        ctx.strokeStyle = 'rgba(247,242,232,0.2)'
        ctx.stroke()
      }

      // Edge circle
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(232,130,61,0.22)'; ctx.lineWidth = 1.5; ctx.stroke()

      // City dots
      for (const c of CAPITALS) {
        const p = project(c.lat, c.lng)
        if (p.z <= 0) continue
        const op = Math.min(1, p.z / R * 2.2)

        if (c.home) {
          const pulse = Math.sin(Date.now() * 0.003) * 0.5 + 0.5
          const glw = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, 14)
          glw.addColorStop(0, `rgba(232,130,61,${op * (0.3 + pulse * 0.2)})`)
          glw.addColorStop(1, 'rgba(232,130,61,0)')
          ctx.beginPath(); ctx.arc(p.sx, p.sy, 14, 0, Math.PI * 2)
          ctx.fillStyle = glw; ctx.fill()
          ctx.beginPath(); ctx.arc(p.sx, p.sy, 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(232,130,61,${op})`; ctx.fill()
        } else {
          ctx.beginPath(); ctx.arc(p.sx, p.sy, 1.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(247,242,232,${op * 0.7})`; ctx.fill()
        }
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

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  )
}
