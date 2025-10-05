import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false); // Desktop dropdown
  const [showMobileLocations, setShowMobileLocations] = useState(false); // Mobile dropdown

  return (
    <nav className="w-full shadow-md bg-white">
      {/* 🔍 Mobile Top Search Bar */}
      <div className="border-b p-3 flex justify-center bg-white lg:hidden">
        <div className="flex border-2 rounded-md w-full max-w-md overflow-hidden">
          <input
            type="text"
            placeholder="Type here..."
            className="w-full py-2 px-3 text-sm focus:outline-none"
          />
          <button className="bg-[#27371B] text-white px-5 py-2 text-sm font-medium">
            Search
          </button>
        </div>
      </div>

      {/* 🖥️ Desktop Navbar */}
      <div className="flex justify-between items-center px-4 lg:px-10 py-4 w-full">
        {/* Left → Logo */}
        <div>
          <img src="logo.png" alt="Logo" className="w-auto h-10 lg:h-14" />
        </div>

        {/* Center → Menu */}
        <ul className="hidden lg:flex gap-6 lg:gap-10 items-center flex-grow justify-center">
          <a href="/" className="font-semibold text-base lg:text-lg text-amber-600 cursor-pointer">
            Home
          </a>
          <a href="/about" className="font-medium text-base lg:text-lg text-gray-800 hover:text-amber-600 cursor-pointer">
            About Us
          </a>
          <a href="/services" className="font-medium text-base lg:text-lg text-gray-800 hover:text-amber-600 cursor-pointer">
            Our Services
          </a>

          {/* Dropdown (Desktop) */}
          <li
            className="relative font-medium text-base lg:text-lg text-gray-800 hover:text-amber-600 cursor-pointer z-70"
            onMouseEnter={() => setShowLocations(true)}
            onMouseLeave={() => setShowLocations(false)}
          >
            Locations ▾
            <ul
              className={`absolute top-0 left-0 mt-2 rounded-md shadow-md ${
                showLocations ? "block" : "hidden"
              }`}
            >
              <div className=" overflow-hidden mt-7">

              <li className="bg-amber-600 text-white hover:bg-[#27371B] cursor-pointer px-4 py-2 whitespace-nowrap">
                CalmKaj Blue Area
              </li>
              <li className="bg-amber-600 text-white hover:bg-[#27371B] cursor-pointer px-4 py-2 whitespace-nowrap">
                CalmKaj I-10
              </li>
              </div>
            </ul>
          </li>

          <li className="font-medium text-base lg:text-lg text-gray-800 hover:text-amber-600 cursor-pointer">
            Blog
          </li>
          <a href="/contact" className="font-medium text-base lg:text-lg text-gray-800 hover:text-amber-600 cursor-pointer">
            Contact Us
          </a>
        </ul>

        {/* Right → Desktop Search Bar */}
        <div className="hidden lg:flex border-2 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Type Here"
            className="text-center w-[160px] text-sm lg:text-base py-2 focus:outline-none"
          />
          <button className="bg-[#27371B] text-white px-5 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-medium">
            Search
          </button>
        </div>

        {/* 📱 Hamburger (Mobile) */}
        <button
          className="lg:hidden text-2xl text-[#27371B]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-amber-600 border-t w-full">
          <ul className="flex flex-col gap-2 p-4 w-full">
            {/* Home → always dark green */}
            <a href="/" className="font-semibold text-base text-white bg-[#27371B] hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
              Home
            </a>

            <a href="/about" className="font-medium text-base text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
              About Us
            </a>
            <a href="/services" className="font-medium text-base text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
              Our Services
            </a>

            {/* Mobile Dropdown */}
            <li
              className="font-medium text-base text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md"
              onClick={() => setShowMobileLocations(!showMobileLocations)}
            >
              Locations ▾
              {showMobileLocations && (
                <ul className="mt-2 flex flex-col">
                  <li className="text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
                    CalmKaj Blue Area
                  </li>
                  <li className="text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
                    CalmKaj I-10
                  </li>
                </ul>
              )}
            </li>

            <li className="font-medium text-base text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
              Blog
            </li>
            <a href="/contact" className="font-medium text-base text-white bg-amber-600 hover:bg-[#27371B] cursor-pointer px-3 py-2 rounded-md">
              Contact Us
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
