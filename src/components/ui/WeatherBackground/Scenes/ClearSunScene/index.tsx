import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ClearSunScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to([sunRef.current, ".bg-circle"], {
        scale: 1.1,
        duration: 2.5,
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
      className="bg-gradient-to-tr from-orange-700 to-orange-400 w-full h-full relative"
    >
      <div className="bg-circle w-[360px] h-[360px] bg-amber-400/35 rounded-full delay-75 absolute top-[-160px] right-[-160px]"></div>
      <div className="bg-circle w-[240px] h-[240px] bg-amber-400/50 rounded-full absolute top-[-100px] right-[-100px]"></div>
      <div
        ref={sunRef}
        className="w-30 h-30 bg-amber-400 rounded-full absolute top-[-40px] right-[-40px]"
      ></div>
    </div>
  );
}
