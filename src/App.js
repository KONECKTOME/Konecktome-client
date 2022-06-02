import React, { useEffect, useState } from "react";
import ComingSoon from "./Components/Comingsoon";
import About from "./Components/About";
import Footer from "./Components/Footer";
import FooterForm from "./Components/FooterForm";
import Index from "./Components/Client/Sidebar/Index";
import Dashboard_home from "./Components/Client/Dashboard/Dashboard_home";
import Explore_home from "./Components/Client/Explore/Explore_home";
import Account_home from "./Components/Client/Account/Account_home";
import Details_home from "./Components/Client/Details/Details_home";
import History_home from "./Components/Client/History/History_home";
import Navbar from "./Components/Client/Navbar/Navbar";
import Explore_comparison from "./Components/Client/Explore/Explore_comparison";
import Recommendations_home from "./Components/Client/Recommendations/Recommendations_home";
import Settings_home from "./Components/Client/Settings/Settings_home";
import Notifications_home from "./Components/Client/Notifications/Notifications_home";
import Favourites_home from "./Components/Client/Favourites/Favourites_home";
import Wishlist from "./Components/Client/Wishlist/Wishlist";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/App.css";
import { Row, Col } from "react-bootstrap";
import Explore_details from "./Components/Client/Explore/Explore_details";
import { Component } from "react";

class App extends Component {
  state = {
    userDetails: {},
  };

  componentDidMount = async () => {
    const response = await fetch(
      "http://localhost:3002/users/get-user-by-id/6298c26a9cc578cba1c6f926",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    this.setState({ userDetails });
    console.log("here", this.state.userDetails);
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div id="fe-wrapper">
            <div id="left-col">
              <Index />
            </div>
            <div id="right-col">
              <Navbar
                userName={
                  this.state.userDetails.firstName +
                  " " +
                  this.state.userDetails.lastName
                }
                userImage={this.state.userDetails.imageUrl}
              />
              <Route
                path="/dashboard/:userid"
                exact
                component={Dashboard_home}
              />
              <Route
                path="/dashboard/account/:userid"
                exact
                component={Account_home}
              />
              <Route
                path="/dashboard/explore/:userId"
                exact
                component={Explore_home}
              />
              <Route
                path="/dashboard/explore/details/:userId"
                exact
                component={Explore_details}
              />
              <Route
                path="/dashboard/history/:userId"
                exact
                component={History_home}
              />

              <Route
                path="/dashboard/settings/:userId"
                exact
                component={Settings_home}
              />
              <Route
                path="/dashboard/recommendations/:userId"
                exact
                component={Recommendations_home}
              />
              <Route
                path="/dashboard/explore/compare/:userId"
                exact
                component={Explore_comparison}
              />
              <Route
                path="/dashboard/notifications/:userId"
                exact
                component={Notifications_home}
              />
              <Route
                path="/dashboard/favourites/:userId"
                exact
                component={Favourites_home}
              />
              <Route
                path="/dashboard/wishlist/:userId"
                exact
                component={Wishlist}
              />
            </div>
          </div>
        </Router>
        {/* <Row>
          <Col lg={2}>
            <Index />
          </Col>
          <Col lg={9} id="right-col">
            <div>dhdh</div>
          </Col>
        </Row> */}
        {/* <Navbar />
        <ComingSoon />
        <About />
        <FooterForm />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
