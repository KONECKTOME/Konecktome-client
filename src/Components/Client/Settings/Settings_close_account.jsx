import React, { Component } from "react";
import "../../../css/Settings/Settings_close_account.css";

class Settings_close_account extends React.Component {
  state = {
    check: false,
  };
  updateCheckBox = () => {
    this.setState({
      check: !this.state.check,
    });
  };
  render() {
    return (
      <div id="settings_close_account_wrapper">
        <p id="settings_close_account_header">
          Deactivating or Deleting Your Konecktome Account
        </p>
        <p id="settings_close_account_sub_header">
          If you want to take a break deactivate your account or if you want to
          delete your acount let us know
        </p>
        <div className="settings_close_account_boxes">
          <div id="settings_close_account_boxes_inner_wrapper">
            <div id={this.state.check ? "check-wrapper2" : "check-wrapper"}>
              <div
                id={this.state.check ? "checked2" : "checkbox"}
                onClick={() => this.updateCheckBox()}
              ></div>
            </div>
            <div>
              <p id="settings_close_account_header">Deactivate account</p>
              <p id="settings_close_account_sub_header">This is Temporary</p>
            </div>
          </div>
        </div>
        <div className="settings_close_account_boxes">
          <div id="settings_close_account_boxes_inner_wrapper">
            <div id={this.state.check ? "check-wrapper2" : "check-wrapper"}>
              <div
                id={this.state.check ? "checked2" : "checkbox"}
                onClick={() => this.updateCheckBox()}
              ></div>
            </div>
            <div>
              <p id="settings_close_account_header">Delete account</p>
              <p id="settings_close_account_sub_header">This is Temporary</p>
            </div>
          </div>
        </div>
        <div id="settings_import_data_button">
          <div id="settings_import_data_button_items">Confirm</div>
        </div>
      </div>
    );
  }
}

export default Settings_close_account;
