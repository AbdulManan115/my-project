import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BookingForm() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Heading */}
      <div>
        <p className="text-[#1E3A8A] text-center text-2xl sm:text-3xl lg:text-4xl font-serif">
          For Bookings
        </p>
      </div>

      {/* Description */}
      <div className="text-base sm:text-lg text-gray-700 text-center font-sans py-3 max-w-[800px] mx-auto">
        <p>
          Please fill the contact form so we can give you details about CalmKaaj
          and its expert service offerings.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1010px] mx-auto mb-5 gap-4 sm:gap-5">
        {/* Location Dropdown */}
        <div className="group border-2 border-[#1E3A8A] rounded-lg p-3 sm:p-4 relative bg-[#1E3A8A] hover:bg-white transition">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenLocation(!openLocation)}
          >
            <p className="text-white group-hover:text-[#1E3A8A] text-sm sm:text-base font-semibold transition">
              Choose Location
            </p>
            <ChevronDown className="text-white group-hover:text-[#1E3A8A] w-4 h-4 sm:w-5 sm:h-5 transition" />
          </div>
          {openLocation && (
            <ul className="absolute left-0 top-full mt-2 w-full bg-white text-[#1E3A8A] rounded-lg z-10 text-sm sm:text-base shadow-md">
              <li className="px-4 py-2 bg-white hover:bg-[#1E3A8A] hover:text-white cursor-pointer rounded-md transition">
                Barakhu Islamabad
              </li>
            </ul>
          )}
        </div>

        {/* Workspace Dropdown */}
        <div className="group border-2 border-[#1E3A8A] rounded-lg p-3 sm:p-4 relative bg-white hover:bg-[#1E3A8A] transition">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenWorkspace(!openWorkspace)}
          >
            <p className="text-[#1E3A8A] group-hover:text-white text-sm sm:text-base font-semibold transition">
              Workspace
            </p>
            <ChevronDown className="text-[#1E3A8A] group-hover:text-white w-4 h-4 sm:w-5 sm:h-5 transition" />
          </div>
          {openWorkspace && (
            <ul className="absolute left-0 top-full mt-2 w-full bg-white text-[#1E3A8A] rounded-lg z-10 text-sm sm:text-base shadow-md">
              {[
                "Private Offices",
                "Flexible Desk",
                "Dedicated Desk",
                "Events",
                "Virtual Offices",
                "Team Workspace",
              ].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 bg-white hover:bg-[#1E3A8A] hover:text-white cursor-pointer rounded-md transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Email Input */}
        <div className="group border-2 border-[#1E3A8A] p-3 sm:p-4 rounded-lg bg-[#1E3A8A] hover:bg-white transition">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent text-white placeholder-white group-hover:text-[#1E3A8A] group-hover:placeholder-[#1E3A8A] focus:outline-none font-semibold text-sm sm:text-base transition"
          />
        </div>

        {/* Phone Input */}
        <div className="group border-2 border-[#1E3A8A] p-3 sm:p-4 rounded-lg bg-white hover:bg-[#1E3A8A] transition">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full bg-transparent text-[#1E3A8A] placeholder-[#1E3A8A] group-hover:text-white group-hover:placeholder-white focus:outline-none font-semibold text-sm sm:text-base transition"
          />
        </div>
      </div>

      {/* Consent */}
      <div>
        <div className="flex text-gray-700 font-sans text-xs sm:text-sm lg:text-base items-start gap-2 max-w-[1010px] mx-auto leading-snug">
          <input type="checkbox" className="mt-1 accent-[#1E3A8A]" />
          <span>
            I consent that my data sent in this form will be stored by CalmKaaj
            so that they can respond back to my enquiry.
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button className="flex items-center gap-2 bg-[#1E3A8A] hover:bg-white text-white hover:text-[#1E3A8A] border-2 border-[#1E3A8A] font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base">
          Submit
          <span className="text-xl sm:text-2xl leading-none">→</span>
        </button>
      </div>
    </div>
  );
}
