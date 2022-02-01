import React, { Component } from "react";
import Logo from "../common_componants/Logo";
import img from "../images/Signin.png";
import "./login.css";
import Input from "../common_componants/Input";
import Button from "../common_componants/Button";

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="logo2 ">
                <Logo />
              </div>
              <div className="heading2 mt-4">
                <p>Welcome to Fawreen!</p>
              </div>
              <div className="para2">
                <p>
                  Already have an account?
                  <span>
                    <a href="/">Log in</a>
                  </span>
                </p>
              </div>
              <div className="row">
                <div className="col-md-4 mr20">
                  <label className="label1">First Name</label>
                  <Input className="form-control signupInput " />
                </div>
                <div className="col-md-4 ">
                  <label className="label1">Last Name</label>{" "}
                  <Input className="form-control signupInput" />
                </div>
              </div>
              <div>
                <label className="label1 mt-2">Birth date*</label>
                <Input className="form-control w-75" />
              </div>
              <div className=" row mt-1">
                <div
                  className="col-md-4 form-control  border rounded-3 "
                  style={{
                    width: "35%",
                    marginLeft: "12px",
                    marginTop: "10px",
                  }}
                >
                  <input type="radio" value="Male" name="gender" /> Male
                </div>
                <div
                  className="col-md-4 form-control  border rounded-3"
                  style={{
                    width: "35%",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <input type="radio" value="Female" name="gender" /> Female
                </div>
              </div>

              <div>
                <label className="label1 mt-2 ">Email</label>
                <Input
                  className="form-control  w-75"
                  type="text"
                  placeholder="Enter E-mail"
                />
              </div>
              <div>
                <label className="label1 mt-2 ">Password</label>
                <Input
                  className="form-control  w-75"
                  type="text"
                  placeholder="Enter E-mail"
                />
              </div>
              <div>
                <label className="label1 mt-2 ">Confirm Password</label>
                <Input
                  className="form-control  w-75"
                  type="text"
                  placeholder="Enter E-mail"
                />
              </div>
              <div>
                <Button classname={"mainbtn my-3 w-75"} name={"Sign up"} />
              </div>
            </div>
            <div className=" col-md-6">
              <img src={img} style={{ width: "99% " }} alt="image file"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
