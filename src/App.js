import Login from "./Screen/Login";
import "./App.css";
import Signup from "./Screen/Signup";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing/Routing";
import MainPage from "./Screen/MainPage";

function App() {
  return (
    <div>
      <Router>
        <MainPage />
      </Router>
    </div>
  );
}

export default App;
