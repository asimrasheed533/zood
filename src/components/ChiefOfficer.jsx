import AnimateText from "./AnimateText";
import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function ChiefOfficer({ ceoMessage }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div className="chief__section">
        <div className="chief__section__container">
          <div className="chief__section__heading">
            <AnimateText>
              {selectedLanguage === "ar"
                ? ceoMessage?.heading?.ar
                : ceoMessage?.heading?.en}
            </AnimateText>
          </div>
          <div
            className="chief__section__text"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            <AnimateText>
              {selectedLanguage === "ar"
                ? ceoMessage?.content?.ar
                : ceoMessage?.content?.en}
            </AnimateText>
          </div>
          <Image
            loading="lazy"
            alt="zood"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
            src={ceoMessage?.image}
            className="chief__section__img"
          />
        </div>
      </div>
    </div>
  );
}

export default memo(ChiefOfficer);
