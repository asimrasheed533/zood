import Image from "./Image";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function Section2({ data }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <div className="mukhtat__five">
      <div className="mukhtat__five__layer">
        <div className="mukhtat__five__points">
          <div className="mukhtat__five__point">
            {language.OkazMasjidHeading}
          </div>
          {data?.points?.map((item, index) => (
            <div className="mukhtat__five__point" key={index}>
              <div className="mukhtat__five__point__icon">
                <Image loading="lazy" src={item?.image} alt="zood" />
              </div>
              <div className="mukhtat__five__point__text">
                {selectedLanguage === "ar" ? item?.title?.ar : item?.title?.en}
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
      </div>
    </div>
  );
}

export default memo(Section2);
