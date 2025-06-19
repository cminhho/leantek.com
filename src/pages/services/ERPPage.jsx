import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'

const ERPPage = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const erpServices = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: "Consulting",
      description: "Our ERP consulting services encompass discovery, strategy formulation, and technology advisory to set your project on the right path. We evaluate your current processes, identify areas for improvement, and map out a strategic development plan."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Implementation",
      description: "Innowise handles the implementation process for both custom and off-the-shelf ERP software, including business needs analysis, platform deployment, and post-launch support, ensuring ERP platforms align perfectly with business objectives."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Development",
      description: "Utilizing a robust tech stack, we render ERP development services to organizations of any size and industry, implementing bespoke features, modules, and integrations to enhance functionality, improve user experience, and reduce manual effort."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Support",
      description: "Innowise provides continuous ongoing support to ensure ERP systems operate as intended. Our services include troubleshooting, performance monitoring, and regular maintenance to minimize downtime and eliminate the risk of system failure."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Upgrade",
      description: "Our specialists help businesses stay ahead of the competition and keep their systems aligned with the latest advancements and trends. We navigate the complexities of upgrading ERP software, providing a slick transition without disturbance."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 6l-1.41-1.41L12 10.17 8.41 6.59 7 8l5 5 5-5z"/>
        </svg>
      ),
      title: "Landscape transformation",
      description: "We provide ERP services to revitalize technology infrastructure and reshape the business landscape. We aid businesses in modernizing legacy systems, migrating to new platforms, and reinventing workflows for agility."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
        </svg>
      ),
      title: "Integration",
      description: "Through ERP software, Innowise creates a unified ecosystem where data flows across existing software infrastructure and next-generation technologies without a hitch, improving information accessibility and facilitating better decision-making."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Testing",
      description: "Throughout the ERP development and beyond, we conduct scrupulous tests to rectify any issues before the enterprise resource planning software system goes live, guaranteeing stability, performance, and alignment with business requirements."
    }
  ]

  const erpPlatforms = [
    {
      name: "SAP",
      description: "Enterprise-grade ERP solution for large organizations",
      features: ["Financial Management", "Supply Chain", "Human Resources", "Manufacturing"]
    },
    {
      name: "Microsoft Dynamics 365",
      description: "Cloud-based ERP and CRM platform",
      features: ["Business Central", "Finance & Operations", "Customer Engagement", "PowerBI Integration"]
    },
    {
      name: "Odoo",
      description: "Open-source business management suite",
      features: ["CRM", "eCommerce", "Accounting", "Inventory", "Project Management"]
    },
    {
      name: "Salesforce",
      description: "World's leading CRM platform",
      features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Commerce Cloud"]
    }
  ]

  const benefits = [
    {
      icon: "📊",
      title: "Enhanced visibility",
      description: "Get a 360-degree view of your business operations with real-time data and analytics"
    },
    {
      icon: "⚡",
      title: "Improved efficiency",
      description: "Automate manual processes and eliminate redundancies to boost productivity"
    },
    {
      icon: "💰",
      title: "Cost reduction",
      description: "Reduce operational costs through process optimization and resource allocation"
    },
    {
      icon: "📈",
      title: "Better decision making",
      description: "Make informed decisions with comprehensive reporting and business intelligence"
    },
    {
      icon: "🔧",
      title: "Scalability",
      description: "Scale your business operations seamlessly as your company grows"
    },
    {
      icon: "🛡️",
      title: "Enhanced security",
      description: "Protect your business data with enterprise-grade security features"
    }
  ]

  const implementationProcess = [
    {
      step: "01",
      title: "Analysis",
      description: "Our ERP consultants begin by conducting an in-depth review of current business processes, workflows, and technological environments."
    },
    {
      step: "02",
      title: "Design & tech stack",
      description: "We formulate a concept for the ERP solution from the gathered requirements, design its architecture, and select the relevant technology stack."
    },
    {
      step: "03",
      title: "Planning",
      description: "Following the scoping of the ERP software, our experts set project timelines and budgets, define key deliverables, and allocate necessary resources."
    },
    {
      step: "04",
      title: "Customization or development",
      description: "Relying on the best DevOps practices, our team develops tailored ERP software or customizes existing off-the-shelf platforms."
    },
    {
      step: "05",
      title: "Testing",
      description: "Our QA engineers conduct all-around testing to ensure the final solution does not contain system malfunctions, UI/UX bugs, and data integrity issues."
    },
    {
      step: "06",
      title: "Deployment",
      description: "We deploy the ERP solution in the production environment and migrate data from existing corporate systems and applications to the new digital ecosystem."
    },
    {
      step: "07",
      title: "Launch",
      description: "Innowise performs user acceptance testing to evaluate the ERP system under real-world conditions and guarantee hassle-free performance across various scenarios."
    },
    {
      step: "08",
      title: "Support",
      description: "Once the ERP system goes live, our specialists optimize the system, address performance issues, resolve bugs, and conduct updates upon request."
    }
  ]

  const stats = [
    { number: "40+", label: "launched ERP projects" },
    { number: "60+", label: "in-house ERP experts" },
    { number: "75%", label: "of senior and middle developers" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-500 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              ERP Services & Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              For companies in need of automation and transparency, we offer enterprise resource planning (ERP) services and solutions designed to enhance inventory turnover, minimize production delays, and amplify operational outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-white px-8 py-4">
                Get a Free Consultation
              </Link>
              <button className="btn btn-outline-white px-8 py-4">
                View Our Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">ERP Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consulting to implementation, we provide comprehensive ERP services to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {erpServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits of ERP Implementation for Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with comprehensive ERP solutions that drive growth and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Platforms Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">ERP Platforms We Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are official partners with leading ERP platforms, offering businesses numerous advantages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {erpPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{platform.name}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our ERP Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From analyzing customer requirements to post-launch maintenance and support, we methodically develop ERP solutions of any scope and complexity
            </p>
          </motion.div>

          <div className="space-y-8">
            {implementationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {process.step}
                      </div>
                      <h3 className="text-2xl font-bold">{process.title}</h3>
                    </div>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Facing inventory management headaches?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Discover how ERP solutions provide precise inventory control and optimize stock levels.
            </p>
            <Link to="/contact" className="btn btn-white px-8 py-4 text-lg">
              Choose ERP
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-600">
                Get in touch with our ERP experts for a free consultation
              </p>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ERPPage 