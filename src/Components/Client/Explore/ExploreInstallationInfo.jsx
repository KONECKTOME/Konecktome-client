import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../../../css/Explore/Explore_details.css";

class ExploreInstallationInfo extends Component {
  state = {
    installationDatesAndTime: [
      "1  Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "6 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "7 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "8 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "9 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "10 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "11 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    ],
    selectedInstallationDateAndTime: "",
    paymentLoader: false,
    installationDatesAndTimeNotSelected: false,
  };

  proceedToPayment = async () => {
    if (this.state.selectedInstallationDateAndTime === "") {
      this.setState({ installationDatesAndTimeNotSelected: true });
      setTimeout(
        () => this.setState({ installationDatesAndTimeNotSelected: false }),
        1500
      );
    } else {
      this.setState({ paymentLoader: true });
      localStorage.setItem(
        "installationDateAndTime",
        this.state.selectedInstallationDateAndTime
      );

      const productNameConcat =
        this.props.deal[0].dealName +
        " " +
        "By" +
        " " +
        this.props.deal[0].companyName;
      const response = await fetch(
        `http://localhost:3003/payment/create-product-price`,
        {
          method: "POST",
          body: JSON.stringify({
            userId: this.props.userId,
            dealId: this.props.deal[0]._id,
            productName: productNameConcat,
            subscribePrice: this.props.deal[0].dealPrice,
            oneOffprice: this.props.deal[0].dealContractPlans[0].setUpFee,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.url) {
        window.location.href = details.url;
        this.setState({ paymentLoader: false });
      }
    }
  };

  render() {
    return (
      <div id="explore-installation-wrapper">
        <p className="desktop-header">
          Please Select Installation Date And Time
        </p>
        <p
          id={
            this.state.selectedInstallationDateAndTime === ""
              ? "hideSelectedDateAndTime"
              : "selected-date-time"
          }
        >
          {this.state.selectedInstallationDateAndTime}
        </p>
        <Row>
          {this.state.installationDatesAndTime.map((item) => {
            return (
              <Col
                lg={6}
                id="installation-data-time-col"
                onClick={() =>
                  this.setState({ selectedInstallationDateAndTime: item })
                }
              >
                <div
                  id="explore-installation-button"
                  className="desktop-medium-button"
                >
                  <p
                    className="desktop-medium-button-text"
                    id="explore-installation-button-text"
                  >
                    {item}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
        {this.state.installationDatesAndTimeNotSelected === true ? (
          <div className="error-notification-holder">
            <p>Please Select Installation Date And Time</p>
          </div>
        ) : null}
        <div
          className="desktop-small-button"
          id="explore-installation-payment-btn"
          onClick={() => this.proceedToPayment()}
        >
          {this.state.paymentLoader === true ? (
            <div id="explore-loading"></div>
          ) : (
            <p className="desktop-medium-button-text">Proceed To Payment</p>
          )}
        </div>
      </div>
    );
  }
}

export default ExploreInstallationInfo;
