import { memo, useState } from "react";

import ClickAwayListener from "react-click-away-listener";
import Image from "./Image";
import { X } from "react-feather";

function Bot({ settings }) {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setBotOpen(false)}>
      <div className="bot__custom">
        {botOpen && (
          <div className="bot__custom__popup">
            <div
              onClick={() => setBotOpen(false)}
              className="bot__custom__popup__close"
            >
              <X fill="#242424" />
            </div>
            <iframe
              loading="lazy"
              id="chat-widget"
              src="https://chatwith.tools/embed/45de28c9-88a4-4af4-93b9-707856b33ba6"
              width="100%"
              height="100%"
            />
            <div className="bot__custom__popup__hide__powered__by" />
          </div>
        )}
        <button
          onClick={() => setBotOpen(!botOpen)}
          className="bot__custom__button"
          title="chat bot"
        >
          <Image
            loading="lazy"
            alt="zood"
            src={settings?.logo}
            className="bot__custom__button__img"
          />
        </button>
      </div>
    </ClickAwayListener>
  );
}

export default memo(Bot);
