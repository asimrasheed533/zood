import { memo } from "react";

function CustomCursor({ cursorPosition }) {
  return (
    <>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          border: "1px solid black",
          transition: "all 200ms ease-out",
          position: "fixed",
          pointerEvents: "none",
          left: "0",
          top: "0",
          zIndex: "99999999999999999999999999999999",
          transform: `translate3d(calc(${cursorPosition.x}px - 50%), calc(${cursorPosition.y}px - 50%), 0)`,
        }}
      />
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "100%",
          backgroundColor: "black",
          opacity: "0.3",
          position: "fixed",
          zIndex: "99999999999999999999999999999999",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "width 0.3s, height 0.3s, opacity 0.3s",
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
    </>
  );
}

export default memo(CustomCursor);
