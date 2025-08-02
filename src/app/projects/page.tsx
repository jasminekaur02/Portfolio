"use client";
import { useState } from 'react';
import Link from 'next/link';

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Categories for the filter bar
    const categories = ['All', 'UI UX', 'FrontEnd', 'BackEnd', 'Machine Learning and AI', 'Robotics', 'Electronics'];

    // Complete portfolio items
    const portfolioItems = [
        {
            id: 1,
            title: "E2ACON2025",
            description: "International Conference on Electrical, Electronics, and Automation",
            image: "Screenshot 2024-10-02 224936.png",
            link: "https://e2acon25.vercel.app/",
            categories: ["FrontEnd", "UI UX"],
            type: "Website",
            technologies: ["React", "Next.js", "Tailwind CSS"],
            status: "Live"
        },
        {
            id: 2,
            title: "Extractopus",
            description: "A platform to help users find professionals based on their location and requirements.",
            image: "Screenshot 2024-10-02 225204.png",
            link: "https://extractopus.com/",
            categories: ["FrontEnd"],
            type: "Website",
            technologies: ["React", "Node.js", "MongoDB"],
            status: "Live"
        },
        {
            id: 3,
            title: "Instibuzz",
            description: "Designed 20+ screens with features as per client requirement",
            image: "Screenshot 2024-10-02 225319.png",
            link: "https://www.instibuzz.com/",
            categories: ["Website Design", "UI UX", "App Design"],
            type: "Web Design",
            technologies: ["Figma", "Adobe XD", "React"],
            status: "Live"
        },
        {
            id: 4,
            title: "Gurbani AI",
            description: "End-to-end chatbot for Sikh religious queries",
            image: "gurbani.png",
            link: "#",
            categories: ["FrontEnd", "Machine Learning and AI"],
            type: "Website",
            technologies: ["Python", "TensorFlow", "React", "Flask"],
            status: "In Development"
        },
        {
            id: 5,
            title: "DevAngel Landing Page",
            description: "Clean and intuitive interface for SAAS tools",
            image: "Screenshot 2025-08-02 005835.png",
            link: "https://thedevangel.com/",
            categories: ["FrontEnd"],
            type: "Website",
            technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
            status: "Completed"
        },
        {
            id: 6,
            title: "The Black Company",
            description: "Comprehensive dashboard for online store management",
            image: "blackcompany.png",
            link: "https://the-black-company.vercel.app/",
            categories: ["BackEnd"],
            type: "Website",
            technologies: ["Node.js", "Express", "MongoDB", "React"],
            status: "Live"
        },
        {
            id: 7,
            title: "ASL Detector",
            description: "ASL recognition is the process of identifying and understanding American Sign Language gestures and translating them into spoken language or text",
            image: "Screenshot 2025-08-02 005626.png",
            link: "#",
            categories: ["Machine Learning and AI"],
            type: "ML",
            technologies: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
            status: "Completed"
        },
        {
            id: 8,
            title: "TrustLink",
            description: "Unified RFID, AI, and Blockchain Solution",
            image: "Screenshot 2025-07-14 221656.png",
            link: "#",
            categories: ["FrontEnd"],
            type: "Website",
            technologies: ["React", "Blockchain", "RFID", "AI"],
            status: "In Development"
        },
        {
            id: 9,
            title: "Curvetopia",
            description: "Deep Learning model to beautify irregular 2D curves, restore symmetry, and perform curve completion",
            image: "CURVE.png",
            link: "#",
            categories: ["Machine Learning and AI"],
            type: "ML",
            technologies: ["Python", "PyTorch", "NumPy", "Matplotlib"],
            status: "Completed"
        },
        {
            id: 10,
            title: "Temperature and Humidity Measuring Device with Bluetooth",
            description: "Used DHT11 and ESP32 to measure and transmit real-time data over Bluetooth.",
            image: "temp.png",
            link: "#",
            categories: ["Electronics"],
            type: "Electronics",
            technologies: ["ESP32", "DHT11", "Bluetooth", "Arduino IDE"],
            status: "Completed"
        },
        // Add more projects here as needed
        ,
        {
            id: 11,
            title: " Speed Measuring Device",
            description: " Designed with Arduino, HC-SR04 ultrasonic sensor, and LED display to detect object speed",
            image: "speed.png",
            link: "#",
            categories: ["Electronics"],
            type: "Electronics",
            status: "Completed"
        },
        {
            id: 12,
            title: " Line Following Bot",
            description: " Created a robot using Arduino, IR sensors, servo motors, and LiPo battery to follow line paths",
            image: "line.png",
            link: "#",
            categories: ["Electronics"],
            type: "Electronics",
            status: "Completed"
        },
        {
            id: 12,
            title: " Lab Assistant Robot ",
            description: " Building a LiDAR and ROS-powered robot for autonomous navigation with path planning",
            image: "bot.png",
            link: "#",
            categories: ["Robotics"],
            type: "Electronics",
            status: "In Development"
        }
    ];

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.categories.includes(activeCategory));

    // Get status color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Live':
                return 'bg-green-100 text-green-700';
            case 'In Development':
                return 'bg-blue-100 text-blue-700';
            case 'Completed':
                return 'bg-purple-100 text-purple-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/" className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Link>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
                                All Projects
                            </h1>
                            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
                                Explore my complete portfolio of projects spanning web development, AI/ML, electronics, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">{portfolioItems.length}</div>
                        <div className="text-gray-600 text-sm">Total Projects</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                            {portfolioItems.filter(p => p.status === 'Live').length}
                        </div>
                        <div className="text-gray-600 text-sm">Live Projects</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            {portfolioItems.filter(p => p.status === 'In Development').length}
                        </div>
                        <div className="text-gray-600 text-sm">In Development</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {categories.length - 1}
                        </div>
                        <div className="text-gray-600 text-sm">Categories</div>
                    </div>
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
                            <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                                {category === 'All' 
                                    ? portfolioItems.length 
                                    : portfolioItems.filter(item => item.categories.includes(category)).length
                                }
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="relative">
                                        {/* Project Link */}
                                        <a href={project.link !== '#' ? project.link : undefined} 
                                           target={project.link !== '#' ? "_blank" : undefined} 
                                           rel={project.link !== '#' ? "noopener noreferrer" : undefined}
                                           className={project.link === '#' ? 'cursor-default' : 'cursor-pointer'}>
                                            
                                            {/* Project Image */}
                                            <div className="relative overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
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
                                                
                                                {/* Status Badge */}
                                                <div className="absolute top-4 right-4">
                                                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                                
                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                                
                                                {/* View Project Button */}
                                                {project.link !== '#' && (
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                            View Project
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </a>
                                        
                                        {/* Project Info */}
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                                                    {project.type}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                            
                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies?.slice(0, 3).map((tech, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies?.length > 3 && (
                                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                        +{project.technologies.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                            
                                            {/* Categories */}
                                            <div className="flex flex-wrap gap-1">
                                                {project.categories.slice(0, 2).map((category, index) => (
                                                    <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                                                        {category}
                                                    </span>
                                                ))}
                                                {project.categories.length > 2 && (
                                                    <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                                                        +{project.categories.length - 2}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Results Summary */}
                        <div className="text-center">
                            <p className="text-gray-600">
                                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                                {activeCategory !== 'All' && ` in ${activeCategory}`}
                            </p>
                        </div>
                    </>
                ) : (
                    /* No projects message */
                    <div className="text-center py-16">
                        <div className="text-gray-400 mb-4">
                            <span className="text-6xl">🎨</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            No projects found
                        </h3>
                        <p className="text-gray-500 mb-6">
                            No projects available in the "{activeCategory}" category yet.
                        </p>
                        <button 
                            onClick={() => setActiveCategory('All')}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
                        >
                            View All Projects
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;