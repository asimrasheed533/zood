import { memo, useCallback, useMemo } from "react";

import Image from "./Image";
import { useNavigate } from "react-router-dom";

function HomeSectionSlide({
  slide,
  index,
  selectedLanguage,
  setShowIntroVideo,
}) {
  const navigate = useNavigate();

  const { banner, logo, name, city, area, nameOF, numberOF, introVideo } =
    slide;

  const fetchPriority = useMemo(
    () => (index === 0 || index === 1 || index === 2 ? "high" : "low"),
    [index],
  );
  const loading = useMemo(
    () => (index === 0 || index === 1 || index === 2 ? "eager" : "lazy"),
    [index],
  );

  const handleClick = useCallback(() => {
    navigate(`/projects/${name.en}`, {
      state: slide,
      unstable_viewTransition: true,
    });
  }, [navigate, name.en, slide]);

  const handleIntroVideoClick = useCallback(() => {
    setShowIntroVideo(introVideo);
  }, [introVideo, setShowIntroVideo]);

  return (
    <div className="big__slides">
      <Image
        fetchpriority={fetchPriority}
        loading={loading}
        alt="zood"
        src={banner}
        className="big__slides__image"
      />
      <div className="big__slides__overlay">
        <div className="big__slides__content">
          <span className="big__slides__content__logo__wrapper">
            <Image
              fetchpriority={fetchPriority}
              loading={loading}
              alt="zood"
              src={logo}
              className="big__slides__content__icon"
              data-swiper-parallax="-1000"
              data-swiper-parallax-opacity="0"
              onClick={handleClick}
            />
            {introVideo && (
              <div
                onClick={handleIntroVideoClick}
                title="Youtube"
                className="big__slides__content__icon__youtube__ancr"
              >
                <div
                  className="big__slides__content__icon__youtube"
                  data-swiper-parallax="-1000"
                  data-swiper-parallax-opacity="0"
                >
                  <svg
                    width="532"
                    height="532"
                    viewBox="0 0 532 532"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M266 10C124.837 10 10 124.837 10 266C10 407.163 124.837 522 266 522C407.163 522 522 407.163 522 266C522 124.837 407.163 10 266 10ZM359.952 305.957L248.763 366.843C241.829 370.747 234.192 372.688 226.555 372.688C218.597 372.688 210.619 370.576 203.365 366.352C189.136 358.032 180.667 343.248 180.667 326.779V205.2C180.667 188.731 189.136 173.947 203.365 165.627C217.552 157.328 234.619 157.179 248.976 165.264L359.739 225.915C374.587 234.256 383.312 249.189 383.312 265.979C383.312 282.768 374.587 297.701 359.931 305.936L359.952 305.957ZM340.667 266C340.667 267.856 339.429 268.539 339.259 268.667L228.069 329.573C227.664 329.787 226.427 330.469 224.933 329.552C223.355 328.635 223.355 327.269 223.355 326.821V205.243C223.355 204.795 223.355 203.429 224.933 202.512C225.509 202.171 226.043 202.064 226.512 202.064C227.28 202.064 227.899 202.405 228.283 202.619L339.045 263.291C339.451 263.525 340.667 264.208 340.667 266.064V266Z"
                      stroke="currentCOlor"
                      strokeWidth="20"
                    />
                  </svg>
                </div>
              </div>
            )}
          </span>
          <div
            className={
              selectedLanguage === "ar"
                ? "big__slides__content__bar__rtl"
                : "big__slides__content__bar"
            }
          >
            <div
              className="big__slides__content__bar__entry"
              data-swiper-parallax="-700"
              data-swiper-parallax-opacity="0"
            >
              <div className="big__slides__content__bar__entry__heading">
                {selectedLanguage === "ar" ? "الموقع " : " Location"}
              </div>
              <div className="big__slides__content__bar__entry__detail">
                {city[selectedLanguage]}
              </div>
            </div>
            <div
              className="big__slides__content__bar__entry"
              data-swiper-parallax="-600"
              data-swiper-parallax-opacity="0"
            >
              <div className="big__slides__content__bar__entry__heading">
                {selectedLanguage === "ar" ? "المساحة" : " Area"}
              </div>
              {selectedLanguage === "ar" ? (
                <div
                  className="big__slides__content__bar__entry__detail"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <span
                    style={{
                      marginRight: "0.5rem",
                      marginTop: "-0.2rem",
                    }}
                  >
                    {selectedLanguage === "ar" && " م² "}
                  </span>
                  <span>{area}</span>
                </div>
              ) : (
                <div className="big__slides__content__bar__entry__detail">
                  <span>{area}</span>
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      marginTop: "-0.2rem",
                    }}
                  >
                    {selectedLanguage === "en" && "m²"}
                  </span>
                </div>
              )}
            </div>
            {nameOF[selectedLanguage] && (
              <div
                className="big__slides__content__bar__entry"
                data-swiper-parallax="-500"
                data-swiper-parallax-opacity="0"
              >
                <div className="big__slides__content__bar__entry__heading">
                  {nameOF[selectedLanguage]}
                </div>
                <div className="big__slides__content__bar__entry__detail">
                  {numberOF}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HomeSectionSlide);
