import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mail, ChevronDown, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [openWorkspace, setOpenWorkspace] = useState(false);

  return (
    <div>
      <Navbar />

      {/* 🔹 Hero Section */}
      <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen">
        <img
          src="contact1.jpeg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#004AAD]/70"></div>

        {/* 🔸 Content */}
        <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen px-3 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16">
          <div className="bg-white/90 rounded-xl w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl p-5 sm:p-8 md:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

              {/* 🔸 Left Side */}
              <div>
                <p className="text-[#004AAD] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif leading-tight text-left">
                  Get in Touch with DafterSpace
                </p>
                <p className="py-4 sm:py-5 text-base sm:text-lg text-gray-700 font-sans text-left">
                  Tell us what you need, and we’ll help you find the right workspace.
                </p>

                {/* Contact Info */}
                <div className="text-left mt-3 sm:mt-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#004AAD] mb-3">
                    Contact Us
                  </h3>
                  <ul className="space-y-3 text-gray-800 text-sm sm:text-base md:text-lg font-sans">
                    <li className="flex items-center gap-3">
                      <Mail size={18} className="text-[#004AAD]" />
                      <a href="mailto:hello@calmkaaj.com" className=" transition">
                        hello@DafterSpace.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="text-[#004AAD]" />
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                        <a href="tel:+923136224778" className=" transition">+92 313 6224778</a>
                        <span className="hidden sm:inline text-[#004AAD]">|</span>
                        <a href="tel:+923231557988" className=" transition">+92 323 1557988</a>
                      </div>
                    </li>
                    <a href="/location" className="flex cursor-pointer items-center gap-3  transition">
                      <MapPin size={18} className="text-[#004AAD]" />
                      <span>Barakahu Islamabad</span>
                    </a>
                    <a href="/location" className="flex items-start gap-3 cursor-pointer  transition text-sm md:text-base">
                      <MapPin size={18} className="text-[#004AAD] mt-1" />
                      <span>Kalsoom Plaza, 1st Floor, Murree Road, Barakhu, Islamabad</span>
                    </a>
                  </ul>
                </div>
              </div>

              {/* 🔸 Right Side */}
              <div>
                <div className="grid grid-cols-1 gap-4 sm:gap-5 mt-6">
                  
                  {/* Location tile links to Location page */}
                  <Link to="/location" aria-label="Go to Location" className="border-2 border-[#004AAD] rounded-lg p-3 sm:p-4 bg-white block hover:bg-[#FDDC1F]/20 transition">
                    <p className="text-[#004AAD] text-sm sm:text-base font-semibold">Location</p>
                  </Link>

                  {/* Workspace Dropdown */}
                  <div className="border-2 border-[#004AAD] rounded-lg p-3 sm:p-4 relative bg-white">
                    <div
                      className="flex justify-between items-center cursor-pointer select-none"
                      onClick={() => setOpenWorkspace(!openWorkspace)}
                    >
                      <p className="text-[#004AAD] text-sm sm:text-base font-semibold">Workspace</p>
                      <ChevronDown className="text-[#004AAD] w-5 h-5" />
                    </div>
                    {openWorkspace && (
                      <ul className="absolute left-0 top-full mt-2 w-full max-h-60 overflow-auto bg-[#004AAD] text-white rounded-lg z-10 text-sm sm:text-base">
                        {[
                          "Private Offices",
                          "Flexible Desk",
                          "Dedicated Desk",
                          "Events",
                          "Virtual Offices",
                        ].map((space) => (
                          <li
                            key={space}
                            className="px-4 py-3 hover:bg-[#FDDC1F] hover:text-[#004AAD] cursor-pointer transition"
                          >
                            {space}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="border-2 border-[#004AAD] p-3 sm:p-4 rounded-lg bg-white">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full bg-transparent text-[#004AAD] placeholder-[#004AAD] focus:outline-none font-semibold text-sm sm:text-base"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="border-2 border-[#004AAD] p-3 sm:p-4 rounded-lg bg-white">
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full bg-transparent text-[#004AAD] placeholder-[#004AAD] focus:outline-none font-semibold text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex text-[#004AAD] font-sans text-xs sm:text-sm md:text-base items-start gap-2 leading-snug mt-4">
                  <input type="checkbox" className="mt-1 accent-[#FDDC1F]" />
                  <span>
                    I understand that DafterSpace may keep my provided details in order to respond to my enquiry.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start mt-6">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#004AAD] text-white hover:bg-[#FDDC1F] hover:text-[#004AAD] font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-lg transition text-sm sm:text-base">
                    Submit <span className="text-xl sm:text-2xl leading-none">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto my-10 px-3 sm:px-6">
        <div className="rounded-lg overflow-hidden shadow-md border border-[#004AAD]/30">
          <iframe
            title="CalmKaaj location map"
            src="https://www.google.com/maps?q=Kalsoom%20Plaza%2C%20Murree%20Road%2C%20Barakhu%2C%20Islamabad&output=embed"
            width="100%"
            className="w-full h-64 sm:h-72 md:h-96 lg:h-[400px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
