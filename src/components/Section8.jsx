import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import optimizeImage from "@utils/optimizeImage";
import { useLanguage } from "@context/LanguageContext";

function Section8({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div
      className="okz__bg__overlay__container"
      style={{ backgroundImage: `url(${optimizeImage(data.backgroundImage)})` }}
    >
      <div className="okz__bg__overlay__wraper">
        <div className="okz__bg__overlay__wraper__text">
          <div className="okz__bg__overlay__wraper__text__heading">
            <AnimateText>
              {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
            </AnimateText>
          </div>
          <div className="okz__bg__overlay__wraper__text__sub__heading">
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
        <div className="okz__bg__overlay__wraper__img">
          <Image loading="lazy" alt="zood" src={data?.image} />
        </div>
      </div>
    </div>
  );
}

export default memo(Section8);
