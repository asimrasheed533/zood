import { memo, useEffect, useState } from "react";

import projectimg from "@icons/projectimg.webp";
import projrctgif from "@icons/projrctgif.gif";

function Mapicon({ isActive }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
      }, 3000);
    }
  }, [isActive]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{
          width: "50%",
          height: "50%",
        }}
        src={isPlaying ? projrctgif : projectimg}
        alt="project"
      />
    </div>
  );
}

export default memo(Mapicon);
