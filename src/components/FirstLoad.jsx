import { memo, useEffect, useMemo, useState } from "react";

import AOS from "aos";
import zoodLogo from "@assets/zoodLogo.gif";

function FirstLoad() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init();

    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 3500);

    return () => clearTimeout(popupTimeout);
  }, []);

  const popupContainerStyle = useMemo(
    () => ({
      transform: showPopup ? "translateY(-200vh)" : "none",
      transition: "transform 0.5s ease-in-out",
    }),
    [showPopup],
  );

  return (
    <div className="app">
      <div className="popupContainer" style={popupContainerStyle}>
        <div className="popupContent">
          <img src={zoodLogo} alt="zood" />
        </div>
      </div>
    </div>
  );
}

export default memo(FirstLoad);
