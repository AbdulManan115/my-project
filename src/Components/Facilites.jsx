import { Cctv, Coffee, Mail, Printer, Wifi } from "lucide-react";
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Facilities() {
  const carddata = [
    {
      Icon: <Wifi className="h-8 w-auto" />,
      Heading: "Personalized Office",
      Description:
        "Custom offices tailored to your needs, offering privacy, comfort, and a professional workspace.",
    },
    {
      Icon: <Coffee className="h-8 w-auto" />,
      Heading: "Tea on the House",
      Description:
        "Stay refreshed with complimentary tea available to all members.",
    },
    {
      Icon: <Printer className="h-8 w-auto" />,
      Heading: "Print & Scan",
      Description:
        "High-quality print and scan services to keep you efficient and productive.",
    },
    {
      Icon: <Wifi className="h-8 w-auto" />,
      Heading: "High-Speed Internet",
      Description:
        "Reliable, fast internet to keep you connected and productive all day.",
    },
    {
      Icon: <Cctv className="h-8 w-auto" />,
      Heading: "24/7 CCTV Surveillance",
      Description:
        "Round-the-clock CCTV surveillance keeps your environment secure and safe.",
    },
    {
      Icon: <Mail className="h-8 w-auto" />,
      Heading: "Mail Handling",
      Description:
        "Efficient mail sorting and notification for seamless business correspondence.",
    },
    {
      Icon: <Wifi className="h-8 w-auto" />,
      Heading: "Prayer Room",
      Description:
        "A quiet, private space for reflection and worship, helping you stay balanced during your workday.",
    },
    {
      Icon: <Wifi className="h-8 w-auto" />,
      Heading: "Flexible Payment Options",
      Description:
        "Customizable payment plans to suit your business needs, offering easy cost management.",
    },
  ];

  const FacilityCard = ({ item, index, isBlue }) => {
    const cardRef = useScrollAnimation(0.1);
    
    return (
      <div
        ref={cardRef}
        className={`scroll-animate scroll-scaleIn group p-5 rounded-2xl min-h-70 shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border-2
          ${
            isBlue
              ? "bg-[#007BFF] text-white hover:bg-[#FDDC1F] hover:text-[#1E3A8A] border-[#007BFF] hover:border-[#FDDC1F]"
              : "bg-white text-[#1E3A8A] hover:bg-[#007BFF] hover:text-white border-[#FDDC1F] hover:border-[#007BFF]"
          }`}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div
          className={`h-8 w-auto mb-3 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ${
            isBlue ? "text-white group-hover:text-[#1E3A8A]" : "text-[#007BFF] group-hover:text-white"
          }`}
        >
          {item.Icon}
        </div>
        <div className="text-lg sm:text-xl font-serif my-2 sm:my-3 font-bold transition-colors duration-300">
          {item.Heading}
        </div>
        <div className="text-sm sm:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {item.Description}
        </div>
        {/* Decorative accent */}
        <div className={`mt-3 w-12 h-1 rounded-full transition-all duration-500 ${
          isBlue ? "bg-white group-hover:bg-[#1E3A8A] group-hover:w-20" : "bg-[#FDDC1F] group-hover:bg-white group-hover:w-20"
        }`}></div>
      </div>
    );
  };

  return (
    <div className="px-3 sm:px-4 py-10 bg-gradient-to-b from-white to-[#007BFF]/5">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1260px] mx-auto">
        {carddata.map((items, index) => {
          const isBlue = index % 2 === 0; // alternate blue-white
          return (
            <FacilityCard key={index} item={items} index={index} isBlue={isBlue} />
          );
        })}
      </div>
    </div>
  );
}
