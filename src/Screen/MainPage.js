import React, { Component } from "react";
import SideNavBar from "../common_componants/SideNavBar";
import "../common_componants/SideNavbar.css";
import { Route, Switch, Link, Router } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Routing from "../routing/Routing";
import Navbar from "../common_componants/Navbar";
import "./acountSetting.css";
import AccountSetting1 from "../common_componants/navlink/AccountSetting1";
import Dashboard from "../common_componants/navlink/Dashboard";
import Messages from "./Messages";
import Chat from "./Chat";

class MainPage extends Component {

  render() {
    return (
      <div className=" ">
        <div className="sidenav1 ">
          <SideNavBar />
        </div>
        <div className=" navbar1 ">
          <Navbar />
        </div>
       
          <div className="maincontent ">
          <Switch>
            <Route exact path="/"><Dashboard /> </Route>
            <Route exact  path="/message"><Chat /> </Route>
            <Route exact  path="/accountsetting"><AccountSetting1 /> </Route>

            </Switch>

          </div>
       
      </div>
    );
  }
}

export default MainPage;
