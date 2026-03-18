import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function RainIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<SVGPathElement>(null);
  const drop1Ref = useRef<SVGPathElement>(null);
  const drop2Ref = useRef<SVGPathElement>(null);
  const drop3Ref = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      const drops = [drop1Ref.current, drop2Ref.current, drop3Ref.current];

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.2,
      });

      tl.fromTo(
        drops,
        { stroke: "#4b5563" },
        {
          stroke: "#ffffff",
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.inOut",
        },
      ).to(drops, {
        stroke: "#4b5563",
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.inOut",
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
    <div ref={containerRef} className="w-full max-w-[240px] overflow-hidden">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className="text-white"
      >
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Cloud */}
          <path
            ref={cloudRef}
            d="M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z"
          />

          {/* Drops */}
          <path ref={drop1Ref} d="M6.5 21L8 18" />
          <path ref={drop2Ref} d="M10.5 21L12 18" />
          <path ref={drop3Ref} d="M14.5 21L16 18" />
        </g>
      </svg>
    </div>
  );
}
