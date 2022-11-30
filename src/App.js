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
// import Recommendations_home from "./Components/Client/Recommendations/Recommendations_home";
import Settings_home from "./Components/Client/Settings/Settings_home";
// import Notifications_home from "./Components/Client/Notifications/Notifications_home";
// import Favourites_home from "./Components/Client/Favourites/Favourites_home";
import Wishlist from "./Components/Client/Wishlist/Wishlist";
import Explore_details from "./Components/Client/Explore/Explore_details";
import PaymentSuccess from "./Components/Client/PaymentSuccess/PaymentSuccess";
import Home from "./Components/Client/LandingPage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Client/Login & Signup/Signup";
import Login from "./Components/Client/Login & Signup/Login";
import ForgotPassword from "./Components/Client/Login & Signup/ForgotPassword";
import Feedback from "./Components/Client/Survey and Feedback/Feedback";
import { UserDetailsContext } from "./Components/Client/Context/UserDetailsContext";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "../src/App.css";

class App extends Component {
  state = {
    userDetails: {},
    dealDetails: [],
    loading: false,
    installationDateAndTime: null,
    sideBarClassName: "default",
  };

  componentDidMount = async () => {
    this.getUser();
    this.getDeals();
    console.log("app");
  };

  checkForLettersAndNumbers = (str) => {
    return /^[a-zA-Z]+$/.test(str);
  };

  getUser = async () => {
    let id = "";
    const idInArray = this.props.location.pathname.split("/");
    if (idInArray.length === 4) {
      id = this.props.location.pathname.split("/")[3];
    } else if (idInArray.length === 3) {
      id = this.props.location.pathname.split("/")[2];
    } else if (idInArray.length === 6) {
      id = this.props.location.pathname.split("/")[4];
    } else if (idInArray.length === 5) {
      id = this.props.location.pathname.split("/")[3];
    }
    const response = await fetch(
      `https://konecktomebackend.herokuapp.com/users/get-user-by-id/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const userDetails = await response.json();
    this.setState({ userDetails: userDetails });
    console.log(this.state.userDetails);
  };

  getDeals = async () => {
    const response = await fetch(
      `https://konecktomebackend.herokuapp.com/companies/all-deals`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const deals = await response.json();
    const dealDetails = [...deals].sort(() => 0.5 - Math.random());
    this.setState({ dealDetails });
    console.log("deals from app", this.state.dealDetails);
  };

  populateBoughtDeal = (dateAndTime) => {
    this.setState({ installationDateAndTime: dateAndTime });
    console.log("pam", this.state.installationDateAndTime);
  };

  resetBoughtDeal = () => {
    this.setState({ installationDateAndTime: "" });
  };

  signOut = () => {
    this.setState({
      userDetails: {},
      dealDetails: [],
      loading: false,
      installationDateAndTime: "",
    });
    window.location.href = "https://konecktome-mvp.herokuapp.com/login";
  };

  sideBarToggle = (boolean) => {
    boolean
      ? this.setState({
          ...this.state,
          sideBarClassName: "active",
        })
      : this.setState({
          ...this.state,
          sideBarClassName: "not-active",
        });
  };

  render(props) {
    const userDetails = this.state.userDetails;
    const dealDetails = this.state.dealDetails;
    const loading = this.state.loading;
    return (
      <div className="App">
        <Router>
          <div id="fe-wrapper">
            <div
              id="left-col"
              onClick={(e) => {
                this.setState({
                  ...this.state,
                  sideBarClassName: "not-active",
                });
              }}
              className={this.state.sideBarClassName}
            >
              <div
                id="sidebar-warpper"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Index
                  userDetails={this.state.userDetails}
                  signOut={() => this.signOut()}
                  {...props}
                />
              </div>
            </div>
            <div id="right-col">
              <UserDetailsContext.Provider
                value={{ userDetails, dealDetails, loading }}
              >
                <Navbar
                  isSideBarShown={this.sideBarToggle}
                  signOut={() => this.signOut()}
                  {...props}
                />
                <Switch>
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
                    render={(props) => (
                      <History_home
                        userDetails={this.state.userDetails}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/feedback/:userid"
                    exact
                    component={Feedback}
                    {...props}
                  />

                  {/* <Route
                    path="/dashboard/notifications/:userid"
                    exact
                    component={Notifications_home}
                    userDetails={this.state.userDetails}
                    {...props}
                  /> */}
                  {/* <Route
                    path="/dashboard/favourites/:userid"
                    exact
                    component={Favourites_home}
                  /> */}
                  <Route
                    path="/dashboard/wishlist/:userid"
                    exact
                    component={Wishlist}
                  />
                  <Route
                    path="/dashboard/pay-success/:userid/:dealId"
                    exact
                    render={(props) => (
                      <PaymentSuccess
                        fetchUser={() => this.getUser()}
                        installationDateAndTime={
                          this.state.installationDateAndTime
                        }
                        boughtDeal={this.state.paidDeal}
                        resetBoughtDeal={() => this.resetBoughtDeal()}
                        userDetails={this.state.userDetails}
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
                        populateBoughtDeal={(dealName) =>
                          this.populateBoughtDeal(dealName)
                        }
                        userDetailsAsProps={this.state.userDetails}
                        dealDetails={this.state.dealDetails}
                        {...props}
                        // key={window.location.pathname}
                      />
                    )}
                  />
                  <Route
                    path="/dashboard/explore/:userid"
                    exact
                    component={Explore_home}
                  />

                  {/* <Route
                    path="/dashboard/recommendations/:userid"
                    exact
                    component={Recommendations_home}
                  /> */}
                  <Route
                    path="/dashboard/explore/compare/:userid/:dealId"
                    exact
                    component={Explore_comparison}
                  />
                </Switch>
              </UserDetailsContext.Provider>
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

export default withRouter(App);
