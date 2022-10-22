import React, { Component } from "react";
import "../../../css/Notifications/Notification.css";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Row, Col } from "react-bootstrap";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import { Link } from "react-router-dom";
class Notifications_home extends React.Component {
  static contextType = UserDetailsContext;
  state = {
    test: [1, 2, 4, 5, 6, 7, 78, 8],
    userDetails: [],
    loading: false,
  };

  componentDidMount = async () => {
    this.getUser();
    console.log("ndm");
  };

  getUser = async () => {
    console.log("context", this.context);
    let id = "";
    const idInArray = this.props.location.pathname.split("/");
    if (idInArray.length === 4) {
      id = this.props.location.pathname.split("/")[3];
    } else if (idInArray.length === 3) {
      id = this.props.location.pathname.split("/")[2];
    } else if (idInArray.length === 6) {
      id = this.props.location.pathname.split("/")[4];
    }
    console.log("from account", id);
    const response = await fetch(
      `http://localhost:3003/users/get-user-by-id/${id}`,
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
        userDetails,
        loading: false,
      });
    }
  };
  render(props) {
    {
      console.log(this.props);
    }
    return (
      <div id="notifications_wrapper">
        {this.context.userDetails.transactionHistory.length == 0 ? (
          <div className="empty-services-holder">
            <p className="empty-services-text">
              You Have No Notifications Just Yet. Check Services Out
            </p>
          </div>
        ) : (
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
            <table id="table">
              <tr>
                <th>
                  <p className="acc-nav-inner-text">Name</p>
                </th>
                <th>
                  <p className="desktop-sub-header2">Date & Time</p>
                </th>
                <th>
                  <p className="desktop-sub-header2">Description</p>
                </th>
              </tr>
              {this.context.userDetails.notifications.map((tt) => {
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
                            {tt.title}
                          </p>
                        </Col>
                      </Row>
                    </td>
                    <td>
                      <p className="desktop-text">{tt.date}</p>
                    </td>
                    <td className="settings_account_type_date_text">
                      <p className="desktop-text">{tt.messageStatus}</p>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Notifications_home;
