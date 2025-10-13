import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function TestimonialSlider() {
  const headingRef = useScrollAnimation();
  const dividerRef = useScrollAnimation();
  const cardRef = useScrollAnimation();
  const navRef = useScrollAnimation();

  const testimonials = [
    {
      message:
        "One of the coolest co-working spaces in the twin cities. The location is incredible, the vibe is cosy, and the staff is extremely friendly. An everyday favorite!",
      name: "Sameer Shahid",
    },
    {
      message:
        "The best co-working space anyone can get in the heart of Islamabad. Environment is super calm and provides the perfect vibe for any kind of casual and professional working. CalmKaaj team is professional and very supportive. I would definitely recommend.",
      name: "Talha Amjad",
    },
    {
      message:
        "The professionalism exhibited by the staff is outstanding. They are always attentive, responsive and eager to assist, creating a supportive atmosphere, which contributes significantly to the overall positive ambiance of the place.",
      name: "Usman Malik",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mx-auto text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 bg-gradient-to-b from-white to-[#007BFF]/5">
      {/* Heading */}
      <h2 ref={headingRef} className="scroll-animate scroll-fadeInUp text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-[#1E3A8A]">
        What Our Clients Are Saying
      </h2>
      <div ref={dividerRef} className="scroll-animate scroll-scaleIn scroll-delay-100 w-24 h-1 bg-[#FDDC1F] mx-auto mb-8 rounded-full"></div>

      {/* Testimonial Card */}
      <div ref={cardRef} className="scroll-animate scroll-scaleIn scroll-delay-200 relative bg-white max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto p-6 sm:p-10 rounded-2xl shadow-2xl border-2 border-[#007BFF]/20 hover:border-[#FDDC1F] transition-all duration-500 hover:scale-105 transform">
        {/* Quote Icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#FDDC1F] p-4 rounded-full shadow-lg border-4 border-white">
            <Quote className="text-[#1E3A8A] w-6 h-6" />
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[22px] mb-6 mt-6 leading-relaxed italic">
          "{testimonials[currentIndex].message}"
        </p>
        <div className="w-16 h-1 bg-[#007BFF] mx-auto mb-4 rounded-full"></div>
        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#1E3A8A]">
          {testimonials[currentIndex].name}
        </h4>
      </div>

      {/* Centered Navigation */}
      <div ref={navRef} className="scroll-animate scroll-fadeInUp scroll-delay-300 flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-8">
        <button
          onClick={prevSlide}
          className="group p-3 sm:p-4 rounded-full bg-[#007BFF] hover:bg-[#FDDC1F] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 border-2 border-[#007BFF] hover:border-[#FDDC1F]"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="text-white group-hover:text-[#1E3A8A] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-300" />
        </button>
        
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#FDDC1F] w-8 shadow-lg"
                  : "bg-[#007BFF]/30 hover:bg-[#007BFF]/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="group p-3 sm:p-4 rounded-full bg-[#007BFF] hover:bg-[#FDDC1F] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 border-2 border-[#007BFF] hover:border-[#FDDC1F]"
          aria-label="Next testimonial"
        >
          <ArrowRight className="text-white group-hover:text-[#1E3A8A] w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
}
