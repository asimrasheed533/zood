import { Link as RouterLink } from "react-router-dom";
import usePrefetchLink from "./usePrefetchLink";
import { useRef } from "react";

export default ({ to, prefetch = true, ...props }) => {
  const ref = useRef(null);
  const { handleMouseEnter } = usePrefetchLink(to, prefetch);

  return (
    <RouterLink
      ref={ref}
      to={to}
      unstable_viewTransition
      onMouseEnter={handleMouseEnter}
      {...props}
    />
  );
};
