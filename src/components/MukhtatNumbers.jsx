import CountUpWhenInView from "./CountUpWhenInView";
import { memo } from "react";

function MukhtatNumbers({ text, no, distance }) {
  return (
    <div className="mukhtat__second__third__point">
      <div className="mukhtat__second__third__point__text">{text}</div>
      <div className="mukhtat__second__third__point__number">
        <CountUpWhenInView start={0} end={no} duration={2} />
        {distance ? <span>({distance})</span> : null}
      </div>
    </div>
  );
}

export default memo(MukhtatNumbers);
