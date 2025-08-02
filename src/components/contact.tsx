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
    <div className="max-w-7xl mx-auto px-4 py-64">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-20">Hackathons</h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2 z-0" />

        {/* Points */}
        <div className="flex justify-around items-center relative z-10">
          {EVENTS.map((event, idx) => {
            const isTop = idx % 2 === 0;
            return (
              <div key={idx} className="relative w-1/4 flex flex-col items-center">
                {/* Numbered Circle */}
                <div className="z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
                  {idx + 1}
                </div>

                {/* Card */}
                <div
                  className={`absolute w-64 p-4 border border-black bg-white rounded-md shadow-md ${
                    isTop ? '-top-40' : '-bottom-40'
                  }`}
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
  );
};

export default Hackathons;
