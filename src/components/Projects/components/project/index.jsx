import Image from "../../../Image";
import { memo } from "react";
import styles from "./style.module.scss";
import { useLanguage } from "@context/LanguageContext";

function index({ index, image, arabicImage, manageModal, year, location }) {
  const [language] = useLanguage();

  return (
    <div
      onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onMouseLeave={(e) => manageModal(false, index, e.clientX, e.clientY)}
      className={styles.project}
    >
      <Image
        alt="zood"
        loading="lazy"
        className={styles.logoicon}
        src={language === "ar" ? arabicImage : image}
      />
      <div>
        <h3>{year}</h3> <p className="subheadinggcolor">{location}</p>
      </div>
    </div>
  );
}

export default memo(index);
