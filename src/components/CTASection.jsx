import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const CTASection = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="md:text-4xl text-white font-light mb-8 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            We deliver solutions for people, created by people
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-20 py-6 transition-colors duration-200"
            >
              Talk to us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 