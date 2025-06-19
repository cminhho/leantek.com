import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import CasesPage from './pages/CasesPage'
import ContactPage from './pages/ContactPage'
import TechnologiesPage from './pages/TechnologiesPage'
import IndustriesPage from './pages/IndustriesPage'
import EnterprisePage from './pages/industries/EnterprisePage'
import ERPPage from './pages/services/ERPPage'
import BuyNowPayLaterPage from './pages/industries/finance/BuyNowPayLaterPage'
import BankingPage from './pages/industries/BankingPage'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/erp" element={<ERPPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/enterprise" element={<EnterprisePage />} />
          <Route path="/industries/banking" element={<BankingPage />} />
          <Route path="/industries/finance/buy-now-pay-later" element={<BuyNowPayLaterPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App