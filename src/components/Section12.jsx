import CountUpWhenInView from "./CountUpWhenInView";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section12({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="commercial__Cards__container">
      {data?.points?.map((item, index) => (
        <div
          key={index}
          className="commercial__Card__overlay"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1600"
        >
          <div className="commercial__Card__wraper">
            <div className="commercial__Card__wraper__svg">
              <img
                src={item?.image}
                alt="zood"
                loading="lazy"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="commercial__Card__wraper__num">
              <CountUpWhenInView start={0} end={item?.number} duration={3} />
            </div>
            <div className="commercial__Card__wraper__title">
              {selectedLanguage === "ar" ? item?.title?.ar : item?.title?.en}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Section12);
