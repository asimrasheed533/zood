import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useEffect, useState } from "react";

import AnimateText from "./AnimateText";
import Image from "./Image";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function OurPartners({ partners }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();
  const [swiper, setSwiper] = useState(null);

  const checkWidth = () => {
    if (window.innerWidth > 1220) {
      setSwiper(4);
    } else if (window.innerWidth > 768) {
      setSwiper(3);
    } else if (window.innerWidth > 550) {
      setSwiper(2);
    } else {
      setSwiper(1);
    }
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [swiper]);

  return (
    <div className="ourpartners__container__gif" id="Partner">
      <div className="ourpartners__container">
        <div className="ourpartners__container__content">
          <div className="ourpartners__container__content__heading">
            <AnimateText>{language.OurPartners}</AnimateText>
          </div>
          <div className="ourpartners__container__content__swiper">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={swiper}
              loop={true}
              freeMode={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                reverseDirection: true,
              }}
            >
              {partners?.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="ourpartners__container__content__swiper__card">
                    <Image
                      loading="lazy"
                      alt="zood"
                      src={partner.logo}
                      className="ourpartners__container__content__swiper__card__img"
                    />
                    <div className="ourpartners__container__content__swiper__card__text">
                      <AnimateText>
                        {selectedLanguage === "ar"
                          ? partner?.content.ar
                          : partner?.content.en}
                      </AnimateText>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(OurPartners);
