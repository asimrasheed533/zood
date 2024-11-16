import { memo } from "react";

function TransitionText({ logo, heading, subheading }) {
  return (
    <div className="transition__text__wraper">
      <div className="transition__text__wraper__col">
        <div className="transition__text__wraper__col__svg">{logo}</div>
      </div>
      <div className="transition__text__wraper__col">
        <div className="transition__text__wraper__col__heading">{heading}</div>
        <div className="transition__text__wraper__col__subheading">
          {subheading}
        </div>
      </div>
    </div>
  );
}

export default memo(TransitionText);
