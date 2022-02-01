import React, { Component } from "react";
import "./accordian.css";
class Accordian1 extends Component {
  render() {
    return (
      <div>
        <div onClick="">
          {" "}
          <h3 className="option">profile</h3>
          <p className="content">Name,surname,email</p>
          <div>
            <input
              className="textbox"
              type="text"
              placeholder="Enter your surname"
            />
            <input
              className="textbox"
              type="text"
              placeholder="Enter your e-mail"
            />
            <button className="boxbtn">Connect Calendar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordian1;
