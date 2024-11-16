import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";

function ProvideServiceCard({ img, heading, text }) {
  return (
    <div className="service__provider__section__card">
      <Image
        loading="lazy"
        alt="zood"
        src={img}
        className="service__provider__section__card__img"
      />
      <div className="service__provider__section__card__heading">
        <AnimateText>{heading}</AnimateText>
      </div>
      <div
        className="service__provider__section__card__text"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1700"
      >
        {text}
      </div>
    </div>
  );
}

export default memo(ProvideServiceCard);
