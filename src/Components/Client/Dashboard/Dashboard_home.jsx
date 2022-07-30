import React, { useContext, useState, useEffect } from "react";
import Accounts from "./Accounts";
import History from "./History";
import Nav from "./Nav";
import Recommendations from "./Recommendations";
import { Row, Col } from "react-bootstrap";
import "../../../css/Dashboard/Home.css";
import SmallLoader from "../Loader/SmallLoader";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import PinModal from "./PinModal";

const Dashboard_home = () => {
  const { userDetails, dealDetails } = useContext(UserDetailsContext);
  const [loading, setLoading] = useState(true);
  const [pinModal, setPinModal] = useState(false);

  useEffect(() => {
    if (userDetails._id && dealDetails.length !== 0) {
      setLoading(false);
    }
  });

  const showPinModal = () => {
    setPinModal(true);
  };
  const hidePinModal = () => {
    setPinModal(false);
  };

  return (
    <>
      {loading === true ? (
        <SmallLoader />
      ) : (
        <div>
          <div className="desktop-header">
            <p>Wassup, {userDetails.firstName}</p>
            {userDetails.pin === "0000" ? (
              <div>
                You've Not Set Your Pin,{" "}
                <span
                  id="explore-details-active"
                  onClick={() => showPinModal()}
                >
                  Set It Here
                </span>
              </div>
            ) : null}
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
          {pinModal === true ? (
            <PinModal
              modalState={pinModal}
              hidePinModal={() => hidePinModal()}
              userEmail={userDetails.email}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Dashboard_home;
