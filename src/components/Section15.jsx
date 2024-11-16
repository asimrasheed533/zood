import AccompaningCard from "./AccompaningCard";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section15({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="elite__accomonading__container__overlay">
      <div className="elite__accomonading__container">
        <div
          className="elite__accomonading__container__heading"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {selectedLanguage === "ar" ? data?.heading?.ar : data?.heading?.en}
        </div>
        <div className="acco__cards__container">
          {data?.cards?.map((item, index) => (
            <AccompaningCard
              key={index}
              number={item?.number}
              svg={
                <img
                  src={item?.image}
                  alt={
                    selectedLanguage === "ar"
                      ? item?.title?.ar
                      : item?.title?.en
                  }
                  loading="lazy"
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "contain",
                  }}
                />
              }
              text={
                selectedLanguage === "ar" ? item?.title?.ar : item?.title?.en
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Section15);
