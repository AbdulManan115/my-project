import React, { useState, useEffect, useRef } from "react";

export default function LogoSlider() {
  const logos = [
    "/logo1.png",
    "/logo2.jpeg",
    "/logo3.png",
    "/logo4.jpg",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
  ];

  // Responsive visibleSlides
  const getVisibleSlides = () => {
    if (window.innerWidth < 640) return 2; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 5; // laptop/desktop
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
  const [currentIndex, setCurrentIndex] = useState(getVisibleSlides());
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Update slides on resize
  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleSlides();
      setVisibleSlides(newVisible);
      setCurrentIndex(newVisible);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Duplicate slides: add last n in front + first n at end
  const extendedLogos = [
    ...logos.slice(-visibleSlides),
    ...logos,
    ...logos.slice(0, visibleSlides),
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    const totalReal = logos.length;
    if (currentIndex === visibleSlides + totalReal) {
      setIsTransitioning(false);
      setCurrentIndex(visibleSlides);
    } else if (currentIndex === visibleSlides - 1) {
      setIsTransitioning(false);
      setCurrentIndex(visibleSlides + totalReal - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const totalReal = logos.length;
    const maxRealIndex = visibleSlides + totalReal - 1;
    if (currentIndex > maxRealIndex) {
      setIsTransitioning(false);
      setCurrentIndex(visibleSlides);
    } else if (currentIndex < visibleSlides) {
      setIsTransitioning(false);
      setCurrentIndex(maxRealIndex);
    }
  }, [currentIndex, logos.length, visibleSlides]);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, currentIndex]);

  return (
    <>
      <div className="my-5 max-w-7xl mx-auto mt-30">
        <p className="text-3xl md:text-5xl font-serif">Calmkaj Community</p>
      </div>

      <div
        className="w-full bg-white py-10 max-w-8xl mx-auto relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track */}
        <div
          className={`flex ${
            isTransitioning ? "transition-transform duration-500 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / extendedLogos.length
            }%)`,
            width: `${(extendedLogos.length / visibleSlides) * 100}%`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-2"
              style={{ width: `${100 / extendedLogos.length}%` }}
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div
          onClick={handlePrev}
          className="absolute left-0 pl-4 top-1/2 -translate-y-1/2 bg-white text-amber-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-4xl sm:text-5xl cursor-pointer select-none"
        >
          ‹‹
        </div>
        <div
          onClick={handleNext}
          className="absolute right-0 pr-4 top-1/2 -translate-y-1/2 bg-white text-amber-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-4xl sm:text-5xl cursor-pointer select-none"
        >
          ››
        </div>
      </div>
    </>
  );
}
