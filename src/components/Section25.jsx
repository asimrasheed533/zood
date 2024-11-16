import Image from "./Image";
import { Slide } from "react-reveal";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function Section25({ data }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <div className="map__container__over">
      <div className="map__container__container">
        <Slide up>
          <div className="map__container__container__left">
            <div className="map__container__container__left__logo">
              <Image loading="lazy" alt="zood" src={data?.image} />
            </div>
            <div
              className="map__container__container__left__btn"
              onClick={() => {
                window.open(data?.location, "_blank");
              }}
            >
              <div className="map__container__container__left__btn__text">
                {language.mapbutton}
              </div>
              <div className="map__container__container__left__btn__svg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </div>
            </div>
            <div
              className="map__container__container__left__btn"
              style={{
                marginTop: 0,
              }}
              onClick={() => {
                window.open(data?.pdf, "_blank");
              }}
            >
              <div
                className="map__container__container__left__btn__text"
                style={{
                  width: 175,
                }}
              >
                {selectedLanguage === "ar" ? "تحميل" : "Download Pdf"}
              </div>
              <div className="map__container__container__left__btn__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-download-cloud"
                >
                  <polyline points="8 17 12 21 16 17" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
                </svg>
              </div>
            </div>
          </div>
        </Slide>
        <div className="map__container__container__right" />
      </div>
    </div>
  );
}

export default memo(Section25);
