import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import googleIcon from "../../../Assets/google-icon.png";
import facebookIcon from "../../../Assets/facebook.png";
import "../../../css/LandingPage/Hero.css";
import { Link } from "react-router-dom";
import Animation from "../../../Animation/Circles_Hover_Animation.json";
import Lottie from "lottie-react";
import { withRouter } from "react-router-dom";

class Hero extends Component {
  state = {
    details: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    emptyFields: false,
    error: false,
    success: false,
    emailExists: false,
    invalidEmail: false,
    sendLoading: false,
    passwordLessThan7: false,
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
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

  register = async (e) => {
    e.preventDefault();
    if (e.key === "Enter" || e.type === "click") {
      if (
        this.state.details.firstName === "" ||
        this.state.details.lastName === "" ||
        this.state.details.email === "" ||
        this.state.details.password === ""
      ) {
        this.setState({ emptyFields: true });
        setTimeout(() => this.setState({ emptyFields: false }), 1500);
      } else if (this.isValidEmail(this.state.details.email) === false) {
        this.setState({ invalidEmail: true });
        setTimeout(() => this.setState({ invalidEmail: false }), 1500);
      } else {
        this.setState({ sendLoading: true });
        const response = await fetch(
          "https://konecktomebackend.herokuapp.com/users/sign-up/yes",
          {
            method: "POST",
            body: JSON.stringify({
              firstName: this.state.details.firstName,
              lastName: this.state.details.lastName,
              email: this.state.details.email,
              password: this.state.details.password,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const details = await response.json();
        if (details.message === "Email already exists") {
          this.setState({ emailExists: true, sendLoading: false });
          setTimeout(() => this.setState({ emailExists: false }), 1500);
        } else if (details.message === "Less Than 7") {
          this.setState({ passwordLessThan7: true, sendLoading: false });
          setTimeout(() => this.setState({ passwordLessThan7: false }), 1500);
        } else if (details.id) {
          this.setState({
            success: true,
            details: {
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            },
          });
          setTimeout(
            () => this.setState({ sendLoading: false, success: false }),
            1500
          );

          window.location.href = `https://konecktome-mvp.herokuapp.com/dashboard/${details.id}`;
          // window.location.href = `http://localhost:3000/dashboard/${details.id}`;
        }
      }
    }
  };

  handleKeypress = (e) => {
    if (e.key === "Enter") {
      this.btn.click();
    }
  };
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div id="landing-wrapper">
        <Container>
          <Row>
            <Col id="left-col2" lg={6}>
              <div id="mobile-animation">
                <Lottie
                  options={defaultOptions}
                  height={window.innerWidth < 600 ? 300 : 500}
                  width={window.innerWidth < 600 ? 300 : 600}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
              </div>
              <span id="hero-welcome-text">
                Better Quality Services, <br></br>At Far Lower Prices.
              </span>
              <p id="hero-life-assistant-text">
                The Comparison Site For Highly-Rated Services.
              </p>
              <form>
                <div id="hero-form-div">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={this.state.details.firstName}
                    onChange={(e) => this.updateDetails(e)}
                  />
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={this.state.details.lastName}
                    onChange={(e) => this.updateDetails(e)}
                  />
                </div>
                <div id="hero-form-div">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    value={this.state.details.email}
                    onChange={(e) => this.updateDetails(e)}
                  />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={this.state.details.password}
                    onChange={(e) => this.updateDetails(e)}
                    onKeyPress={(e) => this.handleKeypress(e)}
                  />
                </div>
              </form>
              {this.state.success === true ? (
                <div className="success-notification-holder">
                  <p>Yay, Sign Up Successful</p>
                </div>
              ) : null}
              {this.state.error === true ? (
                <div className="error-notification-holder">
                  <p>I know, these things happen. Error </p>
                </div>
              ) : null}
              {this.state.passwordLessThan7 === true ? (
                <div className="error-notification-holder">
                  <p>
                    Password Must Be More Than 7 Characters And Alphanumeric
                  </p>
                </div>
              ) : null}

              {this.state.emailExists === true ? (
                <div className="exist-notification-holder">
                  <p>Yup, we've met before. Email already exists</p>
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
                id="hero-sign-up-btn"
                onClick={(e) => this.register(e)}
                ref={(node) => (this.btn = node)}
              >
                {this.state.sendLoading === true ? (
                  <div id="explore-loading"></div>
                ) : (
                  <p id="hero-sign-up-btn-text">Sign Up</p>
                )}
              </div>

              <h2 class="hr-lines">Or Continue With</h2>
              <div id="login-icon-wrapper">
                <div
                  className="icons-holder landing-page-icon-holder"
                  onClick={() => this.loginWithGoogle()}
                >
                  <img src={googleIcon} className="auth-icons" />
                  <p className="desktop-text fs-4 ms-3">Google</p>
                </div>
                <div
                  className="icons-holder landing-page-icon-holder"
                  onClick={() => this.loginWithFacebook()}
                >
                  <img src={facebookIcon} className="auth-icons" />
                  <p className="desktop-text fs-4 ms-3">Facebook</p>
                </div>
              </div>
              {/* <div id="hero-btn-wrapper">
                <Link to="/signup" className="links">
                  <div id="hero-sign-up-btn-wrapper">
                    <p id="hero-sign-up-btn-text">Sign Up</p>
                  </div>
                </Link>
                <Link to="/login" className="links">
                  <div id="hero-login-btn-wrapper">
                    <p id="hero-login-btn-text">Login</p>
                  </div>
                </Link>
              </div> */}
            </Col>
            <Col
              id="right-col2"
              lg={6}
              // onMouseEnter={() => this.setState({ isStopped: false })}
              onMouseEnter={() =>
                this.setState({ isPaused: !this.state.isPaused })
              }
            >
              <Lottie
                animationData={Animation}
                aria-aria-labelledby="use lottie animation"
                loop="true"
                autoplay="true"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Hero);
