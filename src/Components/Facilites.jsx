import { Cctv, Coffee, Mail, Printer, Wifi } from "lucide-react";
import React from "react";

export default function Facilites() {
  const carddata = [
    {
      Icon: <Wifi className="h-8 w-auto" />,
      Heading: "Personalized Office",
      Description:
        "Custom offices tailored to your needs, offering privacy, comfort, and a professional workspace.",
    },
      
    {
      Icon: <Coffee className="h-8 w-auto" />,
      Heading: "Tea on the house",
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
        "Round-the-clock CCTV surveillance for a secure and environment.",
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
    <div className="px-3 sm:px-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1260px] mx-auto mt-8 sm:mt-12">
        {carddata.map((items, index) => (
          <div
            key={index}
            className={`text-white p-3 sm:p-4 lg:p-[20px] rounded-lg min-h-70 transition-colors duration-300 ${
              index === 0 ||
              index === 2 ||
              index === 5||
              index === 7 ||
              index === 8 ||
              index === 10
                ? "bg-[#C66A28] hover:bg-[#27371B]"
                : "bg-[#27371B] hover:bg-[#C66A28]"
            }`}
          >
            
            <div>{items.Icon}</div>
            <div className="text-lg sm:text-xl lg:text-2xl font-serif my-2 sm:my-3">
              {items.Heading}
            </div>
            <div className="text-sm sm:text-base lg:text-lg">
              {items.Description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
