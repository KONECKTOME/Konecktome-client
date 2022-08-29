import React, { Component } from "react";
import "../../../css/Explore/ExploreAddress.css";
import { Row, Col } from "react-bootstrap";
import ExploreInstallationInfo from "./ExploreInstallationInfo";

class ExploreAddress extends Component {
  state = {
    addresses: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    postCode: "",
    userAddress: "",
    addressSelected: false,
    sentSuccess: false,
    sentError: false,
    emptyFields: false,
    addressDetails: {
      buildingName: "",
      postCode: "",
      addressLine1: "",
      addressLine2: "",
      town: "",
      city: "",
      postCode: "",
    },
    currentAddress: false,
    deliveryAddress: false,
    dateOfArrival: "",
    dateOfDeparture: "",
    showAddressHolder: false,
    displayInstallationInfo: false,
    sentSuccessWithDelivery: false,
    timeOutLoader: false,
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
    if (
      this.state.addressDetails.buildingName === "" ||
      this.state.addressDetails.addressLine1 === "" ||
      this.state.addressDetails.town === "" ||
      this.state.addressDetails.city === "" ||
      this.state.dateOfArrival === "" ||
      this.state.dateOfDeparture === ""
    ) {
      this.setState({ emptyFields: true });
      setTimeout(() => this.setState({ emptyFields: false }), 1500);
    } else {
      const response = await fetch(
        "http://localhost:3002/users/update-address",
        {
          method: "POST",
          body: JSON.stringify({
            userId: this.props.userDetails._id,
            addressId: null,
            buildingName: this.state.addressDetails.buildingName,
            addressLine1: this.state.addressDetails.addressLine1,
            addressLine2: this.state.addressDetails.addressLine2,
            town: this.state.addressDetails.town,
            city: this.state.addressDetails.city,
            currentAddress: this.state.currentAddress,
            deliveryAddress: this.state.deliveryAddress,
            postCode: this.state.addressDetails.postCode,
            dateOfArrival: this.fixDateString(this.state.dateOfArrival),
            dateOfDeparture: this.fixDateString(this.state.dateOfDeparture),
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.message === "Address added") {
        this.props.fetchUser();
        this.setState({
          timeOutLoader: true,
          currentAddress: false,
          deliveryAddress: false,
          dateOfArrival: "",
          dateOfDeparture: "",
        });
        setTimeout(() => {
          const findDeliveryAddress =
            this.props.userDetails.addressHistory.filter(
              (item) => item.deliveryAddress === true
            );
          if (findDeliveryAddress.length !== 0) {
            this.setState({ timeOutLoader: false, sentSuccess: true });
            // setTimeout(() => this.setState({ sentSuccess: false }), 1500);
          } else {
            this.setState({
              timeOutLoader: false,
              sentSuccessWithDelivery: true,
            });
          }
        }, 1500);
      } else if (
        details.message ===
        "Date Of Arrival cannot be more than Date Of Departure"
      ) {
        this.setState({ sentError: true });
        setTimeout(() => this.setState({ sentError: false }), 1500);
      }
    }
  };

  getAddressFromPostCode = async () => {
    this.setState({ showAddressHolder: true });
  };

  addNewAddress = () => {
    this.setState({
      addressDetails: {
        buildingName: "",
        postCode: "",
        addressLine1: "",
        addressLine2: "",
        town: "",
        city: "",
        postCode: "",
      },
      dateOfArrival: "",
      dateOfDeparture: "",
      sentSuccess: false,
      sentSuccessWithDelivery: false,
    });
  };

  proceedToInstallationInfo = () => {
    this.setState({
      displayInstallationInfo: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.displayInstallationInfo === true ? (
          <ExploreInstallationInfo
            userId={this.props.userId}
            fetchUser={() => this.props.fetchUser()}
            deal={this.props.deal}
            populateBoughtDeal={(installationDateAndTime) =>
              this.props.populateBoughtDeal(installationDateAndTime)
            }
          />
        ) : (
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
                <Row>
                  <Col lg={6}>
                    <label className="explore-address-label">
                      Check Post code
                    </label>
                    <div id="explore-address-input-holder">
                      <input
                        type="text"
                        placeholder="Enter post code"
                        className="check-post-code"
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
                          <li className="desktop-sub-header2">
                            Select Your Address
                          </li>
                          {this.state.addresses.map((item) => {
                            return (
                              <li className="desktop-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Molestiae ipsum
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </Col>
                  <Col lg={3}>
                    <label className="explore-address-label">
                      Date Of Arrival
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="dateOfArrival"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          dateOfDeparture: e.currentTarget.value,
                        })
                      }
                    />
                  </Col>
                  <Col lg={3}>
                    <label className="explore-address-label">
                      Date Of Departure
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="dateOfDeparture"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          dateOfDeparture: e.currentTarget.value,
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <label className="explore-address-label">
                      Is this is your Delivery Address?
                    </label>
                    <input
                      type="checkbox"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          deliveryAddress: e.target.checked,
                        })
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="explore-address-label">
                      Is this your current address?
                    </label>
                    <input
                      type="checkbox"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          deliveryAddress: e.target.checked,
                        })
                      }
                    />
                  </Col>
                </Row>
                <div
                  className="desktop-big-button"
                  id="explore-send-address"
                  onClick={() => this.getAddressFromPostCode()}
                >
                  <p className="desktop-big-button-text">Save Address</p>
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
                    <label className="explore-address-label">
                      Building Name
                    </label>
                    <input
                      type="text"
                      id="buildingName"
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
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
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
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
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
                      value={this.state.addressDetails.addressLine2}
                      onChange={(e) => this.updateAddressDetails(e)}
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="explore-address-label">Town</label>
                    <input
                      type="text"
                      id="town"
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
                      value={this.state.addressDetails.town}
                      onChange={(e) => this.updateAddressDetails(e)}
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="explore-address-label">City</label>
                    <input
                      type="text"
                      id="city"
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
                      value={this.state.addressDetails.city}
                      onChange={(e) => this.updateAddressDetails(e)}
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="explore-address-label">Post Code</label>
                    <input
                      type="text"
                      id="postCode"
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
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
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
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
                      className={
                        this.props.renderAddressAndUserDetails === true
                          ? "explore-address-input-both"
                          : "explore-address-input"
                      }
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
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          currentAddress: e.target.checked,
                        })
                      }
                    />
                  </Col>
                  <Col lg={6}>
                    <label className="explore-address-label">
                      Click the Box If this is your Delivery Address
                    </label>
                    <input
                      type="checkbox"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          deliveryAddress: e.target.checked,
                        })
                      }
                    />
                  </Col>
                </Row>

                {this.state.emptyFields === true ? (
                  <div
                    className="error-notification-holder"
                    id="expore-address-error"
                  >
                    <p>Input Fields Cannot Be Empty</p>
                  </div>
                ) : null}
                {this.state.sentSuccess === true ? (
                  <div
                    className="success-notification-holder"
                    id="expore-address-error"
                  >
                    <p>
                      Address Has Been Saved,{" "}
                      <span onClick={() => this.addNewAddress()}>
                        You Can Add Another Address{" "}
                      </span>{" "}
                      Or{" "}
                      <span onClick={() => this.proceedToInstallationInfo()}>
                        Click Here To Proceed
                      </span>
                    </p>
                  </div>
                ) : null}
                {this.state.sentSuccessWithDelivery === true ? (
                  <div
                    className="success-notification-holder"
                    id="expore-address-error"
                  >
                    <p>
                      Address Has Been Saved but Delivery Address Required,{" "}
                      <span onClick={() => this.addNewAddress()}>
                        Add Delivery Address Here{" "}
                      </span>{" "}
                    </p>
                  </div>
                ) : null}
                {this.state.sentError === true ? (
                  <div
                    className="error-notification-holder"
                    id="expore-address-error"
                  >
                    <p>Date Of Arrival Cannot Be More Than Date Of Departure</p>
                  </div>
                ) : null}

                {this.state.paymentLoader === true ? (
                  <div id="explore-loading"></div>
                ) : (
                  <p className="desktop-medium-button-text">
                    Proceed To Payment
                  </p>
                )}

                <div
                  className="desktop-big-button"
                  id="explore-send-address"
                  onClick={(e) => this.sendAddress(e)}
                >
                  {this.state.timeOutLoader === true ? (
                    <div id="explore-loading"></div>
                  ) : (
                    <p className="desktop-big-button-text">Save Address</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ExploreAddress;
