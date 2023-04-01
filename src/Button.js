import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="countBtn" id={props.id} onClick={props.hendelar}>
      {props.text}
    </button>
  );
};

export default Button;
