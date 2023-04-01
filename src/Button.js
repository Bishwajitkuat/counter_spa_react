import React from "react";

const Button = (props) => {
  return (
    <button id={props.id} onClick={props.hendelar}>
      {props.text}
    </button>
  );
};

export default Button;
