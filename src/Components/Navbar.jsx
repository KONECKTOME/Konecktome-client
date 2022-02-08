import React, { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../Assets/logo-with-text.svg";
import stayTuned from "../Assets/stay_tuned.svg";
import "../css/Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div id="main-container-nav">
        <div id="logo-container">
          <img src={logo} id="logo-with-text" />
          <img src={stayTuned} id="stay-tuned" />
        </div>
      </div>
    );
  }
}

export default Navbar;
