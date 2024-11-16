import AnimateText from "./AnimateText";
import Image from "./Image";
import { Link } from "react-router-dom";
import { memo } from "react";

function EliteCard({
  image,
  heading,
  subheading,
  detail,
  reverse,
  styleline,
  buttonText,
  buttonLink,
}) {
  return (
    <div
      className={`elite__card__main__wraper  ${
        reverse ? "elite__card__main__wraper__reverse" : ""
      } `}
    >
      <div className="elite__card__main__wraper__col">
        <div className="elite__card__main__content">
          <div
            className="elite__card__main__content__heading"
            data-aos="fade-right"
            data-aos-delay="60"
            data-aos-duration="1600"
          >
            {heading}
          </div>
          {styleline ? (
            <div className="elite__card__main__content__heading__line " />
          ) : null}
          <div className="elite__card__main__content__sub__heading">
            {subheading}
          </div>
          <div className="elite__card__main__content__detail">
            <AnimateText>{detail}</AnimateText>
          </div>
          {buttonLink && (
            <Link
              unstable_viewTransition
              to={buttonLink}
              className="website__link__button"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
      <div className="elite__card__main__wraper__col">
        <div
          className="elite__card__main__content__img"
          data-aos="fade-right"
          data-aos-delay="60"
          data-aos-duration="1600"
        >
          <Image loading="lazy" alt="zood" src={image} />
        </div>
      </div>
    </div>
  );
}

export default memo(EliteCard);
