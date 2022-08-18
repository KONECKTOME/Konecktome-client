import React, { Component } from "react";
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
import Explore_details from "./Components/Client/Explore/Explore_details";
import PaymentSuccess from "./Components/Client/PaymentSuccess/PaymentSuccess";
import { UserDetailsContext } from "./Components/Client/Context/UserDetailsContext";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";
import "../src/App.css";

class App extends Component {
  state = {
    userDetails: {},
    dealDetails: [],
    loading: false,
    paidDeal: "",
  };

  componentDidMount = async () => {
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
  render() {
    const userDetails = this.state.userDetails;
    const dealDetails = this.state.dealDetails;
    const loading = this.state.loading;
    return (
      <div className="App">
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
                  exact
                  component={Account_home}
                />
                <Route
                  path="/dashboard/history/:userid"
                  exact
                  component={History_home}
                />
                <Route
                  path="/dashboard/notifications/:userid"
                  exact
                  component={Notifications_home}
                />
                <Route
                  path="/dashboard/favourites/:userid"
                  exact
                  component={Favourites_home}
                />
                <Route
                  path="/dashboard/wishlist/:userid"
                  exact
                  component={Wishlist}
                />
                <Route
                  path="/dashboard/pay-success/:userid"
                  exact
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
                  exact
                  render={(props) => (
                    <Explore_details
                      fetchUser={() => this.getUser()}
                      {...props}
                      populateBoughtDeal={(dealName) =>
                        this.populateBoughtDeal(dealName)
                      }
                      // key={window.location.pathname}
                    />
                  )}
                />
              </UserDetailsContext.Provider>

              <Route
                path="/dashboard/explore/:userid"
                exact
                component={Explore_home}
              />

              <Route
                path="/dashboard/recommendations/:userid"
                exact
                component={Recommendations_home}
              />
              <Route
                path="/dashboard/explore/compare/:userid/:dealId"
                exact
                component={Explore_comparison}
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
