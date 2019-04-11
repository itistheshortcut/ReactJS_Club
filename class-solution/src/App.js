import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";

//components
import ClassDemo from "./components/ClassDemo";
import Assignment from "./components/Assignment";
import HomeIcon from "./components/icons/HomeIcon";
import TaskIcon from "./components/icons/TaskIcon";
class App extends Component {
  render() {
    return (
      <BrowserRouter className="container-fluid">
        <nav className="navbar navbar-dark bg-dark" id="main-nav">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to={"/"}>
                <HomeIcon />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Assignment"}>
                <TaskIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={ClassDemo} />
        <Route path="/Assignment" exact component={Assignment} />
      </BrowserRouter>
    );
  }
}

export default App;
