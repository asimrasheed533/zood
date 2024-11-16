import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section11({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="rot__overlay__card__over">
      <div className="rot__overlay__card">
        <div className="rot__overlay__card__container">
          <div className="rot__overlay__card__container__img">
            <Image loading="lazy" alt="zood" src={data?.image} />
          </div>
          <div className="rot__overlay__card__container__text">
            <AnimateText>
              {selectedLanguage === "ar"
                ? data?.description?.ar
                : data?.description?.en}
            </AnimateText>
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
    </div>
  );
}

export default memo(Section11);
