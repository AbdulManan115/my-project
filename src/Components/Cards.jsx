import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Cards() {
  const carddata = [
    {
      img: "desk.jpg",
      Heading: "Private Office",
      Description: "Furnished, move-in ready offices with shared amenities.",
    },
    {
      img: "fdesk.jpg",
      Heading: "Flexible Desk",
      Description:
        "Available on daily, weekly and monthly rates with shared amenities.",
    },
    {
      img: "ddesk.jpg",
      Heading: "Dedicated Desk",
      Description: "Personal desk in a shared space with shared amenities.",
    },
    {
      img: "edesk.jpg",
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
      img: "vdesk.jpg",
      Heading: "Team Workspace",
      Description:
        "Shared space for small teams to collaborate and work efficiently.",
    },
  ];

  const Card = ({ item, index }) => {
    const cardRef = useScrollAnimation(0.1);
    
    return (
      <div
        ref={cardRef}
        className="scroll-animate scroll-slideUp group bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#FDDC1F] transform hover:scale-105 hover:-translate-y-2"
        style={{ animationDelay: `${(index % 3) * 100}ms` }}
      >
        
        <div className="overflow-hidden">
          <img
            src={item.img}
            alt={item.Heading}
            className="w-full h-55 object-cover rounded-br-3xl group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
          />
        </div>
        <div>
          <p className="text-xl px-5 py-4 font-serif font-bold text-[#1E3A8A] group-hover:text-[#007BFF] transition-colors duration-300">
            {item.Heading}
          </p>
        </div>
        <div>
          <p className="text-base sm:text-lg px-5 font-sans text-gray-700 line-clamp-2 group-hover:text-gray-900 transition-colors duration-300">
            {item.Description}
          </p>
        </div>
        <a href="/contact">
          <button className="text-md px-5 py-3 font-sans font-bold text-[#007BFF] hover:text-[#1E3A8A] cursor-pointer transition-all duration-300 flex items-center gap-2 group/btn">
            <span>Book Now</span>
            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
            <div className="max-w-[80px] sm:max-w-[100px] bg-[#FDDC1F] h-[3px] mt-1 absolute bottom-2 left-5 group-hover/btn:w-[120px] transition-all duration-300 shadow-lg shadow-[#FDDC1F]/50"></div>
          </button>
        </a>
      </div>
    );
  };

  return (
    <div className="mt-10 z-70 px-4">
      {/* Service Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        We provide modern and comfortable workspaces tailored to your way of working. 

        </p>
      </div>
      
      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl lg:max-w-6xl mx-auto gap-6">
        {carddata.map((items, index) => (
          <Card key={index} item={items} index={index} />
        ))}
      </div>
    </div>
  );
}
