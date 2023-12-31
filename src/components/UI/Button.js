import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className="button"
    >
      {props.children}
    </button>
  );
}
