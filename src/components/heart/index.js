import React from "react";
import "./index.css";

const heart = props => {
  const color = props.is_liked
    ? { backgroundColor: "red" }
    : { backgroundColor: "bisque" };
  console.log("in heart", props);
  console.log(color);
  // props check is_liked if like choose filled if not choose unfilled
  const handleHeartClick = () => props.heartClick(props.cardId);
  return <div className="heart" onClick={handleHeartClick} style={color} />;
};

export default heart;
