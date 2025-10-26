import { useEffect, useRef, useState } from "react";
import img2 from "../assets/img2.jpg";
import im1 from "../assets/im1.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import la1 from "../assets/la1.webp";
import homeA from "../assets/homeA.webp";
import A from "../assets/a.webp";

const GrantsSection = () => {
  const cards = [
    { src: A, title: "External Wall Insulation", link: "/about" },
    { src: img2, title: "Cavity Wall Insulation", link: "/about" },
    { src: homeA, title: "Solid Wall Insulation", link: "/about" },
    { src: la1, title: "Solar Panel Installation", link: "/about" },
    { src: im1, title: "Underfloor Insulation", link: "/about" },
    { src: img3, title: "Loft Insulation", link: "/about" },
    { src: img4, title: "Roof Insulation", link: "/about" },
  ];

  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to show/hide arrows
  const updateArrowVisibility = () => {
    const container = scrollRef.current;
    if (!container) return;
    
    setShowLeftArrow(container.scrollLeft > 10);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Respect user motion preference
    const reduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Scroll speed (pixels/frame). Reduce for smoother/slower scroll.
    const scrollSpeed = 0.8;

    const step = () => {
      if (!container || isPausedRef.current || isUserScrollingRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      // Advance
      container.scrollLeft += scrollSpeed;

      // If we've scrolled past the first copy, jump back by half width (seamless)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }

      updateArrowVisibility();
      rafRef.current = requestAnimationFrame(step);
    };

    // Pause on hover/touch
    const handlePointerEnter = () => {
      isPausedRef.current = true;
    };
    
    const handlePointerLeave = () => {
      isPausedRef.current = false;
    };

    // Detect manual scrolling
    const handleScrollStart = () => {
      isUserScrollingRef.current = true;
      isPausedRef.current = true;
    };
    
    const handleScrollEnd = () => {
      // Resume auto-scroll after a delay if user stops scrolling
      setTimeout(() => {
        isUserScrollingRef.current = false;
        isPausedRef.current = false;
      }, 2000);
    };

    // Pause when tab is hidden (saves CPU)
    const handleVisibility = () => {
      isPausedRef.current = document.hidden;
    };

    // Arrow navigation
    const scrollLeft = () => {
      if (!container) return;
      container.scrollBy({ left: -300, behavior: 'smooth' });
    };
    
    const scrollRight = () => {
      if (!container) return;
      container.scrollBy({ left: 300, behavior: 'smooth' });
    };

    container.addEventListener("mouseenter", handlePointerEnter);
    container.addEventListener("mouseleave", handlePointerLeave);
    container.addEventListener("touchstart", handleScrollStart, { passive: true });
    container.addEventListener("touchend", handleScrollEnd, { passive: true });
    container.addEventListener("scroll", updateArrowVisibility);
    document.addEventListener("visibilitychange", handleVisibility);

    // Add wheel event for manual scrolling with mouse wheel
    container.addEventListener("wheel", handleScrollStart, { passive: true });
    
    // Start animation
    rafRef.current = requestAnimationFrame(step);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mouseenter", handlePointerEnter);
      container.removeEventListener("mouseleave", handlePointerLeave);
      container.removeEventListener("touchstart", handleScrollStart);
      container.removeEventListener("touchend", handleScrollEnd);
      container.removeEventListener("scroll", updateArrowVisibility);
      container.removeEventListener("wheel", handleScrollStart);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Manual scroll functions
  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.06),_transparent_60%)] pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FF7300] relative inline-block">
          Grants & Energy Support
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed">
          Explore government-backed home improvement grants that help you save energy, reduce bills, and live sustainably.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth py-2 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          aria-hidden={false}
        >
          {/* Hide scrollbar for webkit */}
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

          {/* Duplicate cards for seamless loop */}
          {[...cards, ...cards].map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="relative min-w-[220px] sm:min-w-[250px] md:min-w-[280px] rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 group flex-shrink-0"
              aria-label={card.title}
            >
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-60 md:h-64 object-cover group-hover:brightness-90 transition"
                draggable={false}
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 text-white">
                <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default GrantsSection;