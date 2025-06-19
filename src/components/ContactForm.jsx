import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectBudget: '',
    description: '',
    voiceMessage: null,
    attachments: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      attachments: files
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const nextSteps = [
    {
      number: 1,
      text: "Once we've received and processed your request, we'll get back to you to detail your project needs and sign an NDA to ensure confidentiality."
    },
    {
      number: 2,
      text: "After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates."
    },
    {
      number: 3,
      text: "We'll arrange a meeting with you to discuss the offer and nail down the details."
    },
    {
      number: 4,
      text: "Finally, we'll sign a contract and start working on your project right away."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-7xl font-light mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact us
        </motion.h2>

        <motion.p
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#book-call" className="text-black border-b-2 border-red-500 hover:border-red-600">Book a call</a>
          {" "}or fill out the form below and we'll get back to you once we've processed your request.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm mb-2">Company*</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Corporate email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2">Phone*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectBudget" className="block text-sm mb-2">Project budget</label>
                <select
                  id="projectBudget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="10-25k">$10,000 - $25,000</option>
                  <option value="25-50k">$25,000 - $50,000</option>
                  <option value="50-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm mb-2">Describe your needs in detail*</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:border-gray-900 focus:ring-0 bg-transparent resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm mb-2">Send us a voice message</p>
                  <button
                    type="button"
                    className="w-full px-4 py-3 border border-dashed border-gray-600  flex items-center justify-center gap-2 hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor"/>
                    </svg>
                    Record
                  </button>
                </div>

                <div>
                  <p className="text-sm mb-2">Attach documents</p>
                  <label
                    htmlFor="fileUpload"
                    className="w-full px-4 py-3 border border-dashed border-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50 cursor-pointer"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                    </svg>
                    Upload file
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>

              <div className="text-sm text-gray-600">
                By clicking Send, you consent to leantek processing your personal data per our{' '}
                <a href="/privacy-policy" className="text-black hover:text-gray-700">Privacy Policy</a>
                {' '}to provide you with relevant information. By submitting your phone number, you agree that we may contact you via voice calls, SMS, and messaging apps. Calling, message, and data rates may apply.
              </div>

              <button 
                type="submit"
                className="px-12 py-3 bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 ">
              <h3 className="text-2xl font-normal mb-8">What happens next?</h3>
              <div className="space-y-8">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-8 h-8 -full border-2 border-black flex items-center justify-center font-medium">
                      {step.number}
                    </div>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            You can also send us your request to{' '}
            <a href="mailto:contact@leantek.com" className="text-red-500 hover:text-red-600">
              contact@leantek.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactForm