import { memo, useEffect } from "react";

import Contact from "@components/Contact";
import Image from "../../components/Image";
import SlidingImages from "@components/SlidingImages";
import { useLanguage } from "@context/LanguageContext";
import useQuery from "../../utils/useQuery";

const convertOembedToIframe = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const oembeds = doc.querySelectorAll("oembed");

  const createYouTubeIframe = (url) => {
    const videoId = url.includes("youtube.com")
      ? url.split("v=")[1]
      : url.split("youtu.be/")[1];
    const iframe = document.createElement("iframe");
    setAttributes(iframe, {
      src: `https://www.youtube.com/embed/${videoId}`,
      width: "100%",
      height: "500px",
      frameBorder: "0",
      allowFullScreen: "",
      loading: "lazy",
    });
    return iframe;
  };

  const setAttributes = (element, attributes) => {
    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  };

  oembeds.forEach((oembed) => {
    const url = oembed.getAttribute("url");
    if (url && (url.includes("youtube.com") || url.includes("youtu.be"))) {
      const iframe = createYouTubeIframe(url);
      oembed.parentNode.replaceChild(iframe, oembed);
    }
  });

  return doc.body.innerHTML;
};

const convertImagesToSlides = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  let modifiedDoc = doc.body.innerHTML;

  modifiedDoc = modifiedDoc.replaceAll(
    /<(\w+)[^>]*>-startSlider-<\/\1>/g,
    `<div class="news__slider">
        <div class="news__slider__prev">&#10094;</div>
        <div class="news__slider__next">&#10095;</div>
    `,
  );

  modifiedDoc = modifiedDoc.replaceAll(
    /<(\w+)[^>]*>-endSlider-<\/\1>/g,
    "</div>",
  );

  return modifiedDoc;
};

function Details() {
  const [language] = useLanguage();
  const blogId = window.location.pathname.split("/").pop();

  const { data: state } = useQuery(`/blogs/${blogId}`);

  useEffect(() => {
    try {
      let parentsOfSlides = document.querySelectorAll(".news__slider");

      parentsOfSlides.forEach((parent) => {
        let slideIndex = 1;
        showSlides(slideIndex);

        parent
          .querySelector(".news__slider__prev")
          .addEventListener("click", () => {
            showSlides((slideIndex -= 1));
          });

        parent
          .querySelector(".news__slider__next")
          .addEventListener("click", () => {
            showSlides((slideIndex += 1));
          });

        function showSlides(n) {
          let i;

          let slides = parent.querySelectorAll("p>img");

          if (slides.length === 0)
            slides = parent.querySelectorAll("figure>img");

          if (n > slides.length) {
            slideIndex = 1;
          }
          if (n < 1) {
            slideIndex = slides.length;
          }
          for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("show");
          }

          slides[slideIndex - 1].classList.add("show");
        }
      });
    } catch (e) {
      console.log(e);
    }
  }, [state, language]);

  return (
    <>
      <div className="blog__container__detail">
        <div className="blog__container__detail__home">
          <Image loading="lazy" alt="zood" src={state?.image} />
          <div className="blog__container__detail__home__heading">
            {language === "ar" ? state?.title.ar : state?.title.en}
          </div>
        </div>
        <div
          className="blog__container__detail__content"
          dangerouslySetInnerHTML={{
            __html: convertImagesToSlides(
              convertOembedToIframe(
                language === "ar" ? state?.content.ar : state?.content.en,
              ),
            ),
          }}
        />
      </div>
      <SlidingImages />
      <Contact />
    </>
  );
}

export default memo(Details);
