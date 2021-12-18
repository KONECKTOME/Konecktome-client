import React, { Component } from "react";
import "../../../css/Settings/Settings_home.css";
import SettingsModal from "./SettingsModal";
import Settings_profile from "./Settings_profile";
import Settings_account from "./Settings_account";
import Settings_close_account from "./Settings_close_account";
import Settings_import_data from "./Settings_import_data";
import Settings_password_security from "./Settings_password_security";
import Settings_payment from "./Settings_payment";
import { Row, Col } from "react-bootstrap";
class Settings_home extends React.Component {
  state = {
    showModal: true,
    profile: true,
    account: false,
    paymentDetails: false,
    importData: false,
    passSecurity: false,
    closeAccounts: false,
  };
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  alternateNav = (event) => {
    if (event.target.innerText === "Profile") {
      this.setState({
        profile: true,
        account: false,
        paymentDetails: false,
        importData: false,
        passSecurity: false,
        closeAccounts: false,
      });
    } else if (event.target.innerText === "Accounts") {
      this.setState({
        profile: false,
        account: true,
        paymentDetails: false,
        importData: false,
        passSecurity: false,
        closeAccounts: false,
      });
    } else if (event.target.innerText === "Payment Details") {
      this.setState({
        profile: false,
        account: false,
        paymentDetails: true,
        importData: false,
        passSecurity: false,
        closeAccounts: false,
      });
    } else if (event.target.innerText === "Import Data") {
      this.setState({
        profile: false,
        account: false,
        paymentDetails: false,
        importData: true,
        passSecurity: false,
        closeAccounts: false,
      });
    } else if (event.target.innerText === "Password and Security") {
      this.setState({
        profile: false,
        account: false,
        paymentDetails: false,
        importData: false,
        passSecurity: true,
        closeAccounts: false,
      });
    } else if (event.target.innerText === "Close Accounts") {
      this.setState({
        profile: false,
        account: false,
        paymentDetails: false,
        importData: false,
        passSecurity: false,
        closeAccounts: true,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.showModal === true ? (
          <SettingsModal
            modalState={this.state.showModal}
            hideModal={() => this.hideModal()}
          />
        ) : (
          <div></div>
        )}
        <div id="settings_home_wrapper">
          <p id="settings_home_header">Settings</p>
          <div id="settings_home_subcontainer">
            <Row id="settings_home_row">
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className="settings_navbar"
                >
                  Profile
                </p>
              </Col>
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className="settings_navbar"
                >
                  Accounts
                </p>
              </Col>
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className="settings_navbar"
                >
                  Payment Details
                </p>
              </Col>
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className="settings_navbar"
                >
                  Import Data
                </p>
              </Col>
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className="settings_navbar"
                >
                  Password and Security
                </p>
              </Col>
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className="settings_navbar"
                >
                  Close Accounts
                </p>
              </Col>
            </Row>
            {this.state.profile === true ? <Settings_profile /> : <div></div>}
            {this.state.account === true ? <Settings_account /> : <div></div>}
            {this.state.paymentDetails === true ? (
              <Settings_payment />
            ) : (
              <div></div>
            )}
            {this.state.importData === true ? (
              <Settings_import_data />
            ) : (
              <div></div>
            )}
            {this.state.passSecurity === true ? (
              <Settings_password_security />
            ) : (
              <div></div>
            )}
            {this.state.closeAccounts === true ? (
              <Settings_close_account />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings_home;
