import { memo, useEffect, useState } from "react";

import homegif from "@icons/homegif.gif";
import homeimg from "@icons/homeimg.webp";

function Homeicon({ isActive }) {
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
        src={isPlaying ? homegif : homeimg}
        alt="home"
      />
    </div>
  );
}

export default memo(Homeicon);
