import Image from "./Image";
import { Link } from "react-router-dom";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function MapPointerPopup({ project }) {
  const [language] = useLanguage();

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "10px",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "2em 1em",
        minWidth: "200px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        zIndex: 100,
      }}
    >
      <Image
        loading="lazy"
        alt="zood"
        src={language === "ar" ? project.logoArabic : project.logo}
        style={{
          height: "70px",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
      <h5
        style={{
          marginBottom: ".5em",
          marginTop: "1em",
          fontSize: "1.2em",
        }}
      >
        {language === "ar" ? project.name.ar : project.name.en}
      </h5>
      <p
        style={{
          marginBottom: ".5em",
          marginTop: "1em",
          fontSize: "1em",
        }}
      >
        {language === "ar" ? project.city.ar : project.city.en}
      </p>
      <p
        style={{
          marginBottom: "1.5em",
          marginTop: "1em",
          fontSize: "1em",
        }}
      >
        {project.area}
      </p>
      {project.structureLength !== 0 &&
        project.structureLength !== null &&
        project.structureLength !== undefined && (
          <Link
            unstable_viewTransition
            to={`/projects/${project.name.en}`}
            style={{
              marginBottom: ".5em",
              fontSize: "1em",
              backgroundColor: "black",
              padding: ".7em 1em",
              borderRadius: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            {language === "ar" ? "عرض المشروع" : "Project Presentation"}
          </Link>
        )}
    </div>
  );
}

export default memo(MapPointerPopup);
