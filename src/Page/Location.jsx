"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Location() {
  const pinMarkup = renderToStaticMarkup(<MapPin color="#1E3A8A" size={36} />);
  const pinIcon = L.divIcon({
    html: pinMarkup,
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

  const carddata = [
    {
      img: "Card1.jpg",
      Heading: "Private Office",
      Description: "Furnished, move-in ready offices with shared amenities.",
      price: "Rs.40,000 / seat / month (exclusive of tax)",
    },
    {
      img: "Card2.jpg",
      Heading: "Flexible Desk",
      Description:
        "Available on daily, weekly and monthly rates with shared amenities.",
      price: "Rs.23,000 / seat / month (exclusive of tax)",
    },
    {
      img: "Card3.jpeg",
      Heading: "Dedicated Desk",
      Description: "Personal desk in a shared space with shared amenities.",
      price: "Rs.28,000 / seat / month (exclusive of tax)",
    },
    {
      img: "Card4.jpg",
      Heading: "Events",
      Description:
        "Well-equipped space for your next event, exhibition or performance.",
      price: "Inquire with the team for event rates.",
    },
    {
      img: "Card5.jpg",
      Heading: "Virtual Office",
      Description: "Use CK address for your business. Mail handling service.",
      price: "Rs.5500 / month (exclusive of tax)",
    },
    {
      img: "Card.jpeg",
      Heading: "Team Workspace",
      Description:
        "Shared space for small teams to collaborate and work efficiently.",
      price: "Rs.3000 / hour (exclusive of tax)",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#1E3A8A]/60 z-0"></div>
        <img
          src="about1.jpg"
          className="w-full object-cover h-60 md:h-80 lg:h-[300px]"
        />
        <div className="absolute top-[30%] left-0 right-0 px-4 z-10 text-center md:text-left max-w-7xl mx-auto">
          <p className="text-4xl md:text-6xl font-serif text-white">
            Premium Coworking Space in Barakhu Islamabad
          </p>
          <div className="max-w-[250px] bg-[#D4AF37] h-[3px] mt-3 mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Find Space Section */}
      <div className="max-w-7xl mx-auto my-10 px-3 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-4xl font-serif text-[#1E3A8A]">
              Find Your Perfect Coworking Space at DafterSpace
            </p>
            <p className="text-lg py-4 font-sans leading-relaxed text-gray-800">
              Whether you're a solo entrepreneur embarking on a new journey or
              part of a growing team looking for the perfect space, DafterSpace
              offers the ideal environment for your needs. With flexible office
              solutions designed to inspire productivity and creativity, you'll
              find a spot that truly feels like your own.
            </p>
            <a href="/contact">
              <button className="mt-5 sm:mt-6 lg:mt-3 py-2 sm:py-2.5 lg:py-2 px-5 sm:px-7 lg:px-10 bg-[#1E3A8A] hover:bg-[#D4AF37] transition-all duration-300 text-white rounded-lg font-semibold cursor-pointer text-sm sm:text-base lg:text-[18px] w-full sm:w-auto">
                Contact Us →
              </button>
            </a>
          </div>
          <div className="mt-6 lg:mt-0">
            <img
              src="location1.avif"
              className="w-full rounded-lg object-cover h-56 sm:h-72 lg:h-full"
            />
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="max-w-7xl mx-auto bg-[#1E3A8A] text-white px-6 py-10 rounded-2xl flex flex-col md:flex-row items-center justify-between my-15">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-4xl font-bold">Do You Have Questions?</h2>
        </div>
        <a
          href="https://wa.me/923136224778"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#D4AF37] text-[#1E3A8A] font-semibold px-5 py-3 rounded-full shadow hover:bg-[#f5d061] transition"
        >
          💬 <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Services Section */}
      <div className="my-12 sm:my-20 px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl lg:max-w-6xl mx-auto gap-6 sm:gap-8">
          {carddata.map((items, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl overflow-hidden rounded-lg border border-[#D4AF37]/40 hover:shadow-blue-200 transition-all duration-300"
            >
              <img
                src={items.img}
                alt={items.Heading}
                className="w-full h-44 sm:h-55 object-cover"
              />
              <p className="text-lg sm:text-xl px-4 sm:px-5 py-3 sm:py-4 font-serif text-[#1E3A8A]">
                {items.Heading}
              </p>
              <p className="text-sm sm:text-base px-4 sm:px-5 font-serif text-gray-700 leading-relaxed">
                {items.Description}
              </p>
              <p className="text-sm sm:text-base px-4 sm:px-5 font-sans font-bold pt-5 text-[#1E3A8A]">
                {items.price}
              </p>
              <a href="/contact">
                <button className="w-full sm:w-auto text-sm sm:text-md px-4 sm:px-5 py-2 mt-3 font-sans font-semibold text-[#1E3A8A] hover:text-[#D4AF37] cursor-pointer text-center sm:text-left">
                  Book Now
                  <div className="max-w-[80px] sm:max-w-[100px] bg-[#D4AF37] h-[2px] mt-1 mx-auto sm:mx-0"></div>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <p className="text-2xl sm:text-3xl font-serif text-[#1E3A8A] mb-4">
          Our Location
        </p>
        <div className="w-full h-64 sm:h-80 lg:h-[420px] rounded-lg overflow-hidden shadow-2xl">
          <MapContainer
            center={[33.7458403, 73.1915614]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[33.7458403, 73.1915614]}
              icon={pinIcon}
              zIndexOffset={1000}
            >
              <Popup>DafterSpace</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
