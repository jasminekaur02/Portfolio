// Contact.js
"use client";
import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = ({ activeSection }) => {
  return (
    <section className="flex flex-col md:flex-row h-screen bg-gray-100" id="contact">
      
      {/* Left Sidebar */}
      <div className="relative w-full md:w-1/5 bg-yellow-500 p-8 flex flex-col items-start">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">ABOUT ME</h1>
        <nav className="flex flex-col space-y-6">
          {['home', 'about', 'resume', 'portfolio', 'contact'].map((section) => (
            <div className="flex items-center" key={section}>
              <div className={`h-3 w-3 rounded-full ${activeSection === section ? 'bg-white' : 'bg-gray-400'} mr-2`}></div>
              <a href={`#${section}`} className={`text-white hover:text-yellow-300 ${activeSection === section ? 'font-bold' : ''}`}>
                {section.toUpperCase()}
              </a>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-bold mb-4">Get in touch with me!</h2>
        <p className="text-lg mb-8">You can reach me through the following methods:</p>
        <div className="flex flex-col items-center space-y-4 text-left">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-500" />
            <span className="text-lg">jasminekaurmukkar@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="text-yellow-500" />
            <span className="text-lg">+91-XXXXXXXXXX</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-yellow-500" />
            <a
              href="https://www.linkedin.com/in/jasminekaurmukkar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-700 underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <p className="mt-16 text-lg font-semibold">THANKS FOR YOUR PATIENCE!</p>
      </div>

      {/* Floating Sidebar Icons */}
      <div className="hidden md:flex flex-col space-y-6 fixed top-1/2 transform -translate-y-1/2 right-8 z-50">
        <a href="#home" className="text-yellow-500 hover:text-yellow-600">
          <FaHome size={24} />
        </a>
        <a href="#about" className="text-yellow-500 hover:text-yellow-600">
          <FaUser size={24} />
        </a>
        <a href="#portfolio" className="text-yellow-500 hover:text-yellow-600">
          <FaBriefcase size={24} />
        </a>
        <a href="#contact" className="text-yellow-500 hover:text-yellow-600">
          <FaPhone size={24} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
