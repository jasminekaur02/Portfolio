'use client';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic
  };

  return (
    <main className="min-h-screen bg-white flex flex-col justify-between">
      {/* Contact Section */}
      <section className="flex flex-col md:flex-row p-8 md:p-16">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold leading-tight">
            Lets <br /> Get In <br /> Touch
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim
            molestie dolor commodo mauris dolor amet. Nulla pellentesque id
            pulvinar consequat eni
          </p>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
          <div>
            <label className="block font-medium">Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
          <div>
            <label className="block font-medium">Message<span className="text-red-500">*</span></label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-yellow-500"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white mt-16 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="w-6 h-6 bg-white border border-yellow-400 rounded-full"></div>
            <span className="ml-2 font-semibold text-lg">Jasmine Kaur</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Me</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Testimonials</a>
          </nav>

          <div className="mt-4 md:mt-0">
            <a href="#top" className="bg-yellow-400 text-white px-4 py-2 rounded-full font-medium hover:bg-yellow-500">
              Back To Top
            </a>
          </div>
        </div>

        <div className="text-center text-sm mt-6 text-black bg-yellow-400 py-2">
          © 2025 <span className="font-semibold">Jasmine Kaur</span> All Rights Reserved, Inc.
        </div>
      </footer>
    </main>
  );
};

export default Contact;
