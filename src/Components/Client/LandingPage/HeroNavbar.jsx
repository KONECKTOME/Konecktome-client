import React, { Component } from "react";
import "../../../css/LandingPage/HeroNavbar.css";
import logo from "../../../Assets/USP Assets/konecktome-logo-no-text.png";
import logoWithText from "../../../Assets/USP Assets/konecktome.png";
import { Link } from "react-router-dom";

class HeroNavbar extends React.Component {
  render() {
    return (
      <div id="hero-navbar-wrapper">
        <div id="logo-img">
          <img src={logo} id="logo-img" />
        </div>
        <div id="logo-img-text">
          <img src={logoWithText} id="logo-img-text" />
        </div>

        <Link to="/login" className="links">
          <div id="hero-navbar-demo-button">
            <p id="hero-navbar-demo-button-text">Sign in</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default HeroNavbar;
