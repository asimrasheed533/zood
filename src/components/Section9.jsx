import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section9({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="okz__footer__over__main">
      <div className="okz__footer__content">
        <div className="okz__footer__content__text">
          <div className="okz__footer__content__text__heading">
            {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
          </div>
          <div className="okz__footer__content__text__sub__heading">
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
      <div className="okz__footer__content__empty" />
    </div>
  );
}

export default memo(Section9);
