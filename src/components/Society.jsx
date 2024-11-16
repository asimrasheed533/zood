import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Society({ foundersMessage }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="society__section">
      <div className="society__section__container">
        <div className="society__section__container__content">
          <div
            className="society__section__left"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            <Image
              loading="lazy"
              alt="zood"
              className="society__section__left__img"
              src={foundersMessage?.founderImage}
            />
            <button
              className="button button-with-animation"
              style={{ justifyContent: "center" }}
            >
              {selectedLanguage === "ar"
                ? foundersMessage?.founderName?.ar
                : foundersMessage?.founderName?.en}
            </button>
          </div>
          <div className="society__section__right">
            <div
              className="society__section__right__heading"
              data-aos="fade-right"
              data-aos-delay="60"
              data-aos-duration="1800"
            >
              {selectedLanguage === "ar"
                ? foundersMessage?.subheading?.ar
                : foundersMessage?.subheading?.en}
              <span>
                {selectedLanguage === "ar"
                  ? foundersMessage?.heading?.ar
                  : foundersMessage?.heading?.en}
              </span>
            </div>
            <div className="society__section__right__text">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? foundersMessage?.content?.ar
                  : foundersMessage?.content?.en}
              </AnimateText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Society);
