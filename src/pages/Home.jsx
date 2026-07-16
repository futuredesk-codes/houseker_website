import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import About from '../components/About'
import MobileApp from '../components/MobileApp'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <About />
      <MobileApp />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
    </>
  )
}
