export default function robots() {
  return {
    rules: {userAgent: '*', allow: '/', disallow: ['/api/', '/studio/']},
    sitemap: 'https://www.czechhorizons.eu/sitemap.xml',
  }
}
