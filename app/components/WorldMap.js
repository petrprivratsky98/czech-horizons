'use client'

import {useState, useEffect} from 'react'
import {C} from './Colors'

// Názvy zemí z Sanity (ISO2) -> ISO3 (použité v GeoJSON)
const ISO2_TO_ISO3 = {
  AT: 'AUT', BE: 'BEL', BG: 'BGR', HR: 'HRV', CY: 'CYP', CZ: 'CZE',
  DK: 'DNK', EE: 'EST', FI: 'FIN', FR: 'FRA', DE: 'DEU', GR: 'GRC',
  HU: 'HUN', IS: 'ISL', IE: 'IRL', IT: 'ITA', LV: 'LVA', LI: 'LIE',
  LT: 'LTU', LU: 'LUX', MT: 'MLT', NL: 'NLD', MK: 'MKD', NO: 'NOR',
  PL: 'POL', PT: 'PRT', RO: 'ROU', RS: 'SRB', SK: 'SVK', SI: 'SVN',
  ES: 'ESP', SE: 'SWE', TR: 'TUR',
}

const ZEME_NAZVY = {
  AT: 'Rakousko', BE: 'Belgie', BG: 'Bulharsko', HR: 'Chorvatsko',
  CY: 'Kypr', CZ: 'Česko', DK: 'Dánsko', EE: 'Estonsko', FI: 'Finsko',
  FR: 'Francie', DE: 'Německo', GR: 'Řecko', HU: 'Maďarsko',
  IS: 'Island', IE: 'Irsko', IT: 'Itálie', LV: 'Lotyšsko',
  LI: 'Lichtenštejnsko', LT: 'Litva', LU: 'Lucembursko', MT: 'Malta',
  NL: 'Nizozemsko', MK: 'Severní Makedonie', NO: 'Norsko', PL: 'Polsko',
  PT: 'Portugalsko', RO: 'Rumunsko', RS: 'Srbsko', SK: 'Slovensko',
  SI: 'Slovinsko', ES: 'Španělsko', SE: 'Švédsko', TR: 'Turecko',
}

export default function WorldMap({navstivenaData}) {
  const [hovered, setHovered] = useState(null)
  const [mousePos, setMousePos] = useState({x: 0, y: 0})
  const [geoData, setGeoData] = useState(null)
  const [paths, setPaths] = useState([])

  // Navštívené země mapované na ISO3
  const navstivenePodleIso3 = {}
  navstivenaData.forEach((item) => {
    const iso3 = ISO2_TO_ISO3[item.zeme]
    if (iso3) navstivenePodleIso3[iso3] = item
  })

  useEffect(() => {
    // Načteme GeoJSON a převedeme ho na SVG paths
    fetch('https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/GeoJSON/europe.geojson')
      .then((r) => r.json())
      .then((data) => {
        setGeoData(data)
        // Převedeme GeoJSON na SVG path strings
        const converted = data.features.map((feature) => {
          const iso3 = feature.properties.ISO3 || feature.properties.iso_a3
          const name = feature.properties.NAME || feature.properties.name
          return {
            iso3,
            name,
            d: geoToPath(feature.geometry),
          }
        })
        setPaths(converted)
      })
      .catch((err) => console.error('Map load error:', err))
  }, [])

  // Konverze GeoJSON souřadnic (lon/lat) na SVG path string — s projekcí Mercator
  function geoToPath(geometry) {
    const project = (lon, lat) => {
      // Jednoduchá projekce zaměřená na Evropu
      // Bounding box: lon -30 až 50, lat 34 až 72
      const minLon = -30, maxLon = 50
      const minLat = 34, maxLat = 72
      const viewW = 900, viewH = 700

      // Korekce na zeměpisnou šířku (Mercator-ish)
      const latRad = (lat * Math.PI) / 180
      const latProj = Math.log(Math.tan(Math.PI / 4 + latRad / 2))
      const minLatRad = (minLat * Math.PI) / 180
      const maxLatRad = (maxLat * Math.PI) / 180
      const minLatProj = Math.log(Math.tan(Math.PI / 4 + minLatRad / 2))
      const maxLatProj = Math.log(Math.tan(Math.PI / 4 + maxLatRad / 2))

      const x = ((lon - minLon) / (maxLon - minLon)) * viewW
      const y = viewH - ((latProj - minLatProj) / (maxLatProj - minLatProj)) * viewH
      return [Math.round(x * 100) / 100, Math.round(y * 100) / 100]
    }

    const polygonToPath = (polygon) => {
      return polygon.map((ring) =>
        ring.map((coord, i) => {
          const [x, y] = project(coord[0], coord[1])
          return `${i === 0 ? 'M' : 'L'}${x},${y}`
        }).join('') + 'Z'
      ).join(' ')
    }

    if (geometry.type === 'Polygon') {
      return polygonToPath(geometry.coordinates)
    } else if (geometry.type === 'MultiPolygon') {
      return geometry.coordinates.map(polygonToPath).join(' ')
    }
    return ''
  }

  return (
    <div
      style={{position: 'relative', width: '100%'}}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setMousePos({x: e.clientX - rect.left, y: e.clientY - rect.top})
      }}
    >
      {!geoData ? (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: 400, color: `${C.cream}66`, fontSize: 14,
        }}>
          Načítám mapu...
        </div>
      ) : (
        <svg viewBox="0 0 900 700" style={{width: '100%', height: 'auto', display: 'block'}}>
          {paths.map((p, i) => {
            const navstiveno = navstivenePodleIso3[p.iso3]
            return (
              <path
                key={i}
                d={p.d}
                fill={navstiveno ? C.orange : `${C.cream}12`}
                stroke={navstiveno ? C.yellow : `${C.cream}25`}
                strokeWidth={0.6}
                style={{
                  cursor: navstiveno ? 'pointer' : 'default',
                  transition: 'fill 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (navstiveno) {
                    e.target.setAttribute('fill', C.yellow)
                    setHovered({
                      nazev: ZEME_NAZVY[navstiveno.zeme] || navstiveno.zeme,
                      pocet: navstiveno.pocet,
                      mesta: navstiveno.mesta,
                    })
                  } else {
                    e.target.setAttribute('fill', `${C.cream}22`)
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.setAttribute('fill', navstiveno ? C.orange : `${C.cream}12`)
                  setHovered(null)
                }}
              />
            )
          })}
        </svg>
      )}

      {hovered && (
        <div style={{
          position: 'absolute',
          top: mousePos.y + 20, left: mousePos.x + 20,
          background: C.cream, color: C.ink,
          padding: 'clamp(14px, 1.2vw, 20px) clamp(18px, 1.6vw, 26px)',
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          minWidth: 220,
          pointerEvents: 'none',
          zIndex: 10,
        }}>
          <div style={{fontSize: 'clamp(16px, 1.3vw, 20px)', fontWeight: 800, color: C.dark, marginBottom: 4}}>
            {hovered.nazev}
          </div>
          <div style={{fontSize: 'clamp(12px, 0.95vw, 14px)', color: C.teal, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6}}>
            {hovered.pocet} {hovered.pocet === 1 ? 'projekt' : hovered.pocet < 5 ? 'projekty' : 'projektů'}
          </div>
          {hovered.mesta && hovered.mesta.length > 0 && (
            <div style={{fontSize: 'clamp(12px, 0.95vw, 14px)', color: `${C.ink}aa`}}>
              {hovered.mesta.join(' · ')}
            </div>
          )}
        </div>
      )}
    </div>
  )
}