import React, { useState } from "react";
import css from "./index.module.css";
import { SkyLightStateless } from "react-skylight";
import { projectInfo } from "./portfolioData.js";

const PortfolioCard = ({ showPortfolio, resetShowPortfolio }) => {
  const [counter, setCounter] = useState(0);

  function handleProjectNum(num) {
    if (
      (projectInfo.length - 1 === counter && num !== -1) ||
      (counter === 0 && num === -1)
    ) {
      return;
    }
    setCounter(counter + num);
    // logic to stop slide from going beyond length and also under length
    // only show relevant arrows in accordance with logic
  }

  return (
    <SkyLightStateless
      id="portfolio"
      hideOnOverlayClicked
      isVisible={showPortfolio}
      onCloseClicked={() => {
        resetShowPortfolio();
      }}
      dialogStyles={{
        position: "fixed",
        backgroundColor: "rgba(255, 246, 213, 95)",
        height: "75%",
        width: "85%",
        left: "4%",
        top: "40%",
        marginLeft: "4%",
        borderRadius: "2vw",
        zIndex: 99,
        padding: "1%",
        boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
      }}
      transitionDuration={250}
    >
      <div className={css.cardContainer}>
        <h1 id={css.portfolioTitle}>PORTFOLIO</h1>
        {counter === 0 && (
          <div
            id={css.downArrowContainer}
            onClick={() => {
              handleProjectNum(1);
            }}
          >
            <img src="/downArrow.svg" alt="down Arrow" id={css.downArrow} />{" "}
          </div>
        )}
        {counter === projectInfo.length - 1 && (
          <div
            style={{ top: "76%" }}
            id={css.upArrowContainer}
            onClick={() => handleProjectNum(-1)}
          >
            <img src="/downArrow.svg" alt="down Arrow" id={css.upArrow} />{" "}
          </div>
        )}
        {counter > 0 && counter < projectInfo.length - 1 && (
          <>
            <div
              id={css.downArrowContainer}
              onClick={() => handleProjectNum(1)}
            >
              <img src="/downArrow.svg" alt="down Arrow" id={css.downArrow} />{" "}
            </div>
            <div id={css.upArrowContainer} onClick={() => handleProjectNum(-1)}>
              <img src="/downArrow.svg" alt="down Arrow" id={css.upArrow} />{" "}
            </div>
          </>
        )}
        <div id={css.imgAndInfoContainer}>
          <div id={css.imgContainer}>
            {projectInfo[counter].images.map((item, indx) => (
              <div className={css.projImgContainer}>
                {indx === 0 && (
                  <>
                    <div className={css.center}>{item.imgDescription}</div>
                    <img
                      src={item.imgPath}
                      className={css.projImgLeft}
                      alt={item.imgDescription}
                    />
                  </>
                )}
                {indx === 1 && (
                  <>
                    <div className={css.center}>{item.imgDescription}</div>
                    <img
                      className={css.projImgMiddle}
                      src={item.imgPath}
                      alt={item.imgDescription}
                    />
                  </>
                )}
                {indx === 2 && (
                  <>
                    <div className={css.center}>{item.imgDescription}</div>
                    <img
                      className={css.projImgRight}
                      src={item.imgPath}
                      alt={item.imgDescription}
                    />
                  </>
                )}
              </div>
            ))}
            <div style={{ width: "35vw" }}>
              <p>
                <u>Front-End: </u> {projectInfo[counter].frontEndInfo}
              </p>
              <p>
                <u>Back-End: </u> {projectInfo[counter].backEndInfo}
              </p>
              <p>
                <u>API Info: </u> {projectInfo[counter].API}
              </p>
            </div>
          </div>
          {projectInfo[counter].projectName === "JobSpeed" ? (
            <div style={{ top: "-16vh" }} id={css.infoContainer}>
              <h2 style={{ textAlign: "left", marginLeft: "3.5vw" }}>
                {projectInfo[counter].projectName}
              </h2>
              <p style={{ paddingLeft: "4%", paddingRight: "10%" }}>
                {projectInfo[counter].description}
                <p style={{ color: "rgba(255, 2, 145, 255)" }}>
                  <u>Features: </u> {projectInfo[counter].features}
                </p>
              </p>
            </div>
          ) : (
            <div id={css.infoContainer}>
              <h2 style={{ textAlign: "left", marginLeft: "3.5vw" }}>
                {projectInfo[counter].projectName}
              </h2>
              <p style={{ paddingLeft: "4%", paddingRight: "10%" }}>
                {projectInfo[counter].description}
                <p style={{ color: "rgba(255, 2, 145, 255)" }}>
                  <u>Features: </u> {projectInfo[counter].features}
                </p>
              </p>
            </div>
          )}
        </div>
      </div>
    </SkyLightStateless>
  );
};

export default PortfolioCard;
