import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Stats from '../components/Stats'
import CaseStudies from '../components/CaseStudies'
import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'
import ContactForm from '../components/ContactForm'
import Technologies from '../components/Technologies'
import TechnologicalDomains from '../components/TechnologicalDomains'

// Animation variants for consistent page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'leanTek - Software Development & IT Consulting'

    // Add system font class to body
    document.body.classList.add('font-roboto')
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      {/* Main content sections */}
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Industries />
        <CTASection />
        <TechnologicalDomains />
        <Technologies />
        <Stats />
        <CaseStudies />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
    </motion.div>
  )
}

export default HomePage