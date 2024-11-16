import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Home({ settings }) {
  const [language, setLanguage] = useLanguage();

  return (
    <div>
      <div className="Header__all">
        <div className="header__heading mobile__logo">
          <Image
            alt="zood"
            loading="lazy"
            src={settings?.logo}
            onClick={() => (window.location.href = "/")}
            className="headertop__container__content__inverted"
          />
        </div>
        <div
          className={
            language === "ar"
              ? "language__picker language__picker__active"
              : "language__picker"
          }
        >
          <div
            className="language__picker__item"
            onClick={() => setLanguage("en")}
          >
            En
          </div>
          <div
            className="language__picker__item"
            style={{
              fontFamily: "Plus Jakarta Sans",
            }}
            onClick={() => setLanguage("ar")}
          >
            <span
              style={{
                top: -5,
                left: -5,
                fontSize: 16,
                position: "relative",
              }}
            >
              ع
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Home);
