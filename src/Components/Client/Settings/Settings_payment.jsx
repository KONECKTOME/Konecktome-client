import React, { Component } from "react";
import "../../../css/Settings/Settings_payment.css";
import penc_edit_icon from "../../../Assets/pencil_icon.svg";
class Settings_payment extends React.Component {
  render() {
    return (
      <div id="settimgs_payement_wrapper">
        <div className="settings_payment_boxes">
          <div id="settings_payment_box_header">
            <p>Billing Address</p>
            <img src={penc_edit_icon} />
          </div>
          <hr></hr>
          <div id="settings_payment_user_details">
            <div>dhdh</div>
          </div>
        </div>
        <div className="settings_payment_boxes" id="settings_payment_right-box">
          <div id="settings_payment_box_header">
            <p>Billing Address</p>
            <img src={penc_edit_icon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings_payment;
