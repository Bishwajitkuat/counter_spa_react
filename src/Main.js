import React, { Component } from "react";
import "./Main.css";
import Button from "./Button";

class Main extends Component {
  state = { number: 0 };
  btnClick = (e) => {
    const nextOperation = Number(e.target.id);
    if (nextOperation === 0) this.setState({ number: 0 });
    else {
      if (this.state.number + nextOperation < 0) {
        alert("Counter can not be lower than 0");
      } else this.setState({ number: this.state.number + nextOperation });
    }
  };
  render() {
    return (
      <div className="mainDiv">
        <div className="countDiv">
          <p className="countP">{this.state.number}</p>
        </div>
        <div className="buttonDiv">
          <Button id="5" text="Add 5" hendelar={(e) => this.btnClick(e)} />
          <Button id="1" text="Add 1" hendelar={(e) => this.btnClick(e)} />
          <Button id="0" text="Reset" hendelar={(e) => this.btnClick(e)} />
          <Button id="-1" text="Remove 1" hendelar={(e) => this.btnClick(e)} />
          <Button id="-5" text="Remove 5" hendelar={(e) => this.btnClick(e)} />
        </div>
      </div>
    );
  }
}

export default Main;
