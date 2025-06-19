import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Contact Us - Leantek2'
  }, [])

  return (
    <>
      {/* Contact Form Section */}
      <section className="pt-20">
      <ContactForm />
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Visit Our Office
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're conveniently located in the heart of Ho Chi Minh City. Feel free to stop by during business hours.
            </motion.p>
          </div>

          <motion.div 
            className="overflow-hidden shadow-xl h-96 bg-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Placeholder for map - in production, use an actual map integration */}
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-500">Interactive Map</span>
                <p className="text-gray-500 mt-2">123 Tech Street, Innovation District, Ho Chi Minh City, Vietnam</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  )
}

export default ContactPage