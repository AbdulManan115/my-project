"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
  const carddata = [
    { Heading: "Usama Bhatti", img: "member1.webp", desciption: "CEO", role: "Our Team" },
    { Heading: "Aman Zaheer", img: "member3.webp", desciption: "Manager", role: "Our Team" },
    { Heading: "Hamza Ali", img: "member2.webp", desciption: "Senior Executive", role: "Our Team" },
    { Heading: "Subhan Ali", img: "member4.png", desciption: "Designer", role: "manager" },
    { Heading: "Abdul Manan", img: "meber5.png", desciption: "Developer", role: "manager" },
  ];

  const founder = carddata.filter((item) => item.role === "Our Team");
  const manager = carddata.filter((item) => item.role === "manager");

  return (
    <div className="relative">
      <Navbar />

      {/* Hero / Image section */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#1E3A8A]/60 z-0"></div>
        <img src="about1.jpg" className="h-70 w-full object-cover" />

        <div className="absolute top-[30%] left-0 right-0 px-4 z-10 text-center md:text-left max-w-7xl mx-auto">
          <p className="text-4xl md:text-6xl font-serif text-white">About Us</p>
          <div className="max-w-[250px] bg-[#C4A300] h-[3px] mt-3 mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Text section */}
      <div className="py-10 px-4 md:px-0">
        <p className="max-w-7xl mx-auto font-serif text-[16px] md:text-[18px] my-5 leading-relaxed">
          <span className="text-[#1E3A8A] font-semibold">DafterSpace</span> aims to unite loosely
          connected individuals into a thriving community of members, fostering
          their individual success while simultaneously enriching the collective
          ecosystem. Our coworking facilities are designed to provide
          ergonomically designed office spaces and amenities for professionals
          of all backgrounds while our CK facility staff members enable our
          platform for networking and collaboration – elevating the coworking
          experience to the next level.
        </p>

        <p className="max-w-7xl mx-auto font-serif text-[16px] md:text-[18px] leading-relaxed">
          Our growth is driven by our community members. As professionals, our
          members need a cost-effective, efficient and comfortable workspace
          with associated services. As people, they desire community — one which
          radiates positivity and captures the magic of collaboration. DafterSpace
          brings that by design! Our founders’ international experience as
          leaders and change-makers have shaped CK such that we provide an
          unmatched level of care and bespoke offerings for our members, further
          enriching the day-to-day office routine. That’s our specialty!
        </p>

        <p className="max-w-7xl mx-auto font-serif text-[16px] md:text-[18px] my-5 leading-relaxed">
          DafterSpace carries a quintessentially Pakistani identity. We draw
          inspiration from our leaders, thinkers, artistes and philanthropists.
          Our facilities and services are designed for our community’s local
          needs and we offer warm, friendly spaces for thought leadership,
          artistic expression and humanitarian causes to blossom into effective,
          executable initiatives.
        </p>
      </div>

      {/* Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 px-4 md:px-0">
        <div>
          <p className="text-center text-2xl font-serif text-[#1E3A8A]">Our Vision</p>
          <p className="text-base md:text-lg text-black font-sans py-3 leading-relaxed">
            To create inclusive and innovative coworking spaces that empower
            professionals and businesses to thrive through collaboration and
            growth.
          </p>
        </div>
        <div>
          <p className="text-center text-2xl font-serif text-[#1E3A8A]">Our Mission</p>
          <p className="text-base md:text-lg text-black font-sans py-3 leading-relaxed">
            To transform loosely connected groups into a healthy community of CK
            Network members, especially participating women and underserved
            individuals, who contribute high value to their own business
            ventures as well as to the community’s ecosystem.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto mt-16 px-4 md:px-0">
        <p className="text-3xl md:text-4xl font-serif text-[#1E3A8A]">Meet Our Professionals</p>
      </div>

      {/* Founders */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mt-8">
        <p className="text-xl md:text-2xl font-serif text-[#1E3A8A]">Our Mentors</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {founder.map((items, index) => (
            <Card key={index} Heading={items.Heading} img={items.img} desciption={items.desciption} />
          ))}
        </div>
      </div>

      {/* Managers */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <p className="text-xl md:text-2xl font-serif text-[#1E3A8A]">Managing Partner</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {manager.map((items, index) => (
            <Card key={index} Heading={items.Heading} img={items.img} desciption={items.desciption} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Card({ Heading, img, desciption }) {
  return (
    <div className="border-4 border-[#1E3A8A] bg-gradient-to-b from-[#1E3A8A] to-white relative my-5">
      <img src={img} className="w-full" />
      <div className="border-4 border-[#1E3A8A] p-5 absolute -bottom-12 right-1/2 translate-x-1/2 bg-[#1E3A8A] w-[90%] text-white text-[16px] md:text-[20px] font-serif">
        {Heading}
        <p className="text-sm md:text-lg font-sans">{desciption}</p>
      </div>
    </div>
  );
}
