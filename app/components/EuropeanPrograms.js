import {C} from './Colors'
import AnimateIn from './AnimateIn'

const PROGRAMY = [
  {
    kod: 'erasmus',
    nazev: 'Erasmus+',
    podnadpis: 'Mládež · Vzdělávání · Mobilita',
    barva: C.orange,
    ikona: '🎓',
    popis: 'Největší evropský program pro mobilitu mládeže. Výměny mládeže, tréninkové kurzy pro pracovníky s mládeží a strategická partnerství.',
    features: [
      'Plně hrazené cesty a ubytování',
      'Pro mladé 13–30 let',
      'Certifikát Youthpass',
      'Více než 40 zemí Evropy',
    ],
    odkaz: 'https://www.dzs.cz/program/erasmus',
  },
  {
    kod: 'discover',
    nazev: 'DiscoverEU',
    podnadpis: 'Cestování · Poznávání · Zkušenost',
    barva: C.green,
    ikona: '🚄',
    popis: 'Bezplatná vlaková jízdenka napříč Evropou pro 18leté. Objevte až 30 zemí a potkejte tisíce dalších účastníků.',
    features: [
      'Zdarma Interrail pass',
      'Pro 18leté občany EU',
      'Otevřeno 2× ročně',
      'Kulturní a jazykové workshopy',
    ],
    odkaz: 'https://youth.europa.eu/discovereu_cs',
  },
  {
    kod: 'esc',
    nazev: 'Evropský sbor solidarity',
    podnadpis: 'Dobrovolnictví · Solidarita · Změna',
    barva: C.teal,
    ikona: '🤝',
    popis: 'Dobrovolnické projekty v Evropě i doma. Dlouhodobé i krátkodobé, individuální i týmové. Pomáhej tam, kde je to potřeba.',
    features: [
      'Pro mladé 18–30 let',
      'Projekty 2 týdny až 12 měsíců',
      'Kapesné a stravné',
      'Pojištění a jazykový kurz',
    ],
    odkaz: 'https://europa.eu/youth/solidarity_cs',
  },
  {
    kod: 'podnikatele',
    nazev: 'Erasmus pro podnikatele',
    podnadpis: 'Business · Nápady · Mentoring',
    barva: C.yellow,
    ikona: '💼',
    popis: 'Výměnný program pro nové a zkušené podnikatele. Získej zkušenosti od zavedeného podnikatele v jiné evropské zemi.',
    features: [
      'Pobyty 1–6 měsíců',
      'Pro začínající podnikatele',
      'Financování až 1 100 €/měsíc',
      'Síť 10 000+ podnikatelů',
    ],
    odkaz: 'https://www.erasmus-entrepreneurs.eu/',
  },
]

export default function EuropeanPrograms() {
  return (
    <section id="programy" style={{
      background: C.cream,
      padding: 'clamp(80px, 10vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 160px)',
      position: 'relative',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(40px, 5vw, 80px)', flexWrap: 'wrap', gap: 32}}>
          <div>
            <div style={{fontSize: 'clamp(12px, 0.9vw, 16px)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 20, color: C.teal}}>
              <span style={{color: C.orange}}>❋</span> 005 — Evropské programy
            </div>
            <h2 style={{fontSize: 'clamp(44px, 6.5vw, 120px)', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0}}>
              Čím ti<br /><span style={{fontWeight: 300, fontStyle: 'italic', color: C.orange}}>Evropa pomůže.</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(16px, 1.3vw, 22px)', lineHeight: 1.6, maxWidth: 440, color: `${C.ink}aa`}}>
            Čtyři programy, které financujeme z EU a pomáhají mladým růst, poznávat a podnikat.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(380px, 40vw, 700px), 1fr))',
          gap: 'clamp(20px, 2vw, 32px)',
        }}>
         {PROGRAMY.map((p, i) => (
            <AnimateIn key={p.kod} delay={i * 100}>
            <a href={p.odkaz} target="_blank" rel="noopener noreferrer" className="program-card" style={{
              textDecoration: 'none', color: 'inherit',
              background: C.cream, borderRadius: 32,
              border: `2px solid ${p.barva}25`,
              padding: 'clamp(32px, 3.5vw, 56px)',
              display: 'flex', flexDirection: 'column', height: '100%',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s, border-color 0.4s',
            }}>
              <div style={{
                position: 'absolute', top: -60, right: -60, width: 240, height: 240,
                borderRadius: '50%', background: `${p.barva}12`, filter: 'blur(40px)',
              }} />

              <div style={{position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 'clamp(20px, 2vw, 32px)'}}>
                <div style={{
                  width: 'clamp(64px, 5vw, 88px)', height: 'clamp(64px, 5vw, 88px)',
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${p.barva}, ${p.barva}aa)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'clamp(32px, 2.8vw, 44px)',
                  boxShadow: `0 8px 24px ${p.barva}40`,
                  flexShrink: 0,
                }}>{p.ikona}</div>

                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: p.barva, marginBottom: 8}}>
                    {p.podnadpis}
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(28px, 2.6vw, 48px)', fontWeight: 800, lineHeight: 1.1,
                    letterSpacing: '-0.02em', margin: 0, color: C.dark,
                    wordBreak: 'break-word',
                  }}>{p.nazev}</h3>
                </div>
              </div>

              <p style={{
                fontSize: 'clamp(15px, 1.2vw, 20px)', lineHeight: 1.6,
                color: `${C.ink}cc`, margin: '0 0 clamp(20px, 2vw, 32px)',
                position: 'relative',
              }}>{p.popis}</p>

              <ul style={{
                listStyle: 'none', padding: 0, margin: '0 0 clamp(24px, 2.5vw, 40px)',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
                position: 'relative',
              }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 600, color: C.dark,
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: p.barva, flexShrink: 0,
                    }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: 'clamp(14px, 1.2vw, 18px) clamp(24px, 2vw, 32px)', borderRadius: 100,
                background: C.dark, color: C.cream,
                fontSize: 'clamp(13px, 1vw, 16px)', fontWeight: 800, letterSpacing: '0.08em',
                textTransform: 'uppercase', alignSelf: 'flex-start',
                position: 'relative',
              }}>Oficiální web ↗</div>
            </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}