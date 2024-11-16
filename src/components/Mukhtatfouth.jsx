import { memo } from "react";

function Mukhtatfouth({ heaading, text }) {
  return (
    <div className="mukhtat__fouth__point">
      <div className="mukhtat__fouth__point__heading">{heaading}</div>
      <div className="mukhtat__fouth__point__text">{text}</div>
    </div>
  );
}

export default memo(Mukhtatfouth);
