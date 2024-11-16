import { memo, useEffect, useRef } from "react";

import Magnetic from "@common/Magnetic";
import gsap from "gsap";
import styles from "./style.module.scss";

function RoundedButton({
  children,
  border1,
  backgroundColor = "var(--primary)",
  ...attributes
}) {
  const circle = useRef(null);
  const timeoutId = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    timeline.current
      .to(
        circle.current,
        {
          top: "-25%",
          width: "150%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter",
      )
      .to(
        circle.current,
        {
          top: "-150%",
          width: "125%",
          duration: 0.25,
        },
        "exit",
      );

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        />
      </div>
    </Magnetic>
  );
}

export default memo(RoundedButton);
