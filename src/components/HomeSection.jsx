import { Autoplay, FreeMode, Pagination, Parallax, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useCallback, useMemo, useState } from "react";

import HomeSectionSlide from "./HomeSectionSlide";
import HomeSectionThumbnail from "./HomeSectionThumbnail";
import { X } from "react-feather";
import { createPortal } from "react-dom";
import { useLanguage } from "@context/LanguageContext";
import useQuery from "@utils/useQuery";

function isVideoLink(link) {
  const videoExtensions = [
    "mp4",
    "webm",
    "ogg",
    "ogv",
    "avi",
    "mov",
    "wmv",
    "flv",
  ];
  return videoExtensions.some((extension) => link.includes(extension));
}

function isYouTubeLink(link) {
  return link.includes("youtube") || link.includes("youtu.be");
}

function getYouTubeVideoId(link) {
  return link.split("/").pop();
}

function HomeSection() {
  const { data } = useQuery("/projects/all");
  const [selectedLanguage] = useLanguage();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showIntroVideo, setShowIntroVideo] = useState("");

  const memorizedData = useMemo(() => {
    return data
      ?.sort((a, b) => a.place - b.place)
      ?.filter((data) => data?.deletedAt === null);
  }, [data]);

  const handleIntroVideoClose = useCallback(() => {
    setShowIntroVideo("");
  }, []);

  const handleIntroVideoContentClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div className="home__section__container">
      {showIntroVideo !== "" &&
        createPortal(
          <div
            className="intro__video__overlay"
            onClick={handleIntroVideoClose}
          >
            <div
              className="intro__video__close"
              onClick={handleIntroVideoClose}
            >
              <X />
            </div>
            <div
              className="intro__video__content"
              onClick={handleIntroVideoContentClick}
            >
              {isVideoLink(showIntroVideo) ? (
                <video
                  loading="lazy"
                  src={showIntroVideo}
                  muted
                  autoPlay
                  loop
                  controls
                />
              ) : isYouTubeLink(showIntroVideo) ? (
                <iframe
                  loading="lazy"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    showIntroVideo
                  )}`}
                />
              ) : (
                <iframe loading="lazy" src={showIntroVideo} />
              )}
            </div>
          </div>,
          document.body
        )}
      <Swiper
        loop
        speed={1000}
        parallax
        spaceBetween={0}
        className="mySwiper2"
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Autoplay, Pagination, Parallax]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          reverseDirection: selectedLanguage === "ar",
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {memorizedData?.map((slide, index) => (
          <SwiperSlide key={slide?._id} data-swiper-parallax="-500">
            <HomeSectionSlide
              slide={slide}
              index={index}
              selectedLanguage={selectedLanguage}
              setShowIntroVideo={setShowIntroVideo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop
        speed={1000}
        parallax
        freeMode
        spaceBetween={10}
        className="mySwiper"
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        observeSlideChildren
        slidesPerView={window.innerWidth > 500 ? 3 : 1.5}
        modules={[FreeMode, Thumbs, Autoplay, Pagination, Parallax]}
        autoplay={{
          delay: 4950,
          disableOnInteraction: false,
          reverseDirection: selectedLanguage === "ar",
        }}
      >
        {memorizedData?.map((slide, index) => (
          <SwiperSlide key={slide?._id} data-swiper-parallax="-500">
            <HomeSectionThumbnail slide={slide} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default memo(HomeSection);
