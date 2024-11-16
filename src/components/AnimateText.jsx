import { Fragment, memo, useMemo } from "react";

function splitTextIntoLines(text) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    if (`${currentLine} ${words[i]}`.split(" ").length <= 10) {
      currentLine += ` ${words[i]}`;
    } else {
      lines.push(currentLine);
      currentLine = words[i];
    }
  }
  lines.push(currentLine);

  return lines;
}

function AnimateText({ children: text }) {
  if (!text) return null;

  const animationConfig = useMemo(
    () => ({
      aos: { fadeUp: true, delayFactor: 50, duration: 1000 },
    }),
    [],
  );

  const lines = useMemo(() => splitTextIntoLines(text), [text]);

  return (
    <Fragment>
      {lines.map((line, index) => {
        const animationDelay = index * animationConfig.aos.delayFactor;

        return (
          <span
            key={`${line}-${index}`}
            data-aos={animationConfig.aos.fadeUp ? "fade-up" : ""}
            data-aos-delay={animationDelay}
            data-aos-duration={animationConfig.aos.duration}
          >
            {`${line} `}
          </span>
        );
      })}
    </Fragment>
  );
}

export default memo(AnimateText);
