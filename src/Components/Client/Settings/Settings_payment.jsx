import React, { Component } from "react";
import "../../../css/Settings/Settings_payment.css";
import penc_edit_icon from "../../../Assets/pencil_icon.svg";
import AddressModal from "../AddressModal/AddressModal";
class Settings_payment extends React.Component {
  state = {
    editStatus: false,
    addressId: "",
  };

  handleOpenEditIcon = (id) => {
    this.setState({
      editStatus: !this.state.editStatus,
      addressId: id,
    });
  };
  render() {
    return (
      <>
        <div id="new-address-btn" onClick={() => this.handleOpenEditIcon()}>
          <div className="desktop-big-button">
            <p className="desktop-big-button-text">Add New Address</p>
          </div>
        </div>
        {this.props.userDetails.addressHistory.length === 0 ? (
          <div className="empty-services-holder">
            <p className="empty-services-text">
              Your Address List is empty, Please Add Address with the button
              above
            </p>
          </div>
        ) : (
          <div className="cards">
            {this.props.userDetails.addressHistory.map((addressItem) => {
              return (
                <div className="settings_payment_boxes card">
                  <div id="settings_payment_box_header">
                    <p>Main Address</p>
                    <img
                      src={penc_edit_icon}
                      onClick={(id) => this.handleOpenEditIcon(addressItem._id)}
                    />
                  </div>
                  <hr></hr>
                  <div id="settings_payment_user_details">
                    <div>
                      <div className="settings_payment_user_details_inner_div">
                        <p className="settings_payment_user_details_label">
                          House Number
                        </p>
                        <p className="settings_payment_user_details_response">
                          {addressItem.buildingName}
                        </p>
                      </div>
                      <div className="settings_payment_user_details_inner_div">
                        <p className="settings_payment_user_details_label">
                          Post Code
                        </p>
                        <p className="settings_payment_user_details_response">
                          {addressItem.postCode}
                        </p>
                      </div>
                      <div className="settings_payment_user_details_inner_div">
                        <p className="settings_payment_user_details_label">
                          Duration Of Stay
                        </p>
                        <p className="settings_payment_user_details_response">
                          {addressItem.durationOfStay}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="settings_payment_user_details_inner_div">
                          <p className="settings_payment_user_details_label">
                            Address line 1
                          </p>
                          <p className="settings_payment_user_details_response">
                            {addressItem.addressLine1}
                          </p>
                        </div>
                        <div className="settings_payment_user_details_inner_div">
                          <p className="settings_payment_user_details_label">
                            Town
                          </p>
                          <p className="settings_payment_user_details_response">
                            {addressItem.town}
                          </p>
                        </div>
                        <div className="settings_payment_user_details_inner_div">
                          <p className="settings_payment_user_details_label">
                            Country
                          </p>
                          <p className="settings_payment_user_details_response">
                            This is my address
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {this.state.editStatus === true ? (
          <AddressModal
            hideAddressModal={() => this.handleOpenEditIcon()}
            show={this.state.editStatus}
            userId={this.props.userDetails._id}
            fetchUser={() => this.props.fetchUser()}
            addressId={this.state.addressId}
          />
        ) : null}
      </>
    );
  }
}

export default Settings_payment;
