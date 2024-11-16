import { useLocation, useNavigate } from "react-router-dom";

import Image from "../../components/Image";
import { X } from "react-feather";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Panel() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedLanguage] = useLanguage();

  return (
    <div className="map__panel__view">
      <div className="map__panel__view__button" onClick={() => navigate(-1)}>
        <X />
      </div>
      <Image
        src={state?.banner}
        loading="lazy"
        className="map__panel__view__img"
      />
      <div className="map__panel__view__data">
        <div className="map__panel__view__project__name">
          {selectedLanguage === "ar" ? state.name?.ar : state.name.en}
        </div>
        <div className="map__panel__view__project__location">
          {selectedLanguage === "ar" ? state.city?.ar : state.city?.en}
        </div>
        <div className="map__panel__view__project__description">
          {selectedLanguage === "ar"
            ? state.description?.ar
            : state.description?.en}
        </div>
        {selectedLanguage === "ar" ? (
          <div className="map__panel__view__project__area">
            <div>
              {"م²"} {parseInt(state.area).toLocaleString()}
            </div>
            <span>: المساحة</span>
          </div>
        ) : (
          <div className="map__panel__view__project__area">
            <span>Area: </span>
            {parseInt(state.area).toLocaleString()} m²
          </div>
        )}
        {state?.structureLength > 0 && (
          <div
            onClick={() => {
              navigate(`/projects/${state?.name?.en}`, {
                state,
                unstable_viewTransition: true,
              });
            }}
            className="map__panel__view__project__btns__first"
          >
            {selectedLanguage === "ar" ? "عرض المزيد" : "Project Presentation"}
          </div>
        )}
        {(state.registerLink !== "" ||
          state.registerLink !== null ||
          state.registerLink !== undefined) && (
          <div
            className="map__panel__view__project__btns__second"
            onClick={() => {
              window.open(state.registerLink, "_blank");
            }}
          >
            {selectedLanguage === "ar" ? "سجل الآن" : "Register Now"}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Panel);
