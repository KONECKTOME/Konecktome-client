import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import illustration from "../../../Assets/wheel-vector.svg";
import "../../../css/LandingPage/Hero.css";
import { Link } from "react-router-dom";
import Animation from "../../../Animation/Circles_Hover_Animation.json";
import Lottie from "lottie-react";
import { withRouter } from "react-router-dom";

class Hero extends Component {
  state = {};

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
            <Col id="left-col2" lg={5}>
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
                WELCOME TO <br></br>
                <span id="hero-to-konecktome-text">KONECKTOME</span>
              </span>

              {/* <span id="hero-to-konecktome-text">KONECKTOME</span> */}
              <p id="hero-life-assistant-text">Your Virtual Life Assistant</p>
              <div id="hero-btn-wrapper">
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
              </div>
            </Col>
            <Col
              id="right-col2"
              lg={7}
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