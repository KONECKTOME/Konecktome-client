import React, { Component } from "react";
import tradeMarkIcon from "../Assets/trademark.png";
import "../css/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div id="footer-wrapper">
        <p>
          © 2022 KONECKTOME <img src={tradeMarkIcon} id="trademark-icon" />. All
          rights reserved.
        </p>
      </div>
    );
  }
}

export default Footer;
