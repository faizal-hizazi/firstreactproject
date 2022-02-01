import React, { Component } from "react";
import "../Screen/login.css";

class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.classname} style={this.props.style}>
          <span className="mr15">{this.props.name} </span>
          <i className="fas fa-arrow-right "></i>
        </button>
      </div>
    );
  }
}

export default Button;
