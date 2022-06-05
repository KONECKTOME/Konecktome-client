import React, { Component } from "react";
import "../../../css/Account/index.css";
import image_placeholder from "../../../Assets/account-card-placeholder.png";
import Modal from "../ReviewModal/Modal";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

class Account_home extends React.Component {
  state = {
    test: [1, 2, 3, 4, 5, 6],
    showModal: false,
    loader: false,
    accounts: [],
  };

  componentDidMount = () => {
    this.getUser();
  };

  getUser = async () => {
    const id = this.props.match.params.userid;
    const response = await fetch(
      `http://localhost:3002/users/get-user-by-id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    this.setState({ accounts: userDetails.accounts, loading: false });
  };

  showReviewModal = () => {
    this.setState({ showModal: true });
  };

  hideReviewModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div id="account-wrapper">
        {this.props.loading === true ? (
          <Loader />
        ) : (
          <div>
            <div>
              <p className="desktop-header">My Accounts</p>
            </div>
            {this.state.accounts.length !== 0 ? (
              <div className="cards">
                {this.state.test.map((t) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={image_placeholder} className="card-image" />
                      </div>
                      <div id="account-card-inner-first-div">
                        <p className="desktop-sub-header2">
                          Servie providername
                        </p>
                        <div>
                          <p>Stars</p>
                          <p>Trust Pilot ratings</p>
                        </div>
                      </div>
                      <div>
                        <p className="desktop-text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the…
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
                        {/* <Link
                    className="links"
                    to="/dashboard/explore/details/:userId"
                  >
                    <div>
                      <p className="desktop-cta">View details</p>
                    </div>
                  </Link> */}
                        <div onClick={() => this.showReviewModal()}>
                          <p className="desktop-cta">Write a review</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>None</div>
            )}

            {this.state.showModal === true ? (
              <Modal hide={() => this.hideReviewModal()} />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Account_home;
