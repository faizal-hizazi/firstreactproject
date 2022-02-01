import React, { Component } from "react";
import "./accordian.css";
import { data } from "./Accordiandata";

class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    console.log(this.props.title);
    return (
      <div>
        <div
        // style={{ border: "1px solid black", backgroundColor: "yellowgreen" }}
        // onClick={(e) => {
        //   return this.setState({
        //     show: !this.state.show,
        //     hide: !this.state.hide,
        //   });
        // }}
        >
          <div>
            <h3
              className="option"
              onClick={(e) => {
                return this.setState({
                  show: !this.state.show,
                });
              }}
            >
              {this.props.title}
            </h3>

            <p className="content">{this.props.subtitle}</p>
            {this.state.show && (
              <div>
                {" "}
                {this.props.input?.map((value2, index1) => (
                  <input
                    className="textbox"
                    type="text"
                    value={value2.value}
                    placeholder={value2.placeholder}
                  />
                ))}
                <button className="boxbtn">{this.props.btnTitle}</button>
              </div>
            )}
          </div>

          {/* {this.state.show && (
            <div>
              <input
                className="textbox"
                type="text"
                placeholder="Enter your name"
              />
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
          )} */}
        </div>
      </div>
    );
  }
}

export default Accordian;
