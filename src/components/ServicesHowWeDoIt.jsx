import AnimateText from "./AnimateText";
import ServicesHowWeDoItEntry from "@components/ServicesHowWeDoItEntry";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";

function ServicesHowWeDoIt() {
  const language = useGetLanguage();

  return (
    <div className="services__how__we__do__it">
      <div className="services__how__we__do__it__heading heading">
        <AnimateText>{language.OurCapabilities}</AnimateText>
      </div>
      <div className="services__how__we__do__it__info">
        <AnimateText>{language.OurCapabilitiesDetail}</AnimateText>
      </div>
      <div className="services__how__we__do__it__content">
        <ServicesHowWeDoItEntry
          icon="1"
          list={[
            "التصاميم و المشاريع",
            "تطوير الأعمال",
            "التشغيل و المتابعة",
            "العلاقات العامة و الحكومية",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="2"
          list={[
            "الشراكات",
            "التسويق و المبيعات",
            "المالية",
            "الموارد البشرية",
          ]}
        />
        <ServicesHowWeDoItEntry
          icon="3"
          list={[
            "الشؤون الإدارية",
            "القانونية",
            "تقنية و نظم المعلومات",
            "المشتريات",
          ]}
        />
      </div>
    </div>
  );
}

export default memo(ServicesHowWeDoIt);
