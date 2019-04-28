import React, { useState } from "react";
import css from "./index.module.css";
const SocialMediaLinks = () => {
  const [twitterShadow, setTwitterShadow] = useState({});
  const [linkedInShadow, setLinkedInShadow] = useState({});
  const [gitHubShadow, setGitHubShadow] = useState({});

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
          ((posY * i) / (multi * 2) / 100) * 90}px 0px rgba(255, 2, 255, ${1 -
          i / multi}),
              ${(posX * i) / (multi * 2) -
                ((posX * i) / (multi * 2) / 100) * 90}px ${(posY * i + 2) /
          (multi * 2) -
          ((posY * i) / (multi * 2) / 100) * 90}px 0px rgba(255, 155, 0, ${1 -
          i / multi})`
      );
    }
    return shadow;
  }

  function stopShadow(socialMedia) {
    const keyframes = `@keyframes nameLeaveAnim {
          10% ${socialMedia} 
          90% {boxShadow: -8px 4px 0 rgba(255, 125, 0, 255),
            8px 4px 0 rgba(255, 2, 145, 255)}
          100% { boxShadow: -2px 2px 0 rgba(255, 125, 0, 255),
          -4px 4px 0 rgba(255, 2, 145, 255)
      }`;
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    if (socialMedia === "twitter") {
      return setTwitterShadow({});
    }
    if (socialMedia === "linkedIn") {
      return setLinkedInShadow({});
    }
    if (socialMedia === "gitHub") {
      return setGitHubShadow({});
    }
  }

  function updateShadows(x, y, socialMedia) {
    if (socialMedia === "twitter") {
      return setTwitterShadow({ boxShadow: buildShadow(x, y) });
    }
    if (socialMedia === "linkedIn") {
      return setLinkedInShadow({ boxShadow: buildShadow(x, y) });
    }
    if (socialMedia === "gitHub") {
      return setGitHubShadow({ boxShadow: buildShadow(x, y) });
    }
  }

  const getPos = (e, socialMedia) => {
    const x = e.clientX;
    const y = e.clientY;
    updateShadows(x, y, socialMedia);
  };

  //   style={textShadow}

  return (
    <div id={css.linksContainer}>
      <div
        id={css.linkedInContainer}
        style={linkedInShadow}
        onMouseMove={event => getPos(event, "linkedIn")}
        onMouseOut={() => stopShadow("linkedIn")}
      >
        <a
          id={css.linkedIn}
          target="_blank"
          href="https://www.linkedin.com/in/jaskaran-sarkaria/"
        >
          <img
            src="/LINKEDIN.svg"
            className={css.links}
            alt="linkedIn logo and link"
          />
        </a>
      </div>
      <div
        id={css.twitterContainer}
        style={twitterShadow}
        onMouseMove={event => getPos(event, "twitter")}
        onMouseOut={() => stopShadow("twitter")}
      >
        <a
          id={css.twitter}
          target="_blank"
          href="https://twitter.com/JaskaranSarkar1"
        >
          <img
            src="/TWITTER.svg"
            className={css.links}
            alt="twitter logo and link"
          />
        </a>
      </div>
      <div
        id={css.gitHubContainer}
        style={gitHubShadow}
        onMouseMove={event => getPos(event, "gitHub")}
        onMouseOut={() => stopShadow("gitHub")}
      >
        <a
          target="_blank"
          href="https://github.com/jaskaransarkaria"
          id={css.gitHub}
        >
          <img
            src="/GITHUB.svg"
            className={css.links}
            alt="gitHub logo and link"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
