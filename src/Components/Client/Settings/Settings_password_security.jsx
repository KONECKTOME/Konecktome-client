import React, { Component } from "react";
import "../../../css/Settings/Settings_password_security.css";

class Settings_password_security extends React.Component {
  state = {
    passwordDetails: {
      oldPass: "",
      newPass: "",
      confirmNewPass: "",
    },
    successPassword: false,
    errorPassword: false,
    passwordsNotMatch: false,
    emptyFields: false,
  };

  updatePasswordDetails = (e) => {
    e.preventDefault();
    const passwordDetails = this.state.passwordDetails;
    const id = e.currentTarget.id;
    passwordDetails[id] = e.currentTarget.value;
    this.setState({ passwordDetails });
  };

  changePassword = async (e) => {
    e.preventDefault();
    if (
      this.state.passwordDetails.newPass === "" ||
      this.state.passwordDetails.oldPass === "" ||
      this.state.passwordDetails.confirmNewPass === ""
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else if (
      this.state.passwordDetails.newPass !==
      this.state.passwordDetails.confirmNewPass
    ) {
      this.setState({ passwordsNotMatch: true });
      setTimeout(() => this.setState({ passwordsNotMatch: false }), 1500);
    } else {
      const response = await fetch(
        "http://localhost:3003/users/change-password",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.props.userEmail,
            oldPassword: this.state.passwordDetails.oldPass,
            newPassword: this.state.passwordDetails.newPass,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.message === "Password updated") {
        this.setState({ successPassword: true });
        setTimeout(() => this.setState({ successPassword: false }), 1500);
      } else if (details.message === "Password Incorrect") {
        this.setState({ errorPassword: true });
        setTimeout(() => this.setState({ errorPassword: false }), 1500);
      }
    }
  };
  render() {
    return (
      <>
        <div>
          <div id="settings_password_security_wrapper">
            <div id="settings_password_security_sub_wrapper">
              <p id="settings_password_security_header_text">CHANGE PASSWORD</p>
              <p id="settings_password_security_subheader">
                Lorem ipsum is simply a dummy text of printing and typesetting
                industry
              </p>
            </div>
          </div>
          <div id="settings_password_security_form_wrapper">
            <div className="settings_password_security_form_inner_wrapper">
              <form>
                <input
                  type="password"
                  placeholder="Enter Old Password"
                  id="oldPass"
                  value={this.state.passwordDetails.oldPass}
                  onChange={(e) => this.updatePasswordDetails(e)}
                />
                <input
                  type="password"
                  placeholder="Enter New Password"
                  id="newPass"
                  value={this.state.passwordDetails.newPass}
                  onChange={(e) => this.updatePasswordDetails(e)}
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  id="confirmNewPass"
                  value={this.state.passwordDetails.confirmNewPass}
                  onChange={(e) => this.updatePasswordDetails(e)}
                />
                {this.state.successPassword === true ? (
                  <div className="password-success-notification-holder">
                    <p>Password Changed Successfully</p>
                  </div>
                ) : null}
                {this.state.errorPassword === true ? (
                  <div className="password-error-notification-holder">
                    <p>Incorrect Password</p>
                  </div>
                ) : null}
                {this.state.emptyFields === true ? (
                  <div className="password-error-notification-holder">
                    <p>Input Fields Cannot Be Empty</p>
                  </div>
                ) : null}
                {this.state.passwordsNotMatch === true ? (
                  <div className="password-error-notification-holder">
                    <p>New Passwords Do Not Match</p>
                  </div>
                ) : null}

                <div
                  className="desktop-big-button"
                  onClick={(e) => this.changePassword(e)}
                >
                  <p className="desktop-big-button-text">Change Password</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Settings_password_security;
