import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function CloudsIcon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backCloudRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      gsap.to(containerRef.current, {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({
        repeat: -1,
        delay: 0.5,
      });

      tl.fromTo(
        backCloudRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "-100%",
          opacity: 1,
          duration: 5,
          ease: "linear",
        },
      )
        .to(
          backCloudRef.current,
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=0.5",
        )
        .to({}, { duration: 1 });
    },
    { scope: containerRef },
  );

  const cloudPath =
    "M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z";

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[240px] relative overflow-hidden"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        className="w-full h-full"
      >
        <g id="SVGRepo_iconCarrier">
          <path
            ref={backCloudRef}
            d={cloudPath}
            stroke="#d1d5db"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transformOrigin: "center", scale: "0.5" }}
          />
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
