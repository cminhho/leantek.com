import React from 'react';

const Stats = () => {
  const stats = [
    {
      value: '10+',
      description: 'years in IT'
    },
    {
      value: '200+',
      description: 'IT professionals on board'
    },
    {
      value: '93%',
      description: 'recurring customers'
    },
    {
      value: '300+',
      description: 'successful projects'
    }
  ];

  return (
    <section className="bg-[#1C1C1C] py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {stats.slice(0, 4).map((stat, index) => (
            <div key={index} className="bg-[#2A2A2A] p-14 -lg">
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end mb-12">
          <a href="/about" className="text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
            About us
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="text-gray-400 space-y-6 max-w-4xl font-light">
          <p>
            As a leading software development company, we've spent over a decade helping businesses around the 
            globe tackle real challenges with smart, effective software solutions. From North America to Europe, Asia 
            and Australia, our clients trust us to make their ideas a reality – whether they're startups breaking new 
            ground or global enterprises streamlining operations and scaling confidently.
          </p>
          <p>
            We're with you every step of the way – from initial consulting to development and ongoing support. Our 
            process is simple: we listen to you, agree, create a strategy tailored to your needs, and deliver software 
            that delivers real, measurable results. No unnecessary extras, just solutions that work for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;