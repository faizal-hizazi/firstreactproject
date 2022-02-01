import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input type="text" {...this.props} />
      </div>
    );
  }
}

export default Input;
