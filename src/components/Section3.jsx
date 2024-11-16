import Image from "./Image";
import { Link } from "react-router-dom";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section3({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="second__container__wraper">
      <div className="second__container__wraper__sub">
        <div className="second__container__wraper__col__img">
          <img
            loading="lazy"
            alt="zood"
            src="https://res.cloudinary.com/dsxbqyjwo/image/upload/q_50/v1705062496/buildingimg_a7ma9h.webp"
          />
        </div>
        <div className="second__container__wraper__col__content__overlay">
          <div className="second__container__wraper__col__content">
            <div className="second__container__wraper__col__content__child">
              <div className="second__container__wraper__col__log">
                <Image loading="lazy" alt="zood" src={data?.image} />
              </div>
              <div
                className="second__container__wraper__col__text"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1600"
              >
                {selectedLanguage === "ar"
                  ? data?.description?.ar
                  : data?.description?.en}
                {data?.buttonTitle?.en !== "" && (
                  <Link
                    unstable_viewTransition
                    className="website__link__button"
                    to={
                      selectedLanguage === "ar"
                        ? data?.buttonLink?.ar
                        : data?.buttonLink?.en
                    }
                    target="_blank"
                  >
                    {selectedLanguage === "ar"
                      ? data?.buttonTitle?.ar
                      : data?.buttonTitle?.en}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Section3);
