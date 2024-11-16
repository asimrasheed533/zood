import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";
import { useNavigate } from "react-router-dom";

function AllprojectsShow({ index, data, active, setActive }) {
  const [selectedLanguage] = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="all__projects__bar__box">
      <Image
        src={data?.banner}
        alt="zood"
        className="map__panel__view__img__box"
      />
      <div className="map__panel__view__data">
        <div className="map__panel__view__project__name">
          {selectedLanguage === "ar" ? data?.name?.ar : data?.name?.en}
        </div>
        <div className="map__panel__view__project__location">
          {selectedLanguage === "ar" ? data?.city?.ar : data?.city?.en}
        </div>
        {index === active && (
          <>
            <div className="map__panel__view__project__description">
              {selectedLanguage === "ar"
                ? data?.description?.ar
                : data?.description?.en}
            </div>
            <div className="map__panel__view__project__area">
              {selectedLanguage === "ar" && (
                <span
                  style={{
                    marginTop: "-.5rem",
                    marginRight: ".5rem",
                  }}
                >
                  {" م² "}
                </span>
              )}
              {data?.area}
              {selectedLanguage === "en" && (
                <span
                  style={{
                    marginTop: "-.5rem",
                    marginLeft: ".5rem",
                  }}
                >
                  {" m²"}
                </span>
              )}
            </div>
            {window.innerWidth < 1000 && (
              <>
                {data?.structureLength > 0 && (
                  <div
                    onClick={() => {
                      navigate(`/projects/${data?.name?.en}`, {
                        state: state,
                        unstable_viewTransition: true,
                      });
                    }}
                    className="map__panel__view__project__btns__first"
                  >
                    {selectedLanguage === "ar"
                      ? "عرض المزيد"
                      : "Project Presentation"}
                  </div>
                )}
                {(data?.registerLink !== "" ||
                  data?.registerLink !== null ||
                  data?.registerLink !== undefined) && (
                  <div
                    className="map__panel__view__project__btns__second"
                    onClick={() => {
                      window.open(data?.registerLink, "_blank");
                    }}
                  >
                    {selectedLanguage === "ar" ? "سجل الآن" : "Register Now"}
                  </div>
                )}
              </>
            )}
          </>
        )}
        <div
          className="map__panel__view__project__btns__first"
          onClick={() => {
            if (window.innerWidth > 1000) {
              navigate(`/map/${data?.name?.en}`, {
                state: data,
                unstable_viewTransition: true,
              });
            } else {
              if (index === active) {
                setActive(-1);
              } else {
                setActive(index);
              }
            }
          }}
        >
          {index === active
            ? selectedLanguage === "ar"
              ? "عرض أقل"
              : "View less"
            : window.innerWidth > 1000
              ? selectedLanguage === "ar"
                ? "عرض المزيد"
                : "Project Presentation"
              : selectedLanguage === "ar"
                ? "عرض المزيد"
                : "View More"}
        </div>
      </div>
    </div>
  );
}

export default memo(AllprojectsShow);
