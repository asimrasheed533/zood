import { memo, useMemo } from "react";

import Image from "./Image";
import { colors } from "@data/colors";

function SlidingImagesEntry({ project, styles }) {
  const backgroundColor = useMemo(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  }, [project]);

  return (
    <div className={styles.project} style={{ backgroundColor }}>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={styles.imageContainer}
      >
        <Image
          alt="zood"
          loading="lazy"
          src={project.image}
          className={styles.instagramImage}
        />
      </a>
    </div>
  );
}

export default memo(SlidingImagesEntry);
