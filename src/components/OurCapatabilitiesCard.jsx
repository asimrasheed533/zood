import Image from "./Image";
import { memo } from "react";

function OurCapatabilitiesCard({ svg, heading }) {
  return (
    <div
      className="Our__Capabilities__Section__content__right__content__cards__card"
      data-aos="fade-up"
      data-aos-delay="60"
      data-aos-duration="1500"
    >
      <div
        className="Our__Capabilities__Section__content__right__content__cards__card__svg"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1500"
      >
        <Image loading="lazy" alt="zood" src={svg} />
      </div>
      <div
        className="Our__Capabilities__Section__content__right__content__cards__card__heading"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1500"
      >
        {heading}
      </div>
    </div>
  );
}

export default memo(OurCapatabilitiesCard);
