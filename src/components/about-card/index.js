import React, { useState } from "react";
import css from "./index.module.css";
import { SkyLightStateless } from "react-skylight";

const AboutCard = ({ showAbout, resetShowAbout }) => {
  console.log(resetShowAbout);
  const [aboutInfo, setAboutInfo] = useState([
    `I have just \uD83C\uDF93 graduated from a 4 month intensive Bootcamp
    with the School of Code. It was amazing! I began teaching myself to code python
    in early 2017 as a hobby; coding quickly became a passion \uD83D\uDC96`,
    `I've spent the last 6 years as a Teaching Assistant in Special Needs Schools around Brum. I studied International Relations and graduated with a 1st from the Univerisity of Birmingham \uD83C\uDF89`,
    `Other than coding, I enjoy catching up with friends \uD83D\uDD7A, travelling \uD83D\uDEEC, watching boxing \uD83E\uDD4A , all things sci-fi \uD83D\uDC7D \uD83D\uDC7E and lastly but not leastly I love chess \u265E!`
  ]);
  const [counter, setCounter] = useState(0);

  const handleAboutText = num => {
    if (
      (aboutInfo.length - 1 === counter && num !== -1) ||
      (counter === 0 && num === -1)
    ) {
      return;
    }
    setCounter(counter + num);
    // logic to stop slide from going beyond length and also under length
    // only show relevant arrows in accordance with logic
  };

  return (
    <SkyLightStateless
      hideOnOverlayClicked
      isVisible={showAbout}
      onCloseClicked={() => {
        setCounter(0);
        resetShowAbout();
      }}
      dialogStyles={{
        position: "fixed",

        backgroundColor: "rgba(255, 246, 213, 95)",
        height: "75vh",
        width: "85vw",
        left: "4vw",
        top: "50vh",
        marginLeft: "4vw",
        borderRadius: "2vw",
        zIndex: 99,
        padding: "1%",
        boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
      }}
      transitionDuration={250}
    >
      <div className={css.cardContainer}>
        <h1 id={css.aboutTitle}>ABOUT</h1>
        <div id={css.imgAndTextContainer}>
          <div id={css.aboutImgContainer}>
            <img
              id={css.sunsplashMe}
              src="/sunsplashMe.png"
              alt="me at a festival in Spain"
            />
          </div>
          <p id={css.aboutPara}>{aboutInfo[counter]}</p>
        </div>
        {counter === 0 && (
          <>
            <div
              id={css.rightArrowContainer}
              onClick={() => handleAboutText(1)}
            >
              <img
                id={css.rightArrow}
                src="/rightArrow.svg"
                alt="right arrow"
              />
            </div>
            <p id={css.blogTag}>
              Read my bootcamp blog:
              <div id={css.mediumIconContainer} className={css.jelloVertical}>
                <a target="_blank" href="https://medium.com/me/stories/public">
                  <img
                    src="/mediumIcon.png"
                    alt="visit my blog"
                    id={css.mediumIcon}
                  />
                </a>
              </div>
            </p>
          </>
        )}
        {counter === aboutInfo.length - 1 && (
          <div
            style={{ left: "88%" }}
            id={css.leftArrowContainer}
            onClick={() => handleAboutText(-1)}
          >
            <img id={css.leftArrow} src="/rightArrow.svg" alt="left arrow" />
          </div>
        )}
        {counter > 0 && counter < aboutInfo.length - 1 && (
          <>
            <div
              id={css.rightArrowContainer}
              onClick={() => handleAboutText(1)}
            >
              <img id={css.rightArrow} src="/rightArrow.svg" alt="rightArrow" />
            </div>
            <div
              id={css.leftArrowContainer}
              onClick={() => handleAboutText(-1)}
            >
              <img id={css.leftArrow} src="/rightArrow.svg" alt="leftArrow" />
            </div>
          </>
        )}
      </div>
    </SkyLightStateless>
  );
};

export default AboutCard;
