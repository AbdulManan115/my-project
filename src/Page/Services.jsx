import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Services() {
  const carddata = [
    {
      img: "Card1.jpg",
      Heading: "Private Office",
      Description: "Furnished, move-in ready offices with shared amenities.",
    },
    {
      img: "Card2.jpg",
      Heading: "Flexible Desk",
      Description:
        "Available on daily, weekly and monthly rates with shared amenities.",
    },
    {
      img: "Card3.jpeg",
      Heading: "Dedicated Desk",
      Description: "Personal desk in a shared space with shared amenities.",
    },
    {
      img: "Card4.jpg",
      Heading: "Events",
      Description:
        "Well-equipped space for your next event, exhibition or performance.",
    },
    {
      img: "Card5.jpg",
      Heading: "Virtual Office",
      Description: "Use CK address for your business. Mail handling service.",
    },
    {
      img: "Card.jpeg",
      Heading: "Team Workspace",
      Description:
        "Shared space for small teams to collaborate and work efficiently.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1E3A8A]/50 z-0"></div>

        {/* Background Image */}
        <img
          src="Service1.jpg"
          className="h-100 sm:h-80 md:h-100 w-full object-cover"
        />

        {/* Text over image */}
        <div className="absolute top-[8%] sm:top-[25%] md:top-[30%] left-0 right-0 px-4 z-10 md:text-left max-w-7xl mx-auto">
          <p className="text-3xl sm:text-4xl md:text-6xl font-serif text-white">
            Our Services
          </p>
          <p className="text-white pt-3 sm:pt-5 pb-2 text-sm sm:text-[16px] font-sans leading-relaxed sm:leading-7">
            At Dafterspace, we offer a diverse range of professional workspace
            services in Islamabad, including private offices, dedicated desks,
            virtual offices, flexible co-working spaces, and conference rooms.
            Whether you're a freelancer, startup, or growing business, our fully
            equipped workspaces in Blue Area and I-10 are designed to boost
            productivity, creativity, and comfort. With flexible booking options
            and modern amenities, CalmKaaj is your go-to destination for
            reliable coworking and office solutions in Islamabad.
          </p>
          <div className="max-w-[200px] sm:max-w-[250px] bg-[#FDDC1F] h-[3px] mt-3 mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="my-12 sm:my-20 px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl lg:max-w-6xl mx-auto gap-6 sm:gap-8">
          {carddata.map((items, index) => (
            <div
              key={index}
              className="bg-white shadow-xl overflow-hidden rounded-lg border border-[#1E3A8A]/10"
            >
              <div>
                <img
                  src={items.img}
                  alt={items.Heading}
                  className="w-full h-44 sm:h-55 object-cover"
                />
              </div>

              <div>
                <p className="text-lg sm:text-xl px-4 sm:px-5 py-3 sm:py-4 font-serif text-[#1E3A8A]">
                  {items.Heading}
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base px-4 sm:px-5 font-serif text-gray-700 leading-relaxed">
                  {items.Description}
                </p>
              </div>

              <a href="/contact">
              <button className="text-md px-5 py-2 font-sans font-semibold text-[#007BFF] hover:text-[#005FCC] cursor-pointer transition-all duration-200">
                Book Now
                <div className="max-w-[80px] sm:max-w-[100px] bg-[#FDDC1F] h-[2px] mt-1 mx-auto sm:mx-0"></div>
              </button>
            </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
