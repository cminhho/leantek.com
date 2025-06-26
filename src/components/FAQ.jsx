import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Plus Icon SVG component
const PlusIcon = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "How do you make sure the software is high quality?",
      answer: "Our quality assurance process ensures every detail is tested thoroughly. We conduct detailed reviews and cross-checks to guarantee your software runs smoothly and meets all your requirements."
    },
    {
      question: "How long does it take to finish a project?",
      answer: "It depends on the size and complexity of the project. Smaller projects might take a few weeks, while larger ones can take months. We'll set clear deadlines together and stick to them."
    },
    {
      question: "What do your software development services cost?",
      answer: "Costs vary based on what you need, but we always provide a clear, detailed estimate upfront, so you know exactly what to expect."
    },
    {
      question: "How do you keep projects on track and on time?",
      answer: "Our software development company uses agile workflows, breaks projects into smaller sprints, and keeps you updated every step of the way. Regular check-ins and proactive problem-solving ensure we stay on schedule."
    },
    {
      question: "Do you handle all stages of software development?",
      answer: "Yes, we've got it all covered — from planning and design to development, testing, and maintenance. We'll be with you every step of the way."
    },
    {
      question: "Can you speed up project delivery?",
      answer: "Definitely! We can add more resources, streamline tasks, and focus on the priorities to deliver your project faster without cutting corners."
    },
    {
      question: "What happens after the software is launched?",
      answer: "Post-launch, we provide ongoing support, including updates, bug fixes, and performance optimization. Your software will remain secure, reliable, and ready to adapt to future needs."
    },
    {
      question: "What happens if the scope changes?",
      answer: "If the scope changes, we'll collaborate with you to reassess the project requirements, timelines, and budget. We provide detailed documentation and transparent communication to ensure the changes are implemented efficiently without compromising the project's success."
    },
    {
      question: "How do you handle IP ownership?",
      answer: "All intellectual property (IP) rights for the software we develop are transferred to you upon project completion, ensuring you have full ownership. We include this in our contracts for your peace of mind."
    }
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="faq">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.h2>

        <div className="max-w-4xl">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-4 sm:py-6 text-left flex justify-between items-center group"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-base sm:text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ 
                    rotate: openIndex === index ? 45 : 0,
                    color: openIndex === index ? '#FF0000' : '#000000'
                  }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-4 sm:pb-6">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed pr-8 sm:pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ 