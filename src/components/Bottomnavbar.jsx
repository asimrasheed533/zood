import { memo, useCallback, useState } from "react";

import Contacticon from "./Contacticon";
import Galleryicon from "./Galleryicon";
import Homeicon from "./Homeicon";
import { Link } from "react-router-dom";
import Mapicon from "./Mapicon";
import Projecticon from "./Projecticon";
import { ScrollRestoration } from "react-router-dom";
import useGetLanguage from "@utils/useGetLanguage";

function BottomNav() {
  const [activeIndex, setActiveIndex] = useState(false);
  const language = useGetLanguage();

  const handleItemClick = useCallback((index) => {
    setActiveIndex(index);
  });

  const handleHome = (e) => {
    handleItemClick(2);
    if (location.pathname === "/") {
      e.preventDefault();
    }
  };

  return (
    <>
      <ScrollRestoration />
      <ul className="bottom-nav">
        <li>
          <Link
            unstable_viewTransition
            to="/map"
            onClick={() => handleItemClick(0)}
            className={activeIndex === 0 ? "active-icon" : ""}
          >
            <i>
              <Mapicon isActive={activeIndex === 0} />
            </i>
            <span>{language.HeaderMap}</span>
          </Link>
        </li>
        <li>
          <Link
            unstable_viewTransition
            to="/projects"
            onClick={() => handleItemClick(1)}
            className={activeIndex === 1 ? "active-icon" : ""}
          >
            <i>
              <Projecticon isActive={activeIndex === 1} />
            </i>
            <span>{language.Projects}</span>
          </Link>
        </li>
        <li>
          <Link
            unstable_viewTransition
            to="/"
            onClick={handleHome}
            className={activeIndex === 2 ? "active-icon" : ""}
          >
            <i>
              <Homeicon isActive={activeIndex === 2} />
            </i>
            <span>{language.bottomhome}</span>
          </Link>
        </li>
        <li>
          <Link
            unstable_viewTransition
            to="/news"
            onClick={() => handleItemClick(3)}
            className={activeIndex === 3 ? "active-icon" : ""}
          >
            <i>
              <Galleryicon isActive={activeIndex === 3} />
            </i>
            <span>{language.Blogs}</span>
          </Link>
        </li>
        <li>
          <Link
            unstable_viewTransition
            to="/contact"
            onClick={() => handleItemClick(4)}
            className={activeIndex === 4 ? "active-icon" : ""}
          >
            <i>
              <Contacticon isActive={activeIndex === 4} />
            </i>
            <span>{language.Contact}</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default memo(BottomNav);
