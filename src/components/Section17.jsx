import MukhtatNumbers from "./MukhtatNumbers";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section17({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="mukhtat__second__third">
      <div className="mukhtat__second__third__points">
        {data?.points?.map((item, index) => (
          <MukhtatNumbers
            key={index}
            text={selectedLanguage === "ar" ? item?.title?.ar : item?.title?.en}
            no={item?.number}
            distance={
              selectedLanguage === "ar"
                ? item?.distance?.ar
                : item?.distance?.en
            }
          />
        ))}
      </div>
    </div>
  );
}

export default memo(Section17);
