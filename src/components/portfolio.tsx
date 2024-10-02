"use client";
import { FaHome, FaUser, FaBriefcase, FaPhone } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('portfolio');

    // Constant array for portfolio items
    const portfolioItems = [
        {
            id: 1,
            title: "E2ACON2025",
            description: "International Conference on Electrical, Electronics, and Automation ",
            image: "Screenshot 2024-10-02 224936.png", // Replace with actual image path
            link: "https://e2acon25.vercel.app/", // Replace with actual project link
        },
        {
            id: 2,
            title: "Extractopus",
            description: "A platform to help users find professionals based on their locationand requirements.",
            image: "Screenshot 2024-10-02 225204.png", // Replace with actual image path
            link: "https://extractopus.com/", // Replace with actual project link
        },
        {
            id: 3,
            title: "Instibuzz",
            description: "Designed 20+ screens with features as per client requirement",
            image: "Screenshot 2024-10-02 225319.png", // Replace with actual image path
            link: "https://www.instibuzz.com/", // Replace with actual project link
        },
        // Add more items as needed
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="flex flex-col md:flex-row h-screen bg-gray-100" id="portfolio">
            {/* Left Sidebar */}
            <div className="relative w-full md:w-1/5 bg-yellow-500 p-8 flex flex-col items-start">
                <h1 className="text-2xl font-bold text-white mb-4 text-center">ABOUT ME</h1>
                <nav className="flex flex-col space-y-6">
                    <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${activeSection === 'home' ? 'bg-white' : 'bg-gray-400'} mr-2`}></div>
                        <a href="#home" className={`text-white hover:text-yellow-300 ${activeSection === 'home' ? 'font-bold' : ''}`}>HOME</a>
                    </div>
                    <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${activeSection === 'about' ? 'bg-white' : 'bg-gray-400'} mr-2`}></div>
                        <a href="#about" className={`text-white hover:text-yellow-300 ${activeSection === 'about' ? 'font-bold' : ''}`}>ABOUT ME</a>
                    </div>
                    <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${activeSection === 'resume' ? 'bg-white' : 'bg-gray-400'} mr-2`}></div>
                        <a href="#resume" className={`text-white hover:text-yellow-300 ${activeSection === 'resume' ? 'font-bold' : ''}`}>RESUME</a>
                    </div>
                    <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${activeSection === 'portfolio' ? 'bg-white' : 'bg-gray-400'} mr-2`}></div>
                        <a href="#portfolio" className={`text-white hover:text-yellow-300 ${activeSection === 'portfolio' ? 'font-bold' : ''}`}>PORTFOLIO</a>
                    </div>
                    <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${activeSection === 'contact' ? 'bg-white' : 'bg-gray-400'} mr-2`}></div>
                        <a href="#contact" className={`text-white hover:text-yellow-300 ${activeSection === 'contact' ? 'font-bold' : ''}`}>CONTACT</a>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 mb-16">
                <h2 className="text-7xl font-bold mb-16 text-center mt-16">PORTFOLIO</h2> {/* Increased margin-bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioItems.map(item => (
                        <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Sidebar Icons (optional) */}
            <div className="flex flex-col space-y-6 absolute top-1/2 transform -translate-y-1/2 right-8">
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <FaHome size={24} />
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <FaUser size={24} />
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <FaBriefcase size={24} />
                </a>
                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <FaPhone size={24} />
                </a>
            </div>
        </section>
    );
};

export default Portfolio;