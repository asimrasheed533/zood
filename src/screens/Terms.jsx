import Contact from "@components/Contact";
import SlidingImages from "@components/SlidingImages";
import { memo } from "react";
import { useLanguage } from "../context/LanguageContext";
import useQuery from "../utils/useQuery";

function Terms() {
  const [selectedLanguage] = useLanguage();

  const { data } = useQuery("/terms");

  return (
    <>
      <div className="blog__container__box">
        <div className="blog__container__home">
          <div className="blog__container__home__heading">
            {selectedLanguage === "ar"
              ? "الشروط والأحكام"
              : "Terms & Conditions"}
          </div>
        </div>
        <div
          className="blog__container__detail__content"
          style={{ marginBottom: "50px" }}
          dangerouslySetInnerHTML={{
            __html: selectedLanguage === "ar" ? data?.ar : data?.en,
          }}
        />
      </div>
      <SlidingImages />
      <Contact />
    </>
  );
}

export default memo(Terms);
