import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  { useRef } from "react";

export default function RainScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rainContainer = rainRef.current;
      if (!rainContainer) return;
      rainContainer.innerHTML = "";

      const dropCount = 60;

      for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement("div");

        drop.className =
          "absolute bg-blue-400/40 w-[1px] h-[20px] rounded-full";

        const startX = Math.random() * 100; // в процентах
        const startY = Math.random() * -100; // над экраном

        rainContainer.appendChild(drop);

        gsap.fromTo(
          drop,
          {
            left: `${startX}%`,
            top: `${startY}%`,
          },
          {
            top: "110%",
            x: "+=20",
            duration: Math.random() * 0.5 + 0.5,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 2,
          },
        );
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-gradient-to-b from-slate-800 via-gray-900 to-black overflow-hidden"
    >
      <div ref={rainRef} className="absolute inset-0 pointer-events-none" />

      <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]" />
    </div>
  );
}
