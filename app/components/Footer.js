import {getTranslations} from 'next-intl/server'
import {C} from './Colors'
import Logo from './Logo'
import {Link} from '@/i18n/navigation'

export default async function Footer() {
  const t = await getTranslations('footer')
  const tContact = await getTranslations('contact')

  return (
    <footer style={{
      background: C.dark, color: C.cream,
      padding: 'clamp(60px, 8vw, 120px) clamp(24px, 5vw, 80px) clamp(40px, 5vw, 60px)',
      position: 'relative',
    }}>
      <div style={{maxWidth: 1600, margin: '0 auto'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(32px, 4vw, 64px)',
          paddingBottom: 'clamp(40px, 5vw, 64px)',
          borderBottom: `1.5px solid ${C.cream}20`,
        }}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
              <Logo size={56} />
              <div style={{display: 'flex', flexDirection: 'column', lineHeight: 1.1}}>
                <span style={{fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', color: C.cream}}>Czech Horizons</span>
                <span style={{fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: `${C.cream}88`, marginTop: 2}}>
                  {t('tagline')}
                </span>
              </div>
            </div>
            <p style={{
              fontSize: 'clamp(14px, 1.05vw, 17px)', lineHeight: 1.6,
              color: `${C.cream}aa`, margin: 0, maxWidth: 320,
            }}>{t('desc')}</p>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, color: C.yellow, marginBottom: 20,
            }}>{t('navLabel')}</div>
            <div style={{display: 'grid', gap: 12}}>
              {[
                {label: t('links.events'),   href: '/#eventy'},
                {label: t('links.projects'), href: '/#projekty'},
                {label: t('links.local'),    href: '/#lokalni'},
                {label: t('links.realized'), href: '/#realizovane'},
                {label: t('links.programs'), href: '/#programy'},
                {label: t('links.about'),    href: '/#o-nas'},
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  color: `${C.cream}cc`, textDecoration: 'none',
                  fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500,
                }}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, color: C.yellow, marginBottom: 20,
            }}>{t('contactLabel')}</div>
            <div style={{display: 'grid', gap: 12}}>
              <a href="mailto:info@czechhorizons.eu" style={{
                color: `${C.cream}cc`, textDecoration: 'none',
                fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500, wordBreak: 'break-all',
              }}>info@czechhorizons.eu</a>
              <a href="https://www.instagram.com/czech.horizons/" target="_blank" rel="noopener noreferrer" style={{
                color: `${C.cream}cc`, textDecoration: 'none',
                fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500,
              }}>Instagram ↗</a>
              <a href="https://www.facebook.com/profile.php?id=61565942690033" target="_blank" rel="noopener noreferrer" style={{
                color: `${C.cream}cc`, textDecoration: 'none',
                fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500,
              }}>Facebook ↗</a>
              <span style={{color: `${C.cream}cc`, fontSize: 'clamp(14px, 1.05vw, 17px)', fontWeight: 500}}>
                {tContact('location')}
              </span>
            </div>
          </div>

          <div>
            <div style={{
              fontSize: 'clamp(11px, 0.85vw, 14px)', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, color: C.yellow, marginBottom: 20,
            }}>{t('orgLabel')}</div>
            <div style={{display: 'grid', gap: 8, fontSize: 'clamp(13px, 1vw, 16px)', color: `${C.cream}cc`, fontWeight: 500}}>
              <div>Czech Horizons, z. s.</div>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}88`}}>IČO: 21770441</div>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}88`}}>Na pískách 1185/92, 160 00 Praha 6</div>
              <div style={{fontSize: 'clamp(11px, 0.85vw, 13px)', color: `${C.cream}66`, lineHeight: 1.4}}>
                Zapsán u Městského soudu v Praze,<br />oddíl L, vložka 79295
              </div>
              <div style={{fontSize: 'clamp(12px, 0.9vw, 14px)', color: `${C.cream}88`}}>{t('founded')}</div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 'clamp(24px, 3vw, 40px)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: `${C.cream}66`, fontWeight: 500}}>
            © {new Date().getFullYear()} Czech Horizons, z. s. {t('copyright')}
          </div>
          <div style={{fontSize: 'clamp(12px, 0.9vw, 15px)', color: `${C.cream}66`, fontWeight: 500}}>
            {t('tagline2')} <span style={{color: C.orange}}>❋</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
