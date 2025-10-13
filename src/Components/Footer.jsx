import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#007BFF] py-8 md:py-12 border-t-4 border-[#FDDC1F] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E3A8A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDDC1F]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid-footer-template grid gap-6 md:gap-10 relative z-10">
          
          {/* Column 1 - Logo */}
          <div className="flex justify-start animate-fadeInUp">
            <img 
              src="uplogo.png" 
              alt="uplogo.png" 
              className="h-20 sm:h-40 md:h-48 lg:h-60 w-auto object-contain hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Column 2 - Navigation */}
          <div className="text-left animate-fadeInUp delay-100">
            <Link to="/" className="text-lg sm:text-xl text-[#FDDC1F] font-bold font-serif mb-3 md:mb-4 cursor-pointer px-2 inline-block hover:scale-105 transition-transform duration-300">
              Home
            </Link>
            <ul className="space-y-2 text-white text-base sm:text-lg font-sans flex-col flex">
              <Link to="/about" className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] hover:translate-x-1 inline-block">About Us</Link>
              <Link to="/services" className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] hover:translate-x-1 inline-block">Our Services</Link>
              <Link to="/location" className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] hover:translate-x-1 inline-block">Location</Link>
              <Link to="/blog" className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] hover:translate-x-1 inline-block">Blog</Link>
              <Link to="/contact" className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] hover:translate-x-1 inline-block">Contact</Link>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="text-left animate-fadeInUp delay-200">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FDDC1F] mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white text-sm sm:text-base md:text-lg font-sans max-w-5xl w-full">
              <li className="flex items-center space-x-3 hover:text-[#FDDC1F] transition-colors duration-300 group">
                <Mail size={18} className="text-[#FDDC1F] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>hello@DafterSpace.com</span>
              </li>
              <li className="flex items-center space-x-3 hover:text-[#FDDC1F] transition-colors duration-300 group">
                <Phone size={18} className="text-[#FDDC1F] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>+92 313 6224778 | +92 323 1557988</span>
              </li>
              <Link to="/location" className="flex cursor-pointer items-center space-x-3 px-1 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] group">
                <MapPin size={20} className="text-[#FDDC1F] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>Barakahu Islamabad</span>
              </Link>
              <Link to="/location" className="flex cursor-pointer items-start space-x-3 text-xs sm:text-sm md:text-base px-1 py-1 rounded-md transition-all duration-300 hover:bg-[#1E3A8A] group">
                <MapPin size={20} className="text-[#FDDC1F] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span>Kalsoom Plaza, 1st Floor, Murree Road, Barakhu, Islamabad</span>
              </Link>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex justify-start animate-fadeInUp delay-300">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/dafterspace/"
                  className="p-3 bg-white border-2 border-[#FDDC1F] text-[#1E3A8A] rounded-full hover:bg-[#FDDC1F] hover:text-white transition-all duration-300 w-fit hover:scale-110 hover:rotate-12 transform shadow-lg hover:shadow-xl"
                >
                  <Icon size={20} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="text-left md:text-center text-xs sm:text-sm text-[#1E3A8A] border-t-2 border-[#FDDC1F] bg-white py-3 sm:py-4 px-4 animate-fadeInUp">
        © {new Date().getFullYear()} DafterSpace. All Rights Reserved. Design by{" "}
        <span className="font-bold text-[#007BFF] hover:text-[#FDDC1F] transition-colors duration-300 cursor-pointer">Red Dev.</span>
      </div>
    </>
  );
}
