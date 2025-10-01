import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BookingForm() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);

  return (
    <div className="bg-[#C66A28] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      {/* Heading */}
      <div>
        <p className="text-white text-center text-2xl sm:text-3xl lg:text-4xl font-serif">
          For Bookings
        </p>
      </div>

      {/* Description */}
      <div className="text-base sm:text-lg text-white text-center font-sans py-3 max-w-[800px] mx-auto">
        <p>
          Please fill the contact form so we can give you details about CalmKaaj
          and its expert service offerings.
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1010px] mx-auto mb-5 gap-4 sm:gap-5">
        {/* Location Dropdown */}
        <div className="border-2 border-white rounded-lg p-3 sm:p-4 relative">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenLocation(!openLocation)}
          >
            <p className="text-white text-sm sm:text-base font-semibold">Choose Location</p>
            <ChevronDown className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          {openLocation && (
            <ul className="absolute left-0 top-full mt-2 w-full bg-white text-black rounded-lg z-10 text-sm sm:text-base">
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Choose Location
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                CalmKaj : Ali Plaza
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                CalmKaj : Blue Area, Islamabad
              </li>
            </ul>
          )}
        </div>

        {/* Workspace Dropdown */}
        <div className="border-2 border-white rounded-lg p-3 sm:p-4 relative">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpenWorkspace(!openWorkspace)}
          >
            <p className="text-white text-sm sm:text-base font-semibold">Workspace</p>
            <ChevronDown className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          {openWorkspace && (
            <ul className="absolute left-0 top-full mt-2 w-full bg-white text-black rounded-lg z-10 text-sm sm:text-base">
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Private Offices
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Flexible Desk
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Dedicated Desk
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Events
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Virtual Offices
              </li>
              <li className="px-4 py-2 hover:bg-amber-500 bg-black text-white cursor-pointer">
                Conference Room
              </li>
            </ul>
          )}
        </div>

        {/* Email Input */}
        <div className="border-2 border-white p-3 sm:p-4 rounded-lg">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent text-white placeholder-white focus:outline-none font-semibold text-sm sm:text-base"
          />
        </div>

        {/* Phone Input */}
        <div className="border-2 border-white p-3 sm:p-4 rounded-lg">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full bg-transparent text-white placeholder-white focus:outline-none font-semibold text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Consent */}
      <div>
        <div className="flex text-white font-sans text-xs sm:text-sm lg:text-base items-start gap-2 max-w-[1010px] mx-auto leading-snug">
          <input type="checkbox" className="mt-1" />
          <span>
            I consent that my data sent in this form will be stored by CalmKaaj so
            that they can respond back to my enquiry.
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button className="flex items-center gap-2 bg-[#27371B] hover:bg-white text-white hover:text-amber-500 font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base">
          Submit
          <span className="text-xl sm:text-2xl leading-none">→</span>
        </button>
      </div>
    </div>
  );
}
