import { useState } from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Mail,ChevronDown, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openWorkspace, setOpenWorkspace] = useState(false);
  return (
    <div>
      <Navbar />
      {/* Image section */}
      <div className='relative'>
        <img src='contact1.jpeg' className='h-[800px] w-screen object-cover' />
      </div>
      <div className='bg-[#BD6627]/90  rounded-lg max-w-7xl mx-auto absolute top-1/4 bottom-0 left-0 right-0 h-[600px]  w-auto'>
        <div className='grid grid-cols-2  max-w-6xl mx-auto p-10 mt-10 gap-5'>
          <div className=''>
            <p className='text-white text-6xl font-serif space-y-5'>Get in Touch with CalmKaaj</p>
            <div>
              <p className='py-5 text-[20px] text-white font-sans'>Get in touch with CalmKaaj today and start your new office experience.</p>
            </div>
            <div className="text-left ">
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 md:mb-4">Contact Us</h3>
              <ul className="space-y-3 text-white text-sm sm:text-base md:text-lg font-sans max-w-5xl w-full">
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="text-white hover:text-amber-600 flex-shrink-0" />
                  <span>hello@calmkaaj.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="text-white hover:text-amber-600 flex-shrink-0" />
                  <span>+92 300 1234567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin size={18} className="text-white hover:text-amber-600 flex-shrink-0" />
                  <span>Blue Area, Islamabad</span>
                </li>
                <li className="flex items-start space-x-3 text-xs sm:text-sm md:text-base">
                  <MapPin size={18} className="text-white hover:text-amber-600 flex-shrink-0 mt-1" />
                  <span>CalmKaaj Crossroads: Farid Business Park I-10/3, Islamabad</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=''>
            <div className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1010px] mx-auto mt-12 mb-3 gap-4 sm:gap-5 space-y-5">
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
        </div>
      </div>
      <Footer />
    </div>
  )
}
