import ProvideServiceCard from "./ProvideServiceCard";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function ProvideServices({ services }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <div className="service__provider__section" id="Services">
      <div className="service__provider__section__back__gif">
        <div className="service__provider__section__back" />
      </div>
      <div className="service__provider__container">
        <div className="service__provider__container__content">
          <div className="service__provider__section__heading">
            {language.ProvidedServices}
          </div>
          <div
            className="service__provider__section__cards"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1500"
          >
            {services?.map((service, index) => (
              <ProvideServiceCard
                key={index}
                img={service?.image}
                heading={
                  selectedLanguage === "ar"
                    ? service?.heading?.ar
                    : service?.heading?.en
                }
                text={
                  selectedLanguage === "ar"
                    ? service?.content.ar
                    : service?.content.en
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProvideServices);
