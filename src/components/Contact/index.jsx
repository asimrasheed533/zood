import { Instagram, Linkedin, Youtube } from "react-feather";
import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import AnimateText from "../AnimateText";
import Image from "../Image";
import { Link } from "react-router-dom";
import Magnetic from "@common/Magnetic";
import Rounded from "@common/RoundedButton";
import styles from "./style.module.scss";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";
import useSettings from "../../utils/useSettings";

function index() {
  const data = useSettings();
  const language = useGetLanguage();
  const container = useRef(null);
  const [selectedLanguage] = useLanguage();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div
      style={{ y }}
      ref={container}
      className={`${styles.contact} ${
        selectedLanguage === "ar" ? styles.contactar : ""
      }`}
    >
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer} style={{ width: "150px" }}>
              <Image loading="lazy" alt="zood" src={data?.logo} />
            </div>
            <h2 style={{ color: "white" }}>
              <AnimateText>{language.LetWork}</AnimateText>
            </h2>
          </span>
          <h2 style={{ color: "white" }}>
            <AnimateText>{language.Together}</AnimateText>
          </h2>
          <Link unstable_viewTransition to="/contact">
            <motion.div
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
              style={{ x }}
              className={styles.buttonContainer}
            >
              <Rounded
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
                backgroundColor={"#000"}
                className={styles.button}
              >
                <p
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {language.GetTouch}
                </p>
              </Rounded>
            </motion.div>
          </Link>
          <motion.svg
            className={styles.svgggg}
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            <p>
              <a className="phonetagss" href={`mailto:${data?.email}`}>
                {data?.email}
              </a>
            </p>
          </Rounded>
          <Rounded
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1700"
          >
            <p>
              <a className="phonetagss" href={`tel:${data?.phone}`}>
                {data?.phone}
              </a>
            </p>
          </Rounded>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          className={styles.info}
        >
          <div />
          <div>
            <span>
              <h3>
                {selectedLanguage === "ar" ? "التواصل الإجتماعي" : "socials"}
              </h3>
            </span>
            <Magnetic>
              <a
                className="socialmeadialinks"
                href={data?.youtube}
                target="_blank"
                title="Youtube"
              >
                <Youtube />
                Youtube
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="socialmeadialinks"
                href={data?.instagram}
                target="_blank"
                title="Instagram"
              >
                <Instagram />
                Instagram
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="socialmeadialinks"
                href="https://www.snapchat.com/add/zood_realestate"
                target="_blank"
                title="Snapchat"
              >
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.9211 36.9352C46.5066 37.9606 44.4323 38.8087 40.9223 39.3855C40.5955 39.441 40.4524 40.0093 40.2644 40.9386C40.1875 41.3231 40.1041 41.697 39.9973 42.0922C39.966 42.2563 39.8774 42.4039 39.7474 42.5088C39.6214 42.6095 39.4615 42.6577 39.3009 42.6433H39.2475C38.9121 42.6295 38.5787 42.5837 38.252 42.5066C37.387 42.315 36.5039 42.2169 35.6179 42.214C34.977 42.214 34.3468 42.2716 33.7166 42.3849C32.3791 42.7492 31.145 43.4208 30.1127 44.346C28.3791 45.94 26.1433 46.8785 23.7914 46.9993C23.6589 46.9993 23.5307 46.995 23.4346 46.9886C23.3565 46.9958 23.2781 46.9993 23.1996 46.9993C20.8468 46.8799 18.6098 45.9412 16.8762 44.346C15.8434 43.4213 14.6095 42.7499 13.2722 42.3849C12.6446 42.2727 12.0085 42.2156 11.3709 42.214C10.4862 42.2239 9.60514 42.3299 8.7433 42.5301C8.41431 42.6113 8.08104 42.6626 7.74351 42.6797C7.57337 42.7011 7.4016 42.6551 7.26498 42.5515C7.12357 42.4427 7.02642 42.2864 6.99153 42.1114C6.88977 41.7272 6.80142 41.3396 6.72663 40.9493C6.53436 40.0157 6.39551 39.4453 6.06865 39.3898C2.55658 38.8151 0.484371 37.9649 0.0699288 36.9352C0.0263601 36.832 0.00036562 36.7222 -0.00697788 36.6104C-0.0145255 36.4641 0.029304 36.3198 0.116927 36.2024C0.201039 36.0881 0.325571 36.0102 0.465144 35.9845C3.37051 35.4248 5.98534 33.7692 7.83537 31.3188C8.85876 30.0536 9.70404 28.6541 10.3477 27.1595L10.3562 27.1317C10.5479 26.7931 10.6682 26.4188 10.7097 26.0319C10.7512 25.645 10.7131 25.2537 10.5976 24.8822C10.149 23.7478 8.6493 23.2415 7.65806 22.9061C7.43353 22.8351 7.21189 22.7553 6.99367 22.6668C6.11351 22.2973 4.66938 21.5132 4.86164 20.4387C5.0041 20.0381 5.2667 19.6911 5.61362 19.4453C5.94998 19.2073 6.35553 19.0872 6.76722 19.1035C6.96652 19.0992 7.16405 19.1417 7.34402 19.2274C8.07598 19.629 8.88989 19.8585 9.72386 19.8982C10.2228 19.9341 10.7159 19.773 11.0975 19.4496C11.0712 18.951 11.0427 18.4525 11.012 17.9542C10.5622 14.5852 10.7551 11.1616 11.5803 7.86443C12.5232 5.53779 14.1228 3.53585 16.184 2.10283C18.1881 0.714525 20.5738 -0.0170336 23.0116 0.00926343L23.958 0.000718349C26.3985 -0.0262241 28.7872 0.705313 30.7942 2.09429C32.859 3.52707 34.4623 5.52972 35.4086 7.85802C36.2337 11.1588 36.4251 14.5863 35.9725 17.9584L35.964 18.1208L35.8892 19.4496C36.2417 19.7487 36.6818 19.9046 37.1347 19.8939C37.9187 19.8298 38.6814 19.6055 39.3821 19.2274C39.6106 19.1205 39.8604 19.0664 40.1127 19.0693C40.4032 19.0693 40.6852 19.1291 40.9501 19.2402L40.9629 19.2488C41.2682 19.3276 41.5419 19.4984 41.747 19.738C41.9588 19.9842 42.096 20.2859 42.1422 20.6074C42.1507 21.1308 41.7875 21.9106 39.9952 22.6668C39.7764 22.7538 39.5548 22.8336 39.3308 22.9061C38.3353 23.2415 36.8399 23.7478 36.3913 24.8822C36.2752 25.2527 36.2362 25.643 36.2766 26.0291C36.317 26.4152 36.436 26.789 36.6262 27.1274L36.6412 27.1573C37.5203 29.316 38.8774 31.2472 40.6104 32.8057C42.2985 34.3224 44.3255 35.4125 46.5216 35.9845C46.6603 36.0109 46.7839 36.0887 46.8677 36.2024C46.9543 36.3203 46.998 36.4643 46.9916 36.6104C46.9852 36.7235 46.9599 36.8347 46.9168 36.9394L46.9211 36.9352Z"
                    fill="currentColor"
                  />
                </svg>
                Snapchat
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="socialmeadialinks"
                href={data?.linkedin}
                target="_blank"
                title="Linkedin"
              >
                <Linkedin />
                Linkedin
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="socialmeadialinks"
                href={data?.twitter}
                target="_blank"
                title="Twitter"
              >
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.308 8.469L18.38 0H16.704L10.562 7.353L5.658 0H0L7.418 11.12L0 20H1.676L8.162 12.235L13.342 20H19L11.308 8.469ZM9.012 11.217L8.26 10.11L2.28 1.3H4.855L9.681 8.41L10.432 9.517L16.705 18.759H14.131L9.011 11.218L9.012 11.217Z"
                    fill="currentColor"
                  />
                </svg>
                Twitter
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
      <div className="footer__content__bottom">
        <Image
          loading="lazy"
          alt="zood"
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1705062742/riyad_expo_flfpop.webp"
          className="bottom__bar__logos"
          style={{ width: "100%", maxWidth: "130px", margin: "0 20px" }}
        />
        <Image
          loading="lazy"
          alt="zood"
          src={data?.logo}
          style={{ width: "100%", maxWidth: "130px", margin: "0 20px" }}
        />
        <Image
          loading="lazy"
          alt="zood"
          src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1705062675/saudi_vision_vrhkva.webp"
          style={{ width: "100%", maxWidth: "130px", margin: "0 20px" }}
        />
      </div>
    </motion.div>
  );
}

export default memo(index);
