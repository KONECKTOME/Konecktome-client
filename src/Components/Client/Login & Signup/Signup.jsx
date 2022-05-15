import React, { Component } from "react";
import Footer from "../LandingPage/Footer";
import signUpImage from "../../../Assets/signup-left-image.png";
import "../../../css/Signup & login/SignUp.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  render() {
    return (
      <div id="sign-up-main">
        <Row>
          <Col md={6}>
            <div>
              <img src={signUpImage} />
            </div>
          </Col>
          <Col md={6}>
            <div id="sign-up-right-col">
              <p className="desktop-header sign-up-header">Create Account</p>
              <form>
                <Row>
                  <Col>
                    <div className="input-holder">
                      <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="input-holder">
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="input-holder">
                  <input id="email" type="email" placeholder="Email Address" />
                </div>
                <div className="input-holder">
                  <input id="password" type="password" placeholder="Password" />
                </div>
              </form>
              <div className="desktop-text sign-up-footer">
                <span>
                  By signing up, you agree to our
                  <span>
                    <Link className="links sign-up-span-link">
                      Terms & Conditions
                    </Link>
                  </span>
                  and
                  <span>
                    <Link className="links sign-up-span-link">
                      privacy policy
                    </Link>
                  </span>
                </span>
              </div>
              <div id="sign-up-btn">
                <div className="desktop-medium-button">
                  <p className="desktop-big-button-text">Sign up</p>
                </div>
              </div>
              <div id="sign-up-btn">
                <span className="desktop-text">
                  Already have an account?{" "}
                  <span>
                    <Link className="links sign-up-span-link">Login here</Link>
                  </span>
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Signup;
