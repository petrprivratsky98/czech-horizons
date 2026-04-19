import {C} from './Colors'
import Logo from './Logo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: C.dark, color: C.cream,
      padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px) clamp(40px, 5vw, 60px)',
      position: 'relative',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        {/* Top — brand + navigace */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(32px, 4vw, 64px)',
          paddingBottom: 'clamp(40px, 5vw, 64px)',
          borderBottom: `1.5px solid ${C.cream}20`,
        }}>
          {/* Brand */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
              <Logo size={56} />
              <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1.1}}>
                <span style={{fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: C.cream}}>Czech Horizons</span>
                <span style={{fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: `${C.cream}88`, marginTop: 2}}>
                  Rozšiř svůj obzor
                </span>
              </div>
            </div>
            <p style={{
              fontSize: 'clamp(14px, 1.05vw, 17px)', lineHeight: 1.6,
              color: `${C.cream}aa`, margin: 0, maxWidth: 320,
            }}>
              Propojujeme ekologii, wellbeing a mezinárodní spolupráci skrze Erasmus+, dobrovolnické programy a lokální akce.
            </p>
          </div>

          {/* Navigace */}
          <div>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, color: C.yellow, marginBottom: 20,
            }}>Rozcestník</div>
            <div style={{display: 'grid', gap: 12}}>
              {[
                {label: 'Eventy', href: '/#eventy'},
                {label: 'Aktuální projekty', href: '/#projekty'},
                {label: 'Lokální projekty', href: '/#lokalni'},
                {label: 'Realizované', href: '/#realizovane'},
                {label: 'Evropské programy', href: '/#programy'},
                {label: 'O nás', href: '/#o-nas'},
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  color: `${C.cream}cc`, textDecoration: 'none',
                  fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500,
                }}>{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, color: C.yellow, marginBottom: 20,
            }}>Kontakt</div>
            <div style={{display: 'grid', gap: 12}}>
              <a href="mailto:info@czechhorizons.eu" style={{
                color: `${C.cream}cc`, textDecoration: 'none',
                fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500, wordBreak: 'break-all',
              }}>info@czechhorizons.eu</a>
              <a href="https://www.instagram.com/czechhorizons/" target="_blank" rel="noopener noreferrer" style={{
                color: `${C.cream}cc`, textDecoration: 'none',
                fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500,
              }}>Instagram ↗</a>
              <span style={{
                color: `${C.cream}cc`, fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500,
              }}>Praha, Česká republika</span>
            </div>
          </div>

          {/* Právní info */}
          <div>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, color: C.yellow, marginBottom: 20,
            }}>Spolek</div>
            <div style={{display: 'grid', gap: 12, fontSize: 'clamp(14px, 1.05vw, 17px)', color: `${C.cream}cc`, fontWeight: 500}}>
              <div>Czech Horizons, z. s.</div>
              <div>Založen 17. 7. 2025</div>
              <div style={{fontSize: 'clamp(12px, 0.95vw, 15px)', color: `${C.cream}88`, marginTop: 4}}>
                Erasmus+ partner
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: 'clamp(24px, 3vw, 40px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: `${C.cream}66`, fontWeight: 500}}>
            © {new Date().getFullYear()} Czech Horizons, z. s. Všechna práva vyhrazena.
          </div>
          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: `${C.cream}66`, fontWeight: 500}}>
            Posouváme tvůj horizont poznání <span style={{color: C.orange}}>❋</span>
          </div>
        </div>
      </div>
    </footer>
  )
}