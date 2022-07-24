import React, { useContext, useState, useEffect } from "react";
import Accounts from "./Accounts";
import History from "./History";
import Nav from "./Nav";
import Recommendations from "./Recommendations";
import { Row, Col } from "react-bootstrap";
import "../../../css/Dashboard/Home.css";
import SmallLoader from "../Loader/SmallLoader";
import { UserDetailsContext } from "../Context/UserDetailsContext";

const Dashboard_home = () => {
  const { userDetails, dealDetails } = useContext(UserDetailsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userDetails._id && dealDetails.length !== 0) {
      setLoading(false);
    }
  });

  return (
    <>
      {loading === true ? (
        <SmallLoader />
      ) : (
        <div>
          <div className="desktop-header">
            <p>Wassup, {userDetails.firstName}</p>
          </div>
          <Nav />
          <Recommendations userId={userDetails._id} deals={dealDetails} />
          <div id="dashboard-hist-acc">
            <Row>
              <Col lg={6}>
                <Accounts accounts={userDetails.accounts} />
              </Col>
              <Col lg={6}>
                <History history={userDetails.transactionHistory} />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard_home;
