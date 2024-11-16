import { cloneElement, memo, useEffect, useMemo, useRef } from "react";

import gsap from "gsap";

function MagneticEffect({ children }) {
  const magnetic = useRef(null);

  const tl = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    const element = magnetic.current;
    let mouseX = 0;
    let mouseY = 0;
    let isThrottled = false;

    tl.to(element, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
    });

    const throttle = (callback, delay) => {
      if (!isThrottled) {
        callback();
        isThrottled = true;
        setTimeout(() => {
          isThrottled = false;
        }, delay);
      }
    };

    const updatePosition = () => {
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = mouseX - (left + width / 2);
      const y = mouseY - (top + height / 2);

      gsap.to(tl, {
        time: 0.2,
        x: x * 0.35,
        y: y * 0.35,
        overwrite: "auto",
      });
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      throttle(updatePosition, 16);
    };

    const handleMouseLeave = () => {
      tl.seek(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [tl]);

  return useMemo(
    () => cloneElement(children, { ref: magnetic }),
    [children, magnetic],
  );
}

export default memo(MagneticEffect);
