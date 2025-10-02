import React from "react";

export default function Services() {
  return (
    <div className="services-background mt-15 rounded-br-[50px] lg:rounded-br-[150px] px-6 sm:px-12 py-10 sm:py-20">
      <div className="max-w-[700px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-black/50 rounded-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-3">
          Unmatched flexibility without compromising on experience
        </h2>
        <p className="text-base sm:text-lg lg:text-lg font-sans text-white mb-3">
          At CalmKaaj, your success is our priority, as it directly fuels our
          own. Our locations in Blue Area and I-10/3 are designed to provide you
          with a wide range of services to meet your business needs. For more
          details and personalized assistance, we encourage you to connect with
          our team.
        </p>

        {/* Button */}
        <a href="/services" className="mt-2 bg-[#27371B] hover:bg-[#C66A28] text-white hover:text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition">
          View Our Services →
        </a>
      </div>
    </div>
  );
}

