import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants for consistent page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const BuyNowPayLaterPage = () => {
  const [selectedService, setSelectedService] = useState('CONSULTING')

  const services = {
    'CONSULTING': {
      title: 'Buy now, pay later app development consulting',
      description: 'Our BNPL app development consulting experts help you strategize and build solutions that leverage embedded finance for secure payment integrations and smooth user experiences.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80'
    },
    'CUSTOM_DEVELOPMENT': {
      title: 'Custom buy now, pay later app development',
      description: 'We offer custom BNPL app development services focused on a comprehensive set of requirements – including preferred platform, functional capabilities, and security measures.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'UX_UI_DESIGN': {
      title: 'UX / UI design',
      description: 'Our dedicated designers conduct UX research, create functional wireframes and prototypes, and design visually appealing UI mockups that offer an engaging user experience.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'THIRD_PARTY_INTEGRATION': {
      title: 'Third-party services integration',
      description: 'leanTek consolidates different services into your BNPL app to further extend its functionality. We use APIs to implement payment gateways, credit rating services, and accounting features.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80'
    },
    'AI_ML_INTEGRATION': {
      title: 'AI and ML integration',
      description: 'Our experts integrate AI algorithms to supercharge credit assessment and fraud detection features to keep your system protected from threats and streamline service delivery.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'TESTING_QA': {
      title: 'Testing and quality assurance',
      description: 'Our quality assurance engineers go all out to rigorously test essential features, data integrity, overall security, and software performance to deliver reliable and user-friendly apps.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    }
  }

  const industries = [
    { 
      name: 'Finance & Banking', 
      description: 'Comprehensive BNPL solutions for financial institutions',
      icon: '🏦'
    },
    { 
      name: 'eCommerce & Retail', 
      description: 'Seamless checkout experiences for online retailers',
      icon: '🛒'
    },
    { 
      name: 'Healthcare', 
      description: 'Medical payment solutions with flexible terms',
      icon: '🏥'
    },
    { 
      name: 'Travel & Hospitality', 
      description: 'Book now, pay later travel experiences',
      icon: '✈️'
    },
    { 
      name: 'Education', 
      description: 'Educational financing and course payment solutions',
      icon: '🎓'
    },
    { 
      name: 'Automotive', 
      description: 'Vehicle and service payment flexibility',
      icon: '🚗'
    }
  ]

  const technologies = {
    'Programming Languages': ['JavaScript', 'Python', 'Java', 'Swift', 'Kotlin'],
    'Frameworks & Libraries': ['React Native', 'Flutter', 'Django', 'Spring Boot'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    'Cloud Platforms': ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure'],
    'Payment Gateways': ['Stripe', 'PayPal', 'Square', 'Adyen'],
    'DevOps': ['Docker', 'Kubernetes', 'Jenkins', 'Ansible'],
    'AI & ML': ['TensorFlow', 'Scikit-learn', 'PyTorch', 'Google Cloud AI']
  }

  const [selectedTechCategory, setSelectedTechCategory] = useState('Programming Languages')

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Buy Now, Pay Later App Development Company - leanTek'
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit" 
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-[#1E1F25] text-white py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-6">
                Buy now, pay later app development company
              </h1>
              <hr className="my-4 border-red-600 max-w-[300px]"/>
              <p className="text-base text-gray-400 max-w-3xl mb-8">
                Ready to shake up your business and unlock fresh revenue? With our expertise in crafting custom BNPL solutions, backed by a killer tech stack, cutting-edge tools, and industry know-how, we're here to take your operations to the next level.
              </p>
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white font-light px-8 py-4 text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's talk details
              </motion.button>
            </div>
            <div className="hidden lg:block">
              <div className="bg-red-600 rounded-full p-8 text-center">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">BNPL projects successfully delivered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get comprehensive buy now, pay later app development services
          </h2>
          <p className="text-gray-600 max-w-4xl text-lg leading-relaxed">
            We help our clients streamline their financial operations and improve service accessibility for end-users with embedded finance solutions. Our developers build BNPL solutions that bring the power of open banking to service providers and product vendors. From app development consulting to AI integration and rigorous quality assurance, our expert teams guarantee a new level of comprehensive, top-tier service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Menu */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-1">
                {Object.keys(services).map((service, index) => (
                  <motion.button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedService === service
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="font-medium text-sm">
                      {services[service].title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div 
            className="lg:col-span-2"
            key={selectedService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img 
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {services[selectedService].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industries we serve
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Our BNPL solutions are tailored to meet the specific needs of various industries, providing flexible payment options that enhance customer experience and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our all-in-one approach to buy now, pay later app development
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From initial consultation to ongoing support, we provide end-to-end BNPL development services that ensure your solution is scalable, secure, and user-friendly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              step: '1', 
              title: 'Manager assignment', 
              duration: '1-2 hours',
              description: 'Once we\'ve received your initial request, our sales manager will serve as your primary contact – handling all the important details of the project.'
            },
            { 
              step: '2', 
              title: 'Resume screening', 
              duration: '1-2 days',
              description: 'We carefully select the resumes of the BNPL experts who best align with your specific requirements and forward them to you for approval.'
            },
            { 
              step: '3', 
              title: 'Interview setup', 
              duration: 'Optional',
              description: 'If you like, we\'ll arrange interviews between your and your shortlisted candidates to confirm that they meet your project\'s requirements.'
            },
            { 
              step: '4', 
              title: 'Team assembly', 
              duration: '1-2 weeks',
              description: 'On the lookout for a dedicated project team? We\'ll put together a group with the perfect mix of expertise and knowledge to get the ball rolling on your project.'
            },
            { 
              step: '5', 
              title: 'MVP development', 
              duration: '2-3 months',
              description: 'During this period, we\'ll develop and launch your MVP – getting it ready for initial market testing, future iterations, and enhancements.'
            },
            { 
              step: '6', 
              title: 'Full development', 
              duration: '3-12 months',
              description: 'After successfully completing the testing and quality assurance phase, we\'ll deliver a complete buy now, pay later app that\'s fully scalable and adaptable to further demands.'
            }
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                  <p className="text-red-600 text-sm font-medium">{phase.duration}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The core technologies we work with
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tech Categories */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2">
                  {Object.keys(technologies).map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedTechCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedTechCategory === category
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="font-medium text-sm">
                        {category}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tech List */}
            <motion.div 
              className="lg:col-span-3"
              key={selectedTechCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies[selectedTechCategory].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:bg-red-50 hover:border-red-200 border border-gray-200 transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <span className="font-medium text-gray-900">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              question: 'What is a buy now, pay later (BNPL) app?',
              answer: 'Buy now, pay later (BNPL) is an alternative payment method that lets customers purchase products and services without paying the full amount upfront. Instead, they have the opportunity to fulfill their purchases immediately and repay the amount in installments over time.'
            },
            {
              question: 'How long does it take to develop a BNPL app?',
              answer: 'Buy now, pay later app development typically takes 5 to 8 months, depending on the complexity of the features and the project\'s specific requirements. For more apps that are a little more on the complicated side, this timeline may stretch to eight months and more.'
            },
            {
              question: 'Can a BNPL app be integrated with existing eCommerce platforms?',
              answer: 'Absolutely! A BNPL app can be integrated with existing eCommerce platforms via custom APIs. This means the BNPL solution can be tailored to the platform\'s specific requirements – resulting in a smooth and stress-free implementation.'
            },
            {
              question: 'What are the costs associated with developing a BNPL app?',
              answer: 'The price tag for BNPL app development can range from $120,000 to $400,000 or more, with costs varying based on a variety of different factors like app features, platform support, integration complexity, and additional requirements.'
            },
            {
              question: 'How can a BNPL app help increase customer loyalty?',
              answer: 'Providing BNPL options can increase customer loyalty and encourage repeat purchases. It can also be the deciding factor for customers when comparing products on different websites – ultimately leading them to choose your business over competitors.'
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
              Ready to revolutionize your payment solutions?<br />
              Let leanTek build your BNPL app.
            </h2>
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white font-light px-8 py-4 text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default BuyNowPayLaterPage 