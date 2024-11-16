import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section5({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="okz__third__comp__container__over__second">
      <div
        className="okz__third__comp__container"
        style={{
          boxShadow: "none",
          marginTop: "6em",
        }}
      >
        <div className="okz__third__comp__container__img">
          <Image loading="lazy" alt="zood" src={data?.image} />
        </div>
        <div className="okz__third__comp__container__text">
          <div className="okz__third__comp__container__heading">
            {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
          </div>
          <div className="okz__third__comp__container__text__line" />
          <div className="okz__third__comp__container__text__detail">
            {selectedLanguage === "ar"
              ? data?.description?.ar
              : data?.description?.en}
          </div>
          {data?.buttonTitle?.en !== "" && (
            <a
              className="website__link__button"
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
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Section5);
