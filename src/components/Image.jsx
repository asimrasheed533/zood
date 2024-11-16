import { memo } from "react";

function Image({ src, ...rest }) {
  return <img src={src} loading="lazy" {...rest} />;
}

export default memo(Image);
