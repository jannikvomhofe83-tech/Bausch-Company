import React, { useEffect, useRef } from "react";

export function BLetterBackground() {
  const bRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bRef.current) return;
      const y = window.scrollY * -0.07;
      bRef.current.style.transform = `translateY(calc(-50% + ${y}px))`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <div
        ref={bRef}
        style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          width: "58%",
          transform: "translateY(-50%)",
        }}
      >
        <svg
          viewBox="0 0 560 900"
          width="100%"
          style={{ display: "block" }}
        >
          <defs>
            <clipPath id="bausch-b-clip">
              <text
                x="-20"
                y="830"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontWeight="900"
                fontSize="900"
              >
                B
              </text>
            </clipPath>
            <linearGradient id="bausch-b-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00693C" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FF5800" stopOpacity="0.14" />
            </linearGradient>
          </defs>

          {/* Fill — swap <rect> for <image> when photos arrive */}
          <rect
            x="-60" y="0" width="680" height="900"
            clipPath="url(#bausch-b-clip)"
            fill="url(#bausch-b-grad)"
          />

          {/* Outline */}
          <text
            x="-20"
            y="830"
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontWeight="900"
            fontSize="900"
            fill="none"
            stroke="#00693C"
            strokeWidth="2.5"
            strokeOpacity="0.45"
          >
            B
          </text>
        </svg>
      </div>
    </div>
  );
}
