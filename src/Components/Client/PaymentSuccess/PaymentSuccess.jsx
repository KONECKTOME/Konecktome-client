import React, { useContext } from "react";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import { Link, useHistory } from "react-router-dom";

const PaymentSuccess = () => {
  const { userDetails } = useContext(UserDetailsContext);
  const history = useHistory();
  const goToDashboard = () => {
    this.props.resetBoughtDeal();
    history.push("/dashboard/" + userDetails._id);
  };
  {
    return (
      <div className="empty-services-holder">
        <p className="empty-services-text">
          Thank you {userDetails.firstName}
          For Purchasiddjdjng {this.props.boughtDeal} dhdhd
          <span onClick={() => goToDashboard()}>
            Please go back to Dashboard here
          </span>
        </p>
      </div>
    );
  }
};

export default PaymentSuccess;
