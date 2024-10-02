import { FaHome, FaUser, FaBriefcase, FaPhone } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="flex h-screen">
            {/* Left content */}
            <div className="flex-1 bg-white p-8 flex items-center justify-center">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold text-black">HI THERE!</h1>
                    <h2 className="text-5xl font-extrabold text-yellow-500">I'M JASMINE KAUR</h2>
                    <h3 className="text-2xl text-gray-600 pt-3">BUDDING SOFTWARE ENGINEER</h3>
                    <p className='pt-5'>Growing up in a family rooted in medicine, I’ve always been fascinated by the intersection of healthcare and technology. This curiosity eventually led me to pursue tech at NIT Jalandhar. From exploring the nuances of UI/UX design to diving deep into full-stack development, I love taking on new challenges and transforming innovative ideas into reality through code. My passion for continuous learning even guided me into Machine Learning for projects because pushing myself with new challenges is what excites me. When I’m not busy coding, you’ll probably find me on the basketball court, lost in a good novel, or creating a new painting. Life is about balance, and for me, that’s a blend of tech, creativity, and staying active!</p>
                    <a href="#about" className="mt-6 inline-block bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-400">
                        MORE ABOUT ME
                    </a>
                </div>
            </div>

            {/* Right content with full-height image */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center">
                <img 
                    src="/profile.png" // Adjust the image path as needed
                    alt="Jasmine's profile" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Sidebar Icons */}
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

export default Hero;