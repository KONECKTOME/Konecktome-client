import React, { Component } from "react";
import "../../../css/Dashboard/History.css";

class History extends Component {
  state = {
    test: [1, 2],
  };
  render() {
    return (
      <div id="hist-wrapper">
        <p className="desktop-sub-header1">Transaction History</p>
        {this.state.test.map((tt) => {
          return (
            <div className="hist-inner-div">
              <div id="hist-inner-div-textholder">
                <p className="desktop-sub-header2">
                  Some service provider name
                </p>
                <p className="hist-text-date">21-08-1992 | 5:45</p>
                <p className="desktop-text">
                  Lorem ipsum is simply a dummy text of printing and typesetting
                  industry
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default History;
