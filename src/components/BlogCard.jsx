import Image from "./Image";
import { Link } from "react-router-dom";
import axios from "@utils/axios";
import { memo } from "react";
import useGetLanguage from "@utils/useGetLanguage";
import { useLanguage } from "@context/LanguageContext";

function BlogCard({ data }) {
  const language = useGetLanguage();
  const [selectedLanguage] = useLanguage();

  return (
    <div
      onLoad={() => axios.put(`/analytics/blog/${data._id}`, { type: "views" })}
      className="blog__container__content__left__content__card"
    >
      <Image
        loading="lazy"
        alt="zood"
        src={data?.image}
        className="blog__container__content__left__content__card__img"
      />
      <div className="blog__container__content__left__content__card__heading">
        {selectedLanguage === "ar" ? data?.title.ar : data?.title.en}
      </div>
      <Link
        unstable_viewTransition
        to={`/news/${data?._id}`}
        state={data}
        onClick={() => {
          axios.put(`/analytics/blog/${data._id}`, {
            type: "clicks",
          });
        }}
        className="blog__container__content__left__content__card__btn"
      >
        {language.blogsCardButton}
      </Link>
    </div>
  );
}

export default memo(BlogCard);
