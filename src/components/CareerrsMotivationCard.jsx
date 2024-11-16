import { memo } from "react";

function CareerrsMotivationCard({ icon, title, info }) {
  return (
    <div className="careers__motivation__entry">
      <div className="careers__motivation__entry__icon">{icon}</div>
      <div className="careers__motivation__entry__heading heading">{title}</div>
      <div className="careers__motivation__entry__info">{info}</div>
    </div>
  );
}

export default memo(CareerrsMotivationCard);
