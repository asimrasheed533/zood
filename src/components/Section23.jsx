import { Swiper, SwiperSlide } from "swiper/react";

import Image from "./Image";
import { Navigation } from "swiper";
import { memo } from "react";

function Section23({ data }) {
  return (
    <div className="okz__slider__overlay__over">
      <div className="okz__slider__overlay">
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          className="mySwiper"
        >
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
    </div>
  );
}

export default memo(Section23);
