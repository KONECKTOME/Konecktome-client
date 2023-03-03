import React, { Component } from "react";
import Explore_home from "./Components/Client/Explore/Explore_home";
// import Navbar from "./Components/Client/Navbar/Navbar";
import Explore_comparison from "./Components/Client/Explore/Explore_comparison";
import Explore_details from "./Components/Client/Explore/Explore_details";
import Index from "./Components/Client/Sidebar/Index";
import Home from "./Components/Client/LandingPage/Home";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "../src/App.css";

class App extends Component {
  state = {
    sideBarClassName: "default",
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
    return (
      <div className="App">
        <Router>
          {console.log("app")}
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
                <Index isSideBarShown={this.sideBarToggle} {...props} />
              </div>
            </div>
            <div id="right-col">
              {/* <Navbar isSideBarShown={this.sideBarToggle} {...props} /> */}
              <Switch>
                <Route
                  path="/explore/details"
                  exact
                  component={Explore_details}
                />
                <Route path="/explore" exact component={Explore_home} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
