import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function CloudsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cloudGroupRef = useRef<SVGGElement>(null);

  const cloudPath =
    "M19 19c0 1.1-.9 2-2 2H7c-2.8 0-5-2.2-5-5s2.2-5 5-5.1C7 8.2 9.2 6 12 6c2.8 0 5 2.2 5 5h1c2.2 0 4 1.8 4 4 0 2.2-1.8 4-4 4z";

  useGSAP(
    () => {
      if (!cloudGroupRef.current) return;

      gsap.fromTo(
        cloudGroupRef.current,
        {
          x: 30,
          opacity: 0,
        },
        {
          x: -60,
          opacity: 1,
          duration: 9,
          repeat: -1,
          ease: "linear",
          onComplete: function () {
            gsap.to(this.targets()[0], { opacity: 0, duration: 1 });
          },
        },
      );
    },
    { scope: containerRef },
  );
  return (
    <div className="bg-gradient-to-tr from-gray-500 to-zinc-800 w-full h-full relative">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        className="w-full h-full"
      >
        <g ref={cloudGroupRef} id="SVGRepo_iconCarrier">
          <path
            d={cloudPath}
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
