import AnimateText from "./AnimateText";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function OurMessage({ message }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="zood__over__section" id="Message">
      <div className="zood__message__section">
        <div className="zood__message__section__overlay">
          <div className="zood__message__section__overlay__text">
            <div className="zood__message__section__overlay__text__heading">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? message?.heading?.ar
                  : message?.heading?.en}
              </AnimateText>
            </div>
            <div className="zood__message__section__overlay__text__sub__heading">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? message?.subHeading?.ar
                  : message?.subHeading?.en}
              </AnimateText>
            </div>
            <div className="zood__message__section__overlay__text__sub__text">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? message?.content?.ar
                  : message?.content?.en}
              </AnimateText>
            </div>
          </div>
          <div
            className="zood__message__section__overlay__img"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            <img
              loading="lazy"
              alt="zood"
              src="https://res.cloudinary.com/dsxbqyjwo/image/upload/q_50/v1705061464/zoodicon_jqwvai.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(OurMessage);
