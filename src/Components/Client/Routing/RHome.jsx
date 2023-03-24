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
    dealsBackUp: [],
    brand: {},
    dealsByBrand: [],
    brandDetails: false,
    dealsByBrandBackUp: [],
  };

  componentDidMount = async () => {
    this.getDeals();
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

  getBrandDetails = async () => {
    let search = "/explore/brand";
    let brandId = window.location.href.split("/")[5];
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/aff/brand-details/`,
      {
        method: "POST",
        body: JSON.stringify({
          brandId: brandId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const brandDetails = await response.json();
    this.setState({
      brand: brandDetails.message,
      dealsByBrand: brandDetails.message.deals,
      dealsByBrandBackUp: brandDetails.message.deals,
      brandDetails: true,
    });
  };

  setFilter = async (key, value, checkBoxValue) => {
    let search = "/explore/brand";
    let currentPage = window.location.href.includes(search);
    let deals = [];
    switch (currentPage) {
      case false:
        deals = this.state.dealsBackUp;
        if (key === "speed") {
          if (!checkBoxValue) {
            let filteredDeals = deals.filter((item) => item.Speed >= value);
            this.setState({
              deals: filteredDeals,
              filterParams: [1],
            });
          }
        } else if (key === "price") {
          if (!checkBoxValue) {
            const filteredDeals = deals.filter((item) => item.Price <= value);
            this.setState({
              deals: filteredDeals,
              filterParams: [1],
            });
          }
        } else if (key === "contract") {
          if (!checkBoxValue) {
            const filteredDeals = deals.filter(
              (item) => item.Contract === value
            );
            this.setState({
              deals: filteredDeals,
              filterParams: [1],
            });
          }
        }
        break;
      case true:
        deals = this.state.dealsByBrandBackUp;
        if (key === "speed") {
          if (!checkBoxValue) {
            let filteredDeals = deals.filter((item) => item.Speed >= value);
            if (filteredDeals.length !== 0) {
              this.setState({
                dealsByBrand: filteredDeals,
                filterParams: [1],
              });
            }
          }
        } else if (key === "price") {
          if (!checkBoxValue) {
            const filteredDeals = deals.filter((item) => item.Price <= value);
            if (filteredDeals.length !== 0) {
              this.setState({
                dealsByBrand: filteredDeals,
                filterParams: [1],
              });
            }
          }
        } else if (key === "contract") {
          if (!checkBoxValue) {
            const filteredDeals = deals.filter(
              (item) => item.Contract === value
            );
            if (filteredDeals.length !== 0) {
              this.setState({
                dealsByBrand: filteredDeals,
                filterParams: [1],
              });
            }
          }
        }
        break;
      default:
    }
  };

  getDeals = async () => {
    const response = await fetch(
      `https://kt-affiliate-server-9yt3t.ondigitalocean.app/aff/`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const deals = await response.json();
    this.setState({ deals: deals.message, dealsBackUp: deals.message });
  };

  clearFilters = async () => {
    let search = "/explore/brand";
    let currentPage = window.location.href.includes(search);
    if (currentPage) {
      if (this.state.filterParams.length !== 0) {
        this.getBrandDetails();
        this.sideBarToggle();
        this.setState({ filterParams: [] });
      }
    } else {
      if (this.state.filterParams.length !== 0) {
        this.getDeals();
        this.sideBarToggle();
        this.setState({ filterParams: [] });
      }
    }
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
                setFilter={(key, value, checkBoxValue) =>
                  this.setFilter(key, value, checkBoxValue)
                }
                clearFilters={() => this.clearFilters()}
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
                <Route
                  path="/explore/brand/:id"
                  render={(props) => (
                    <Explore_details
                      getBrandDetails={() => this.getBrandDetails()}
                      brand={this.state.brand}
                      dealsByBrand={this.state.dealsByBrand}
                      {...props}
                    />
                  )}
                />
              </Router>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RHome);
