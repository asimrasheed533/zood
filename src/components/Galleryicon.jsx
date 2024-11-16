import { memo, useEffect, useState } from "react";

import cameragif from "@icons/camera.gif";
import cameraimg from "@icons/cameraimg.webp";

function Galleryicon({ isActive }) {
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
        src={isPlaying ? cameragif : cameraimg}
        alt="camera"
      />
    </div>
  );
}

export default memo(Galleryicon);
