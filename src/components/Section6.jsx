import { memo } from "react";
import optimizeImage from "@utils/optimizeImage";
import { useLanguage } from "@context/LanguageContext";

function Section6({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div
      className="strategic__overlay__container"
      style={{ backgroundImage: `url(${optimizeImage(data?.image)})` }}
    >
      <div className="strategic__overlay__wraper">
        <div className="strategic__overlay__wraper__heading">
          {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
        </div>
        <div className="strategic__overlay__wraper__sub__heading">
          {selectedLanguage === "ar"
            ? data?.description?.ar
            : data?.description?.en}
        </div>
        <a
          href={
            selectedLanguage === "ar"
              ? data?.buttonLink?.ar
              : data?.buttonLink?.en
          }
        >
          {selectedLanguage === "ar"
            ? data?.buttonTitle?.ar
            : data?.buttonTitle?.en}
        </a>
      </div>
    </div>
  );
}

export default memo(Section6);
