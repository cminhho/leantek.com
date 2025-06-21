import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CaseStudies = () => {
  const cases = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      title: "CTIVN ERP: 16% Boost in Digital Sales",
      link: "/cases/ctivn-erp-implementation-services",
      tags: ["ERP", "CRM", "AI", "Digital Transformation"]
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
      title: "CICC HR Management System",
      link: "/cases/hrm-system",
      tags: ["HRM", "SaaS", "Employee Experience"]
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
      title: "CICC Project Management System",
      link: "/cases/merchant-cash-advance",
      tags: ["Fintech", "Lending", "Risk Analysis"]
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80",
      title: "Merchant Lending",
      link: "/cases/business-lending",
      tags: ["Fintech", "B2B", "Automation"]
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
      title: "Agile Project Management",
      link: "/cases/lean-work-management",
      tags: ["Productivity", "Collaboration", "Agile"]
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      title: "AI-Powered Enterprise Search",
      link: "/cases/lean-search-ai",
      tags: ["AI", "Enterprise Search", "NLP"]
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-0">Case studies</h2>
          <Link 
            to="/cases" 
            className="text-black text-sm sm:text-base lg:text-lg border-b border-black hover:border-transparent transition-colors"
          >
            All cases
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((caseItem, index) => (
            <motion.div 
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={caseItem.link}>
                <div className="aspect-w-4 aspect-h-4 overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-normal leading-tight">{caseItem.title}</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {caseItem.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/25 px-2 py-1 rounded-full backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies