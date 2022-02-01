import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Signup from "../Screen/Signup";
import Login from "../Screen/Login";
import MainPage from "../Screen/MainPage";

class Routing extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
      </Switch>
    );
  }
}

export default Routing;
