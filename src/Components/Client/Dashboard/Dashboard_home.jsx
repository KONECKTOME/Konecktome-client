import React, { Component } from "react";
import Accounts from "./Accounts";
import History from "./History";
import Nav from "./Nav";
import Recommendations from "./Recommendations";
import { Row, Col } from "react-bootstrap";
import "../../../css/Dashboard/Home.css";

class Dashboard_home extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="dashboard-div">
          <p>Dashboard</p>
        </div>
        <Nav />
        <Recommendations />
        <div id="dashboard-hist-acc">
          <Row>
            <Col lg={6}>
              <Accounts />
            </Col>
            <Col lg={6}>
              <History />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard_home;
