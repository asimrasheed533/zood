import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useMemo } from "react";

import CountUpWhenInView from "./CountUpWhenInView";
import Image from "./Image";
import { Link } from "react-router-dom";
import { useLanguage } from "@context/LanguageContext";

function Section1({ data }) {
  const [selectedLanguage] = useLanguage();

  const pointsSplittedInArrayOF2 = useMemo(
    () =>
      data?.points?.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
          acc.push([curr]);
        } else {
          acc[acc.length - 1].push(curr);
        }
        return acc;
      }, []),
    [data?.points],
  );

  return (
    <div className="hateen__about">
      <div className="hateen__about__left__wrapper">
        <Swiper className="hateen__about__left__wrapper__swiper">
          {data?.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                alt="zood"
                loading="lazy"
                src={item}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hateen__about__right">
        <div className="hateen__about__right__heading">
          {selectedLanguage === "ar" ? data?.title.ar : data?.title.en}
        </div>
        <div className="hateen__about__right__info">
          {selectedLanguage === "ar"
            ? data?.description.ar
            : data?.description.en}
        </div>
        {pointsSplittedInArrayOF2.map((item, index) => {
          return (
            <div className="hateen__about__right__points" key={index}>
              {item.map((item, index) => {
                return (
                  <div className="hateen__about__right__point" key={index}>
                    <div className="hateen__about__right__point__heading">
                      {selectedLanguage === "ar" ? item.titleAr : item.title}
                    </div>
                    <div className="hateen__about__right__point__info">
                      {selectedLanguage === "ar"
                        ? item.descriptionAr
                        : item.description}
                      {item.number && <CountUpWhenInView end={item.number} />}
                      {item.number && selectedLanguage === "ar"
                        ? item.symbolAr
                        : item.symbol}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        {data?.buttonTitle?.en !== "" && (
          <Link
            to={
              selectedLanguage === "ar"
                ? data?.buttonLink?.ar
                : data?.buttonLink?.en
            }
            unstable_viewTransition
            className="website__link__button"
          >
            {selectedLanguage === "ar"
              ? data?.buttonTitle?.ar
              : data?.buttonTitle?.en}
          </Link>
        )}
      </div>
    </div>
  );
}

export default memo(Section1);
