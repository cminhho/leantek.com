// Updated to use public folder path directly in JSX
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TableOfContentsNav from '../../components/TableOfContentsNav'

const CTIVNERPImplementationPage = () => {
  // Tab state management
  const [activeTab, setActiveTab] = useState('erp')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Table of Contents sections
  const tocSections = [
    { id: "hero", title: "Project Overview" },
    { id: "challenge", title: "The Challenge" },
    { id: "solution", title: "Our Solution" },
    { id: "implementation", title: "Implementation Process" },
    { id: "features", title: "Key Features" },
    { id: "results", title: "Results & Impact" },
    { id: "team", title: "Team Structure" },
    { id: "technologies", title: "Technologies Used" },
    { id: "cta", title: "Start Your Project" }
  ]

  // Image URLs
  const heroImageUrl = `${import.meta.env.BASE_URL}images/cases/ctivn/manufacturing-hero-bg.jpg`

  // Hero Section Data
  const heroData = {
    tags: ["Custom ERP", "Lean ERP", "Manufacturing"],
    title: "CTIVN - Digital business operations with Custom Lean ERP solutions and services",
    description: "LeanTek successfully transformed CTIVN's operations by developing and implementing a comprehensive custom Lean ERP system, specifically designed for precision manufacturing operations. The solution integrated all business processes from quotation to delivery, including specialized payroll management and time attendance systems, resulting in improved operational efficiency and better manufacturing visibility.",
    stats: [
      { value: "15%", label: "Reduction in Production Lead Time" },
      { value: "25%", label: "Improvement in Order Processing" },
      { value: "18 months", label: "Implementation Timeline" }
    ]
  }

  // Customer Section Data
  const customerData = {
    companyName: "CTI Vietnam",
    website: "https://ctivn.com/vi/",
    description: [
      "CTI Vietnam is a leading precision machining and manufacturing company established in 2006, built on the foundation of Dong Quang Electromechanical Company. With over 200 employees across multiple locations in Vietnam, USA, and Japan, CTIVN specializes in precision mechanical processing, CNC machining, industrial equipment design and manufacturing.",
      "CTI Vietnam provides comprehensive services including precision mechanical processing, CNC milling and turning, EDM processing, NC grinding, stamping, welding, and complete automation equipment design and installation. The company serves diverse industries with high-precision manufacturing solutions and maintains ISO 9001:2015 quality management certification.",
      "As a rapidly growing manufacturing organization with complex production workflows, CTIVN needed to modernize their operational systems to maintain their competitive edge in the precision manufacturing industry and optimize their end-to-end manufacturing processes."
    ],
    projectDetails: {
      industry: "Precision Machining & Manufacturing",
      companySize: "200+ Employees",
      region: "Asia",
      clientSince: "2022",
      website: "ctivn.com"
    }
  }

  // Challenge Section Data
  const challengeData = {
    title: "Need for Custom Manufacturing ERP Solution",
    description: "As a precision machining company with highly specialized manufacturing workflows, CTIVN faced significant operational challenges that off-the-shelf ERP solutions couldn't address. Their existing infrastructure consisted of disconnected systems and manual processes that hindered operational efficiency and growth.",
    challenges: [
      {
        title: "Specialized Manufacturing Processes",
        description: "CTIVN's precision machining operations including CNC milling, turning, EDM processing, and complex assembly workflows required industry-specific functionality that generic ERP systems couldn't accommodate. Each manufacturing process had unique requirements for job tracking, quality control, and resource allocation."
      },
      {
        title: "Complex Quotation Requirements",
        description: "Precision manufacturing quotes involved intricate cost calculations considering material specifications, machining time estimates, tooling requirements, setup costs, and quality tolerances. The existing manual quotation process was time-consuming and prone to errors, affecting competitiveness and profitability."
      },
      {
        title: "Unique Production Planning",
        description: "Multi-machine, multi-process production scheduling required sophisticated planning logic to optimize machine utilization, minimize setup times, and coordinate complex manufacturing sequences. Standard ERP planning modules couldn't handle the intricacies of precision manufacturing workflows."
      },
      {
        title: "Real-time Manufacturing Visibility",
        description: "Management needed comprehensive visibility into production status, machine utilization rates, order progress, and quality metrics. The lack of real-time manufacturing dashboards made it difficult to identify bottlenecks, track OEE (Overall Equipment Effectiveness), and make data-driven operational decisions."
      },
      {
        title: "Time Clock Integration for Payroll System",
        description: "CTIVN needed to integrate their existing biometric time clock machines with a comprehensive payroll system that could handle complex shift patterns, overtime calculations, and Vietnamese labor law compliance. The manual payroll process was inefficient and prone to calculation errors."
      },
      {
        title: "Quality Management Integration",
        description: "ISO 9001:2015 compliance requirements combined with precision manufacturing tolerances needed seamless integration between quality control processes, production tracking, and documentation management to ensure traceability and continuous improvement."
      },
      {
        title: "Custom Payroll System Development for CTIVN",
        description: "CTIVN required a specialized payroll system tailored to their unique manufacturing workforce structure, including complex shift patterns, overtime calculations for precision manufacturing operations, piece-rate calculations for certain processes, and integration with production data to calculate performance-based incentives. The system needed to handle Vietnamese labor regulations, social insurance calculations, and generate detailed payroll reports for management decision-making."
      }
    ],
    conclusion: "These operational challenges required a comprehensive custom ERP solution that could integrate all business processes while addressing the specific needs of precision manufacturing operations, Vietnamese regulatory requirements, and CTIVN's unique payroll and workforce management needs."
  }

  // Solution Section Data
  const solutionData = {
    title: "Custom Lean ERP Development Tailored for Precision Manufacturing",
    erpImageUrl: "https://images.ctfassets.net/lzny33ho1g45/4vXtHsD8OwspfhedAGOG6k/efb7a2b28a29f5f4023829a56ab04071/best-erp-software-03-sap.webp?w=1400&fm=avif",
    tabs: [
      {
        id: 'erp',
        label: 'Custom Lean ERP Development',
        title: 'Custom Lean ERP Solution',
        description: 'LeanTek designed and developed a completely custom Lean ERP system from the ground up, specifically engineered for CTIVN\'s precision manufacturing operations. Our solution integrates all critical business processes into a unified platform.',
        features: [
          'Custom Quotation Management with Precision Cost Calculations',
          'Specialized Contract Management for Manufacturing',
          'Advanced Order Management with Barcode Integration',
          'Intelligent Production Planning & Scheduling',
          'Custom Procurement Management for Manufacturing Materials',
          'Real-time Production Management & Monitoring',
          'Precision Quality Management System',
          'Sophisticated Outsourcing Management Platform',
          'Advanced Inventory Management with Location Tracking',
          'Comprehensive Delivery Management System'
        ],
        benefits: [
          'End-to-end manufacturing process visibility',
          'Reduced manual data entry and errors',
          'Improved production planning accuracy',
          'Enhanced quality control and compliance',
          'Streamlined supplier and vendor management'
        ]
      },
      {
        id: 'integration',
        label: 'Integration with Existing Systems',
        title: 'Seamless System Integration & Data Migration',
        description: 'LeanTek successfully integrated CTIVN\'s existing hardware and software systems with the new Lean ERP platform, ensuring minimal disruption to ongoing operations and maximum data preservation.',
        features: [
          'Direct integration with biometric time clock devices',
          'Legacy data migration and transformation',
          'Existing barcode scanner integration',
          'Manufacturing equipment connectivity',
          'Third-party software API integration',
          'Custom middleware development for data flow',
          'Real-time synchronization between systems',
          'Backup and recovery system implementation'
        ],
        benefits: [
          'Preserved existing hardware investments',
          'Minimized operational disruption during transition',
          'Maintained historical data integrity',
          'Reduced training time for familiar interfaces',
          'Enhanced system reliability and performance'
        ]
      },
      {
        id: 'hr',
        label: 'HR, Payroll & Time Attendance System',
        title: 'Comprehensive Human Resources Management',
        description: 'LeanTek developed a comprehensive Human Resources management system with integrated attendance tracking and automated payroll calculation specifically designed for CTIVN\'s manufacturing workforce. The system is organized into specialized modules addressing different aspects of workforce management.',
        modules: [
          {
            title: 'Employee Management Module',
            features: [
              'Employee profile and document management',
              'Skills tracking and certification management',
              'Performance evaluation and goal setting',
              'Training and development tracking',
              'Employee self-service portal'
            ]
          },
          {
            title: 'Time & Attendance Module',
            features: [
              'Biometric time clock integration',
              'Real-time attendance synchronization',
              'Complex shift pattern management',
              'Leave management and approval workflows',
              'Overtime tracking and calculations'
            ]
          },
          {
            title: 'Custom Payroll Module',
            features: [
              'Automated payroll calculation based on attendance data',
              'Complex shift pattern and overtime calculations for manufacturing',
              'Piece-rate and performance-based incentive calculations',
              'Integration with production data for productivity bonuses',
              'Vietnamese labor law and social insurance compliance',
              'Tax calculation and statutory deductions',
              'Custom payslip generation with manufacturing metrics'
            ]
          },
          {
            title: 'Analytics & Reporting Module',
            features: [
              'Advanced payroll analytics and cost center reporting',
              'Multi-location payroll processing and consolidation',
              'Workforce cost analysis and budget planning',
              'Performance tracking and productivity reports',
              'Compliance reporting for Vietnamese regulations'
            ]
          }
        ],
        benefits: [
          'Automated compliance with Vietnamese labor laws and social insurance',
          'Reduced payroll processing time by 50% with automated calculations',
          'Accurate piece-rate and performance incentive calculations',
          'Improved employee satisfaction through transparent payroll system',
          'Enhanced workforce cost analysis and budget planning',
          'Real-time integration between production and payroll data',
          'Streamlined multi-location payroll consolidation'
        ]
      }
    ]
  }

  // Technologies Data
  const technologiesData = {
    platform: ["Custom Lean ERP", "SQL Server Database", "ASP.NET Core"],
    backend: ["C#", ".NET Core", "Web API", "Entity Framework"],
    frontend: ["Blazor Server", "HTML5", "Bootstrap", "JavaScript"],
    database: ["SQL Server", "T-SQL", "Stored Procedures"]
  }

  // Implementation Process Data
  const implementationProcess = [
    {
      step: 1,
      title: "Business Process Analysis & Requirements Gathering",
      description: "Conducted in-depth analysis of CTIVN's precision manufacturing workflows, existing systems assessment, and stakeholder interviews. Mapped current quotation, production planning, and payroll processes. Documented integration requirements for biometric time clock systems and quality management procedures.",
      duration: "4 weeks"
    },
    {
      step: 2,
      title: "Custom ERP Architecture & System Design",
              description: "Designed comprehensive system architecture for the custom Lean ERP platform, including database schema for manufacturing data, API specifications for time clock integration, and user interface wireframes. Created detailed technical specifications for 10 core manufacturing modules and Vietnamese payroll compliance requirements.",
      duration: "6 weeks"
    },
    {
      step: 3,
      title: "Core ERP Development & Manufacturing Modules",
      description: "Developed the foundational ERP platform and core manufacturing modules including quotation management, production planning, inventory control, and quality management. Built custom algorithms for precision manufacturing cost calculations and production scheduling optimization.",
      duration: "20 weeks"
    },
    {
      step: 4,
      title: "Custom Payroll System & Time Clock Integration",
      description: "Developed specialized payroll system tailored for CTIVN's manufacturing workforce, including complex shift patterns, piece-rate calculations, and performance-based incentives. Integrated biometric time clock hardware with real-time attendance synchronization, built automated payroll engine with Vietnamese labor law compliance, and created custom payroll analytics for manufacturing cost management.",
      duration: "8 weeks"
    },
    {
      step: 5,
      title: "System Integration & Data Migration",
      description: "Integrated all ERP modules, migrated historical data from legacy systems, conducted comprehensive system testing, and performed user acceptance testing. Optimized system performance and established data backup procedures.",
      duration: "6 weeks"
    },
    {
      step: 6,
      title: "Training, Deployment & Go-Live Support",
      description: "Conducted comprehensive user training for all departments, executed phased system rollout, and provided intensive go-live support. Established ongoing maintenance procedures, documentation, and user support processes.",
      duration: "6 weeks + ongoing"
    }
  ]

  // Team Structure Data
  const teamStructure = [
    { count: 1, role: "Project Manager" },
    { count: 1, role: "Business Analyst" },
    { count: 1, role: "Solution Architect" },
    { count: 2, role: "Senior Backend Developers" },
    { count: 1, role: "Frontend Developer" },
    { count: 1, role: "QA Engineer" }
  ]

  // Results Data
  const resultsData = {
    metrics: [
      { value: "15%", label: "Reduction in Production Lead Time" },
      { value: "25%", label: "Improvement in Order Processing" },
      { value: "40%", label: "Reduction in Manual Data Entry" },
      { value: "18%", label: "Increase in Production Visibility" }
    ],
    description: "LeanTek's custom Lean ERP implementation provided CTIVN with integrated business processes and real-time manufacturing visibility, resulting in improved operational efficiency and better decision-making capabilities across the organization.",
    operationalExcellence: [
      "Integrated quotation to delivery workflow",
      "Real-time production progress tracking",
      "Centralized inventory and warehouse management",
      "Automated HR and payroll processing",
      "Standardized quality control procedures",
      "Improved supplier and outsourcing coordination"
    ],
    businessGrowth: [
      "Better project cost estimation and pricing accuracy",
      "Faster quote generation and response times",
      "Enhanced compliance with ISO 9001:2015 standards",
      "Improved capacity planning for future growth",
      "Better customer service through order transparency",
      "Reduced operational costs through process automation"
    ],
    timeline: "June 2022 - December 2023"
  }

  // CTA Section Data
  const ctaData = {
    title: "Ready to Transform Your Business?",
    description: "Let LeanTek help you achieve similar results with a custom Lean ERP solution designed specifically for your business needs.",
    primaryButton: {
      text: "Start Your Project",
      href: "/contact"
    }
  }

  const sapFeatures = [
    {
      module: "Quotation Management",
      features: [
        "Barcode ID-based quotation management with quick information retrieval",
        "Flexible form design customizable for different customer segments",
        "Detailed cost analysis for each component/processing workflow",
        "Quote duplication feature to optimize working time",
        "Automated approval workflow with timely email notifications",
        "Visual dashboard displaying quotation effectiveness statistics"
      ]
    },
    {
      module: "Contract Management",
      features: [
        "Smart contract management system with integrated barcode ID",
        "Diverse contract template library: domestic business, on-site export, direct export",
        "Specialized contract templates for processing: domestic, transfer, on-site",
        "Revenue analysis by customer/order/product",
        "Integrated management of contract-related documents",
        "Smart alerts for important timeline milestones"
      ]
    },
    {
      module: "Order Management",
      features: [
        "Inherit information from quotations and contracts, minimizing duplicate data entry",
        "Lean visual interface with centralized information, managed by barcode ID",
        "Order tracking by status: newly created, in production, quality check, completed",
        "Multi-dimensional order statistics and analysis: customer, product, time",
        "Status synchronization with production and quality control stages",
        "Automatic alerts for delayed orders"
      ]
    },
    {
      module: "Production Planning Management",
      features: [
        "Central control panel displaying overview of orders, progress, status",
        "Automatic synchronization of information from orders, no need to re-enter data",
        "Production planning based on real data: machine capacity, employees, productivity",
        "Smart allocation feature between internal production and outsourcing",
        "Flexible plan adjustment according to actual changes",
        "Integrated detailed production process management"
      ]
    },
    {
      module: "Procurement Management",
      features: [
        "Standardized input data, reusing supplier and product information",
        "Diverse purchase purpose management: production materials, outsourcing, fuel, tools-equipment",
        "Streamlined, intuitive interface with barcode ID technology",
        "Supplier delivery progress tracking",
        "Multi-criteria supplier evaluation",
        "Detailed reports on procurement costs by category"
      ]
    },
    {
      module: "Production Management",
      features: [
        "Digital Kanban board application for visual production process control",
        "Workshop planning management combined with machine list and capacity",
        "Detailed work tracking with machine ID, employee ID, process ID information",
        "Real-time progress and productivity updates",
        "Productivity analysis by machine, by employee, by operation",
        "Timely alerts for production issues"
      ]
    },
    {
      module: "Quality Management",
      features: [
        "Built on PDCA cycle: Plan, Do, Check, Act",
        "Streamlined interface with visual colors for alerts and status",
        "Technical specification management from drawings, automatic inspection standard updates",
        "Measuring equipment tracking and inspection responsibility assignment",
        "Smart inspection form system with barcode ID traceability",
        "Quality data analysis, root cause identification and improvement solutions"
      ]
    },
    {
      module: "Outsourcing Management",
      features: [
        "Synchronized connection platform with external processing units",
        "Real-time 2-way alert system: from inside out and from outside in",
        "Detailed tracking of progress, processing costs by unit",
        "Outsourcing service quality evaluation",
        "Payment and debt management with processing units",
        "Outsourcing effectiveness reports and comparison with internal production"
      ]
    },
    {
      module: "Inventory Management",
      features: [
        "Real-time warehouse management with barcode ID technology for all import-export activities",
        "Support for diverse warehouse types: raw materials, finished products, tools-equipment, fuel",
        "Automatic inventory level calculation and alerts when exceeding thresholds",
        "Integrated warehouse location for easy search and management",
        "Smart inventory counting with mobile devices",
        "Detailed inventory reports by item code, item type, value"
      ]
    },
    {
      module: "Delivery Management",
      features: [
        "Create and print VAT invoices, delivery receipts according to regulations",
        "Shipping information management: shipping unit, time, cost",
        "Delivery status tracking: in transit, delivered, received",
        "Print template customization feature according to customer requirements",
        "Delivery cost statistics by region, customer",
        "Integration with order and warehouse modules"
      ]
    },
    {
      module: "Maintenance and Calibration Management",
      features: [
        "Built on TPM (Total Productive Maintenance) platform",
        "5S-AM self-maintenance system helping employees proactively maintain equipment",
        "Automatic periodic maintenance planning with smart reminders",
        "Spare parts warehouse management and replacement demand forecasting",
        "Maintenance cost tracking by equipment/machinery",
        "OEE (Overall Equipment Effectiveness) performance analysis"
      ]
    },
    {
      module: "Human Resources Management",
      features: [
        "Smart employee card system with integrated barcode ID",
        "Real-time tracking of individual employee productivity",
        "Integration with production module to evaluate work efficiency",
        "System access authorization by job position",
        "Employee skills and training management",
        "Work quality recording and evaluation",
        "Custom payroll calculation engine for manufacturing workforce",
        "Performance-based incentive and bonus calculations",
        "Integration with production data for productivity tracking"
      ]
    },
    {
      module: "Reporting and Analytics Management",
      features: [
        "Business Intelligence platform integrated with all modules",
        "Visual dashboard displaying KPIs and targets in real-time",
        "Multi-dimensional reports: by product, customer, supplier, time",
        "Trend analysis and business forecasting tools",
        "Smart alert system when KPI indicators don't meet targets",
        "Decision support based on real data from all processes"
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Table of Contents Navigation */}
      <TableOfContentsNav 
        sections={tocSections}
        title="CTIVN ERP Implementation"
      />

      {/* Hero Section */}
      <div id="hero" className="relative bg-[#1E1F25] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroImageUrl}
            alt="Precision Manufacturing Background"
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
                  <a href={customerData.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">{customerData.companyName}</a> {customerData.description[0]}
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
                    <a href={customerData.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
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
          
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800">
              {challengeData.title}
            </h3>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm mb-6">
              {challengeData.description}
            </p>
            
            <p className="mb-4">
              The key challenges requiring a custom ERP solution included:
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
      <section id="solution" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Solution</h2>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
            <h3 className="text-xl font-light text-green-800">
              {solutionData.title}
            </h3>
          </div>

          {/* ERP Image */}
          <div className="mb-12">
            <img 
              src={solutionData.erpImageUrl} 
              alt="Custom Lean ERP System Implementation" 
              className="w-full h-auto object-cover max-h-100"
            />
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {solutionData.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="">
            {solutionData.tabs.map((tab) => (
              <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{tab.title}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                      {tab.description}
                    </p>
                    
                    {tab.modules ? (
                      // HR tab with modules
                      <div className="space-y-6">
                        {tab.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex}>
                            <h4 className="text-base font-semibold text-gray-900 mb-3">{module.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-700 ml-4">
                              {module.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start">
                                  <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Other tabs with regular features
                      <>
                        <h4 className="text-base font-light text-gray-900 mb-4">Key Features:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {tab.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits Achieved:</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      {tab.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">
                        <strong>Implementation Focus:</strong> {tab.id === 'erp' ? 'Core business process automation and manufacturing workflow optimization' : 
                        tab.id === 'integration' ? 'Seamless data flow and minimal operational disruption' : 
                        'Vietnamese labor compliance and workforce management efficiency'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP ERP Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Lean ERP Modules & Features</h2>
          
          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sapFeatures.map((moduleData, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {moduleData.module}
                </h3>
                <div className="space-y-2">
                  {moduleData.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm">
                      <span className="text-blue-600 mr-2 mt-1 flex-shrink-0 text-xs">•</span>
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                  {moduleData.features.length > 4 && (
                    <div className="text-xs text-gray-500 mt-3 pt-2">
                      +{moduleData.features.length - 4} more features
                    </div>
                  )}
                </div>
              </div>
            ))}
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
      <section id="implementation" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Implementation Process</h2>
          
          <div className="space-y-8">
            {implementationProcess.map((process, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white flex items-center justify-center font-semibold">{process.step}</div>
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
      <section id="team" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Project Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStructure.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{member.count}</div>
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
              className="bg-red-600 hover:bg-red-700 px-8 py-3 font-semibold transition-colors"
            >
              {ctaData.primaryButton.text}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTIVNERPImplementationPage 