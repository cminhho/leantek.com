import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    {
      number: '10+',
      label: 'Years of Experience'
    },
    {
      number: '200+',
      label: 'Projects Completed'
    },
    {
      number: '50+',
      label: 'Tech Experts'
    },
    {
      number: '95%',
      label: 'Client Satisfaction'
    }
  ]

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About Content */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium text-sm">ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Your Trusted Technology Partner</h2>
            <p className="text-gray-600 mb-6">
              Leantek2 is a leading software development and IT consulting company dedicated to helping businesses transform through technology and innovation. With years of experience and a team of talented experts, we deliver high-quality solutions that drive growth and efficiency.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to empower organizations with cutting-edge technology solutions that solve complex challenges and create sustainable competitive advantages. We work closely with our clients to understand their unique needs and deliver customized solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 -full bg-blue-50 flex items-center justify-center text-primary mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Innovation</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 -full bg-blue-50 flex items-center justify-center text-primary mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Quality</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 -full bg-blue-50 flex items-center justify-center text-primary mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Expertise</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 -full bg-blue-50 flex items-center justify-center text-primary mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Reliability</span>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary inline-block">
              Learn More About Us
            </Link>
          </motion.div>
          
          {/* About Image/Stats */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="bg-white -xl shadow-sm border border-gray-100 p-8">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 relative">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 -xl h-64 w-full relative overflow-hidden">
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary/30">Company Image</span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary/10 -full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/10 -full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/5 -full"></div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-32 h-32 -xl bg-blue-50 -z-10"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About