import React, { Component } from "react";
import "./App.css";
import Header from "../header/index.js";
import AboutCard from "../about-card";
import PortfolioCard from "../portfolio-card";
import SkillsCard from "../skills-card";
import SocialMediaLinks from "../social-media-links";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false,
      showPortfolio: false,
      showSkills: false
    };
  }

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
              this.setState({ showAbout: true });
            }}
          />
          <img
            id="portfolioButton"
            className="shadow-drop-br scale-down-br"
            alt="portfolio"
            src="/PORTFOLIO_BUTTON.svg"
            onClick={() => this.setState({ showPortfolio: true })}
          />
          <img
            id="skillsButton"
            className="shadow-drop-br scale-down-br"
            alt="portfolio"
            src="/SKILLS_BUTTON.svg"
            onClick={() => this.setState({ showSkills: true })}
          />
        </div>
        <div className="App">
          <SkillsCard
            showSkills={this.state.showSkills}
            resetShowSkills={() => this.setState({ showSkills: false })}
          />
          <PortfolioCard
            showPortfolio={this.state.showPortfolio}
            resetShowPortfolio={() => this.setState({ showPortfolio: false })}
          />
          <AboutCard
            showAbout={this.state.showAbout}
            resetShowAbout={() => this.setState({ showAbout: false })}
          />
          <SocialMediaLinks />
        </div>
      </div>
    );
  }
}

export default App;
