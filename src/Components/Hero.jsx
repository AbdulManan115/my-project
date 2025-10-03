import React from "react";

export default function Hero() {
  return (
    <div className="relative rounded-br-[50px] lg:rounded-br-[150px] overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src="hero.jpeg"
        alt="hero"
        className="h-screen w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="absolute top-10 sm:top-16 lg:top-22 left-4 sm:left-10 lg:left-16 z-10">
        {/* Heading */}
        <h1 className="text-white font-serif text-3xl sm:text-4xl lg:text-[55px] font-bold max-w-[95%] sm:max-w-[80%] lg:max-w-[70%] leading-tight">
          CoWorking Space In Islamabad
        </h1>

        {/* Orange Line */}
        <div className="bg-[#C66A28] h-[3px] w-32 sm:w-48 lg:w-64 my-6"></div>

        {/* Paragraph */}
        <p className="text-white font-serif text-base sm:text-lg lg:text-[22px] max-w-[95%] sm:max-w-[85%] lg:max-w-[65%] leading-relaxed">
          CalmKaaj is a dynamic hub offering premium coworking spaces in
          Islamabad and fully equipped offices, fostering a community of
          innovators and empowering them to thrive. CalmKaaj is a modern
          coworking space in Islamabad offering fully equipped private
          offices, shared workspaces, and flexible desk options. Designed for
          freelancers, startups, and remote teams, our vibrant environment
          empowers professionals to collaborate, innovate, and grow within a
          supportive community.
        </p>

        {/* Button */}
        <a href="/contact">

        
        <button  className="mt-6 lg:mt-9 py-2 sm:py-3 px-6 lg:px-10 bg-[#C66A28] text-white rounded-lg font-semibold cursor-pointer text-sm sm:text-base lg:text-[20px]">
          Contact Us →
        </button>
        </a>
      </div>
    </div>
  );
}
