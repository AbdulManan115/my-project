import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Blog() {
  return (
    <div>
      <Navbar />

      {/* 🔹 Header Section */}
      <div className="relative w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/50 z-0"></div>

        {/* Background Image */}
        <img
          src="hero2.jpg"
          className="w-full object-cover h-60 md:h-80 lg:h-[300px]"
        />

        {/* Text over image */}
        <div className="absolute top-[30%] left-0 right-0 px-4 z-10 text-center md:text-left max-w-7xl mx-auto">
          <p className="text-4xl md:text-6xl font-serif text-white">Blogs</p>
          <div className="max-w-[250px] bg-[#FDDC1F] h-[3px] mt-3 mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* 🔹 Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-7xl mx-auto gap-5 md:gap-6 mb-8 px-4">
        
        {/* Blog Card 1 */}
        <div className="p-5 rounded-lg shadow-lg bg-white hover:shadow-xl transition">
          <p className="text-[20px] font-serif text-[#004AAD]">
            Dafter Spaces in Islamabad: Where to Work Smarter in 2025
          </p>
          <p className="text-[16px] font-sans py-5 text-gray-600">
            Islamabad, once known for its calm environment, government offices, and a quiet corporate culture, is now transforming into a thriving hub for freelancers, startups, and
          </p>
          <a
            href=""
            className="text-[14px] font-sans font-semibold text-[#FDDC1F] hover:text-[#004AAD] cursor-pointer transition"
          >
            Read More »
          </a>
          <div className="flex gap-3 border-t p-4 font-serif text-gray-400">
            <p className="text-[12px]">June 17, 2025</p>
            <p className="text-[12px]">No Comments</p>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="rounded-lg shadow-lg bg-white hover:shadow-xl transition">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900/40 z-10 rounded-t-lg"></div>
            <img
              src="blog1.jpg"
              className="w-full h-60 md:h-72 lg:h-80 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-5">
            <p className="text-[20px] font-serif text-[#004AAD]">
              How to Choose the Right Coworking Space for You
            </p>
            <p className="text-[16px] font-sans py-5 text-gray-600">
              The way we work is evolving, and so are the spaces we choose to work in. More professionals across Pakistan are moving away from traditional
            </p>
            <a
              href=""
              className="text-[14px] font-sans font-semibold text-[#FDDC1F] hover:text-[#004AAD] cursor-pointer transition"
            >
              Read More »
            </a>
          </div>
          <div className="flex gap-3 border-t p-4 font-serif text-gray-400">
            <p className="text-[12px]">June 17, 2025</p>
            <p className="text-[12px]">No Comments</p>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="rounded-lg shadow-lg bg-white hover:shadow-xl transition">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900/40 z-10 rounded-t-lg"></div>
            <img
              src="blog2.jpg"
              className="w-full h-60 md:h-72 lg:h-80 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-5">
            <p className="text-[20px] font-serif text-[#004AAD]">
              Why Coworking Spaces Are the Future of Work in Pakistan
            </p>
            <p className="text-[16px] font-sans py-5 text-gray-600">
              In recent years, the way we work has been quietly but steadily transformed and is continuously changing. The long time work model of a 9
            </p>
            <a
              href=""
              className="text-[14px] font-sans font-semibold text-[#FDDC1F] hover:text-[#004AAD] cursor-pointer transition"
            >
              Read More »
            </a>
          </div>
          <div className="flex gap-3 border-t p-4 font-serif text-gray-400">
            <p className="text-[12px]">June 17, 2025</p>
            <p className="text-[12px]">No Comments</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
