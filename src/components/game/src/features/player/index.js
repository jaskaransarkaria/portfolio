import React from "react";
import walkSprite from "./player_walk.png";
import { connect } from "react-redux"; // connects store to component
// HOC so wrap our component in it
// store is mapped onto Player as props
import handleMovement from "./movement";

function Player(props) {
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1], // access the store via the mapStateToProps
        left: props.position[0], // then position can be accessed via props
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: props.spriteLocation,
        width: "40px",
        height: "40px",
        margin: "10px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));

// connect is a wrapper doing this underneath
// a function that returns a new function
// gets the state from fn1 and transfers it onto fn2

// function getState(fn1, fn2) {
//return function (component) {
//return component
//}
//}
