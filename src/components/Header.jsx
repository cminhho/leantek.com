import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const menuRef = useRef(null)
  const location = useLocation()

  // Check if current page is home page
  const isHomePage = location.pathname === '/'
  
  // Determine background based on page and scroll state
  const getHeaderBackground = () => {
    if (isHomePage) {
      // Home page: transparent when not scrolled, white when scrolled
      return scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    } else {
      // Other pages: always white background
      return 'bg-white shadow-lg'
    }
  }

  // Determine if header should use "scrolled" styling
  const shouldUseScrolledStyling = isHomePage ? scrolled : true

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Close mobile menu on window resize if screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMenuOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBackground()}`}
      ref={menuRef}
    >
      <div className="container mx-auto py-2 lg:py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo variant="header" scrolled={shouldUseScrolledStyling} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block flex-1 ml-16">
          <ul className="flex space-x-8">
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors ${
                    shouldUseScrolledStyling 
                      ? `${isActive ? 'text-red-600' : 'text-gray-900'} hover:text-red-600` 
                      : `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500`
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors ${
                    shouldUseScrolledStyling 
                      ? `${isActive ? 'text-red-600' : 'text-gray-900'} hover:text-red-600` 
                      : `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500`
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/technologies" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors ${
                    shouldUseScrolledStyling 
                      ? `${isActive ? 'text-red-600' : 'text-gray-900'} hover:text-red-600` 
                      : `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500`
                  }`
                }
              >
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/industries" 
                onClick={() => window.scrollTo(0, 0)}
                className={({ isActive }) => 
                  `text-base font-medium transition-colors ${
                    shouldUseScrolledStyling 
                      ? `${isActive ? 'text-red-600' : 'text-gray-900'} hover:text-red-600` 
                      : `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500`
                  }`
                }
              >
                Industries
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cases" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors ${
                    shouldUseScrolledStyling 
                      ? `${isActive ? 'text-red-600' : 'text-gray-900'} hover:text-red-600` 
                      : `${isActive ? 'text-red-500' : 'text-white'} hover:text-red-500`
                  }`
                }
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Side Items */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            to="/contact" 
            className={`px-6 py-2.5 font-medium transition-colors ${
              shouldUseScrolledStyling
                ? 'text-white bg-red-600 hover:bg-red-700'
                : 'text-white bg-red-500 hover:bg-red-600'
            }`}
          >
            Contact us
          </Link>
          
          {/* Language Selector */}
          <button className={`transition-colors ${
            shouldUseScrolledStyling 
              ? 'text-gray-900 hover:text-red-600'
              : 'text-white hover:text-red-500'
          }`}>
            EN
          </button>
          
          {/* Search Button */}
          <button className={`transition-colors ${
            shouldUseScrolledStyling 
              ? 'text-gray-900 hover:text-red-600'
              : 'text-white hover:text-red-500'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="relative z-30 block lg:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="flex items-center justify-center w-10 h-10">
            <div className="relative flex flex-col items-center justify-center w-6 h-6">
              <span 
                className={`absolute w-full h-0.5 transform transition-all duration-300 ${
                  shouldUseScrolledStyling ? 'bg-gray-900' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}
              ></span>
              <span 
                className={`absolute w-full h-0.5 transform transition-all duration-300 ${
                  shouldUseScrolledStyling ? 'bg-gray-900' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span 
                className={`absolute w-full h-0.5 transform transition-all duration-300 ${
                  shouldUseScrolledStyling ? 'bg-gray-900' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}
              ></span>
            </div>
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className={`fixed inset-0 z-20 lg:hidden pt-24 ${
                shouldUseScrolledStyling ? 'bg-white' : 'bg-[#1E1F25]'
              }`}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="container h-full overflow-y-auto px-6">
                <nav className="text-left">
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link 
                        to="/about" 
                        className={`block py-2 text-lg font-medium transition-colors ${
                          shouldUseScrolledStyling 
                            ? 'text-gray-900 hover:text-red-600'
                            : 'text-white hover:text-red-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services" 
                        className={`block py-2 text-lg font-medium transition-colors ${
                          shouldUseScrolledStyling 
                            ? 'text-gray-900 hover:text-red-600'
                            : 'text-white hover:text-red-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/technologies" 
                        className={`block py-2 text-lg font-medium transition-colors ${
                          shouldUseScrolledStyling 
                            ? 'text-gray-900 hover:text-red-600'
                            : 'text-white hover:text-red-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Technologies
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/industries" 
                        className={`block py-2 text-lg font-medium transition-colors ${
                          shouldUseScrolledStyling 
                            ? 'text-gray-900 hover:text-red-600'
                            : 'text-white hover:text-red-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Industries
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/cases" 
                        className={`block py-2 text-lg font-medium transition-colors ${
                          shouldUseScrolledStyling 
                            ? 'text-gray-900 hover:text-red-600'
                            : 'text-white hover:text-red-500'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li className="pt-4">
                      <Link 
                        to="/contact" 
                        className={`block w-full py-3 text-center font-medium  transition-colors ${
                          shouldUseScrolledStyling
                            ? 'text-white bg-red-600 hover:bg-red-700'
                            : 'text-white bg-red-500 hover:bg-red-600'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className="flex justify-between items-center pt-4">
                      <button className={`transition-colors ${
                        shouldUseScrolledStyling 
                          ? 'text-gray-900 hover:text-red-600'
                          : 'text-white hover:text-red-500'
                      }`}>
                        EN
                      </button>
                      <button className={`transition-colors ${
                        shouldUseScrolledStyling 
                          ? 'text-gray-900 hover:text-red-600'
                          : 'text-white hover:text-red-500'
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header