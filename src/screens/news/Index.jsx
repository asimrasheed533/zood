import { Suspense, memo, useLayoutEffect } from "react";

import Blogs from "@components/Blogs";
import Contact from "@components/Contact";
import SlidingImages from "@components/SlidingImages";
import Tweets from "@components/Tweets";
import sendAnalytics from "@utils/sendAnalytics";
import useGetLanguage from "@utils/useGetLanguage";

function News() {
  useLayoutEffect(() => sendAnalytics("news"), []);

  const language = useGetLanguage();

  return (
    <>
      <div className="blog__container__box">
        <div className="blog__container__home">
          <div className="blog__container__home__heading">
            {language.BlogsHeading}
          </div>
        </div>
        <div className="blog__container__content">
          <div className="blog__container__content__left">
            <div className="blog__container__content__left__heading">
              {language.ourBlogs}
            </div>
            <div className="blog__container__content__left__content">
              <Suspense>
                <Blogs />
              </Suspense>
            </div>
          </div>
          <div className="blog__container__content__right">
            <div className="blog__container__content__right__heading">
              {language.tweets}
            </div>
            <Suspense>
              <Tweets />
            </Suspense>
          </div>
        </div>
      </div>
      <SlidingImages />
      <Contact />
    </>
  );
}

export default memo(News);
