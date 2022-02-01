import React, { Component } from "react";
import Accordian from "./Accordian";
import Accordian1 from "./Accordian1";
import Accordian2 from "./Accordian2";
import "./AccountSetting1.css";
import { data } from "./Accordiandata";

class Usermanagement extends Component {
  render() {
    return (
      <div>
        <div className="resultaccount ">
          <p className="invoiceheading ps-3 pt-3"> User Management</p>
          {data.map((value) => {
            return <Accordian key={value.id} {...value} />;
          })}
          <div>
            <p className="pt-3">
              <img src="images/plusicon.png" />
              <span className="addaccount ps-3">Add account</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Usermanagement;
