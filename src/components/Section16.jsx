import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section16({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="newfuture__text__line__over">
      <div className="newfuture__text__line__text">
        {selectedLanguage === "ar" ? data?.heading.ar : data?.heading.en}
        <a
          href={
            selectedLanguage === "ar"
              ? data?.buttonLink.ar
              : data?.buttonLink.en
          }
        >
          {selectedLanguage === "ar"
            ? data?.buttonTitle.ar
            : data?.buttonTitle.en}
        </a>
      </div>
    </div>
  );
}

export default memo(Section16);
