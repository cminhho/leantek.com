# leanTek - Software Development Company Website

A modern, responsive corporate website for leanTek, a global software development company specializing in transparent, flexible, and reliable IT solutions. Built with React, Vite, and Tailwind CSS for optimal performance and user experience.

🌐 **Live Demo**: [https://cminhho.github.io/leantek.com](https://cminhho.github.io/leantek.com)  
📁 **Repository**: [https://github.com/cminhho/leantek.com](https://github.com/cminhho/leantek.com)

## ✨ Features

### Core Functionality
- **Modern Responsive Design** - Mobile-first approach with seamless desktop experience
- **Multi-page Architecture** - Complete corporate website with dedicated pages for services, industries, case studies, and more
- **Interactive Components** - Smooth animations with Framer Motion and engaging user interactions
- **Performance Optimized** - Fast loading times with Vite's build optimization
- **SEO Ready** - Proper meta tags and semantic HTML structure
- **Contact Integration** - Professional contact forms with validation

### Key Sections
- **Hero Section** - Video background with company messaging and partner certifications
- **Services Showcase** - Comprehensive display of software development services
- **Industry Solutions** - Specialized solutions for Banking, Enterprise, Finance (Buy Now Pay Later)
- **Technology Stack** - Visual representation of technologies and domains
- **Case Studies** - Portfolio of successful projects
- **Company Statistics** - Key performance metrics and achievements
- **Client Testimonials** - Social proof and customer feedback
- **FAQ Section** - Common questions and answers
- **About Us** - Company background and team information

### Technical Features
- Component-based architecture for maintainability
- React Router for seamless navigation
- Tailwind CSS for rapid styling
- Framer Motion for smooth animations
- Swiper integration for carousels
- Heroicons and React Icons for consistent iconography
- ESLint configuration for code quality

## 🛠 Tech Stack

- **Frontend Framework**: [React 18](https://reactjs.org/) - Modern JavaScript library for building user interfaces
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling with HMR
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Routing**: [React Router DOM](https://reactrouter.com/) - Declarative routing for React applications
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Carousel**: [Swiper](https://swiperjs.com/) - Modern mobile touch slider
- **Icons**: [Heroicons](https://heroicons.com/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Linting**: [ESLint](https://eslint.org/) - Code quality and consistency

## 📁 Project Structure

```
leantek.com/
├── public/
│   ├── assets/                 # Static assets
│   ├── images/                 # Image resources
│   │   ├── industries/         # Industry-specific images
│   │   ├── partners/          # Partner logos
│   │   └── tech/              # Technology icons
│   └── favicon.svg            # Site favicon
├── src/
│   ├── assets/
│   │   ├── icons/             # Custom icon components
│   │   └── tech-icons/        # Technology icons
│   ├── components/            # Reusable UI components
│   │   ├── About.jsx          # About section component
│   │   ├── CaseStudies.jsx    # Case studies showcase
│   │   ├── ContactForm.jsx    # Contact form with validation
│   │   ├── CTASection.jsx     # Call-to-action sections
│   │   ├── FAQ.jsx            # Frequently asked questions
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Hero.jsx           # Main hero section
│   │   ├── Industries.jsx     # Industries overview
│   │   ├── Logo.jsx           # Company logo component
│   │   ├── ScrollToTop.jsx    # Scroll to top functionality
│   │   ├── Services.jsx       # Services showcase
│   │   ├── Stats.jsx          # Company statistics
│   │   ├── TechnologicalDomains.jsx # Tech domains display
│   │   ├── Technologies.jsx   # Technology stack showcase
│   │   ├── Testimonials.jsx   # Client testimonials
│   │   └── WhyUs.jsx          # Value propositions
│   ├── pages/                 # Page components
│   │   ├── AboutPage.jsx      # Company about page
│   │   ├── CasesPage.jsx      # Case studies page
│   │   ├── ContactPage.jsx    # Contact information page
│   │   ├── HomePage.jsx       # Main landing page
│   │   ├── IndustriesPage.jsx # Industries overview page
│   │   ├── ServicesPage.jsx   # Services overview page
│   │   ├── TechnologiesPage.jsx # Technologies page
│   │   ├── industries/
│   │   │   ├── BankingPage.jsx # Banking solutions
│   │   │   ├── EnterprisePage.jsx # Enterprise solutions
│   │   │   └── finance/
│   │   │       └── BuyNowPayLaterPage.jsx # BNPL solutions
│   │   └── services/
│   │       └── ERPPage.jsx    # ERP solutions
│   ├── App.jsx               # Main application component
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.jsx             # Application entry point
├── .github/
│   └── workflows/           # GitHub Actions workflows
│       └── deploy.yml       # Automated deployment workflow
├── ai/                      # AI-generated design references
├── deploy.sh               # Manual deployment script
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
├── DEPLOYMENT.md           # Detailed deployment guide
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16.0.0 or later)
- **npm** (v7.0.0 or later) or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/cminhho/leantek.com.git
cd leantek.com
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The development server supports hot module replacement (HMR)

## 🔧 Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build production-ready application
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality checks

## 🏗 Building for Production

### Build Process
```bash
npm run build
```

The optimized build will be generated in the `dist/` directory with:
- Minified JavaScript and CSS
- Optimized assets
- Tree-shaken dependencies
- Production-ready configuration

### Preview Production Build
```bash
npm run preview
```

This starts a local server to preview the production build at `http://localhost:4173`

## 🌐 Routing Structure

The application uses React Router for navigation:

```
/                                    # Homepage
├── /services                        # Services overview
│   └── /services/erp               # ERP solutions
├── /industries                      # Industries overview
│   ├── /industries/enterprise      # Enterprise solutions
│   ├── /industries/banking         # Banking solutions
│   └── /industries/finance/buy-now-pay-later # Buy Now Pay Later
├── /technologies                    # Technology stack
├── /cases                          # Case studies
├── /about                          # About company
└── /contact                        # Contact information
```

## 🎨 Design & UI

- **Design System**: Custom design inspired by modern tech companies
- **Color Palette**: Professional color scheme with red accents
- **Typography**: System fonts with careful hierarchy
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Animations**: Subtle micro-interactions for enhanced UX
- **Accessibility**: Following web accessibility best practices

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### GitHub Pages (Recommended)

The project is configured for easy deployment to GitHub Pages with both manual and automatic options.

#### Quick Deploy
```bash
# Install dependencies (includes gh-pages)
npm install

# Deploy to GitHub Pages
npm run deploy
```

#### Automatic Deployment
GitHub Actions will automatically deploy when you push to the main branch. Just push your changes:
```bash
git push origin main
```

**📖 For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

### Alternative Platforms

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure redirects for SPA routing

#### Traditional Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist/` to your web server
3. Configure server to serve `index.html` for all routes

## 🤝 Contributing

1. Fork the repository from [https://github.com/cminhho/leantek.com](https://github.com/cminhho/leantek.com)
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Innowise](https://innowise.com/)
- Partner certification logos and branding
- Open source community for the amazing tools and libraries

## 📊 Repository Information

- **Repository**: [cminhho/leantek.com](https://github.com/cminhho/leantek.com)
- **Live Site**: [https://cminhho.github.io/leantek.com](https://cminhho.github.io/leantek.com)
- **Deployment**: Automated via GitHub Actions
- **Status**: Active Development

## 📞 Support

For questions, issues, or suggestions:
- Create an issue in the [GitHub repository](https://github.com/cminhho/leantek.com/issues)
- Contact the development team
- Check the FAQ section on the website

---

**leanTek** - Transparent. Flexible. Reliable.
