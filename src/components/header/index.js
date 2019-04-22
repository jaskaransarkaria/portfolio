import React from "react";
import css from "./index.module.css";

const Header = () => {
  return (
    <div id={css.title}>
      <h1 className={css.myName}>JASKARAN SARKARIA</h1>
      <h2 className={css.jobTitle} style={{ margin: "1vh" }}>
        Junior Developer, Birmingham, UK
      </h2>
    </div>
  );
};

export default Header;
