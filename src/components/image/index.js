import React from "react";
const image = props => {
  return (
    <div
      style={{
        margin: "10px auto",
        backgroundImage: `url('${props.img}')`,
        width: "308px",
        height: "200px"
      }}
    />
  );
};

export default image;
