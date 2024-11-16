import { createRef, memo, useCallback, useEffect, useState } from "react";

import CountUp from "react-countup";

const CountUpWhenInView = (props) => {
  const elementRef = createRef();
  const [isVisible, setIsVisible] = useState(false);
  const [countedUp, setCountedUp] = useState(false);

  const handleCountUpComplete = useCallback(() => {
    setCountedUp(true);
  }, []);

  const handleIntersect = useCallback((entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [handleIntersect]);

  return (
    <div
      ref={elementRef}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        display: "inline",
      }}
    >
      {(isVisible && !countedUp) || countedUp ? (
        <CountUp
          {...props}
          start={countedUp ? props.end : props.start}
          onComplete={handleCountUpComplete}
        />
      ) : null}
    </div>
  );
};

export default memo(CountUpWhenInView);
