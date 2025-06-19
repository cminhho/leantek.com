import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState('Finance')

  const industries = [
    {
      id: 'Finance',
      title: 'Finance',
      contentTitle: 'Finance, banking, and insurance',
      description: 'We help financial institutions operate securely and efficiently, whether it\'s managing risk or ensuring smooth transactions. As an IT outsourcing company, we create financial software that streamlines workflows, boosts security, and improves user experiences.',
      benefits: [
        'Automate compliance to reduce manual reporting by 50%',
        'Strengthen fraud detection with AI-powered systems',
        'Speed up transactions with secure, real-time solutions',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'eCommerce',
      title: 'eCommerce',
      contentTitle: 'eCommerce, retail, and consumer goods',
      description: 'We build scalable eCommerce platforms that drive sales and improve customer experience. Our solutions help retailers manage inventory, process payments securely, and deliver personalized shopping experiences.',
      benefits: [
        'Increase conversion rates with optimized checkout flows',
        'Manage inventory efficiently across multiple channels',
        'Deliver personalized shopping experiences',
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Healthcare',
      title: 'Healthcare',
      contentTitle: 'Healthcare, MedTech, and pharmaceuticals',
      description: 'We develop HIPAA-compliant healthcare solutions that improve patient care and streamline medical operations. Our software helps healthcare providers manage patient data, automate workflows, and enhance service delivery.',
      benefits: [
        'Ensure HIPAA compliance and data security',
        'Streamline patient records management',
        'Improve healthcare service delivery',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Manufacturing',
      title: 'Manufacturing',
      contentTitle: 'Manufacturing',
      description: 'We create manufacturing software solutions that optimize production processes, reduce waste, and improve operational efficiency. Our systems help manufacturers automate workflows and make data-driven decisions.',
      benefits: [
        'Optimize production with real-time monitoring',
        'Reduce operational costs through automation',
        'Improve quality control processes',
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Logistics',
      title: 'Logistics',
      contentTitle: 'Logistics, supply chain, and transportation',
      description: 'We develop logistics software that streamlines supply chain operations and improves delivery efficiency. Our solutions help companies track shipments, optimize routes, and manage warehouse operations.',
      benefits: [
        'Track shipments in real-time',
        'Optimize delivery routes automatically',
        'Manage warehouse operations efficiently',
      ],
      image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Enterprise',
      title: 'Enterprise',
      contentTitle: 'Enterprise resource planning',
      description: 'Our custom solutions help businesses scale and stay flexible in changing markets. As a software development firm, we create enterprise software that automates tasks, boosts collaboration, and keeps data secure.',
      benefits: [
        'Automate workflows to increase productivity by 20%',
        'Protect sensitive data with advanced security tools',
        'Enhance collaboration with cloud-based integrations'
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'Education',
      title: 'Education',
      contentTitle: 'Education and e-learning',
      description: 'As an IT software development company, we deliver software that powers online learning, boosts engagement, and simplifies administration. With tools tailored for educators, we help create personalized learning experiences and efficient classroom management.',
      benefits: [
        'Increase engagement with gamified learning tools', 
        'Support hybrid learning with secure virtual classrooms',
        'Automate grading and attendance for admin efficiency'
      ],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ]

  const activeContent = industries.find(industry => industry.id === activeIndustry)

  return (
    <section className="py-20 bg-white" id="industries">
      <div className="container">
        <div className="flex justify-between items-baseline mb-12">
          <motion.h2
            className="text-7xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Industries we serve
          </motion.h2>
          
          <Link to="/industries" className="text-gray-700 font-medium hover:text-primary transition-colors underline underline-offset-8">
            All Industries
          </Link>
        </div>

        <div className="border-b border-gray-200 mb-12">
          <nav className="flex space-x-8">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`py-4 px-1 relative font-medium text-base transition-colors ${
                  activeIndustry === industry.id
                    ? 'text-primary border-b-2 border-primary -mb-px'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveIndustry(industry.id)}
              >
                {industry.title}
              </button>
            ))}
          </nav>
        </div>

        <motion.div
          key={activeIndustry}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">{activeContent.contentTitle}</h3>
            <p className="text-gray-600 mb-8">{activeContent.description}</p>
            
            <ul className="space-y-4">
              {activeContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 -lg overflow-hidden bg-gray-100">
              <img
                src={activeContent.image}
                alt={`${activeContent.title} industry`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Industries 