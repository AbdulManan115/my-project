import { ChevronDown, MapPin, Briefcase, Mail, Phone, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function BookingForm() {
  const headingRef = useScrollAnimation();
  const formCardRef = useScrollAnimation();

  const [openWorkspace, setOpenWorkspace] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    consent: false
  });

  const workspaceTypes = [
    "Private Offices",
    "Flexible Desk",
    "Dedicated Desk",
    "Events",
    "Virtual Offices",
    "Team Workspace",
  ];

  const handleWorkspaceSelect = (item) => {
    setSelectedWorkspace(item);
    setOpenWorkspace(false);
  };

  return (
    <div className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#007BFF]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDDC1F]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading Section */}
        <div ref={headingRef} className="scroll-animate scroll-fadeInUp text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FDDC1F]/20 text-[#1E3A8A] px-4 py-2 rounded-full text-sm font-medium mb-4 border border-[#FDDC1F]">
            <Sparkles className="w-4 h-4" />
            <span>Start Your Journey</span>
          </div>
          <h2 className="text-[#1E3A8A] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Book a Tour
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Share your details and our team will reach out with workspace options tailored to your needs.
          </p>
        </div>

        {/* Form Card */}
        <div ref={formCardRef} className="scroll-animate scroll-slideUp scroll-delay-200 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border-2 border-[#007BFF]/20">
          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {/* Location Button */}
            <Link 
              to="/location" 
              aria-label="Go to Location" 
              className="group relative overflow-hidden border-2 border-[#007BFF] rounded-xl p-4 sm:p-5 bg-[#007BFF] hover:bg-[#1E3A8A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-[#FDDC1F]/30 transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-xs font-medium">Select</p>
                  <p className="text-white text-sm sm:text-base font-bold">Location</p>
                </div>
              </div>
            </Link>

            {/* Workspace Dropdown */}
            <div className="relative">
              <div 
                className="group border-2 border-[#007BFF]/30 rounded-xl p-4 sm:p-5 bg-white hover:border-[#007BFF] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                onClick={() => setOpenWorkspace(!openWorkspace)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#007BFF]/10 p-2 rounded-lg group-hover:bg-[#007BFF]/20 transition-colors">
                    <Briefcase className="w-5 h-5 text-[#007BFF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs font-medium">Choose</p>
                    <p className="text-[#1E3A8A] text-sm sm:text-base font-semibold truncate">
                      {selectedWorkspace || "Workspace Type"}
                    </p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-[#007BFF] transition-transform duration-300 ${openWorkspace ? 'rotate-180' : ''}`} />
                </div>
              </div>
              
              {/* Dropdown Menu */}
              {openWorkspace && (
                <ul className="absolute left-0 top-full mt-2 w-full bg-white rounded-xl z-20 shadow-2xl border-2 border-[#007BFF]/20 overflow-hidden animate-fadeInUp">
                  {workspaceTypes.map((item, index) => (
                    <li
                      key={item}
                      onClick={() => handleWorkspaceSelect(item)}
                      className="px-4 py-3 hover:bg-[#FDDC1F]/20 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0 text-gray-700 hover:text-[#1E3A8A] font-medium text-sm"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Email Input */}
            <div className="group border-2 border-[#007BFF]/30 rounded-xl p-4 sm:p-5 bg-white hover:border-[#007BFF] focus-within:border-[#007BFF] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-[#007BFF]/10 p-2 rounded-lg group-hover:bg-[#007BFF]/20 group-focus-within:bg-[#007BFF]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#007BFF]" />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="text-gray-500 text-xs font-medium block">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-[#1E3A8A] placeholder-gray-400 focus:outline-none font-semibold text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Phone Input */}
            <div className="group border-2 border-[#007BFF]/30 rounded-xl p-4 sm:p-5 bg-white hover:border-[#007BFF] focus-within:border-[#007BFF] transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="bg-[#007BFF]/10 p-2 rounded-lg group-hover:bg-[#007BFF]/20 group-focus-within:bg-[#007BFF]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#007BFF]" />
                </div>
                <div className="flex-1">
                  <label htmlFor="phone" className="text-gray-500 text-xs font-medium block">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-transparent text-[#1E3A8A] placeholder-gray-400 focus:outline-none font-semibold text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="mb-6 sm:mb-8 animate-fadeInUp delay-200">
            <label className="flex items-start gap-3 text-gray-600 text-sm sm:text-base leading-relaxed cursor-pointer group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input 
                  type="checkbox" 
                  checked={formData.consent}
                  onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  className="w-5 h-5 accent-[#007BFF] cursor-pointer rounded border-2 border-gray-300 focus:ring-2 focus:ring-blue-200 transition-all" 
                />
              </div>
              <span className="group-hover:text-gray-800 transition-colors">
                I agree that <span className="font-semibold text-[#007BFF]">DafterSpace</span> may store my details to respond to my enquiry.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center animate-fadeInUp delay-300">
            <button 
              className="group relative overflow-hidden bg-[#007BFF] hover:bg-[#1E3A8A] text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform text-sm sm:text-base flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border-2 border-[#007BFF] hover:border-[#FDDC1F]"
              disabled={!formData.consent}
            >
              <span className="relative z-10">Submit Request</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-[#FDDC1F]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-[#007BFF]/20 animate-fadeInUp delay-400">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FDDC1F] rounded-full animate-pulse"></div>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#007BFF] rounded-full animate-pulse"></div>
                <span>Secure & Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1E3A8A] rounded-full animate-pulse"></div>
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
