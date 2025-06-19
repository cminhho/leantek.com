import { motion } from 'framer-motion'

const IndustryCard = ({ title, services, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
  >
    <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">{title}</h3>
    <ul className="space-y-2">
      {services.map((service, idx) => (
        <li key={idx} className="text-gray-600 hover:text-gray-900 transition-colors">
          {service}
        </li>
      ))}
    </ul>
  </motion.div>
)

const IndustriesPage = () => {
  const industries = [
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
      title: "Finance & Banking",
      services: [
        "Digital banking",
        "Online payment software",
        "Digital lending solutions",
        "Trading & investment platforms",
        "AML/KYC",
        "InsurTech"
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
      ]
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#1E1F25] text-white py-32">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold mb-6"
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
      </div>

      {/* Main Industries Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index}
              title={industry.title}
              services={industry.services}
              index={index}
            />
          ))}
        </div>

        {/* Additional Industries Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Domains</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {additionalIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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