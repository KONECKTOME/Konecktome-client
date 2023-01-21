import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import illustration from "../Assets/wheel-vector.svg";
import "../css/Comingsoon.css";
import facebook from "../Assets/facebookIcon.svg";
import linkedIn from "../Assets/linkedinIcon.svg";
import instagram from "../Assets/instagram-2.png";
import checkBoxIcon from "../Assets/check_mark.png";
import Animation from "../Animation/Circles_Hover_Animation.json";
import Lottie from "lottie-react";
import loveHeart from "../Assets/star-struck.png";
import winkFace from "../Assets/wink_face.png";
import pleadFace from "../Assets/plead-face-color.png";
import { withRouter } from "react-router-dom";

class Comingsoon extends Component {
  state = {
    details: {
      firstName: "",
      lastName: "",
      email: "",
    },
    invalidEmailError: false,
    emailExists: false,
    successText: false,
    noTextError: false,
    subscribe: false,
    errorSendingEmail: false,
    subscribeCheckBoxClass: false,
    isStopped: false,
    isPaused: false,
  };

  checkBox = (e) => {
    e.preventDefault();
    this.setState((previousState) => {
      return {
        subscribe: !previousState.subscribe,
        subscribeCheckBoxClass: !previousState.subscribeCheckBoxClass,
      };
    });
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/reporting/newPageView",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  };

  sendTransactionalEmail = async () => {
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/mail/transactional",
      {
        method: "POST",
        body: JSON.stringify({
          fName: this.state.details.firstName,
          lName: "",
          email: this.state.details.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    return details.message;
  };

  sendMartketingEmail = async () => {
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/mail/marketing",
      {
        method: "POST",
        body: JSON.stringify({
          fName: this.state.details.firstName,
          lName: this.state.details.lastName,
          email: this.state.details.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    return details.message;
  };

  register = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/mail/new-user",
      {
        method: "POST",
        body: JSON.stringify({
          fName: this.state.details.firstName,
          lName: "no name",
          email: this.state.details.email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "Text fields can't be empty") {
      this.setState({
        noTextError: true,
      });
      setTimeout(() => {
        this.setState({
          noTextError: false,
        });
      }, 1200);
    } else if (details.message === "Invalid email") {
      this.setState({
        invalidEmailError: true,
        details: {
          firstName: "",
          lastName: "",
          email: "",
        },
      });
      setTimeout(() => {
        this.setState({
          invalidEmailError: false,
        });
      }, 1200);
    } else if (details.message === "This email already exists") {
      this.setState({
        emailExists: true,
        details: {
          firstName: "",
          lastName: "",
          email: "",
        },
      });
      setTimeout(() => {
        this.setState({
          emailExists: false,
        });
      }, 1200);
    } else if (details.message === "Sign up successful") {
      const sendEmail = this.sendTransactionalEmail();
      const sendMartketingEmail = this.sendMartketingEmail();
      if (
        sendEmail === "Error sending email" ||
        sendMartketingEmail === "An errored in adding to mail list"
      ) {
        this.setState({
          errorSendingEmail: true,
        });
        setTimeout(() => {
          this.setState({
            errorSendingEmail: false,
          });
        }, 1200);
      } else {
        this.setState({
          details: {
            firstName: "",
            lastName: "",
            email: "",
          },
          successText: true,
        });
        setTimeout(() => {
          this.setState({
            successText: false,
          });
        }, 2000);
        window.location.href = "https://konecktome.com/success";
      }
    }
  };
  render() {
    const defaultOptions = {
      animationData: Animation,
      loop: true,
      autoplay: true,
    };

    return (
      <div id="landing-wrapper">
        <Container>
          <Row>
            <Col id="left-col2" lg={5}>
              {/* <h3 id="get-notified-text">
                How do you truly know <br></br> if you’re getting the <br></br>
                best value for yourself?
              </h3> */}
              <h3 id="get-notified-text">
                Quality: For People Who Deserve The Best.
              </h3>
              <h3 id="get-notified-text-mobile">
                Quality: For People Who Deserve The Best.
              </h3>
              <h3 id="coming-soon-text">
                The Comparison Site For Highly-Rated Services.
              </h3>
              <div id="mobile-animation">
                <Lottie
                  animationData={Animation}
                  aria-aria-labelledby="use lottie animation"
                  loop="true"
                  autoplay="true"
                />
                {/* <Lottie
                  options={defaultOptions}
                  height={window.innerWidth < 600 ? 300 : 500}
                  width={window.innerWidth < 600 ? 300 : 600}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                /> */}
              </div>
              <form>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Your Name"
                  value={this.state.details.firstName}
                  onChange={(e) => this.updateDetails(e)}
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={this.state.details.email}
                  onChange={(e) => this.updateDetails(e)}
                />
                {/* <br></br>
                <div id="checkbox-wrapper">
                  <div
                    onClick={(e) => this.checkBox(e)}
                    className={
                      this.state.subscribeCheckBoxClass ? "active" : "inactive"
                    }
                  >
                    <img src={checkBoxIcon} id="checkbox-icon" />
                  </div>
                  <p id="checkbox-text">
                    Click the box to subscribe for newsletters
                  </p>
                </div> */}
                <p>{this.state.checkText}</p>
                {this.state.noTextError === true ? (
                  <div>
                    <div id="no-text-error">
                      <p>
                        Bummer, text fields cannot be empty{" "}
                        <img src={pleadFace} id="love-heart-icon" />
                      </p>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
                {this.state.invalidEmailError === true ? (
                  <div>
                    <div id="no-text-error">
                      <p>
                        oops, email is invalid{" "}
                        <img src={pleadFace} id="love-heart-icon" />
                      </p>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
                {this.state.successText === true ? (
                  <div>
                    <div id="success-text">
                      <p>
                        That's what we like to see, sign up is successful{" "}
                        <img src={loveHeart} id="love-heart-icon" />
                      </p>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
                {this.state.emailExists === true ? (
                  <div>
                    <div id="email-exists">
                      <p>
                        Yup, we've met before. Your email already exists{" "}
                        <img src={winkFace} id="love-heart-icon" />
                      </p>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
                <button id="btn" onClick={(e) => this.register(e)}>
                  NOTIFY ME
                </button>
              </form>
              <div id="icons-wrapper">
                <a
                  href="https://www.linkedin.com/company/konecktome/"
                  target="_blank"
                  className="hero-sm-icons"
                >
                  <div>
                    <img src={linkedIn} />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/Konecktome-101748959105629"
                  target="_blank"
                  className="hero-sm-icons"
                >
                  <div>
                    <img src={facebook} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/konecktome/"
                  target="_blank"
                  className="hero-sm-icons"
                >
                  <div id="instagram-holder">
                    <img src={instagram} className="coming-soon-sm-icons" />
                  </div>
                </a>
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
              {/* <Lottie
                options={defaultOptions}
                height={750}
                width={900}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
              /> */}
              <Lottie
                animationData={Animation}
                aria-aria-labelledby="use lottie animation"
                loop="true"
                autoplay="true"
                height={window.innerWidth < 600 ? 300 : 500}
                width={window.innerWidth < 600 ? 300 : 600}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Comingsoon);
