import React from "react";
const text = props => {
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: `${props.text}` }} />
    </>
  );
};

export default text;
