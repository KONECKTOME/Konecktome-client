import React, { Component } from "react";
import "../../../css/Dashboard/History.css";

class History extends Component {
  state = {};
  render() {
    return (
      <div id="hist-wrapper">
        <p id="hist-header-text">History</p>
        <div className="hist-inner-div">
          <div id="hist-inner-div-textholder">
            <p className="hist-text-header">Some service provider name</p>
            <p className="hist-text-date">21-08-1992 | 5:45</p>
            <p className="hist-text-desc">
              Lorem ipsum is simply a dummy text of printing and typesetting
              industry
            </p>
          </div>
        </div>
        <div className="hist-inner-div">
          <div id="hist-inner-div-textholder">
            <p className="hist-text-header">Some service provider name</p>
            <p className="hist-text-date">21-08-1992 | 5:45</p>
            <p className="hist-text-desc">
              Lorem ipsum is simply a dummy text of printing and typesetting
              industry
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
