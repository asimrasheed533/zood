import { useCallback, useEffect, useRef, useState } from "react";

import getMatchingRoute from "./getMatchingRoute";

const usePrefetchRoute = (to, prefetch = true) => {
  const [prefetched, setPrefetched] = useState(false);
  const ref = useRef(null);

  const preloadRoute = useCallback(() => {
    const route = getMatchingRoute(to);
    if (route) {
      route.preload();
      setPrefetched(true);
    }
  }, [to]);

  useEffect(() => {
    const route = getMatchingRoute(to);
    const prefetchable = route && !prefetched;

    if (prefetchable && prefetch) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            preloadRoute();
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: "200px" },
      );
      if (ref.current) {
        observer.observe(ref.current);
        return () => observer.disconnect();
      }
    }
  }, [to, prefetch, prefetched, preloadRoute]);

  return { ref };
};

export default usePrefetchRoute;
