import React from 'react'
import { motion } from 'framer-motion'

const WhyUs = () => {
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
    // Cloud & Infrastructure Partners
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      alt: "AWS Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      alt: "Google Cloud Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      alt: "Microsoft Azure Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker Certified"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      alt: "Kubernetes Certified"
    },
    
    // Development Technologies
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java Experts"
    },

    // Database & Backend
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      alt: "Redis Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL Partner"
    },

    // DevOps & Tools
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      alt: "Jenkins"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
      alt: "GitLab Partner"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub Partner"
    },

    // Mobile & Frontend
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      alt: "Flutter Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      alt: "iOS Development"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      alt: "Android Development"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      alt: "Vue.js Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      alt: "Angular Experts"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js Experts"
    }
  ]

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-7xl font-light text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why choose LeanTek
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-8 gap-16">
          {/* Benefits List */}
          <div className="space-y-8 col-span-5">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="border-t border-gray-800 pt-8 first:border-t-0 first:pt-0 grid grid-cols-3 gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-gray-200 text-base font-normal col-span-1">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base col-span-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-4 gap-8 items-center col-span-3">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-w-full h-12 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
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