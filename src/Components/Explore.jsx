import React from "react";

export default function Explore() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 px-4">
      {/* Heading (same as yours) */}
      <h2 className="text-center w-150 text-xl md:text-2xl lg:text-[33px] font-semibold font-serif col-span-2">
        Explore The CalmKaaj CoWorking Space
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col gap-4 p-4">
          <p className="text-lg font-serif">
            CalmKaaj aims to unite loosely connected individuals into a thriving
            community of members, fostering their individual success while
            simultaneously enriching the collective ecosystem. Our{" "}
            <span className="font-bold">coworking spaces in Islamabad</span>,
            including various flexible office solutions, are designed to offer
            ergonomically crafted workspaces and amenities for professionals of
            all industries. Our CK facility staff members enable our platform
            for networking and collaboration – elevating the coworking
            experience to the next level.
          </p>
          <p className="text-lg font-serif">
            CalmKaaj aims to unite loosely connected individuals into a thriving
            community of members, fostering their individual success while
            simultaneously enriching the collective ecosystem. Our coworking
            spaces in Islamabad, including various flexible office solutions,
            are designed to offer ergonomically crafted workspaces and amenities
            for professionals of all backgrounds. Our CK facility staff members
            enable our platform for networking and collaboration – elevating the
            coworking experience to the next level.
          </p>

          {/* Button */}
          <button className="mt-4 self-start bg-[#27371B] text-white px-6 py-2 rounded-lg shadow-md hover:bg-amber-600 transition-all duration-300 cursor-pointer">
          About CalmKaaj →

          </button>
        </div>

        {/* Right Images Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Large Image */}
          <div className="h-[450px] overflow-hidden rounded-lg">
            <img
              src="Explore1.jpeg"
              alt="Workspace"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Two Small Images */}
          <div className="flex flex-col gap-6">
            <div className="h-[210px] overflow-hidden rounded-lg">
              <img
                src="Explore2.jpg"
                alt="Workspace 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[210px] overflow-hidden rounded-lg">
              <img
                src="Explore3.jpg"
                alt="Workspace 3"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
