import { Suspense, memo } from "react";

import { Outlet } from "react-router-dom";
import zoodLogo from "@assets/zoodLogo.gif";

function Projects() {
  return (
    <Suspense
      fallback={
        <div className="app">
          <div className="popupContainer">
            <div className="popupContent">
              <img src={zoodLogo} alt="zood" />
            </div>
          </div>
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
}

export default memo(Projects);
