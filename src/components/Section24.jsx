import { Link } from "react-router-dom";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section24({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="Kingdom__main__overlay">
      <div className="Kingdom__main__container">
        <div className="Kingdom__main__container__col">
          <div className="Kingdom__main__container__text__heading">
            {selectedLanguage === "ar" ? data?.heading?.ar : data?.heading?.en}
          </div>
          <div className="Kingdom__main__container__text__sub__heading">
            {selectedLanguage === "ar" ? data?.content?.ar : data?.content?.en}
          </div>
          {data?.buttonTitle?.en !== "" && (
            <Link
              to={
                selectedLanguage === "ar"
                  ? data?.buttonLink?.ar
                  : data?.buttonLink?.en
              }
              unstable_viewTransition
              className="website__link__button"
            >
              {selectedLanguage === "ar"
                ? data?.buttonLink?.ar
                : data?.buttonLink?.en}
            </Link>
          )}
        </div>
        <div className="Kingdom__main__container__col__emty" />
      </div>
    </div>
  );
}

export default memo(Section24);
