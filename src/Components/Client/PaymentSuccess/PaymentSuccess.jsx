import React from "react";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import { Link, useHistory } from "react-router-dom";

class PaymentSuccess extends React.Component {
  static contextType = UserDetailsContext;

  componentDidMount = () => {
    alert("here");
  };
  goToDashboard = () => {
    this.props.resetBoughtDeal();
  };

  render() {
    return (
      <div className="empty-services-holder">
        <p className="empty-services-text">
          Thank you {this.context.userDetails.firstName}
          For Purchasiddjdjng {this.props.boughtDeal} dhdhd
          <span onClick={() => this.goToDashboard()}>
            Please go back to Dashboard here
          </span>
        </p>
      </div>
    );
  }
}

export default PaymentSuccess;
