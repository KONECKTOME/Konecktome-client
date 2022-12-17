import React, { Component } from "react";
import "../../../css/Account/index.css";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import Modal from "../ReviewModal/Modal";
import SmallLoader from "../Loader/SmallLoader";
import { Link } from "react-router-dom";

class Account_home extends React.Component {
  static contextType = UserDetailsContext;
  state = {
    test: [1, 2, 3, 4, 5, 6],
    showModal: false,
    loading: true,
    accounts: [],
    serviceProviderName: "",
    companyId: "",
    userId: "",
  };

  componentDidMount = () => {
    this.getUser();
  };

  getUser = async () => {
    let id = "";
    const idInArray = this.props.location.pathname.split("/");
    if (idInArray.length === 4) {
      id = this.props.location.pathname.split("/")[3];
    } else if (idInArray.length === 3) {
      id = this.props.location.pathname.split("/")[2];
    } else if (idInArray.length === 6) {
      id = this.props.location.pathname.split("/")[4];
    }

    const response = await fetch(
      `https://konecktomebackend.herokuapp.com/users/get-user-by-id/${id}`,
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
      this.setState({
        accounts: userDetails.accounts,
        loading: false,
        userId: id,
      });
    }
  };

  showReviewModal = (serviceProviderName, companyId) => {
    this.setState({
      showModal: true,
      serviceProviderName: serviceProviderName,
      companyId: companyId,
    });
  };

  hideReviewModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div id="account-wrapper">
        {this.state.loading === true ? (
          <SmallLoader />
        ) : (
          <div>
            <div>
              <p className="desktop-header m-0">My Accounts</p>
            </div>
            {this.state.accounts.length !== 0 ? (
              <div className="cards mt-5">
                {this.state.accounts.map((acc) => {
                  return (
                    <div className="card">
                      <div id="image-holder">
                        <img src={acc.companyImage} className="card-image" />
                      </div>
                      <div id="account-card-inner-first-div mt-2">
                        <p className="desktop-sub-header2">
                          {acc.serviceProviderName}
                        </p>
                        {/* <div>
                             <p>Stars</p>
                              <p>Trust Pilot ratings</p>
                            </div> */}
                      </div>
                      <div>
                        <p className="desktop-text mt-3">
                          You subscribed to {acc.dealName} on {acc.joinDate}
                        </p>
                        <p className="desktop-text mt-3">
                          Details are {acc.description}
                        </p>
                        <div className="desktop-badge1 mt-3">
                          <p className="desktop-badge-text">{acc.tag}</p>
                        </div>
                      </div>
                      <div id="account-card-footer">
                        <div>
                          <p className="desktop-price"> Price</p>
                          <p className="desktop-price-number">£{acc.price}</p>
                        </div>
                        <div
                          onClick={() =>
                            this.showReviewModal(
                              acc.serviceProviderName,
                              acc.companyId
                            )
                          }
                        >
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
              <Modal
                hide={() => this.hideReviewModal()}
                serviceProviderName={this.state.serviceProviderName}
                companyId={this.state.companyId}
                userId={this.state.userId}
              />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

export default Account_home;
