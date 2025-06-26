import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TableOfContentsNav from '../components/TableOfContentsNav'

const IndustryCard = ({ title, services, index, link }) => {
  const CardContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`p-8 border border-gray-300 hover:shadow-xl transition-all group cursor-pointer relative ${
        link ? 'hover:border-red-200' : ''
      }`}
    >
      <h3 className={`text-2xl font-bold mb-4 transition-colors ${
        link ? 'group-hover:text-red-600' : 'group-hover:text-red-600'
      }`}>
        {title}
      </h3>
      <ul className="space-y-2">
        {services.map((service, idx) => (
          <li key={idx} className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center">
            <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
            {service}
          </li>
        ))}
      </ul>
      {link && (
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            className="w-5 h-5 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      )}
    </motion.div>
  )

  if (link) {
    return (
      <Link to={link}>
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}

const IndustriesPage = () => {
  const industries = [
    {
      title: "Finance & Banking",
      services: [
        "Digital banking",
        "Online payment software",
        "Digital lending solutions",
        "Trading & investment platforms",
        "AML/KYC",
        "InsurTech"
      ],
      link: "/industries/banking"
    },
    {
      title: "Healthcare & Life Sciences",
      services: [
        "Telemedicine apps",
        "Hospital/patient apps",
        "EHR/EMR",
        "IoMT",
        "Remote patient monitoring",
        "Hospital inventory management"
      ]
    },
    {
      title: "eCommerce & Retail",
      services: [
        "Online shopping",
        "Enterprise marketplaces",
        "NFT marketplaces",
        "Content management systems",
        "Inventory management platforms",
        "Trade platforms"
      ]
    },
    {
      title: "Energy & Utilities",
      services: [
        "Energy management systems",
        "Smart grid tools",
        "Asset & maintenance",
        "Customer systems",
        "Energy trading software",
        "Geographic information systems"
      ]
    },
    {
      title: "Education & eLearning",
      services: [
        "Learning management systems",
        "eLearning platforms",
        "Mobile eLearning platforms",
        "Distance learning platforms",
        "Learning experience platforms",
        "VR training apps"
      ]
    },
    {
      title: "Automotive Industry",
      services: [
        "Dealership management systems",
        "Connected vehicles",
        "Remote vehicle control",
        "Vehicle data management",
        "Digital twins"
      ]
    },
    {
      title: "Media & Entertainment",
      services: [
        "Digital asset management",
        "Social media apps",
        "Video on Demand",
        "Video streaming",
        "Live streaming"
      ]
    },
    {
      title: "Enterprise & Manufacturing",
      services: [
        "Content management systems",
        "Enterprise resource planning",
        "Predictive maintenance",
        "Process automation software",
        "Digital twins",
        "IIoT"
      ],
      link: "/industries/enterprise"
    }
  ]

  const additionalIndustries = [
    "Construction & real estate",
    "Energy, oil & gas",
    "Public services & utilities",
    "Telecommunications",
    "Tourism & HoReCa",
    "HR & recruiting",
    "Marketing & advertising",
    "Agriculture",
    "Sport & lifestyle",
    "Fashion",
    "Art & culture",
    "Environment"
  ]

  // Table of Contents sections
  const tocSections = [
    { id: "overview", title: "Industries Overview" },
    { id: "main-industries", title: "Main Industries" },
    { id: "additional-domains", title: "Additional Domains" },
    { id: "contact", title: "Contact Us" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <TableOfContentsNav sections={tocSections} title="Industries Navigation" />

      {/* Hero Section */}
      <motion.section 
          className="pt-40 pb-24 bg-gray-50 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          id="overview"
        >
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Industries
            </motion.h1>
            
            <motion.hr 
                className="w-24 h-1 bg-red-500 mb-8 border-0"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

            <motion.p 
              className="text-xl text-gray-300 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Since our foundation, we have built numerous bespoke solutions across various industries. 
              Our extensive experience allows us to deliver specialized software solutions tailored to your specific domain.
            </motion.p>
          </div>
      </motion.section>
        

      {/* Main Industries Grid */}
      <div className="container mx-auto px-4 py-16" id="main-industries">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index}
              title={industry.title}
              services={industry.services}
              index={index}
              link={industry.link}
            />
          ))}
        </div>

        {/* Additional Industries Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="additional-domains"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Domains</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {additionalIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 border border-gray-200 shadow hover:shadow-lg transition-all hover:text-red-600 cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="contact"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your business goals
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-red-600 text-white px-8 py-4 rounded hover:bg-red-700 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default IndustriesPage 