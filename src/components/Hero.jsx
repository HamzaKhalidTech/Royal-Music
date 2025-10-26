import React, { useState, useEffect } from "react";
import display from "../assets/display.png";
import dis2 from "../assets/jj.webp";
import d3 from "../assets/dis2.jpg";

const Hero = () => {
  const images = [display, dis2, d3];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full flex flex-col lg:flex-row overflow-hidden font-inter bg-white mt-8">
      {/* ===== Left Content ===== */}
      <div className="lg:w-5/12 w-full flex flex-col justify-center px-6 sm:px-12 py-8 lg:py-32 z-20">
        {/* Trust Badge */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 sm:px-4 sm:py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[#FF7300] font-semibold text-xs sm:text-sm">
              Elevate Your Music. Amplify Your Reach
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="text-[#FF7300]">ROYAL MUSIC</span> MARKETING
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#FF7300] rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-4 sm:mb-6 leading-relaxed">
          “Your Music. Our Marketing Expertise.”
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
          At <span className="text-[#FF7300]">Royal Music Marketing</span>, we
          specialize in turning music talent into unforgettable brands. From
          independent artists to established performers, we craft personalized
          marketing strategies that get your music heard by the right audience.
          Join hundreds of artists who have transformed their careers with our
          expertise.
        </p>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="bg-white hover:bg-[#FF7300] text-[#FF7300] hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
            <span>Get Started</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="border-2 border-gray-300 hover:border-[#FF7300] text-gray-700 hover:text-[#FF7300] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-orange-50 transition-all duration-300 text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* ===== Right Side (Image + Form Overlay) ===== */}
<div className="lg:w-7/12 w-full relative flex items-center justify-center overflow-hidden rounded-xl shadow-xl min-h-[150px] sm:min-h-[200px] lg:min-h-[300px]">
  {/* Background image carousel */}
  {images.map((img, i) => (
    <div
      key={i}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out rounded-xl ${
        currentImage === i ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(${img})`,
        transform: fade ? "scale(1.05)" : "scale(1)",
        transition: "transform 4s ease-in-out",
      }}
    />
  ))}

  {/* Dark overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/30 to-transparent rounded-xl"></div>

  {/* Form Bar */}
  <div className="absolute bottom-3 sm:bottom-4 w-[90%] max-w-2xl bg-[#AFAFB1] opacity-50 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between rounded-2xl px-3 sm:px-3 py-3 sm:py-4 gap-2 sm:gap-3 shadow-md">
    <div className="text-center sm:text-left mb-1 sm:mb-0">
      <h3 className="text-black font-bold text-base sm:text-lg mb-1">
        FREE ELIGIBILITY CHECKER
      </h3>
      <p className="text-black text-xs sm:text-sm">
        Check if you qualify for a new free boiler in your area.
      </p>
    </div>
    <form className="flex w-full max-w-lg items-center bg-white rounded-full shadow border border-gray-200 focus-within:ring-2 focus-within:ring-[#7ED321] transition-all duration-300 overflow-hidden">
      <input
        type="text"
        placeholder="Enter your postcode e.g. E17AX"
        className="flex-1 px-3 sm:px-5 py-2 text-gray-800 placeholder-yellow-700 text-xs sm:text-sm outline-none bg-transparent focus:placeholder-gray-300 transition-all duration-200"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-[#FF7300] to-[#FF7300] hover:from-[#FF7300] hover:to-[#FF7300] text-white font-semibold px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-full shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Send
      </button>
    </form>
  </div>
</div>
    </section>
  );
};

export default Hero;
