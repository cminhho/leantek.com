import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactForm'
import TableOfContentsNav from '../../components/TableOfContentsNav'

const ERPPage = () => {
  // Video URLs
  const cubeVideo1Url = `${import.meta.env.BASE_URL}videos/cube1.webm`
  const cubeVideo2Url = `${import.meta.env.BASE_URL}videos/cube2.webm`
  const cubeVideo3Url = `${import.meta.env.BASE_URL}videos/cube3.webm`
  const [scrolled, setScrolled] = useState(false)
  const [activeIndustryTab, setActiveIndustryTab] = useState('Manufacturing')
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0)

  const [expandedFAQ, setExpandedFAQ] = useState({})
  const [expandedModules, setExpandedModules] = useState({})

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

    // Initialize tab scroll state
    setTimeout(() => {
      const container = document.getElementById('tabs-container')
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
      }
    }, 100)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Table of Contents sections
  const tocSections = [
    { id: "hero", title: "ERP Software Development" },
    { id: "services", title: "Our ERP Services" },
    { id: "modules", title: "Custom ERP Modules" },
    { id: "industries", title: "Industry Solutions" },
    { id: "roadmap", title: "Implementation Roadmap" },
    { id: "benefits", title: "ERP Benefits" },
    { id: "cooperation", title: "Cooperation Models" },
    { id: "success-stories", title: "Customer Success Stories" },
    { id: "faq", title: "FAQ" },
    { id: "contact", title: "Contact Us" }
  ]

  const leanErpModules = [
    {
      module: "Quotation Management",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Streamline your quotation process with barcode-based management and automated approval workflows.",
      features: [
        "Manage quotations by barcode ID for quick information retrieval",
        "Flexible and customizable form design for each customer segment",
        "Detailed cost analysis for each operation/processing stage",
        "Quotation duplication feature to optimize workflow",
        "Automated approval process with timely email notifications",
        "Intuitive dashboard displaying quotation performance statistics"
      ]
    },
    {
      module: "Contract Management",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive contract management with intelligent templates and automated milestone tracking.",
      features: [
        "Smart contract management system with integrated barcode IDs",
        "Diverse contract template library: domestic business, on-spot export, direct export",
        "Specialized contract templates for outsourcing: domestic, transitional, on-spot",
        "Revenue analysis by customer/order/product",
        "Integrated management of contract-related documents",
        "Smart alerts for important milestones"
      ]
    },
    {
      module: "Order Management",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Centralized order tracking with real-time status updates and automated workflow synchronization.",
      features: [
        "Inherits information from quotations and contracts, minimizing redundant data entry",
        "Intuitive Lean interface with centralized information, managed by barcode ID",
        "Track orders by status: new, in production, quality check, completed",
        "Multi-dimensional order statistics and analysis: by customer, product, time",
        "Synchronizes status with production and quality control stages",
        "Automatic alerts for delayed orders"
      ]
    },
    {
      module: "Production Planning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Intelligent production planning with real-time capacity analysis and automated resource allocation.",
      features: [
        "Central dashboard displaying overview of orders, progress, and status",
        "Automatically syncs information from orders, eliminating data re-entry",
        "Production planning based on real data: machine capacity, personnel, productivity",
        "Smart allocation between in-house production and outsourcing",
        "Flexible plan adjustments based on real-time changes",
        "Integrated management of detailed production processes"
      ]
    },
    {
      module: "Purchase Management",
      image: "https://images.unsplash.com/photo-1556742049-0a52b6ce8dc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive procurement management with supplier evaluation and cost tracking capabilities.",
      features: [
        "Standardized input data, reusing supplier and product information",
        "Manage diverse purchasing purposes: production materials, outsourcing, fuel, tools & equipment",
        "Lean, intuitive interface with barcode technology",
        "Track supplier delivery progress",
        "Evaluate suppliers based on multiple criteria",
        "Detailed reports on purchasing costs by category"
      ]
    },
    {
      module: "Production Management",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Digital Kanban-based production control with real-time tracking and productivity analysis.",
      features: [
        "Digital Kanban board for visual control of production process",
        "Workshop planning management combined with machine lists and capacity",
        "Detailed job tracking with machine ID, employee ID, process ID",
        "Real-time updates on progress and productivity",
        "Productivity analysis by machine, employee, and stage",
        "Timely alerts for issues arising in production"
      ]
    },
    {
      module: "Quality Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "PDCA-based quality control system with automated inspection workflows and root cause analysis.",
      features: [
        "Built on PDCA cycle: Plan, Do, Check, Act",
        "Lean interface with intuitive colors for alerts and statuses",
        "Manage technical specifications from drawings, automatic inspection standard updates",
        "Track inspection tools and assign inspection responsibilities",
        "Smart inspection forms with traceable barcode IDs",
        "Quality data analysis, root cause identification, and improvement solutions"
      ]
    },
    {
      module: "Outsourcing Management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Integrated outsourcing platform with real-time partner collaboration and performance tracking.",
      features: [
        "Synchronized platform connecting with outsourcing partners",
        "Two-way real-time alert system",
        "Detailed tracking of progress and outsourcing costs per partner",
        "Evaluate quality of outsourcing services",
        "Manage payments and liabilities with outsourcing partners",
        "Report on outsourcing efficiency and comparison with in-house production"
      ]
    },
    {
      module: "Inventory Management",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Real-time warehouse management with barcode tracking and intelligent inventory optimization.",
      features: [
        "Real-time warehouse management with barcode technology for all import/export activities",
        "Supports various warehouse types: raw materials, finished goods, tools & equipment, fuel",
        "Automatically calculates inventory levels and alerts when thresholds are exceeded",
        "Integrated warehouse location system for easy search and management",
        "Smart inventory counting with mobile devices",
        "Detailed inventory reports by item code, item type, and value"
      ]
    },
    {
      module: "Logistics & Delivery Management",
      image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "End-to-end logistics management with automated documentation and delivery tracking.",
      features: [
        "Create and print VAT invoices and delivery notes according to regulations",
        "Manage shipping information: carrier, time, cost",
        "Track delivery status: in transit, delivered, received",
        "Customizable print templates based on customer requirements",
        "Statistics on delivery costs by region and customer",
        "Integrated with Order and Inventory modules"
      ]
    },
    {
      module: "Maintenance & Calibration Management",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "TPM-based maintenance system with predictive analytics and OEE performance tracking.",
      features: [
        "Built on TPM (Total Productive Maintenance) foundation",
        "5S-AM autonomous maintenance system helps employees proactively maintain equipment",
        "Automated periodic maintenance planning with smart reminders",
        "Spare parts inventory management and replacement demand forecasting",
        "Track maintenance costs for each piece of equipment/machinery",
        "OEE (Overall Equipment Effectiveness) performance analysis"
      ]
    },
    {
      module: "Human Resource Management",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive HR management with productivity tracking and skills development.",
      features: [
        "Smart employee card system with integrated barcode ID",
        "Real-time tracking of each employee's labor productivity",
        "Integrated with Production module to evaluate work efficiency",
        "System access authorization based on job position",
        "Employee skill and training management",
        "Record and evaluate job quality"
      ]
    },
    {
      module: "Reporting & Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Advanced business intelligence platform with real-time KPIs and predictive analytics.",
      features: [
        "Business Intelligence platform integrated with all modules",
        "Intuitive dashboard displaying real-time KPIs and targets",
        "Multi-dimensional reports: by product, customer, supplier, time",
        "Trend analysis and business forecasting tools",
        "Smart alert system when KPIs do not meet targets",
        "Supports decision-making based on real data from all processes"
      ]
    }
  ];

  const erpDevelopmentServices = [
    {
      title: "Custom ERP software development",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
          <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1" />
          <circle cx="6" cy="9" r="1" fill="currentColor" />
          <circle cx="6" cy="13" r="1" fill="currentColor" />
          <circle cx="6" cy="17" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "ERP implementation services",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1" />
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1" />
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "ERP customization",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" stroke="currentColor" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "ERP migration",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 16.5v2A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-2" stroke="currentColor" strokeWidth="1" />
          <path d="M8 12l4-4 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M3 8.5v-2A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v2" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "ERP consulting",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1" />
          <path d="M13 8H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <path d="M16 12H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="17" cy="8" r="2" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      title: "ERP maintenance",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21v-7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7" stroke="currentColor" strokeWidth="1" />
          <path d="M6 10V6a6 6 0 1 1 12 0v4" stroke="currentColor" strokeWidth="1" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <path d="M12 17v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const industryTabs = [
    'Manufacturing',
    'Construction'
  ];

  const industryContent = {
    'Manufacturing': {
      title: 'ERP software for manufacturing',
      description: 'Manufacturing ERP systems streamline production processes, inventory management, and supply chain operations. They provide real-time visibility into manufacturing workflows and help optimize resource allocation.',
      benefits: [
        'Production planning optimization',
        'Quality control management',
        'Supply chain integration'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    'Construction': {
      title: 'ERP software for construction',
      description: 'Construction ERP solutions manage project lifecycles, resource allocation, and financial tracking. They help coordinate complex projects with multiple stakeholders and ensure timely delivery.',
      benefits: [
        'Project management integration',
        'Resource scheduling',
        'Cost tracking and budgeting'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'
    }
  };

  const customerSuccessStories = [
    {
      company: "CTIVN",
      logo: "https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/zALzHq0F3pXhTKrtcS45LgWihPetZqjp_1729158652____b4fa81e1ae3536791182cd1df8339d6b.jpeg",
      title: "CTIVN - Digital business operations with LeanERP solutions and services",
      description: "Learn how CTIVN adopted digitalisation and LeanERP technology to become a data-driven organization that is ready for the future.",
      link: "/cases/ctivn-erp-implementation-services",
      linkText: "Watch the customer story"
    },
    {
      company: "Công ty TNHH Cơ Khí Chính Xác Việt Nhật Tân",
      logo: "https://vietnhattan.com.vn/thumbs/280x130x2/upload/photo/logo-9179.png",
      title: "VietNhatTan - LeanERP implementation",
      description: "Explore Viet Nhat Tan's journey to becoming a true global beauty company, fuelled by the power of SAP solutions.",
      link: "#",
      linkText: "Watch the customer story"
    }
  ];

  const cooperationModels = [
    {
      title: "Leverage ERP expertise",
      description: "Need extra hands for your ERP project? Our skilled engineers can bring expertise in custom modules, UX/UI, platform integration, and unique features. With our team, you'll overcome roadblocks and keep your project on track.",
      buttonText: "Request staff augmentation",
      buttonLink: "/contact",
              video: cubeVideo1Url
    },
    {
      title: "Hire a dedicated team",
      description: "Prefer a fully dedicated team? Our ERP developers, led by an experienced project manager, will smoothly blend with your current team. We'll ramp up functionality, sharpen processes, and bring fresh ideas and solutions.",
      buttonText: "Request a dedicated team",
      buttonLink: "/contact",
              video: cubeVideo2Url
    },
    {
      title: "Let us handle your ERP project",
      description: "Looking to hand over the entire ERP project? With full-spectrum custom ERP software development services, our team will take care of every detail, bringing you a custom ERP solution that's flexible, budget-friendly, and easy to use.",
      buttonText: "Request project outsourcing",
      buttonLink: "/contact",
              video: cubeVideo3Url
    }
  ];

  const erpImplementationRoadmap = [
    {
      number: "1",
      title: "Analysis",
      items: [
        "Identifying operational inefficiencies",
        "Auditing systems and IT infrastructure",
        "Defining ERP requirements"
      ]
    },
    {
      number: "2", 
      title: "Design",
      items: [
        "Choosing ERP type",
        "Defining architecture and configurations",
        "Planning customizations"
      ]
    },
    {
      number: "3",
      title: "Planning", 
      items: [
        "Developing an implementation and migration plan",
        "Creating a change management strategy",
        "Outlining training and adoption processes"
      ]
    },
    {
      number: "4",
      title: "Customization/development",
      items: [
        "Configuring or customizing the ERP system",
        "Integrating ERP with existing systems",
        "Testing during developments"
      ]
    },
    {
      number: "5",
      title: "Migrating data",
      items: [
        "Cleansing and mapping data",
        "Transferring data in stages", 
        "Validating data for accuracy and completeness"
      ]
    },
    {
      number: "6",
      title: "Testing",
      items: [
        "Performing functional and performance tests",
        "Conducting user acceptance testing",
        "Fixing issues before deployment"
      ]
    },
    {
      number: "7",
      title: "Deployment",
      items: [
        "Launching the ERP system",
        "Setting up user roles and permissions", 
        "Providing training and user guides"
      ]
    },
    {
      number: "8",
      title: "Support & maintenance",
      items: [
        "Establishing a support team",
        "Monitoring performance and addressing issues",
        "Planning updates and feature expansions"
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const toggleModuleFeatures = (index) => {
    setExpandedModules(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: "Can LeanTek offer custom ERP integration with existing systems?",
      answer: "Yes, absolutely. Our team specializes in seamless ERP integration with existing business systems. We analyze your current infrastructure, identify integration points, and develop custom connectors and APIs to ensure smooth data flow between your ERP and existing applications like CRM, accounting software, e-commerce platforms, and third-party tools."
    },
    {
      question: "What to look out for in customized ERP solutions?",
      answer: "When evaluating customized ERP solutions, focus on scalability, user-friendly interface, robust security features, comprehensive reporting capabilities, and mobile accessibility. Also consider the vendor's track record, ongoing support quality, implementation timeline, and total cost of ownership including customization, training, and maintenance."
    },
    {
      question: "Custom ERP software vs. pre-packaged ERP solutions: what to choose?",
      answer: "The choice depends on your specific needs. Custom ERP offers perfect alignment with unique business processes, unlimited scalability, and competitive advantage but requires higher initial investment and longer development time. Pre-packaged solutions are faster to implement and cost-effective but may require process adaptation. We help you evaluate both options based on your business requirements, budget, and timeline."
    },
    {
      question: "How does LeanTek ensure the security of the ERP systems?",
      answer: "We implement enterprise-grade security measures including data encryption (at rest and in transit), multi-factor authentication, role-based access controls, regular security audits, and compliance with industry standards like ISO 27001, GDPR, and SOC 2. Our development follows secure coding practices, and we conduct penetration testing before deployment to identify and address potential vulnerabilities."
    },
    {
      question: "Can LeanTek provide support and maintenance after deployment?",
      answer: "Yes, we offer comprehensive post-deployment support including 24/7 technical support, regular system updates, performance monitoring, bug fixes, user training, and system optimization. Our maintenance packages are tailored to your needs and include preventive maintenance, backup management, and continuous improvement recommendations to ensure your ERP system operates at peak performance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Table of Contents Navigation */}
      <TableOfContentsNav 
        sections={tocSections}
        title="ERP Development Guide"
      />

      {/* Hero Section */}
      <section id="hero" className="relative bg-gray-900 text-white py-24 lg:py-24">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl lg:text-4xl xl:text-5xl font-light text-white mb-6"
              >
                Custom ERP software development services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm lg:text-base mb-8 text-gray-400 leading-relaxed"
              >
                For companies in need of automation and transparency, we offer enterprise resource planning (ERP) services and solutions designed to enhance inventory turnover, minimize production delays, and amplify operational outcomes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 hover:bg-red-700 transition-all hover:scale-105 shadow-lg font-medium"
                >
                  Schedule a call
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://content.cdn.sap.com/is/image/sap/304087-photo-with-bento-modals-inside:XL?wid=690&hei=450&fit=stretch,1&fmt=png-alpha&resMode=sharp2"
                  alt="ERP Software Development"
                  className="w-full h-auto shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ERP Software Development Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="b-12 lg:mb-20"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">
              ERP software development services we offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpDevelopmentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 p-4 lg:p-4 flex flex-row sm:flex-col items-center sm:text-center text-left group hover:bg-gray-100 transition-colors gap-4 sm:gap-0"
              >
                <div className="text-gray-800 mb-0 sm:mb-6 group-hover:text-red-600 transition-colors flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-sm sm:text-lg font-light text-gray-900 flex-1">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Lean ERP Modules Section */}
      <section id="modules" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
              Custom ERP modules we build
            </h2>
          </motion.div>

          {/* ERP Modules Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leanErpModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-b border-gray-200 pb-8"
              >
                {/* Module Content */}
                <div className="">
                  {/* Title */}
                  <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-3">
                    {module.module}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4">
                    {module.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-light text-gray-900 mb-3">Key Features:</h4>
                    
                    {/* Always show first 3 features */}
                    {module.features.slice(0, 3).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs leading-relaxed">
                          {feature.split(':')[0]}
                        </span>
                      </div>
                    ))}
                    
                    {/* Expandable additional features */}
                    {expandedModules[index] && module.features.slice(3).map((feature, fIndex) => (
                      <motion.div
                        key={fIndex + 3}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs leading-relaxed">
                          {feature.split(':')[0]}
                        </span>
                      </motion.div>
                    ))}
                    
                    {/* Toggle button for more features */}
                    {module.features.length > 3 && (
                      <div className="pt-2">
                        <button
                          onClick={() => toggleModuleFeatures(index)}
                          className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors flex items-center gap-1"
                        >
                          {expandedModules[index] ? (
                            <>
                              Show less
                              <svg className="w-3 h-3 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>more features</span>
                              <svg className="w-3 h-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Resource Planning Software Section */}
      <section id="industries" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Enterprise resource planning software for your company
            </h2>

            {/* Industry Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
              {industryTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndustryTab(tab)}
                  className={`px-4 py-3 text-sm font-medium transition-colors relative ${activeIndustryTab === tab
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Industry Content */}
          <motion.div
            key={activeIndustryTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div>
              <h3 className="text-base lg:text-2xl font-light text-gray-900 mb-6">
                {industryContent[activeIndustryTab].title}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600 mb-8 leading-relaxed">
                {industryContent[activeIndustryTab].description}
              </p>
              <ul className="space-y-4">
                {industryContent[activeIndustryTab].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-xs lg:text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-first">
              <div className="overflow-hidden">
                <img
                  src={industryContent[activeIndustryTab].image}
                  alt={industryContent[activeIndustryTab].title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our ERP Implementation Roadmap Section */}
      <section id="roadmap" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Our ERP implementation roadmap
            </h2>
          </motion.div>

          {/* Desktop Roadmap */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {erpImplementationRoadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-left"
                >
                  <div className="mb-4">
                    <div className="w-8 h-8 border-2 border-red-600 flex items-center justify-center mb-3">
                      <span className="text-red-600 font-medium text-sm">{phase.number}</span>
                    </div>
                    <h3 className="text-base lg:text-xl font-medium text-gray-900 leading-tight">{phase.title}</h3>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-xs lg:text-base w-1 h-1 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-xs lg:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Roadmap */}
          <div className="lg:hidden space-y-6">
            {erpImplementationRoadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-left"
              >
                <div className="mb-3">
                  <div className="w-8 h-8 border-2 border-red-600 flex items-center justify-center mb-3">
                    <span className="text-red-600 font-medium text-sm">{phase.number}</span>
                  </div>
                  <h3 className="text-base lg:text-xl font-medium text-gray-900 leading-tight">{phase.title}</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-xs lg:text-base w-1 h-1 bg-red-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-xs lg:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of ERP Implementation Section */}
      <section id="benefits" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Benefits of ERP implementation
            </h2>
            <p className="text-xs lg:text-sm text-gray-600 leading-relaxed max-w-4xl">
              An ERP system packed with features can seriously level up your business. It gives you better data insights, boosts efficiency, and helps you make smarter decisions — all leading to faster growth.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Boosted productivity",
                description: "ERP systems keep your business running smoothly by syncing processes and automating those time-consuming repetitive tasks — so you can focus on big-picture goals."
              },
              {
                title: "Cost savings", 
                description: "With an ERP solution, you can clear up inefficiencies, cut down on errors, and smooth out workflows — cutting costs and ditching extra software licenses."
              },
              {
                title: "Better data management",
                description: "Thanks to an ERP, all your departments' data is in one spot — reliable and consistent. This way, your team can make better decisions without any guesswork."
              },
              {
                title: "Data visibility",
                description: "ERP gives you a clear view of your business with real-time metrics. Dive into transactions, contracts, product details, and more — all from one dashboard."
              },
              {
                title: "Data-driven decision making",
                description: "Looking to make better calls using your data? ERP tools pack in solid BI and analytics, so you can catch sales trends, keep an eye on workflows, and stay on top of KPIs."
              },
              {
                title: "Cross-team collaboration",
                description: "Break down silos and get your teams working together seamlessly with an ERP system. Plan projects, share real-time updates, and keep everyone aligned effortlessly."
              },
              {
                title: "Improved customer experience",
                description: "With CRM tools baked right into the ERP, you get a 360° view of customer interactions. Create personalized experiences that boost satisfaction and keep them coming back."
              },
              {
                title: "Guaranteed compliance",
                description: "By automating reporting, tracking changes, and keeping everything in one place, ERP helps you stay compliant with ISO, GDPR, HIPAA and more — dodging risks and fines."
              },
              {
                title: "Software scalability",
                description: "Need more features? Just plug in new modules to make sure your ERP grows right along with your business and stays on track with your growing goals."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-left"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <h3 className="text-base lg:text-xl font-medium text-gray-900 leading-tight">{benefit.title}</h3>
                </div>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Cooperation Model Section */}
      <section id="cooperation" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Choose your cooperation model
            </h2>
            <p className="text-xs lg:text-base text-gray-600 leading-relaxed max-w-4xl">
            At LeanTek, we focus on making ERP work for you. With our client-first approach and proven expertise, we make sure your ERP system runs just as it should, boosts operations, and fuels your business growth.
            </p>
          </motion.div>

          {/* Cooperation Models Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {cooperationModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-gray-400 overflow-hidden flex flex-col h-full group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Video Section */}
                <div className="relative h-32 lg:h-36 overflow-hidden flex items-center justify-center">
                  <video
                    src={model.video}
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
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-gray-800 leading-relaxed mb-8 flex-grow">
                    {model.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      to={model.buttonLink}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white hover:bg-red-700 transition-colors font-medium text-center text-xs lg:text-base group-hover:bg-red-700"
                    >
                      {model.buttonText}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Customer Success Stories Section */}
      <section id="success-stories" className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              See how customers are succeeding with our ERP applications
            </h2>
          </motion.div>

          {/* Customer Stories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {customerSuccessStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-400 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Company Logo */}
                <div className="mb-6 h-12 flex items-center">
                  <img
                    src={story.logo}
                    alt={`${story.company} logo`}
                    className="max-h-8 w-auto object-contain"
                  />
                </div>

                {/* Story Content */}
                <div className="mb-6">
                  <h3 className="text-base lg:text-xl font-medium text-gray-900 mb-4 leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-xs lg:text-base text-gray-600 leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="mt-auto">
                  <Link
                    to={story.link}
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-xs lg:text-base font-medium transition-colors"
                  >
                    {story.linkText}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/cases"
                className="inline-flex items-center px-6 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors font-medium rounded-sm"
              >
                View all customer stories
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900">
              FAQ
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ Questions */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border-b border-gray-200"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-base lg:text-base font-light text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-red-600 transition-transform duration-200 ${expandedFAQ[index] ? 'rotate-45' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </button>
                    {expandedFAQ[index] && (
                      <div className="px-6 pb-6">
                        <p className="text-xs lg:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action Side Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white border border-gray-200 p-8 text-center h-full flex flex-col justify-center min-h-[400px]"
              >
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-base lg:text-xl font-medium text-gray-900 mb-6">
                  Feel free to book a call and get all the answers you need.
                </h3>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
                >
                  Book a call
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="">
        <ContactForm />
      </section>
    </div>
  )
}

export default ERPPage 