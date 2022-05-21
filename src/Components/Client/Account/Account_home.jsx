import React, { Component } from "react";
import "../../../css/Account/index.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import Modal from "../ReviewModal/Modal";
import { Link } from "react-router-dom";

class Account_home extends React.Component {
  state = {
    test: [1, 2, 3, 4, 5, 6],
    showModal: false,
  };
  render() {
    return (
      <div id="account-wrapper">
        <div>
          <p className="desktop-header">My Accounts</p>
        </div>
        <div className="cards">
          {this.state.test.map((t) => {
            return (
              <div className="card">
                <div id="image-holder">
                  <img src={image_placeholder} className="card-image" />
                </div>
                <div id="account-card-inner-first-div">
                  <p className="desktop-sub-header2">
                    Some Service Provider Name
                  </p>
                  <div>
                    <p>Stars</p>
                    <p>Trust Pilot ratings</p>
                  </div>
                </div>
                <div>
                  <p className="desktop-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the…
                  </p>
                  <div className="desktop-badge1">
                    <p className="desktop-badge-text">Financial</p>
                  </div>
                </div>
                <div id="account-card-footer">
                  <div>
                    <p className="desktop-price"> Price</p>
                    <p className="desktop-price-number">£500</p>
                  </div>
                  <Link
                    className="links"
                    to="/dashboard/explore/details/:userId"
                  >
                    <div>
                      <p className="desktop-cta">View details</p>
                    </div>
                  </Link>
                  <div>
                    <p className="desktop-cta">Write a review</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {this.state.showModal === true ? <Modal /> : null}
      </div>
    );
  }
}

export default Account_home;
