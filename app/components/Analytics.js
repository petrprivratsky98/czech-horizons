import Script from 'next/script'

const GA_ID = 'G-V6WHT4VW4P'

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('consent', 'default', {
          analytics_storage: localStorage.getItem('ch_cookie_consent') === 'all' ? 'granted' : 'denied'
        });
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  )
}
