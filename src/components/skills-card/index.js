import React from "react";
import css from "./index.module.css";
import { SkyLightStateless } from "react-skylight";

const SkillsCard = ({ showSkills, resetShowSkills }) => {
  return (
    <SkyLightStateless
      hideOnOverlayClicked
      isVisible={showSkills}
      onCloseClicked={() => {
        resetShowSkills();
      }}
      dialogStyles={{
        position: "fixed",

        backgroundColor: "rgba(255, 246, 213, 95)",
        height: "75%",
        width: "85%",
        left: "4%",
        top: "50%",
        marginLeft: "4%",
        borderRadius: "2vw",
        zIndex: 99,
        padding: "1%",
        boxShadow: "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)"
      }}
      transitionDuration={250}
    >
      <img id={css.skillsPopUp} src="/SKILLS_POP_UP.svg" alt="skills pop up" />
    </SkyLightStateless>
  );
};

export default SkillsCard;
