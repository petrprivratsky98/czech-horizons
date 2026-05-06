import {getLocale} from 'next-intl/server'
import {C} from '@/app/components/Colors'
import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import {Link} from '@/i18n/navigation'

export const metadata = {
  title: 'Zásady ochrany osobních údajů',
  robots: {index: false},
}

const CS = {
  title: 'Zásady ochrany\nosobních údajů',
  updated: 'Naposledy aktualizováno: 6. 5. 2025',
  back: '← Zpět na hlavní stránku',
  sections: [
    {
      h: 'Správce osobních údajů',
      p: 'Czech Horizons z. s., IČO 21770441, Na pískách 1185/92, 160 00 Praha 6. Kontakt: info@czechhorizons.eu',
    },
    {
      h: 'Jaké údaje zpracováváme',
      p: 'Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře: jméno a e-mailová adresa. Žádné další osobní údaje bez vašeho souhlasu neshromažďujeme.',
    },
    {
      h: 'Proč údaje zpracováváme',
      p: 'Vaše kontaktní údaje využíváme výhradně k zodpovězení vašeho dotazu nebo požadavku. Právním základem je váš souhlas vyjádřený odesláním formuláře (čl. 6 odst. 1 písm. a) GDPR).',
    },
    {
      h: 'Jak dlouho údaje uchováváme',
      p: 'Kontaktní údaje uchováváme maximálně 2 roky od poslední komunikace. Poté jsou nenávratně smazány.',
    },
    {
      h: 'Cookies a analytika',
      p: 'Web používá technické cookies nezbytné pro jeho fungování. Analytické cookies (Google Analytics 4) aktivujeme pouze s vaším výslovným souhlasem udělením prostřednictvím lišty při první návštěvě. GA4 funguje v režimu Consent Mode — bez souhlasu neshromažďuje identifikační data.',
    },
    {
      h: 'Sdílení s třetími stranami',
      p: 'Vaše údaje neprodáváme ani nepředáváme třetím stranám. Výjimkou je Google (provozovatel GA4) — a pouze tehdy, když jste udělili souhlas s analytickými cookies. Google zpracovává data v souladu s Ochranou soukromí Google.',
    },
    {
      h: 'Vaše práva',
      p: 'Máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz (právo být zapomenut), omezení zpracování a přenositelnost. Souhlas s analytickými cookies můžete kdykoli odvolat smazáním cookies v prohlížeči. Pro uplatnění práv nás kontaktujte na info@czechhorizons.eu.',
    },
    {
      h: 'Dozorový úřad',
      p: 'Pokud se domníváte, že zpracování vašich údajů porušuje GDPR, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz).',
    },
  ],
}

const EN = {
  title: 'Privacy\nPolicy',
  updated: 'Last updated: 6 May 2025',
  back: '← Back to homepage',
  sections: [
    {
      h: 'Data controller',
      p: 'Czech Horizons z. s., ID 21770441, Na pískách 1185/92, 160 00 Prague 6, Czech Republic. Contact: info@czechhorizons.eu',
    },
    {
      h: 'What data we collect',
      p: 'We only process data you provide through our contact form: your name and email address. We do not collect any other personal data without your consent.',
    },
    {
      h: 'Why we process your data',
      p: 'Your contact details are used solely to respond to your inquiry. The legal basis is your consent expressed by submitting the form (Art. 6(1)(a) GDPR).',
    },
    {
      h: 'How long we keep your data',
      p: 'Contact details are kept for a maximum of 2 years after last communication, after which they are permanently deleted.',
    },
    {
      h: 'Cookies and analytics',
      p: 'The site uses technical cookies necessary for its operation. Analytics cookies (Google Analytics 4) are only activated with your explicit consent via the banner on first visit. GA4 runs in Consent Mode — without consent it does not collect identifying data.',
    },
    {
      h: 'Third-party sharing',
      p: 'We do not sell or share your data with third parties. The only exception is Google (GA4 operator) — and only when you have consented to analytics cookies. Google processes data in accordance with the Google Privacy Policy.',
    },
    {
      h: 'Your rights',
      p: 'You have the right to access, rectify, erase, restrict processing, and port your personal data. You can withdraw analytics consent at any time by clearing cookies in your browser. To exercise your rights, contact us at info@czechhorizons.eu.',
    },
    {
      h: 'Supervisory authority',
      p: 'If you believe our data processing violates GDPR, you may lodge a complaint with the Czech Office for Personal Data Protection (www.uoou.cz).',
    },
  ],
}

export default async function ZasadyPage() {
  const locale = await getLocale()
  const t = locale === 'en' ? EN : CS

  return (
    <>
      <Nav />
      <main style={{background: C.cream, minHeight: '100vh', paddingTop: 'clamp(100px, 12vw, 160px)'}}>
        <div style={{maxWidth: 760, margin: '0 auto', padding: 'clamp(40px, 5vw, 80px) clamp(24px, 5vw, 48px)'}}>

          <Link href="/" style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: C.teal, textDecoration: 'none', display: 'inline-block', marginBottom: 40,
          }}>{t.back}</Link>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800, lineHeight: 1,
            letterSpacing: '-0.03em', margin: '0 0 12px', whiteSpace: 'pre-line',
          }}>
            {t.title.split('\n')[0]}<br />
            <span style={{fontWeight: 300, fontStyle: 'italic', color: C.orange}}>{t.title.split('\n')[1]}</span>
          </h1>
          <p style={{fontSize: 13, color: `${C.ink}55`, margin: '0 0 clamp(48px, 6vw, 72px)', fontWeight: 500}}>
            {t.updated}
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: 36}}>
            {t.sections.map((s, i) => (
              <div key={i} style={{borderTop: `1px solid ${C.ink}12`, paddingTop: 28}}>
                <h2 style={{fontSize: 'clamp(15px, 1.2vw, 18px)', fontWeight: 800, color: C.dark, margin: '0 0 10px', letterSpacing: '-0.01em'}}>
                  {s.h}
                </h2>
                <p style={{fontSize: 'clamp(14px, 1.05vw, 16px)', lineHeight: 1.75, color: `${C.ink}bb`, margin: 0}}>
                  {s.p}
                </p>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
