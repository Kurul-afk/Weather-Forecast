import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ThunderStormIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const boltRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(cloudRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: Math.random() * 3 + 1,
      });

      tl.to(boltRef.current, {
        opacity: 0.2,
        duration: 0.1,
      })
        .to(boltRef.current, {
          opacity: 1,
          stroke: "#fde047",
          duration: 0.05,
          repeat: 3,
          yoyo: true,
        })
        .to(boltRef.current, {
          stroke: "#ffffff",
          duration: 0.1,
        });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[240px] flex justify-center items-center"
    >
      <div ref={cloudRef}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M6 16.4438C4.22194 15.5683 3 13.7502 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 14.0582 20.206 15.4339 19 16.2417"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={boltRef}
            d="M13 11L10 16H15L12 21"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
