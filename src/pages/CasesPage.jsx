import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'

const CaseStudyCard = ({ title, category, image, description, client, industry, technologies, challenge, solution, results, link, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative overflow-hidden">
        {/* Placeholder for image - in production, use actual image */}
        <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">{image}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-primary text-sm font-medium mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <span className="text-gray-500 text-sm">Client:</span>
            <p className="font-medium">{client}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Industry:</span>
            <p className="font-medium">{industry}</p>
          </div>
        </div>
        
        <h4 className="font-bold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span key={i} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <Link to={link} className="text-primary font-medium hover:underline inline-flex items-center">
          View Case Study
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

const CasesPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeTab, setActiveTab] = useState('Industry')
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  const caseStudies = [
    {
      title: "Gym membership app development & improvement",
      category: "Healthcare",
      industry: "Sport & lifestyle",
      solution: "Mobile Development",  
      technology: "React Native",
      service: "Development",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
      tags: ["Mobile", "Fitness", "UX/UI", "Development"],
      link: "/cases/gym-app"
    },
    {
      title: "ECG monitor integration",
      category: "Healthcare",
      industry: "Healthcare",
      solution: "IoT Solutions",
      technology: "Python",
      service: "Integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80",
      tags: ["Healthcare", "IoT", "Integration", "Medical"],
      link: "/cases/ecg-monitor"
    },
    {
      title: "Multispace virtual office development",
      category: "Business",
      industry: "Business",
      solution: "Custom Software",
      technology: "React",
      service: "Development",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      tags: ["Virtual Reality", "Business", "Collaboration", "Development"],
      link: "/cases/virtual-office"
    },
    {
      title: "Data aggregation and verification platform",
      category: "Data",
      industry: "Information technology",
      solution: "Data Analytics",
      technology: "Python",
      service: "Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      tags: ["Data Analytics", "Platform", "Verification", "Big Data"],
      link: "/cases/data-platform"
    },
    {
      title: "Energy production monitoring & maintenance solutions API-level energy audit",
      category: "Energy",
      industry: "Energy",
      solution: "IoT Solutions",
      technology: "Node.js",
      service: "Monitoring",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80",
      tags: ["Energy", "IoT", "Monitoring", "API"],
      link: "/cases/energy-monitoring"
    },
    {
      title: "QR-code payment app",
      category: "Fintech",
      industry: "FinTech",
      solution: "Mobile Development",
      technology: "Flutter",
      service: "Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
      tags: ["Fintech", "Mobile", "Payment", "QR Code"],
      link: "/cases/qr-payment"
    },
    {
      title: "E-commerce platform modernization",
      category: "Retail",
      industry: "eCommerce",
      solution: "Web Development",
      technology: "React",
      service: "Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      tags: ["E-commerce", "Web", "Modernization", "React"],
      link: "/cases/ecommerce-platform"
    },
    {
      title: "Banking mobile app security enhancement",
      category: "Banking",
      industry: "Banking",
      solution: "Mobile Development",
      technology: "Swift",
      service: "Security Audit",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
      tags: ["Banking", "Security", "Mobile", "iOS"],
      link: "/cases/banking-security"
    },
    {
      title: "Agricultural IoT monitoring system",
      category: "Agriculture",
      industry: "Agriculture",
      solution: "IoT Solutions",
      technology: "Python",
      service: "Development",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80",
      tags: ["Agriculture", "IoT", "Monitoring", "Sensors"],
      link: "/cases/agri-iot"
    },
    {
      title: "Automotive fleet management system",
      category: "Automotive",
      industry: "Automotive",
      solution: "Enterprise Solutions",
      technology: "Java",
      service: "Development",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
      tags: ["Automotive", "Fleet", "Management", "Enterprise"],
      link: "/cases/fleet-management"
    },
    {
      title: "Educational platform with AI tutoring",
      category: "Education",
      industry: "Education",
      solution: "AI & Machine Learning",
      technology: "Python",
      service: "Development",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      tags: ["Education", "AI", "Learning", "Platform"],
      link: "/cases/edu-ai"
    },
    {
      title: "Restaurant ordering and delivery system",
      category: "HoReCa",
      industry: "HoReCa",
      solution: "Web Development",
      technology: "Vue.js",
      service: "Development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      tags: ["Restaurant", "Ordering", "Delivery", "Web"],
      link: "/cases/restaurant-system"
    },
    {
      title: "Supply chain transparency blockchain",
      category: "Logistics",
      industry: "Supply chain",
      solution: "Blockchain",
      technology: "Node.js",
      service: "Development",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      tags: ["Supply Chain", "Blockchain", "Transparency", "Logistics"],
      link: "/cases/supply-blockchain"
    },
    {
      title: "HR recruitment automation platform",
      category: "HR",
      industry: "HR & recruiting",
      solution: "AI & Machine Learning",
      technology: "Python",
      service: "Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      tags: ["HR", "Recruitment", "Automation", "AI"],
      link: "/cases/hr-automation"
    },
    {
      title: "Real estate property management app",
      category: "Real Estate",
      industry: "Real Estate",
      solution: "Mobile Development",
      technology: "React Native",
      service: "Development",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      tags: ["Real Estate", "Property", "Management", "Mobile"],
      link: "/cases/property-management"
    },
    {
      title: "Manufacturing quality control system",
      category: "Manufacturing",
      industry: "Manufacturing",
      solution: "IoT Solutions",
      technology: "C#",
      service: "Development",
      image: "https://images.unsplash.com/photo-1565515636369-cb6a73d4ca4a?auto=format&fit=crop&q=80",
      tags: ["Manufacturing", "Quality Control", "IoT", "Industrial"],
      link: "/cases/quality-control"
    },
    {
      title: "Telecom network optimization tool",
      category: "Telecom",
      industry: "Telecom",
      solution: "Data Analytics",
      technology: "Python",
      service: "Optimization",
      image: "https://images.unsplash.com/photo-1558618644-fcd25c85cd64?auto=format&fit=crop&q=80",
      tags: ["Telecom", "Network", "Optimization", "Analytics"],
      link: "/cases/telecom-optimization"
    },
    {
      title: "Insurance claims processing automation",
      category: "Insurance",
      industry: "Insurance",
      solution: "AI & Machine Learning",
      technology: "Java",
      service: "Development",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      tags: ["Insurance", "Claims", "Automation", "Processing"],
      link: "/cases/insurance-claims"
    }
  ]

  const filterTabs = ['Industry', 'Solution', 'Technology', 'Service']

  const industryFilters = [
    'All', 'Agriculture', 'Automotive', 'Banking', 'Business', 'Construction', 'Ecology', 'eCommerce', 'Education', 'Energy', 'Enterprise', 'Entertainment', 'ESG',
    'Fashion', 'FinTech', 'Gaming', 'Government', 'Healthcare', 'HoReCa', 'HR & recruiting', 'Information technology', 'Insurance', 'Investment', 'Legal',
    'Logistics', 'Manufacturing', 'Marketing', 'Media', 'Oil & gas', 'Pharma', 'Public services', 'Real Estate', 'Retail', 'Robotics', 'Security', 'Sport & lifestyle',
    'Supply chain', 'Sustainability', 'Telecom', 'Transportation', 'Travel'
  ]

  const solutionFilters = [
    'All', 'Web Development', 'Mobile Development', 'Cloud Solutions', 'AI & Machine Learning', 'Data Analytics', 'IoT Solutions', 'Blockchain', 'DevOps', 'QA Testing',
    'UI/UX Design', 'Consulting', 'Digital Transformation', 'API Integration', 'Custom Software', 'Enterprise Solutions'
  ]

  const technologyFilters = [
    'All', 'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java', 'C#', '.NET', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Flutter', 'React Native',
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch'
  ]

  const serviceFilters = [
    'All', 'Consulting', 'Development', 'Design', 'Testing', 'Maintenance', 'Support', 'Training', 'Migration', 'Integration', 'Optimization', 'Security Audit'
  ]

  const getCurrentFilters = () => {
    switch(activeTab) {
      case 'Industry': return industryFilters
      case 'Solution': return solutionFilters
      case 'Technology': return technologyFilters
      case 'Service': return serviceFilters
      default: return industryFilters
    }
  }

  const getFilteredCases = () => {
    let filtered = caseStudies

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(caseStudy => 
        caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        caseStudy.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Apply tab-specific filter
    if (activeFilter !== 'All') {
      filtered = filtered.filter(caseStudy => {
        switch(activeTab) {
          case 'Industry': return caseStudy.industry === activeFilter
          case 'Solution': return caseStudy.solution === activeFilter
          case 'Technology': return caseStudy.technology === activeFilter
          case 'Service': return caseStudy.service === activeFilter
          default: return true
        }
      })
    }

    return filtered
  }

  const filteredCases = getFilteredCases()
  const visibleCases = filteredCases.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCases.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6)
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Case Studies - Leantek2'
  }, [])

  useEffect(() => {
    // Reset visible count when filters or search changes
    setVisibleCount(6)
  }, [activeFilter, activeTab, searchTerm])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          
          <motion.h1 
              className="text-6xl lg:text-7xl font-light text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Case studies
            </motion.h1>
          <motion.hr 
              className="w-24 h-1 bg-red-500 mb-8 border-0"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <motion.div 
            className="max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search Case studies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-red-500 focus:outline-none text-gray-700 placeholder-gray-500"
              />
              <svg className="absolute right-3 top-3 w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            className="border-b border-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex w-full">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    setActiveFilter('All')
                  }}
                  className={`flex-1 py-4 px-4 border-b-2 font-medium text-sm transition-all duration-300 text-center ${
                    activeTab === tab
                      ? 'border-red-500 text-red-600 bg-red-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Filter Buttons Grid */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            key={activeTab} // Re-animate when tab changes
          >
            <div className="flex flex-wrap gap-3">
              {getCurrentFilters().map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm border transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-red-500 text-white border-red-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div 
            className="text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {filteredCases.length} project{filteredCases.length !== 1 ? 's' : ''} {filteredCases.length === 1 ? 'was' : 'were'} found
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCases.map((caseStudy, index) => (
              <motion.div 
                key={index}
                className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={caseStudy.link}>
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                      {caseStudy.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 group-hover:text-black transition-colors">
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

export default CasesPage