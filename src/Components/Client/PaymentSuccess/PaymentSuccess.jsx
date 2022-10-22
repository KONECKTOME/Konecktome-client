import React from "react";
import "../../../css/PaymentSuccess/PaymentSuccess.css";
import verifyIcon from "../../../Assets/icons8-ok-100.png";
import Loader from "../Loader/Loader";
import SmallLoader from "../Loader/SmallLoader";

class PaymentSuccess extends React.Component {
  state = {
    transactionDetails: {},
    deliveryAddress: "",
    loading: true,
  };
  componentDidMount = async () => {
    console.log(this.props.installationDateAndTime);
    const response = await fetch(
      `http://localhost:3003/users/update-transaction-history`,
      {
        method: "POST",
        body: JSON.stringify({
          userId: this.props.match.params.userid,
          dealId: this.props.match.params.dealId,
          installationDateAndTime: this.props.installationDateAndTime,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    console.log("tras", details);
    if (details.message) {
      this.setState({
        transactionDetails: details.message,
        loading: false,
      });
      this.setState({
        deliveryAddress:
          this.state.transactionDetails.deliveryAddress[0].addressLine1 +
          " " +
          this.state.transactionDetails.deliveryAddress[0].addressLine2 +
          " " +
          this.state.transactionDetails.deliveryAddress[0].town +
          " " +
          this.state.transactionDetails.deliveryAddress[0].city +
          " " +
          this.state.transactionDetails.deliveryAddress[0].postCode,
      });
      this.props.resetBoughtDeal();
    }
  };

  goBackToDashBoard = () => {
    this.props.history.push("/dashboard/" + this.props.match.params.userid);
  };

  render() {
    return (
      <>
        {this.state.loading === true ? (
          <SmallLoader />
        ) : (
          <div id="payment-success-holder">
            <div>
              <div id="payment-success-image-holder">
                <img src={verifyIcon} />
              </div>
              <p id="payment-success-header">
                Thanks {this.props.userDetails.firstName}, your payment for{" "}
                {this.state.transactionDetails.dealName} By {""}
                {this.state.transactionDetails.serviceProviderName} was
                successful!
              </p>
              <div id="payment-success-tran-details">
                <div>
                  <p className="desktop-text">Date</p>
                  <p className="desktop-text">Installation Date And Time</p>
                  <p className="desktop-text">Monthly Subscription Price</p>
                  <p className="desktop-text">Set Up Fee</p>
                  <p className="desktop-text">Status</p>
                  <p className="desktop-text">Delivery Address</p>
                  <p className="desktop-text">Total</p>
                </div>
                <div>
                  <p className="desktop-text">22-09-22</p>
                  <p className="desktop-text">
                    {this.props.installationDateAndTime}
                  </p>
                  <p className="desktop-text">
                    £{this.state.transactionDetails.subscriptionPrice}
                  </p>
                  <p className="desktop-text">
                    £{this.state.transactionDetails.oneOffPrice}
                  </p>
                  <p className="desktop-text">
                    {this.state.transactionDetails.status}
                  </p>
                  <p className="desktop-text"> {this.state.deliveryAddress}</p>
                  <p className="desktop-text">
                    £{this.state.transactionDetails.total}
                  </p>
                </div>
              </div>
              <div
                id="payment-success-image-holder"
                onClick={() => this.goBackToDashBoard()}
              >
                <div>
                  <p className="desktop-medium-button-text">
                    Go Back To Dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default PaymentSuccess;
