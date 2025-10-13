import React from "react";

export default function Explore() {




  return (
    <>
      <div className="max-w-7xl mx-auto poppins-regular flex flex-col gap-6 px-4">
        {/* 🔹 Heading */}
        <h2 className="text-center  w-full text-xl sm:text-2xl lg:text-[33px] font-semibold font-serif pt-10 sm:pt-6 text-[#007BFF]">
          Explore The DafterSpace CoWorking Space
        </h2>

        {/* 🔹 Content Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Text Section */}
          <div className="flex-1 flex flex-col gap-4 p-2 sm:p-4">
            <p className="text-base sm:text-lg font-serif text-gray-700 leading-relaxed">
              DafterSpace aims to unite loosely connected individuals into a
              thriving community of members, fostering their individual success
              while simultaneously enriching the collective ecosystem. Our{" "}
              <span className="font-bold text-[#007BFF]">
                coworking spaces in Islamabad
              </span>
              , including various flexible office solutions, are designed to
              offer ergonomically crafted workspaces and amenities for
              professionals of all industries. Our CK facility staff members
              enable our platform for networking and collaboration – elevating
              the coworking experience to the next level.
            </p>

            <p className="text-base sm:text-lg font-serif text-gray-700 leading-relaxed">
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
              className="mt-4 self-start bg-[#007BFF] text-white px-6 py-2 rounded-lg shadow-md text-sm sm:text-base font-medium hover:bg-[#005FCC] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              About DafterSpace →
            </a>
          </div>

          {/* 🔹 Right Images Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Large Image */}
            <div className="h-[300px] sm:h-[450px] overflow-hidden rounded-lg">
              <img
                src="Explore1.jpg"
                alt="Workspace"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Two Small Images */}
            <div className="flex flex-col gap-6">
              <div className="h-[150px] sm:h-[210px] overflow-hidden rounded-lg">
                <img
                  src="Exploree2.jpg"
                  alt="Workspace 2"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 "
                />
              </div>
              <div className="h-[150px] sm:h-[210px] overflow-hidden rounded-lg">
                <img
                  src="Exploree3.jpg"
                  alt="Workspace 3"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Amenities Section */}
      <div className="mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 font-serif">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-[#007BFF] font-semibold">
            Top Amenities at Our Islamabad Coworking Space
          </p>
          <div className="max-w-4xl my-4 sm:my-6 text-base sm:text-lg font-serif text-gray-700 leading-relaxed">
            <p>
              DafterSpace offers more than just a workspace. It’s a place to boost
              focus, enhance productivity, and ignite creativity. With modern,
              inspiring work environments and a vibrant community, it’s where
              big ideas come to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
