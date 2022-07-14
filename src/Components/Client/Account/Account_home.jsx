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
    loading: false,
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
    if (!userDetails.accounts) {
      this.setState({
        loading: true,
      });
    } else {
      this.setState({ accounts: userDetails.accounts, loading: false });
    }
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
        {this.state.loading === true ? (
          <Loader />
        ) : (
          <div>
            <div>
              <p className="desktop-header">My Accounts</p>
            </div>
            {this.state.accounts.length !== 0 ? (
              <div className="cards">
                {this.state.accounts.map((acc) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={acc.companyImage} className="card-image" />
                      </div>
                      <div id="account-card-inner-first-div">
                        <p className="desktop-sub-header2">
                          {acc.serviceProviderName}
                        </p>
                        {/* <div>
                          <p>Stars</p>
                          <p>Trust Pilot ratings</p>
                        </div> */}
                      </div>
                      <div>
                        <p className="desktop-text">
                          You subscribed to {acc.dealName} on {acc.joinDate}
                          Details are {acc.description}
                        </p>
                        <div className="desktop-badge1">
                          <p className="desktop-badge-text">{acc.tag}</p>
                        </div>
                      </div>
                      <div id="account-card-footer">
                        <div>
                          <p className="desktop-price"> Price</p>
                          <p className="desktop-price-number">£{acc.price}</p>
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
              <div className="empty-services-holder">
                <p className="empty-services-text">
                  You Haven't Purchased Any Service Yet. Check Services Out
                  <span>
                    <Link
                      to={
                        "/dashboard/explore/" + this.props.match.params.userid
                      }
                      className="links sign-up-span-link"
                    >
                      here
                    </Link>
                  </span>
                </p>
              </div>
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