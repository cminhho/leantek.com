import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactForm from '../../../components/ContactForm'
import TableOfContentsNav from '../../../components/TableOfContentsNav'

// Animation variants for consistent page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

// Plus Icon SVG component for FAQ
const PlusIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// FAQ Item component with toggle functionality
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleQuestion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        className="w-full py-6 text-left flex justify-between items-center group"
        onClick={toggleQuestion}
      >
        <span className="text-lg text-gray-900 pr-4 font-medium">
          {faq.question}
        </span>
        <motion.div
          animate={{ 
            rotate: isOpen ? 45 : 0,
            color: isOpen ? '#DC2626' : '#374151'
          }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <PlusIcon className="w-6 h-6" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pb-6">
              <p className="text-gray-600 leading-relaxed pr-12">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const BuyNowPayLaterPage = () => {
  // Video URLs
  const cubeVideo1Url = `${import.meta.env.BASE_URL}videos/cube1.webm`
  const cubeVideo2Url = `${import.meta.env.BASE_URL}videos/cube2.webm`
  const cubeVideo3Url = `${import.meta.env.BASE_URL}videos/cube3.webm`
  const [selectedService, setSelectedService] = useState('CONSULTING')

  // Table of Contents sections
  const tocSections = [
    { id: 'hero', title: 'Introduction' },
    { id: 'services', title: 'BNPL Development Services' },
    { id: 'approach', title: 'Our All-in-One Approach' },
    { id: 'service-options', title: 'Service Options' },
    { id: 'code-quality', title: 'Code Quality Assessment' },
    { id: 'development-process', title: 'Development Process' },
    { id: 'technologies', title: 'Technologies We Use' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'contact', title: 'Get In Touch' }
  ]

  // Our All-in-One Approach content
  const approachItems = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#DC2626" strokeWidth="1" fill="white"/>
          <circle cx="12" cy="12" r="6" stroke="#DC2626" strokeWidth="1" fill="#DC2626"/>
          <circle cx="12" cy="12" r="1.5" fill="white"/>
        </svg>
      ),
      title: 'Project scoping',
      description: 'At leanTek, consistency is key. We\'ll kick things off with a walkthrough analysis of your requirements and develop clear project outlines to prevent scope creep.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="#DC2626" strokeWidth="1" fill="white"/>
          <path d="M7 8h6M7 12h8M7 16h4" stroke="#DC2626" strokeWidth="1"/>
          <circle cx="17" cy="9" r="1.5" fill="#DC2626"/>
          <path d="M15.5 9h3" stroke="white" strokeWidth="0.5"/>
        </svg>
      ),
      title: 'Cost estimation',
      description: 'In order to give you a reliable and accurate estimate, we\'ll analyze a range of factors to understand the full scope and scale of your project.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#DC2626" strokeWidth="1" fill="none"/>
          <circle cx="8.5" cy="7" r="3.5" stroke="#DC2626" strokeWidth="1" fill="white"/>
          <path d="M20 8v6M23 11l-3 3-3-3" stroke="#DC2626" strokeWidth="1" fill="none"/>
          <circle cx="20" cy="4" r="1.5" fill="#DC2626"/>
        </svg>
      ),
      title: 'Collaboration',
      description: 'We\'ll keep you in the loop concerning project progress and any challenges that crop up, providing transparent communication and regular updates throughout the entire project.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#DC2626" strokeWidth="1" fill="white"/>
          <polyline points="14,2 14,8 20,8" stroke="#DC2626" strokeWidth="1" fill="#DC2626"/>
          <line x1="8" y1="13" x2="16" y2="13" stroke="#DC2626" strokeWidth="1"/>
          <line x1="8" y1="17" x2="12" y2="17" stroke="#DC2626" strokeWidth="1"/>
        </svg>
      ),
      title: 'Project documentation',
      description: 'We document each phase of the software development lifecycle to offer clear, practical examples you can refer back to anytime.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#DC2626" strokeWidth="1" fill="white"/>
          <path d="M9 12l2 2 4-4" stroke="#DC2626" strokeWidth="1" fill="none"/>
          <circle cx="12" cy="10" r="2.5" fill="#DC2626"/>
        </svg>
      ),
      title: 'Post-launch warranty',
      description: 'Our extensive warranty covers all the major aspects of buy now, pay later software development - meaning total support once the app is up and running.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4v6h6" stroke="#DC2626" strokeWidth="1" fill="none"/>
          <path d="M23 20v-6h-6" stroke="#DC2626" strokeWidth="1" fill="none"/>
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="#DC2626" strokeWidth="1" fill="none"/>
          <circle cx="12" cy="12" r="2.5" fill="#DC2626"/>
          <path d="M12 9.5v5M9.5 12h5" stroke="white" strokeWidth="0.8"/>
        </svg>
      ),
      title: 'Change request management',
      description: 'We get it: things change. Our streamlined change management procedure makes it easy to record, evaluate, prioritize, and implement changes whenever you request them.'
    }
  ]

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
    'Programming Languages': [
      { 
        name: 'JavaScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
      },
      { 
        name: 'Python', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      { 
        name: 'Java', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
      },
      { 
        name: 'Swift', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
      },
      { 
        name: 'Kotlin', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
      }
    ],
    'Frameworks & Libraries': [
      { 
        name: 'React Native', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      { 
        name: 'Flutter', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
      },
      { 
        name: 'Django', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
      },
      { 
        name: 'Spring Boot', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
      }
    ],
    'Databases': [
      { 
        name: 'MySQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
      },
      { 
        name: 'PostgreSQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
      },
      { 
        name: 'MongoDB', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
      },
      { 
        name: 'Firebase', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
      }
    ],
    'Cloud Platforms': [
      { 
        name: 'Amazon Web Services (AWS)', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
      },
      { 
        name: 'Google Cloud Platform (GCP)', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
      },
      { 
        name: 'Microsoft Azure', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
      }
    ],
    'Payment Gateways': [
      { 
        name: 'Stripe', 
        icon: 'https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg'
      },
      { 
        name: 'PayPal', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg'
      },
      { 
        name: 'Square', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/square/square-original.svg'
      },
      { 
        name: 'Adyen', 
        icon: 'https://www.adyen.com/app/themes/adyen/images/svg/adyen-logomark-green.svg'
      }
    ],
    'DevOps': [
      { 
        name: 'Docker', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
      },
      { 
        name: 'Kubernetes', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
      },
      { 
        name: 'Jenkins', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
      },
      { 
        name: 'Ansible', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg'
      }
    ],
    'AI & ML': [
      { 
        name: 'TensorFlow', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
      },
      { 
        name: 'Scikit-learn', 
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
      },
      { 
        name: 'PyTorch', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
      },
      { 
        name: 'Google Cloud AI', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
      }
    ]
  }

  const [selectedTechCategory, setSelectedTechCategory] = useState('Programming Languages')
  const [expandedCategories, setExpandedCategories] = useState({
    'Programming Languages': true,
    'Frameworks & Libraries': false,
    'Databases': false,
    'Cloud Platforms': false,
    'Payment Gateways': false,
    'DevOps': false,
    'AI & ML': false
  })

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  // Service options for BNPL development
  const serviceOptions = [
    {
      title: "Expert BNPL developers",
      description: "Need additional expertise for your BNPL project? Our skilled developers can bring specialized knowledge in payment processing, fraud detection, credit assessment, and compliance. With our team, you'll accelerate development and ensure best practices.",
      buttonText: "Request expert developers",
      buttonLink: "/contact",
              video: cubeVideo1Url
    },
    {
      title: "Dedicated BNPL team",
      description: "Looking for a complete development team? Our dedicated BNPL specialists, led by an experienced project manager, will seamlessly integrate with your workflow. We'll handle everything from architecture to deployment while keeping you in full control.",
      buttonText: "Request dedicated team",
      buttonLink: "/contact",
              video: cubeVideo2Url
    },
    {
      title: "Full project delivery",
      description: "Want to outsource your entire BNPL project? With our end-to-end BNPL development services, we'll manage every aspect from initial consultation to post-launch support, delivering a complete solution that's secure, scalable, and ready for market.",
      buttonText: "Request full project",
      buttonLink: "/contact",
              video: cubeVideo3Url
    }
  ]

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Buy Now, Pay Later App Development - leanTek'
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
      {/* Table of Contents Navigation */}
      <TableOfContentsNav 
        sections={tocSections}
        title="Page Navigation"
      />
      {/* Hero Section */}
      <div id="hero" className="relative text-white py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://www.bankrate.com/2023/03/30173502/buy-now-pay-later-impact-on-spending-1073935306.jpg?auto=webp&optimize=high&crop=16:9&width=912"
            alt="Financial technology background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div className="max-w-4xl">
              <motion.h1 
                className="text-4xl md:text-5xl font-light mb-6 leading-tight drop-shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Buy now, pay later app development
              </motion.h1>
              <motion.hr 
                className="my-4 border-red-600 max-w-[300px] border-2"
                initial={{ width: 0 }}
                animate={{ width: 300 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.p 
                className="text-base text-gray-200 max-w-3xl mb-8 drop-shadow-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready to shake up your business and unlock fresh revenue? With our expertise in crafting custom BNPL solutions, backed by a killer tech stack, cutting-edge tools, and industry know-how, we're here to take your operations to the next level.
              </motion.p>
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white font-light px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-red-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Let's talk details
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Animated particles/dots for visual enhancement */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="max-w-4xl text-2xl lg:text-4xl font-light text-gray-900 mb-8">
            Get comprehensive buy now, pay later app development services
          </h2>
          <p className="max-w-4xl text-base text-gray-700 leading-relaxed">
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
            <div className="max-w-[280px]">
              <div className="space-y-1 border-l border-gray-300">
                {Object.keys(services).map((service, index) => (
                  <motion.button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                      selectedService === service
                        ? 'text-red-600 border-l-4 border-red-700'
                        : 'text-gray-700 hover:text-red-600 border-l-2 border-transparent'
                    }`}
                  >
                    <span className="font-medium text-base">
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
            <div className="overflow-hidden">
              <div className="">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {services[selectedService].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {services[selectedService].description}
                </p>
              </div>
              <div className="aspect-video bg-gray-100 mt-8 max-w-2xl max-h-80">
                <img 
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our All-in-One Approach Section */}
      <div id="approach" className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-6 max-w-4xl">
            Our all-in-one approach to buy now pay, later app development
          </h2>
          <p className="text-gray-600 max-w-4xl text-base leading-relaxed">
            We make sure your app is built cost-effectively, runs smoothly, and gets delivered on time by meticulously planning every step and following a solid framework. This approach minimizes risks, prevents scope creep, and guarantees that all project objectives are met within the specified budget and timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approachItems.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <div className="mb-4 flex justify-center lg:justify-start">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Choose Your Service Option Section */}
      <div id="service-options" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6 max-w-4xl">
              Choose your service option
            </h2>
          </motion.div>

                     {/* Service Options Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
             {serviceOptions.map((option, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="border border-gray-400 overflow-hidden flex flex-col h-full group hover:shadow-lg transition-shadow duration-300"
               >
                 {/* Video Section */}
                 <div className="relative h-32 lg:h-36 overflow-hidden flex items-center justify-center">
                   <video
                     src={option.video}
                     autoPlay
                     loop
                     muted
                     playsInline
                     className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
                 </div>

                 {/* Content Section */}
                 <div className="p-8 flex flex-col flex-grow">
                   {/* Title */}
                   <h3 className="text-base lg:text-xl font-medium text-gray-900 mb-4">
                     {option.title}
                   </h3>

                   {/* Description */}
                   <p className="text-xs lg:text-sm text-gray-800 leading-relaxed mb-8 flex-grow">
                     {option.description}
                   </p>

                   {/* CTA Button */}
                   <div className="mt-auto">
                     <motion.button
                       className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors font-medium text-center text-xs lg:text-base group-hover:bg-red-700"
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                       {option.buttonText}
                     </motion.button>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>

      {/* Code Quality Section */}
      <div id="code-quality" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8 max-w-5xl">
              How we assess and evaluate code quality for successful project delivery
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Code rules and guidelines',
                description: 'We stick to a tried-and-tested coding style guide, using descriptive names to maintain modular, portable code. Our development process is further supported by thorough unit testing to guarantee reliability and quality.'
              },
              {
                title: 'Code documentation',
                description: 'Our team provides detailed and consistent maintenance guides, easy-to-understand end-user tutorials, and clear explanations of individual code functions. This way, we cut out any unnecessary confusion and dramatically reduce time spent on troubleshooting.'
              },
              {
                title: 'Code review practices',
                description: 'We carry out regular ad-hoc evaluations, cross-checks, and routine quality assessments to maintain high quality standards. This approach means your software gets better and better with each review cycle.'
              },
              {
                title: 'Detailed planning',
                description: 'We kick things off with careful project planning, breaking down your vision into clear milestones and tasks that match your unique requirements. We set specific coding timelines to stay on track and avoid any hiccups along the way.'
              },
              {
                title: 'Rigorous testing',
                description: 'We\'re strict about following our tried-and-true coding guidelines: no shortcuts here. Our thorough quality assurance and risk mitigation processes make sure everything runs flawlessly from start to finish.'
              },
              {
                title: 'Continuous maintenance',
                description: 'When it comes to delivery, we don\'t just hand over the product and leave. We guarantee quality by providing comprehensive test reports and continuously supporting the software through CI/CD pipelines.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div id="development-process" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8 max-w-5xl">
              Our development process
            </h2>
            <p className="text-gray-600 max-w-4xl text-base leading-relaxed">
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
                className="p-6 shadow-sm border border-gray-200"
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
      </div>

      {/* Technologies Section */}
      <div id="technologies" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              The core technologies we work with
            </h2>
          </motion.div>

          {/* Technologies Layout */}
          <div className="border-b border-gray-300 py-8">
            <div className="space-y-2">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category} className="border-b border-gray-200 last:border-b-0">
                  <motion.button
                    className="w-full text-left px-4 py-4 font-medium text-base text-gray-900 hover:text-red-600 transition-colors flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    onClick={() => toggleCategory(category)}
                  >
                    <span>
                      {category === 'Programming Languages' ? 'Programming Languages' : 
                       category === 'Frameworks & Libraries' ? 'Frameworks & Libraries' :
                       category === 'Databases' ? 'Databases' :
                       category === 'Cloud Platforms' ? 'Cloud Platforms' :
                       category === 'Payment Gateways' ? 'Payment Gateways' :
                       category === 'DevOps' ? 'DevOps' :
                       category === 'AI & ML' ? 'AI & ML' :
                       category}
                    </span>
                    <motion.div
                      animate={{ 
                        rotate: expandedCategories[category] ? 45 : 0
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-500"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedCategories[category] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4">
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {techs.map((tech, index) => (
                              <motion.div
                                key={tech.name}
                                className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                              >
                                <div className="w-10 h-10 flex items-center justify-center">
                                  <img 
                                    src={tech.icon} 
                                    alt={tech.name}
                                    className="w-8 h-8 object-contain"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="w-8 h-8 bg-gray-300 hidden items-center justify-center text-sm font-bold text-gray-600">
                                    {tech.name.charAt(0).toUpperCase()}
                                  </div>
                                </div>
                                <h4 className="text-gray-700 text-xs text-center leading-tight">
                                  {tech.name}
                                </h4>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-8 max-w-5xl">
            FAQ
          </h2>
        </motion.div>

        <div className="max-w-4xl">
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
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </motion.div>
  )
}

export default BuyNowPayLaterPage 