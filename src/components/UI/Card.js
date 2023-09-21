import React from "react";
import "./Card.css";

const Card = (props) => {
  return <div className="formOuterDiv">{props.children}</div>;
};

export default Card;
