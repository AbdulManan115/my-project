"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutUs() {
  const carddata = [
    {
      Heading: "Samina Rizwan ",
      img: "team1.avif",
      desciption: "Co-Founder",
      role: "founder",
    },
    {
      Heading: "Sheraz Karim",
      img: "team2.avif",
      desciption: "Co-Founder",
      role: "founder",
    },
    {
      Heading: "Taimur Nawaz",
      img: "team3.avif",
      desciption: "Co-Founder",
      role: "founder",
    },
    {
      Heading: "Raja Manan Zafar",
      img: "team4.jpg",
      desciption: "Managing Partner",
      role: "manager",
    },
    {
      Heading: "Chanelle Adam Khan",
      img: "teamm5.jpg",
      desciption: "Partner",
      role: "manager",
    },
    {
      Heading: "Zeb Ayaz",
      img: "team6.avif",
      desciption: "Chief Executive Officer",
      role: "team",
    },
    {
      Heading: "Shayan Qureshi",
      img: "team7.avif",
      desciption: "Chief Growth Officer",
      role: "team",
    },
    {
      Heading: "Usman Mushtaq",
      img: "team8.avif",
      desciption: "Manager Admin & Finance",
      role: "team",
    },
    {
      Heading: "Usman Mushtaq",
      img: "team9.avif",
      desciption: "Manager Admin & Finance",
      role: "team",
    },
    {
      Heading: "Usman Mushtaq",
      img: "team10.png",
      desciption: "Manager Admin & Finance",
      role: "team",
    },
  ];

  const founder = carddata.filter((item) => item.role === "founder");
  const manager = carddata.filter((item) => item.role === "manager");
  const team = carddata.filter((item) => item.role === "team");

  return (
    <div className="relative">
      <Navbar />

      {/* Hero / Image section */}
      <div className="relative w-full">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Background Image */}
        <img src="about1.jpg" className="h-70 w-full object-cover" />

        {/* Text over image */}
        <div className="absolute top-[30%] left-0 right-0 px-4 z-10 text-center md:text-left max-w-7xl mx-auto">
          <p className="text-4xl md:text-6xl font-serif text-white">About Us</p>
          <div className="max-w-[250px] bg-[#C66A28] h-[3px] mt-3 mx-auto md:mx-0"></div>
        </div>
      </div>

      {/* Text section */}
      <div className="py-10 px-4 md:px-0">
        <p className="max-w-7xl mx-auto font-serif text-[16px] md:text-[18px] my-5 leading-relaxed">
          <span className="text-[#CC3366]">CalmKaaj</span> aims to unite loosely
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
          members need a cost effective, efficient and comfortable workspace
          with associated services. As people, they desire community, one which
          radiates positively and captures the magic of collaboration. CalmKaaj
          brings that by design! Our founders’ international experience as
          leaders and change-makers have shaped CK such that we provide an
          unmatched level of care and bespoke offerings for our members, further
          enriching the day-to-day office routine. That’s our specialty!
        </p>
        <p className="max-w-7xl mx-auto font-serif text-[16px] md:text-[18px] my-5 leading-relaxed">
          CalmKaaj carries a quintessentially Pakistani identity. We draw
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
          <p className="text-center text-2xl font-serif">Our Vision</p>
          <p className="text-base md:text-lg text-black font-sans py-3 leading-relaxed">
            To create inclusive and innovative coworking spaces that empower
            professionals and businesses to thrive through collaboration and
            growth.
          </p>
        </div>
        <div>
          <p className="text-center text-2xl font-serif">Our Mission</p>
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
        <p className="text-3xl md:text-4xl font-serif">Meet the Team</p>
      </div>

      {/* Founders */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mt-8">
        <p className="text-xl md:text-2xl font-serif">Founders</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {founder.map((items, index) => (
            <Card
              key={index}
              Heading={items.Heading}
              img={items.img}
              desciption={items.desciption}
            />
          ))}
        </div>
      </div>

      {/* Managers */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <p className="text-xl md:text-2xl font-serif">Managing Partner</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {manager.map((items, index) => (
            <Card
              key={index}
              Heading={items.Heading}
              img={items.img}
              desciption={items.desciption}
            />
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <p className="text-xl md:text-2xl font-serif">Team</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {team.map((items, index) => (
            <Card
              key={index}
              Heading={items.Heading}
              img={items.img}
              desciption={items.desciption}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Card({ Heading, img, desciption }) {
  return (
    <div className="border-4 border-[#df8240] relative my-5">
      <img src={img} className="w-full" />
      <div className="border-4 border-[#df8240] p-5 absolute -bottom-12 right-1/2 translate-x-1/2 bg-[#27371B] w-[90%] text-white text-[16px] md:text-[20px] font-serif">
        {Heading}
        <p className="text-sm md:text-lg font-sans">{desciption}</p>
      </div>
    </div>
  );
}
