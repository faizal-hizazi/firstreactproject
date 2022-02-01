import React, { Component } from "react";
import { Link } from "react-router-dom";
import magnifier from "../images/Magnifier.png";
import notibadge from "../images/Notif Badge.png";
import square from "../images/Union.png";
import face from "../images/Face.png";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <div></div>
        <nav className="navbar navbar1 navbar-expand navbar-light ">
          <div className="container-fluid ">
            <p className="optiontop pt-3 ">Account Setting</p>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse " id="navbarNav"> */}
            <ul className="navbar-nav float-end">
              <li className="nav-item nav-item1 pe-2">
                <Link className="nav-link active" aria-current="page">
                  <img className="navlinkimg" src={magnifier}></img>
                </Link>
              </li>
              <li className="nav-item nav-item1  pe-2">
                <Link className="nav-link  active" aria-current="page">
                  <img className="navlinkimg" src={square}></img>
                </Link>
              </li>

              <li className="nav-item nav-item1  pe-2">
                {" "}
                <Link className="nav-link active" aria-current="page">
                  <span className="badge rounded-pill bg-dark ">
                    <i className="fas fa-bell ">
                      <span className="ps-2">IG</span>
                    </i>
                  </span>
                </Link>
              </li>
              <li className="nav-item nav-item1  pe-2">
                {" "}
                <Link className="nav-link active" aria-current="page">
                  <img className="navlinkimg" src={face}></img>
                </Link>
              </li>
              <li className="nav-item nav-item1  pe-2 ">
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pixelz Warrios
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabindex="-2"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li> */}
            </ul>
          </div>
          {/* </div> */}
        </nav>
      </div>
    );
  }
}

export default Navbar;
