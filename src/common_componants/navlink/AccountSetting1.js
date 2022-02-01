import React, { Component } from "react";
import MainPage from "../../Screen/MainPage";
import "./AccountSetting1.css";
import { Link } from "react-router-dom";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Invoice from "./Invoice";
import Usermanagement from "./Usermanagement";
import Accordian from "./Accordian";

class AccountSetting1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: true,
    };
  }
  render() {
    const percentage = 85;
    console.log(this.state.isClicked);
    return (
      <div>
        <div className="progressbarwrap ">
          <div className="progressbar">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                // Customize the root svg element
                root: {},
                // Customize the path, i.e. the "completed progress"
                path: {
                  // Path color
                  stroke: `rgba(255, 255, 255, ${percentage / 100})`,
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Customize transition animation
                  transition: "stroke-dashoffset 0.5s ease 0s",
                  // Rotate the path

                  transformOrigin: "center bottom",
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                  // Trail color
                  stroke: "rgba(255, 255, 255, 0);",
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Rotate the trail
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                // Customize the text
                text: {
                  // Text color
                  fill: "#FFFFFF",
                  // Text size
                  fontSize: "24px",
                },
                // Customize background - only used when the `background` prop is true
                background: {
                  fill: "rgba(255, 255, 255, 0.1)",
                },
              }}
            />
          </div>
          <div className="progressbarcontent">
            <h3>Profile informations</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <button>Complete your profile</button>
          </div>
        </div>
        <div className="accountsettingoption">
          <div
            className="invoice pt-4"
            onClick={() => {
              this.setState({ isClicked: false });
              console.log(this.state.isClicked);
            }}
          >
            <img src="images/vector1.png" style={{ paddingLeft: "20px" }} />
            <Link className="linkcss ps-4">Invoice</Link>
            <img src="images/vector3.png" style={{ paddingLeft: "270px" }} />
          </div>
          <div
            className="invoice pt-4 mt-2"
            onClick={() => {
              console.log(this.state.isClicked);
              this.setState({ isClicked: true });
            }}
          >
            <img src="images/vector2.png" style={{ paddingLeft: "20px" }} />
            <Link className="linkcss ps-4 ">User Management</Link>
            <img src="images/vector3.png " style={{ paddingLeft: "170px" }} />
          </div>
        </div>
        {this.state.isClicked === true ? <Usermanagement /> : <Invoice />}
      </div>
    );
  }
}

export default AccountSetting1;
