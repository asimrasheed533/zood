import { Suspense, lazy, memo, useCallback, useState } from "react";

import Image from "./Image";
import { useLanguage } from "@context/LanguageContext";
import { useNavigate } from "react-router-dom";

const MapPointerPopup = lazy(() => import("./MapPointerPopup"));

function MapPointer({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [language] = useLanguage();

  const handleMouseEnter = useCallback(() => {
    if (window.innerWidth > 700) {
      setIsOpen(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth > 700) {
      setIsOpen(false);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (window.innerWidth > 1000) {
      navigate(`/map/${project.name.en}`, {
        state: project,
        unstable_viewTransition: true,
      });
    }
  }, [navigate, project]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "15px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        position: "relative",
        aspectRatio: "1/1",
        zIndex: 10,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isOpen && (
        <Suspense>
          <MapPointerPopup project={project} />
        </Suspense>
      )}
      <Image
        loading="lazy"
        alt="zood"
        src={language === "ar" ? project.logoArabic : project.logo}
        style={{
          width: "40px",
          height: "40px",
          minWidth: "40px",
          minHeight: "40px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default memo(MapPointer);
