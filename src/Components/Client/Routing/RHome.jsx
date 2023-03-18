import React, { Component } from "react";
import Index from "../Sidebar/Index";
import Explore_details from "../Explore/Explore_details";

import Explore_home from "../Explore/Explore_home";
import Navbar from "../Navbar/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class RHome extends Component {
  state = {
    sideBarClassName: "default",
    filterParams: [],
    deals: [],
  };

  componentDidMount = async () => {
    this.getDeals();
  };

  setFilter = (key, value) => {
    if (key === "speed") {
      const filteredDeals = this.setConditions(
        this.state.deals,
        value,
        null,
        null
      );
      this.setState((state) => ({
        deals: filteredDeals,
      }));
    }
    if (key === "price") {
      const filteredDeals = this.setConditions(
        this.state.deals,
        null,
        null,
        value
      );
      this.setState((state) => ({
        deals: filteredDeals,
      }));
      console.log("value", value);
      console.log("contract ", filteredDeals);
    }
    if (key === "Contract") {
      const filteredDeals = this.setConditions(
        this.state.deals,
        null,
        value,
        null
      );
      this.setState((state) => ({
        deals: filteredDeals,
      }));
      console.log("value", value);
      console.log("contract ", filteredDeals);
    }
  };

  setConditions = (deals, speed, contract, price) => {
    if (speed) {
      return deals.filter((item) => item.Speed >= speed);
    }
    if (contract) {
      return deals.filter((item) => parseInt(item.Contract) === contract);
    }
    if (price) {
      return deals.filter((item) => item.Speed > speed);
    }
    // return deals.filter((deal) => {
    //   // Filter by deal speed
    //   if (speed && parseInt(deal.Speed) < speed) {
    //     return false;
    //   }

    //   // Filter by deal length
    //   if (Contract && deal.Contract === Contract) {
    //     return false;
    //   }

    //   // Filter by deal price
    //   if (price && parseInt(deal.Price) < price) {
    //     return false;
    //   }
    //   // If all filters pass, include the deal in the filtered array
    //   return true;
    // });
  };

  getDeals = async () => {
    const response = await fetch(`http://localhost:3002/aff/`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const deals = await response.json();
    this.setState({ deals: deals.message });
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
      <div>
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
                isSideBarShown={this.sideBarToggle}
                setFilter={(key, value) => this.setFilter(key, value)}
                {...props}
              />
            </div>
          </div>
          <div id="right-col">
            <Navbar isSideBarShown={this.sideBarToggle} {...props} />
            <Switch>
              <Router>
                <Route
                  path="/explore/deals"
                  render={(props) => (
                    <Explore_home
                      filterParams={this.state.filterParams}
                      deals={this.state.deals}
                      {...props}
                    />
                  )}
                />
                <Route path="/explore/brand/:id" component={Explore_details} />
              </Router>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default RHome;
