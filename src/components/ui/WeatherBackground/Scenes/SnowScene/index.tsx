import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  { useRef } from "react";

export default function SnowScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const snowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const snowContainer = snowRef.current;
      if (!snowContainer) return;

      snowContainer.innerHTML = "";
      const snowCount = 40;

      for (let i = 0; i < snowCount; i++) {
        const snowflake = document.createElement("div");
        const size = Math.random() * 5 + 2; // Размер от 2px до 7px
        snowflake.className = "absolute bg-white rounded-full blur-[1px]";

        Object.assign(snowflake.style, {
          width: `${size}px`,
          height: `${size}px`,
          opacity: Math.random() * 0.7 + 0.3,
        });

        const startX = Math.random() * 100;
        snowContainer.appendChild(snowflake);
        gsap.fromTo(
          snowflake,
          {
            left: `${startX}%`,
            top: "-10%",
          },
          {
            top: "110%",
            duration: Math.random() * 4 + 4,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 5,
          },
        );
        gsap.to(snowflake, {
          x: "30",
          duration: Math.random() * 2 + 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-950 overflow-hidden"
    >
      <div ref={snowRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-blue-400/10 blur-[100px] rounded-full" />
    </div>
  );
}
