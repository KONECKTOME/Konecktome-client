import React, { Component } from "react";
import "../../../css/LandingPage/HeroNavbar.css";
import logo from "../../../Assets/koneck-logo.svg";

class HeroNavbar extends React.Component {
  render() {
    return (
      <div id="hero-navbar-wrapper">
        <div>
          <img src={logo} id="logo-img" />
        </div>
        <div id="hero-navbar-demo-button">
          <p id="hero-navbar-demo-button-text">Take a demo</p>
        </div>
      </div>
    );
  }
}

export default HeroNavbar;
