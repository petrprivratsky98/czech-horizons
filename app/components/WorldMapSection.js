import {C} from './Colors'
import {client} from '@/sanity/client'
import WorldMap from './WorldMap'
export const revalidate = 0

const navstiveneZemeQuery = `*[_type == "realizovanyProjekt" && defined(zeme)] {
  zeme,
  mesto
}`

export default async function WorldMapSection() {
  const projekty = await client.fetch(navstiveneZemeQuery)

  const agregovane = {}
  projekty.forEach((p) => {
    if (!agregovane[p.zeme]) {
      agregovane[p.zeme] = {zeme: p.zeme, pocet: 0, mesta: []}
    }
    agregovane[p.zeme].pocet += 1
    if (p.mesto && !agregovane[p.zeme].mesta.includes(p.mesto)) {
      agregovane[p.zeme].mesta.push(p.mesto)
    }
  })

  const navstivenaData = Object.values(agregovane)
  const pocetZemi = navstivenaData.length
  const pocetProjektu = projekty.length

  return (
    <section id="mapa" style={{
      background: C.dark, color: C.cream,
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.yellow}}>
              <span style={{color: C.orange}}>❋</span> Kde jsme byli
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0, color: C.cream}}>
              Evropa<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.yellow}}>a kousek dál.</span>
            </h2>
          </div>
          <div style={{maxWidth: 440}}>
            <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, color: `${C.cream}bb`, margin: '0 0 24px'}}>
              Každý realizovaný projekt rozsvítí zemi, kde jsme byli. Najeď myší pro detail.
            </p>
            <div style={{display: 'flex', gap: 24, flexWrap: 'wrap'}}>
              <div>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.yellow, marginBottom: 6}}>Zemí</div>
                <div style={{fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 800, lineHeight: 1, color: C.orange}}>{pocetZemi}</div>
              </div>
              <div>
                <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.yellow, marginBottom: 6}}>Projektů</div>
                <div style={{fontSize: 'clamp(36px, 4vw, 64px)', fontWeight: 800, lineHeight: 1, color: C.green}}>{pocetProjektu}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 3fr) minmax(260px, 1fr)',
          gap: 'clamp(16px, 2vw, 32px)',
          alignItems: 'start',
        }}>
          {/* Hlavní mapa Evropy */}
          <div style={{
            background: `${C.cream}04`,
            border: `1.5px solid ${C.cream}15`,
            borderRadius: 28,
            padding: 'clamp(16px, 2vw, 32px)',
            position: 'relative',
            minWidth: 0,
          }}>
            <WorldMap navstivenaData={navstivenaData} />
          </div>

          {/* Reunion extra panel */}
          <div style={{
            background: `${C.cream}04`,
            border: `1.5px solid ${C.cream}15`,
            borderRadius: 28,
            padding: 'clamp(24px, 2.5vw, 36px)',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, color: C.yellow}}>
              + Bonus destinace
            </div>

            {/* Fotka Réunionu — čtvercová, menší */}
            <div style={{
              aspectRatio: '1 / 1',
              maxWidth: 200,
              width: '100%',
              alignSelf: 'center',
              borderRadius: 16,
              overflow: 'hidden',
              backgroundImage: 'url(/reunion.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              border: `1.5px solid ${C.cream}20`,
            }} />

            <h3 style={{
              fontSize: 'clamp(26px, 2.4vw, 38px)', fontWeight: 800, lineHeight: 1,
              letterSpacing: '-0.02em', margin: 0, color: C.cream,
            }}>Réunion</h3>
            <p style={{
              fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.6,
              color: `${C.cream}aa`, margin: 0,
            }}>
              Francouzský zámořský departement v Indickém oceánu. Náš nejvzdálenější projekt.
            </p>
            <div style={{
              paddingTop: 16, marginTop: 'auto',
              borderTop: `1px dashed ${C.cream}20`,
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}88`,
            }}>
              <span style={{fontSize: 14}}>📍</span>
              9 000 km od Prahy
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}