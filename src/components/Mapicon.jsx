import { memo, useEffect, useState } from "react";

import mapgif from "@icons/mapgif.gif";
import mapimg from "@icons/mapimg.webp";

function Mapicon({ isActive }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
      }, 2000);
    }
  }, [isActive]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{
          width: "50%",
          height: "50%",
        }}
        src={isPlaying ? mapgif : mapimg}
        alt={isPlaying ? "gif" : "static"}
      />
    </div>
  );
}

export default memo(Mapicon);
