import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function PressureIcon() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
      <svg fill="#ffffff" viewBox="0 0 24 24" stroke="#ffffff">
        <path d="M5.293,16.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l4.293-4.293a1,1,0,0,1,1.414,1.414l-6,6a1,1,0,0,1-1.414,0Z"></path>
      </svg>
    </div>
  );
}
