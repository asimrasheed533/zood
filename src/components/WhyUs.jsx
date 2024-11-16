import AnimateText from "./AnimateText";
import Image from "./Image";
import { WebpZoodsectionbackground1 } from "@assets";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function WhyUs({ whyUs }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <section className="whyZood__section" id="Why">
      <div className="whyZood__section__content__heading">
        <AnimateText>{language.WhyZood}</AnimateText>
      </div>
      <div className="whyZood__section__content">
        {whyUs?.map((reason, index) => (
          <div key={index} className="whyZood__section__content__imgcard">
            <div
              className="whyZood__section__content__imgcard__img"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              <Image
                loading="lazy"
                alt="zood"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
                src={reason?.image}
              />
            </div>
            <div
              className="whyZood__section__content__imgcard__backgroundimg"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              <img loading="lazy" alt="zood" src={WebpZoodsectionbackground1} />
            </div>
            <div className="whyZood__section__content__imgcard__heading">
              <AnimateText>
                {selectedLanguage === "ar"
                  ? reason?.heading?.ar
                  : reason?.heading?.en}
              </AnimateText>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(WhyUs);
