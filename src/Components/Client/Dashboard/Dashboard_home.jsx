import React, { Component } from "react";
import Accounts from "./Accounts";
import History from "./History";
import Nav from "./Nav";
import Recommendations from "./Recommendations";
import { Row, Col } from "react-bootstrap";
import "../../../css/Dashboard/Home.css";

class Dashboard_home extends Component {
  state = {
    userDetails: {},
  };

  componentDidMount = async () => {
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
    this.setState({ userDetails });
  };
  render() {
    return (
      <div>
        <div className="desktop-header">
          <p>Wassup, {this.state.userDetails.firstName}</p>
        </div>
        <Nav />
        <Recommendations userId={this.props.match.params.userid} />
        <div id="dashboard-hist-acc">
          <Row>
            <Col lg={6}>
              <Accounts accounts={this.state.userDetails.accounts} />
            </Col>
            <Col lg={6}>
              <History
                transactionHistory={this.state.userDetails.transactionHistory}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard_home;
