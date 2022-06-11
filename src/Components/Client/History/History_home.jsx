import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import placeholder from "../../../Assets/my-placeholder.png";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "../../../css/History/index.css";

class History_home extends React.Component {
  state = {
    test: [1, 2, 3, 4, 5, 6, 7],
    loading: false,
    transactions: [],
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
    if (!userDetails.transactionHistory) {
      this.setState({
        loading: true,
      });
    } else {
      this.setState({
        transactions: userDetails.transactionHistory,
        loading: false,
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
            {this.state.transactions.length !== 0 ? (
              <div>
                <div id="history_form-div">
                  <form>
                    <input
                      id="searchQuery"
                      type="text"
                      placeholder="Search by name, category"
                      className="history-search-form"
                    />
                  </form>
                </div>
                <div id="history_no_of_items_text">
                  <p>Showing 7 of 78</p>
                </div>
                <table>
                  <tr>
                    <th>
                      <p className="acc-nav-inner-text">Name</p>
                    </th>
                    <th>
                      <p className="desktop-sub-header2">Date & Time</p>
                    </th>
                    <th>
                      <p className="desktop-sub-header2">Price</p>
                    </th>
                    <th>
                      <p className="desktop-sub-header2">Next Due Date</p>
                    </th>
                    {/* <th>
              <p className="desktop-sub-header2">Description</p>
            </th> */}
                  </tr>
                  {this.state.test.map((tt) => {
                    return (
                      <tr id="history_account_items">
                        <td>
                          <Row>
                            <Col lg={2}>
                              <div className="small-profile-image-container">
                                <img
                                  src={profileSettingPlaceholder}
                                  className="small-profile-image"
                                />
                              </div>
                            </Col>
                            <Col lg={10}>
                              <p className="desktop-text history-service-provider-text">
                                Deal name purchased from service provider name
                              </p>
                            </Col>
                          </Row>
                        </td>
                        <td>
                          <p className="desktop-text">21-09-2021 : 12:00</p>
                        </td>
                        <td className="settings_account_type_date_text">
                          <p className="desktop-text">£30</p>
                        </td>
                        <td>
                          <p className="desktop-text">21-09-2021</p>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
              <div className="empty-services-holder">
                <p className="empty-services-text">
                  You Have No Transactions History Just Yet. Check Services Out
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
          </div>
        )}
      </>
    );
  }
}

export default History_home;
