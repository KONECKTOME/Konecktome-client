import React, { Component } from "react";
import "../../../css/Dashboard/History.css";

class History extends Component {
  state = {
    history: [],
  };
  render() {
    return (
      <div id="hist-wrapper">
        <p className="desktop-sub-header1">Transaction History</p>
        {this.state.history.length !== 0 ? (
          <div>
            {this.state.history.map((tt) => {
              return (
                <div className="hist-inner-div">
                  <div id="hist-inner-div-textholder">
                    <p className="desktop-sub-header2">
                      Some service provider name
                    </p>
                    <p className="hist-text-date">21-08-1992 | 5:45</p>
                    <p className="desktop-text">
                      Lorem ipsum is simply a dummy text of printing and
                      typesetting industry
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>NO</div>
        )}
      </div>
    );
  }
}

export default History;
