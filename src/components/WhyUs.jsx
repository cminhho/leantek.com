import React from 'react'
import { motion } from 'framer-motion'

const WhyUs = () => {
  // Image URLs
  const iso27001Url = `${import.meta.env.BASE_URL}images/partners/ISO-27001.svg`
  const iso9001Url = `${import.meta.env.BASE_URL}images/partners/ISO-9001.svg`
  const googleCloudUrl = `${import.meta.env.BASE_URL}images/partners/Google-Cloud-Partner.svg`
  const awsPartnerTierUrl = `${import.meta.env.BASE_URL}images/partners/AWS-partner-tier.svg`
  const msPartnerData2Url = `${import.meta.env.BASE_URL}images/partners/MS-solutions-partners-data-2.svg`
  const msPartnerData1Url = `${import.meta.env.BASE_URL}images/partners/MS-solutions-partners-data-1.svg`
  const sapPartnerUrl = `${import.meta.env.BASE_URL}images/partners/SAP-partner.svg`
  const ibmPartnerUrl = `${import.meta.env.BASE_URL}images/partners/IBM-partner.svg`
  const frameBadgeUrl = `${import.meta.env.BASE_URL}images/partners/Frame-badge.svg`
  const benefits = [
    {
      title: "Proven commercial experience",
      description: "Our developers gain hands-on expertise by tackling real-world projects, delivering practical solutions to complex challenges."
    },
    {
      title: "Risk-proof project scoping",
      description: "We define clear, actionable plans from day one, aligning with your goals to keep projects on schedule and prevent scope creep."
    },
    {
      title: "Proactive risk management",
      description: "Our software development company spots potential risks early and addresses them quickly to keep your project moving smoothly."
    },
    {
      title: "Comprehensive reporting",
      description: "We keep you in the loop with clear, regular updates and detailed progress reports, so you're never out of the loop."
    },
    {
      title: "Dev-replacement guarantee",
      description: "If your developer isn't the right fit, we'll replace them at no cost to you, ensuring your project's success."
    },
    {
      title: "Transparent pricing",
      description: "No surprises — our pricing is upfront and detailed, guaranteeing you get fair, accurate estimates every time."
    }
  ]

  const partnerLogos = [
    {
      name: 'ISO 9001',
      image: iso27001Url
    },
    {
      name: 'ISO 27001',
      image: iso9001Url
    },
    {
      name: 'Google Cloud Partner',
      image: googleCloudUrl
    },
    {
      name: 'AWS Partner',
      image: awsPartnerTierUrl
    },
    {
      name: 'Microsoft Partner',
      image: msPartnerData2Url
    },
    {
      name: 'Salesforce Partner',
      image: msPartnerData1Url
    },
    {
      name: 'SAP Partner',
      image: sapPartnerUrl
    },
    {
      name: 'IBM',
      image: ibmPartnerUrl
    },
    {
      name: 'Databricks',
      image: frameBadgeUrl
    }
  ]

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why choose LeanTek
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-16">
          {/* Benefits List */}
          <div className="space-y-6 lg:space-y-8 col-span-1 lg:col-span-5">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="border-t border-gray-800 pt-6 lg:pt-8 first:border-t-0 first:pt-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-gray-200 text-sm sm:text-base font-normal col-span-1">{benefit.title}</h3>
                <p className="hidden sm:block text-gray-400 leading-relaxed text-xs lg:text-sm col-span-1 lg:col-span-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos Grid */}
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 items-center justify-center col-span-1 lg:col-span-3 mt-8 lg:mt-0">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-2 sm:p-3 lg:p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className="max-w-full h-10 lg:h-24 w-auto opacity-100 grayscale object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs 