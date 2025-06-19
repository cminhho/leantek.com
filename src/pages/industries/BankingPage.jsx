import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants for consistent page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const BankingPage = () => {
  const [selectedSolution, setSelectedSolution] = useState('INTERNET_BANKING')
  const [selectedTechCategory, setSelectedTechCategory] = useState('Programming Languages')

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
    'COMPLIANCE_RISK': {
      title: 'Compliance and risk management solutions',
      description: 'We develop comprehensive compliance and risk management systems that help banks meet regulatory requirements, monitor transactions, and maintain audit trails.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
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

  const technologies = {
    'Programming Languages': ['Java', '.NET', 'Python', 'C#', 'JavaScript', 'Swift', 'Kotlin', 'PHP', 'Ruby', 'Go', 'Rust', 'C/C++', 'COBOL'],
    'Frameworks & Libraries': ['Spring Boot', 'Django', 'React', 'Angular', 'Vue.js', 'Flutter', 'React Native', '.NET Framework', 'Laravel', 'Ruby on Rails', 'Express.js', 'FastAPI'],
    'Databases': ['Oracle', 'SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Cassandra', 'Neo4j', 'InfluxDB'],
    'Cloud Platforms': ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud'],
    'Security & Compliance': ['Encryption (AES, RSA)', 'OAuth 2.0', 'JWT', 'SSL/TLS', 'Multi-factor Authentication', 'PCI DSS', 'SOX Compliance', 'GDPR', 'Basel III'],
    'Payment Systems': ['SWIFT', 'ACH', 'SEPA', 'Visa API', 'Mastercard API', 'PayPal', 'Stripe', 'Square', 'FedNow', 'RTP'],
    'AI & Analytics': ['Machine Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Tableau', 'Power BI', 'Apache Spark', 'Hadoop', 'Elasticsearch'],
    'DevOps & Infrastructure': ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack'],
    'Integration & APIs': ['REST APIs', 'GraphQL', 'SOAP', 'gRPC', 'Apache Kafka', 'RabbitMQ', 'API Gateway', 'Webhooks', 'OpenAPI'],
    'Specialized Banking Tech': ['Core Banking Systems', 'T24 Temenos', 'SAP Banking', 'Finastra', 'FIS', 'Jack Henry', 'Mambu', 'Backbase']
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 pt-40">
        <div className="container mx-auto px-6">
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
            
            {/* Statistics - Simplified */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl font-bold text-red-500">5-10%</div>
                <div className="text-xs text-gray-400 mt-1">Retention Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">50%</div>
                <div className="text-xs text-gray-400 mt-1">Faster Processing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-500">90%</div>
                <div className="text-xs text-gray-400 mt-1">Fraud Detection</div>
              </div>
            </div>
            
            <motion.button
              className="mt-10 bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 text-sm transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* IT Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
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
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[16/9] bg-gray-100">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Banking Software Solutions Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Banking Software Solutions
              </h2>
              <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive technological solutions optimized for FinTech operations, developed by senior-level specialists to enhance operational efficiency and accelerate business growth.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 border border-gray-200">
            {/* Solutions Menu */}
            <motion.div 
              className="lg:col-span-1 border-r border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 h-full">
                <div className="p-4 border-b border-gray-200 bg-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Solutions</h3>
                </div>
                <div className="p-0">
                  <div className="space-y-0">
                    {Object.keys(bankingSolutions).map((solution, index) => (
                      <motion.button
                        key={solution}
                        onClick={() => setSelectedSolution(solution)}
                        className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-all duration-200 text-sm ${
                          selectedSolution === solution
                            ? 'bg-red-50 text-red-700 border-l-2 border-red-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="font-medium">
                          {bankingSolutions[solution].title}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solution Details */}
            <motion.div 
              className="lg:col-span-3"
              key={selectedSolution}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white h-full">
                <div className="aspect-[16/9] bg-gray-100">
                  <img 
                    src={bankingSolutions[selectedSolution].image}
                    alt={bankingSolutions[selectedSolution].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {bankingSolutions[selectedSolution].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {bankingSolutions[selectedSolution].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Advanced Banking Technology Solutions Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
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
                className="bg-white border border-gray-200 p-6 hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-4">{tech.icon}</div>
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
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
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
                <div className="text-2xl mb-4">{feature.icon}</div>
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

      {/* Cost Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Investment in Banking Software Solutions
            </h2>
            <div className="w-12 h-0.5 bg-red-600 mb-6"></div>
            <p className="text-gray-700 max-w-3xl leading-relaxed">
              Banking software development investment varies based on complexity, features, and compliance requirements. Here are typical investment ranges:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Basic Solutions',
                range: '$50K - $150K',
                features: ['Core banking functions', 'Basic security protocols', 'Standard compliance', 'Web interface'],
                duration: '3-6 months'
              },
              {
                title: 'Advanced Solutions',
                range: '$150K - $500K',
                features: ['Mobile banking platform', 'API integrations', 'Advanced security', 'AI-powered features'],
                duration: '6-12 months'
              },
              {
                title: 'Enterprise Solutions',
                range: '$500K - $2M+',
                features: ['Complete digital transformation', 'Custom integrations', 'Advanced AI/ML capabilities', 'Global compliance'],
                duration: '12+ months'
              }
            ].map((tier, index) => (
              <motion.div
                key={tier.title}
                className="bg-white border border-gray-200 p-6 hover:shadow-sm transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tier.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-3">{tier.range}</div>
                <div className="text-xs text-gray-600 mb-4 font-medium">Duration: {tier.duration}</div>
                <div className="space-y-2">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Technologies We Use
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
              We leverage cutting-edge technologies and industry-leading tools to build robust, secure, and scalable banking solutions that meet the highest standards of performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {/* Tech Categories */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 border border-gray-200 h-full">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900">Technology Stack</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-0">
                    {Object.keys(technologies).map((category, index) => (
                      <motion.button
                        key={category}
                        onClick={() => setSelectedTechCategory(category)}
                        className={`w-full text-left px-4 py-4 border-b border-gray-100 transition-all duration-200 ${
                          selectedTechCategory === category
                            ? 'bg-red-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="font-semibold text-sm">
                          {category}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tech List */}
            <motion.div 
              className="lg:col-span-3"
              key={selectedTechCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white border border-gray-200 p-8 h-full">
                <h3 className="text-xl font-light text-gray-900 mb-6">{selectedTechCategory}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {technologies[selectedTechCategory].map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="bg-gray-50 border border-gray-200 p-4 text-center hover:bg-red-50 hover:border-red-200 transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <span className="font-semibold text-gray-900">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Our Development Methodology
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="bg-red-600 text-white w-16 h-16 flex items-center justify-center font-bold text-xl mr-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Banking IT Solutions: Case Studies
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore how we've transformed banking operations through innovative software solutions, delivering measurable results and enhanced customer experiences.
            </p>
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
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              What Our Customers Think
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what banking leaders say about our software development services and the transformative impact on their operations.
            </p>
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
                className="bg-white border border-gray-200 p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-4xl text-red-100">
                  "
                </div>
                
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-400 text-xl">★</span>
                  ))}
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
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
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
              },
              {
                question: 'What is software robotics in banking and how does it benefit operations?',
                answer: 'Software robotics in banking, also known as Robotic Process Automation (RPA), enables comprehensive automation of manual processes including transaction processing, compliance reporting, customer onboarding, risk assessment, and document verification. Benefits include reduced operational costs, improved accuracy, faster processing times, enhanced compliance, and the ability to handle high-volume transactions 24/7. RPA can boost regulatory compliance efficiency by up to 200% and significantly reduce human error in repetitive tasks.'
              },
              {
                question: 'How do you handle regulatory compliance in banking software development?',
                answer: 'We ensure compliance with all relevant banking regulations including PCI DSS, SOX, Basel III, GDPR, and local regulatory requirements. Our development process includes compliance checkpoints at each phase, automated compliance monitoring, comprehensive audit trails, and regular compliance assessments. We work closely with regulatory experts and maintain up-to-date knowledge of evolving regulations to ensure your software remains compliant throughout its lifecycle.'
              },
              {
                question: 'What technologies do you use for banking software development?',
                answer: 'We leverage a comprehensive technology stack including programming languages like Java, .NET, Python, and JavaScript, frameworks such as Spring Boot, React, and Angular, databases like Oracle, SQL Server, and PostgreSQL, and cloud platforms including AWS, Azure, and Google Cloud. For advanced features, we utilize AI/ML technologies, blockchain for secure transactions, and IoT for enhanced banking services. We select the most appropriate technologies based on your specific requirements and existing infrastructure.'
              },
              {
                question: 'Do you provide ongoing support and maintenance for banking software?',
                answer: 'Yes, we provide comprehensive post-launch support including system monitoring, regular updates, security patches, performance optimization, and feature enhancements. Our support services include 24/7 system monitoring, incident response, regular maintenance updates, compliance updates as regulations change, and ongoing consultation for system improvements. We offer flexible support packages tailored to your operational needs and budget requirements.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose leanTek Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Why Choose leanTek for Banking Software Development?
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Founded with a commitment to excellence and innovation, leanTek delivers custom banking solutions tailored to your specific needs. Our experienced team combines deep industry expertise with cutting-edge technology to create solutions that drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Vast Talent Pool',
                description: 'Access to 500+ senior developers with specialized banking and fintech expertise, ensuring the right skills for your project.',
                icon: '👥'
              },
              {
                title: 'Quick Project Kick-off',
                description: 'Streamlined onboarding process gets your project started within 1-2 weeks, reducing time-to-market.',
                icon: '🚀'
              },
              {
                title: 'Sustainable Product Quality',
                description: 'Rigorous testing, code reviews, and quality assurance processes ensure long-term reliability and maintainability.',
                icon: '🔧'
              },
              {
                title: 'Reasonable Costs',
                description: 'Competitive pricing models with transparent cost structure and no hidden fees, maximizing your ROI.',
                icon: '💰'
              },
              {
                title: 'Flexible Cooperation Models',
                description: 'Choose from dedicated teams, staff augmentation, or project-based engagement models to fit your needs.',
                icon: '🤝'
              },
              {
                title: 'Efficient Project Delivery',
                description: 'Agile methodology with regular milestones ensures on-time delivery and continuous stakeholder engagement.',
                icon: '⚡'
              },
              {
                title: 'Compliance Excellence',
                description: 'Deep understanding of banking regulations ensures your solution meets all compliance requirements.',
                icon: '✅'
              },
              {
                title: 'Innovation Focus',
                description: 'Stay ahead with the latest technologies including AI, blockchain, and cloud-native architectures.',
                icon: '💡'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock support and maintenance services ensure your banking systems run smoothly.',
                icon: '🛡️'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        className="relative py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Banking Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
              Partner with leanTek to build secure, scalable, and innovative banking solutions that drive digital transformation, enhance customer satisfaction, and position your institution for future growth. Don't compromise on quality – build trust and reliability across your banking ecosystem.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Expert Consultation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-12 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Studies
              </motion.button>
            </div>

            {/* Next Steps */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8">What Happens Next?</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
                {[
                  {
                    step: '01',
                    title: 'Discovery Call',
                    description: 'We discuss your requirements and sign an NDA to ensure confidentiality.'
                  },
                  {
                    step: '02',
                    title: 'Project Proposal',
                    description: 'Receive detailed scope of work, team composition, timeline, and cost estimates.'
                  },
                  {
                    step: '03',
                    title: 'Agreement',
                    description: 'Review terms, finalize the agreement, and plan the project kickoff.'
                  },
                  {
                    step: '04',
                    title: 'Development',
                    description: 'Start building your banking solution with regular updates and milestones.'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-red-400 font-bold text-2xl mb-2">{step.step}</div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default BankingPage 