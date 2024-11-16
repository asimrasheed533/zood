import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import El from "./El";
import ScrollContainer from "react-indiana-drag-scroll";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";
import useQuery from "@utils/useQuery";

function Cont() {
  const { data } = useQuery("/projects/all");

  const ref = useRef(null);
  const language = useGetLanguage();
  const [activeEl, setActiveEl] = useState(null);
  const [selectedLanguage] = useLanguage();

  const handleElCloseClick = (e) => {
    e.stopPropagation();
    setActiveEl(null);
  };

  const handleElClick = useCallback((index) => {
    ref.current.scrollLeft = 0;
    setActiveEl((prevActiveEl) => (prevActiveEl === index ? null : index));
  }, []);

  useEffect(() => {
    if (activeEl === null) {
      ref.current.scrollLeft =
        selectedLanguage === "ar" ? ref.current.clientWidth + 2000 : 0;
    }
  }, [selectedLanguage, activeEl]);

  const memoizedData = useMemo(() => {
    const filteredData = data
      ?.sort((a, b) => a.place - b.place)
      ?.filter((data) => data?.deletedAt === null);

    return selectedLanguage === "ar" ? filteredData?.reverse() : filteredData;
  }, [data, selectedLanguage]);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        marginTop: "100px",
      }}
    >
      <h3
        id="Projects"
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="1800"
        className="eleven__heading__prjct"
      >
        {language.ZoodProjects}
      </h3>
      <div className={`cont ${activeEl !== null ? "s--el-active" : ""}`}>
        <ScrollContainer
          innerRef={ref}
          className="cont__inner"
          horizontal={true}
          vertical={false}
        >
          {memoizedData?.map((item, index) => (
            <El
              key={index}
              item={item}
              state={item}
              index={index}
              isSpecial={item.name.en === "Elite"}
              title={selectedLanguage === "ar" ? item.name.ar : item.name.en}
              subtitle={
                selectedLanguage === "ar"
                  ? item.description.ar
                  : item.description.en
              }
              image={item.banner}
              logo={item.smallLogo}
              fullLogo={item.logo}
              link={`/projects/${item.name.en}`}
              isActive={activeEl === index}
              onClick={() => handleElClick(index)}
              onCloseClick={handleElCloseClick}
            />
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
}

export default memo(Cont);
