import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

const useAnimationControls = (tlRef) => {
  return useMemo(
    () => ({
      play: () => tlRef.current?.play(),
      pause: () => tlRef.current?.pause(),
      restart: () => tlRef.current?.restart(),
      kill: () => tlRef.current?.kill(),
    }),
    [tlRef]
  );
};

const useBaseAnimations = (targetRef, animationCallback, deps, paused) => {
  const tlRef = useRef(null);

  useEffect(() => {
    if (!targetRef?.current) return;

    const ctx = gsap.context(() => {
      tlRef.current = animationCallback();
    }, targetRef);

    return () => ctx.revert();
  }, [targetRef, ...deps]);

  useEffect(() => {
    tlRef?.current?.paused(paused);
  }, [paused]);

  return {
    ...useAnimationControls(tlRef),
    timeline: tlRef,
  };
};

export const useCloudAnimation = (
  targetRef,
  { duration = 1, amplitude = 30, paused = false } = {}
) => {
  return useBaseAnimations(
    targetRef,
    () => {
      return gsap.timeline().to(".element", {
        y: amplitude,
        yoyo: true,
        repeat: -1,
        duration,
        ease: "power1.inOut",
      });
    },
    [duration, amplitude],
    paused
  );
};

export const useRainAnimation = (
  targetRef,
  { duration = 1, paused = false } = {}
) => {
  return useBaseAnimations(
    targetRef,
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        },
      });

      tl.to(".drops-1", { fill: "#0ea5e9" }, "<0.2")
        .to(".drops-2", { fill: "#0ea5e9" }, "<0.2")
        .to(".drops-3", { fill: "#0ea5e9" }, "<0.2")
        .to(".element", { y: 30 });

      return tl;
    },
    [duration],
    paused
  );
};

export const useSnowFallAnimation = (
  targetRef,
  { duration = 1, amplitude = 30, paused = false } = {}
) => {
  return useBaseAnimations(
    targetRef,
    () => {
      const tl = gsap.timeline({ defaults: { repeat: -1 } });

      tl.to(".element", {
        y: 30,
        yoyo: true,
        duration,
        ease: "power1.inOut",
      });

      tl.to(
        ".snowflake",
        {
          ease: "linear",
          duration: 8,
          rotation: 360,
          transformOrigin: "50% 50%",
        },
        0
      );
      return tl;
    },
    [duration, amplitude],
    paused
  );
};

export const useStormAnimation = (
  targetRef,
  { duration = 1, amplitude = 30, paused = false } = {}
) => {
  return useBaseAnimations(
    targetRef,
    () => {
      let mainTL = gsap.timeline();
      let lightningTL = gsap.timeline({ repeat: -1, repeatDelay: 2 });

      mainTL.to(".element", {
        y: amplitude,
        yoyo: true,
        repeat: -1,
        duration,
        ease: "power1.inOut",
      });

      lightningTL
        .to(".stormy-bolt", {
          duration: 0.02 + Math.random() * 0.03,
          scale: 1.2,
          ease: "power1.in",
          opacity: 1,
          fill: "#0ea5e9",
        })
        .to(".stormy-bolt", {
          opacity: 0.1 + Math.random() * 0.2,
          scale: 1,
          duration: 0.05 + Math.random() * 0.05,
          ease: "power1.out",
          fill: "#FFFFFF",
        })
        .to(".stormy-bolt", {
          opacity: 0.7,
          duration: 0.01,
          delay: 0.2,
        })
        .to(".stormy-bolt", {
          opacity: 0.2,
          duration: 0.02,
        })
        .to(".stormy-bolt", {
          opacity: 0.5,
          duration: 0.005,
          delay: 0.1,
        })
        .to(".stormy-bolt", {
          opacity: 0.2,
          duration: 0.01,
        });

      mainTL.add(lightningTL);
      return mainTL;
    },
    [duration, amplitude],
    paused
  );
};
export const useSunAnimation = (
  targetRef,
  { duration = 1, amplitude = 30, paused = false } = {}
) => {
  return useBaseAnimations(
    targetRef,
    () => {
      const tl = gsap.timeline({ defaults: { repeat: -1 } });

      tl.to(".element", {
        y: amplitude,
        yoyo: true,
        duration,
        ease: "power1.inOut",
      });

      tl.to(
        ".sun",
        {
          ease: "linear",
          duration: 6,
          rotation: 360,
          transformOrigin: "50% 50%",
        },
        0
      );
      return tl;
    },
    [duration, amplitude],
    paused
  );
};

export const useLoaderPageAnimation = (
  targetRef,
  duration = 1,
  amplitude = 30,
  paused = false
) => {
  return useBaseAnimations(targetRef, () => {
    const tl = gsap.timeline();
  });
};
