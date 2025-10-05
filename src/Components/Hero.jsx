import React from "react";

export default function Hero() {
  return (
    <div className="relative rounded-br-[40px] sm:rounded-br-[60px] lg:rounded-br-[150px] overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src="hero.jpeg"
        alt="hero"
        className="h-[70vh] sm:h-[85vh] lg:h-screen w-full object-cover"
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* 🔹 Text Section */}
      <div className="absolute top-12 sm:top-20 lg:top-1/2 left-5 sm:left-10 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10 text-left lg:text-center px-2 sm:px-0">
        {/* Heading */}
        <h1 className="text-white font-serif text-2xl sm:text-4xl lg:text-[48px] font-bold leading-snug mx-0 lg:mx-auto whitespace-normal lg:whitespace-nowrap break-words">
          CoWorking Space In Islamabad
        </h1>

        {/* Orange Line */}
        <div className="bg-[#C66A28] h-[3px] w-24 sm:w-36 lg:w-56 my-4 lg:my-6 mx-0 lg:mx-auto"></div>

        {/* Paragraph */}
        <p className="text-white font-serif text-sm sm:text-lg lg:text-[20px] leading-relaxed max-w-[95%] sm:max-w-[85%] lg:max-w-[65%] mx-0 lg:mx-auto opacity-90">
          CalmKaaj is a dynamic hub offering premium coworking spaces and fully
          equipped offices in Islamabad — fostering a community of innovators
          and empowering them to thrive. Designed for freelancers, startups, and
          remote teams, our vibrant environment encourages collaboration,
          creativity, and growth within a supportive community.
        </p>

        {/* Button */}
        <a href="/contact">
          <button className="mt-5 sm:mt-6 lg:mt-8 py-2 sm:py-2.5 lg:py-3 px-5 sm:px-7 lg:px-10 bg-[#C66A28] hover:bg-[#b85e22] transition-all duration-300 text-white rounded-lg font-semibold cursor-pointer text-sm sm:text-base lg:text-[18px] mx-0 lg:mx-auto block lg:inline-block">
            Contact Us →
          </button>
        </a>
      </div>
    </div>
  );
}
