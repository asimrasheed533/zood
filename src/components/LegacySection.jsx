import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function LegacySection({ heritage }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="legacy__section__container">
      <div
        className="legacy__section__container__content__left"
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="1000"
      >
        <Image loading="lazy" alt="zood" src={heritage?.image} />
      </div>
      <div className="legacy__section__container__content__right">
        <div className="legacy__section__container__content__right__content__gif">
          <div className="legacy__section__container__content__right__content">
            <div
              className="legacy__section__container__content__right__content__heading"
              data-aos="fade-right"
              data-aos-delay="10"
              data-aos-duration="1800"
            >
              {selectedLanguage === "ar"
                ? heritage?.heading?.ar
                : heritage?.heading?.en}
            </div>
            <div className="legacy__section__container__content__right__content__text">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? heritage?.content?.ar
                  : heritage?.content?.en}
              </AnimateText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LegacySection);
