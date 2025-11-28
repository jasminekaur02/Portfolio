import React from 'react';

const Hackathons = () => {
  const EVENTS = [
    {
      title: 'HackMol 4.0',
      description:
        'AyurBuddy - Developed a chatbot trained on Charak Samhita to answer health-related queries.',
    },
    {
      title: 'FlexiCraft - Runner Up',
      description: 'AI Dental Analysis of CBCTs Web App.',
    },
    {
      title: 'HackCBS 7.0',
      description: 'Ahaar - An app to reduce food wastage.',
    },
    {
      title: 'GenSolve Adobe - Top 50',
      description: 'Curvetopia - ML model for curve regularization.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-32 md:py-40 lg:py-48">
        
        {/* 👇 KEEP THIS HIGHER ABOVE TIMELINE */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-32 md:mb-40">
          Hackathons
        </h2>

        {/* Timeline container */}
        <div className="relative mt-4">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2 z-0" />

          <div className="flex flex-col md:flex-row md:justify-between items-center gap-16 relative z-10">
            {EVENTS.map((event, idx) => {
              const isTop = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center md:w-1/4"
                >
                  {/* Number */}
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-72 p-4 border border-black bg-white rounded-md shadow-md text-center md:text-left
                    md:absolute ${isTop ? 'md:-top-32' : 'md:-bottom-32'}`}
                  >
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-700">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hackathons;
