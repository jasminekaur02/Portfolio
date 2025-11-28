"use client" ;
import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaDownload
} from 'react-icons/fa';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Jasmine Kaur
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                About Me
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Services
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Projects
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Testimonials
              </a>
            </nav>

            {/* Desktop Contact Button */}
            <a 
              href="#contact" 
              className="hidden lg:inline-flex bg-yellow-400 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105"
            >
              Contact Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white border-t border-gray-100`}>
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
              About Me
            </a>
            <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
              Services
            </a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
              Projects
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200">
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="inline-flex bg-yellow-400 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-200 mt-4"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16 md:pt-20 min-h-screen flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] py-8 lg:py-16">
            
            {/* Left Content */}
            <div className="flex-1 max-w-2xl text-center lg:text-left mb-12 lg:mb-0 lg:pr-12">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg md:text-xl font-medium">
                  Hi, I am
                </p>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                  Jasmine Kaur
                </h1>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-500 leading-tight">
                  Budding
                  <span className="block"> Engineer</span>
                </h2>
                
                <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
  I&apos; m a hands-on engineer who loves turning circuits, sensors, and algorithms into meaningful solutions. 
  Whether it&apos; s robotics, IoT, or edge AI, I craft embedded systems that think, adapt, and solve real-world challenges.
</p>


                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <a 
                    href="#contact" 
                    className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Hire Me
                  </a>
                  <a 
                    href="/Jasmine_Honeywell_Resume.pdf" 
                    download 
                    className="border-2 border-yellow-400 text-yellow-600 font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <FaDownload className="text-sm" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end max-w-lg lg:max-w-xl">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Blue Splash Background */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-500 to-blue-400 rounded-3xl transform -rotate-2 opacity-30"></div>
                </div>
                
                {/* Profile Image Placeholder */}
                <div className="relative z-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 overflow-hidden shadow-2xl">
  <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
    <img
      src="/profile.png"
      alt="Jasmine Kaur"
      className="w-full h-full object-cover object-top rounded-2xl"
    />
  </div>
</div>

                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-40"></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-yellow-300 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center space-x-8 py-6">
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-800 text-xl md:text-2xl transition-all duration-200 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="#" 
                className="text-pink-500 hover:text-pink-600 text-xl md:text-2xl transition-all duration-200 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="#" 
                className="text-blue-700 hover:text-blue-900 text-xl md:text-2xl transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="#" 
                className="text-blue-400 hover:text-blue-500 text-xl md:text-2xl transition-all duration-200 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="text-green-500 hover:text-green-600 text-xl md:text-2xl transition-all duration-200 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Hero;