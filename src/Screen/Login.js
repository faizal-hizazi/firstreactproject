import React, { Component } from "react";
import Input from "../common_componants/Input";
import "./login.css";
import img from "../images/Signin.png";
import Logo from "../common_componants/Logo";
import Button from "../common_componants/Button";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className=" col-md-6 col-sm-12  ">
            <div
              className=" row d-flex justify-content-center "
              // style={{ height: "100%" }}
            >
              <div className="d-flex mx-1 " style={{ marginTop: "100px" }}>
                <Logo className="logo" />
              </div>
              <div className="Heading  mt-4">
                <h1>Welcome back to Fawreen!</h1>
              </div>
              <div className=" para1 mt-3">
                <p>
                  Don’t have an account?
                  <span>
                    <a href="/"> {"  "}Sign in</a>
                  </span>
                </p>
              </div>
              <div className="my-1">
                <label className="label1 my-2 ">Email</label>
                <Input
                  className="form-control  w-75"
                  type="text"
                  placeholder="Enter E-mail"
                />
                <label className="label1 mt-4">Password</label>
                <Input
                  className=" form-control my-1 w-75"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <Button classname={"mainbtn my-3 w-75"} name={"Login"} />
              </div>
            </div>
          </div>
          <div className=" col-12 col-lg-6">
            <img style={{ width: "99%" }} src={img} alt="photo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
