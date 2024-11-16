import AnimateText from "./AnimateText";
import OurCapatabilitiesCard from "./OurCapatabilitiesCard";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Capabilities({ capabilities }) {
  const [selectedLanguage] = useLanguage();

  return (
    <section className="Our__Capabilities__Section" id="Capabilities">
      <div className="Our__Capabilities__Section__content">
        <div
          className="Our__Capabilities__Section__content__left"
          data-aos="fade-right"
          data-aos-delay="60"
          data-aos-duration="1600"
        >
          <div className="Our__Capabilities__Section__content__left__content">
            <div className="Our__Capabilities__Section__content__left__content__img" />
            <div className="Our__Capabilities__Section__content__left__content__heading">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? capabilities?.heading?.ar
                  : capabilities?.heading?.en}
              </AnimateText>
            </div>

            <div className="Our__Capabilities__Section__content__left__content__text">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? capabilities?.content.ar
                  : capabilities?.content.en}
              </AnimateText>
            </div>
          </div>
        </div>
        <div className="Our__Capabilities__Section__content__right">
          <div className="Our__Capabilities__Section__content__right__content">
            <div className="Our__Capabilities__Section__content__right__content__cards">
              {capabilities?.entries?.map((item, index) => (
                <OurCapatabilitiesCard
                  key={index}
                  svg={item.logo}
                  heading={
                    selectedLanguage === "ar"
                      ? item?.heading?.ar
                      : item?.heading?.en
                  }
                  delay={200 + index * 20}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Capabilities);
