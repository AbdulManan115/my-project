import React from "react";

export default function Cards() {
  const carddata = [
    {
      img: "Card1.jpg",
      Heading: "Private Office",
      Description: "Furnished, move-in ready offices with shared amenities.",
    },
    {
      img: "Card2.jpg",
      Heading: "Flexible Desk",
      Description:
        "Available on daily, weekly and monthly rates with shared amenities.",
    },
    {
      img: "Card3.jpeg",
      Heading: "Dedicated Desk",
      Description: "Personal desk in a shared space with shared amenities.",
    },
    {
      img: "Card4.jpg",
      Heading: "Events",
      Description:
        "Well-equipped space for your next event, exhibition or performance.",
    },
    {
      img: "Card5.jpg",
      Heading: "Virtual Office",
      Description: "Use CK address for your business. Mail handling service..",
    },
    {
      img: "Card.jpeg",
      Heading: "Conference Room",
      Description:
        "We are open for visitor bookings, offering a convenient and welcoming experience.",
    },
  ];

  return (
    <div className=" mt-10 lg:translate-y-[-85px] relative z-70 px-4">
      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl  lg:max-w-6xl mx-auto gap-6">
        {carddata.map((items, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl rounded-br-3xl overflow-hidden"
          >
            <div>
              <img
                src={items.img}
                alt={items.Heading}
                className="w-full h-55 object-cover"
              />
            </div>
            <div>
              <p className="text-xl px-5 py-4 font-serif text-[#C66B2A]">
                {items.Heading}
              </p>
            </div>
            <div>
              <p className="text-lg px-5 font-serif text-gray-700 line-clamp-2">
                {items.Description}
              </p>
            </div>
            <button className="text-md px-5 py-2 font-sans font-semibold text-[#C66B2A] hover:text-[#27371B] cursor-pointer">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
