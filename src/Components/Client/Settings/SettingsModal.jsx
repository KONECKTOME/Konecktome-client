import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../../../css/Settings/Settings_modal.css";
import { withRouter } from "react-router-dom";

class SettingsModal extends React.Component {
  state = {
    showModal: this.props.modalState,
    pin: {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
    },
    authenticationPin: {
      authpin1: "",
      authpin2: "",
      authpin3: "",
      authpin4: "",
      authpin5: "",
      authpin6: "",
    },
    newPin: {
      newPin1: "",
      newPin2: "",
      newPin3: "",
      newPin4: "",
    },
    confirmNewPin: {
      confirmpin1: "",
      confirmpin2: "",
      confirmpin3: "",
      confirmpin4: "",
    },
    emptyFields: false,
    notFound: false,
    success: false,
    forgotPin: false,
    sendingResentToken: false,
    errorSendingEmail: false,
    invalidToken: false,
    pinDontMatch: false,
  };

  updatePinDetails = (e) => {
    const pin = this.state.pin;
    const id = e.currentTarget.id;
    pin[id] = e.currentTarget.value;
    this.setState({ pin });
  };

  updateNewPinDetails = (e) => {
    const newPin = this.state.newPin;
    const id = e.currentTarget.id;
    newPin[id] = e.currentTarget.value;
    this.setState({ newPin });
  };
  updateConfirmNewPinDetails = (e) => {
    const confirmNewPin = this.state.confirmNewPin;
    const id = e.currentTarget.id;
    confirmNewPin[id] = e.currentTarget.value;
    this.setState({ confirmNewPin });
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

  validatePin = async () => {
    const concatenatePin =
      this.state.pin.pin1 +
      this.state.pin.pin2 +
      this.state.pin.pin3 +
      this.state.pin.pin4;
    if (
      this.state.pin.pin1 === "" ||
      this.state.pin.pin2 === "" ||
      this.state.pin.pin3 === "" ||
      this.state.pin.pin4 === ""
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else {
      const response = await fetch("http://localhost:3003/users/check-pin", {
        method: "POST",
        body: JSON.stringify({
          email: this.props.userEmail,
          pin: concatenatePin,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const details = await response.json();
      if (details.message === "Invalid User") {
        this.setState({ notFound: true });
        setTimeout(() => this.setState({ notFound: false }), 1500);
      } else if (details.message === "Valid User") {
        this.setState({ success: true });
        setTimeout(() => this.setState({ success: false }), 1500);
        setTimeout(() => this.props.hideModal(), 1500);
      }
    }
  };

  goBackToDashboard = () => {
    this.props.hideModal();
    this.props.history.push("/dashboard/" + this.props.userId);
  };

  forgotPin = async () => {
    this.setState({ forgotPin: true, sendingResentToken: true });
    const response = await fetch(
      "http://localhost:3003/users/forgot-password",
      {
        method: "POST",
        body: JSON.stringify({
          email: this.props.userEmail,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    if (details.message === "Email sent") {
      this.setState({ sendingResentToken: false });
    } else {
      this.setState({ errorSendingEmail: true });
    }
  };

  pinInArray = (str) => {
    return str.split("").length;
  };

  resetPin = async () => {
    const concatenateAuthenticationPin =
      this.state.authenticationPin.authpin1 +
      this.state.authenticationPin.authpin2 +
      this.state.authenticationPin.authpin3 +
      this.state.authenticationPin.authpin4 +
      this.state.authenticationPin.authpin5 +
      this.state.authenticationPin.authpin6;
    const concatenateNewPin =
      this.state.newPin.newPin1 +
      this.state.newPin.newPin2 +
      this.state.newPin.newPin3 +
      this.state.newPin.newPin4;
    const concatenateConfirmNewPin =
      this.state.confirmNewPin.confirmpin1 +
      this.state.confirmNewPin.confirmpin2 +
      this.state.confirmNewPin.confirmpin3 +
      this.state.confirmNewPin.confirmpin4;
    if (
      this.pinInArray(concatenateAuthenticationPin) !== 6 ||
      this.pinInArray(concatenateNewPin) !== 4 ||
      this.pinInArray(concatenateConfirmNewPin) !== 4
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else {
      if (concatenateNewPin === concatenateConfirmNewPin) {
        const response = await fetch(
          "http://localhost:3003/users/validate-forgot-password-token",
          {
            method: "POST",
            body: JSON.stringify({
              email: this.props.userEmail,
              changePasswordToken: concatenateAuthenticationPin,
              newPin: concatenateNewPin,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const details = await response.json();
        if (details.message === "Pin Reset successful") {
          this.setState({ success: true });
          setTimeout(() => this.setState({ success: false }), 1500);
          this.setState({
            forgotPin: false,
            authenticationPin: {
              authpin1: "",
              authpin2: "",
              authpin3: "",
              authpin4: "",
              authpin5: "",
              authpin6: "",
            },
            newPin: {
              newPin1: "",
              newPin2: "",
              newPin3: "",
              newPin4: "",
            },
            confirmNewPin: {
              confirmpin1: "",
              confirmpin2: "",
              confirmpin3: "",
              confirmpin4: "",
            },
          });
          this.props.hideModal();
          this.props.history.push("/dashboard/" + this.props.userId);
        } else if ((details.message = "Invalid token")) {
          this.setState({ invalidToken: true });
          setTimeout(() => this.setState({ invalidToken: false }), 1500);
        }
      } else {
        this.setState({ pinDontMatch: true });
        setTimeout(() => this.setState({ pinDontMatch: false }), 1500);
      }
    }
  };

  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.props.hideModal()}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body>
            {this.state.forgotPin === true ? (
              <>
                {this.state.sendingResentToken === true ? (
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
                  <div>
                    <p id="settings_modal_header">Reset Pin</p>
                    <p id="settings_modal_subheader">
                      A digit pin has been sent to your email, please enter it
                      below
                    </p>
                    <form name="authenticationForm" id="settings_modal_form">
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
                    <p id="settings_modal_subheader">Enter Your New Pin Here</p>
                    <form name="newPinForm">
                      <div id="pin-container">
                        <input
                          type="text"
                          maxlength="1"
                          id="newPin1"
                          value={this.state.newPin.newPin1}
                          onChange={(e) => this.updateNewPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.newPinForm.newPin1,
                              document.newPinForm.newPin2
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="newPin2"
                          value={this.state.newPin.newPin2}
                          onChange={(e) => this.updateNewPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.newPinForm.newPin2,
                              document.newPinForm.newPin3
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="newPin3"
                          name="newPin3"
                          value={this.state.newPin.newPin3}
                          onChange={(e) => this.updateNewPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.newPinForm.newPin3,
                              document.newPinForm.newPin4
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="newPin4"
                          name="newPin4"
                          value={this.state.newPin.newPin4}
                          onChange={(e) => this.updateNewPinDetails(e)}
                        />
                      </div>
                    </form>
                    <p id="settings_modal_subheader">Confirm new pin</p>
                    <form name="confirmNewPin">
                      <div id="pin-container">
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin1"
                          name="confirmpin1"
                          value={this.state.confirmNewPin.confirmpin1}
                          onChange={(e) => this.updateConfirmNewPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.confirmNewPin.confirmpin1,
                              document.confirmNewPin.confirmpin2
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin2"
                          name="confirmpin2"
                          value={this.state.confirmNewPin.confirmpin2}
                          onChange={(e) => this.updateConfirmNewPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.confirmNewPin.confirmpin2,
                              document.confirmNewPin.confirmpin3
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin3"
                          name="confirmpin3"
                          value={this.state.confirmNewPin.confirmpin3}
                          onChange={(e) => this.updateConfirmNewPinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.confirmNewPin.confirmpin3,
                              document.confirmNewPin.confirmpin4
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="confirmpin4"
                          name="confirmpin4"
                          value={this.state.confirmNewPin.confirmpin4}
                          onChange={(e) => this.updateConfirmNewPinDetails(e)}
                        />
                      </div>
                    </form>
                    {this.state.emptyFields === true ? (
                      <div id="setting_modal_form_button_wrapper">
                        <div id="settings_modal_form_error_button">
                          <p id="settings_modal_form_button_text">
                            Fields cannot be empty
                          </p>
                        </div>
                      </div>
                    ) : null}
                    {this.state.invalidToken === true ? (
                      <div id="setting_modal_form_button_wrapper">
                        <div id="settings_modal_form_error_button">
                          <p id="settings_modal_form_button_text">
                            Invalid Reset Token
                          </p>
                        </div>
                      </div>
                    ) : null}
                    {this.state.pinDontMatch === true ? (
                      <div id="setting_modal_form_button_wrapper">
                        <div id="settings_modal_form_error_button">
                          <p id="settings_modal_form_button_text">
                            Pins Don't Match
                          </p>
                        </div>
                      </div>
                    ) : null}
                    {this.state.success === true ? (
                      <div id="setting_modal_form_button_wrapper">
                        <div id="settings_modal_form_success_button">
                          <p id="settings_modal_form_button_text">
                            Reset Successful
                          </p>
                        </div>
                      </div>
                    ) : null}
                    <div
                      id="setting_modal_form_button_wrapper"
                      onClick={() => this.resetPin()}
                    >
                      <div id="settings_modal_form_button">
                        <p id="settings_modal_form_button_text">Save New Pin</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div id="settings_modal_wrapper">
                <p id="settings_modal_header">Profile settings</p>
                {this.props.userPin === "0000" ? (
                  <div className="exist-notification-holder">
                    Go Back to Dashboard To Set Your Pin
                  </div>
                ) : null}
                <p id="settings_modal_subheader">
                  Hey, what's your pin again ?
                </p>
                <div id="settings_modal_form_container">
                  <div id="settings_modal_form_subcontainer">
                    <form id="settings_modal_form" name="pinForm">
                      <div id="pin-container">
                        <input
                          type="text"
                          maxlength="1"
                          id="pin1"
                          value={this.state.pin.pin1}
                          onChange={(e) => this.updatePinDetails(e)}
                          maxLength={1}
                          onInput={() =>
                            this.autoTab(
                              document.pinForm.pin1,
                              document.pinForm.pin2
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="pin2"
                          name="pin2"
                          value={this.state.pin.pin2}
                          onChange={(e) => this.updatePinDetails(e)}
                          onInput={() =>
                            this.autoTab(
                              document.pinForm.pin2,
                              document.pinForm.pin3
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="pin3"
                          name="pin3"
                          value={this.state.pin.pin3}
                          onChange={(e) => this.updatePinDetails(e)}
                          onInput={() =>
                            this.autoTab(
                              document.pinForm.pin3,
                              document.pinForm.pin4
                            )
                          }
                        />
                        <input
                          type="text"
                          maxlength="1"
                          id="pin4"
                          name="pin4"
                          value={this.state.pin.pin4}
                          onChange={(e) => this.updatePinDetails(e)}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {this.state.notFound === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_error_button">
                      <p id="settings_modal_form_button_text">Incorrect Pin</p>
                    </div>
                  </div>
                ) : null}

                {this.state.emptyFields === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_error_button">
                      <p id="settings_modal_form_button_text">
                        Fields cannot be empty
                      </p>
                    </div>
                  </div>
                ) : null}

                {this.state.success === true ? (
                  <div id="setting_modal_form_button_wrapper">
                    <div id="settings_modal_form_success_button">
                      <p id="settings_modal_form_button_text">Pin Validated</p>
                    </div>
                  </div>
                ) : null}

                <div
                  id="setting_modal_form_button_wrapper"
                  onClick={() => this.validatePin()}
                >
                  <div id="settings_modal_form_button">
                    <p id="settings_modal_form_button_text">Continue</p>
                  </div>
                </div>
                <div id="pin-container">
                  <p
                    id="settings_modal_forgotten_password"
                    onClick={() => this.forgotPin()}
                  >
                    Forgotten pin?
                  </p>
                  <p
                    id="settings_modal_forgotten_password"
                    onClick={() => this.goBackToDashboard()}
                  >
                    Go Back to Dashboard
                  </p>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SettingsModal);
