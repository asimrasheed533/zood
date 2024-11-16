import { memo } from "react";

function MapBoxEntry({ value, text, description }) {
  return (
    <div className="map__overlay__right__box">
      <div className="map__overlay__right__box__top">
        <div className="map__overlay__right__box__top__number">
          {parseInt(value).toLocaleString()}
        </div>
        <div className="map__overlay__right__box__top__text">{text}</div>
      </div>
      <div className="map__overlay__right__box__bottom">{description}</div>
    </div>
  );
}

export default memo(MapBoxEntry);
