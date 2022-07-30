import React, { Component } from "react";
import "../../../css/Dashboard/History.css";

class History extends Component {
  state = {};

  render() {
    return (
      <div id="hist-wrapper">
        <p className="desktop-sub-header1">Transaction History</p>
        {this.props.history.length !== 0 ? (
          <div>
            {this.props.history.map((tt) => {
              return (
                <div className="hist-inner-div">
                  <div id="hist-inner-div-textholder">
                    <p className="desktop-sub-header2">
                      {this.props.history[0].serviceProviderName}
                    </p>
                    <p className="hist-text-date">
                      {this.props.history[0].dateOfTransaction} |{" "}
                      {this.props.history[0].timeOfTransaction}
                    </p>
                    <p className="desktop-text">
                      {this.props.history[0].description}
                    </p>
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
