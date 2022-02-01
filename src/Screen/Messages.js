import React, { Component } from "react";
import "./message.css";
import { messageData } from "./Messagedata";

class Messages extends Component {
  render() {
    return (
      <table className="messagecontainer w-100">
        {messageData.map((value) => (
          <tr className="w-100 d-flex">
            <td>
              <img src={value.image} style={{ width: "60%" }} />
            </td>
            <td>
              <tr>
                <h4 className="messagetitle " style={{ width: "40%" }}>
                  {" "}
                  {value.name}
                </h4>
              </tr>
              <tr>
                <p className="message" style={{}}>
                  {value.message}
                </p>
              </tr>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default Messages;
