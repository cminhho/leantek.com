import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('Front-end')

  const technologies = {
    'Front-end': {
      subcategories: [
        {
          name: 'React',
          description: 'React, Next.js, React Router, Redux, Redux Toolkit, MobX, Zustand, Redux Thunk, Redux-Saga, RTK Query, React-Query, TRPC, SWR, Apollo GraphQL, etc.'
        },
        {
          name: 'Angular',
          description: 'Angular, Angular material, KendoUI, Ant Design, PrimeNG, Bootstrap, DevExtreme, Nebular, Ag Grid, NgRx, NgXS, MobX, Akita, D3.js, etc.'
        },
        {
          name: 'Vue.js',
          description: 'Vue, NuxtJS, Quasar, Petite-vue, Vuex, Pinia, Vue Router, Vuetify, Element UI, Primevue, Vitest, Vue Test Utils, VueUse, Vue Query.'
        },
        {
          name: 'JavaScript',
          description: 'Angular, React, Vue, Svelte, Material, Ant Design, Bootstrap, Apollo GraphQL, Protractor, Cypress, Karma, Jasmine, Jest, Mocha, etc.'
        },
        {
          name: 'TypeScript',
          description: 'Angular, React, Vue, Svelte, Material, Ant Design, Bootstrap, Apollo GraphQL, Protractor, Cypress, Karma, Jasmine, Jest, Mocha, etc.'
        }
      ],
      frameworks: [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Vue', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Sass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
        { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
        { name: 'jQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'Apollo', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'Cypress', logo: 'https://static-00.iconduck.com/assets.00/cypress-icon-512x512-zi8uxkg2.png' },
        { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Storybook', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' },
        { name: 'ESLint', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg' },
        { name: 'Prettier', logo: 'https://prettier.io/icon.png' }
      ]
    },
    'Back-end': {
      subcategories: [
        {
          name: 'Node.js',
          description: 'Express, NestJS, Fastify, Koa, Hapi, Socket.io, Passport, JWT, bcrypt, Multer, Nodemailer, etc.'
        },
        {
          name: 'Python',
          description: 'Django, Flask, FastAPI, SQLAlchemy, Celery, Pytest, Poetry, etc.'
        },
        {
          name: 'Java',
          description: 'Spring Boot, Spring Security, Hibernate, Maven, Gradle, JUnit, etc.'
        },
        {
          name: 'Databases',
          description: 'PostgreSQL, MongoDB, MySQL, Redis, Elasticsearch, etc.'
        }
      ],
      frameworks: [
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
        { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' }
      ]
    },
    'Mobile': {
      subcategories: [
        {
          name: 'React Native',
          description: 'Cross-platform mobile development with React Native, Expo, React Navigation, etc.'
        },
        {
          name: 'Flutter',
          description: 'Cross-platform mobile development with Flutter, Dart, Firebase, etc.'
        },
        {
          name: 'Native iOS',
          description: 'Swift, SwiftUI, UIKit, Core Data, Xcode, etc.'
        },
        {
          name: 'Native Android',
          description: 'Kotlin, Java, Jetpack Compose, Android Studio, etc.'
        }
      ],
      frameworks: [
        { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
        { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
        { name: 'iOS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        { name: 'Xamarin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
        { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' }
      ]
    },
    'Clouds': {
      subcategories: [
        {
          name: 'AWS',
          description: 'EC2, S3, Lambda, RDS, CloudFormation, Elastic Beanstalk, etc.'
        },
        {
          name: 'Azure',
          description: 'App Service, Functions, SQL Database, Storage, DevOps, etc.'
        },
        {
          name: 'Google Cloud',
          description: 'Compute Engine, Cloud Functions, Cloud Storage, BigQuery, etc.'
        },
        {
          name: 'DevOps',
          description: 'Docker, Kubernetes, Jenkins, GitLab CI/CD, GitHub Actions, etc.'
        }
      ],
      frameworks: [
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'GCP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    },
    'ERP & CRM': {
      subcategories: [
        {
          name: 'SAP',
          description: 'SAP ERP, SAP HANA, SAP Fiori, SAP UI5, ABAP, etc.'
        },
        {
          name: 'Salesforce',
          description: 'Sales Cloud, Service Cloud, Marketing Cloud, Apex, Lightning, etc.'
        },
        {
          name: 'Microsoft Dynamics',
          description: 'Dynamics 365, Power Platform, PowerApps, Power BI, etc.'
        }
      ],
      frameworks: [
        { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
        { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
        { name: 'Microsoft', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg' }
      ]
    },
    'Other': {
      subcategories: [
        {
          name: 'Data Science',
          description: 'Python, R, Pandas, NumPy, Matplotlib, Seaborn, Jupyter, etc.'
        },
        {
          name: 'Machine Learning',
          description: 'TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV, etc.'
        },
        {
          name: 'Blockchain',
          description: 'Ethereum, Solidity, Web3.js, Truffle, Hardhat, etc.'
        }
      ],
      frameworks: [
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' }
      ]
    }
  }

  return (
    <section className="py-20 bg-white" id="technologies">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            className="text-7xl font-light text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technologies
          </motion.h2>
          
          <Link to="/technologies" className="text-gray-700 font-medium hover:text-primary transition-colors underline underline-offset-8">
            All technologies
          </Link>
        </div>

        <div className="border-b border-gray-200 mb-12">
          <nav className="flex space-x-8">
            {Object.keys(technologies).map((tab) => (
              <button
                key={tab}
                className={`py-4 px-1 relative font-medium text-base transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary -mb-px'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <motion.div
          key={activeTab}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Side - Technology Subcategories */}
          <div className="space-y-6">
            {technologies[activeTab].subcategories.map((subcategory, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-100 pb-6 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {subcategory.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {subcategory.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Technology Icons Grid */}
          <div className="grid grid-cols-6 gap-6">
            {technologies[activeTab].frameworks.map((framework, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center justify-center p-2 hover:opacity-75 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-12 h-12 mb-2 flex items-center justify-center">
                  <img 
                    src={framework.logo} 
                    alt={framework.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg items-center justify-center text-white font-bold text-sm hidden"
                  >
                    {framework.name.charAt(0)}
                  </div>
                </div>
                <span className="text-xs text-gray-700 text-center font-medium leading-tight">
                  {framework.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies