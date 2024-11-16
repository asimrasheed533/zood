import CountUpWhenInView from "./CountUpWhenInView";
import Mukhtatfouth from "./Mukhtatfouth";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section18({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="mukhtat__fouth">
      <div className="mukhtat__fouth__layer">
        {selectedLanguage === "ar" ? (
          <div className="mukhtat__fouth__subheading">
            <span> {data?.symbol?.ar}</span>{" "}
            <CountUpWhenInView start={0} end={data?.number} duration={5} />
          </div>
        ) : (
          <div className="mukhtat__fouth__subheading">
            <CountUpWhenInView start={0} end={data?.number} duration={5} />
            {data?.symbol?.en}
          </div>
        )}
        <div className="mukhtat__fouth__heading">
          {selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
        </div>
        <div className="mukhtat__fouth__points">
          {data?.points?.map((point, index) => (
            <Mukhtatfouth
              key={index}
              heaading={
                selectedLanguage === "ar" ? point.heading.ar : point.heading.en
              }
              text={
                selectedLanguage === "ar"
                  ? point?.content.ar
                  : point?.content.en
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Section18);
