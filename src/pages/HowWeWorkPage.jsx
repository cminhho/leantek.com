import { Link } from 'react-router-dom'
import { useState } from 'react'
import TableOfContentsNav from '../components/TableOfContentsNav'

const HowWeWorkPage = () => {
  // Image URLs
  const enterpriseBackgroundUrl = `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80`
  const [activeSection, setActiveSection] = useState('cooperation-models')

  // Navigation sections
  const navigationSections = [
    { id: 'cooperation-models', label: 'Cooperation models' },
    { id: 'pricing-model', label: 'Pricing model' },
    { id: 'development-process', label: 'Software development process' },
    { id: 'methodologies', label: 'Software development methodologies' },
    { id: 'security', label: 'Security' },
    { id: 'employee-policy', label: 'Employee policy' },
    { id: 'contact', label: 'Contact us' }
  ]

  // Table of Contents sections for the floating nav
  const tocSections = [
    { id: 'cooperation-models', title: 'Cooperation models' },
    { id: 'pricing-model', title: 'Pricing model' },
    { id: 'development-process', title: 'Software development process' },
    { id: 'methodologies', title: 'Software development methodologies' },
    { id: 'security', title: 'Security' },
    { id: 'employee-policy', title: 'Employee policy' },
    { id: 'contact', title: 'Contact us' }
  ]

  // Cooperation models data
  const cooperationModels = [
    {
      title: "Full process outsourcing",
      description: "LeanTek offers the full-fledged development team to work on all the stages of the software development process. We form a team depending on the specifics of the project, industry, and technology stack. Our company takes sole responsibility for team management, project risks, and final product quality while providing you with all the necessary tools for daily control over the task execution processes.",
      bestFor: "The full-service outsourcing model is the best option if you don't have your software development department, lack needed expertise, or want to concentrate on core operations."
    },
    {
      title: "IT staff augmentation",
      description: "Our company can provide fully staffed teams or individual IT professionals to contribute to your software development project under your direct management. Having a team of experienced IT experts, we help our customers enrich their in-house IT departments with our developers, QA engineers, architects, business analysts, project managers, etc.",
      bestFor: "IT staff augmentation can benefit you the most if your company needs to expand the human resource base and fill up internal team expertise."
    }
  ]

  // Pricing models data
  const pricingModels = [
    {
      title: "Time and Material",
      description: "Under the T&M model, you pay for man-hours dedicated to your project and reimburse additional expenses if they occur. The payment structure is discussed individually and most often coincides with the main stages of the project.",
      bestFor: "Time and Material is perfect for projects based on the Agile software development frameworks, as the scope of work and the team size can change.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="#DC2626" strokeWidth="3" fill="none"/>
          <path d="M32 12v20l14 8" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="2" fill="#DC2626"/>
        </svg>
      )
    },
    {
      title: "Fixed price",
      description: "Material remuneration is established during negotiations before the start of the project and is not subject to any changes. There are also tight deadlines for the scope of work and payments.",
      bestFor: "The Fixed Price model is most effective and most often applied in projects with a Waterfall software development model since there's a clear plan of project execution process that is unlikely to be altered.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="#DC2626" strokeWidth="3" fill="none"/>
          <path d="M28 22c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4h-2v4h2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M32 16v4M32 44v4" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Dedicated Team",
      description: "The model implies hiring a team of IT professionals on the monthly basis starting from 0.5 FTE (full-time equivalent). The DT model helps to avoid all the risks and additional costs related to the employee management process.",
      bestFor: "The model is the best option for long-lasting projects where you need particular IT specialists to be part of your team for a reasonable cost.",
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="20" r="8" stroke="#DC2626" strokeWidth="3" fill="none"/>
          <path d="M16 52c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#DC2626" strokeWidth="3" fill="none"/>
          <circle cx="18" cy="26" r="6" stroke="#1F2937" strokeWidth="2" fill="none"/>
          <circle cx="46" cy="26" r="6" stroke="#1F2937" strokeWidth="2" fill="none"/>
          <path d="M8 52c0-6.6 5.4-12 12-12M56 52c0-6.6-5.4-12-12-12" stroke="#1F2937" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  // Development process steps
  const developmentProcess = [
    { step: "01", title: "Requirement elicitation", description: "Our team gathers all functional requirements to estimate the project cost and scope of work." },
    { step: "02", title: "Contract negotiation", description: "We discuss all the contract terms, setting the cooperation and pricing models, deadlines, and working processes." },
    { step: "03", title: "Design and prototyping", description: "Our team creates a UI/UX design and defines the core functionality of the product." },
    { step: "04", title: "Architecture building", description: "We build preliminary solution architecture to provide a comprehensive vision of software capabilities." },
    { step: "05", title: "Iteration planning", description: "We define the objectives, tasks and deadlines for each iteration." },
    { step: "06", title: "Requirements walkthrough", description: "Our team produces detailed requirements for specific project stages or product features." },
    { step: "07", title: "Daily meetings", description: "We hold daily online meetings to monitor the stages of the software development life cycle." },
    { step: "08", title: "Coding", description: "Engineers perform the process of writing software code." },
    { step: "09", title: "Unit testing", description: "Developers test individual units of the source code for proper and efficient operation." },
    { step: "10", title: "Quality assurance", description: "QA engineers test the product for security, bugs and verifying functionality." },
    { step: "11", title: "Solution deployment", description: "DevOps engineers cover continuous integration, deployment and delivery processes." },
    { step: "12", title: "Maintenance and support", description: "We ensure the stable and continuous operation of the developed software." }
  ]

  // Methodologies data
  const methodologies = [
    {
      title: "Agile",
      description: "Agile methodology focuses on iterative development, collaboration, and flexibility. We use Scrum and Kanban frameworks to deliver working software incrementally.",
      benefits: ["Faster time to market", "Better collaboration", "Flexible to changes", "Regular feedback"],
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" stroke="#DC2626" strokeWidth="2.5" fill="none"/>
          <path d="M32 12a20 20 0 0 1 0 40 20 20 0 0 1 0-40" stroke="#1F2937" strokeWidth="2" fill="none"/>
          <path d="M44 20L48 16L44 12" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 44L16 48L20 52" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="16" r="3" fill="#DC2626"/>
          <circle cx="48" cy="32" r="3" fill="#1F2937"/>
          <circle cx="32" cy="48" r="3" fill="#DC2626"/>
          <circle cx="16" cy="32" r="3" fill="#1F2937"/>
          <text x="32" y="36" fontSize="8" fill="#1F2937" textAnchor="middle">SPRINT</text>
        </svg>
      )
    },
    {
      title: "Waterfall",
      description: "Traditional sequential approach where each phase must be completed before the next begins. Best for projects with well-defined requirements.",
      benefits: ["Clear project structure", "Detailed documentation", "Predictable timeline", "Well-defined milestones"],
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 16h12l8 8 8-8 8 8 8-8 8 8h4" stroke="#DC2626" strokeWidth="2.5" fill="none"/>
          <path d="M8 28h12l8 8 8-8 8 8 8-8 8 8h4" stroke="#1F2937" strokeWidth="2.5" fill="none"/>
          <path d="M8 40h12l8 8 8-8 8 8 8-8 8 8h4" stroke="#DC2626" strokeWidth="2.5" fill="none"/>
          <path d="M20 16v24M36 16v24M52 16v24" stroke="#1F2937" strokeWidth="1.5" strokeDasharray="2,2"/>
        </svg>
      )
    },
    {
      title: "Kanban",
      description: "Visual workflow management method that uses boards and cards to track work progress. It focuses on continuous delivery and limiting work in progress to improve efficiency.",
      benefits: ["Visual workflow", "Continuous delivery", "Flexible priorities", "Improved efficiency"],
      icon: (
        <svg className="w-12 h-12 mb-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="12" width="48" height="40" rx="2" stroke="#DC2626" strokeWidth="2.5" fill="none"/>
          <path d="M20 12v40M36 12v40" stroke="#1F2937" strokeWidth="2"/>
          <rect x="10" y="18" width="8" height="6" rx="1" fill="#DC2626"/>
          <rect x="10" y="28" width="8" height="6" rx="1" fill="#DC2626"/>
          <rect x="22" y="18" width="12" height="6" rx="1" fill="#1F2937"/>
          <rect x="22" y="28" width="12" height="6" rx="1" fill="#1F2937"/>
          <rect x="38" y="18" width="16" height="6" rx="1" fill="#DC2626"/>
          <text x="14" y="8" fontSize="6" fill="#1F2937" textAnchor="middle">TO DO</text>
          <text x="28" y="8" fontSize="6" fill="#1F2937" textAnchor="middle">DOING</text>
          <text x="46" y="8" fontSize="6" fill="#1F2937" textAnchor="middle">DONE</text>
        </svg>
      )
    }
  ]

  // Security measures
  const securityMeasures = [
    "ISO 27001 compliance",
    "GDPR compliance",
    "Secure coding practices",
    "Regular security audits",
    "Data encryption",
    "Access control management",
    "Secure development lifecycle",
    "Vulnerability assessments"
  ]

  // Employee policy points
  const employeePolicy = [
    "Continuous learning and development",
    "Flexible working arrangements",
    "Performance-based career growth",
    "Comprehensive benefits package",
    "Team building and collaboration",
    "Innovation encouragement",
    "Work-life balance",
    "Diversity and inclusion"
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Hero Section */}
      <div 
        className="relative bg-[#1E1F25] text-white py-20 mt-12 bg-cover bg-center bg-no-repeat"
        style={{
                        backgroundImage: `linear-gradient(rgba(30, 31, 37, 0.8), rgba(30, 31, 37, 0.8)), url('${enterpriseBackgroundUrl}')`
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              How we work
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Cooperating with LeanTek, you get access to advanced expertise in software development while having the opportunity to pick individual options regarding engagement models and project management methodologies. We also set great store by security compliance, corporate employee policy, and organizational governance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16">
        
        {/* Cooperation Models */}
        <section id="cooperation-models" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Cooperation models</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cooperationModels.map((model, index) => (
              <div key={index} className="py-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
                  {model.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{model.description}</p>
                <p className="text-sm text-gray-700 font-light bg-gray-100 px-4 py-2">{model.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Model */}
        <section id="pricing-model" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Pricing model</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingModels.map((model, index) => (
              <div key={index} className="py-6">
                <div className="flex flex-col items-start">
                  {model.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-8 mt-4">{model.title}</h3>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{model.description}</p>
                <p className="text-sm text-gray-700 font-light bg-gray-100 px-4 py-2">{model.bestFor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Software Development Process */}
        <section id="development-process" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Software development process</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Throughout our professional activity, we have elaborated the typical steps of the software development process. Some stages may vary depending on the specifics of the solution being developed, the chosen cooperation model, and software development methodology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((process, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 mr-3">{process.step}</span>
                  <h3 className="text-base font-semibold text-gray-900">{process.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Software Development Methodologies */}
        <section id="methodologies" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Software development methodologies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="py-6">
                <div className="flex flex-col items-start">
                  {methodology.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-8 mt-4">{methodology.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{methodology.description}</p>
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                        <span className="text-red-600 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security */}
        <section id="security" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Security</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Security is at the core of everything we do. We implement comprehensive security measures throughout the development lifecycle to protect your data and ensure compliance with industry standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="border border-gray-200 p-4 text-center">
                <p className="text-sm text-gray-700 font-medium">{measure}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Employee Policy */}
        <section id="employee-policy" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Employee policy</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our employee policy focuses on creating an environment where our team members can thrive, grow, and deliver exceptional results. We believe that happy employees create better software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {employeePolicy.map((policy, index) => (
              <div key={index} className="border border-gray-200 p-4 text-center">
                <p className="text-sm text-gray-700 font-medium">{policy}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-8">Contact us</h2>
          <div className="bg-gray-50 p-8">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ready to start your project? Book a call or fill out the form below and we'll get back to you once we've processed your request.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 mr-4 mt-1">1</span>
                    <p className="text-sm text-gray-600">Once we've received and processed your request, we'll get back to you to detail your project needs and sign an NDA to ensure confidentiality.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 mr-4 mt-1">2</span>
                    <p className="text-sm text-gray-600">After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 mr-4 mt-1">3</span>
                    <p className="text-sm text-gray-600">We'll arrange a meeting with you to discuss the offer and nail down the details.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 mr-4 mt-1">4</span>
                    <p className="text-sm text-gray-600">Finally, we'll sign a contract and start working on your project right away.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-center">
                  <Link 
                    to="/contact" 
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold transition-colors inline-block"
                  >
                    Get Started Today
                  </Link>
                  <p className="text-sm text-gray-500 mt-4">
                    Or email us directly at contact@leantek.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Table of Contents Navigation */}
      <TableOfContentsNav 
        sections={tocSections}
        title="How we work"
      />
    </div>
  )
}

export default HowWeWorkPage 