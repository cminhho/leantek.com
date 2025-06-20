import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

const ServiceCategory = ({ id, title, description, services, bgColor = "bg-gray-50" }) => {
  return (
    <section id={id} className={`py-20 ${bgColor} scroll-mt-20`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">{title}</h2>
          <div className="w-24 h-0.5 bg-red-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                {service.subServices && (
                  <div className="border-t border-gray-100 pt-6">
                    <ul className="space-y-3">
                      {service.subServices.map((subService, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-600 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 leading-relaxed">{subService}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "it-services",
      title: "IT Services",
      bgColor: "bg-white",
      description: "Delivers software engineering and development services for IT product companies, non-IT enterprises and innovative start-ups in various industries. Keeping up with the changing technology trends, we provide full-scale assistance with the below-listed services.",
      services: [
        {
          title: "Custom Software Development",
          description: "End-to-end custom software solutions tailored to your business needs and objectives.",
          color: "from-gray-700 to-gray-800",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          ),
          subServices: [
            "Web application development",
            "Mobile app development",
            "Desktop software solutions",
            "API development and integration",
            "Legacy system modernization"
          ]
        },
        {
          title: "Staff Augmentation",
          description: "Flexible staffing solutions to scale your development team with skilled professionals.",
          color: "from-slate-600 to-slate-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          ),
          subServices: [
            "Team extension",
            "Dedicated team"
          ]
        },
        {
          title: "Software Testing & Quality Assurance",
          description: "Comprehensive testing services to ensure your software meets the highest quality standards.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ),
          subServices: [
            "Manual testing",
            "Automated testing",
            "Performance testing",
            "Security testing",
            "User acceptance testing"
          ]
        },
        {
          title: "Product Engineering",
          description: "Full-cycle product development from concept to market launch and beyond.",
          color: "from-slate-700 to-slate-800",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ),
          subServices: [
            "Product strategy and roadmap",
            "UI/UX design",
            "MVP development",
            "Product optimization",
            "Market research and analysis"
          ]
        },
        {
          title: "IT Support",
          description: "Reliable technical support and maintenance services to keep your systems running smoothly.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
            </svg>
          ),
          subServices: [
            "24/7 technical support",
            "System monitoring",
            "Bug fixes and patches",
            "Performance optimization",
            "Regular maintenance"
          ]
        },
        {
          title: "IT Consulting & Advisory",
          description: "Strategic IT guidance to help you make informed technology decisions and optimize your IT investments.",
          color: "from-slate-600 to-slate-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          ),
          subServices: [
            "IT strategy development",
            "Technology assessment",
            "Digital transformation planning",
            "Architecture design",
            "Vendor selection"
          ]
        }
      ]
    },
    {
      id: "technological-advancement",
      title: "Technological Advancement",
      bgColor: "bg-gray-50",
      description: "Provides businesses and software development companies with IT services for technological advancement. Whether cloud migration or VR app development, we design solutions to streamline internal workflows, win the market in the particular industry, and drive innovation forward.",
      services: [
        {
          title: "Cloud",
          description: "Comprehensive cloud services to help you leverage the power of cloud computing for scalability and efficiency.",
          color: "from-gray-700 to-gray-800",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
            </svg>
          ),
          subServices: [
            "Cloud migration strategy",
            "AWS, Azure, GCP solutions",
            "Cloud architecture design",
            "Serverless computing",
            "Cloud security and compliance",
            "Cost optimization"
          ]
        },
        {
          title: "Big Data",
          description: "Advanced big data solutions to help you extract valuable insights from large datasets and make data-driven decisions.",
          color: "from-slate-600 to-slate-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          ),
          subServices: [
            "Data analytics and visualization",
            "Machine learning implementation",
            "Data warehousing solutions",
            "Real-time data processing",
            "Predictive analytics",
            "Business intelligence"
          ]
        }
      ]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      bgColor: "bg-white",
      description: "LeanTek's team helps businesses of all sizes get the digitization process rolling and set the trend of business enhancement with IT. Find in the list below the digital transformation service for your enterprise, and feel free to reach our IT consultants.",
      services: [
        {
          title: "ERP & CRM",
          description: "Enterprise resource planning and customer relationship management solutions to streamline your business operations.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ),
          subServices: [
            "ERP system implementation",
            "CRM platform development",
            "System integration",
            "Data migration",
            "Training and support"
          ]
        },
        {
          title: "Human Resource Management (HRM)",
          description: "HRM software solutions to streamline your HR processes and improve employee management.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ),
          subServices: [
            "HRM system implementation",
            "Employee management",
            "Performance tracking",
            "Leave and attendance management",
            "Recruitment and onboarding",
            "Employee benefits and compensation",
            "Performance management",
            "Employee self-service"
          ]
        },
        {
          title: "Content & Document Management",
          description: "Comprehensive content and document management systems to organize, store, and retrieve your digital assets efficiently.",
          color: "from-slate-700 to-slate-800",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          ),
          subServices: [
            "Document management systems",
            "Content workflow automation",
            "Digital asset management",
            "Version control systems",
            "Collaboration platforms"
          ]
        },
        {
          title: "Automation",
          description: "Process automation solutions to reduce manual work, increase efficiency, and minimize human errors.",
          color: "from-gray-700 to-gray-800",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
            </svg>
          ),
          subServices: [
            "Robotic process automation (RPA)",
            "Workflow automation",
            "Business rules engine",
            "API automation",
            "Testing automation"
          ]
        },
        {
          title: "Data Management",
          description: "Comprehensive data management solutions to ensure data quality, accessibility, and security across your organization.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
            </svg>
          ),
          subServices: [
            "Data architecture design",
            "Database optimization",
            "Data integration",
            "Master data management",
            "Data governance"
          ]
        },
        {
          title: "Task Management",
          description: "Efficient task management solutions to streamline your workflow and improve productivity.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ),
          subServices: [
            "Task management system",
            "Project management",
            "Task scheduling",
            "Task tracking",
            "Task prioritization",
            "Task delegation",
            "Task completion tracking",
            "Task reporting",
            "Task collaboration",
            "Task notifications"
          ]
        },
        {
          title: "Internal Google Search & AI",
          description: "Internal Google Search & AI to help you find information quickly and efficiently.",
          color: "from-gray-600 to-gray-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ),
          subServices: [
            "Internal Google Search",
            "Internal AI",
            "Internal Search",
            "Internal AI",
          ]
        }
      ]
    },
    {
      id: "industry-specific",
      title: "Industry-Specific Software",
      bgColor: "bg-gray-50",
      description: "Specialized software solutions tailored to meet the unique requirements and challenges of specific industries.",
      services: [
        {
          title: "FinTech & Banking",
          description: "Secure and compliant financial technology solutions for banking, payments, and financial services.",
          color: "from-red-600 to-red-700",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          ),
          subServices: [
            "Core banking",
            "POS software",
            "Digital banking platforms",
            "Payment processing systems",
            "BNPL solutions",
            "Lending solutions",
            "Merchant Cash Advance solutions",
            "Risk management systems",
            "Mobile banking apps",
          ]
        },
        {
          title: "eCommerce",
          description: "Complete eCommerce solutions to help you build, manage, and scale your online business successfully.",
          color: "from-slate-700 to-slate-800",
          icon: (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          ),
          subServices: [
            "Shopify",
            "Odoo",
            "Magento",
            "WooCommerce",
            "BigCommerce",
            "Shopware",
            "Salesforce",
            "SAP",
            "POS",
          ]
        }
      ]
    }
  ]

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Services - Leantek2'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-5xl md:text-6xl font-light mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              IT Solution Services
            </motion.h1>

            <motion.div 
              className="w-32 h-0.5 bg-red-600 mb-10"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              LeanTek delivers comprehensive software engineering and development services for IT product companies, non-IT enterprises, and innovative start-ups across various industries. Our multi-skilled experienced team facilitates businesses worldwide on their digital transformation journey, helping companies leverage IT innovations at every project stage.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-6 bg-white sticky top-0 z-20 shadow-md border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {serviceCategories.map((category, index) => (
              <a 
                key={index}
                href={`#${category.id}`}
                className="px-6 py-3 bg-gray-50 hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-medium text-gray-700 border border-gray-200"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <ServiceCategory 
          key={index}
          id={category.id}
          title={category.title}
          description={category.description}
          services={category.services}
          bgColor={category.bgColor}
        />
      ))}

      {/* ContactForm Section */}
      <ContactForm />
    </>
  )
}

export default ServicesPage