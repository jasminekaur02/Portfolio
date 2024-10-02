// Hackathons.js
import React from 'react';

const Hackathons = () => {
    const hackathonItems = [
        {
            id: 1,
            name: "Hackmol 4.0",
            description: "AyurBuddy- Developed a chatbot trained on Ayurvedic ancient text- Charak Samhita to deliver responses related to health and well-being",
            sourceCodeLink: "https://github.com/jasminekaur02/Ayurbuddy-.git",
        },
        {
            id: 2,
            name: "Flexicraft",
            description: "AI Dental Analysis of CBCTS Web Application",
            sourceCodeLink: "https://github.com/jasminekaur02/DentalBuddy.git",
        },
        {
            id: 3,
            name: "Adobe Gensolve",
            description: "ML model for regularizing, completing curves and symmetry detections in images",
            sourceCodeLink: "https://github.com/Arushi-Gupta13/Curvetopia.git",
        },
    ];

    return (
        <div className="mt-16 px-4"> {/* Added padding on left and right */}
            <h2 className="text-5xl font-bold mb-8 text-center">HACKATHONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hackathonItems.map(item => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <a 
                            href={item.sourceCodeLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        >
                            View Source Code
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hackathons;