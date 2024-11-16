import Image from "./Image";
import { Link } from "react-router-dom";
import { memo } from "react";
import optimizeImage from "../utils/optimizeImage";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function El({
  logo,
  isActive,
  onClick,
  onCloseClick,
  title,
  subtitle,
  image,
  fullLogo,
  link,
  state,
  isSpecial,
}) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <div className={`el ${isActive ? "s--active" : ""}`} onClick={onClick}>
      <div className="el__overflow">
        <div className="el__inner">
          <div
            className="el__bg"
            style={{
              backgroundImage: `url(${optimizeImage(image)})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
          <div
            className={
              "el__preview-cont" +
              (isSpecial ? " el__preview-cont__special" : "")
            }
          >
            {isSpecial && (
              <div className="el__preview-cont__special__tag">
                {selectedLanguage === "ar" ? "بدأ البيع" : "Sale"}
              </div>
            )}
            <h2 className="el__heading"> {title}</h2>
          </div>
          <div className="el__content">
            <Image
              loading="lazy"
              alt="zood"
              src={fullLogo}
              className="el__img"
            />
            <div className="el__text">{subtitle}</div>
            <div className="el__close-btn" onClick={onCloseClick} />
            <Link
              unstable_viewTransition
              to={link}
              state={state}
              onClick={() => window.scrollTo(0, 0)}
              className="el__detail__btn"
            >
              {language.ZoodProjectsDetailsDescriptionButton}
            </Link>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">
          <Image
            loading="lazy"
            alt="zood"
            className="logocard__hover"
            src={logo}
          />
        </div>
        <div className="el__index-front">
          <div className="el__index-overlay">
            <Image
              loading="lazy"
              alt="zood"
              className="logocard__withouthover"
              src={logo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(El);
