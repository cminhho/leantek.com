import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState('dedicated-team')

  const services = {
    'dedicated-team': {
      title: 'Dedicated team',
      description: 'A team built around your vision, working as your in-house experts — without the overhead.',
      cards: [
        {
          title: 'Front-end developers',
          description: 'We design user-friendly interfaces that look great, load fast, and work perfectly on any device, giving your users the best experience.'
        },
        {
          title: 'Back-end developers',
          description: 'We build the systems that keep everything running smoothly — secure, scalable, and ready to handle even the most intense workloads.'
        },
        {
          title: 'Business analysts',
          description: 'Our business analysts bridge the gap between your goals and technical solutions, delivering clear requirements and strategies.'
        },
        {
          title: 'DevOps engineers',
          description: 'We simplify the way your software is built and deployed with smart tools and processes, making everything faster and more reliable.'
        },
        {
          title: 'UX/UI designers',
          description: 'We design interfaces that look great and feel even better to use, focusing on accessibility and creating experiences people love.'
        },
        {
          title: 'QA specialists',
          description: 'We test every detail to make sure your software runs smoothly, stays reliable, and works exactly as it should — without any bugs.'
        }
      ]
    },
    'custom-software': {
      title: 'Custom software development',
      description: 'Software that fits your business like a glove, solving problems and unlocking growth.',
      cards: [
        {
          title: 'Web',
          description: 'We provide end-to-end web development services, covering everything from design and architecture prototyping to coding and ongoing support.'
        },
        {
          title: 'Mobile',
          description: 'Our mobile apps focus on usability, reliability, and cross-platform compatibility, addressing challenges like low user retention and inconsistent performance.'
        },
        {
          title: 'Enterprise Software',
          description: 'We develop custom enterprise solutions that streamline operations and boost productivity.'
        },
        {
          title: 'Cloud',
          description: 'Our cloud-native solutions enhance scalability, improve collaboration, and ensure data security, solving problems like limited infrastructure and high IT costs.'
        },
        {
          title: 'Data analytics',
          description: 'Our analytics tools transform raw data into actionable insights, solving problems like siloed information, manual reporting, and decision-making delays.'
        },
        {
          title: 'Legacy modernization',
          description: 'We help transform outdated systems into efficient solutions, addressing challenges like high maintenance costs, limited scalability, and integration hurdles.'
        }
      ]
    },
    'it-consulting': {
      title: 'IT consulting & support',
      description: 'Smarter tech decisions, fewer headaches — expert advice that keeps your business running smoothly.',
      cards: [
        {
          title: 'IT audit',
          description: 'We analyze your IT systems to pinpoint inefficiencies and recommend practical solutions to optimize your operations.'
        },
        {
          title: 'IT consulting',
          description: 'We align technology with your business goals, enabling smarter investments that boost productivity and growth.'
        },
        {
          title: 'Solution architecture',
          description: 'Our solution architects design scalable, efficient systems to serve as the backbone of your digital transformation.'
        },
        {
          title: 'PoC development',
          description: 'Our software development company creates prototypes to test your ideas and refine your strategy before moving into full development.'
        },
        {
          title: 'MVP development',
          description: 'Our MVP development services help you launch quickly, gather user feedback, and adapt your product to meet market demands.'
        },
        {
          title: 'Maintenance',
          description: 'We provide ongoing maintenance to keep your software secure, reliable, and high-performing, making sure it performs well for as long as possible.'
        }
      ]
    },
    'digital-transformation': {
      title: 'Digital transformation',
      description: 'Outdated systems slow you down. We build the tools that move you forward.',
      cards: [
        {
          title: 'Enterprise resource planning',
          description: 'We build ERP systems that simplify complex operations, bring everything together, and make managing your business easier.'
        },
        {
          title: 'Customer relationship management',
          description: 'Our CRM platforms help you manage customer relationships effectively, boosting sales and marketing efficiency.'
        },
        {
          title: 'Business process management',
          description: 'We create software that automates workflows and simplifies processes, saving time and cutting operational costs.'
        },
        {
          title: 'Document & content management',
          description: 'Our content management systems streamline how you organize, share, and access information, making collaboration easier.'
        },
        {
          title: 'Data analytics and visualization',
          description: 'We build tools that let you analyze and visualize your data, helping you find patterns, plan effectively, and make informed decisions.'
        },
        {
          title: 'Human resource management',
          description: 'Our HRM software simplifies recruitment, employee management, and performance tracking, freeing up time for your HR team to focus on people.'
        }
      ]
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-0">
            Services
          </h2>
          
          <Link 
            to="/services" 
            className="text-gray-900 hover:text-red-600 transition-colors text-sm sm:text-base font-normal underline underline-offset-8"
          >
            All services
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Main services list - Left column */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-6 lg:space-y-8">
              {Object.entries(services).map(([key, service]) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`group cursor-pointer`}
                  onClick={() => setActiveService(key)}
                >
                  <h3 className={`text-xl sm:text-2xl lg:text-[24px] font-normal mb-3 lg:mb-4 transition-colors ${
                    activeService === key ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                  }`}>
                    {service.title}
                  </h3>
                  {activeService === key && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base lg:text-[16px] text-gray-600 leading-relaxed mb-4 lg:mb-6"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              <Link 
                to="/services"
                className="inline-flex items-center text-gray-900 hover:text-red-600 transition-colors mt-6 lg:mt-8"
              >
                See more
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Service cards grid - Right column */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
            <motion.div 
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            >
              {services[activeService].cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 sm:p-6 hover:bg-gray-100 transition-colors"
                >
                  <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services