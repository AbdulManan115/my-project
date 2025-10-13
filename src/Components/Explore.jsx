import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Explore() {
  const headingRef = useScrollAnimation();
  const dividerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const imageRef1 = useScrollAnimation();
  const imageRef2 = useScrollAnimation();
  const imageRef3 = useScrollAnimation();
  const amenitiesRef = useScrollAnimation();

  return (
    <>
      <div className="max-w-7xl mx-auto poppins-regular flex flex-col gap-6 px-4 py-10">
        {/* 🔹 Heading */}
        <h2 ref={headingRef} className="scroll-animate scroll-fadeInUp text-center w-full text-xl sm:text-2xl lg:text-[33px] font-bold font-serif pt-10 sm:pt-6 text-[#1E3A8A]">
          Explore The DafterSpace CoWorking Space
        </h2>
        <div ref={dividerRef} className="scroll-animate scroll-scaleIn scroll-delay-100 w-24 h-1 bg-[#FDDC1F] mx-auto mb-4 rounded-full"></div>

        {/* 🔹 Content Section */}
        <div ref={contentRef} className="scroll-animate scroll-fadeInLeft scroll-delay-200 flex flex-col lg:flex-row gap-6">
          {/* Left Text Section */}
          <div className="flex-1 flex flex-col gap-4 p-2 sm:p-4">
            <p className="text-base sm:text-lg font-serif text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              DafterSpace aims to unite loosely connected individuals into a
              thriving community of members, fostering their individual success
              while simultaneously enriching the collective ecosystem. Our{" "}
              <span className="font-bold text-[#007BFF] hover:text-[#1E3A8A] transition-colors duration-200 cursor-pointer">
                coworking spaces in Islamabad
              </span>
              , including various flexible office solutions, are designed to
              offer ergonomically crafted workspaces and amenities for
              professionals of all industries. Our CK facility staff members
              enable our platform for networking and collaboration – elevating
              the coworking experience to the next level.
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              DafterSpace aims to unite loosely connected individuals into a
              thriving community of members, fostering their individual success
              while simultaneously enriching the collective ecosystem. Our
              coworking spaces in Islamabad, including various flexible office
              solutions, are designed to offer ergonomically crafted workspaces
              and amenities for professionals of all backgrounds. Our CK
              facility staff members enable our platform for networking and
              collaboration – elevating the coworking experience to the next
              level.
            </p>

            {/* 🔹 Button */}
            <a
              href="/about"
              className="mt-4 self-start bg-[#007BFF] hover:bg-[#FDDC1F] text-white hover:text-[#1E3A8A] px-6 py-3 rounded-lg shadow-md text-sm sm:text-base font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-[#007BFF] hover:border-[#FDDC1F] group"
            >
              <span className="inline-flex items-center gap-2">
                About DafterSpace 
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>

          {/* 🔹 Right Images Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Large Image */}
            <div ref={imageRef1} className="scroll-animate scroll-scaleIn scroll-delay-300 h-[300px] sm:h-[450px] overflow-hidden rounded-lg border-2 border-transparent hover:border-[#FDDC1F] transition-all duration-300 shadow-lg hover:shadow-2xl">
              <img
                src="Explore1.jpg"
                alt="Workspace"
                className="h-full w-full object-cover hover:scale-110 hover:rotate-1 transition-transform duration-700"
              />
            </div>

            {/* Two Small Images */}
            <div className="flex flex-col gap-6">
              <div ref={imageRef2} className="scroll-animate scroll-scaleIn scroll-delay-400 h-[150px] sm:h-[210px] overflow-hidden rounded-lg border-2 border-transparent hover:border-[#007BFF] transition-all duration-300 shadow-lg hover:shadow-xl">
                <img
                  src="Exploree2.jpg"
                  alt="Workspace 2"
                  className="h-full w-full object-cover hover:scale-110 hover:rotate-1 transition-transform duration-700"
                />
              </div>
              <div ref={imageRef3} className="scroll-animate scroll-scaleIn scroll-delay-500 h-[150px] sm:h-[210px] overflow-hidden rounded-lg border-2 border-transparent hover:border-[#1E3A8A] transition-all duration-300 shadow-lg hover:shadow-xl">
                <img
                  src="Exploree3.jpg"
                  alt="Workspace 3"
                  className="h-full w-full object-cover hover:scale-110 hover:rotate-1 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Amenities Section */}
      <div ref={amenitiesRef} className="scroll-animate scroll-slideUp mt-12 sm:mt-20 bg-gradient-to-b from-white to-[#007BFF]/5 py-10">
        <div className="max-w-7xl mx-auto px-4 font-serif">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#1E3A8A] font-bold">
            Top Amenities at Our Islamabad Coworking Space
          </p>
          <div className="w-24 h-1 bg-[#FDDC1F] mt-4 mb-6 rounded-full"></div>
          <div className="max-w-4xl my-4 sm:my-6 text-base sm:text-lg font-serif text-gray-700 leading-relaxed">
            <p className="hover:text-gray-900 transition-colors duration-300">
              DafterSpace offers more than just a workspace. It's a place to boost
              focus, enhance productivity, and ignite creativity. With modern,
              inspiring work environments and a vibrant community, it's where
              big ideas come to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
