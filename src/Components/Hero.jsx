import React from "react";

export default function Hero() {
  return (
    <div className="relative rounded-br-[40px] sm:rounded-br-[60px] lg:rounded-br-[150px] overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src="hero2.jpg"
        alt="hero"
        className="h-[70vh] sm:h-[85vh] lg:h-screen w-full object-cover"
      />

      {/* 🔹 Dark Overlay - Using #1E3A8A */}
      <div className="absolute inset-0 bg-[#1E3A8A]/50"></div>

      {/* 🔹 Text Section */}
      <div className="flex flex-col items-center absolute top-12 sm:top-20 lg:top-1/2 left-5 sm:left-10 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-center px-2 sm:px-0">
        {/* Heading */}
        <h1 className="text-white font-serif text-2xl sm:text-4xl lg:text-[45px] font-bold leading-snug mx-0 lg:mx-auto whitespace-normal lg:whitespace-nowrap break-words animate-fadeInUp">
          CoWorking Space In Barakhu Islamabad
        </h1>

        {/* Yellow Line - Using #FDDC1F */}
        <div className="bg-[#FDDC1F] h-[3px] w-24 sm:w-36 lg:w-56 my-4 lg:my-6 mx-0 lg:mx-auto shadow-lg shadow-[#FDDC1F]/50 animate-fadeInUp delay-100"></div>

        {/* Paragraph */}
        <p className="text-white font-serif text-sm sm:text-lg lg:text-[20px] leading-relaxed max-w-[95%] sm:max-w-[85%] lg:max-w-[65%] mx-0 lg:mx-auto opacity-95 animate-fadeInUp delay-200">
          Dafterspace is a dynamic hub offering premium coworking spaces and fully
          equipped offices in Islamabad — fostering a community of innovators
          and empowering them to thrive. Designed for freelancers, startups, and
          remote teams, our vibrant environment encourages collaboration,
          creativity, and growth within a supportive community.
        </p>

        {/* Button - Using #007BFF */}
        <a href="/contact" className="animate-fadeInUp delay-300">
          <button className="mt-5 sm:mt-6 lg:mt-8 py-2 sm:py-2.5 lg:py-3 px-5 sm:px-7 lg:px-10 bg-[#007BFF] hover:bg-[#FDDC1F] text-white hover:text-[#1E3A8A] transition-all duration-300 rounded-lg font-semibold cursor-pointer text-sm sm:text-base lg:text-[18px] mx-0 lg:mx-auto block lg:inline-block shadow-lg hover:shadow-xl hover:scale-105 transform border-2 border-[#007BFF] hover:border-[#FDDC1F]">
            Contact Us →
          </button>
        </a>
      </div>
    </div>
  );
}
