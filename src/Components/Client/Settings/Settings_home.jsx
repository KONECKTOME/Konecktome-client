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
import { UserDetailsContext } from "../Context/UserDetailsContext";
class Settings_home extends React.Component {
  static contextType = UserDetailsContext;

  state = {
    showModal: true,
    profile: true,
    account: false,
    paymentDetails: false,
    importData: false,
    passSecurity: false,
    closeAccounts: false,
    activeClass: false,
    userDetails: {},
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
    } else if (event.target.innerText === "Address Details") {
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

  componentDidMount = async () => {
    const id = this.props.match.params.userid;
    const response = await fetch(
      `http://localhost:3002/users/get-user-by-id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    this.setState({ userDetails });
  };

  render() {
    return (
      <div>
        {this.state.showModal === true ? (
          <SettingsModal
            modalState={this.state.showModal}
            hideModal={() => this.hideModal()}
            userEmail={this.context.userDetails.email}
            userId={this.context.userDetails._id}
            userPin={this.context.userDetails.pin}
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
                  className={
                    this.state.profile === true
                      ? "settings_navbar_active"
                      : "settings_navbar"
                  }
                >
                  Profile
                </p>
              </Col>
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className={
                    this.state.paymentDetails === true
                      ? "settings_navbar_active"
                      : "settings_navbar"
                  }
                >
                  Address Details
                </p>
              </Col>
              {/* <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className={
                    this.state.account === true
                      ? "settings_navbar_active"
                      : "settings_navbar"
                  }
                >
                  Accounts
                </p>
              </Col> */}

              {/* <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className={
                    this.state.importData === true
                      ? "settings_navbar_active"
                      : "settings_navbar"
                  }
                >
                  Import Data
                </p>
              </Col> */}
              <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className={
                    this.state.passSecurity === true
                      ? "settings_navbar_active"
                      : "settings_navbar"
                  }
                >
                  Password and Security
                </p>
              </Col>
              {/* <Col>
                <p
                  onClick={(e) => this.alternateNav(e)}
                  className={
                    this.state.closeAccounts === true
                      ? "settings_navbar_active"
                      : "settings_navbar"
                  }
                >
                  Close Accounts
                </p>
              </Col> */}
            </Row>
            <hr></hr>
            {this.state.profile === true ? (
              <Settings_profile
                userDetails={this.context.userDetails}
                fetchUser={() => this.props.fetchUser()}
              />
            ) : null}
            {this.state.account === true ? <Settings_account /> : null}
            {this.state.paymentDetails === true ? (
              <Settings_payment
                userDetails={this.context.userDetails}
                fetchUser={() => this.props.fetchUser()}
              />
            ) : null}
            {this.state.importData === true ? <Settings_import_data /> : null}
            {this.state.passSecurity === true ? (
              <Settings_password_security
                userEmail={this.context.userDetails.email}
              />
            ) : null}
            {this.state.closeAccounts === true ? (
              <Settings_close_account />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings_home;
