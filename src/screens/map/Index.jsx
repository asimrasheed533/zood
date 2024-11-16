import { Swiper, SwiperSlide } from "swiper/react";
import { memo, useMemo, useState } from "react";

import AllprojectsShow from "@components/AllprojectsShow";
import { Autoplay } from "swiper";
import MapBoxEntry from "@components/MapBoxEntry";
import MapBoxEntryMobile from "@components/MapBoxEntryMobile";
import { X } from "react-feather";
import { useLanguage } from "@context/LanguageContext";
import { useNavigate } from "react-router-dom";
import useQuery from "@utils/useQuery";
import useSettings from "../../utils/useSettings";

function Index() {
  const navigate = useNavigate();
  const settings = useSettings();
  const { data: projects } = useQuery("/projects/all");
  const [selectedLanguage] = useLanguage();

  const [leftBoxOpen, setLeftBoxOpen] = useState(false);

  const [activeProject, setActiveProject] = useState(
    window.innerWidth > 1000 ? -1 : 0,
  );

  const handleProjects = () => setLeftBoxOpen(!leftBoxOpen);

  const memorizedProjects = useMemo(
    () =>
      projects
        ?.sort((a, b) => a.place - b.place)
        ?.filter((data) => data?.deletedAt === null),
    [projects],
  );

  return (
    <>
      <div className="map__overlay__right">
        <MapBoxEntry
          value={settings?.commercialUnits}
          text={selectedLanguage === "ar" ? "وحدات تجارية" : "Commercial Units"}
          description={
            selectedLanguage === "ar"
              ? "مساحة تجارية متنوعة لتلبية جميع الاحتياجات"
              : "Diverse commercial space to meet all needs"
          }
        />
        <MapBoxEntry
          value={settings?.developedSpaces}
          text={selectedLanguage === "ar" ? "مساحات مطورة" : "Developed Spaces"}
          description={
            selectedLanguage === "ar"
              ? "مساحة تجارية متنوعة لتلبية جميع الاحتياجات"
              : "Diverse commercial space to meet all needs"
          }
        />
        <MapBoxEntry
          value={settings?.housingUnits}
          text={selectedLanguage === "ar" ? "وحدات سكنية" : "Housing Units"}
          description={
            selectedLanguage === "ar"
              ? "مساحة تجارية متنوعة لتلبية جميع الاحتياجات"
              : "Diverse commercial space to meet all needs"
          }
        />
      </div>
      <div className="map__overlay__right__mobile">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 1300,
            pauseOnMouseEnter: true,
            reverseDirection: selectedLanguage === "ar",
          }}
        >
          <SwiperSlide>
            <MapBoxEntryMobile
              value={settings?.commercialUnits}
              text={
                selectedLanguage === "ar" ? "وحدات تجارية" : "Commercial Units"
              }
              description={
                selectedLanguage === "ar"
                  ? "مساحة تجارية متنوعة لتلبية جميع الاحتياجات"
                  : "Diverse commercial space to meet all needs"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <MapBoxEntryMobile
              value={settings?.developedSpaces}
              text={
                selectedLanguage === "ar" ? "مساحات مطورة" : "Developed Spaces"
              }
              description={
                selectedLanguage === "ar"
                  ? "مساحة تجارية متنوعة لتلبية جميع الاحتياجات"
                  : "Diverse commercial space to meet all needs"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <MapBoxEntryMobile
              value={settings?.housingUnits}
              text={selectedLanguage === "ar" ? "وحدات سكنية" : "Housing Units"}
              description={
                selectedLanguage === "ar"
                  ? "مساحة تجارية متنوعة لتلبية جميع الاحتياجات"
                  : "Diverse commercial space to meet all needs"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {leftBoxOpen ? (
        <div className="all__projects__bar">
          <div className="all__project__btn__close" onClick={handleProjects}>
            <X />
          </div>
          {memorizedProjects?.map((item, index) => (
            <AllprojectsShow
              data={item}
              index={index}
              key={index}
              active={activeProject}
              setActive={setActiveProject}
            />
          ))}
        </div>
      ) : (
        <>
          <div
            className="view__all__projects__btn"
            role="button"
            onClick={handleProjects}
          >
            {selectedLanguage === "ar" ? "جميع المشاريع" : "All projects"}
          </div>
        </>
      )}
      <div className="all__projects__mobile">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          loop={true}
          centeredSlides={true}
        >
          {memorizedProjects?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="all__projects__mobile__entry">
                <img
                  src={item?.banner}
                  alt={
                    selectedLanguage === "ar" ? item?.name?.ar : item?.name?.en
                  }
                  className="all__projects__mobile__entry__img"
                />
                <div className="all__projects__mobile__entry__name">
                  {selectedLanguage === "ar" ? item?.name?.ar : item?.name?.en}
                  {item?.structureLength > 0 && (
                    <div
                      onClick={() => {
                        navigate(`/projects/${item?.name?.en}`, {
                          state: item,
                          unstable_viewTransition: true,
                        });
                      }}
                    >
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
                        className="feather feather-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="all__projects__mobile__entry__row">
                  <div className="map__panel__view__project__location">
                    {selectedLanguage === "ar"
                      ? item?.city?.ar
                      : item?.city?.en}
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
                    {item?.area}
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
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default memo(Index);
