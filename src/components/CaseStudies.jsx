import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CaseStudies = () => {
  const cases = [
    {
      image: "https://images.ctfassets.net/lzny33ho1g45/4vXtHsD8OwspfhedAGOG6k/efb7a2b28a29f5f4023829a56ab04071/best-erp-software-03-sap.webp?w=1400&fm=avif",
      title: "CTIVN ERP Implementation: 60% Efficiency Improvement",
      link: "/cases/ctivn-erp-implementation-services",
      tags: ["ERP", "Digital Transformation", "Process Optimization", "Integration"]
    },
    {
      image: "https://peoplemanagingpeople.com/wp-content/cache/peoplemanagingpeople.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-068-083-pub-bamboohr-screenshot-1712252279.png",
      title: "Enterprise HR Management System",
      link: "/cases/hrm-system", 
      tags: ["HRM", "Employee Management", "Automation", "Analytics"]
    },
    {
      image: "https://toggl.com/blog/wp-content/uploads/2022/11/gantt-pro-timeline.png",
      title: "Agile Project Management Platform",
      link: "/cases/project-management-platform",
      tags: ["Project Management", "Agile", "Collaboration", "Productivity"]
    },
    {
      image: "https://hesfintech.com/wp-content/uploads/2024/04/merchant-banner-scaled.webp",
      title: "Merchant Lending Platform",
      link: "/cases/buy-now-pay-later",
      tags: ["Fintech", "BNPL", "Payment Processing", "Risk Management"]
    },
    {
      image: "https://images.ctfassets.net/lzny33ho1g45/1IVKp4IwKN2ytf80w8hWWD/e6958b74255768657722568c0c1c2c4f/Asana.png?w=1400&fm=avif",
      title: "Enterprise Work Management Suite",
      link: "/cases/enterprise-work-management",
      tags: ["Workflow Management", "Team Collaboration", "Automation", "Analytics"]
    },
    {
      image: "https://unable-actionable-car.media.strapiapp.com/image9_7d2f10edbc.png",
      title: "AI-Powered Enterprise Search Engine",
      link: "/cases/ai-enterprise-search",
      tags: ["AI", "Machine Learning", "Enterprise Search", "Data Analytics"]
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white flex flex-col justify-end h-full">
                    <div>
                      <div className="flex flex-wrap gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {caseItem.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-white/25 px-2 py-1 rounded-full backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-normal leading-tight text-shadow-lg mb-2">{caseItem.title}</h3>
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