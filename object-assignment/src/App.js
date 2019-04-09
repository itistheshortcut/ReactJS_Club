import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";

//components
import ObjectDemo from "./components/ObjectDemo";
import Objects from "./components/Objects";
import Assignment from "./components/Assignment";

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container">
        <nav className="navbar navbar-dark bg-dark" id="main-nav">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to={"/"}>React Object Intro</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Objects"}>Objects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Assignment"}>Assignment</NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={ObjectDemo} />
        <Route path="/Objects" exact component={Objects} />
        <Route path="/Assignment" exact component={Assignment} />
      </BrowserRouter>
    );
  }
}

export default App;
