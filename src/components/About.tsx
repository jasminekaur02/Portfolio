"use client";
import { useState } from "react";
import Lottie from "lottie-react";
import devAnimation from "../lotties/dev-animation.json"; // adjust if inside components // adjust path if needed

const AboutMe = () => {
  const [bio] = useState(
    "I build things that talk, think, and work — digitally and electrically."
  );

  const [skills] = useState([
    { name: "UI/UX", percent: 92 },
    { name: "Full Stack Web Development", percent: 80 },
    { name: "Machine Learning", percent: 70 },
    { name: "Data Analysis", percent: 60 },
  ]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white py-12 px-6 md:px-20 gap-10">
      {/* Left - Lottie Animation with border */}
      <div className="relative w-[350px] h-[350px] mr-12">
        {/*
          This is the div for the blue border.
          I've adjusted the 'top' and 'left' values to move it down and to the left.
          - 'top-6' is now 'top-10' (moved down)
          - '-left-6' is now '-left-10' (moved further left)
        */}
        <div className="absolute top-4 -left-8 w-full h-full border-4 border-blue-500 z-0 rounded-3xl"></div>
        
        {/* This is the container for the Lottie animation */}
        <div className="rounded-3xl relative z-10 overflow-hidden">
          <Lottie animationData={devAnimation} loop={true} className="w-full h-full" />
        </div>
      </div>

      {/* Right - Content */}
      <div className="max-w-xl w-full">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        About Me
                    </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{bio}</p>

        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between font-semibold text-sm md:text-base">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full mt-1">
              <div
                className="h-3 bg-yellow-400 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;