import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ClearMoonScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stars = starsRef.current?.children;
      if (stars) {
        gsap.to(stars, {
          opacity: () => gsap.utils.random(0.2, 0.8),
          scale: () => gsap.utils.random(0.8, 1.2),
          duration: () => gsap.utils.random(1.5, 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 2,
            from: "random",
          },
        });
      }

      gsap.to(".moon-glow", {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-gradient-to-tl from-slate-950 via-indigo-950 to-blue-900 overflow-hidden"
    >
      <div ref={starsRef} className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + "px",
              height: Math.random() * 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random(),
            }}
          />
        ))}
      </div>
      <div className="moon-glow absolute -top-20 -right-20 w-[400px] h-[400px] bg-indigo-500/20 blur-[100px] rounded-full" />
      <div className="moon-glow absolute -top-10 -right-10 w-[200px] h-[200px] bg-blue-400/10 blur-[60px] rounded-full delay-1000" />
      <div className="absolute top-12 right-12 w-16 h-16 bg-yellow-100 rounded-full shadow-[0_0_40px_rgba(253,251,202,0.4)]">
        <div className="absolute top-4 left-3 w-3 h-3 bg-black/5 rounded-full" />
        <div className="absolute bottom-5 right-4 w-4 h-4 bg-black/5 rounded-full" />
      </div>
    </div>
  );
}
