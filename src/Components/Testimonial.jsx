import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSlider() {
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
    <div className="mx-auto text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-5">
        What Our Clients Are Saying
      </h2>

      {/* Testimonial Card */}
      <div className="bg-white max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto p-4 sm:p-6 ">
        <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[22px] mb-3">
          "{testimonials[currentIndex].message}"
        </p>
        <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#C66A28]">
          – {testimonials[currentIndex].name}
        </h4>
      </div>

      {/* Centered Navigation */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 mt-4">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-[#C66A28] hover:bg-[#a55720] transition"
        >
          <ArrowLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-[#C66A28] hover:bg-[#a55720] transition"
        >
          <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
}
