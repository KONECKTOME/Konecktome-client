import React, { Component } from "react";
import "../../../css/Settings/Settings_password_security.css";

class Settings_password_security extends React.Component {
  state = {
    passwordDetails: {
      oldPass: "",
      newPass: "",
      confirmNewPass: "",
    },
  };

  updatePasswordDetails = (e) => {
    e.preventDefault();
    const passwordDetails = this.state.passwordDetails;
    const id = e.currentTarget.id;
    passwordDetails[id] = e.currentTarget.value;
    this.setState({ passwordDetails });
  };

  sendPassword = async () => {
    if (this.state.newPass !== this.state.confirmNewPass) {
      alert("Confirm Passwords do not match");
    } else {
      const response = await fetch(
        "http://localhost:3002/users/change-password",
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
                <div className="desktop-big-button">
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
