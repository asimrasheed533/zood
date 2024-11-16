import { memo, useEffect, useState } from "react";

import phonegif from "@icons/phonegif.gif";
import phoneimg from "@icons/phoneimg.webp";

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
        src={isPlaying ? phonegif : phoneimg}
        alt={isPlaying ? "gif" : "static"}
      />
    </div>
  );
}

export default memo(Mapicon);
