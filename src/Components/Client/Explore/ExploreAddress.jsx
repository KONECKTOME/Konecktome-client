import React, { Component } from "react";
import "../../../css/Explore/ExploreAddress.css";
import { Row, Col } from "react-bootstrap";

class ExploreAddress extends Component {
  state = {
    addresses: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    currentAddress: false,
    dateOfArrival: "",
    dateOfDeparture: "",
    showAddressHolder: false,
  };

  hideAddressHolder = () => {
    this.setState({ showAddressHolder: false });
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
        addressId: null,
        buildingName: this.state.addressDetails.buildingName,
        addressLine1: this.state.addressDetails.addressLine1,
        addressLine2: this.state.addressDetails.addressLine2,
        town: this.state.addressDetails.town,
        city: this.state.addressDetails.city,
        currentAddress: this.state.currentAddress,
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

  getAddressFromPostCode = async () => {
    this.setState({ showAddressHolder: true });
  };
  render() {
    return (
      <div>
        <div>
          {this.state.sentSuccess === true ? (
            <div id="notification-holder">
              <p className="desktop-big-button-text modal-button-text">
                Yay, address added successfully !!!
              </p>
            </div>
          ) : null}
          <div id="postcode-checker-holder">
            <form>
              <label className="explore-address-label">Check Post code</label>
              <div id="explore-address-input-holder">
                <input
                  type="text"
                  placeholder="Enter post code"
                  // value={this.state.postCode}
                  // onChange={(e) =>
                  //   this.setState({
                  //     postCode: e.currentTarget.value,
                  //   })
                  // }
                />
                <div
                  id="explore-address-close-btn"
                  onClick={() => this.hideAddressHolder()}
                >
                  X
                </div>
              </div>
              {this.state.showAddressHolder === true ? (
                <div id="address-dropdown-holder">
                  <ul>
                    <li className="desktop-sub-header2">Select Your Address</li>
                    {this.state.addresses.map((item) => {
                      return (
                        <li className="desktop-text">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Molestiae ipsum
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
              <div
                className="desktop-big-button"
                id="explore-address-btn"
                onClick={() => this.getAddressFromPostCode()}
              >
                <p className="desktop-big-button-text">Check postcode</p>
              </div>
            </form>
          </div>
          <div>
            <div id="or-holder">
              <p className="desktop-sub-header2">Enter Address Manually</p>
            </div>
          </div>
          <div>
            <form>
              <Row>
                <Col lg={6}>
                  <label className="explore-address-label">Building Name</label>
                  <input
                    type="text"
                    id="buildingName"
                    className="explore-address-input"
                    value={this.state.addressDetails.buildingName}
                    onChange={(e) => this.updateAddressDetails(e)}
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    id="addressLine1"
                    className="explore-address-input"
                    value={this.state.addressDetails.addressLine1}
                    onChange={(e) => this.updateAddressDetails(e)}
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="addressLine2"
                    className="explore-address-input"
                    value={this.state.addressDetails.addressLine2}
                    onChange={(e) => this.updateAddressDetails(e)}
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">Town</label>
                  <input
                    type="text"
                    id="town"
                    className="explore-address-input"
                    value={this.state.addressDetails.town}
                    onChange={(e) => this.updateAddressDetails(e)}
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">City</label>
                  <input
                    type="text"
                    id="city"
                    className="explore-address-input"
                    value={this.state.addressDetails.city}
                    onChange={(e) => this.updateAddressDetails(e)}
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">Post Code</label>
                  <input
                    type="text"
                    id="postCode"
                    className="explore-address-input"
                    value={this.state.addressDetails.postCode}
                    onChange={(e) => this.updateAddressDetails(e)}
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">
                    Date Of Arrival
                  </label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    id="dateOfArrival"
                    className="explore-address-input"
                    onChange={(e) =>
                      this.setState({
                        dateOfArrival: e.currentTarget.value,
                      })
                    }
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">
                    Date Of Departure
                  </label>
                  <input
                    type="date"
                    placeholder="dd-mm-yyyy"
                    id="dateOfArrival"
                    className="explore-address-input"
                    onChange={(e) =>
                      this.setState({
                        dateOfDeparture: e.currentTarget.value,
                      })
                    }
                  />
                </Col>
                <Col lg={6}>
                  <label className="explore-address-label">
                    Click the Box If this is your current address
                  </label>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      this.setState({
                        currentAddress: e.target.checked,
                      })
                    }
                  />
                </Col>
              </Row>
              <div
                className="desktop-big-button"
                id="explore-send-address"
                onClick={(e) => this.sendAddress(e)}
              >
                <p className="desktop-big-button-text">Save Address</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExploreAddress;
