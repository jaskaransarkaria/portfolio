import React from "react";
import Map from "../map";
import Player from "../player";
import { tiles } from "../../data/maps/1";
import store from "../../config/store";

function World(props) {
  store.dispatch({ type: "ADD_TILES", payload: { tiles } });
  // we import the tiles and then add them to store
  // .dispatch() adds to the reducer/ store
  // check the redux tools to see that this (tiles (our map))
  // has been added under the
  // "action" area
  // this is the power of .dispatch
  return (
    <div
      style={{
        position: "relative",
        width: "40vw",
        height: "70vh"
      }}
    >
      <Map tiles={tiles} />
      <Player />
    </div>
  );
}

export default World;
