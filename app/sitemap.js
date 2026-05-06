import {client} from '@/sanity/client'

const BASE = 'https://www.czechhorizons.eu'

function forLocales(path, opts = {}) {
  return [
    {url: `${BASE}${path}`, lastModified: new Date(), ...opts},
    {url: `${BASE}/en${path}`, lastModified: new Date(), ...opts},
  ]
}

export default async function sitemap() {
  const [lokalniSlugs, realizovaneSlugs] = await Promise.all([
    client.fetch(`*[_type == "lokalniProjekt" && defined(slug.current)].slug.current`),
    client.fetch(`*[_type == "realizovanyProjekt" && defined(slug.current)].slug.current`),
  ])

  return [
    ...forLocales('/', {changeFrequency: 'weekly', priority: 1}),
    ...forLocales('/lokalni/bylinkova-zahrada', {changeFrequency: 'monthly', priority: 0.8}),
    ...forLocales('/zasady', {changeFrequency: 'yearly', priority: 0.3}),
    ...(lokalniSlugs ?? []).flatMap(slug =>
      forLocales(`/lokalni/${slug}`, {changeFrequency: 'monthly', priority: 0.7})
    ),
    ...(realizovaneSlugs ?? []).flatMap(slug =>
      forLocales(`/realizovane/${slug}`, {changeFrequency: 'monthly', priority: 0.7})
    ),
  ]
}
