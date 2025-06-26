import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  // Image URLs
  const iso27001Url = `${import.meta.env.BASE_URL}images/partners/ISO-27001.svg`
  const iso9001Url = `${import.meta.env.BASE_URL}images/partners/ISO-9001.svg`
  const googleCloudUrl = `${import.meta.env.BASE_URL}images/partners/Google-Cloud-Partner.svg`
  const awsPartnerTierUrl = `${import.meta.env.BASE_URL}images/partners/AWS-partner-tier.svg`
  const msPartnerData2Url = `${import.meta.env.BASE_URL}images/partners/MS-solutions-partners-data-2.svg`
  const msPartnerData1Url = `${import.meta.env.BASE_URL}images/partners/MS-solutions-partners-data-1.svg`
  const sapPartnerUrl = `${import.meta.env.BASE_URL}images/partners/SAP-partner.svg`
  const [email, setEmail] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Handle link click with scroll to top
  const handleLinkClick = () => {
    scrollToTop()
  }

  const locations = [
    { country: 'USA', phone: '+1 917 267 7727, +1 772 233 7337' },
    { country: 'UAE', phone: '+971 58 527 4499' },
    { country: 'UK', phone: '+44 7860 340 279' },
    { country: 'Germany', phone: '+49 30 520 158 80' },
    { country: 'Switzerland', phone: '+49 178 233 41 75' },
    { country: 'Austria', phone: '+49 178 233 41 75' },
    { country: 'Italy', phone: '+39 377 399 44 35' },
    { country: 'Sweden', phone: '+46 765 920 558' },
    { country: 'Poland', phone: '+48 787 027 706' }
  ]

  const services = [
    { name: 'Custom software development', link: '/services/custom-software' },
    { name: 'UX/UI design', link: '/services/ux-ui-design' },
    { name: 'Web development', link: '/services/web-development' },
    { name: 'Mobile development', link: '/services/mobile-development' },
    { name: 'QA & software testing', link: '/services/qa-testing' },
    { name: 'DevOps', link: '/services/devops' },
    { name: 'Cybersecurity', link: '/services/cybersecurity' },
    { name: 'IT staff augmentation', link: '/services/staff-augmentation' },
    { name: 'VOKA 3D Anatomy & Pathology', link: '/services/voka-3d' }
  ]

  const domains = [
    { name: 'Big data', link: '/domains/big-data' },
    { name: 'Data analytics', link: '/domains/data-analytics' },
    { name: 'Artificial intelligence', link: '/domains/ai' },
    { name: 'Cloud', link: '/domains/cloud' },
    { name: 'Blockchain', link: '/domains/blockchain' },
    { name: 'Internet of things', link: '/domains/iot' },
    { name: 'Embedded & Robotics', link: '/domains/embedded-robotics' },
    { name: 'AR & VR', link: '/domains/ar-vr' },
    { name: 'ESG', link: '/domains/esg' }
  ]

  const industries = [
    { name: 'Healthcare', link: '/industries/healthcare' },
    { name: 'Pharmaceutics', link: '/industries/pharmaceutics' },
    { name: 'Finance', link: '/industries/finance' },
    { name: 'Banking', link: '/industries/banking' },
    { name: 'Insurance', link: '/industries/insurance' },
    { name: 'eCommerce', link: '/industries/ecommerce' },
    { name: 'Education', link: '/industries/education' },
    { name: 'Manufacturing', link: '/industries/manufacturing' },
    { name: 'Logistics', link: '/industries/logistics' }
  ]

  const aboutLinks = [
    { name: 'How we work', link: '/how-we-work' },
    { name: 'Career', link: '/career' },
    { name: 'Partnership', link: '/partnership' },
    { name: 'Technologies', link: '/technologies' },
    { name: 'Design studio', link: '/design-studio' },
    { name: 'XR studio', link: '/xr-studio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Case studies', link: '/case-studies' }
  ]

  const certifications = [
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
    }
  ]

  return (
    <footer className="bg-black/85 text-white pt-20 pb-8">
      <div className="container mx-auto">
        
        <h2 className="text-3xl lg:text-4xl font-normal mb-16">
          Let<span className="text-red-500">'</span>s develop software together!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-4">
          {/* Left Column - Contact Info (1/3 width) */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <p className="text-sm text-gray-400">Vietnam</p>
              <p className="text-sm">+84 906 246 489</p>
            </div>
            <a href="mailto:contact@leantek.com" className="text-sm text-gray-400 hover:text-gray-300 block mb-8">
              contact@leantek.com
            </a>

            {/* Newsletter */}
            <div>
              <p className="text-sm mb-4 text-gray-400 font-light">Be the first to know about IT innovations and interesting case studies.</p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-4/6 p-3 bg-white text-black text-sm focus:outline-none focus:border-white"
                  required
                />
                <button type="submit" className="px-6 py-2 border border-red-500 bg-red-500 text-white hover:bg-red-600">
                  Sign up
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-8">
                By signing up you agree to our{' '}
                <Link to="/terms" className="underline hover:text-white" onClick={handleLinkClick}>Terms of use</Link>
                {' '}and{' '}
                <Link to="/privacy" className="underline hover:text-white" onClick={handleLinkClick}>Privacy Policy</Link>
                {' '}regarding the use of personal data and information.
              </p>
            </div>
          </div>

          {/* Right Column - Links and Certifications (2/3 width) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-8 mb-16">
              {/* Services */}
              <div className="sm:col-span-1">
                <h3 className="text-sm mb-6">Services</h3>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link to={service.link} className="text-sm text-gray-400 hover:text-white" onClick={handleLinkClick}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Domains */}
              <div className="sm:col-span-1">
                <h3 className="text-sm mb-6">Domains</h3>
                <ul className="space-y-3">
                  {domains.map((domain, index) => (
                    <li key={index}>
                      <Link to={domain.link} className="text-sm text-gray-400 hover:text-white" onClick={handleLinkClick}>
                        {domain.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div className="sm:col-span-1">
                <h3 className="text-sm mb-6">Industries</h3>
                <ul className="space-y-3">
                  {industries.map((industry, index) => (
                    <li key={index}>
                      <Link to={industry.link} className="text-sm text-gray-400 hover:text-white" onClick={handleLinkClick}>
                        {industry.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div className="sm:col-span-1">
                <h3 className="text-sm mb-6">About us</h3>
                <ul className="space-y-3">
                  {aboutLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.link} className="text-sm text-gray-400 hover:text-white" onClick={handleLinkClick}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-8 items-center justify-start">
              {certifications.map((cert, index) => (
                <img 
                  key={index}
                  src={cert.image} 
                  alt={cert.name} 
                  className="h-18 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-0.5 bg-gray-600 mb-6"></div>
        {/* Bottom Bar */}
  
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <Logo variant="footer" size="sm" />
            <div>
              © {currentYear} leantek. All Rights Reserved.{' '}
              <Link to="/privacy" className="hover:text-white" onClick={handleLinkClick}>Privacy Policy</Link>
              {', '}
              <Link to="/cookies" className="hover:text-white" onClick={handleLinkClick}>Cookies Policy</Link>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/company/leantek" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="https://twitter.com/leantek" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Twitter
            </a>
            <a href="https://facebook.com/leantek" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Facebook
            </a>
            <a href="https://behance.net/leantek" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer