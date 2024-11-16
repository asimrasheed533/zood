import { memo } from "react";

function MapBoxEntryMobile({ value, text, description }) {
  return (
    <div className="map__overlay__right__box__mobile">
      <div className="map__overlay__right__box__top__mobile">
        <div className="map__overlay__right__box__top__number__mobile">
          {parseInt(value).toLocaleString()}
        </div>
        <div className="map__overlay__right__box__top__text__mobile">
          {text}
        </div>
      </div>
      <div className="map__overlay__right__box__bottom__mobile">
        {description}
      </div>
    </div>
  );
}

export default memo(MapBoxEntryMobile);
