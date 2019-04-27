import React, { Component } from "react";
import "./App.css";
import SkyLight from "react-skylight";
import Header from "../header/index.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutParaArray: [
        `I'm a Full Stack Junior Developer, \uD83C\uDF93 graduated from a 4 month intensive Bootcamp
        with the School of Code. I began teaching myself to code python
        in early 2017 as a hobby; coding quickly became a passion \uD83D\uDC96`,
        `I've spent the last 6 years as a Teaching Asistant in Special Needs Schools around Brum. I studied International Relations and graduated with a 1st from the Univerisity of Birmingham \uD83C\uDF89`,
        `Other than coding, I enjoy catching up with friends \uD83D\uDD7A, travelling \uD83D\uDEEC, watching boxing \uD83E\uDD4A , all things sci-fi \uD83D\uDC7D \uD83D\uDC7E and lastly but not leastly I love chess \u265E!`
      ],
      aboutCounter: 0
    };
  }

  handleAboutText = num => {
    let totalAboutTextSlides = this.state.aboutParaArray.length;
    const counter = this.state.aboutCounter;
    if (
      (totalAboutTextSlides - 1 === counter && num !== -1) ||
      (counter === 0 && num === -1)
    ) {
      return;
    }
    this.setState({ aboutCounter: this.state.aboutCounter + num });

    // logic to stop slide from going beyond length and also under length
    // only show relevant arrows in accordance with logic
  };

  render() {
    return (
      <div id="appContainer">
        <Header id="header" />
        <div id="skillsContainer">
          <img
            id="aboutButton"
            className="shadow-drop-br scale-down-br"
            alt="portfolio"
            src="/ABOUT_BUTTON.svg"
            onClick={() => {
              this.setState({ aboutCounter: 0 });
              this.about.show();
            }}
          />
          <img
            id="portfolioButton"
            className="shadow-drop-br scale-down-br"
            alt="portfolio"
            src="/PORTFOLIO_BUTTON.svg"
            onClick={() => this.portfolio.show()}
          />
          <img
            id="skillsButton"
            className="shadow-drop-br scale-down-br"
            alt="portfolio"
            src="/SKILLS_BUTTON.svg"
            onClick={() => this.skills.show()}
          />
        </div>
        <div className="App">
          <div id="linksContainer">
            <a
              target="_blank"
              href="https://github.com/jaskaransarkaria"
              id="gitHub"
            >
              <img
                src="/GITHUB.svg"
                className="links"
                style={{ width: "6vw", height: "6vw" }}
                alt="gitHub logo and link"
              />
            </a>

            <a
              id="linkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/jaskaran-sarkaria/"
            >
              <img
                src="/LINKEDIN.svg"
                className="links"
                alt="linkedIn logo and link"
                style={{ width: "6vw", height: "6vw" }}
              />
            </a>
            <a
              id="twitter"
              target="_blank"
              href="https://twitter.com/JaskaranSarkar1"
            >
              <img
                src="/TWITTER.svg"
                className="links"
                alt="twitter logo and link"
                style={{ width: "6vw", height: "6vw" }}
              />
            </a>
          </div>
          <SkyLight
            id="portfolio"
            hideOnOverlayClicked
            ref={ref => (this.portfolio = ref)}
            dialogStyles={{
              backgroundColor: "rgba(255, 246, 213, 95)",
              height: "450px",
              width: "85vw",
              left: "4%",
              marginTop: "-220px",
              marginLeft: "4%",
              borderRadius: "2em",
              zIndex: 100,
              boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
            }}
            transitionDuration={250}
          >
            <img
              id="portfolioPopUp"
              src="/PORTFOLIO_POP_UP.svg"
              alt="PORTFOLIO pop up"
            />
          </SkyLight>

          <SkyLight
            id="skills"
            hideOnOverlayClicked
            ref={ref => (this.skills = ref)}
            title=""
            dialogStyles={{
              backgroundColor: "rgba(255, 246, 213, 95)",
              height: "450px",
              width: "85vw",
              left: "4%",
              marginTop: "-220px",
              marginLeft: "4%",
              borderRadius: "2em",
              zIndex: 100,
              boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
            }}
            transitionDuration={250}
          >
            <img
              id="skillsPopUp"
              src="/SKILLS_POP_UP.svg"
              alt="skills pop up"
            />
          </SkyLight>

          <SkyLight
            id="about"
            hideOnOverlayClicked
            ref={ref => (this.about = ref)}
            dialogStyles={{
              backgroundColor: "rgba(255, 246, 213, 95)",
              height: "75vh",
              width: "85vw",
              left: "4%",
              marginTop: "-220px",
              marginLeft: "4%",
              borderRadius: "2em",
              zIndex: 100,
              padding: "15px",
              boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
            }}
            transitionDuration={250}
          >
            <div className="cardContainer">
              <h1 id="aboutTitle">ABOUT</h1>
              <div id="imgAndTextContainer">
                <div id="aboutImgContainer">
                  <img
                    id="sunsplashMe"
                    src="/sunsplashMe.png"
                    alt="me at a festival in Spain"
                  />
                </div>
                <p id="aboutPara">
                  {this.state.aboutParaArray[this.state.aboutCounter]}
                </p>
              </div>
              {this.state.aboutCounter === 0 && (
                <div
                  id="rightArrowContainer"
                  onClick={() => this.handleAboutText(1)}
                >
                  <img
                    id="rightArrow"
                    src="/rightArrow.svg"
                    alt="right arrow"
                  />
                </div>
              )}
              {this.state.aboutCounter ===
                this.state.aboutParaArray.length - 1 && (
                <div
                  style={{ left: "86%" }}
                  id="leftArrowContainer"
                  onClick={() => this.handleAboutText(-1)}
                >
                  <img id="leftArrow" src="/rightArrow.svg" alt="left arrow" />
                </div>
              )}
              {this.state.aboutCounter > 0 &&
                this.state.aboutCounter <
                  this.state.aboutParaArray.length - 1 && (
                  <>
                    <div
                      id="rightArrowContainer"
                      onClick={() => this.handleAboutText(1)}
                    >
                      <img
                        id="rightArrow"
                        src="/rightArrow.svg"
                        alt="rightArrow"
                      />
                    </div>
                    <div
                      id="leftArrowContainer"
                      onClick={() => this.handleAboutText(-1)}
                    >
                      <img
                        id="leftArrow"
                        src="/rightArrow.svg"
                        alt="leftArrow"
                      />
                    </div>
                  </>
                )}
            </div>
          </SkyLight>
        </div>
      </div>
    );
  }
}

export default App;
