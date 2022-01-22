import React, { Component } from "react";
import "../../../css/LandingPage/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="footer-first-wrapper">
          <div id="footer-second-wrapper">
            <div id="footer-third-wrapper">
              <p className="footer-text">Contact</p>
              <p className="footer-text">Developers</p>
              <p className="footer-text">Privacy Policy</p>
              <p className="footer-text">Terms of services</p>
            </div>
          </div>
          <div id="footer-second-wrapper">
            <p className="footer-text">
              © 2021 KONECKTOME. All rights reserved.
            </p>
          </div>
        </div>
        {/* <div id="footer-wrapper">
          <p>© 2021 KONECKTOME. All rights reserved.</p>
        </div> */}
      </>
    );
  }
}

export default Footer;
