import React from "react";
// import Heart from "../heart";
import Text from "../text";
import Title from "../title";
// import ProfilePic from "../profilepic";
import Paper from "@material-ui/core/Paper";
import Image from "../image";
import "./index.css";

const Card = props => {
  // <ProfilePic profilepic={props.profilepic} className="ProfilePic" />
  console.log("card", props);
  return (
    <Paper className="card">
      <Image img={props.item.image_url} ind={props.item.id} className="Image" />
      <Title title={props.item.title} className="Title" />
      <br />
      <br />
      <Text
        className="Text"
        text={props.item.frontEndDesc || props.item.backEndDesc}
      />
      <br />
      {/* <Heart
        cardId={props.item.id}
        is_liked={props.item.is_liked}
        heartClick={props.heartClick}
        style={{ margin: "10px", padding: "10px" }}
      /> */}
    </Paper>
  );
};

export default Card;
