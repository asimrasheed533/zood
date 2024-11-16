import { memo, useLayoutEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={showButton ? "home__top__btn" : "home__top__btn__none"}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <svg
        width="32"
        height="44"
        viewBox="0 0 32 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1550_7)">
          <path
            d="M14.717 10.4575L10 15.1745L10.707 15.8815L15.325 11.2635V33.9995H16.325V11.2655L20.942 15.8825L21.649 15.1755L16.931 10.4575C16.321 9.8475 15.327 9.8475 14.717 10.4575Z"
            fill="var(--primary)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1550_7"
            x="0"
            y="0"
            width="31.6489"
            height="43.999"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1550_7"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1550_7"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default memo(ScrollToTop);
