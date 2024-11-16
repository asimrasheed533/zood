import { memo, useCallback, useLayoutEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Contact from "@components/Contact";
import Image from "@components/Image";
import RoundedButton2 from "@common/RoundedButton2";
import Section1 from "@components/Section1";
import Section10 from "@components/Section10";
import Section11 from "@components/Section11";
import Section12 from "@components/Section12";
import Section13 from "@components/Section13";
import Section14 from "@components/Section14";
import Section15 from "@components/Section15";
import Section16 from "@components/Section16";
import Section17 from "@components/Section17";
import Section18 from "@components/Section18";
import Section19 from "@components/Section19";
import Section2 from "@components/Section2";
import Section20 from "@components/Section20";
import Section21 from "@components/Section21";
import Section22 from "@components/Section22";
import Section23 from "@components/Section23";
import Section24 from "@components/Section24";
import Section25 from "@components/Section25";
import Section26 from "@components/Section26";
import Section27 from "@components/Section27";
import Section3 from "@components/Section3";
import Section4 from "@components/Section4";
import Section5 from "@components/Section5";
import Section6 from "@components/Section6";
import Section7 from "@components/Section7";
import Section8 from "@components/Section8";
import Section9 from "@components/Section9";
import SlidingImages from "@components/SlidingImages";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";
import useQuery from "@utils/useQuery";

const SectionComponents = {
  "Section 1": Section1,
  "Section 2": Section2,
  "Section 3": Section3,
  "Section 4": Section4,
  "Section 5": Section5,
  "Section 6": Section6,
  "Section 7": Section7,
  "Section 8": Section8,
  "Section 9": Section9,
  "Section 10": Section10,
  "Section 11": Section11,
  "Section 12": Section12,
  "Section 13": Section13,
  "Section 14": Section14,
  "Section 15": Section15,
  "Section 16": Section16,
  "Section 17": Section17,
  "Section 18": Section18,
  "Section 19": Section19,
  "Section 20": Section20,
  "Section 21": Section21,
  "Section 22": Section22,
  "Section 23": Section23,
  "Section 24": Section24,
  "Section 25": Section25,
  "Section 26": Section26,
  "Section 27": Section27,
};

function ProjectDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  const { data: allProjects } = useQuery("/projects/all");

  const projects = useMemo(
    () =>
      allProjects
        ?.sort((a, b) => a.place - b.place)
        ?.filter((data) => data?.deletedAt === null),
    [allProjects],
  );

  const pathnameDecoded = decodeURIComponent(pathname);

  const projectName = useMemo(() => {
    const match = pathnameDecoded.match(/\/projects\/([^/]+)/);
    return match ? match[1] : null;
  }, [pathnameDecoded]);

  const project = useMemo(
    () =>
      projects?.find(
        (item) => item?.name?.en.toLowerCase() === projectName.toLowerCase(),
      ),
    [projects, projectName],
  );

  const { data: projectDetails } = useQuery(`/projects/${project._id}`);

  useLayoutEffect(() => {
    try {
      const root = document.querySelector(":root");
      root.style.setProperty(
        "--project-primary",
        project?.primaryColor || "#fff",
      );
      root.style.setProperty(
        "--project-secondary",
        project?.secondaryColor || "#fff",
      );
      root.style.setProperty(
        "--project-secondary-transparent",
        `${project?.secondaryColor}a0` || "#fff",
      );
    } catch (e) {
      console.log(e);
    }
  }, [project?.primaryColor, project?.secondaryColor]);

  const currentProjectIndex = useMemo(
    () => projects?.findIndex((item) => item?._id === project?._id),
    [projects, project?._id],
  );

  const nextProject = useMemo(
    () =>
      projects?.[
        currentProjectIndex === projects?.length - 1
          ? 0
          : currentProjectIndex + 1
      ],
    [projects, currentProjectIndex],
  );

  const previousProject = useMemo(
    () =>
      projects?.[
        currentProjectIndex === 0
          ? projects.length - 1
          : currentProjectIndex - 1
      ],
    [projects, currentProjectIndex],
  );

  const goTo = useCallback((project) => {
    navigate(`/projects/${project?.name?.en}`, {
      unstable_viewTransition: true,
    });
  }, []);

  return (
    <>
      <div onClick={() => goTo(nextProject)} className="left__swipe__arrow">
        <Image
          src={
            selectedLanguage === "ar"
              ? nextProject?.logoArabic
              : nextProject?.logo
          }
          alt={
            selectedLanguage === "ar"
              ? nextProject?.name?.ar
              : nextProject?.name?.en
          }
        />
      </div>
      <div
        onClick={() => goTo(previousProject)}
        className="right__swipe__arrow"
      >
        <Image
          src={
            selectedLanguage === "ar"
              ? previousProject?.logoArabic
              : previousProject?.logo
          }
          alt={
            selectedLanguage === "ar"
              ? previousProject?.name?.ar
              : previousProject?.name?.en
          }
        />
      </div>
      {project?.registerLink && (
        <a
          href={project?.registerLink}
          className="detail__page__register"
          target="_blank"
        >
          <RoundedButton2>
            <p>
              {project.name.en === "Elite"
                ? selectedLanguage === "ar"
                  ? "بدأ البيع"
                  : "Sale has started"
                : language.Register}
            </p>
          </RoundedButton2>
        </a>
      )}
      <div className="main__header__img__container">
        <Image
          alt="zood"
          className="main__header__img__container__banner__img"
          src={project?.banner}
        />
        <div className="main__header__overlay">
          <Image
            alt="zood"
            className="main__header__overlay__logo"
            src={
              selectedLanguage === "ar" ? project?.logoArabic : project?.logo
            }
          />
        </div>
      </div>
      {projectDetails?.structure?.map((item, index) => {
        const SectionComponent = SectionComponents[item.section];

        if (SectionComponent) {
          return <SectionComponent key={index} data={item.json} />;
        }
        return null;
      })}
      <SlidingImages />
      <Contact />
    </>
  );
}

export default memo(ProjectDetails);
