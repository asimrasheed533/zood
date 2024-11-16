import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section26({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="rotate__over__container">
      <div className="rotate__over__container__wraper">
        <div className="rotate__over__container__wraper__logo">
          <Image loading="lazy" alt="zood" src={data?.image} />
        </div>
        <div className="rotate__over__container__wraper__text">
          {selectedLanguage === "ar" ? data?.heading.ar : data?.heading.en}
        </div>
      </div>
    </div>
  );
}

export default memo(Section26);
