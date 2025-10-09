import { Cctv, Coffee, Mail, Printer, Wifi } from "lucide-react";
import React from "react";

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

  return (
    <div className="px-3 sm:px-4 py-10 bg-[#F8F9FA]">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1260px] mx-auto">
        {carddata.map((items, index) => {
          const isBlue = index % 2 === 0; // alternate blue-white
          return (
            <div
              key={index}
              className={`p-5 rounded-2xl min-h-70 shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200
                ${
                  isBlue
                    ? "bg-[#007BFF] text-white hover:bg-white hover:text-[#007BFF]"
                    : "bg-white text-[#007BFF] hover:bg-[#007BFF] hover:text-white"
                }`}
            >
              <div
                className={`h-8 w-auto mb-2 ${
                  isBlue ? "text-white hover:text-[#007BFF]" : "text-[#007BFF] hover:text-white"
                }`}
              >
                {items.Icon}
              </div>
              <div className="text-lg sm:text-xl font-serif my-2 sm:my-3 font-semibold">
                {items.Heading}
              </div>
              <div className="text-sm sm:text-base leading-relaxed opacity-90">
                {items.Description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
