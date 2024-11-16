import Image from "./Image";
import { memo } from "react";

function IndustrySolutionCard({ image, title, info }) {
  return (
    <div className="industries__solutions__content__card">
      <Image
        loading="lazy"
        alt="zood"
        src={image}
        className="industries__solutions__content__card__img"
      />
      <div className="industries__solutions__content__card__heading heading">
        {title}
      </div>
      <div className="industries__solutions__content__card__info">{info}</div>
    </div>
  );
}

export default memo(IndustrySolutionCard);
