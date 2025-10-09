import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#167AFF] py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid-footer-template grid gap-6 md:gap-10">
          
          {/* Column 1 - Logo */}
          <div className="flex justify-start">
            <img 
              src="uplogo.png" 
              alt="uplogo.png" 
              className="h-20 sm:h-40 md:h-48 lg:h-60 w-auto object-contain" 
            />
          </div>

          {/* Column 2 - Navigation */}
          <div className="text-left">
            <a href="/" className="text-lg sm:text-xl text-white font-semibold font-serif mb-3 md:mb-4 cursor-pointer px-2">
              Home
            </a>
            <ul className="space-y-1 text-white text-base sm:text-lg font-sans flex-col flex">
              <a href="/about" className=" px-2 py-1 rounded-md transition">About Us</a>
              <a href="/services" className=" px-2 py-1 rounded-md transition">Our Services</a>
              <a href="/location" className=" px-2 py-1 rounded-md transition">Location</a>
              <a href="/blog" className=" px-2 py-1 rounded-md transition">Blog</a>
              <a href="/contact" className=" px-2 py-1 rounded-md transition">Contact</a>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white text-sm sm:text-base md:text-lg font-sans max-w-5xl w-full">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <span>hello@calmkaaj.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <span>+92 313 6224778 | +92 323 1557988</span>
              </li>
              <a href="/location" className="flex cursor-pointer items-center space-x-3  px-1 py-1 rounded-md transition">
                <MapPin size={20} className="text-white flex-shrink-0" />
                <span>Barakahu Islamabad</span>
              </a>
              <a href="/location" className="flex cursor-pointer items-start space-x-3 text-xs sm:text-sm md:text-base   px-1 py-1 rounded-md transition">
                <MapPin size={20} className="text-white flex-shrink-0 mt-1" />
                <span>Kalsoom Plaza, 1st Floor, Murree Road, Barakhu, Islamabad</span>
              </a>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex justify-start">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/dafterspace/"
                  
                  className="p-2 bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-full hover:bg-[#1E3A8A] hover:text-white transition w-fit"
                >
                  <Icon size={20} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="text-left md:text-center text-xs sm:text-sm text-[#1E3A8A] border-t border-[#1E3A8A]/30 bg-white py-3 sm:py-4 px-4">
        © {new Date().getFullYear()} CalmKaaj. All Rights Reserved. Design by{" "}
        <span className="font-semibold text-[#1E3A8A]">Bit Technologies</span>
      </div>
    </>
  );
}
