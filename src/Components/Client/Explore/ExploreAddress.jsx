import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class ExploreAddress extends Component {
  state = {
    addresses: [],
    postCode: "",
    userAddress: "",
    addressSelected: false,
    sentSuccess: false,
    addressDetails: {
      buildingName: "",
      postCode: "",
      addressLine1: "",
      addressLine2: "",
      town: "",
      city: "",
      currentAddress: null,
      postCode: "",
    },
    dateOfArrival: "",
    dateOfDeparture: "",
  };

  updateAddressDetails = (e) => {
    const addressDetails = this.state.addressDetails;
    const id = e.currentTarget.id;
    addressDetails[id] = e.currentTarget.value;
    this.setState({ addressDetails });
  };

  fixDateString = (dateToBeFixed) => {
    const arr = dateToBeFixed.split("-");

    // let year = arr[0].split("")[2] + arr[0].split("")[3];
    // const dateStringNeeded = year + "-" + arr[1] + "-" + arr[2];
    return arr;
  };

  sendAddress = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3002/users/update-address", {
      method: "POST",
      body: JSON.stringify({
        userId: this.props.userId,
        addressId: this.props.addressId,
        buildingName: this.state.addressDetails.buildingName,
        addressLine1: this.state.addressDetails.addressLine1,
        addressLine2: this.state.addressDetails.addressLine2,
        town: this.state.addressDetails.town,
        city: this.state.addressDetails.city,
        currentAddress: false,
        postCode: this.state.addressDetails.postCode,
        dateOfArrival: this.fixDateString(this.state.dateOfArrival),
        dateOfDeparture: this.fixDateString(this.state.dateOfDeparture),
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const details = await response.json();
    if (details.message === "Address added") {
      alert("success");
      this.props.fetchUser();
    } else if (
      details.message ===
      "Date Of Arrival cannot be more than Date Of Departure"
    ) {
      alert("error");
    }
  };
  render() {
    return (
      <div>
        {this.state.sentSuccess === true ? (
          <div id="notification-holder">
            <p className="desktop-big-button-text modal-button-text">
              Yay, address added successfully !!!
            </p>
          </div>
        ) : null}
        <form>
          <input
            type="text"
            placeholder="Enter post code"
            id="address-modal-message"
            value={this.state.postCode}
            onChange={(e) =>
              this.setState({
                postCode: e.currentTarget.value,
              })
            }
          />
          <div id="address-modal-button">
            <p className="desktop-big-button-text">Check postcode</p>
          </div>
        </form>
        <div>
          <div id="or-holder">
            <p className="desktop-sub-header2">Enter Address Manually</p>
          </div>
        </div>
        <div id="">
          <div className="settings_password_security_form_inner_wrapper">
            <form>
              <input
                type="text"
                placeholder="Phone"
                id="phone"
                value={this.state.addressDetails.buildingName}
                onChange={(e) => this.updateUserDetails(e)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreAddress;
