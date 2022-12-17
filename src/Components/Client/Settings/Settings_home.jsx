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
import PinModal from "../Dashboard/PinModal";
class Settings_home extends React.Component {
  static contextType = UserDetailsContext;

  state = {
    showModal: false,
    profile: true,
    account: false,
    paymentDetails: false,
    importData: false,
    passSecurity: false,
    closeAccounts: false,
    activeClass: false,
    userDetails: {},
    showSetPinModal: true,
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
      `https://konecktomebackend.herokuapp.com/users/get-user-by-id/${id}`,
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

  showPinModal = () => {
    this.setState({ showSetPinModal: true });
  };
  hidePinModal = () => {
    this.setState({ showSetPinModal: false });
  };

  render(props) {
    return (
      <div>
        {/* <div>
          {this.context.userDetails.pinHasBeenSet === false ? (
            <PinModal
              modalState={this.state.showSetPinModal}
              hidePinModal={() => this.hidePinModal()}
              email={this.context.userDetails.email}
              userId={this.context.userDetails._id}
              fetchUser={() => this.props.fetchUser()}
            />
          ) : (
            <>
              {this.state.showModal === true ? (
                <SettingsModal
                  modalState={this.state.showModal}
                  hideModal={() => this.hideModal()}
                  userEmail={this.context.userDetails.email}
                  userId={this.context.userDetails._id}
                  userPin={this.context.userDetails.pin}
                  userDetails={this.context.userDetails}
                  {...props}
                />
              ) : null}
            </>
          )}
        </div> */}
        <div id="settings_home_wrapper">
          <p id="settings_home_header">Settings</p>
          <div id="settings_home_subcontainer">
            <div id="action-wrapper">
              <div id="settings_home_row" className="mx-0">
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                {/* <div>
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
              </div> */}

                {/* <div>
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
              </div> */}

                {/* <div>
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
              </div> */}
              </div>
            </div>
            <hr className="mt-4"></hr>
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
