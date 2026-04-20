import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Events from './components/Events'
import CurrentProjects from './components/CurrentProjects'
import LocalProjects from './components/LocalProjects'
import RealizedProjects from './components/RealizedProjects'
import WorldMapSection from './components/WorldMapSection'
import EuropeanPrograms from './components/EuropeanPrograms'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export const revalidate = 10
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Events />
      <CurrentProjects />
      <LocalProjects />
      <RealizedProjects />
      <WorldMapSection />
      <EuropeanPrograms />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}