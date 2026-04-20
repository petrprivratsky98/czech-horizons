// Všechny aktuální projekty (nejnovější nahoře)
export const aktualniProjektyQuery = `*[_type == "aktualniProjekt"] | order(_createdAt desc) {
  _id,
  nazev,
  typ,
  zeme,
  mesto,
  datum,
  deadlinePrihlasky,
  pocetUcastniku,
  groupLeaderi,
  vekOd,
  vekDo,
  popis,
  fotka,
  odkazPrihlaska,
  odkazInfopack
}`

// Všechny realizované projekty
export const realizovaneProjektyQuery = `*[_type == "realizovanyProjekt"] | order(_createdAt desc) {
  _id,
  nazev,
  slug,
  typ,
  zeme,
  mesto,
  datum,
  pocetUcastniku,
  hlavniFotka,
  kratkyPopis,
  "pocetFotek": count(fotoalbum),
  "pocetFeedbacku": count(feedbacky)
}`

// Všechny lokální projekty
export const lokalniProjektyQuery = `*[_type == "lokalniProjekt"] | order(_createdAt desc) {
  _id,
  nazev,
  slug,
  podnadpis,
  obdobiOd,
  obdobiDo,
  hlavniFotka,
  statPocetAkci,
  statPocetUcastniku,
  status,
  "akce": akce[]-> {
    _id,
    nazev,
    datum,
    status
  }
}`

// Nadcházející akce (eventy v kalendáři)
export const nadchazejiciAkceQuery = `*[_type == "akce" && status == "nadchazejici"] | order(datum asc) {
  _id,
  nazev,
  kategorie,
  datum,
  casDo,
  misto,
  adresa,
  odkazMapa,
  kapacita,
  popis,
  fotka,
  odkazFB,
  odkazIG
}`

// Členové týmu
export const clenoveTimuQuery = `*[_type == "clenTymu"] | order(poradi asc) {
  _id,
  jmeno,
  role,
  fotka,
  bio,
  instagram,
  linkedin,
  email,
  telefon
}`

// Detail jednoho lokálního projektu podle URL (slug)
export const lokalniProjektDetailQuery = `*[_type == "lokalniProjekt" && slug.current == $slug][0] {
  _id,
  nazev,
  slug,
  podnadpis,
  obdobiOd,
  obdobiDo,
  hlavniFotka,
  popis,
  statPocetAkci,
  statPocetUcastniku,
  status,
  galerie,
  "akce": akce[]-> {
    _id,
    nazev,
    datum,
    misto,
    popis,
    fotka,
    status
  }
}`

// Detail realizovaného projektu
export const realizovanyProjektDetailQuery = `*[_type == "realizovanyProjekt" && slug.current == $slug][0] {
  _id,
  nazev,
  slug,
  typ,
  zeme,
  mesto,
  datum,
  pocetUcastniku,
  hlavniFotka,
  kratkyPopis,
  dlouhyPopis,
  fotoalbum,
  feedbacky
}`
// Helper pro fetchování bez cache
export const fetchOptions = {
  next: {revalidate: 0},
}