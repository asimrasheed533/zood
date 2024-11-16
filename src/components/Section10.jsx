import EliteCard from "./EliteCard";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section10({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="elite__cards__wraper">
      <EliteCard
        styleline={true}
        image={data?.image}
        heading={selectedLanguage === "ar" ? data?.title?.ar : data?.title?.en}
        subheading={
          selectedLanguage === "ar" ? data?.subTitle?.ar : data?.subTitle?.en
        }
        detail={
          selectedLanguage === "ar"
            ? data?.description?.ar
            : data?.description?.en
        }
        buttonText={
          selectedLanguage === "ar"
            ? data?.buttonTitle?.ar
            : data?.buttonTitle?.en
        }
        buttonLink={
          selectedLanguage === "ar"
            ? data?.buttonLink?.ar
            : data?.buttonLink?.en
        }
      />
    </div>
  );
}

export default memo(Section10);
