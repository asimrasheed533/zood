import CountUpWhenInView from "./CountUpWhenInView";
import { memo } from "react";

function AccompaningCard({ number, svg, text }) {
  return (
    <div className="acco__card__wraper">
      <div className="acco__card__wraper__num">
        <CountUpWhenInView start={0} end={number} duration={8} />
      </div>
      <div className="acco__card__wraper__svg">{svg}</div>
      <div className="acco__card__wraper__text">{text}</div>
    </div>
  );
}

export default memo(AccompaningCard);
