import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function OurGoals({ goals }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="goal__section__container">
      <div
        className="goal__section__container__content__left"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1500"
      >
        <Image loading="lazy" alt="zood" src={goals?.image} />
      </div>
      <div className="goal__section__container__content__right">
        <div className="goal__section__container__content__right__content__gif">
          <div className="goal__section__container__content__right__content">
            <div className="goal__section__container__content__right__content__heading">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? goals?.heading?.ar
                  : goals?.heading?.en}
              </AnimateText>
            </div>
            <div className="goal__section__container__content__right__content__text">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? goals?.content?.ar
                  : goals?.content?.en}
              </AnimateText>
            </div>
            {selectedLanguage === "ar"
              ? goals?.points?.ar?.map((point, index) => (
                  <div
                    key={index}
                    className="goal__section__container__content__right__content__point"
                    data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1500"
                  >
                    <AnimateText>{point}</AnimateText>
                  </div>
                ))
              : goals?.points?.en?.map((point, index) => (
                  <div
                    key={index}
                    className="goal__section__container__content__right__content__point"
                    data-aos="fade-up"
                    data-aos-delay="60"
                    data-aos-duration="1500"
                  >
                    <AnimateText>{point}</AnimateText>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(OurGoals);
