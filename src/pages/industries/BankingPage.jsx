import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../../components/ContactForm'
import TableOfContentsNav from '../../components/TableOfContentsNav'

// Animation variants for consistent page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const BankingPage = () => {
  // Image URLs
  const bankingSchemeUrl = `${import.meta.env.BASE_URL}images/diagrams/banking-scheme.png`
  const backgroundUrl = `${import.meta.env.BASE_URL}images/backgrounds/background-1.png`
  const [selectedSolution, setSelectedSolution] = useState('INTERNET_BANKING')
  const [openFAQ, setOpenFAQ] = useState(null)

  // Table of Contents sections
  const tocSections = [
    { id: "hero", title: "Banking Software Development" },
    { id: "it-services", title: "IT Services for Banks" },
    { id: "solutions", title: "Banking Software Solutions" },
    { id: "advanced-tech", title: "Advanced Technology Solutions" },
    { id: "ai-banking", title: "AI in Banking" },
    { id: "cost-factors", title: "Cost Factors" },
    { id: "cost-estimation", title: "Cost Estimation" },
    { id: "why-choose", title: "Why Choose LeanTek" },
    { id: "technologies", title: "Technologies We Use" },
    { id: "methodology", title: "Development Methodology" },
    { id: "case-studies", title: "Case Studies" },
    { id: "testimonials", title: "Customer Testimonials" },
    { id: "faq", title: "FAQ" },
    { id: "contact", title: "Contact Us" }
  ]

  const itServices = {
    'LENDING': {
      title: 'Lending software development',
      description: 'leanTek builds complex solutions that assist clients in monitoring payments, identifying delays, recalculating loan interest, and changing credit conditions.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80'
    },
    'PAYMENT': {
      title: 'Payment software development',
      description: 'To facilitate acquiring processes and enhance the safety of funds, our engineers build banking applications that provide confidence while processing digital transactions.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'API_INTEGRATION': {
      title: 'Bank API integration',
      description: 'Through open APIs, we ensure stable and secure communication between banks and third parties and drive seamless data interactions across different devices, platforms, and services.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'CUSTOMER_PORTAL': {
      title: 'Customer portal development',
      description: 'We design personalized web resources that give customers many options to tackle their financial issues through a single point of access to relevant and up-to-date information.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80'
    },
    'CUSTOM_CRM': {
      title: 'Custom CRM development',
      description: 'With deep expertise in CRM systems, leanTek improves performance management, optimizes workflow, and introduces order in client relationships.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'CORE_BANKING': {
      title: 'Core banking services',
      description: 'Besides custom software development, our vetted teams offer core banking services such as floating new accounts, approving loans, calculating interests, and processing deposits/withdrawals.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    }
  }

  const bankingSolutions = {
    'INTERNET_BANKING': {
      title: 'Internet banking solutions',
      description: 'leanTek helps customers take full advantage of online payments, allowing for purchasing goods, paying bills, and transferring funds between accounts via the Internet.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'MOBILE_BANKING': {
      title: 'Mobile banking solutions',
      description: 'With our mobile banking app development, our clients get full access to managing their accounts and making payments without the need to visit a bank branch.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'ATM_MANAGEMENT': {
      title: 'ATM management solutions',
      description: 'Our skilled developers forge innovative ATM solutions to manage cash flow, analyze transactions, prevent potential fraud, and maintain self-service machines accessible 24/7.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'EMV_SOFTWARE': {
      title: 'EMV software solutions',
      description: 'We leverage the best EMV practices to deliver interoperable safe payments across peer-to-peer and remote environments through plastic cards with smart chips.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'POS_SOFTWARE': {
      title: 'POS software solutions',
      description: 'leanTek builds banking POS software that ensures secure money transactions and provides valuable insights into financial ecosystems to make data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'INVESTMENT_MANAGEMENT': {
      title: 'Investment management solutions',
      description: 'To make investments profitable, we offer powerful tools to manage and optimize investment portfolios, audit compliance, and track stocks, futures, options, and bonds.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'CREDIT_SCORING': {
      title: 'Credit scoring solutions',
      description: 'Our credit scoring systems help banks assess borrower risk, automate lending decisions, and comply with regulatory requirements while reducing manual processing time.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'LOAN_MANAGEMENT': {
      title: 'Loan management solutions',
      description: 'Our loan management systems streamline the entire lending process from application to repayment, including automated underwriting, document management, and payment processing.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    },
    'INSURANCE_SOFTWARE': {
      title: 'Insurance software solutions',
      description: 'We create integrated insurance software solutions that enable banks to offer insurance products, manage policies, process claims, and maintain regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
    }
  }

  const technologyGroups = {
    'FRONT END': [
      { 
        name: 'React', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        ecosystem: 'React, Redux, Next.js, React Router, Styled Components, Material-UI'
      },
      { 
        name: 'Angular', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        ecosystem: 'Angular, TypeScript, RxJS, Angular Material, NgRx, Angular CLI'
      },
      { 
        name: 'Vue.js', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        ecosystem: 'Vue.js, Vuex, Nuxt.js, Vue Router, Vuetify, Vue CLI'
      },
      { 
        name: 'TypeScript', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        ecosystem: 'TypeScript, JavaScript, ES6+, Webpack, Babel, ESLint'
      }
    ],
    'BACK END': [
      { 
        name: 'Java', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        ecosystem: 'Java, Spring Boot, Spring Security, Hibernate, Maven, JUnit'
      },
      { 
        name: '.NET', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
        ecosystem: '.NET Core, ASP.NET, Entity Framework, C#, NuGet, xUnit'
      },
      { 
        name: 'Python', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        ecosystem: 'Python, Django, FastAPI, Flask, SQLAlchemy, Celery, Pytest'
      },
      { 
        name: 'Node.js', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        ecosystem: 'Node.js, Express.js, NestJS, TypeScript, npm, Jest'
      },
      { 
        name: 'Go', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        ecosystem: 'Go, Gin, Gorilla Mux, GORM, Go Modules, Testify'
      },
      { 
        name: 'C#', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        ecosystem: 'C#, .NET Framework, ASP.NET MVC, LINQ, Entity Framework'
      }
    ],
    'MOBILE': [
      { 
        name: 'Flutter', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        ecosystem: 'Flutter, Dart, Firebase, Provider, Bloc, GetX'
      },
      { 
        name: 'React Native', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        ecosystem: 'React Native, Expo, Redux, React Navigation, AsyncStorage'
      },
      { 
        name: 'iOS', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
        ecosystem: 'iOS, Swift, SwiftUI, UIKit, Core Data, Xcode'
      },
      { 
        name: 'Android', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
        ecosystem: 'Android, Kotlin, Java, Jetpack Compose, Room, Retrofit'
      }
    ],
    'CLOUD & PLATFORMS': [
      { 
        name: 'AWS', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        ecosystem: 'AWS, EC2, S3, Lambda, RDS, CloudFormation, EKS'
      },
      { 
        name: 'Azure', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        ecosystem: 'Azure, App Service, Functions, SQL Database, Key Vault, AKS'
      },
      { 
        name: 'Google Cloud', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        ecosystem: 'GCP, Compute Engine, Cloud Run, BigQuery, Firebase, GKE'
      },
      { 
        name: 'Kubernetes', 
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        ecosystem: 'Kubernetes, Helm, kubectl, Ingress, ConfigMaps, Secrets'
      },
      { 
        name: 'Datadog', 
        logo: 'https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_purple.png',
        ecosystem: 'Datadog, APM, Infrastructure, Logs, Synthetics, Dashboards'
      }
    ],
    'OTHER': [
      { 
        name: 'Mambu', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mambu_logo.svg/320px-Mambu_logo.svg.png',
        ecosystem: 'Mambu, Core Banking, APIs, Process Orchestrator, Data Warehouse'
      },
      { 
        name: 'Databricks', 
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Databricks_Logo.png/320px-Databricks_Logo.png',
        ecosystem: 'Databricks, Apache Spark, Delta Lake, MLflow, Unity Catalog'
      },
      { 
        name: 'Segment', 
        logo: 'https://logo.clearbit.com/segment.com',
        ecosystem: 'Segment, Customer Data Platform, Personas, Protocols, APIs'
      },
      { 
        name: 'Temenos', 
        logo: 'https://logo.clearbit.com/temenos.com',
        ecosystem: 'Temenos T24, Transact, Infinity, MarketPlace, Analytics'
      },
      { 
        name: 'Finastra', 
        logo: 'https://logo.clearbit.com/finastra.com',
        ecosystem: 'Finastra, Fusion, Essence, FusionFabric.cloud, APIs'
      }
    ]
  }

  const advancedTechnologies = [
    {
      title: 'Artificial Intelligence',
      description: 'AI-powered fraud detection, risk assessment, and customer service chatbots',
      icon: '🤖'
    },
    {
      title: 'Blockchain',
      description: 'Secure transaction processing and smart contracts for banking operations',
      icon: '⛓️'
    },
    {
      title: 'Machine Learning',
      description: 'Predictive analytics for credit scoring and personalized financial services',
      icon: '🧠'
    },
    {
      title: 'Big Data Analytics',
      description: 'Real-time transaction monitoring and customer behavior analysis',
      icon: '📊'
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable banking infrastructure with enhanced security and compliance',
      icon: '☁️'
    },
    {
      title: 'Robotic Process Automation',
      description: 'Automated compliance reporting and transaction processing',
      icon: '🤖'
    }
  ]

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'Banking Software Development Services - leanTek'
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit" 
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      {/* Table of Contents Navigation */}
      <TableOfContentsNav 
        sections={tocSections}
        title="Banking Development Guide"
      />

      {/* Hero Section */}
      <div 
        id="hero"
        className="relative text-white py-20 pt-40 bg-cover bg-center bg-no-repeat"
        style={{
                      backgroundImage: `url('${backgroundUrl}')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <span className="text-red-500 text-xs font-light tracking-widest uppercase">
                BANKING & FINTECH SOLUTIONS
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Banking Software Development Services
            </h1>
            <div className="w-16 h-0.5 bg-red-600 mb-8"></div>
            <div className="space-y-4 text-base text-gray-300 max-w-3xl">
              <p className="text-lg leading-relaxed">
                We create digital solutions that power modern banking — from core systems to innovative fintech applications that drive growth and enhance security.
              </p>
            </div>
            
            <motion.button
              className="mt-10 bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 text-sm transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's talk
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* IT Services Section */}
      <div id="it-services" className="py-16 ">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
                IT Services for Banks
              </h2>
              <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                Custom software development enables banks to maintain competitive advantage and deliver superior customer service through secure, efficient, and compliant systems.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(itServices).map(([key, service], index) => (
              <motion.div
                key={key}
                className="bg-gray-50 border border-gray-50 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Banking Software Solutions Section */}
      <div id="solutions" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
                Banking Software Solutions
              </h2>
              <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive technological solutions optimized for FinTech operations, developed by senior-level specialists to enhance operational efficiency and accelerate business growth.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Object.entries(bankingSolutions).map(([key, solution], index) => (
              <motion.div
                key={key}
                className="py-6 hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Banking Technology Solutions Section */}
      <div id="advanced-tech" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
              Advanced Banking Technology Solutions
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
            <p className="text-gray-700 max-w-2xl leading-relaxed">
              Leverage cutting-edge technologies to transform banking operations and deliver exceptional customer experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedTechnologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="border-gray-200 py-6 hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI in Banking Section */}
      <div id="ai-banking" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
              Artificial Intelligence in Banking
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              AI transforms banking operations through automated processes, enhanced security, and personalized customer experiences while reducing costs and improving decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Fraud Detection',
                description: '90% accuracy with ML-powered transaction monitoring',
                icon: '🛡️'
              },
              {
                title: 'Credit Scoring',
                description: 'AI-driven assessment with improved accuracy',
                icon: '📊'
              },
              {
                title: 'Customer Service',
                description: '24/7 AI chatbots for instant support',
                icon: '💬'
              },
              {
                title: 'Risk Management',
                description: 'Real-time assessment and compliance monitoring',
                icon: '⚖️'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 border border-gray-200 hover:border-red-200 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Factors Section */}
      <div id="cost-factors" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              How much does it cost to build a banking software solution?
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
            <p className="text-gray-700 max-w-4xl leading-relaxed">
              Developing a turnkey product doesn't come with a fixed price. Before signing an agreement, we discuss specialists' hourly rates and approve project budgets. We advise clients on choosing the best-suited pricing model given their requirements, project scope, and allocated resources. Overall, the final cost is determined by the factors as follows:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Project complexity',
                description: 'Simple solutions vs enterprise-level systems with advanced features and integrations'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Team size',
                description: 'Number of developers, designers, QA specialists, and project managers required'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6V4m0 2v2a2 2 0 002 2m0 0h4m-4 0a2 2 0 01-2-2V8a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2" />
                  </svg>
                ),
                title: 'Team composition',
                description: 'Senior vs junior specialists, specialized expertise in banking and fintech'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a4 4 0 118 0v4m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Project duration',
                description: 'Timeline requirements and development phases from MVP to full deployment'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                ),
                title: 'Tech stack',
                description: 'Technology choices, third-party integrations, and infrastructure requirements'
              },
              {
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Hourly rates',
                description: 'Geographic location of development team and level of expertise required'
              }
            ].map((factor, index) => (
              <motion.div
                key={factor.title}
                className="border border-gray-200 p-6 hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mr-4 text-gray-700">
                    {factor.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {factor.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Estimation Section */}
      <div id="cost-estimation" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Estimate the costs of implementing your solution
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto"
          >
            <div className="py-8">
              <img 
                src={bankingSchemeUrl}
                alt="Banking Software Development Cost Estimation Scheme"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-center py-12">
                <div className="text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Banking Software Cost Structure</h3>
                <p className="text-gray-700">
                  Comprehensive breakdown of development phases, resource allocation, and implementation timeline for banking software solutions.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Why Choose leanTek Section */}
      <div id="why-choose" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Why Choose leanTek for Banking Software Development?
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            <p className="text-base text-gray-700 max-w-4xl leading-relaxed">
              Founded with a commitment to excellence and innovation, leanTek delivers custom banking solutions tailored to your specific needs. Our experienced team combines deep industry expertise with cutting-edge technology to create solutions that drive measurable results.
            </p>
          </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 title: 'Vast Talent Pool',
                 description: 'Access to 500+ senior developers with specialized banking and fintech expertise, ensuring the right skills for your project.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 )
               },
               {
                 title: 'Quick Project Kick-off',
                 description: 'Streamlined onboarding process gets your project started within 1-2 weeks, reducing time-to-market.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                 )
               },
               {
                 title: 'Sustainable Product Quality',
                 description: 'Rigorous testing, code reviews, and quality assurance processes ensure long-term reliability and maintainability.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 )
               },
               {
                 title: 'Reasonable Costs',
                 description: 'Competitive pricing models with transparent cost structure and no hidden fees, maximizing your ROI.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 )
               },
               {
                 title: 'Flexible Cooperation Models',
                 description: 'Choose from dedicated teams, staff augmentation, or project-based engagement models to fit your needs.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                   </svg>
                 )
               },
               {
                 title: 'Efficient Project Delivery',
                 description: 'Agile methodology with regular milestones ensures on-time delivery and continuous stakeholder engagement.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                   </svg>
                 )
               },
               {
                 title: 'Compliance Excellence',
                 description: 'Deep understanding of banking regulations ensures your solution meets all compliance requirements.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                   </svg>
                 )
               },
               {
                 title: 'Innovation Focus',
                 description: 'Stay ahead with the latest technologies including AI, blockchain, and cloud-native architectures.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                   </svg>
                 )
               },
               {
                 title: '24/7 Support',
                 description: 'Round-the-clock support and maintenance services ensure your banking systems run smoothly.',
                 icon: (
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                 )
               }
             ].map((feature, index) => (
               <motion.div
                 key={feature.title}
                 className="border border-gray-200 p-6 text-center"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -5 }}
               >
                 <div className="w-12 h-12 mx-auto mb-4 text-gray-700">
                   {feature.icon}
                 </div>
                 <h3 className="text-base font-bold text-gray-900 mb-3">
                   {feature.title}
                 </h3>
                 <p className="text-sm text-gray-700 leading-relaxed">
                   {feature.description}
                 </p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div id="technologies" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Technologies We Use
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              We leverage cutting-edge technologies and industry-leading tools to build robust, secure, and scalable banking solutions that meet the highest standards of performance and reliability.
            </p>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(technologyGroups).map(([groupName, technologies], groupIndex) => (
              <motion.div
                key={groupName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    {groupName}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="relative flex flex-col items-center p-4 bg-gray-50 hover:shadow-sm hover:border-red-200 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="w-10 h-10 bg-red-100 rounded-full items-center justify-center text-red-600 font-bold text-xs hidden"
                        >
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-gray-900 text-center leading-tight">
                        {tech.name}
                      </span>
                      
                      {/* Hover Tooltip - Below tech box */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        <div className="text-center leading-relaxed">
                          {tech.ecosystem}
                        </div>
                        {/* Arrow pointing up */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div id="methodology" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Our Development Methodology
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            <p className="text-base text-gray-700 max-w-3xl leading-relaxed">
              We follow a structured SDLC approach that ensures quality deliverables and regular stakeholder feedback. Our agile banking software development methodology guarantees exceptional quality while maintaining flexibility for evolving project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                step: '01', 
                title: 'Business Analysis', 
                description: 'Define critical features and assess project feasibility through comprehensive requirement analysis and stakeholder consultation.'
              },
              { 
                step: '02', 
                title: 'Design & Architecture', 
                description: 'Create user-centered designs and robust system architecture through advanced visualization and prototyping methodologies.'
              },
              { 
                step: '03', 
                title: 'Development', 
                description: 'Implement solution logic using appropriate technology stack with continuous integration and deployment practices.'
              },
              { 
                step: '04', 
                title: 'Quality Assurance', 
                description: 'Comprehensive testing protocols ensuring bug-free, secure, and performance-optimized final products.'
              },
              { 
                step: '05', 
                title: 'Integration & Deployment', 
                description: 'Seamless integration with existing systems and third-party services with minimal disruption to operations.'
              },
              { 
                step: '06', 
                title: 'Support & Enhancement', 
                description: 'Ongoing maintenance, updates, and feature enhancements to ensure optimal performance and security.'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="bg-white border border-gray-200 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div id="case-studies" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              Banking IT Solutions: Case Studies
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mobile Banking Platform',
                subtitle: '50% increase in user engagement',
                technologies: ['React Native', 'Node.js', 'AWS'],
                description: 'Developed a comprehensive mobile banking solution with biometric authentication, real-time notifications, and seamless payment processing.',
                results: ['2M+ active users', '40% faster transactions', '99.9% uptime'],
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
              },
              {
                title: 'Fraud Detection System',
                subtitle: '5x reduction in fraud risk',
                technologies: ['Python', 'Machine Learning', 'TensorFlow'],
                description: 'Implemented AI-powered fraud detection system using machine learning algorithms to identify suspicious transaction patterns in real-time.',
                results: ['90% fraud detection accuracy', '$2M+ prevented losses', '30% faster processing'],
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
              },
              {
                title: 'Digital Lending Platform',
                subtitle: '70% faster loan approvals',
                technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
                description: 'Built an automated lending platform with credit scoring, document verification, and instant approval capabilities.',
                results: ['15 min approval time', '85% automation rate', '25% cost reduction'],
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
              },
              {
                title: 'Core Banking Modernization',
                subtitle: '34% reduction in processing time',
                technologies: ['.NET', 'Azure', 'SQL Server'],
                description: 'Modernized legacy core banking system with cloud migration, API integration, and enhanced security protocols.',
                results: ['99.99% availability', '60% performance boost', 'Zero data loss'],
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
              },
              {
                title: 'Investment Management Portal',
                subtitle: '17% boost in operational efficiency',
                technologies: ['React', 'Node.js', 'MongoDB'],
                description: 'Created a comprehensive investment management platform with portfolio tracking, risk analysis, and automated reporting.',
                results: ['Real-time analytics', '24/7 monitoring', 'Regulatory compliance'],
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
              },
              {
                title: 'Payment Gateway Integration',
                subtitle: '15% increase in transaction success',
                technologies: ['PHP', 'Laravel', 'Redis'],
                description: 'Integrated multiple payment gateways with advanced routing, failover mechanisms, and comprehensive transaction monitoring.',
                results: ['99.8% success rate', 'Multi-currency support', 'PCI DSS compliant'],
                image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-red-600 font-semibold text-sm mb-4">
                      {caseStudy.subtitle}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {caseStudy.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start text-sm">
                        <span className="text-green-600 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              What Our Customers Think
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "leanTek delivered exceptional banking software that transformed our customer experience. Their team's expertise in financial services and commitment to security standards exceeded our expectations. The implementation was seamless and delivered measurable results.",
                author: "Sarah Johnson",
                position: "CTO",
                company: "First National Bank",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b287?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                rating: 5
              },
              {
                quote: "Working with leanTek was a game-changer for our digital transformation. They delivered a robust core banking solution on time and within budget. Their ongoing support and innovative approach to problem-solving make them an invaluable technology partner.",
                author: "Michael Chen",
                position: "Head of Digital Banking",
                company: "Metro Credit Union",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                rating: 5
              },
              {
                quote: "The fraud detection system developed by leanTek has revolutionized our risk management capabilities. We've seen a 5x reduction in fraudulent transactions and significant cost savings. Their AI-powered solution is truly cutting-edge.",
                author: "Jennifer Martinez",
                position: "VP of Risk Management",
                company: "Community Trust Bank",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="border border-gray-200 p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-4xl text-red-100">
                  "
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm font-medium text-red-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">
              FAQ
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
          </motion.div>

          <div className="max-w-4xl space-y-4">
            {[
              {
                question: 'How long does it take to develop software for the banking industry?',
                answer: 'Development timelines vary based on project complexity and requirements. According to our experience, developing a comprehensive banking solution usually takes between 4-12 months. Basic implementations can start at 3-4 months, while enterprise-level solutions with advanced features may extend to 18+ months. Factors affecting timeline include regulatory compliance requirements, integration complexity, and custom feature development.'
              },
              {
                question: 'What are the essential features a modern banking software must have?',
                answer: 'Modern banking software should include robust account management capabilities, multi-layered security protocols, comprehensive deposit/withdrawal functionality, advanced loan management, real-time transaction processing, regulatory compliance monitoring, mobile banking support, API integration capabilities, fraud detection systems, and customer relationship management tools. Additionally, features like biometric authentication, AI-powered analytics, and cloud-based architecture are becoming increasingly important.'
              },
              {
                question: 'How do you ensure our banking software project maintains the highest security standards?',
                answer: 'We implement enterprise-grade encryption algorithms, multi-factor authentication, secure API protocols, and conduct regular security audits. Our solutions comply with international banking regulations including PCI DSS, SOX, Basel III, and local regulatory requirements. We employ zero-trust architecture, implement secure coding practices, conduct penetration testing, and maintain comprehensive audit trails. Additionally, we provide ongoing security monitoring and threat detection capabilities.'
              },
              {
                question: 'What is the cost range for developing banking software solutions?',
                answer: 'Banking software development costs vary significantly based on complexity, features, and compliance requirements. Basic solutions typically range from $50K-$150K, advanced solutions with mobile platforms and AI features range from $150K-$500K, while enterprise-level solutions with complete digital transformation capabilities can range from $500K-$2M+. The final cost depends on project scope, team size, development timeline, technology stack, and regulatory requirements.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left py-2 flex justify-between items-center"
                >
                  <h3 className="text-lg font-light text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 flex items-center justify-center"
                    >
                      <span className="text-2xl text-red-600 font-light">+</span>
                    </motion.div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="pyx-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section id="contact" className="">
        <ContactForm />
      </section>
    </motion.div>
  )
}

export default BankingPage 