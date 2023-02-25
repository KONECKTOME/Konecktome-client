import React, { Component } from "react";
import Explore_home from "./Components/Client/Explore/Explore_home";
import Navbar from "./Components/Client/Navbar/Navbar";
import Explore_comparison from "./Components/Client/Explore/Explore_comparison";
import Explore_details from "./Components/Client/Explore/Explore_details";
import Index from "./Components/Client/Sidebar/Index";

import "bootstrap/dist/css/bootstrap.min.css";
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

  checkForLettersAndNumbers = (str) => {
    return /^[a-zA-Z]+$/.test(str);
  };

  resetBoughtDeal = () => {
    this.setState({ installationDateAndTime: "" });
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
                  isSideBarShown={this.sideBarToggle}
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
                  <Route path="/" exact component={Explore_home} />

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
      </div>
    );
  }
}

export default App;
