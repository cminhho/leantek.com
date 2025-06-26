import { useState } from 'react'
import { motion } from 'framer-motion'

const TechnologicalDomains = () => {
  const [activeTab, setActiveTab] = useState('AI')

  const domains = {
    'AI': {
      title: 'Artificial Intelligence',
      description: 'We leverage cutting-edge AI technologies to build intelligent solutions that automate processes, analyze data, and make predictions. Our AI expertise helps businesses make smarter decisions and improve operational efficiency.',
      items: [
        {
          title: 'Machine learning',
          icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4M4.93 4.93a8 8 0 0 1 11.32 11.32M19.07 19.07A8 8 0 0 1 7.75 7.75" /><path d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12" /></svg>
        },
        {
          title: 'Deep learning',
          icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M10 6.5h4m-4 11h4m-7-4v-4m11 4v-4"/></svg>
        },
        {
          title: 'Computer vision',
          icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        },
        {
          title: 'Natural language processing',
          icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        },
        {
          title: 'Natural language understanding',
          icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        },
        {
          title: 'Generative AI',
          icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4Z"/></svg>
        }
      ]
    },
    'Process automation': {
      title: 'Process Automation',
      items: [
        { title: 'Robotic process automation', icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M8 12v4"/><path d="M16 12v4"/></svg> },
                  { title: 'Intelligent automation', icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5a5.5 5.5 0 0 0-5.12 3.04A6 6 0 0 0 6 15.5c0 3.31 2.69 6 6 6s6-2.69 6-6a6 6 0 0 0-.88-3.46A5.5 5.5 0 0 0 12 2.5Z"/><path d="M8 14h8"/><path d="m10 17 2-4 2 4"/><path d="m8 11 2-2 2 2"/><path d="m14 11 2-2 2 2"/></svg> },
        { title: 'Business process automation', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
        { title: 'Document data extraction & processing', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> },
        { title: 'Workflow orchestration', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3"></circle><circle cx="19" cy="12" r="3"></circle><circle cx="5" cy="12" r="3"></circle><circle cx="12" cy="19" r="3"></circle><path d="M12 8v8m4.5-4.5h-9"/></svg> },
        { title: 'Virtual assistance & support', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" y1="2" x2="8" y2="4"/><line x1="16" y1="2" x2="16" y2="4"/></svg> },
      ]
    },
    'Big data': {
      title: 'Big Data',
      items: [
        { title: 'Data engineering', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> },
        { title: 'Data lakes and data warehouses', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13.1a5 5 0 0 0 7.8 4.4 5 5 0 0 0 7.8-4.4c-1.3-3.4-6.3-4.4-6.3-4.4s-5 1-6.3 4.4Z"/><path d="M2 13.1C2 13.1 3 18 12 18s10-4.9 10-4.9"/><path d="M12 18v4"/></svg> },
        { title: 'Distributed data processing', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8h15c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8h-15Z"/><path d="M4.5 9.5c-2.1 0-3.8-1.7-3.8-3.8S2.4 2 4.5 2h15c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8h-15Z"/><path d="M7 16.5v3c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3"/></svg> },
        { title: 'Cloud data solutions', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="M12 12v9"/></svg> },
        { title: 'Real-time streaming analytics', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
        { title: 'Data security and compliance', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
      ]
    },
    'Embedded': {
      title: 'Embedded',
      items: [
        { title: 'Firmware development', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 7h6"/><path d="M9 12h6"/><path d="M9 17h3"/></svg> },
        { title: 'BSP and drivers development', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v9l-4-4h-3a2 2 0 0 1-2-2v-1"/></svg> },
        { title: 'PCB design', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h2v2H7z"/><path d="M15 8h2v2h-2z"/><path d="M7 14h2v2H7z"/><path d="M15 14h2v2h-2z"/><path d="M7 3v1m10-1v1m-7 17v1m4-1v1M3 7h1m-1 10h1m17-7h1m-1-4h1"/></svg> },
        { title: 'PCB manufacturing', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7h-4a3 3 0 0 0-3 3v4Z"/><path d="M19 8a3 3 0 0 0-3-3V1a7 7 0 0 0-7 7h4Z"/><path d="M12 12a5 5 0 0 0 5 5h4a7 7 0 0 0-7-7v-4a3 3 0 0 0-3 3Z"/><path d="M5 16a3 3 0 0 0 3 3v4a7 7 0 0 0 7-7h-4a5 5 0 0 0-5 5Z"/></svg> },
        { title: 'SoC design', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h4v4H7z"/><path d="M13 13h4v4h-4z"/><path d="M7 13h10v1H7z"/><path d="M13 7h1V3"/></svg> },
        { title: 'FPGA development', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg> },
      ]
    },
    'BI': {
      title: 'Business Intelligence',
      items: [
        { title: 'Data visualization and reporting', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
        { title: 'Dashboards and scorecards', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg> },
        { title: 'Data integration and ETL', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 7h-6V5a2 2 0 0 0-2-2H3v10a2 2 0 0 0 2 2h4"/><path d="m16 14 5 3-5 3v-6Z"/><path d="M14 10h7v10h-7Z"/></svg> },
        { title: 'Data governance', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg> },
        { title: 'Data analytics', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
        { title: 'Real-time business monitoring', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 2v4"/><path d="M8 2v4"/><path d="M2 11h20"/><path d="m11 16 3-3-3-3"/></svg> },
      ]
    },
    'IoT': {
      title: 'Internet of Things',
      description: 'We create connected IoT solutions that enable smart operations and data-driven decision making. Our IoT expertise spans from sensor integration to data analytics and visualization.',
      items: [
        { title: 'Connected devices', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg> },
        { title: 'Remote sensors', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><path d="M10.6 13.4c-.8-.8-.8-2 0-2.8"/><path d="M13.4 10.6c.8.8.8 2 0 2.8"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/></svg> },
        { title: 'Telematics', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3c0 .6.4 1 1 1h2"/><path d="M12 10V6.5a3.5 3.5 0 0 0-7 0V10"/><path d="M12 10h4v4h-4v-4Z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg> },
        { title: 'Smart homes', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 22V12l-4 4"/><path d="m16 16-4-4"/></svg> },
        { title: 'IIoT', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 22H2v-6l4-2 4 2 4-2 4 2 4-2Z"/><path d="M14 10h.01"/><path d="M10 10h.01"/><path d="M6 10h.01"/><path d="M18 10h.01"/><path d="M22 6V4l-2-2-2 2v2"/><path d="M18 6V4l-2-2-2 2v2"/><path d="M14 6V4l-2-2-2 2v2"/><path d="M10 6V4l-2-2-2 2v2"/></svg> },
        { title: 'IoMT', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 0-3.3-3.3l-3.3 3.3-3.3-3.3a2.4 2.4 0 0 0-3.3 3.3l3.3 3.3-3.3 3.3a2.4 2.4 0 0 0 3.3 3.3l3.3-3.3 3.3 3.3a2.4 2.4 0 0 0 3.3-3.3Z"/><path d="M12 11.5V10l-2-2-2 2v1.5"/><path d="M16 11.5V10l-2-2-2 2v1.5"/></svg> },
      ]
    },
    'Robotics': {
      title: 'Robotics',
      items: [
        { title: 'Software development', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> },
        { title: 'Firmware development', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg> },
        { title: 'Prototyping', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21 2-9.1 9.1"/><path d="M10 21v-3.5c0-.8.7-1.5 1.5-1.5H15"/><path d="M6 18H3c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"/><path d="m14 6 7.2 7.2"/><path d="M14 22c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3Z"/></svg> },
        { title: 'SLAM development', icon:  <svg className="w-full h-full" viewBox="0 t0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle><path d="M12 2v3m-5.6 1.4-2.1 2.1m13.2 0-2-2.1m-9 9.1 2.1 2.1m4.2-2.1 2.1 2.1"/></svg> },
        { title: 'Mobile robotics', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 4V2"/><path d="M12 16v-4"/></svg> },
        { title: 'AI integration', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19.4 16.6a2.4 2.4 0 0 0-3.3-3.3l-1.2 1.2a2.4 2.4 0 0 0 0 3.3 2.4 2.4 0 0 0 3.3 0Z"/></svg> },
      ]
    },
    'Blockchain': {
      title: 'Blockchain Technology',
      description: 'We develop secure and scalable blockchain solutions for various industries. From smart contracts to decentralized applications, we help businesses leverage blockchain for transparency and security.',
      items: [
        { title: 'Custom blockchain solutions', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8m-4 4V8"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg> },
        { title: 'Tokenizations', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m14 9-4 6m0-6 4 6"/></svg> },
        { title: 'Smart contracts', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg> },
        { title: 'Crypto wallets', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12H4z"/><path d="M16 16h2"/></svg> },
        { title: 'Decentralized applications', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z"/><path d="m12 4-3 4h6z"/><path d="m12 20 3-4h-6z"/><path d="m4 12 4 3v-6z"/><path d="m20 12-4 3v-6z"/></svg> },
        { title: 'Exchanges (CEX and DEX)', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3L4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg> },
      ]
    },
    'AR, VR, MR': {
      title: 'AR, VR, MR',
      items: [
        { title: 'MR apps for Apple Vision Pro', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12.5C2 8 6 4 12 4s10 4 10 8.5c0 2-1.5 3.5-4 3.5h-4C3.5 16 2 14.5 2 12.5z"/><path d="M2 13h20"/><path d="M12 16v2.5"/><path d="M12 4V2"/></svg> },
        { title: 'VR games and entertainment', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M8 12h.01M12 12h.01M16 12h.01"/><path d="M18 16V8"/><path d="M6 16V8"/></svg> },
        { title: 'VR training and learning', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="m2.6 15.1 16.8-11.2"/><path d="m19.4 3.9 1.2 5.4-5.4-1.2"/><path d="M22 17H6.5C4 17 2 15 2 12.5S4 8 6.5 8H8"/></svg> },
        { title: 'VR tours and presentations', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.1 14.2c-.2-.5-.3-1.1-.3-1.7 0-3.9 3.1-7 7-7 2.2 0 4.2.9 5.7 2.3"/><path d="M20.9 9.8c.2.5.3 1.1.3 1.7 0 3.9-3.1 7-7 7-2.2 0-4.2-.9-5.7-2.3"/><path d="M12 22v-2.5"/><path d="m4.2 19.8 1.8-1.8"/><path d="M18 18 16.2 16.2"/><path d="M12 2v2.5"/><path d="m4.2 4.2 1.8 1.8"/><path d="M18 5.8 16.2 7.6"/></svg> },
        { title: 'MR monitoring and assistance', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12H8h12"/><path d="M20 12v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M12 12V8"/><path d="M12 8a2 2 0 1 0-4 0v4"/><path d="M12 8a2 2 0 1 1 4 0v4"/></svg> },
        { title: 'AR applications', icon:  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="6" height="10" x="4" y="7" rx="2"/><rect width="6" height="10" x="14" y="7" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg> },
      ]
    }
  }

  const activeContent = domains[activeTab]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="domains">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 sm:mb-10 lg:mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technological domains
          </motion.h2>
        </div>

        <div className="border-b border-gray-200 mb-8 sm:mb-10 lg:mb-12">
          <nav className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8">
            {Object.keys(domains).map((domain) => (
              <button
                key={domain}
                className={`py-3 sm:py-4 px-2 sm:px-2 relative font-medium text-sm sm:text-base transition-colors ${
                  activeTab === domain
                    ? 'border-b-4 border-red-600 -mb-px'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(domain)}
              >
                {domain}
              </button>
            ))}
          </nav>
        </div>

        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeContent.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 sm:p-6 lg:p-8 hover:shadow-md transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-gray-600 flex-shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-10 lg:h-10">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm lg:text-lg font-light text-gray-800 line-clamp-2 sm:line-clamp-none">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologicalDomains 