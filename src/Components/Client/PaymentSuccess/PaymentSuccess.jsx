import React from "react";
import { UserDetailsContext } from "../Context/UserDetailsContext";

class PaymentSuccess extends React.Component {
  static contextType = UserDetailsContext;

  componentDidMount = () => {
    alert("here");
  };

  render() {
    return (
      <div className="empty-services-holder">
        <p className="empty-services-text">dhh</p>
      </div>
    );
  }
}

export default PaymentSuccess;
