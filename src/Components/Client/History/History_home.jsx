import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import placeholder from "../../../Assets/my-placeholder.png";
import profileSettingPlaceholder from "../../../Assets/Quadri.jpg";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "../../../css/History/index.css";

import { UserDetailsContext } from "../Context/UserDetailsContext";
import { useEffect } from "react";

const History_home = (props) => {
  const [loading, setLoading] = useState(false);
  const [batchValue, setBatchValue] = useState(10);
  const { userDetails } = useContext(UserDetailsContext);

  const batchLoader = () => {
    setBatchValue(batchValue + 6);
  };

  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <div id="history-wrapper">
          {userDetails.transactionHistory.length !== 0 ? (
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
                    <p className="desktop-sub-header2">Set Up Fee</p>
                  </th>
                  <th>
                    <p className="desktop-sub-header2">Subscription Price</p>
                  </th>
                  {/* <th>
              <p className="desktop-sub-header2">Description</p>
            </th> */}
                </tr>
                {userDetails.transactionHistory
                  .reverse()
                  .slice(0, batchValue)
                  .map((tt) => {
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
                <p className="desktop-big-button-text" onClick={batchLoader}>
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
                    to={"/dashboard/explore/" + userDetails._id}
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
};

export default History_home;
