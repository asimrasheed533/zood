import CountUpWhenInView from "./CountUpWhenInView";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section22({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="macc__captial__container">
      <div className="macc__captial__container__wraper">
        <div className="macc__captial__container__text__upper">
          <div className="macc__captial__container__text__heading">
            {selectedLanguage === "ar" ? data?.heading.ar : data?.heading.en}
          </div>
          <div className="macc__captial__container__text__sub__heading">
            {selectedLanguage === "ar" && data?.symbol.ar && data?.symbol.ar}
            {data?.number && (
              <CountUpWhenInView start={0} end={data?.number} duration={3} />
            )}
            {selectedLanguage === "en" && data?.symbol.en && data?.symbol.en}
          </div>
        </div>
        <div className="macc__captial__container__wraper__text__detail">
          {selectedLanguage === "ar" ? data?.content.ar : data?.content.en}
        </div>
        <a
          href={
            selectedLanguage === "ar"
              ? data?.buttonLink.ar
              : data?.buttonLink.en
          }
        >
          {selectedLanguage === "ar"
            ? data?.buttonTitle.ar
            : data?.buttonTitle.en}
        </a>
      </div>
    </div>
  );
}

export default memo(Section22);
