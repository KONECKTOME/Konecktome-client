import React, { Component } from "react";
import "../../../css/Settings/Settings_import_data.css";
import import_icon from "../../../Assets/import_icon.svg";

class Settings_import_data extends React.Component {
  render() {
    return (
      <div id="settings_import_data_wrapper">
        <div id="settings_import_data_sub_wrapper">
          <div id="import_icon_container">
            <img src={import_icon} />
          </div>
          <div className="settings_import_data_text_container">
            <p id="settings_import_data_text_header">
              Import your data from google
            </p>
          </div>
          <div className="settings_import_data_text_container">
            <p id="settings_import_data_text_sub-header">
              Lorem ipsum is simply a dummy text of printing and typesetting
              industry
            </p>
          </div>
          <div id="settings_import_data_button">
            <div id="settings_import_data_button_items">Import</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings_import_data;
