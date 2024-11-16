import { memo } from "react";

function SentSVG() {
  return (
    <div className="sent__svg__container">
      <div className="animation-ctn">
        <div className="icon icon--order-success svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">
            <g fill="none" stroke="var(--primary)" strokeWidth="2">
              <circle
                cx="77"
                cy="77"
                r="72"
                style={{
                  strokeDasharray: "480px, 480px",
                  strokeDashoffset: "960px",
                }}
              />
              <circle
                id="colored"
                fill="var(--primary)"
                cx="77"
                cy="77"
                r="72"
                style={{
                  strokeDasharray: "480px, 480px",
                  strokeDashoffset: "960px",
                }}
              />
              <polyline
                className="st0"
                stroke="#fff"
                strokeWidth="10"
                points="43.5,77.8 63.7,97.9 112.2,49.4 "
                style={{
                  strokeDasharray: "100px, 100px",
                  strokeDashoffset: "200px",
                }}
              />
            </g>
          </svg>
        </div>
      </div>
      <p
        style={{
          marginTop: "1em",
          color: "var(--primary)",
          fontWeight: "bold",
          textAlign: "center",
          margin: "0",
          padding: "0",
          fontSize: "12px",
        }}
      >
        Your message has been sent successfully
      </p>
    </div>
  );
}

export default memo(SentSVG);
