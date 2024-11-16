import Fade from "react-reveal/Fade";
import Image from "./Image";
import RoundedButton from "@common/RoundedButton";
import axios from "@utils/axios";
import { memo } from "react";

function ProjectCard({
  project,
  activeSlide,
  selectedLanguage,
  language,
  handleGoToProject,
  isSpecial,
}) {
  return (
    <div
      className="projects__container__swiper__slide"
      onLoad={() => {
        axios.put(`/analytics/project/${project._id}`, {
          type: "views",
        });
      }}
    >
      <div className="projects__container__swiper__slide__content">
        <Fade left spy={activeSlide}>
          <div className="projects__container__swiper__slide__content__left">
            <Image
              loading="lazy"
              alt="zood"
              src={
                selectedLanguage === "ar" ? project.logoArabic : project.logo
              }
            />
          </div>
        </Fade>
        <div className="projects__container__swiper__slide__content__right">
          <Fade left spy={activeSlide}>
            <div className="projects__container__swiper__slide__content__right__heading">
              {selectedLanguage === "ar" ? project.name.ar : project.name.en}
              <span>
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                    fill="black"
                  />
                </svg>
                {selectedLanguage === "ar" ? project.city.ar : project.city.en}
              </span>
            </div>
          </Fade>
          <Fade left spy={activeSlide}>
            <div className="projects__container__swiper__slide__content__right__info">
              {selectedLanguage === "ar"
                ? project.description.ar
                : project.description.en}
              <Fade spy={activeSlide}>
                <span>
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
                  {selectedLanguage === "en" && (
                    <span
                      style={{
                        marginRight: ".5rem",
                      }}
                    >
                      {"Plot area "}
                    </span>
                  )}
                  {project.area}
                  {selectedLanguage === "ar" && (
                    <span
                      style={{
                        marginLeft: ".5rem",
                      }}
                    >
                      {" المساحة"}
                    </span>
                  )}
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
                </span>
              </Fade>
            </div>
          </Fade>
          <div className="projects__container__swiper__slide__content__right__links">
            {project.registerLink && (
              <Fade left spy={activeSlide}>
                <RoundedButton
                  onClick={() => {
                    window.open(project.registerLink, "_blank");
                    axios.put(`/analytics/project/${project._id}`, {
                      type: "clicksOnRegister",
                    });
                  }}
                >
                  <p>
                    {isSpecial
                      ? selectedLanguage === "ar"
                        ? "بدأ البيع"
                        : "Sale has started"
                      : language.BuyNow}
                  </p>
                </RoundedButton>
              </Fade>
            )}
            {project?.structureLength !== 0 &&
              project.structureLength !== null &&
              project.structureLength !== undefined && (
                <Fade left spy={activeSlide}>
                  <RoundedButton
                    onClick={() => {
                      handleGoToProject(project.name.en);
                      axios.put(`/analytics/project/${project._id}`, {
                        type: "clicks",
                      });
                    }}
                  >
                    <p>{language.ProjetsPresentation}</p>
                  </RoundedButton>
                </Fade>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
