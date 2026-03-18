import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function DropletsIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainDropletRef = useRef<SVGPathElement>(null);
  const secondDropletRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });
      tl.fromTo(
        [mainDropletRef.current, secondDropletRef.current],
        {
          stroke: "#06b6d4",
        },
        {
          stroke: "#ffffff",
          duration: 1.5,
          stagger: 0.5,
          ease: "power1.inOut",
        },
      );
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
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g id="SVGRepo_iconCarrier">
          <path
            ref={mainDropletRef}
            d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={secondDropletRef}
            d="M8 8.2C8 9.7464 7.11083 11 5.5 11C3.88917 11 3 9.7464 3 8.2C3 6.6536 5.5 3 5.5 3C5.5 3 8 6.6536 8 8.2Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
