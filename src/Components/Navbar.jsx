import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
  <nav className="w-full shadow-md bg-white border-b-2 border-[#FDDC1F]" role="navigation" aria-label="Primary">
      {/* 🔍 Mobile Top Search Bar */}
      <div className="border-b border-[#007BFF]/20 p-3 flex justify-center bg-white lg:hidden">
        <Link
          to="/contact"
          className="bg-[#007BFF] text-white px-5 py-2 text-sm font-medium hover:bg-[#FDDC1F] hover:text-[#1E3A8A] transition-all duration-300 rounded-md shadow-md hover:shadow-lg"
          aria-label="Book a tour"
        >
          Book a Tour
        </Link>
      </div>

      {/* 🖥️ Desktop Navbar */}
      <div className="flex justify-between items-center px-4 lg:px-10 py-4 w-full">
        {/* Left → Logo */}
        <div>
          <Link to="/" aria-label="Go to home">
            <img src="logo.jpg" alt="DafterSpace logo" className="w-auto h-10 lg:h-18" loading="lazy" />
          </Link>
        </div>

        {/* Center → Menu */}
        <ul className="hidden lg:flex gap-6 lg:gap-10 items-center flex-grow justify-center" role="menubar">
          <li role="none">
            <Link
              to="/"
              className="font-semibold text-base lg:text-lg text-[#1E3A8A] hover:text-[#007BFF] cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDDC1F] hover:after:w-full after:transition-all after:duration-300"
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li role="none">
            <Link
              to="/about"
              className="font-medium text-base lg:text-lg text-gray-700 hover:text-[#007BFF] cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDDC1F] hover:after:w-full after:transition-all after:duration-300"
              role="menuitem"
            >
              About Us
            </Link>
          </li>
          <li role="none">
            <Link
              to="/services"
              className="font-medium text-base lg:text-lg text-gray-700 hover:text-[#007BFF] cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDDC1F] hover:after:w-full after:transition-all after:duration-300"
              role="menuitem"
            >
              Our Services
            </Link>
          </li>

          <li role="none">
            <Link
              to="/location"
              className="font-medium text-base lg:text-lg text-gray-700 hover:text-[#007BFF] cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDDC1F] hover:after:w-full after:transition-all after:duration-300"
              role="menuitem"
            >
              Location
            </Link>
          </li>

          <li role="none">
            <Link
              to="/blog"
              className="font-medium text-base lg:text-lg text-gray-700 hover:text-[#007BFF] cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDDC1F] hover:after:w-full after:transition-all after:duration-300"
              role="menuitem"
            >
              Blog
            </Link>
          </li>
          <li role="none">
            <Link
              to="/contact"
              className="font-medium text-base lg:text-lg text-gray-700 hover:text-[#007BFF] cursor-pointer transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FDDC1F] hover:after:w-full after:transition-all after:duration-300"
              role="menuitem"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right → Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="bg-[#007BFF] hover:bg-[#FDDC1F] text-white hover:text-[#1E3A8A] px-5 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform border-2 border-[#007BFF] hover:border-[#FDDC1F]"
            aria-label="Book a tour"
          >
            Book a Tour
          </Link>
        </div>

        {/* 📱 Hamburger (Mobile) */}
        <button
          className="lg:hidden text-2xl text-[#007BFF]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-[#1E3A8A] border-t-2 border-[#FDDC1F] w-full transition-all animate-fadeInUp">
          <ul className="flex flex-col gap-2 p-4 w-full">
            <Link
              to="/"
              className="font-semibold text-base text-white bg-[#007BFF] hover:bg-[#FDDC1F] hover:text-[#1E3A8A] cursor-pointer px-3 py-2 rounded-md transition-all duration-300 animate-fadeInUp"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-medium text-base text-white bg-[#1E3A8A]/80 hover:bg-[#FDDC1F] hover:text-[#1E3A8A] cursor-pointer px-3 py-2 rounded-md transition-all duration-300 animate-fadeInUp delay-100"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="font-medium text-base text-white bg-[#1E3A8A]/80 hover:bg-[#FDDC1F] hover:text-[#1E3A8A] cursor-pointer px-3 py-2 rounded-md transition-all duration-300 animate-fadeInUp delay-200"
              onClick={() => setMenuOpen(false)}
            >
              Our Services
            </Link>

            <Link
              to="/location"
              className="font-medium text-base text-white bg-[#1E3A8A]/80 hover:bg-[#FDDC1F] hover:text-[#1E3A8A] cursor-pointer px-3 py-2 rounded-md transition-all duration-300 animate-fadeInUp delay-300"
              onClick={() => setMenuOpen(false)}
            >
              Location
            </Link>

            <Link
              to="/blog"
              className="font-medium text-base text-white bg-[#1E3A8A]/80 hover:bg-[#FDDC1F] hover:text-[#1E3A8A] cursor-pointer px-3 py-2 rounded-md transition-all duration-300 animate-fadeInUp delay-400"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-medium text-base text-white bg-[#1E3A8A]/80 hover:bg-[#FDDC1F] hover:text-[#1E3A8A] cursor-pointer px-3 py-2 rounded-md transition-all duration-300 animate-fadeInUp delay-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
