import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants for consistent page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const EnterprisePage = () => {
  const [selectedSolution, setSelectedSolution] = useState('ENTERPRISE LEARNING MANAGEMENT SYSTEMS')

  const solutions = {
    'ENTERPRISE RESOURCE PLANNING SYSTEMS': {
      title: 'Enterprise Resource Planning Systems',
      description: 'Comprehensive ERP systems that integrate all business processes into a single, unified platform. These solutions help organizations streamline operations, improve data accuracy, and enhance decision-making capabilities across all departments.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80'
    },
    'CUSTOMER RELATIONSHIP MANAGEMENT SOFTWARE': {
      title: 'Customer Relationship Management Software',
      description: 'Advanced CRM solutions that enable businesses to manage customer interactions, track sales pipelines, and build lasting relationships. Our CRM systems provide comprehensive customer insights and automated workflows.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    'BUSINESS PROCESS MANAGEMENT SOFTWARE': {
      title: 'Business Process Management Software',
      description: 'Sophisticated BPM solutions that help organizations design, execute, monitor, and optimize business processes. These systems enable workflow automation and continuous process improvement.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    'ENTERPRISE MASTER DATA MANAGEMENT SYSTEM': {
      title: 'Enterprise Master Data Management System',
      description: 'Robust MDM systems that ensure data consistency, accuracy, and reliability across all enterprise applications. These solutions provide a single source of truth for critical business data.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80'
    },
    'ENTERPRISE DOCUMENT MANAGEMENT SYSTEMS': {
      title: 'Enterprise Document Management Systems',
      description: 'Comprehensive document management solutions that digitize, organize, and secure business documents. These systems improve collaboration, ensure compliance, and reduce operational costs.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    'ENTERPRISE ASSET MANAGEMENT SOFTWARE (EAM)': {
      title: 'Enterprise Asset Management Software (EAM)',
      description: 'Advanced EAM solutions that help organizations track, maintain, and optimize physical assets throughout their lifecycle. These systems reduce downtime and extend asset lifespan.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    },
    'CONTENT MANAGEMENT SYSTEM (CMS)': {
      title: 'Content Management System (CMS)',
      description: 'Powerful CMS platforms that enable organizations to create, manage, and distribute digital content efficiently. These systems support multi-channel publishing and collaborative content creation.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80'
    },
    'HR AND TALENT MANAGEMENT SOFTWARE': {
      title: 'HR and Talent Management Software',
      description: 'Comprehensive HR solutions that streamline recruitment, performance management, and employee development. These systems help organizations attract, retain, and develop top talent.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2268&q=80'
    },
    'ENTERPRISE LEARNING MANAGEMENT SYSTEMS': {
      title: 'Enterprise learning management systems',
      description: 'Leveraging corporate LMS, you get a powerful asset and an invaluable tool for your enterprise company. The system allows businesses to streamline their training and development processes and continuously update employees with the latest information and skills. With extended enterprise LMS, enterprises can track employee progress, measure the effectiveness of their training, and create tailored learning paths that maximize their performance.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
    }
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Enterprise Software Development Services - leanTek'
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
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Software Development Services
          </motion.h1>
          <hr className="my-4 border-red-600 max-w-[300px]"/>
          <motion.p 
            className="text-base text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enterprise software development services are a powerful way to create scalable enterprise systems (ERM, CRM, HRM, and more) that streamline a wide range of organizational and client-centric workflows. Most importantly, these systems make sure the data is always consistent and error-free, which is key for smart decision-making. While the upfront cost can be high, these systems typically cut long-term operational costs by 20-30% in the long run.
          </motion.p>
        </div>
      </div>

      {/* Enterprise Solutions Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enterprise software solutions we offer
          </h2>
          <p className="text-gray-600 max-w-4xl text-lg leading-relaxed">
            From data management to process automation, businesses today face a myriad of challenges. With enterprise software solutions from leanTek, your company takes advantage of the latest technology and keeps your business running effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Solutions Menu */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-1">
                {Object.keys(solutions).map((solution, index) => (
                  <motion.button
                    key={solution}
                    onClick={() => setSelectedSolution(solution)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedSolution === solution
                        ? 'bg-red-50 text-red-600 border-l-4 border-red-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="font-medium text-sm">
                      {solution}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution Details */}
          <motion.div 
            className="lg:col-span-2"
            key={selectedSolution}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img 
                  src={solutions[selectedSolution].image}
                  alt={solutions[selectedSolution].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solutions[selectedSolution].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solutions[selectedSolution].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://innowise.com/wp-content/uploads/2023/03/Enterprise.png')`
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
              Ready to innovate and transform your business?<br />
              Let leanTek take you there.
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

export default EnterprisePage 