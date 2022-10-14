import React, { Component } from "react";
import signUpImage from "../../../Assets/signup-left-image.png";
import Footer from "../LandingPage/Footer";
import { Row, Col } from "react-bootstrap";

class ForgotPassword extends React.Component {
  state = {
    details: {
      email: "",
    },
    authenticationPin: {
      authpin1: "",
      authpin2: "",
      authpin3: "",
      authpin4: "",
      authpin5: "",
      authpin6: "",
    },
    resetPasswordDetails: {
      resetPassword: "",
      confirmResetPassword: "",
    },
    sendingResetToken: false,
    resetPassword: false,
  };

  updateDetails = (e) => {
    const details = this.state.details;
    const id = e.currentTarget.id;
    details[id] = e.currentTarget.value;
    this.setState({ details });
  };

  updateResetDetails = (e) => {
    const resetPasswordDetails = this.state.resetPasswordDetails;
    const id = e.currentTarget.id;
    resetPasswordDetails[id] = e.currentTarget.value;
    this.setState({ resetPasswordDetails });
  };

  updateValidationPinDetails = (e) => {
    const authenticationPin = this.state.authenticationPin;
    const id = e.currentTarget.id;
    authenticationPin[id] = e.currentTarget.value;
    this.setState({ authenticationPin });
  };
  autoTab = (current, to) => {
    if (
      current.getAttribute &&
      current.value.length == current.getAttribute("maxlength")
    ) {
      to.focus();
    }
  };

  sendResetToken = async (e) => {
    e.preventDefault();
    if (this.state.details.email === "") {
      alert("emptuy fileds");
    } else {
      this.setState({ resetPassword: true, sendingResetToken: true });
      const response = await fetch(
        "http://localhost:3002/users/forgot-password",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.state.details.email,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.message === "Email sent") {
        alert("email sent");
        this.setState({
          sendingResetToken: false,
        });
      } else if (details.message === "User not found") {
        alert("usernot found");
      } else {
        alert("an error aoocur");
      }
    }
  };

  resetPassword = async (e) => {
    e.preventDefault();
    const concatenateAuthenticationPin =
      this.state.authenticationPin.authpin1 +
      this.state.authenticationPin.authpin2 +
      this.state.authenticationPin.authpin3 +
      this.state.authenticationPin.authpin4 +
      this.state.authenticationPin.authpin5 +
      this.state.authenticationPin.authpin6;
    const response = await fetch(
      "http://localhost:3002/users/validate-forgot-password-token",
      {
        method: "POST",
        body: JSON.stringify({
          email: this.state.details.email,
          changePasswordToken: concatenateAuthenticationPin,
          newPassword: this.state.resetPasswordDetails.resetPassword,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "Password Reset successful") {
      this.setState({
        details: {
          email: "",
        },
        authenticationPin: {
          authpin1: "",
          authpin2: "",
          authpin3: "",
          authpin4: "",
          authpin5: "",
          authpin6: "",
        },
        resetPasswordDetails: {
          resetPassword: "",
          confirmResetPassword: "",
        },
        resetPassword: false,
      });
      this.props.history.push("/dashboard/" + details.userId);
    }
  };
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
            {this.state.resetPassword === true ? (
              <div>
                {this.state.sendingResetToken === true ? (
                  <>
                    <div id="reset-pin-spinner-holder">
                      <div id="reset-pin-spinner"></div>
                    </div>
                    <div id="reset-pin-spinner-holder">
                      <p id="settings_modal_header">
                        Sending Reset Token To Your Email
                      </p>
                    </div>
                  </>
                ) : (
                  <div id="sign-up-right-col">
                    <p className="desktop-header sign-up-header">
                      Reset Your Password
                    </p>
                    <p className="desktop-sub-header2 sign-up-header">
                      A 6 digit pin has been sent to your email, please enter it
                      below
                    </p>
                    <form name="authenticationForm">
                      <div id="pin-container">
                        <input
                          type="text"
                          maxlength="1"
                          id="authpin1"
                          name="authpin1"
                          value={this.state.authenticationPin.authpin1}
                          onChange={(e) => this.updateValidationPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.authenticationForm.authpin1,
                              document.authenticationForm.authpin2
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="authpin2"
                          name="authpin2"
                          value={this.state.authenticationPin.authpin2}
                          onChange={(e) => this.updateValidationPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.authenticationForm.authpin2,
                              document.authenticationForm.authpin3
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="authpin3"
                          name="authpin3"
                          value={this.state.authenticationPin.authpin3}
                          onChange={(e) => this.updateValidationPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.authenticationForm.authpin3,
                              document.authenticationForm.authpin4
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="authpin4"
                          name="authpin4"
                          value={this.state.authenticationPin.authpin4}
                          onChange={(e) => this.updateValidationPinDetails(e)}
                          onInput={() =>
                            this.autoTab(
                              document.authenticationForm.authpin4,
                              document.authenticationForm.authpin5
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="authpin5"
                          name="authpin5"
                          value={this.state.authenticationPin.pin5}
                          onChange={(e) => this.updateValidationPinDetails(e)}
                          onInput={() =>
                            this.autoTab(
                              document.authenticationForm.authpin5,
                              document.authenticationForm.authpin6
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="authpin6"
                          name="authpin6"
                          value={this.state.authenticationPin.authpin6}
                          onChange={(e) => this.updateValidationPinDetails(e)}
                        />
                      </div>
                    </form>
                    <form>
                      <div className="input-holder">
                        <input
                          id="resetPassword"
                          type="password"
                          placeholder="Enter New Password"
                          value={this.state.resetPassword.resetPassword}
                          onChange={(e) => this.updateResetDetails(e)}
                        />
                      </div>
                      <div className="input-holder">
                        <input
                          id="confirmResetPassword"
                          type="password"
                          placeholder="Confirm Password"
                          value={this.state.resetPassword.confirmResetPassword}
                          onChange={(e) => this.updateResetDetails(e)}
                        />
                      </div>
                      <div
                        id="sign-up-btn"
                        onClick={(e) => this.resetPassword(e)}
                      >
                        <div className="desktop-medium-button">
                          <p className="desktop-big-button-text">
                            Reset password
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div id="sign-up-right-col">
                <p className="desktop-header sign-up-header">
                  Recover Password
                </p>
                <form>
                  <div className="input-holder">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter email you registered with"
                      value={this.state.details.email}
                      onChange={(e) => this.updateDetails(e)}
                    />
                  </div>
                  <div id="sign-up-btn" onClick={(e) => this.sendResetToken(e)}>
                    <div className="desktop-medium-button">
                      <p className="desktop-big-button-text">
                        Recover password
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default ForgotPassword;
