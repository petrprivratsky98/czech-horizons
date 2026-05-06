import Nav from '@/app/components/Nav'
import Hero from '@/app/components/Hero'
import Marquee from '@/app/components/Marquee'
import Events from '@/app/components/Events'
import CurrentProjects from '@/app/components/CurrentProjects'
import LocalProjects from '@/app/components/LocalProjects'
import RealizedProjects from '@/app/components/RealizedProjects'
import WorldMapSection from '@/app/components/WorldMapSection'
import EuropeanPrograms from '@/app/components/EuropeanPrograms'
import About from '@/app/components/About'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'
import ScrollProgress from '@/app/components/ScrollProgress'
import ScrollToTop from '@/app/components/ScrollToTop'

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
      <ScrollToTop />
    </main>
  )
}
