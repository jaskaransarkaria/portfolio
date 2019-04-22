import React, { Component } from "react";
import "./App.css";
import World from "../game/src/features/world";
import { TwitterFollowButton } from "react-twitter-embed";
import SkyLight from "react-skylight";
import CardContainer from "../card-container";
import Paper from "@material-ui/core/Paper";
import Header from "../header/index.js";

class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Header />
        <div id="skillsContainer">
          <img
            id="aboutButton"
            alt="portfolio"
            src="/ABOUT_BUTTON.svg"
            onClick={() => this.about.show()}
          />
          <img
            id="portfolioButton"
            alt="portfolio"
            src="/PORTFOLIO_BUTTON.svg"
            onClick={() => this.portfolio.show()}
          />
          <img
            id="skillsButton"
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
              height: "475px",
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
            <img id="aboutPopUp" src="/ABOUT_POP_UP.svg" alt="about pop up" />
          </SkyLight>
        </div>
      </div>
    );
  }
}

export default App;
