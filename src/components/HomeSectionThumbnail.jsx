import { memo, useMemo } from "react";

import Image from "./Image";

function HomeSectionThumbnail({ slide, index }) {
  const fetchPriority = useMemo(
    () => (index === 0 || index === 1 || index === 2 ? "high" : "low"),
    [index],
  );

  const loading = useMemo(
    () => (index === 0 || index === 1 || index === 2 ? "eager" : "lazy"),
    [index],
  );

  return (
    <Image
      fetchpriority={fetchPriority}
      loading={loading}
      alt="zood"
      src={slide.banner}
    />
  );
}

export default memo(HomeSectionThumbnail);
