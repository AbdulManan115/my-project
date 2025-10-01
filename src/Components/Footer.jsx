import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#F2F2F2] py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid-footer-template grid gap-6 md:gap-10">
          
          {/* Column 1 - Logo */}
          <div className="flex justify-start">
            <img 
              src="1.png" 
              alt="CalmKaaj Logo" 
              className="h-20 sm:h-40 md:h-48 lg:h-60 w-auto object-contain" 
            />
          </div>

          {/* Column 2 - Navigation */}
          <div className="text-left">
            <h3 className="text-lg sm:text-xl text-amber-600 font-semibold font-serif mb-3 md:mb-4">
              Home
            </h3>
            <ul className="space-y-1 text-black text-base sm:text-lg font-sans">
              <li className="hover:text-amber-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-amber-600 cursor-pointer transition-colors">Our Services</li>
              <li className="hover:text-amber-600 cursor-pointer transition-colors">CalmKaaj Blue Area</li>
              <li className="hover:text-amber-600 cursor-pointer transition-colors">CalmKaaj I-10</li>
              <li className="hover:text-amber-600 cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-amber-600 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-serif text-black mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-3 text-black text-sm sm:text-base md:text-lg font-sans max-w-5xl w-full">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-black hover:text-amber-600 flex-shrink-0" />
                <span>hello@calmkaaj.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-black hover:text-amber-600 flex-shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-black hover:text-amber-600 flex-shrink-0" />
                <span>Blue Area, Islamabad</span>
              </li>
              <li className="flex items-start space-x-3 text-xs sm:text-sm md:text-base">
                <MapPin size={18} className="text-black hover:text-amber-600 flex-shrink-0 mt-1" />
                <span>CalmKaaj Crossroads: Farid Business Park I-10/3, Islamabad</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="flex justify-start">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
              <a
                href="#"
                className="p-2 bg-black border border-gray-300 rounded-full hover:bg-amber-600 hover:text-white text-white transition w-fit"
                aria-label="Facebook"
              >
                <Facebook size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-black border border-gray-300 rounded-full hover:bg-amber-600 hover:text-white text-white transition w-fit"
                aria-label="Instagram"
              >
                <Instagram size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-black border border-gray-300 rounded-full hover:bg-amber-600 text-white transition w-fit"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="p-2 border bg-black border-gray-300 rounded-full hover:bg-amber-600 hover:text-white text-white transition w-fit"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="text-left md:text-center text-xs sm:text-sm text-white border-t bg-[#C66A28] border-white/30 py-3 sm:py-4 px-4">
        © {new Date().getFullYear()} CalmKaaj. All Rights Reserved. Design by{" "}
        <span className="font-semibold">Bit Technologies</span>
      </div>
    </>
  );
}
