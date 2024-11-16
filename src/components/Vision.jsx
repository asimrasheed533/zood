import AnimateText from "./AnimateText";
import Image from "./Image";
import { SvgVision } from "@assets";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function Vision({ vision }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <div className="vision__over">
      <div className="vision__over__left">
        <div className="vison__main__container">
          <div className="vison__main__container__overlay">
            <div className="vison__main__container__overlay__left">
              <div
                className="vison__main__container__overlay__left__img"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
              >
                <Image loading="lazy" alt="zood" src={vision?.image} />
              </div>
            </div>
            <div className="vison__main__container__overlay__right">
              <div className="vison__main__container__overlay__right__text">
                {selectedLanguage === "ar" ? (
                  <div className="vison__main__container__overlay__right__text__heading">
                    {language.OurVision}
                  </div>
                ) : (
                  <div
                    className="vison__main__container__overlay__right__text__heading"
                    data-aos="fade-right"
                    data-aos-delay="60"
                    data-aos-duration="1500"
                  >
                    <img loading="lazy" src={SvgVision} alt="vison" />
                  </div>
                )}
                <div className="vison__main__container__overlay__right__text__subheading">
                  <AnimateText>
                    {selectedLanguage === "ar"
                      ? vision?.heading?.ar
                      : vision?.heading?.en}
                  </AnimateText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vision__over__right" />
    </div>
  );
}

export default memo(Vision);
