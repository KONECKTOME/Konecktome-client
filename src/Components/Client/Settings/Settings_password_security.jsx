import React, { Component } from "react";
import "../../../css/Settings/Settings_password_security.css";

class Settings_password_security extends React.Component {
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
              <input />
              <input />
              <input />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Settings_password_security;
