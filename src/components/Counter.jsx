import React, { useState, useEffect, useRef } from "react";
export function Counter({ target = 0, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const end = Number(target) || 0;
    if (end <= 0) {
      setCount(end);
      return;
    }

    // easing: easeOutCubic-ish
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOut(progress);
      const value = Math.round(eased * end);
      setCount(value);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      rafRef.current = requestAnimationFrame(animate);
    };

    // Start when visible (if supported)
    const node = elRef.current;
    if (node && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              obs.disconnect();
            }
          });
        },
        { threshold: 0.45 }
      );
      observer.observe(node);
      return () => {
        observer.disconnect();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    } else {
      // fallback: start immediately
      startAnimation();
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, [target, duration]);

  return (
    <span ref={elRef} aria-live="polite" className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}