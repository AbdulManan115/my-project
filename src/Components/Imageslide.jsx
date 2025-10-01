import React, { useEffect, useRef, useState } from "react";

export default function LogoSlider() {
  const images = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
    "/slide7.jpg",
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
    "/slide7.jpg",
    "/slide7.jpg",
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
    "/slide7.jpg",
  ];

  // ✅ Responsive visibleSlides
  const getVisibleSlides = () => {
    if (window.innerWidth < 640) return 2; // mobile
    if (window.innerWidth < 1024) return 3; // tablet
    return 5; // laptop/desktop (original design)
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const trackRef = useRef(null);

  // Update visibleSlides on resize
  useEffect(() => {
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Build extended images for infinite loop
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  const slideWidthPercent = 100 / visibleSlides;
  const nextSlide = () => {
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };
  const prevSlide = () => {
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  // Infinite loop effect
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === extendedImages.length - 1) {
        setIsAnimating(false);
        setIndex(1);
      } else if (index === 0) {
        setIsAnimating(false);
        setIndex(extendedImages.length - 2);
      }
    };

    const trackEl = trackRef.current;
    if (trackEl) trackEl.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      if (trackEl)
        trackEl.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [index, extendedImages.length]);

  useEffect(() => {
    if (!isAnimating) {
      const id = setTimeout(() => setIsAnimating(true), 0);
      return () => clearTimeout(id);
    }
  }, [isAnimating]);

  const translateX = -(index * slideWidthPercent);

  return (
    <div className="relative w-full flex items-center justify-center my-10 sm:my-16 lg:my-20 overflow-hidden">
      {/* Left button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-3 text-2xl sm:text-3xl lg:text-4xl text-white z-10"
      >
        ❮❮
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className={`flex items-center gap-2 sm:gap-3 lg:gap-4 ${
          isAnimating ? "transition-transform duration-500 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(${translateX}%)`,
        }}
      >
        {extendedImages.map((img, idx) => (
          <div
            key={`${img}-${idx}`}
            style={{ flex: `0 0 ${slideWidthPercent}%` }}
            className="flex items-center justify-center"
          >
            <img
              src={img}
              alt={`logo-${idx}`}
              className="h-24 sm:h-40 lg:h-60 w-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-3 text-2xl sm:text-3xl lg:text-4xl text-white z-10"
      >
        ❯❯
      </button>
    </div>
  );
}
