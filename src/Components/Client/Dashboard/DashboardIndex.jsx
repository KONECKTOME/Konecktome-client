import React, { Component } from "react";
import Index from "../Sidebar/Index";
import Dashboard_home from "../Dashboard/Dashboard_home";
import Explore_home from "../Explore/Explore_home";
import Account_home from "../Account/Account_home";

import Details_home from "../Details/Details_home";
import History_home from "../History/History_home";
import Navbar from "../Navbar/Navbar";
import Explore_comparison from "../Explore/Explore_comparison";
import Recommendations_home from "../Recommendations/Recommendations_home";
import Settings_home from "../Settings/Settings_home";
import Notifications_home from "../Notifications/Notifications_home";
import Favourites_home from "../Favourites/Favourites_home";
import Wishlist from "../Wishlist/Wishlist";
import Explore_details from "../Explore/Explore_details";
import PaymentSuccess from "../PaymentSuccess/PaymentSuccess";
import ForgotPassword from "../Login & Signup/ForgotPassword";
import { UserDetailsContext } from "../Context/UserDetailsContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class DashBoardIndex extends Component {
  state = {
    userDetails: {},
    dealDetails: [],
    loading: false,
    paidDeal: "",
  };

  componentDidMount = async () => {
    console.log(this.state.userDetails);
    this.getUser();
    this.getDeals();
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
    this.setState({ userDetails });
    console.log("from app", this.state.userDetails);
  };

  getDeals = async () => {
    const response = await fetch(`http://localhost:3002/companies/all-deals`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deals = await response.json();
    const dealDetails = [...deals].sort(() => 0.5 - Math.random());
    this.setState({ dealDetails });
  };

  populateBoughtDeal = (dealName) => {
    this.setState({ paidDeal: dealName });
  };

  resetBoughtDeal = () => {
    this.setState({ paidDeal: "" });
  };
  render(props) {
    const userDetails = this.state.userDetails;
    const dealDetails = this.state.dealDetails;
    const loading = this.state.loading;
    return (
      <Router>
        <div id="fe-wrapper">
          <div id="left-col">
            <Index />
          </div>
          <div id="right-col">
            <UserDetailsContext.Provider
              value={{ userDetails, dealDetails, loading }}
            >
              <Navbar />
              <Switch>
                <Route
                  path="/forgot-password"
                  exact
                  component={ForgotPassword}
                />
                <Route
                  path="/dashboard/:userid"
                  exact
                  render={(props) => (
                    <Dashboard_home
                      fetchUser={() => this.getUser()}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/dashboard/settings/:userid"
                  exact
                  render={(props) => (
                    <Settings_home
                      fetchUser={() => this.getUser()}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/dashboard/account/:userid"
                  component={Account_home}
                />
                <Route
                  path="/dashboard/history/:userid"
                  component={History_home}
                  userDetails={this.state.userDetails}
                  {...props}
                />
                <Route
                  path="/dashboard/notifications/:userid"
                  component={Notifications_home}
                />
                <Route
                  path="/dashboard/favourites/:userid"
                  component={Favourites_home}
                />
                <Route
                  path="/dashboard/wishlist/:userid"
                  component={Wishlist}
                />
                <Route
                  path="/dashboard/paysuccess/:userid"
                  render={(props) => (
                    <PaymentSuccess
                      fetchUser={() => this.getUser()}
                      boughtDeal={this.state.paidDeal}
                      resetBoughtDeal={() => this.resetBoughtDeal()}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/dashboard/explore/details/:userid/:dealId"
                  render={(props) => (
                    <Explore_details
                      fetchUser={() => this.getUser()}
                      {...props}
                      populateBoughtDeal={(dealName) =>
                        this.populateBoughtDeal(dealName)
                      }
                      userDetailsAsProps={this.state.userDetails}
                    />
                  )}
                />
                <Route
                  path="/dashboard/explore/:userid"
                  component={Explore_home}
                />

                <Route
                  path="/dashboard/recommendations/:userid"
                  component={Recommendations_home}
                />
                <Route
                  path="/dashboard/explore/compare/:userid/:dealId"
                  component={Explore_comparison}
                />
                <Route />
              </Switch>
            </UserDetailsContext.Provider>
          </div>
        </div>
      </Router>
    );
  }
}

export default DashBoardIndex;
