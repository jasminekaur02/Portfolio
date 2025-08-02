import Image from 'next/image';

const EducationSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-8">
        {/* Section Title and Description */}
        <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Education
                    </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Here is a summary of my academic background and achievements.
          </p>
        </div>

        {/* Grid for the education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card 1 */}
          <div className="relative bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl group overflow-hidden">
            {/* Blue circles decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-100 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute -bottom-12 -right-12 w-12 h-12 rounded-full bg-blue-300 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            {/* Logo */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center relative z-10">
              <Image 
                src="/logo.png" 
                alt="University Icon" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>
            <h4 className="font-bold text-xl text-gray-800 mb-2 relative z-10">Electronics and Communication Engineering</h4>
            <p className="text-sm text-gray-600 relative z-10">Dr BR Ambedkar National Institute of Technology Jalandhar</p>
            <p className="text-sm text-gray-400 mt-1 relative z-10">2022-2026</p>
            <p className="text-sm text-gray-500 mt-2 font-semibold relative z-10">Current CGPA - 8.08</p>
          </div>

          {/* Education Card 2 */}
          <div className="relative bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl group overflow-hidden">
            {/* Blue circles decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-100 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute -bottom-12 -right-12 w-12 h-12 rounded-full bg-blue-300 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            {/* Logo */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center relative z-10">
              <Image 
                src="/image.png" 
                alt="School Icon" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>
            <h4 className="font-bold text-xl text-gray-800 mb-2 relative z-10">12th Grade (10+2)</h4>
            <p className="text-sm text-gray-600 relative z-10">Bal Bharati Public School Ludhiana - Affiliated to CBSE</p>
            <p className="text-sm text-gray-400 mt-1 relative z-10">Non Medical</p>
            <p className="text-sm text-gray-500 mt-2 font-semibold relative z-10">96.4%</p>
          </div>

          {/* Education Card 3 */}
          <div className="relative bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl group overflow-hidden">
            {/* Blue circles decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-100 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute -bottom-12 -right-12 w-12 h-12 rounded-full bg-blue-300 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            
            {/* Logo */}
            <div className="w-24 h-24 mb-6 flex items-center justify-center relative z-10">
              <Image 
                src="/image.png" 
                alt="School Icon" 
                width={80} 
                height={80} 
                className="object-contain"
              />
            </div>
            <h4 className="font-bold text-xl text-gray-800 mb-2 relative z-10">10th Grade</h4>
            <p className="text-sm text-gray-600 relative z-10">Bal Bharati Public School Ludhiana - Affiliated to CBSE</p>
            <p className="text-sm text-gray-400 mt-1 relative z-10"></p>
            <p className="text-sm text-gray-500 mt-2 font-semibold relative z-10">97.8%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;