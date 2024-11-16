import { memo } from "react";
import optimizeImage from "@utils/optimizeImage";
import { useLanguage } from "@context/LanguageContext";

function Section27({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div
      className="advantages__overlay"
      style={{
        backgroundImage: `url(${optimizeImage(data?.image)})`,
      }}
    >
      <div className="advantages__overlay__container">
        <div className="advantages__overlay__container__text__wraper">
          <div className="advantages__overlay__container__text__wraper__heading">
            {selectedLanguage === "ar" ? data?.heading?.ar : data?.heading?.en}
          </div>
          <div className="advantages__overlay__container__text__wraper__sub__heading">
            {selectedLanguage === "ar" ? data?.content?.ar : data?.content?.en}
          </div>
          {data?.points?.map((item, index) => (
            <div
              className="advantages__wraper__sub__heading__points"
              key={index}
            >
              <div className="advantages__wraper__sub__heading__point__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-aperture"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                  <line x1="9.69" y1="8" x2="21.17" y2="8" />
                  <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                  <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                  <line x1="14.31" y1="16" x2="2.83" y2="16" />
                  <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                </svg>
              </div>
              <div className="advantages__wraper__sub__heading__point__detail">
                {selectedLanguage === "ar" ? item?.arabic : item?.english}
              </div>
            </div>
          ))}
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
        <div className="advantages__overlay__container__emty " />
      </div>
    </div>
  );
}

export default memo(Section27);
