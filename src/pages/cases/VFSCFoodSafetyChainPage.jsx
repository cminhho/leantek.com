import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TableOfContentsNav from '../../components/TableOfContentsNav'

const VFSCFoodSafetyChainPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Table of Contents sections
  const tocSections = [
    { id: "hero", title: "Project Overview" },
    { id: "challenge", title: "The Challenge" },
    { id: "solution", title: "Our Solution" },
    { id: "features", title: "Key Features" },
    { id: "results", title: "Results & Impact" },
    { id: "technologies", title: "Technologies Used" },
    { id: "cta", title: "Start Your Project" }
  ]

  // Hero Section Data
  const heroData = {
    tags: ["Smart Agriculture", "Food Safety", "Traceability"],
    title: "VFSC - Vietnam Food Safety Chain: Smart Agriculture Management 4.0",
    description: "LeanTek developed the Vietnam Food Safety Chain (VFSC) platform, a comprehensive smart agriculture management system that provides end-to-end traceability and quality control for Vietnam's agricultural supply chain. The platform integrates modern technology with traditional farming practices to ensure food safety, optimize production efficiency, and enable transparent supply chain management from farm to consumer.",
    stats: [
      { value: "100%", label: "Food Traceability Coverage" },
      { value: "40%", label: "Reduction in Farm Management Time" },
      { value: "30%", label: "Improvement in Production Efficiency" }
    ]
  }

  // Customer Section Data
  const customerData = {
    companyName: "Vietnam Food Safety Chain (VFSC)",
    website: "https://cicc.com.vn",
    description: [
      "Vietnam Food Safety Chain (VFSC) is a comprehensive digital platform designed to revolutionize Vietnam's agricultural sector through smart agriculture management and complete food traceability. The platform addresses the critical need for food safety assurance and supply chain transparency in Vietnam's diverse agricultural landscape.",
      "VFSC integrates advanced technology with traditional farming practices to create a complete ecosystem for agricultural management, from livestock breeding to crop cultivation, aquaculture, and organic farming. The platform serves farmers, agricultural cooperatives, food processors, and regulatory bodies across Vietnam.",
      "The system is designed to comply with international traceability standards while accommodating Vietnamese agricultural practices and regulatory requirements. VFSC represents a significant step forward in modernizing Vietnam's agricultural sector and ensuring food safety for domestic and export markets."
    ],
    projectDetails: {
      industry: "Smart Agriculture & Food Safety",
      companySize: "National Platform",
      region: "Vietnam",
      clientSince: "2023",
      website: "cicc.com.vn"
    }
  }

  // Challenge Section Data
  const challengeData = {
    title: "Need for Comprehensive Agricultural Traceability Solution",
    description: "Vietnam's agricultural sector faced significant challenges in food safety management, supply chain transparency, and compliance with international standards. The lack of integrated digital solutions hindered the ability to track products from farm to consumer, affecting both domestic food safety and export competitiveness.",
    challenges: [
      {
        title: "Fragmented Agricultural Supply Chain",
        description: "Vietnam's agricultural supply chain consisted of numerous small-scale farmers, cooperatives, and processors with limited digital integration. Manual record-keeping and paper-based documentation made it impossible to achieve comprehensive traceability and real-time visibility across the entire supply chain."
      },
      {
        title: "Food Safety Compliance Requirements",
        description: "Increasing domestic and international food safety standards required rigorous documentation, quality control processes, and certification management. Traditional methods couldn't provide the detailed traceability and compliance reporting needed for modern food safety regulations."
      },
      {
        title: "Complex Multi-Scale Farm Management",
        description: "Vietnamese agriculture involves diverse production methods including livestock breeding, crop cultivation, aquaculture, and organic farming. Each sector required specialized management tools while maintaining integration for comprehensive farm management and resource optimization."
      },
      {
        title: "Quality Control and Certification Integration",
        description: "Multiple certification bodies, testing laboratories, and regulatory agencies needed seamless integration for quality control processes. Manual coordination between these entities created delays, errors, and compliance gaps affecting product certification and market access."
      },
      {
        title: "Technology Adoption Barriers",
        description: "Traditional farming communities needed user-friendly digital solutions that could integrate with existing practices. The platform had to accommodate varying levels of technical expertise while providing advanced functionality for larger agricultural enterprises."
      },
      {
        title: "Data Management and Analytics",
        description: "Large-scale agricultural data from multiple sources required sophisticated data management, analysis, and reporting capabilities. The system needed to handle big data while providing actionable insights for farmers, cooperatives, and regulatory bodies."
      }
    ],
    conclusion: "These challenges required a comprehensive smart agriculture platform that could integrate all stakeholders in Vietnam's food supply chain while providing complete traceability, quality control, and compliance management capabilities."
  }

  // Platform Architecture Data
  const platformData = {
    title: "VFSC Platform Architecture",
    description: "Built on microservices architecture with cross-platform compatibility, advanced data management capabilities, and complete integration with Vietnam's agricultural ecosystem.",
    platforms: [
      {
        name: "Linux Server",
        description: "High-performance server running on Linux OS with scalable processing capabilities",
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-13.5 0V19.5a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-5.25" />
          </svg>
        ),
        color: "text-black"
      },
      {
        name: "Windows Server", 
        description: "Enterprise-integrated server running on Windows OS with business compatibility",
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3" />
          </svg>
        ),
        color: "text-red-600"
      },
      {
        name: "Android App",
        description: "User-friendly mobile application for Android with intuitive interface",
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        ),
        color: "text-gray-600"
      },
      {
        name: "iOS App",
        description: "Optimized mobile application for iOS with superior performance",
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
        ),
        color: "text-black"
      }
    ],
    architecture: {
      client: "Built on React, React Native and BootstrapUI. Provides user interfaces and connects to server through RestFULL APIs for seamless integration.",
      server: "Built using Microservice architecture including multiple microservices for optimal scalability and maintainability."
    }
  }

  // Core System Data
  const coreSystemData = {
    title: "VFSC CORE (CORE SERVER)",
    features: [
      {
        title: "DATA LAYERING",
        description: "Layered data management system with structured big data processing capabilities"
      },
      {
        title: "BIG DATA MANAGEMENT",
        description: "Structured big data management with large-scale data processing and analytics capabilities"
      },
      {
        title: "BLOCKCHAIN INTEGRATION",
        description: "Blockchain-oriented research to ensure security and transparency"
      },
      {
        title: "TIERED PERMISSIONS",
        description: "Tiered/compartmentalized permission system with detailed access management"
      },
      {
        title: "EXPERT KNOWLEDGE",
        description: "Expert knowledge integration by SOP, SOW for decision support"
      },
      {
        title: "BIG DATA EXTRACTION",
        description: "Big data extraction for VIP users in KPI and chart formats"
      },
      {
        title: "STANDARDS MANAGEMENT",
        description: "Standards management and authentication of agricultural products according to standards"
      }
    ]
  }

  // Farm Management Modules Data
  const farmModulesData = {
    title: "Clients - Smart Farm Management System",
    subtitle: "CONTROL ALL YOUR AGRICULTURAL PRODUCTION ACTIVITIES BY BREEDING/CULTIVATION CYCLES CORRESPONDING TO PENS/PONDS/PLOTS",
    modules: [
      {
        id: 'farm-info',
        title: 'Farm Information',
        description: 'Manage basic information and farm account setup',
        features: [
          'Basic account information',
          'User registration and authentication',
          'General farm details',
          'Farm account and permissions',
          'Password reset and security',
          'Begin setting up your account'
        ]
      },
      {
        id: 'resource-mgmt',
        title: 'Resource Management',
        description: 'Manage all farm resources including personnel, machinery and inventory',
        features: [
          'Personnel management and work assignment',
          'Machinery and equipment management',
          'Pens/Ponds/Plots - Production location management',
          'Inventory – How does it work?',
          'Inventory – Warehouse management',
          'Inventory – Add new warehouse',
          'Product category management',
          'Documents and guidelines'
        ]
      },
      {
        id: 'production-mgmt',
        title: 'Production Cycle Management',
        description: 'Manage production cycles and track each breeding/cultivation batch',
        features: [
          'Add new breeding/cultivation batch',
          'Link pens/ponds/plots with production batch',
          'Add breeds and manage breed quality',
          'Create seasons and planning',
          'Pen/pond/plot profiles (Work implementation/breeding cycles)',
          'Work allocation by pen/pond/plot'
        ]
      },
      {
        id: 'financial-mgmt',
        title: 'Financial Management',
        description: 'Comprehensive farm financial tracking and management',
        features: [
          'Financial management – General',
          'Sales and revenue tracking',
          'Production cost tracking',
          'Customers and traders',
          'Assets & depreciation',
          'Loans and financing',
          'Transactions and payments'
        ]
      },
      {
        id: 'analytics',
        title: 'Performance Analytics',
        description: 'Production efficiency analysis and KPIs to optimize operations',
        features: [
          'Comprehensive performance dashboard',
          'Financial & KPI – Summary dashboard',
          'Pen/pond/plot efficiency analysis',
          'Detailed reports',
          'Real-time monitoring dashboard',
          'Trend analysis and forecasting'
        ]
      },
      {
        id: 'traceability',
        title: 'Traceability Chain',
        description: 'Vietnamese agricultural product authentication with complete origin traceability',
        features: [
          'Product origin traceability',
          'Detailed origin traceability reports',
          'Automatic connection to LIMS chain',
          'E-standard breeding chain',
          'Online supervision by certification organizations',
          'Certification with state management agencies',
          'True essence of traceability according to international standards'
        ]
      }
    ]
  }

  // Solution Section Data
  const solutionData = {
    title: "Comprehensive Smart Agriculture Platform with Complete Traceability",
    erpImageUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }

  // Technologies Data
  const technologiesData = {
    platform: ["Smart Agriculture Platform", "Big Data Architecture", "Blockchain Integration"],
    backend: ["Microservices Architecture", "API Gateway", "Data Processing Engine"],
    frontend: ["Cross-platform Mobile Apps", "Web Dashboard", "Responsive UI"],
    database: ["Big Data Management", "Real-time Analytics", "Data Warehouse"]
  }

  // Implementation Process Data
  const implementationProcess = [
    {
      step: 1,
      title: "Agricultural Ecosystem Analysis & Requirements Gathering",
      description: "Conducted comprehensive analysis of Vietnam's agricultural supply chain, stakeholder mapping, and regulatory requirements. Analyzed farming practices across livestock, crop cultivation, aquaculture, and organic farming sectors. Documented integration requirements with certification bodies, testing laboratories, and government agencies.",
      duration: "6 weeks"
    },
    {
      step: 2,
      title: "Platform Architecture & System Design",
      description: "Designed scalable microservices architecture for the smart agriculture platform, including big data management systems, blockchain integration specifications, and multi-tenant database schema. Created comprehensive API specifications for external system integration and mobile application interfaces.",
      duration: "8 weeks"
    },
    {
      step: 3,
      title: "Core Platform Development & Farm Management Modules",
      description: "Developed the foundational smart agriculture platform with core farm management modules including production cycle management, resource allocation, inventory control, and quality management. Built specialized algorithms for agricultural planning and traceability tracking.",
      duration: "24 weeks"
    },
    {
      step: 4,
      title: "Traceability System & External Integration",
      description: "Implemented comprehensive traceability system with LIMS integration, certification body connectivity, and regulatory compliance modules. Developed blockchain-based security features and automated quality control workflows with real-time monitoring capabilities.",
      duration: "12 weeks"
    },
    {
      step: 5,
      title: "Testing, Quality Assurance & Pilot Deployment",
      description: "Conducted extensive system testing including load testing, security testing, and compliance verification. Executed pilot deployment with selected farms and cooperatives, performed user acceptance testing, and optimized system performance based on real-world usage.",
      duration: "8 weeks"
    },
    {
      step: 6,
      title: "National Rollout & User Training",
      description: "Executed phased national rollout across multiple provinces, conducted comprehensive training programs for farmers, cooperatives, and regulatory bodies. Established ongoing maintenance procedures, documentation, and 24/7 support infrastructure.",
      duration: "12 weeks + ongoing"
    }
  ]

  // Team Structure Data
  const teamStructure = [
    { count: 1, role: "Project Manager" },
    { count: 2, role: "Solution Architects" },
    { count: 1, role: "Agricultural Domain Expert" },
    { count: 6, role: "Senior Backend Developers" },
    { count: 2, role: "Frontend Developers" },
    { count: 1, role: "Mobile App Developer" },
    { count: 1, role: "QA Engineer" },
    { count: 1, role: "DevOps Engineer" }
  ]

  // Results Data
  const resultsData = {
    metrics: [
      { value: "100%", label: "Traceability Coverage - True Essence of Traceability" },
      { value: "Multi-Chain", label: "Value Chain Integration - Livestock, Crops, Aquaculture" },
      { value: "Cross-Platform", label: "Platform Compatibility - Linux, Windows, Android, iOS" },
      { value: "National", label: "Deployment Scale - Nationwide Implementation" }
    ],
    description: "VFSC - Vietnam Food Safety Chain has successfully created a complete smart agriculture ecosystem, integrating from farm to consumer with complete origin traceability capabilities and compliance with international standards.",
    operationalExcellence: [
      "Smart farm management by breeding/cultivation cycles",
      "Automatic integration with LIMS and E-standards",
      "Online supervision by certification organizations",
      "Tiered permissions with expert knowledge",
      "Big data extraction with KPI dashboards",
      "Blockchain integration for high security",
      "Vietnamese agricultural product authentication"
    ],
    businessGrowth: [
      "Design logic compatible with world traceability standards",
      "Compatible with professional associations/standard organizations",
      "Support for organic and standards under development",
      "Smart recording, reduced operational costs",
      "Optimized production, increased productivity and profits",
      "Connection with state management agencies when needed",
      "Enhanced export product quality"
    ],
    timeline: "2021 - Implementation"
  }

  // CTA Section Data
  const ctaData = {
    title: "Ready to Transform Your Agricultural Operations?",
    description: "Discover how LeanTek can help you build a comprehensive smart agriculture platform with complete traceability and modern management tools.",
    primaryButton: {
      text: "Start Your Project",
      href: "/contact"
    }
  }

  return (
    <div className="bg-white">
      {/* Table of Contents Navigation */}
      <TableOfContentsNav 
        sections={tocSections}
        title="VFSC Food Safety Chain"
      />

      {/* Hero Section */}
      <div id="hero" className="relative bg-[#1E1F25] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Smart Agriculture Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1E1F25]/80"></div>
        </div>
        
        <div className="relative container mx-auto py-20 mt-12">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {heroData.tags.map((tag, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 text-sm">{tag}</span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {heroData.title}
            </h1>
            
            <p className="text-sm mb-8 opacity-90">
              {heroData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {heroData.stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-6">Customer</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <a href={customerData.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-semibold">{customerData.companyName}</a> {customerData.description[0]}
                </p>
                <p className="mb-4">
                  {customerData.description[1]}
                </p>
                <p>
                  {customerData.description[2]}
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-sm p-6">
              <h3 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Industry</span>
                  <div className="font-medium">{customerData.projectDetails.industry}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Company Size</span>
                  <div className="font-medium">{customerData.projectDetails.companySize}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Region</span>
                  <div className="font-medium">{customerData.projectDetails.region}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Client Since</span>
                  <div className="font-medium">{customerData.projectDetails.clientSince}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Website</span>
                  <div className="font-medium">
                    <a href={customerData.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                      {customerData.projectDetails.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Challenge</h2>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-800">
              {challengeData.title}
            </h3>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm mb-6">
              {challengeData.description}
            </p>
            
            <p className="mb-4">
              The key challenges requiring a comprehensive smart agriculture platform included:
            </p>
            
            <ul className="space-y-3 mb-6 text-sm">
              {challengeData.challenges.map((challenge, index) => (
                <li key={index}><strong>{challenge.title}:</strong> {challenge.description}</li>
              ))}
            </ul>

            <p>
              {challengeData.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="">
            
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Solution</h2>
              <p className="text-lg text-gray-600 font-light">
                {solutionData.title}
              </p>
            </div>

            {/* Platform Video */}
            <div className="mb-16">
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="https://cicc.com.vn/wp-content/uploads/2023/01/Lean-nong-san.jpg"
                >
                  <source src="https://cicc.com.vn/wp-content/uploads/2023/01/VIET-NAM-FOOD-SAFETY-CHAIN-VFSC.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">
                VFSC Platform Overview - Smart Agriculture Management 4.0
              </p>
            </div>

            {/* Solution Components */}
            <div className="space-y-12">
              
              {/* Platform Architecture */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{platformData.title}</h3>
                  <p className="text-gray-600">
                    {platformData.description}
                  </p>
                </div>

                {/* Platform Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {platformData.platforms.map((platform, index) => (
                    <div key={index} className="border border-gray-200 p-6 text-center">
                      <div className={`flex justify-center mb-3 ${platform.color}`}>
                        {platform.icon}
                      </div>
                      <h4 className="text-base font-medium text-gray-900 mb-2">{platform.name}</h4>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  ))}
                </div>

                {/* Architecture Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-3">Client Architecture</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {platformData.architecture.client}
                    </p>
                  </div>
                  <div className="border border-gray-200 p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-3">Server Architecture</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {platformData.architecture.server}
                    </p>
                  </div>
                </div>
              </div>

              {/* Core System */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{coreSystemData.title}</h3>
                  <p className="text-gray-600">
                    Advanced core system with big data management, blockchain integration, and expert knowledge capabilities.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coreSystemData.features.map((feature, index) => (
                    <div key={index} className="border border-gray-200 p-6">
                      <h4 className="text-base font-medium text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Farm Management Modules */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-3">{farmModulesData.title}</h3>
                  <p className="text-gray-600 max-w-4xl">
                    {farmModulesData.subtitle}
                  </p>
                </div>

                {/* Farm Management Image */}
                <div className="mb-8">
                  <img 
                    src="https://cicc.com.vn/wp-content/uploads/2023/01/Lean-nong-san.jpg" 
                    alt="VFSC Farm Management Modules Interface" 
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Smart Farm Management System Interface
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {farmModulesData.modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 p-6">
                      <h4 className="text-base font-medium text-gray-900 mb-3">{module.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {module.description}
                      </p>
                      <ul className="space-y-1">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <span className="text-gray-400 mr-2 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Technologies & Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-light text-lg text-gray-900 mb-4">Platform</h3>
              <div className="text-sm text-gray-700">
                {technologiesData.platform.join(', ')}
              </div>
            </div>
            
            <div>
              <h3 className="font-light text-lg text-gray-900 mb-4">Backend</h3>
              <div className="text-sm text-gray-700">
                {technologiesData.backend.join(', ')}
              </div>
            </div>
            
            <div>
              <h3 className="font-light text-lg text-gray-900 mb-4">Frontend</h3>
              <div className="text-sm text-gray-700">
                {technologiesData.frontend.join(', ')}
              </div>
            </div>
            
            <div>
              <h3 className="font-light text-lg text-gray-900 mb-4">Database</h3>
              <div className="text-sm text-gray-700">
                {technologiesData.database.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Implementation Process</h2>
          
          <div className="space-y-8">
            {implementationProcess.map((process, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white flex items-center justify-center font-semibold">{process.step}</div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-700 text-sm">
                    {process.description}
                  </p>
                  <div className="mt-2 text-sm text-gray-500">Duration: {process.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Project Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStructure.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{member.count}</div>
                <div className="font-semibold text-gray-900">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 bg-[#1E1F25] text-white">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light mb-8">Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {resultsData.metrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 text-center">
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-none text-white">
            <p className="text-sm lg:text-base mb-6">
              {resultsData.description}
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
                <ul className="space-y-2 text-sm">
                  {resultsData.operationalExcellence.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
                <ul className="space-y-2 text-sm">
                  {resultsData.businessGrowth.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm">
            <div className="text-sm opacity-90 mb-2">Project Timeline</div>
            <div className="text-lg font-semibold">{resultsData.timeline}</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl lg:text-4xl font-light mb-4">{ctaData.title}</h2>
          <p className="text-sm mb-8 opacity-90">
            {ctaData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-green-600 hover:bg-green-700 px-8 py-3 font-semibold transition-colors"
            >
              {ctaData.primaryButton.text}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VFSCFoodSafetyChainPage
