import { Swiper, SwiperSlide } from "swiper/react";

import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section7({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="okz__five__comp__container__over">
      <div className="okz__five__comp__container">
        <div className="okz__third__comp__container__img">
          <Swiper>
            {data?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  loading="lazy"
                  alt="zood"
                  className="okz__slider__overlay__img"
                  src={image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="okz__third__comp__container__text">
          <div className="okz__third__comp__container__heading">
            <AnimateText>
              {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
            </AnimateText>
          </div>
          <div className="okz__third__comp__container__text__line" />
          <div className="okz__third__comp__container__text__detail">
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

export default memo(Section7);
