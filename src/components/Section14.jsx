import Image from "./Image";
import { memo } from "react";
import { useLanguage } from "@context/LanguageContext";

function Section14({ data }) {
  const [selectedLanguage] = useLanguage();

  return (
    <div className="elite__services__main__overlay">
      <div className="elite__services__main__container">
        <div className="elite__services__contant">
          <div
            className="elite__services__contant__heading"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {selectedLanguage === "ar" ? data?.heading?.ar : data?.heading?.en}
          </div>
          <div className="elite__services__contant__row">
            {data?.cards?.map((item, index) => (
              <div className="elite__services__contant__col__card" key={index}>
                <div className="elite__services__contant__col__card__svg">
                  <Image
                    src={item?.image}
                    alt={
                      selectedLanguage === "ar"
                        ? item?.title?.ar
                        : item?.title?.en
                    }
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "contain",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="elite__services__contant__col__card__text">
                  {selectedLanguage === "ar"
                    ? item?.title?.ar
                    : item?.title?.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Section14);
