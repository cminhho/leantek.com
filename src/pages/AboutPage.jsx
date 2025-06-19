import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { ArrowTrendingUpIcon, ArrowPathIcon, EyeIcon, UsersIcon } from '@heroicons/react/24/solid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const AboutPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Update page title
    document.title = 'About Us - Leantek2'
  }, [])

  const stats = [
    { 
      number: "6+", 
      label: "years of expertise",
      description: "A considerable experience in the IT market allows our company to leverage a rich technological and business management expertise to complete projects of various complexity levels most efficiently and quickly."
    },
    { 
      number: "20+", 
      label: "IT professionals",
      description: "LeanTek is constantly increasing the number of highly qualified IT specialists in-house. Besides developers, our team consists of business analysts, UI/UX designers, QA specialists, and DevOps engineers."
    },
    { 
      number: "10+", 
      label: "domains",
      description: "Over the years, our team has accumulated extensive experience with numerous technology and business domains. We select specialists for projects based on their experience in the relevant industry."
    },
    { 
      number: "93%", 
      label: "recurring customers",
      description: "We focus on excellence and adhere to high standards, clean code, and user-centered solutions. Our customers appreciate effective delivery, come back with new projects, and recommend our services to other partners."
    },
    { 
      number: "300+", 
      label: "delivered projects",
      description: "As a software development company, LeanTek creates a wide range of applications for achieving various business goals."
    },
    { 
      number: "30+", 
      label: "customers from 60+ countries",
      description: "We are supporters of a customer-oriented approach and position our relationships with clients as professionals for professionals."
    }
  ]

  const technologies = [
    "Java", "Python", "JavaScript", "React", "Angular", "Vue.js", "Node.js", "AWS", ".NET", "PHP", "Go", "TypeScript"
  ]
  
  const whyLeantek = [
    {
      title: "Result-Oriented",
      description: "Our success is measured by our clients' success. We focus on delivering tangible results and business value.",
      icon: "target"
    },
    {
      title: "Flexible Engagement",
      description: "We offer flexible engagement models to suit your needs, from dedicated teams to project-based work.",
      icon: "handshake"
    },
    {
      title: "Transparent Process",
      description: "We believe in open communication and full transparency throughout the development lifecycle.",
      icon: "eye"
    },
    {
      title: "Experienced Team",
      description: "Our team consists of highly skilled and experienced professionals dedicated to quality and innovation.",
      icon: "users"
    }
  ]

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "target":
        return <ArrowTrendingUpIcon className="w-8 h-8 text-red-600 mb-8" />
      case "handshake":
        return <ArrowPathIcon className="w-8 h-8 text-red-600 mb-8" />
      case "eye":
        return <EyeIcon className="w-8 h-8 text-red-600 mb-8" />
      case "users":
        return <UsersIcon className="w-8 h-8 text-red-600 mb-8" />
      default:
        return <ArrowTrendingUpIcon className="w-8 h-8 text-red-600 mb-8" />
    }
  }

  const services = [
    {
      title: "Custom Software Development",
      description: "We create custom software solutions tailored to your specific business needs and requirements."
    },
    {
      title: "Web Development",
      description: "From simple websites to complex web applications, we deliver high-quality web solutions."
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms."
    },
    {
      title: "Cloud Solutions",
      description: "Cloud-native applications and migration services to help you leverage cloud capabilities."
    }
  ]

  const availableDevelopers = [
    {
      name: "Serge K.",
      role: "Middle Xamarin Developer",
      experience: "4+ years of experience",
      description: "Software Developer with over 4 years of experience in cross-platform Xamarin development (Xamarin.Forms, Xamarin Android) and strong technical, analytical and problem solving skills.",
      technologies: ["ASP.NET MVC", "ASP.NET WebForms", "Azure", "C#", "Entity Framework", "MS SQL Server", "S+"],
      icon: "🔵"
    },
    {
      name: "Boris G.",
      role: "Middle Android Developer", 
      experience: "4+ years experience",
      description: "Middle Android Developer with deep understanding of object-oriented programming principles, software development cycle and development experience at all stages.",
      technologies: ["Android SDK", "Architecture Components", "Clean Architecture", "Dagger2", "JUnit", "Kotlin", "Z+"],
      icon: "🟢"
    },
    {
      name: "Paul K.",
      role: "Middle Android Developer",
      experience: "4+ years experience", 
      description: "Goal-driven Android developer with 4+ years experience in Android mobile applications development and comprehensive understanding of agile programming methodologies and mobile development cycle.",
      technologies: ["Android SDK", "Architecture Components", "Clean Architecture", "Dagger2", "Firebase", "Java", "G+"],
      icon: "🟢"
    },
    {
      name: "George M.",
      role: "Middle Unity Developer",
      experience: "3+ years experience",
      description: "Middle Unity Developer with successful experience in working with VR, AR and mobile projects. Good knowledge of algorithms and data structures of data, architectural design patterns.",
      technologies: ["C#", "C++", "Java", "Unity"],
      icon: "🔴"
    },
    {
      name: "Anna L.",
      role: "Senior React Developer",
      experience: "6+ years experience",
      description: "Senior React Developer with extensive experience in building scalable web applications using React, Redux, and modern JavaScript frameworks. Expert in frontend architecture and performance optimization.",
      technologies: ["React", "Redux", "TypeScript", "Node.js", "GraphQL", "AWS"],
      icon: "🔵"
    },
    {
      name: "Michael R.",
      role: "Full Stack Developer",
      experience: "5+ years experience",
      description: "Full Stack Developer with comprehensive experience in both frontend and backend technologies. Specialized in building end-to-end web applications with modern tech stacks.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"],
      icon: "🟢"
    },
    {
      name: "Elena K.",
      role: "Senior iOS Developer",
      experience: "7+ years experience",
      description: "Senior iOS Developer with deep expertise in Swift and Objective-C. Experienced in building high-performance mobile applications for iOS platform with focus on user experience and code quality.",
      technologies: ["Swift", "Objective-C", "UIKit", "Core Data", "SwiftUI", "Xcode"],
      icon: "🔴"
    },
    {
      name: "David P.",
      role: "DevOps Engineer",
      experience: "5+ years experience",
      description: "DevOps Engineer with strong background in cloud infrastructure, CI/CD pipelines, and containerization. Expert in automating deployment processes and maintaining scalable systems.",
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "Linux"],
      icon: "🔵"
    }
  ]

  const testimonials = [
    {
      quote: "Innowise was selected due to its extensive experience of developing complex medical solutions. They managed to quickly and effectively put together a team of IT-specialists. Innowise is characterized by efficient and professional organization of its operation practices.",
      author: "Dr. Udo Richter",
      position: "Director",
      company: "Naip",
      logo: "/api/placeholder/100/40"
    },
    {
      quote: "Innowise is able to implement new features faster than the internal team would be able to. Their communication is effective and solution-oriented. Overall, the speed with which they deliver quality code is wonderful.",
      author: "Kevin Day", 
      position: "Founder and President",
      company: "Trumpet",
      logo: "/api/placeholder/100/40"
    },
    {
      quote: "When it comes to handling pressure situations, Innowise has always proven their deftness in managing these situations. They do this by having clear understanding of our expected results to take our business towards growth and customer satisfaction.",
      author: "Dominik Märki",
      position: "Director", 
      company: "OneStop Pro",
      logo: "/api/placeholder/100/40"
    },
    {
      quote: "We are more than satisfied with our fruitful cooperation with Innowise, as they perform tasks in accordance with our high requirements and corporate standards and bring the desired results.",
      author: "Stefania Basciu",
      position: "Senior Manager",
      company: "Topcon", 
      logo: "/api/placeholder/100/40"
    },
    {
      quote: "They were flexible with my project management requirements, bringing on developers when we needed to double-down. The developers worked super hard, sometimes around the clock with me, to get our project done.",
      author: "Alex Friedman",
      position: "CEO",
      company: "Switchbackr Worldwide, Inc.",
      logo: "/api/placeholder/100/40"
    },
    {
      quote: "Innowise is a reliable tech partner, working as a part of our team. They are hard-working professionals, bringing strong expertise and dedication to everything they develop.",
      author: "Jeff Mallett",
      position: "CEO",
      company: "Web3 Pro",
      logo: "/api/placeholder/100/40"
    }
  ]

  return (
    // pt-32 pb-20 
    <div className="bg-black text-gray-800">
      <style jsx>{`
        .developer-swiper {
          width: 100%;
          padding: 0 !important;
          overflow: visible;
        }
        .developer-swiper .swiper-wrapper {
          align-items: stretch;
          padding-left: max(1.5rem, calc((100vw - 1280px) / 2));
        }
        .developer-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
          width: 380px !important;
        }
        .developer-swiper .swiper-slide > div {
          width: 100%;
          height: 100%;
        }
        @media (max-width: 1280px) {
          .developer-swiper .swiper-wrapper {
            padding-left: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .developer-swiper .swiper-wrapper {
            padding-left: 1rem;
          }
        }
        @media (max-width: 640px) {
          .developer-swiper .swiper-slide {
            width: 300px !important;
          }
          .developer-swiper .swiper-wrapper {
            padding-left: 1rem;
          }
        }
      `}</style>
      
      {/* Hero Section */}
      <motion.section 
        className="pt-40 pb-24 bg-gray-50 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.h1 
            className="text-4xl md:text-6xl font-light mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About us
          </motion.h1>
          <motion.hr 
              className="w-24 h-1 bg-red-500 mb-8 border-0"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We are a global software development company that provides high-end solutions for startups and enterprises.
          </motion.p>
        </div>
      </motion.section>
      
      {/* Brief facts Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Brief facts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <p className="text-5xl md:text-6xl font-light text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-lg text-gray-900 font-light mb-4">{stat.label}</p>
                  <hr className="w-full h-0.5 bg-gray-300 mb-4" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
            <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Mission and vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="">
                    <h3 className="text-2xl font-light text-red-600 mb-3">Vision</h3>
                    <p className="text-gray-600">
                        Our company's vision is fully defined by a simple but comprehensive phrase — We Develop the World.
                    </p>
                </div>
                <div className="">
                    <h3 className="text-2xl font-light text-red-600 mb-3">Mission</h3>
                    <p className="text-gray-600">
                        We develop software. We work alongside our clients to make the world a better place for everyone.
                    </p>
                </div>
                <div className="">
                    <h3 className="text-2xl font-light text-red-600 mb-3">Values</h3>
                    <p className="text-gray-600">
                        We do what we love and we do it well.<br/>
                        We take pride in our team and continuously evolve.<br/>
                        Working flexibly and openly, we get the necessary results.
                    </p>
                </div>
          </div>
        </div>
      </section>

      {/* Innowise History Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LeanTek history
          </motion.h2>

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Leantek was officially established in 2018, although the company's journey started even earlier – at a university campus where three friends decided to run their own startup following their passion towards the high-tech domain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.h2 
            className="text-4xl font-light mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Challenges we help to solve
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {/* IT Expertise Gap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500"></div>
                <h3 className="text-2xl font-light">IT expertise gap</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                We help our customers get rid of expertise and technological gaps, offering experienced teams of 
                <Link to="/services" className="text-red-500 hover:text-red-600 mx-1">
                  IT professionals
                </Link>
                to complete software development projects of any complexity.
              </p>
            </motion.div>

            {/* Cost Reduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=""
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500"></div>
                <h3 className="text-2xl font-light">Cost reduction</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                We provide IT outsourcing services and help clients around the world to optimize software development costs. Our team has all the needed expertise to carry out 
                <Link to="/services" className="text-red-500 hover:text-red-600 mx-1">
                  turnkey projects
                </Link>
                , quickly complete tasks and bring all the benefits of outsourcing.
              </p>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=""
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500"></div>
                <h3 className="text-2xl font-light">Digital transformation</h3>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">
                Our team can help you plan and implement digital transformation initiatives, covering all possible stages. We are a reliable partner on the path to digital success and business optimization.
              </p>
            </motion.div>
          </div>

          <hr className="my-12 border-gray-600"/>

          {/* Consultation Section */}
          <div className="shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Consultation" 
                  className="w-full h-[220px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-1xl font-light mb-6">Looking for a reliable IT partner to start your digital project?</h3>
                <p className="text-gray-600 text-lg mb-8">
                We can help you find the best tech solution for your business.
                </p>
                <Link 
                  to="/contact"
                  className="inline-block bg-red-500 text-white px-8 py-3 hover:bg-red-600 transition duration-300"
                >
                  Get consulted
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Leantek Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Why Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyLeantek.map((item, index) => (
              <motion.div
                key={index}
                className=""
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {renderIcon(item.icon)}
                <h3 className="text-xl font-bold text-gray-900 mb-8">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Teams
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                LeanTek brings together IT talents from CEE and Baltic regions and directs their vast expertise in technologies, industries, and technological domains to the benefit of customers.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We employ the best professionals in the industry based on the principles of fair competition and meritocracy. Thus, 100% of our employees have university degrees or are in the process of obtaining one. Also, our team has 28 PhDs and 128 MCSs.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Our company has implemented a professional development system for employees to ensure their stable horizontal and vertical growth and improve their expertise.
              </p>
            </motion.div>
            
            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://innowise.com/wp-content/uploads/2022/01/image-126.png" 
                alt="Our Team" 
                className="w-full max-w-md h-auto object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Developers Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Available developers for hire
          </motion.h2>
        </div>
        
        <div className="w-full">
          <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.25,
            }}
            grabCursor={true}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4.2,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            className="developer-swiper w-full"
          >
            {availableDevelopers.map((developer, index) => (
              <SwiperSlide key={index} className="!w-[350px]">
                <motion.div
                  className="bg-white p-6 border border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col h-full min-h-[500px] transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Header with name and icon */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">{developer.name}</h3>
                    <div className="flex items-center">
                      {developer.icon === "🔵" && <div className="w-12 h-12 bg-blue-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">X</span>
                      </div>}
                      {developer.icon === "🟢" && <div className="w-12 h-12 bg-green-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>}
                      {developer.icon === "🔴" && <div className="w-12 h-12 bg-red-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-sm font-bold">U</span>
                      </div>}
                    </div>
                  </div>
                  
                  {/* Role and experience */}
                  <div className="mb-8">
                    <p className="text-gray-800 font-semibold text-base mb-2">{developer.role}</p>
                    <p className="text-gray-500 text-sm font-medium">{developer.experience}</p>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-grow mb-8">
                    <p className="text-gray-600 text-sm leading-relaxed">{developer.description}</p>
                  </div>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {developer.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs border border-gray-200 font-medium hover:bg-gray-100 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Request CV button */}
                  <div className="mt-auto">
                    <Link 
                      to="/contact"
                      className="block w-full bg-red-500 text-white px-6 py-3 text-sm font-light hover:bg-red-600 transition-all duration-300 text-center transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Request full CV
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          
        <div className="container">
          {/* Custom Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button className="swiper-button-prev-custom w-12 h-12 bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom w-12 h-12 bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 border border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[300px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Quote Text */}
                <div className="flex-grow mb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                
                {/* Author Info */}
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-gray-900 font-semibold text-base mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500 text-sm mb-1">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                  
                  {/* Company Logo Placeholder */}
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-20 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-500 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ContactForm Section */}
      <ContactForm />
    </div>
  )
}

export default AboutPage