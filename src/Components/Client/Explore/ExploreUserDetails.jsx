import React, { Component } from "react";
import "../../../css/Explore/Explore_details.css";
import ExploreAddress from "./ExploreAddress";
import ExploreInstallationInfo from "./ExploreInstallationInfo";

class ExploreUserDetails extends Component {
  state = {
    userDetails: {
      phone: "",
      profession: "",
      gender: "",
    },
    dob: "",
    emptyfields: false,
    success: false,
    error: false,
    showAddress: false,
    paymentLoader: false,
    displayInstallationInfo: false,
    lessThan18: false,
  };

  editProfessionAndDOB = async (e) => {
    e.preventDefault();

    if (
      this.state.userDetails.profession === "" ||
      this.state.userDetails.phone === "" ||
      this.state.userDetails.gender === ""
    ) {
      this.setState({ emptyfields: true });
      setTimeout(() => this.setState({ emptyfields: false }), 1500);
    } else {
      const response = await fetch(
        `https://konecktomebackend.herokuapp.com/users/update-dob-profession`,
        {
          method: "PUT",
          body: JSON.stringify({
            userId: this.props.userId,
            dob: this.state.dob,
            profession: this.state.userDetails.profession,
            phone: this.state.userDetails.phone,
            gender: this.state.userDetails.gender,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.message === "User profession and co updated!") {
        this.props.fetchUser();
        if (this.props.renderAddressAndUserDetails === true) {
          this.setState({
            success: true,
            userDetails: {
              phone: "",
              profession: "",
              gender: "",
              dob: "",
            },
          });
          setTimeout(
            () => this.setState({ success: false, showAddress: true }),
            1500
          );
        } else {
          this.setState({ displayInstallationInfo: true });
        }
      } else if (details.message === "ERROR!") {
        this.setState({
          error: true,
        });
        setTimeout(() => this.setState({ error: false }), 1500);
      } else if (details.message === "Age Cannot Be Less Than 18") {
        this.setState({
          lessThan18: true,
        });
        setTimeout(() => this.setState({ lessThan18: false }), 1500);
      }
    }
  };

  updateUserDetails = (e) => {
    const userDetails = this.state.userDetails;
    const id = e.currentTarget.id;
    userDetails[id] = e.currentTarget.value;
    this.setState({ userDetails });
  };

  render() {
    return (
      <>
        {this.state.displayInstallationInfo === true ? (
          <ExploreInstallationInfo
            userId={this.props.userId}
            userDetails={this.props.userDetails}
            fetchUser={() => this.props.fetchUser()}
            deal={this.props.deal}
          />
        ) : (
          <div>
            {this.state.showAddress === true ? (
              <ExploreAddress
                userDetails={this.props.userDetails}
                fetchUser={() => this.props.fetchUser()}
              />
            ) : (
              <div>
                <div id="settings_password_security_wrapper">
                  <div id="settings_password_security_sub_wrapper">
                    <p id="settings_password_security_header_text">
                      PLEASE UPDATE DETAILS
                    </p>
                  </div>
                </div>
                <div id="explore-more-info-user-details-holder">
                  <div className="settings_password_security_form_inner_wrapper">
                    <form>
                      <input
                        type="text"
                        placeholder="Phone"
                        id="phone"
                        value={this.state.userDetails.phone}
                        onChange={(e) => this.updateUserDetails(e)}
                      />
                      <input
                        type="text"
                        placeholder="Profession"
                        id="profession"
                        value={this.state.userDetails.profession}
                        onChange={(e) => this.updateUserDetails(e)}
                      />
                      <input
                        type="text"
                        placeholder="Gender"
                        id="gender"
                        value={this.state.userDetails.gender}
                        onChange={(e) => this.updateUserDetails(e)}
                      />
                      <input
                        type="date"
                        placeholder="dd-mm-yyyy"
                        id="dob"
                        value={this.state.dob}
                        onChange={(e) =>
                          this.setState({
                            dob: e.currentTarget.value,
                          })
                        }
                      />
                    </form>
                    {this.state.success === true ? (
                      <div className="password-success-notification-holder">
                        <p>Details Updated</p>
                      </div>
                    ) : null}
                    {this.state.error === true ? (
                      <div className="password-error-notification-holder">
                        <p>Incorrect Password</p>
                      </div>
                    ) : null}
                    {this.state.emptyfields === true ? (
                      <div className="password-error-notification-holder">
                        <p>Input Fields Cannot be EMpty</p>
                      </div>
                    ) : null}
                    {this.state.lessThan18 === true ? (
                      <div className="password-error-notification-holder">
                        <p>Age Cannot Be Less Than 18</p>
                      </div>
                    ) : null}
                    <div
                      className="desktop-big-button"
                      onClick={(e) => this.editProfessionAndDOB(e)}
                    >
                      <p className="desktop-big-button-text">Update Details</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default ExploreUserDetails;
