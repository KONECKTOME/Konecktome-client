import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "../../../css/History/index.css";

class History_home extends React.Component {
  state = {
    transactionHistory: [],
    loading: false,
    batchValue: 10,
  };

  batchLoader = () => {
    this.setState({ batchValue: this.state.batchValue + 6 });
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
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
    if (userDetails) {
      this.setState({
        loading: false,
        transactionHistory: userDetails.transactionHistory,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.loading === true ? (
          <Loader />
        ) : (
          <div id="history-wrapper">
            <p className="desktop-header">Transaction History</p>
            {this.state.transactionHistory.length !== 0 ? (
              <div>
                {/* <div id="history_form-div">
                  <form>
                    <input
                      id="searchQuery"
                      type="text"
                      placeholder="Search by name, category"
                      className="history-search-form"
                    />
                  </form>
                </div> */}
                {/* <div id="history_no_of_items_text">
                  <p>Showing 7 of 78</p>
                </div> */}
                <table>
                  <tr>
                    <th>
                      <p className="acc-nav-inner-text">Name</p>
                    </th>
                    <th>
                      <p className="desktop-sub-header2">Date & Time</p>
                    </th>
                    <th>
                      <p className="desktop-sub-header2">Set Up Fee</p>
                    </th>
                    <th>
                      <p className="desktop-sub-header2">Subscription Price</p>
                    </th>
                    {/* <th>
              <p className="desktop-sub-header2">Description</p>
            </th> */}
                  </tr>
                  {this.state.transactionHistory
                    .reverse()
                    .slice(0, this.state.batchValue)
                    .map((tt) => {
                      return (
                        <tr id="history_account_items">
                          <td>
                            <Row>
                              <Col lg={2}>
                                <div className="small-profile-image-container">
                                  <img
                                    src={tt.serviceProviderLogo}
                                    className="small-profile-image"
                                  />
                                </div>
                              </Col>
                              <Col lg={10}>
                                <p className="desktop-text history-service-provider-text">
                                  {tt.dealName}
                                </p>
                              </Col>
                            </Row>
                          </td>
                          <td>
                            <p className="desktop-text">
                              {tt.dateOfTransaction} : {tt.timeOfTransaction}
                            </p>
                          </td>
                          <td className="settings_account_type_date_text">
                            <p className="desktop-text">£ {tt.oneOffPrice}</p>
                          </td>
                          <td>
                            <p className="desktop-text">
                              £ {tt.subscriptionPrice}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                </table>
                <div className="desktop-big-button" id="explore-send-address">
                  <p
                    className="desktop-big-button-text"
                    onClick={() => this.batchLoader()}
                  >
                    Load More
                  </p>
                </div>
              </div>
            ) : (
              <div className="empty-services-holder">
                <p className="empty-services-text">
                  You Have No Transactions History Just Yet. Check Services Out
                  <span>
                    <Link
                      to={"/dashboard/explore/" + this.props.userDetails._id}
                      className="links sign-up-span-link"
                    >
                      here
                    </Link>
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default History_home;
