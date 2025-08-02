'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const experiences = [
  {
    year: '2025',
    title: 'BEL Panchkula',
    location: 'On Site',
    description:
      'Worked under the Jammers Division; gained hands-on experience in signal interference, electronic warfare systems, and RF testing techniques.',
    image: '/bel.png',
  },
  {
    year: '2024',
    title: 'Byteoski Developers',
    location: 'Remote',
    description:
      'Led a team to develop SaaS products, building scalable web applications. Extractopus.com: Platform for locating professionals (Next.js, Tailwind CSS, PostgreSQL)',
    image: '/images/byteoski.png',
  },
  {
    year: '2023',
    title: 'Instibuzz',
    location: 'UI/UX Intern',
    description:
      'Designed interactive elements that improved user engagement, increasing visits by 20%. Created 20+ screens for Mobile/Desktop using Figma.',
    image: '/images/instibuzz.png',
  },
];

export default function ExperienceChronicle() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const sections = Array.from(containerRef.current.children);
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.offsetWidth;

    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    const ref = containerRef.current;
    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#f5f5f0] py-16 text-black font-sans">
      <div className="text-center font-bold text-5xl mb-8">Experience</div>

      <div className="flex justify-center space-x-12 mb-6 px-4 md:px-20 overflow-x-auto no-scrollbar">
        {experiences.map((exp, i) => (
          <span
            key={i}
            className={`text-3xl transition-opacity font-serif ${
              activeIndex === i ? 'text-black' : 'text-gray-400'
            }`}
          >
            {exp.year}
          </span>
        ))}
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth px-4 md:px-20 space-x-10 no-scrollbar"
      >
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="snap-center min-w-full md:min-w-[80%] bg-white shadow-xl rounded-2xl flex flex-col md:flex-row items-center gap-8 p-6 md:p-10"
          >
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src={exp.image}
                alt={exp.title}
                width={500}
                height={300}
                className="rounded-xl object-contain max-h-[300px]"
              />
            </div>
            <div className="md:w-1/2 w-full space-y-4 text-left">
              <p className="text-sm text-gray-500">{exp.year}</p>
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="italic text-gray-600">{exp.location}</p>
              <p className="text-base leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
