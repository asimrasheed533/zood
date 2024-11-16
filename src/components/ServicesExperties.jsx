import Image from "./Image";
import { memo } from "react";

function ServicesExperties({ children, image, description }) {
  return (
    <div className="services__experties">
      <div className="services__experties__heading heading">Our Expertise</div>
      <div className="services__experties__info">{description}</div>
      <div className="services__experties__content">
        <div className="services__experties__content__left">{children}</div>
        <div className="services__experties__content__right">
          <Image
            loading="lazy"
            alt="zood"
            src={image}
            className="services__experties__content__right__img"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(ServicesExperties);
