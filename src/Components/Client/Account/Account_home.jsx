import React, { Component } from "react";
import "../../../css/Account/index.css";
import { Row, Col } from "react-bootstrap";

class Account_home extends React.Component {
  render() {
    return (
      <div id="account-wrapper">
        <div id="account-first-inner-div">
          <div>
            <p id="account-header">My Accounts</p>
          </div>
          <div id="account-first-inner-right-div">
            <div>All</div>
            <div>Private Listings</div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="card">..</div>
          </div>
          <div class="column">
            <div class="card">..</div>
          </div>
          <div class="column">
            <div class="card">..</div>
          </div>
          <div class="column">
            <div class="card">..</div>
          </div>
        </div>
        {/* <div className="cards">
          <div className="card">dhdh</div>
        </div>
        <div className="cards">
          <div className="card">dhdh</div>
        </div>
        <div className="cards">
          <div className="card">dhdh</div>
        </div>
        <div className="cards">
          <div className="card">dhdh</div>
        </div>
        <div className="cards">
          <div className="card">dhdh</div>
        </div>
        <div className="cards">
          <div className="card">dhdh</div>
        </div> */}
      </div>
    );
  }
}

export default Account_home;
