import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapPin } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Ensure default marker icons work with Vite bundling
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Location() {
    const pinMarkup = renderToStaticMarkup(<MapPin color="#C66B2A" size={36} />)
    const pinIcon = L.divIcon({
        html: pinMarkup,
        className: '',
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36],
    })
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
            price: "Rs.28,000 / seat / month(exclusive of tax",
        },
        {
            img: "Card4.jpg",
            Heading: "Events",
            Description:
                "Well-equipped space for your next event, exhibition or performance.",
                price:"Inquire with the team for event rates.",
        },
        {
            img: "Card5.jpg",
            Heading: "Virtual Office",
            Description: "Use CK address for your business. Mail handling service..",
            price:"Rs.5500 / month (exclusive of tax)",
        },
        {
            img: "Card.jpeg",
            Heading: "Team Workspace",
            Description:
                "Shared space for small teams to collaborate and work efficiently.",
                price:"Rs.3000 / hour (exclusive of tax)"
        },
    ];
    return (
        <div>
            <Navbar />
            <div className="relative w-full">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                {/* Background Image */}
                <img src="about1.jpg" className="w-full object-cover h-60 md:h-80 lg:h-[300px]" />

                {/* Text over image */}
                <div className="absolute top-[30%] left-0 right-0 px-4 z-10 text-center md:text-left max-w-7xl mx-auto">
                    <p className="text-4xl md:text-6xl font-serif text-white">Premium Coworking Space in Barakhu Islamabad</p>
                    <div className="max-w-[250px] bg-[#C66A28] h-[3px] mt-3 mx-auto md:mx-0"></div>
                </div>
            </div>
            {/* FindSpace section */}
            <div className="max-w-7xl mx-auto my-10 px-3 sm:px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">
                    <div>
                        <div>
                            <p className='text-2xl sm:text-3xl lg:text-4xl font-serif'>Find Your Perfect Cooworking Space at CalmKaaj</p>
                            <p className='text-base sm:text-lg py-4 font-sans'>Whether you're a solo entrepreneur embarking on a new journey or part of a growing team looking for the perfect space, CalmKaaj offers the ideal environment for your needs. With flexible office solutions designed to inspire productivity and creativity, you'll find a spot that truly feels like your own. Join us and become part of a dynamic and supportive community where collaboration and innovation thrive. Together, we can achieve great things!</p>
                            {/* Button */}
                            <a href="/contact">
                                <button className="mt-5 sm:mt-6 lg:mt-3 py-2 sm:py-2.5 lg:py-2 px-5 sm:px-7 lg:px-10 bg-[#27371B] hover:bg-[#b85e22] transition-all duration-300 text-white rounded-lg font-semibold cursor-pointer text-sm sm:text-base lg:text-[18px] w-full sm:w-auto">
                                    Contact Us →
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='mt-6 lg:mt-0'>
                        <img src='location1.avif' className='w-full rounded-lg object-cover h-56 sm:h-72 lg:h-full' />
                    </div>
                </div>
            </div>
            {/* question section */}
            <div className="max-w-7xl mx-auto bg-[#27371B] text-white px-6 py-10 rounded-2xl flex flex-col md:flex-row items-center justify-between my-15">
                {/* Left Side - Text */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-4xl font-bold">Do You Have Questions?</h2>
                </div>

                {/* Right Side - WhatsApp Button */}
                <a
                    href="https://wa.me/+92 313 6224778 " // <-- Replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-green-600 font-semibold px-5 py-3 rounded-full shadow hover:bg-green-50 transition"
                >
                    <whatsapp className="text-2xl" />
                    <span>Chat on WhatsApp</span>
                </a>
            </div>
            {/* services */}
            <div className="my-12 sm:my-20 px-3 sm:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl lg:max-w-6xl mx-auto gap-6 sm:gap-8">
                    {carddata.map((items, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-2xl overflow-hidden rounded-lg"
                        >
                            <div>
                                <img
                                    src={items.img}
                                    alt={items.Heading}
                                    className="w-full h-44 sm:h-55 object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-lg sm:text-xl px-4 sm:px-5 py-3 sm:py-4 font-serif text-[#C66B2A]">
                                    {items.Heading}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm sm:text-base px-4 sm:px-5 font-serif text-gray-700 line-clamp-3 sm:line-clamp-2 leading-relaxed">
                                    {items.Description}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm sm:text-base px-4 sm:px-5 font-sans  line-clamp-3 sm:line-clamp-2 leading-relaxed font-bold pt-5">{items.price}</p>
                            </div>
                            <a href="/contact">
                                <button className="w-full sm:w-auto text-sm sm:text-md px-4 sm:px-5 py-2 mt-3 sm:mt-2 font-sans font-semibold text-[#C66B2A] hover:text-[#27371B] cursor-pointer text-center sm:text-left">
                                    Book Now
                                    <div className="max-w-[80px] sm:max-w-[100px] bg-[#C66A28] h-[2px] mt-1 mx-auto sm:mx-0"></div>
                                </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map section under services */}
            <div className="max-w-7xl mx-auto px-4 my-12">
                <p className="text-2xl sm:text-3xl font-serif text-[#27371B] mb-4">Our Location</p>
                <div className="w-full h-64 sm:h-80 lg:h-[420px] rounded-lg overflow-hidden shadow-2xl">
                    <MapContainer center={[33.7458403, 73.1915614]} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; OpenStreetMap contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[33.7458403, 73.1915614]} icon={pinIcon}  zIndexOffset={1000} >
                            <Popup>DafterSpace</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Footer />
        </div>
    )
}
