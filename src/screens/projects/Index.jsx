import {
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import ProjectCard from "@components/ProjectCard";
import ProjectSocialLinks from "@components/ProjectSocialLinks";
import sendAnalytics from "@utils/sendAnalytics";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";
import { useNavigate } from "react-router-dom";
import useQuery from "@utils/useQuery";
import useSettings from "../../utils/useSettings";

function Projects() {
  useLayoutEffect(() => sendAnalytics("projects"), []);

  const { data: projects } = useQuery("/projects/all");

  const settings = useSettings();

  const navigate = useNavigate();
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();
  const projectsContainerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleGoToProject = useCallback(
    (projectName, index) => {
      setActiveSlide(index);
      navigate(`/projects/${projectName}`, {
        state: projects.find((project) => project.name.en === projectName),
        unstable_viewTransition: true,
      });
      window.scrollTo(0, 0);
    },
    [projects, navigate]
  );

  const handlePaginationClick = useCallback((index) => {
    const projectElement = document.getElementById(projects[index]?.name?.en);
    projectElement.scrollIntoView({ behavior: "smooth" });
    setActiveSlide(index);
  }, []);

  const handleScroll = useCallback(() => {
    const container = projectsContainerRef.current;
    const scrollTop = container.scrollTop;
    const slideHeight = container.clientHeight;
    const newActiveSlide = Math.floor(scrollTop / slideHeight);
    setActiveSlide(newActiveSlide);
  }, [projectsContainerRef]);

  const memorizedData = useMemo(
    () =>
      projects
        ?.sort((a, b) => a.place - b.place)
        ?.filter((data) => data?.deletedAt === null),
    [projects]
  );

  return (
    <>
      <div className="top__header__black" />
      <ProjectSocialLinks settings={settings} />
      <div className="projects__container__pagination">
        {memorizedData?.map((_, index) => (
          <div
            key={index}
            className={`projects__container__pagination__dot ${
              activeSlide === index &&
              "projects__container__pagination__dot__active"
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
      <div
        className="projects__container"
        ref={projectsContainerRef}
        onScroll={handleScroll}
        style={{
          background:
            memorizedData?.length > 0
              ? `linear-gradient(90deg, ${
                  memorizedData[activeSlide]?.primaryColor + "a0"
                } 0%, ${
                  memorizedData[activeSlide]?.secondaryColor + "a0"
                } 100%)`
              : "",
          scrollSnapType: "y mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          scrollSnapAlign: "start",
        }}
      >
        {memorizedData?.map((project, index) => (
          <section
            id={project.name.en}
            className="projects__container__swiper"
            style={{ scrollSnapAlign: "start" }}
            key={index}
          >
            <ProjectCard
              key={index}
              project={project}
              isSpecial={project.name.en === "Elite"}
              activeSlide={true}
              selectedLanguage={selectedLanguage}
              language={language}
              handleGoToProject={() =>
                handleGoToProject(project.name.en, index)
              }
            />
          </section>
        ))}
      </div>
    </>
  );
}

export default memo(Projects);
