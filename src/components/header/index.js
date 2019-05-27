import React, { useState } from "react";
import css from "./index.module.css";

const yellowVar = getComputedStyle(document.documentElement).getPropertyValue(
  "--yellow-theme"
);
const pinkVar = getComputedStyle(document.documentElement).getPropertyValue(
  "--pink-theme"
);

const Header = () => {
  const [textShadow, setTextShadow] = useState({
    textShadow: `-2px 2px 0 ${yellowVar},
  -4px 4px 0 ${pinkVar}`
  });

  function buildShadow(posX, posY) {
    let i, j, multi, ref, shadow;
    shadow = [];
    multi = 2.5;
    for (
      i = j = 1, ref = multi; // i = 1
      1 <= ref ? j <= ref : j >= ref; // i < array.length
      i = 1 <= ref ? ++j : --j // i++
    ) {
      shadow.push(
        `-${(posX * i) / (multi * 2) -
          ((posX * i) / (multi * 2) / 100) * 90}px ${(posY * i) / (multi * 2) -
          ((posY * i) / (multi * 2) / 100) * 90}px 0px rgba(255, 2, 145, ${1 -
          i / multi}),
          ${(posX * i) / (multi * 2) -
            ((posX * i) / (multi * 2) / 100) * 90}px ${(posY * i + 2) /
          (multi * 2) -
          ((posY * i) / (multi * 2) / 100) * 90}px 0px rgba(255, 150, 0, ${1 -
          i / multi})`
      );
    }
    return shadow;
  }

  function stopShadow() {
    const keyframes = `@keyframes nameLeaveAnim {
      10% ${textShadow} 
      90% {textShadow: -8px 4px 0 ${yellowVar},
        8px 4px 0 ${pinkVar}}
      100% { textShadow: -2px 2px 0 ${yellowVar},
      -4px 4px 0 ${pinkVar}
  }`;
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return setTextShadow({
      textShadow: `-2px 2px 0 ${yellowVar},
        -4px 4px 0 ${pinkVar}`,
      animation: `nameLeaveAnim`
      // animationTimingFunction: "linear",
      // animationDuration: "0.6s",
      // animationDelay: "0.0s",
      // animationIterationCount: 0,
      // animationDirection: "normal"
    });
  }

  function updateShadows(x, y) {
    setTextShadow({ textShadow: buildShadow(x, y) });
  }

  const getPos = e => {
    const x = e.clientX;
    const y = e.clientY;
    updateShadows(x, y);
  };

  return (
    <div id={css.title}>
      <h1
        className={css.myName}
        style={textShadow}
        onMouseMove={event => getPos(event)}
        onMouseOut={() => stopShadow()}
      >
        JASKARAN SARKARIA
      </h1>
      <h2 className={css.jobTitle} style={{ margin: "1%" }}>
        Full Stack Junior Developer, Birmingham, UK
      </h2>
    </div>
  );
};

export default Header;
