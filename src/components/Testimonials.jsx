import { useState } from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      rating: 5.0,
      quote: "The team managed to delve into the project core quickly. The workflow has been seamless so far, everything is always in a well-organized and timely manner. All crew members we have been working with so far are capable, cooperative, and responsive.",
      author: "James Odom",
      title: "CEO",
      company: "Paycheck Decentralized Finance",
      logo: "https://www.paycheck.finance/logo.svg"
    },
    {
      rating: 5.0,
      quote: "leantek has successfully delivered the client's MVP, marking the project's success. The team has offered excellent project management, as they're highly efficient and always deliver on time. Overall, their passion and depth of expertise are outstanding.",
      author: "Tim Benedict",
      title: "CTO",
      company: "Viteus",
      logo: "https://viteus.com/logo.svg"
    }
  ]

  // Default company logo placeholder
  const getCompanyLogo = (testimonial) => {
    if (testimonial.logo) {
      return testimonial.logo;
    }
    // Generate a simple letter-based logo as fallback
    const firstLetter = testimonial.company.charAt(0).toUpperCase();
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#6B7280"/>
        <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="bold">${firstLetter}</text>
      </svg>
    `)}`;
  }

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What our customers think
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description Column */}
          <motion.div
            className="lg:pr-8 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
              Our clients trust us because we treat their products like our own. We focus on their business goals, building solutions that truly meet their needs — not just delivering features.
            </p>
            <div>
              <img 
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                alt="Google Reviews" 
                className="h-5 sm:h-6"
              />
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-xs sm:text-sm text-gray-600">4.9 • 127 REVIEWS</span>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 sm:p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Rating */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <img 
                    src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                    alt="Google"
                    className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                  />
                  <div className="flex items-center">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600 text-sm sm:text-base">{testimonial.rating}</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">{testimonial.author}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.title}, {testimonial.company}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <img 
                      src={getCompanyLogo(testimonial)}
                      alt={`${testimonial.company} logo`}
                      className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                      onError={(e) => {
                        // Fallback to generated logo if image fails to load
                        const firstLetter = testimonial.company.charAt(0).toUpperCase();
                        e.target.src = `data:image/svg+xml,${encodeURIComponent(`
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="8" fill="#6B7280"/>
                            <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="18" font-weight="bold">${firstLetter}</text>
                          </svg>
                        `)}`;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials