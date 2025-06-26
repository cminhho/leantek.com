import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import TableOfContentsNav from '../components/TableOfContentsNav'

const TechnologyCard = ({ tech, index, category }) => {
  const getTechIcon = (techName) => {
    const iconMap = {
      // Frontend
      "React Ecosystem": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
      "Angular Framework": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg",
      "Vue.js Development": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg",
      "Modern JavaScript": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg",
      
      // Backend
      "Java Enterprise": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openjdk.svg",
      ".NET Ecosystem": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg",
      "Python Stack": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg",
      "Node.js Platform": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg",
      
      // Mobile
      "iOS Development": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apple.svg",
      "Android Development": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/android.svg",
      "Cross-Platform": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flutter.svg",
      "Mobile DevOps": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fastlane.svg",
      
      // Cloud
      "Amazon Web Services": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonwebservices.svg",
      "Microsoft Azure": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg",
      "Google Cloud Platform": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg",
      "DevOps & Infrastructure": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg",
      
      // Data & AI
      "Data Engineering": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachespark.svg",
      "Machine Learning": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg",
      "Business Intelligence": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tableau.svg",
      "AI Integration": "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg"
    }
    return iconMap[techName] || "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/code.svg"
  }

  const getIconColor = (category) => {
    const colors = {
      frontend: "#1F2937", // gray-800
      backend: "#1F2937", // gray-800
      mobile: "#1F2937", // gray-800
      cloud: "#1F2937", // gray-800
      data: "#1F2937", // gray-800
      ai: "#1F2937" // gray-800
    }
    return colors[category] || "#1F2937"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
    >
      <div className="p-8">
        <div className="flex items-start space-x-6">
          <div className="bg-gray-50 p-4 flex-shrink-0 group-hover:bg-gray-100 transition-colors">
            <img 
              src={getTechIcon(tech.name)} 
              alt={tech.name}
              className="w-8 h-8 object-contain"
              style={{ filter: `brightness(0) saturate(100%) invert(11%) sepia(10%) saturate(1853%) hue-rotate(180deg) brightness(96%) contrast(85%)` }}
              onError={(e) => {
                e.target.style.filter = 'none'
                e.target.src = `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${getIconColor(category)}"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`)}`
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
              {tech.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-height-6">{tech.description}</p>
            {tech.technologies && (
              <div className="flex flex-wrap gap-2">
                {tech.technologies.slice(0, 5).map((technology, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 font-medium border border-gray-200">
                    {technology}
                  </span>
                ))}
                {tech.technologies.length > 5 && (
                  <span className="text-xs text-gray-500 px-3 py-1 font-medium">
                    +{tech.technologies.length - 5} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const TechnologySection = ({ title, technologies, category, description }) => (
  <div className="mb-20">
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">{title}</h2>
      {description && (
        <p className="text-gray-600 leading-relaxed max-w-4xl">{description}</p>
      )}
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {technologies.map((tech, index) => (
        <TechnologyCard key={index} tech={tech} index={index} category={category} />
      ))}
    </div>
  </div>
)

const TechnologiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Technologies - Leantek2'
  }, [])

  const stats = [
    { number: "50+", label: "Technologies" },
    { number: "15+", label: "Years Experience" },
    { number: "300+", label: "Projects Delivered" },
    { number: "98%", label: "Success Rate" }
  ]

  // Table of Contents sections
  const tocSections = [
    { id: "overview", title: "Technologies Overview" },
    { id: "stats", title: "Our Expertise" },
    { id: "frontend", title: "Frontend Development" },
    { id: "backend", title: "Backend Development" },
    { id: "mobile", title: "Mobile Development" },
    { id: "cloud", title: "Cloud & DevOps" },
    { id: "data-ai", title: "Data & AI Solutions" },
    { id: "philosophy", title: "Technology Philosophy" },
    { id: "contact", title: "Start Your Project" }
  ]

  const frontendTechnologies = [
    {
      name: "React Ecosystem",
      description: "Modern React development with hooks, context, and performance optimization. Complete ecosystem including Next.js for server-side rendering and static site generation.",
      technologies: ["React 18", "Next.js 14", "Redux Toolkit", "React Query", "React Router", "React Hook Form", "Styled Components"]
    },
    {
      name: "Angular Framework",
      description: "Enterprise-grade Angular applications with TypeScript, RxJS, and comprehensive testing strategies for large-scale applications.",
      technologies: ["Angular 17", "TypeScript 5", "RxJS", "NgRx", "Angular Material", "Jasmine", "Karma", "Protractor"]
    },
    {
      name: "Vue.js Development",
      description: "Progressive Vue.js applications with Composition API, Pinia state management, and modern development tooling.",
      technologies: ["Vue 3", "Nuxt.js 3", "Pinia", "Vue Router", "Vite", "Vitest", "Vue CLI"]
    },
    {
      name: "Modern JavaScript",
      description: "Cutting-edge JavaScript and TypeScript development with modern build tools, testing frameworks, and code quality tools.",
      technologies: ["ES2023", "TypeScript 5", "Webpack 5", "Vite", "ESLint", "Prettier", "Jest"]
    }
  ]

  const backendTechnologies = [
    {
      name: "Java Enterprise",
      description: "Scalable Java applications using Spring ecosystem, microservices architecture, and cloud-native patterns for enterprise solutions.",
      technologies: ["Spring Boot 3", "Spring Cloud", "Hibernate", "Maven", "JUnit 5", "Docker", "Kubernetes"]
    },
    {
      name: ".NET Ecosystem",
      description: "Modern .NET development with ASP.NET Core, Entity Framework, and comprehensive Azure cloud integration.",
      technologies: ["ASP.NET Core 8", "Entity Framework", "C# 12", "Azure SDK", "xUnit", "SignalR", "Blazor"]
    },
    {
      name: "Python Stack",
      description: "High-performance Python applications for web development, data processing, machine learning, and enterprise automation.",
      technologies: ["Django 4", "FastAPI", "Flask", "SQLAlchemy", "Celery", "pytest", "Pandas"]
    },
    {
      name: "Node.js Platform",
      description: "Server-side JavaScript with Express, NestJS, and real-time applications using WebSockets and microservices architecture.",
      technologies: ["Node.js 20", "Express 4", "NestJS", "Socket.io", "PM2", "Jest", "GraphQL"]
    }
  ]

  const mobileTechnologies = [
    {
      name: "iOS Development",
      description: "Native iOS applications using Swift, SwiftUI, and modern iOS frameworks optimized for performance and user experience.",
      technologies: ["Swift 5.9", "SwiftUI", "UIKit", "Core Data", "Combine", "Xcode 15", "TestFlight"]
    },
    {
      name: "Android Development", 
      description: "Native Android applications with Kotlin, Jetpack Compose, and modern Android architecture components.",
      technologies: ["Kotlin", "Jetpack Compose", "Android SDK", "Room", "Retrofit", "Coroutines", "Gradle"]
    },
    {
      name: "Cross-Platform Development",
      description: "Unified mobile development with React Native and Flutter for efficient multi-platform deployment and maintenance.",
      technologies: ["React Native", "Flutter 3", "Dart", "Expo", "Firebase", "CodePush", "Fastlane"]
    },
    {
      name: "Mobile DevOps",
      description: "Complete mobile CI/CD pipelines with automated testing, deployment, and app store distribution workflows.",
      technologies: ["Fastlane", "App Center", "Firebase", "TestFlight", "Google Play Console", "Bitrise", "Jenkins"]
    }
  ]

  const cloudTechnologies = [
    {
      name: "Amazon Web Services",
      description: "Complete AWS ecosystem including serverless computing, containers, and managed services for scalable cloud applications.",
      technologies: ["EC2", "Lambda", "ECS", "RDS", "S3", "CloudFormation", "API Gateway"]
    },
    {
      name: "Microsoft Azure",
      description: "Azure cloud services including App Services, Functions, and comprehensive DevOps integration for enterprise solutions.",
      technologies: ["App Service", "Azure Functions", "AKS", "CosmosDB", "Azure DevOps", "ARM Templates", "Logic Apps"]
    },
    {
      name: "Google Cloud Platform",
      description: "GCP services focusing on compute, storage, machine learning capabilities, and data analytics solutions.",
      technologies: ["GCE", "GKE", "Cloud Functions", "BigQuery", "Cloud Storage", "Terraform", "Cloud SQL"]
    },
    {
      name: "DevOps & Infrastructure",
      description: "Modern DevOps practices with containerization, orchestration, infrastructure as code, and comprehensive monitoring.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Ansible", "Terraform", "Prometheus"]
    }
  ]

  const dataAndAI = [
    {
      name: "Data Engineering",
      description: "Big data processing, ETL pipelines, and real-time data streaming solutions for enterprise-scale data applications.",
      technologies: ["Apache Spark", "Kafka", "Airflow", "dbt", "Snowflake", "PostgreSQL", "Redis"]
    },
    {
      name: "Machine Learning",
      description: "ML model development, training, and deployment with modern frameworks and MLOps practices for production systems.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Kubeflow", "AutoML", "Jupyter"]
    },
    {
      name: "Business Intelligence",
      description: "Data visualization, reporting, and analytics solutions for data-driven decision making and business insights.",
      technologies: ["Tableau", "Power BI", "Looker", "D3.js", "Apache Superset", "Elasticsearch", "Kibana"]
    },
    {
      name: "AI Integration",
      description: "Artificial intelligence integration including natural language processing, computer vision, and conversational AI solutions.",
      technologies: ["OpenAI GPT", "LangChain", "Hugging Face", "OpenCV", "spaCy", "YOLO", "Rasa"]
    }
  ]

  return (
    <div className="min-h-screen bg-white ">
      <TableOfContentsNav sections={tocSections} title="Technologies Navigation" />

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 pt-40 pb-24" id="overview">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-light mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Technologies
            </motion.h1>
            <motion.div 
              className="w-16 h-0.5 bg-red-500 mb-8"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We leverage cutting-edge technologies and proven frameworks to deliver 
              innovative solutions that drive business growth. Our expertise spans 
              the entire technology stack, from frontend to cloud infrastructure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center bg-red-500 text-white px-8 py-3 hover:bg-red-600 transition-colors font-medium"
              >
                Start Your Project
                <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50" id="stats">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center py-8 border-l border-gray-200 first:border-l-0"
              >
                <div className="text-4xl font-light text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Sections */}
      <div className="container mx-auto px-4 py-20">
        <div id="frontend">
          <TechnologySection 
            title="Frontend Development" 
            technologies={frontendTechnologies}
            category="frontend"
            description="Create engaging user experiences with modern frontend frameworks and libraries, ensuring responsive design and optimal performance across all devices."
          />
        </div>
        
        <div id="backend">
          <TechnologySection 
            title="Backend Development" 
            technologies={backendTechnologies}
            category="backend"
            description="Build robust server-side applications with scalable architectures, secure APIs, and efficient data processing capabilities."
          />
        </div>
        
        <div id="mobile">
          <TechnologySection 
            title="Mobile Development" 
            technologies={mobileTechnologies}
            category="mobile"
            description="Develop native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices."
          />
        </div>
        
        <div id="cloud">
          <TechnologySection 
            title="Cloud & DevOps" 
            technologies={cloudTechnologies}
            category="cloud"
            description="Deploy and manage applications in the cloud with modern DevOps practices, ensuring scalability, reliability, and security."
          />
        </div>
        
        <div id="data-ai">
          <TechnologySection 
            title="Data & AI Solutions" 
            technologies={dataAndAI}
            category="ai"
            description="Harness the power of data and artificial intelligence to create intelligent applications and derive actionable business insights."
          />
        </div>
      </div>

      {/* Technology Philosophy Section */}
      <section className="py-20 bg-gray-50" id="philosophy">
        <div className="container px-4">
          <div className="">
            <motion.h2 
              className="text-3xl font-light text-gray-900 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technology Philosophy
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed mb-16 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We believe in choosing the right tool for the job. Our technology decisions are driven 
              by your business requirements, scalability needs, and long-term goals. We stay current 
              with emerging technologies while leveraging battle-tested solutions that deliver results.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
              {[
                {
                  title: "Innovation",
                  description: "We embrace cutting-edge technologies that provide competitive advantages and future-proof solutions."
                },
                {
                  title: "Reliability", 
                  description: "Our technology choices prioritize stability, security, and proven track records in enterprise environments."
                },
                {
                  title: "Scalability",
                  description: "We architect solutions that grow with your business, handling increased load and complexity seamlessly."
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 border-r border-gray-200 last:border-r-0"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="contact">
        <CTASection />
      </div>
    </div>
  )
}

export default TechnologiesPage 