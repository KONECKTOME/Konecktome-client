import React from "react";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import "../../../css/PaymentSuccess/PaymentSuccess.css";
import verifyIcon from "../../../Assets/icons8-ok-100.png";

class PaymentSuccess extends React.Component {
  static contextType = UserDetailsContext;

  // componentDidMount = () => {
  //   alert("here");
  // };

  goBackToDashBoard = () => {
    this.props.history.push("/dashboard/" + this.props.match.params.userid);
  };

  render() {
    return (
      <>
        <div id="payment-success-holder">
          <div>
            <div id="payment-success-image-holder">
              <img src={verifyIcon} />
            </div>
            <p id="payment-success-header">
              Thanks Quadri, your payment for 400mpdb bdbd By Zoom was
              successful!
            </p>
            <div id="payment-success-tran-details">
              <div>
                <p className="desktop-text">Date</p>
                <p className="desktop-text">Monthly Subscription Price</p>
                <p className="desktop-text">Set Up Fee</p>
                <p className="desktop-text">Total</p>
              </div>
              <div>
                <p className="desktop-text">22-09-22</p>
                <p className="desktop-text">£16</p>
                <p className="desktop-text">£16</p>
                <p className="desktop-text">£32</p>
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
      </>
    );
  }
}

export default PaymentSuccess;
