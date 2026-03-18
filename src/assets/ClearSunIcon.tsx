import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function ClearSunIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(sunRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(sunRef.current, {
        rotation: 360,
        duration: 16,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="w-full max-w-[240px]">
      <div ref={sunRef} className="flex justify-center items-center text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
