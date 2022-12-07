import React, { Component } from "react";
import "../../../css/Explore/ExploreAddress.css";
import { Row, Col } from "react-bootstrap";
import ExploreInstallationInfo from "./ExploreInstallationInfo";
import CrossIcon from "../../SvgIcons/CrossIcon";

class ExploreAddress extends Component {
  state = {
    addresses: [],
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
    checkingPostCodeloader: false,
    postCodeTownFromApi: "",
    postCodeCountyFromApi: "",
    postCodeCheckerDateOfArrival: "",
    postCodeCheckerDateOfDeparture: "",
    postCodeFromPostChecker: "",
    currentAddressFromPostCodeChecker: false,
    deliveryAddressFromPostCodeChecker: false,
    sentSuccessFromPostCodeChecker: false,
    errorFromPostCodeChecker: false,
    emptyFieldsFromPostCodeChecker: false,
  };

  hideAddressHolder = () => {
    this.setState({
      showAddressHolder: false,
      postCode: "",
      checkingPostCodeloader: false,
      postCodeTownFromApi: "",
      postCodeCountyFromApi: "",
      addresses: [],
    });
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

  isValidPostcode = (p) => {
    var postcodeRegEx = /[A-Z]{1,2}[A-Z0-9]{1,2} ?[0-9][A-Z]{2}/i;
    var regexp =
      /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
    return regexp.test(p);
  };

  fetchAddressViaPostCode = async (postCode) => {
    let addresses = [];
    var parameters = {
      key: "8f3ef-722be-b312c-08426",
      postcode: postCode,
      response: "data_formatted",
    };
    this.setState({ showAddressHolder: true, checkingPostCodeloader: true });
    var capitilizePostCode = postCode.toUpperCase();
    if (this.isValidPostcode(capitilizePostCode) == true) {
      var url = "http://pcls1.craftyclicks.co.uk/json/rapidaddress";
      let request = new XMLHttpRequest();
      request.open("POST", url, false);
      request.setRequestHeader("Content-Type", "application/json");
      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 400) {
            // Success!
            let data = JSON.parse(this.responseText);
            addresses.push(data);
          } else {
            throw "HTTP Request Error";
          }
        }
      };

      request.send(JSON.stringify(parameters));
      if (!addresses[0].error_code) {
        this.setState({
          checkingPostCodeloader: false,
          postCodeTownFromApi: addresses[0].town,
          postCodeCountyFromApi: addresses[0].traditional_county,
          addresses: addresses[0].delivery_points,
          postCodeFromPostChecker: postCode,
        });
      } else {
        this.setState({
          checkingPostCodeloader: false,
        });
      }
    }
  };

  // getAddressFromPostCode = async () => {
  //   this.setState({ showAddressHolder: true });
  // };

  selectPostCode = (line1, line2, town, county) => {
    if (!line2) {
      let selectedAddress = line1 + "," + " " + town + "," + " " + county;
      this.setState({ postCode: selectedAddress, showAddressHolder: false });
    } else {
      let selectedAddress =
        line1 + "," + " " + line2 + "," + " " + town + "," + " " + county;
      this.setState({ postCode: selectedAddress, showAddressHolder: false });
    }
  };

  sendAddress = async (e, fromPostCodeChecker) => {
    e.preventDefault();
    if (fromPostCodeChecker) {
      if (
        this.state.postCodeCheckerDateOfArrival === "" ||
        this.state.postCodeCheckerDateOfDeparture === "" ||
        this.state.postCode === ""
      ) {
        this.setState({ emptyFieldsFromPostCodeChecker: true });
        setTimeout(
          () => this.setState({ emptyFieldsFromPostCodeChecker: false }),
          1500
        );
      } else {
        let addressFromPostCodeChecker = this.state.postCode.split(",");
        let addressline2FromPostCodeChecker = "";
        addressFromPostCodeChecker[2] !== undefined
          ? (addressline2FromPostCodeChecker = addressFromPostCodeChecker[2])
          : (addressline2FromPostCodeChecker = "");
        const response = await fetch(
          "https://konecktomebackend.herokuapp.com/users/update-address",
          {
            method: "POST",
            body: JSON.stringify({
              userId: this.props.userDetails._id,
              addressId: null,
              buildingName: "",
              addressLine1:
                addressFromPostCodeChecker[0] + addressFromPostCodeChecker[1],
              addressLine2: addressline2FromPostCodeChecker.trim(),
              town: addressFromPostCodeChecker[3].trim(),
              city: addressFromPostCodeChecker[4].trim(),
              currentAddress: this.state.currentAddressFromPostCodeChecker,
              deliveryAddress: this.state.deliveryAddressFromPostCodeChecker,
              postCode: this.state.postCodeFromPostChecker,
              dateOfArrival: this.fixDateString(
                this.state.postCodeCheckerDateOfArrival
              ),
              dateOfDeparture: this.fixDateString(
                this.state.postCodeCheckerDateOfDeparture
              ),
            }),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const details = await response.json();
        if (details.message === "Address added") {
          this.setState({ sentSuccessFromPostCodeChecker: true });
          setTimeout(
            () => this.setState({ sentSuccessFromPostCodeChecker: false }),
            1500
          );
        } else if (
          details.message ===
          "Date Of Arrival cannot be more than Date Of Departure"
        ) {
          this.setState({ errorFromPostCodeChecker: true });
          setTimeout(
            () => this.setState({ errorFromPostCodeChecker: false }),
            1500
          );
        }
      }
    } else {
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
          "https://konecktomebackend.herokuapp.com/users/update-address",
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
    }
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
      <div className="mt-5">
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
                  <Col lg={6} className="position-relative">
                    <label className="explore-address-label">
                      Check Post code
                    </label>
                    <div id="explore-address-input-holder">
                      <input
                        type="text"
                        placeholder="Enter post code"
                        className="check-post-code"
                        onKeyUp={(e) =>
                          this.fetchAddressViaPostCode(e.currentTarget.value)
                        }
                        value={this.state.postCode}
                        onChange={(e) =>
                          this.setState({
                            postCode: e.currentTarget.value,
                          })
                        }
                      />
                      {this.state.postCode && (
                        <div
                          id="explore-address-close-btn"
                          onClick={() => this.hideAddressHolder()}
                        >
                          <CrossIcon size="25" />
                        </div>
                      )}
                    </div>
                    {this.state.showAddressHolder === true &&
                    this.state.postCode ? (
                      <div id="address-dropdown-holder">
                        {this.state.checkingPostCodeloader === true ? (
                          <div id="explore-address-post-code-loader">
                            <div id="reset-pin-spinner-holder">
                              <div id="reset-pin-spinner"></div>
                            </div>
                            <div id="reset-pin-spinner-holder">
                              <p id="settings_modal_header">Fetching...</p>
                            </div>
                          </div>
                        ) : (
                          <>
                            {this.state.addresses.length !== 0 ? (
                              <ul>
                                <li className="desktop-sub-header2">
                                  Select Your Address
                                </li>
                                {this.state.addresses.map((item) => {
                                  return (
                                    <li
                                      className="desktop-text"
                                      onClick={() =>
                                        this.selectPostCode(
                                          item.line_1,
                                          item.line_2,
                                          this.state.postCodeTownFromApi,
                                          this.state.postCodeCountyFromApi
                                        )
                                      }
                                    >
                                      {item.line_1}, {item.line_2},
                                      {this.state.postCodeTownFromApi},{" "}
                                      {this.state.postCodeCountyFromApi}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : (
                              <div id="explore-address-post-code-loader">
                                <div id="reset-pin-spinner-holder">
                                  <p id="settings_modal_header">
                                    Oops, post code not found
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ) : null}
                  </Col>
                  <Col lg={3} md={6}>
                    <label className="explore-address-label">
                      Date Of Arrival
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="postCodeCheckerDateOfArrival"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          postCodeCheckerDateOfArrival: e.currentTarget.value,
                        })
                      }
                    />
                  </Col>
                  <Col lg={3} md={6}>
                    <label className="explore-address-label">
                      Date Of Departure
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="postCodeCheckerDateOfDeparture"
                      className="explore-address-input-both"
                      onChange={(e) =>
                        this.setState({
                          postCodeCheckerDateOfDeparture: e.currentTarget.value,
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div id="explore-compare-holder">
                      <label for="compare" id="compare-label">
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            this.setState({
                              deliveryAddressFromPostCodeChecker:
                                e.target.checked,
                            })
                          }
                        />

                        <span
                          id="input-compare-text"
                          className="explore-address-label"
                        >
                          Is this is your Delivery Address?
                        </span>
                      </label>
                    </div>
                  </Col>
                  <Col md={6}>
                    <label for="compare" id="compare-label">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          this.setState({
                            currentAddressFromPostCodeChecker: e.target.checked,
                          })
                        }
                      />

                      <span
                        id="input-compare-text"
                        className="explore-address-label"
                      >
                        Is this your current address?
                      </span>
                    </label>
                  </Col>
                </Row>
                <div className="mt-5">
                  {this.state.emptyFieldsFromPostCodeChecker === true ? (
                    <div
                      className="error-notification-holder"
                      id="expore-address-error"
                    >
                      <p>Input Fields Cannot Be Empty</p>
                    </div>
                  ) : null}
                  {this.state.errorFromPostCodeChecker === true ? (
                    <div
                      className="error-notification-holder"
                      id="expore-address-error"
                    >
                      <p>
                        Date Of Arrival Cannot Be More Than Date Of Departure
                      </p>
                    </div>
                  ) : null}
                  {this.state.sentSuccessFromPostCodeChecker === true ? (
                    <div
                      className="success-notification-holder"
                      id="expore-address-error"
                    >
                      <p>Address Saved</p>
                    </div>
                  ) : null}
                  <div
                    className="desktop-big-button"
                    id="explore-send-address"
                    onClick={(e) => this.sendAddress(e, true)}
                  >
                    <p className="desktop-big-button-text">Save Address</p>
                  </div>
                </div>
              </form>
            </div>

            <div id="manual-address-section">
              <div id="or-holder">
                <p className="desktop-sub-header2">Enter Address Manually</p>
              </div>
              <form>
                <Row>
                  <Col md={6}>
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
                  <Col md={6}>
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
                  <Col md={6}>
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
                  <Col md={6}>
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
                  <Col md={6}>
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
                  <Col md={6}>
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
                  <Col md={6}>
                    <label className="explore-address-label">
                      Date Of Arrival
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="dateOfArrival"
                      value={this.state.dateOfArrival}
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
                  <Col md={6}>
                    <label className="explore-address-label">
                      Date Of Departure
                    </label>
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      id="dateOfDeparture"
                      value={this.state.dateOfDeparture}
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
                  <Col md={6}>
                    <label for="compare" id="compare-label">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          this.setState({
                            currentAddress: e.target.checked,
                          })
                        }
                      />

                      <span
                        id="input-compare-text"
                        className="explore-address-label"
                      >
                        Is this is your Current Address?
                      </span>
                    </label>
                  </Col>
                  <Col md={6}>
                    <label
                      for="compare"
                      id="compare-label"
                      className="delivery-address-checkbox"
                    >
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          this.setState({
                            deliveryAddress: e.target.checked,
                          })
                        }
                      />

                      <span
                        id="input-compare-text"
                        className="explore-address-label"
                      >
                        Is this is your Delivery Address?
                      </span>
                    </label>
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
                  onClick={(e) => this.sendAddress(e, false)}
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
