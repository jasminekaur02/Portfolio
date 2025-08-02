"use client";
import { useState } from 'react';
import Link from 'next/link';

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Categories for the filter bar
    const categories = ['All', 'UI UX', 'FrontEnd', 'BackEnd', 'Machine Learning and AI', 'Robotics' , 'Electronics'];

    // Portfolio items with multiple categories
    const portfolioItems = [
        {
            id: 1,
            title: "E2ACON2025",
            description: "International Conference on Electrical, Electronics, and Automation",
            image: "Screenshot 2024-10-02 224936.png",
            link: "https://e2acon25.vercel.app/",
            categories: ["FrontEnd", "UI UX"],
            type: "Website"
        },
        {
            id: 2,
            title: "Extractopus",
            description: "A platform to help users find professionals based on their location and requirements.",
            image: "Screenshot 2024-10-02 225204.png",
            link: "https://extractopus.com/",
            categories: ["FrontEnd"],
            type: "Website"
        },
        {
            id: 3,
            title: "Instibuzz",
            description: "Designed 20+ screens with features as per client requirement",
            image: "Screenshot 2024-10-02 225319.png",
            link: "https://www.instibuzz.com/",
            categories: ["Website Design", "UI UX", "App Design"],
            type: "Web Design"
        },
        {
            id: 4,
            title: "Gurbani AI ",
            description: "End-to-end chatbot for Sikh religious queries",
            image: "gurbani.png",
            link: "#",
            categories: ["FrontEnd", "Machine Learning and AI"],
            type: "Website"
        },
        {
            id: 5,
            title: "DevAngel Landing Page",
            description: "Clean and intuitive interface for SAAS tools",
            image: "Screenshot 2025-08-02 005835.png",
            link: "https://thedevangel.com/",
            categories: ["FrontEnd"],
            type: "Website"
        },
        {
            id: 6,
            title: "The Black Company ",
            description: "Comprehensive dashboard for online store management",
            image: "blackcompany.png",
            link: "https://the-black-company.vercel.app/",
            categories: ["BackEnd"],
            type: "Website"
        },
        {
            id: 7,
            title: "ASL Detector",
            description: "ASL recognition is the process of identifying and understanding American Sign Language gestures and translating them into spoken language or text",
            image: "Screenshot 2025-08-02 005626.png",
            link: "#",
            categories: ["Machine Learning and AI"],
            type: "ML"
        },
        {
            id: 8,
            title: "TrustLink",
            description: "Unified RFID, AI, and Blockchain Solution",
            image: "Screenshot 2025-07-14 221656.png",
            link: "#",
            categories: ["FrontEnd"],
            type: "Website"
        },
        {
            id: 9,
            title: "Curvetopia",
            description: "Deep Learning model to beautify irregular 2D curves, restore symmetry, and perform curve completion",
            image: "CURVE.png",
            link: "#",
            categories: ["Machine Learning and AI"],
            type: "ML"
        },
        {
            id: 10,
            title: "Temperature and Humidity Measuring Device with Bluetooth",
            description: "Used DHT11 and ESP32 to measure and transmit real-time data over Bluetooth.",
            image: "temp.png",
            link: "#",
            categories: ["Electronics"],
            type: "Electronics"
        },
        {
            id: 11,
            title: " Speed Measuring Device",
            description: " Designed with Arduino, HC-SR04 ultrasonic sensor, and LED display to detect object speed",
            image: "speed.png",
            link: "#",
            categories: ["Electronics"],
            type: "Electronics"
        },
        {
            id: 12,
            title: " Line Following Bot",
            description: " Created a robot using Arduino, IR sensors, servo motors, and LiPo battery to follow line paths",
            image: "line.png",
            link: "#",
            categories: ["Electronics"],
            type: "Electronics"
        }
    ];

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.categories.includes(activeCategory));

    // Show only first 6 projects
    const displayedProjects = filteredProjects.slice(0, 6);
    const hasMoreProjects = filteredProjects.length > 6;

    return (
        <section className="py-20 bg-gray-50" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        My Projects
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        My digital Playground : where ideas come to life.
                    </p>
                </div>

                {/* Category Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-yellow-400 text-black shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 shadow-md'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid - Only showing first 6 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback gradient background
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const nextSibling = target.nextSibling as HTMLElement;
                                            if (nextSibling) {
                                                nextSibling.style.display = 'flex';
                                            }
                                        }}
                                    />
                                    {/* Fallback gradient */}
                                    <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 hidden items-center justify-center">
                                        <div className="text-white text-center">
                                            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <span className="text-2xl">🎨</span>
                                            </div>
                                            <p className="font-medium">{project.title}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                    
                                    {/* View Project Button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            View Project
                                        </button>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                                            {project.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Show More Button - Only show if there are more than 6 projects */}
                {hasMoreProjects && (
                    <div className="text-center mt-12">
                        <Link href="/projects">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
                                <span>Show More Projects</span>
                                <svg 
                                    className="w-5 h-5 ml-2" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </Link>
                        <p className="text-gray-500 mt-4 text-sm">
                            Showing 6 of {filteredProjects.length} projects in {activeCategory === 'All' ? 'all categories' : activeCategory}
                        </p>
                    </div>
                )}

                {/* Show message if no projects in category */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <span className="text-6xl">🎨</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            No projects found
                        </h3>
                        <p className="text-gray-500">
  No projects available in the &quot;{activeCategory}&quot; category yet.
</p>
                    </div>
                )}

                {/* Project Count - Only show if 6 or fewer projects and not empty */}
                {!hasMoreProjects && filteredProjects.length > 0 && (
                    <div className="text-center mt-12">
                        <p className="text-gray-600">
                            {filteredProjects.length === 1 ? 'Showing 1 project' : `Showing all ${filteredProjects.length} projects`}
                            {activeCategory !== 'All' && ` in ${activeCategory}`}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;