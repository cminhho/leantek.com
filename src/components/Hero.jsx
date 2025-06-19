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
    <section className="relative bg-[#1E1F25] min-h-screen overflow-hidden">
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

      {/* Content Container with improved z-index */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="pt-32 pb-20">
          {/* Certification/Partner Logos */}
          <div className="flex justify-end gap-8 mb-20">
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/ISO-27002-1.svg" 
              alt="ISO 27001" 
              className="h-16 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/ISO-27003.svg" 
              alt="ISO 9001" 
              className="h-16 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/Aws_partner.svg" 
              alt="AWS Partner" 
              className="h-16 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/MS_solutions_partners_digital-1.svg" 
              alt="Microsoft Partner" 
              className="h-16 opacity-80 hover:opacity-100 transition-opacity" 
            />
            <img 
              src="https://innowise.com/wp-content/uploads/2025/03/Salesforce_Partner-1.svg" 
              alt="Salesforce Partner" 
              className="h-16 opacity-80 hover:opacity-100 transition-opacity" 
            />
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-7xl font-normal text-white mb-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Global software development company
            </motion.h1>
            
            <motion.h2 
              className="text-5xl font-normal text-white mb-12 drop-shadow-lg"
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
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-red-600 text-white px-8 py-4 text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-lg"
              >
                Achieve more together
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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