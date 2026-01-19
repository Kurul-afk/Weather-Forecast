import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function AnimatedSun() {
  const containerRef = useRef(null);
  const SUN_CLASSES =
    "absolute -top-20 -right-20 w-[300px] h-[300px] 2xl:w-[800px] 2xl:h-[800px] xl:w-[600px] xl:h-[600px] rounded-full";

  const pulseAnimation = () => {
    gsap.to(
      ".pulse-ring",
      {
        scale: 1.5,
        opacity: 0,
        duration: 4,
        ease: "power1.out",
        stagger: {
          each: 2,
          repeat: -1,
          repeatDelay: 0,
        },
      },
      { scope: containerRef.current },
    );
  };

  useEffect(() => {
    console.log("Starting sun pulse animation");
    pulseAnimation();
  }, []);

  return (
    <div className="absolute inset-0">
      <div className={`${SUN_CLASSES} bg-amber-500/70`}></div>
      <div className={`${SUN_CLASSES} bg-amber-500/70 blur-[80px]`}></div>
      <div>
        <div
          className={`pulse-ring ${SUN_CLASSES} border-4 border-amber-500`}
        ></div>
        <div
          className={`pulse-ring ${SUN_CLASSES} border-4 border-amber-500`}
        ></div>
        <div
          className={`pulse-ring ${SUN_CLASSES} border-4 border-amber-500`}
        ></div>
      </div>
    </div>
  );
}
