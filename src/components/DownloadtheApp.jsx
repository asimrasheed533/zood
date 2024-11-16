import AnimateText from "./AnimateText";
import { memo } from "react";
import playstorebutton from "@assets/playstorebutton.webp";
import useGetLanguage from "@utils/useGetLanguage";

function DownloadtheApp() {
  const language = useGetLanguage();

  return (
    <div>
      <div
        className="DownloadtheApp__section"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1500"
      >
        <div className="DownloadtheApp__section__content">
          <div className="DownloadtheApp__section__content__left">
            <div
              className="DownloadtheApp__section__content__left__subheading"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              <AnimateText>{language.GooglePlay}</AnimateText>
            </div>
            <div
              className="DownloadtheApp__section__content__left__heading"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1700"
            >
              <AnimateText>{language.GooglePlayHeading}</AnimateText>
            </div>
            <img
              loading="lazy"
              alt="zood"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
              src={playstorebutton}
              className="DownloadtheApp__section__content__left__img"
            />
          </div>
          <div
            className="DownloadtheApp__section__content__right"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1800"
          >
            <img
              loading="lazy"
              alt="zood"
              src="https://res.cloudinary.com/dxatjzlah/image/upload/q_20/v1701349903/Zood/%D8%AC%D9%88%D8%A7%D9%84_copy-min_q1gyro.webp"
              className="DownloadtheApp__section__content__left__zoodmobileapp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(DownloadtheApp);
