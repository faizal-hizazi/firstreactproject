import React, { Component } from "react";
import Signup from "../Screen/Signup";
import Logo from "./Logo";
import "./SideNavbar.css";
import { Link } from "react-router-dom";
// import grp1 from "../images/group1.png";
// import grp2 from "../images/group2.png";
// import grp3 from "../images/group3.png";
import { navdata } from "./navlink/navdata";

class SideNavBar extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
              <Logo className="logo" />
            </div>
            <ul className="sidebar-nav">
              {navdata.map((data, index) => {
                return (
                  <li key={index} className="active">
                    <Link  className="linkdeco" to={data.path}>
                      <img src={data.iconimage} className=" pe-2" alt=""></img>
                      {data.title}
                    </Link>
                  </li>
                );
              })}
              {/* <li className="active">
                <Link to="" className="linkdeco">
                  <i className="fa fa-home pe-2"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link to="" className="linkdeco">
                  <i className="fa fa-plug pe-2"></i>Messages
                </Link>
              </li>
              <li>
                <Link to="" className="linkdeco">
                  <i className="fa fa-user pe-2"></i>Account Setting
                </Link>
              </li> */}
            </ul>
          </aside>

          {/* <div id="navbar-wrapper">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a href="#" className="navbar-brand" id="sidebar-toggle">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div> */}

          {/* <section id="content-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="content-title">Test</h2>
                <p>Lorem ipsum...</p>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    );
  }
}

export default SideNavBar;
