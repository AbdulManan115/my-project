import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const serviceCardRef = useScrollAnimation();

  return (
    <div className="services-background mt-15 rounded-br-[50px] lg:rounded-br-[150px] px-6 sm:px-12 py-10 sm:py-20 relative overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/70 to-[#007BFF]/60"></div>
      
      <div ref={serviceCardRef} className="scroll-animate scroll-scaleIn max-w-[700px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#1E3A8A]/80 backdrop-blur-sm rounded-2xl border-2 border-[#FDDC1F]/50 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-3 animate-fadeInUp">
          Unmatched flexibility without compromising on experience
        </h2>
        
        <div className="w-20 h-1 bg-[#FDDC1F] mb-6 rounded-full animate-fadeInUp delay-100"></div>

        <p className="text-base sm:text-lg lg:text-lg font-sans text-white/95 mb-10 leading-relaxed animate-fadeInUp delay-200">
          At CalmKaaj, your success is our priority, as it directly fuels our
          own. Our locations in Blue Area and I-10/3 are designed to provide you
          with a wide range of services to meet your business needs. For more
          details and personalized assistance, we encourage you to connect with
          our team.
        </p>

        {/* Button */}
        <a
          href="/services"
          className="group inline-flex items-center gap-2 mt-2 bg-[#FDDC1F] hover:bg-white text-[#1E3A8A] hover:text-[#007BFF] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 border-2 border-[#FDDC1F] hover:border-white shadow-lg hover:shadow-2xl transform hover:scale-105 animate-fadeInUp delay-300"
        >
          <span>View Our Services</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
}
