import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function MistIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<SVGPathElement>(null);
  const line1Ref = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        y: -5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(line1Ref.current, {
        x: 2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(line2Ref.current, {
        x: -2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className="w-full max-w-[240px]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        className="w-full h-full text-white"
      >
        <g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            ref={cloudRef}
            d="M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
          />
          <path ref={line1Ref} d="M3 18H7M10 18H21" />
          <path ref={line2Ref} d="M5 21H12M16 21H19" />
        </g>
      </svg>
    </div>
  );
}
