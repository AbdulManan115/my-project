import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mail, ChevronDown, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);

  return (
    <div>
      <Navbar />

      {/* 🔹 Hero Section */}
      <div className="relative w-full min-h-screen">
        <img
          src="contact1.jpeg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🔸 Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* 🔸 Content Centered Vertically */}
        <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-6 md:px-10 py-10 sm:py-16">
          <div
            className="bg-[#BD6627]/90 rounded-xl w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl 
                       p-5 sm:p-8 md:p-10 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
              
              {/* 🔸 Left Side */}
              <div>
                <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-left">
                  Get in Touch with CalmKaaj
                </p>
                <p className="py-4 sm:py-5 text-base sm:text-lg text-white font-sans text-left">
                  Get in touch with CalmKaaj today and start your new office experience.
                </p>

                {/* Contact Info */}
                <div className="text-left mt-3 sm:mt-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-white mb-3">
                    Contact Us
                  </h3>
                  <ul className="space-y-3 text-white text-sm sm:text-base md:text-lg font-sans">
                    <li className="flex items-center gap-3">
                      <Mail size={18} className="text-white" />
                      <span>hello@calmkaaj.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="text-white" />
                      <span>+92 300 1234567</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin size={18} className="text-white" />
                      <span>Blue Area, Islamabad</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm md:text-base">
                      <MapPin size={18} className="text-white mt-1" />
                      <span>CalmKaaj Crossroads: Farid Business Park I-10/3, Islamabad</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 🔸 Right Side */}
              <div>
              <div className="grid grid-cols-1 gap-4 sm:gap-5 mt-6">
                  {/* Location Dropdown */}
                  <div className="border-2 border-white rounded-lg p-3 sm:p-4 relative">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => setOpenLocation(!openLocation)}
                    >
                      <p className="text-white text-sm sm:text-base font-semibold">Choose Location</p>
                      <ChevronDown className="text-white w-5 h-5" />
                    </div>
                    {openLocation && (
                      <ul className="absolute left-0 top-full mt-2 w-full bg-black text-white rounded-lg z-10 text-sm sm:text-base">
                        {["Choose Location", "CalmKaj : Ali Plaza", "CalmKaj : Blue Area, Islamabad"].map((loc) => (
                          <li
                            key={loc}
                            className="px-4 py-2 hover:bg-amber-500 cursor-pointer"
                          >
                            {loc}
                          </li>
                        ))}
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
                      <ChevronDown className="text-white w-5 h-5" />
                    </div>
                    {openWorkspace && (
                      <ul className="absolute left-0 top-full mt-2 w-full bg-black text-white rounded-lg z-10 text-sm sm:text-base">
                        {[
                          "Private Offices",
                          "Flexible Desk",
                          "Dedicated Desk",
                          "Events",
                          "Virtual Offices",
                          "Conference Room",
                        ].map((space) => (
                          <li
                            key={space}
                            className="px-4 py-2 hover:bg-amber-500 cursor-pointer"
                          >
                            {space}
                          </li>
                        ))}
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

                {/* Checkbox */}
                <div className="flex text-white font-sans text-xs sm:text-sm md:text-base items-start gap-2 leading-snug mt-4">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    I consent that my data sent in this form will be stored by CalmKaaj so
                    that they can respond back to my enquiry.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start mt-6">
                  <button className="flex items-center gap-2 bg-[#27371B] hover:bg-white text-white hover:text-amber-500 font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base">
                    Submit <span className="text-xl sm:text-2xl leading-none">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

      <Footer />
    </div>
  );
}
