import React, { Component } from "react";
import Accounts from "./Accounts";
import History from "./History";
import Nav from "./Nav";
import Recommendations from "./Recommendations";
import { Row, Col } from "react-bootstrap";

class Dashboard_home extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <Recommendations />
        <Row>
          <Col>
            <Accounts />
            <History />
          </Col>
        </Row>
      </>
    );
  }
}

export default Dashboard_home;
