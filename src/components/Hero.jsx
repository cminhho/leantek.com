import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative bg-[#1E1F25] h-auto lg:min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://innowise.com//wp-content//uploads//2025//02//InnoSphere1.hevc_.mp4"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-black/50 opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="h-auto lg:min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 lg:py-32">
          {/* Certification/Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-16 mt-10 sm:mt-10 md:mt-12 lg:mt-0 order-1">
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/ISO-27002-1.svg" 
              alt="ISO 27001" 
              className="h-14 sm:h-14 md:h-16 lg:h-20 xl:h-24 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/ISO-27003.svg" 
              alt="ISO 9001" 
              className="h-14 sm:h-14 md:h-16 lg:h-20 xl:h-24 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/Aws_partner.svg" 
              alt="AWS Partner" 
              className="h-14 sm:h-14 md:h-16 lg:h-20 xl:h-24 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/MS_solutions_partners_digital-1.svg" 
              alt="Microsoft Partner" 
              className="h-14 sm:h-14 md:h-16 lg:h-20 xl:h-24 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/Salesforce_Partner-1.svg" 
              alt="Salesforce Partner" 
              className="h-14 sm:h-14 md:h-16 lg:h-20 xl:h-24 opacity-80 hover:opacity-100 transition-opacity" 
            />
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto text-center order-2">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 drop-shadow-lg leading-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Global software development company
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 drop-shadow-lg leading-tight px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transparent. Flexible. Reliable.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pb-4 sm:pb-6 lg:pb-0"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-red-600 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl hover:bg-red-700 transition-all hover:scale-105 shadow-lg font-medium rounded-sm"
              >
                Achieve more together
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero