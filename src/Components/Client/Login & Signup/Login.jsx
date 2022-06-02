import React, { Component } from "react";
import signUpImage from "../../../Assets/signup-left-image.png";
import "../../../css/Signup & login/SignUp.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../LandingPage/Footer";
import googleIcon from "../../../Assets/google-icon.png";
import facebookIcon from "../../../Assets/facebook.png";
class Login extends React.Component {
  state = {
    check: false,
    details: {
      email: "",
      password: "",
    },
  };

  updateCheckBox = () => {
    this.setState({
      check: !this.state.check,
    });
  };
  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };
  login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.details.email,
        password: this.state.details.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const token = await response.json();
    console.log(token);
    if (token) {
      const authorize = await fetch(
        `http://localhost:3002/users/get-user-after-login`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token.newAccessToken,
          },
        }
      );
      const userDetails = await authorize.json();
      this.setState({
        details: {
          email: "",
          password: "",
        },
      });
      window.location.href = `http://localhost:3000/dashboard/${userDetails}`;
    }
  };

  loginWithGoogle = async () => {
    window.location.href = "http://localhost:3002/users/auth/google";
  };

  loginWithFacebook = async () => {
    window.location.href = "http://localhost:3002/users/login/facebook";
  };
  render() {
    return (
      <div>
        <Row>
          <Col md={6}>
            <div>
              <img src={signUpImage} />
            </div>
          </Col>
          <Col md={6}>
            <div id="login-right-col">
              <p className="desktop-header sign-up-header">Welcome Back!</p>
              <p className="desktop-sub-header2 sign-up-header">Login with</p>
              <div id="login-icon-wrapper">
                <div
                  className="icons-holder"
                  onClick={() => this.loginWithGoogle()}
                >
                  <img src={googleIcon} className="auth-icons" />
                  <p className="desktop-text">Google</p>
                </div>
                <div
                  className="icons-holder"
                  onClick={() => this.loginWithFacebook()}
                >
                  <img src={facebookIcon} className="auth-icons" />
                  <p className="desktop-text">Facebook</p>
                </div>
              </div>
              <div className="desktop-header sign-up-header">OR</div>
              <form>
                <div className="input-holder">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={this.state.details.email}
                    onChange={(e) => this.updateDetails(e)}
                  />
                </div>
                <div className="input-holder">
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.details.password}
                    onChange={(e) => this.updateDetails(e)}
                  />
                </div>
              </form>
              <div
                id="sign-up-wrapper"
                className="checkbox-forgot-pass desktop-text"
              >
                <div id={this.state.check ? "check-wrapper2" : "check-wrapper"}>
                  <div
                    id={this.state.check ? "checked2" : "checkbox"}
                    onClick={() => this.updateCheckBox()}
                  ></div>
                  <p>Remember me </p>
                </div>
                <div>
                  <Link to="/forgot-password" className="links">
                    <span className="sign-up-span-link ">Forgot Password?</span>
                  </Link>
                </div>
              </div>
              <div id="sign-up-btn" onClick={(e) => this.login(e)}>
                <div className="desktop-medium-button">
                  <p className="desktop-big-button-text">Login</p>
                </div>
              </div>
              <div id="sign-up-btn">
                <span className="desktop-text">
                  New User?
                  <span>
                    <Link to="/signup" className="links sign-up-span-link">
                      Sign up here
                    </Link>
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

export default Login;
