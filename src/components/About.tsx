"use client";
import { FaHome, FaUser, FaBriefcase, FaPhone } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const About = () => {
    const [activeSection, setActiveSection] = useState('about');

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
        <section className="flex flex-col md:flex-row h-screen bg-gray-100" id="about">
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
            <div className="flex-1 p-8">
                {/* Education Section */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold">EDUCATION</h3>
                    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
                        <h4 className="font-bold text-yellow-500">Electronics and Communication engineering</h4>
                        <p>Dr BR Ambedkar National Institute of Technology Jalandhar </p>
                        <p>2022-2026</p>
                        <p>Current CGPA - 8.07</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
                        <h4 className="font-bold text-yellow-500">10th +2</h4>
                        <p>Bal Bharati Public School Ludhiana - Affiliated to CBSE</p>
                        <p>96.4% - Non Medical</p>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h4 className="font-bold text-yellow-500">10th</h4>
                        <p>Bal Bharati Public School Ludhiana - Affiliated to CBSE</p>
                        <p>97.8%</p>
                    </div>
                </div>

                {/* Experience Section */}
                <div>
                    <h3 className="text-2xl font-semibold">EXPERIENCE</h3>
                    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
                        <h4 className="font-bold text-yellow-500">Instibuzz</h4>
                        <p className='font-semibold'>UI/UX Designer REMOTE</p>
                        <ul>Developed user-friendly interfaces and improved user experience for the company’s online platform</ul>
                        <ul>Designed 20+ screens with features as per client’s requirement for both Mobile and Desktop View on Figma</ul>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h4 className="font-bold text-yellow-500">Byteoski Developers</h4>
                        <p className='font-semibold'>SWE INTERN REMOTE</p>
                        <ul>Developed SaaS products with a team of 12+ members using Next.js and Tailwind CSS</ul>
                    </div>
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

export default About;