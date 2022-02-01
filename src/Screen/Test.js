import React, { Component } from 'react';
import {Route,Switch,Link } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
class Test extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={} />
                    <Route  path="/Signup" component={Signup} />
                    <Route  path="/Login" component={Login} />
                    </Switch>                
            </div>
        );
    }
}

export default Test;