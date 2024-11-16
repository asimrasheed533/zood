import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import DownloadtheApp from "@components/DownloadtheApp";
import SlidingImagesEntry from "@components/SlidingImagesEntry";
import styles from "./style.module.scss";
import useSettings from "../../utils/useSettings";

function SlidingImages() {
  const container = useRef(null);
  const settings = useSettings();

  const slides = settings?.sliders || [];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <DownloadtheApp />
      <div ref={container} className={styles.slidingImages}>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          <Swiper
            slidesPerView={window.innerWidth > 786 ? slides.length / 2 : 1}
            spaceBetween={30}
          >
            {slides?.slice(0, slides.length / 2)?.map((project, index) => (
              <SwiperSlide key={index}>
                <SlidingImagesEntry project={project} styles={styles} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div style={{ x: x2 }} className={styles.slider}>
          <Swiper
            slidesPerView={window.innerWidth > 786 ? slides.length / 2 : 1}
            spaceBetween={30}
          >
            {slides
              ?.slice(slides.length / 2, slides.length)
              ?.map((project, index) => (
                <SwiperSlide key={index}>
                  <SlidingImagesEntry project={project} styles={styles} />
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle} />
        </motion.div>
      </div>
    </>
  );
}

export default memo(SlidingImages);
