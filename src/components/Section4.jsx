import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section4({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="clarify__eat__container__over">
      <div className="clarify__eat__container">
        <div className="clarify__eat__container__col__img">
          <Image loading="lazy" alt="zood" src={data?.image} />
        </div>
        <div className="clarify__eat__container__col__content">
          <div className="clarify__eat__col__content__heading">
            <AnimateText>
              {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
            </AnimateText>
          </div>
          <div className="clarify__eat__col__content__sub__heading__line" />
          <div className="clarify__eat__col__content__text">
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

export default memo(Section4);
