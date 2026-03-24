import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ThunderStormScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rainContainer = rainRef.current;
      if (rainContainer) {
        rainContainer.innerHTML = "";
        for (let i = 0; i < 80; i++) {
          const drop = document.createElement("div");
          drop.className = "absolute bg-blue-300/30 w-[1px] h-[25px]";
          rainContainer.appendChild(drop);
          gsap.set(drop, {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
          });
          gsap.to(drop, {
            top: "110%",
            x: "+=40",
            duration: Math.random() * 0.4 + 0.3,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 2,
          });
        }
      }

      const createLightning = () => {
        const tl = gsap.timeline({
          delay: gsap.utils.random(2, 6),
          onComplete: createLightning,
        });

        tl.to(flashRef.current, {
          opacity: 0.6,
          duration: 0.05,
          repeat: 3,
          yoyo: true,
        }).to(flashRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      createLightning();
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-950 to-black overflow-hidden"
    >
      <div
        ref={flashRef}
        className="absolute inset-0 bg-white opacity-0 z-10 pointer-events-none blur-sm"
      />
      <div ref={rainRef} className="absolute inset-0 pointer-events-none z-0" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-indigo-900/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-slate-800/30 blur-[100px] rounded-full" />
      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20" />
    </div>
  );
}
