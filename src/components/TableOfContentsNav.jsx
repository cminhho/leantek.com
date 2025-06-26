import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TableOfContentsNav = ({ 
  sections = [], 
  title = "Table of contents",
  className = "",
  buttonPosition = "right-0"
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    // Track active section on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    if (sections.length > 0) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsNavOpen(false)
  }

  if (sections.length === 0) return null

  return (
    <>
      {/* Navigation Toggle Button */}
      <motion.button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`fixed top-1/2 ${buttonPosition} z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white border border-red-700 shadow-lg transition-all duration-300 flex items-center justify-center ${className}`}
        style={{ transform: 'translateY(-50%)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isNavOpen ? 0 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isNavOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Right Side Navigation Panel */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
            />
            
            {/* Navigation Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <button
                    onClick={() => setIsNavOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Table of Contents Links */}
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left py-3 px-3 rounded-lg transition-all duration-200 group flex items-start ${
                        activeSection === section.id 
                          ? 'text-gray-700' 
                          : 'text-gray-600'
                      }`}
                    >
                      <div className="flex items-start mt-1.5 mr-4">
                        <div className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          activeSection === section.id 
                            ? 'bg-red-600 shadow-sm' 
                            : 'bg-gray-300'
                        }`}></div>
                      </div>
                      <span className={`text-sm leading-relaxed transition-all duration-200 ${
                        activeSection === section.id 
                          ? 'font-medium' 
                          : 'font-normal'
                      }`}>
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default TableOfContentsNav 