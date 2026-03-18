import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Snowicon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<SVGPathElement>(null);

  const s1 = useRef<SVGPathElement>(null);
  const s2 = useRef<SVGPathElement>(null);
  const s3 = useRef<SVGPathElement>(null);
  const s4 = useRef<SVGPathElement>(null);
  const s5 = useRef<SVGPathElement>(null);
  const s6 = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const snowFlakes = [
        s1.current,
        s2.current,
        s3.current,
        s4.current,
        s5.current,
        s6.current,
      ];

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      tl.fromTo(
        snowFlakes,
        { stroke: "#4b5563" },
        {
          stroke: "#ffffff",
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.inOut",
        },
      );
      tl.to(snowFlakes, {
        stroke: "#4b5563",
        duration: 0.4,
        stagger: 0.1,
      });

      gsap.to(containerRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );
  return (
    <div ref={containerRef} className="w-full max-w-[240px]">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* ОБЛАКО */}
          <path
            ref={cloudRef}
            d="M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
            stroke="currentColor"
          />

          {/* СНЕЖИНКИ (выделены из общего path) */}
          <path ref={s1} d="M9 18H9.01" stroke="#4b5563" />
          <path ref={s2} d="M12 18H12.01" stroke="#4b5563" />
          <path ref={s3} d="M15 18H15.01" stroke="#4b5563" />
          <path ref={s4} d="M9 20.5H9.01" stroke="#4b5563" />
          <path ref={s5} d="M12 21H12.01" stroke="#4b5563" />
          <path ref={s6} d="M15 20.5H15.01" stroke="#4b5563" />
        </g>
      </svg>
    </div>
  );
}
