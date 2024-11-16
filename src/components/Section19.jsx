import Image from "./Image";
import { memo } from "react";

function Section19({ data }) {
  return (
    <Image loading="lazy" alt="zood" src={data.image} className="hateen__map" />
  );
}

export default memo(Section19);
