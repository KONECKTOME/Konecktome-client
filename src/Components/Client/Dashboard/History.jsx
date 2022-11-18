import React, { Component } from "react";
import "../../../css/Dashboard/History.css";

class History extends Component {
  state = {
    history: [1, 2, 3],
  };

  render() {
    return (
      <div id="hist-wrapper">
        <p className="desktop-sub-header1">Transaction History</p>
        {this.props.history.length !== 0 ? (
          <div>
            {this.props.history
              .reverse()
              .slice(0, 3)
              .map((item) => {
                return (
                  <div className="hist-inner-div">
                    <div id="hist-inner-div-textholder">
                      <p className="desktop-sub-header2">
                        {item.serviceProviderName}
                      </p>
                      <p className="hist-text-date pt-2">
                        {item.dateOfTransaction} | {item.timeOfTransaction}
                      </p>
                      <p className="desktop-text pt-2">{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div id="no-services">
            <p className="desktop-sub-header2">
              You haven't purchased any services yet...
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default History;
