import { memo, useState } from "react";

import Image from "./Image";
import { Link } from "react-router-dom";
import useGetLanguage from "@utils/useGetLanguage";
import { useLocation } from "react-router-dom";

function HeaderTop({ settings }) {
  const [active, setActive] = useState("");
  const language = useGetLanguage();
  const { pathname } = useLocation();

  const pathsInvertedFor = ["/map", "/contact"];

  return (
    <div className="headertop__container">
      <div
        className={
          "headertop__container__content" +
          (pathsInvertedFor.some((path) => pathname.includes(path))
            ? " headertop__container__content__inverted"
            : "")
        }
      >
        <div className="headertop__container__content__side">
          <Link
            unstable_viewTransition
            to="/map"
            className={
              active === "map"
                ? "headertop__container__content__left__active"
                : "headertop__container__content__left"
            }
            onClick={() => setActive("map")}
          >
            {language.HeaderMap}
          </Link>
          <Link
            unstable_viewTransition
            to="/projects"
            className={
              active === "projects"
                ? "headertop__container__content__left__active"
                : "headertop__container__content__left"
            }
            onClick={() => setActive("projects")}
          >
            {language.Projects}
          </Link>
        </div>
        <Link
          unstable_viewTransition
          to="/"
          className="headertop__container__content__center"
          onClick={() => setActive("")}
        >
          <Image loading="lazy" alt="zood" src={settings?.logo} />
        </Link>
        <div className="headertop__container__content__side">
          <Link
            unstable_viewTransition
            to="/news"
            className={
              active === "news"
                ? "headertop__container__content__left__active"
                : "headertop__container__content__left"
            }
            onClick={() => setActive("news")}
          >
            {language.Blogs}
          </Link>
          <Link
            unstable_viewTransition
            to="/contact"
            className={
              active === "contact"
                ? "headertop__container__content__left__active"
                : "headertop__container__content__left"
            }
            onClick={() => setActive("contact")}
          >
            {language.Contact}
          </Link>
        </div>
      </div>
      <div
        className={
          "headbottom__bottom__bar" +
          (pathsInvertedFor.includes(pathname)
            ? " headbottom__bottom__bar__inverted"
            : "")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="1"
          viewBox="0 0 1440 1"
          fill="none"
        >
          <path
            d="M0 0.287109H720H1440"
            stroke="url(#paint0_linear_157_141)"
            strokeWidth="0.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_157_141"
              x1="1440"
              y1="0.287109"
              x2="140.187"
              y2="0.287109"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.190464" stopColor="white" />
              <stop offset="0.808914" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.108871" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default memo(HeaderTop);
