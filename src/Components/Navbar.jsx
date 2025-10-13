import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
  <nav className="w-full shadow-md bg-white" role="navigation" aria-label="Primary">
      {/* 🔍 Mobile Top Search Bar */}
      <div className="border-b p-3 flex justify-center bg-white lg:hidden">
        <Link
          to="/contact"
          className="bg-[#007BFF] text-white px-5 py-2 text-sm font-medium hover:bg-[#C4A300] transition rounded-md"
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
              className="font-semibold text-base lg:text-lg text-[#007BFF] hover:text-[#005FCC] cursor-pointer"
              role="menuitem"
            >
              Home
            </Link>
          </li>
          <li role="none">
            <Link
              to="/about"
              className="font-medium text-base lg:text-lg text-gray-800 hover:text-[#007BFF] cursor-pointer"
              role="menuitem"
            >
              About Us
            </Link>
          </li>
          <li role="none">
            <Link
              to="/services"
              className="font-medium text-base lg:text-lg text-gray-800 hover:text-[#007BFF] cursor-pointer"
              role="menuitem"
            >
              Our Services
            </Link>
          </li>

          <li role="none">
            <Link
              to="/location"
              className="font-medium text-base lg:text-lg text-gray-800 hover:text-[#007BFF] cursor-pointer"
              role="menuitem"
            >
              Location
            </Link>
          </li>

          <li role="none">
            <Link
              to="/blog"
              className="font-medium text-base lg:text-lg text-gray-800 hover:text-[#007BFF] cursor-pointer"
              role="menuitem"
            >
              Blog
            </Link>
          </li>
          <li role="none">
            <Link
              to="/contact"
              className="font-medium text-base lg:text-lg text-gray-800 hover:text-[#007BFF] cursor-pointer"
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
            className="btn-primary focus-ring px-5 lg:px-6 py-2 lg:py-3 text-sm lg:text-base"
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
        <div id="mobile-menu" className="lg:hidden bg-[#007BFF] border-t w-full transition-all">
          <ul className="flex flex-col gap-2 p-4 w-full">
            <Link
              to="/"
              className="font-semibold text-base text-white bg-[#005FCC] hover:bg-[#004C99] cursor-pointer px-3 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-medium text-base text-white bg-[#007BFF] hover:bg-[#005FCC] cursor-pointer px-3 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="font-medium text-base text-white bg-[#007BFF] hover:bg-[#005FCC] cursor-pointer px-3 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Our Services
            </Link>

            <Link
              to="/location"
              className="font-medium text-base text-white bg-[#007BFF] hover:bg-[#005FCC] cursor-pointer px-3 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Location
            </Link>

            <Link
              to="/blog"
              className="font-medium text-base text-white bg-[#007BFF] hover:bg-[#005FCC] cursor-pointer px-3 py-2 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-medium text-base text-white bg-[#007BFF] hover:bg-[#005FCC] cursor-pointer px-3 py-2 rounded-md"
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
