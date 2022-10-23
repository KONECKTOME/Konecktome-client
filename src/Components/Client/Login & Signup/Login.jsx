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
    incorrectPass: false,
    success: false,
    emptyField: false,
    invalidEmail: false,
    loggingIn: false,
  };

  updateCheckBox = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  isValidEmail = (email) => {
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };
  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };
  login = async (e) => {
    e.preventDefault();
    if (this.state.details.email === "" || this.state.details.password === "") {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else if (this.isValidEmail(this.state.details.email) === false) {
      this.setState({ invalidEmail: true });
      setTimeout(() => this.setState({ invalidEmail: false }), 1500);
    } else {
      this.setState({ loggingIn: true });
      const response = await fetch(
        "https://konecktomebackend.herokuapp.com/users/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.state.details.email,
            password: this.state.details.password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const token = await response.json();
      if (token.newAccessToken !== "Email or pass incorrect") {
        const authorize = await fetch(
          `https://konecktomebackend.herokuapp.com/users/get-user-after-login`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + token.newAccessToken,
            },
          }
        );
        const userDetails = await authorize.json();
        if (userDetails.message === "User Found") {
          this.setState({
            loggingIn: false,
            success: true,
            details: {
              email: "",
              password: "",
            },
          });
          setTimeout(() => this.setState({ success: false }), 1500);
          window.location.href = `https://konecktome-mvp.herokuapp.com/dashboard/${userDetails.userId}`;
        }
      } else {
        this.setState({ incorrectPass: true });
        setTimeout(() => this.setState({ incorrectPass: false }), 1500);
      }
    }
  };

  loginWithGoogle = async () => {
    window.location.href =
      "https://konecktomebackend.herokuapp.com/users/auth/google";
  };

  loginWithFacebook = async () => {
    window.location.href =
      "https://konecktomebackend.herokuapp.com/users/login/facebook";
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
              {this.state.success === true ? (
                <div className="success-notification-holder">
                  <p>Yay, Sign Up Successful</p>
                </div>
              ) : null}
              {this.state.incorrectPass === true ? (
                <div className="error-notification-holder">
                  <p>Email Or Password Incorrect </p>
                </div>
              ) : null}
              {this.state.emptyFields === true ? (
                <div className="error-notification-holder">
                  <p>Input fields cannot be empty</p>
                </div>
              ) : null}
              {this.state.invalidEmail === true ? (
                <div className="error-notification-holder">
                  <p>Invalid Email</p>
                </div>
              ) : null}
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
                  {this.state.loggingIn === true ? (
                    <div id="explore-loading"></div>
                  ) : (
                    <p className="desktop-big-button-text">Login</p>
                  )}
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
