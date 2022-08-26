import React, { Component } from "react";
import "../../../css/Dashboard/Accounts.css";
import placeholder from "../../../Assets/my-placeholder.png";

class Accounts extends Component {
  state = {
    accounts: [1, 2, 3],
  };

  render() {
    return (
      <div id="acc-wrapper">
        <p className="desktop-sub-header1">My Accounts</p>
        {this.state.accounts.length !== 0 ? (
          <div id="acc-nav-wrapper">
            <table>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              {this.state.accounts.map((tt) => {
                return (
                  <tr id="dashboard_account_items">
                    <td>
                      <img src={placeholder} />
                    </td>
                    <td>
                      <p className="desktop-text">test By service</p>
                    </td>
                    <td>
                      <p className="desktop-text">£34</p>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <div id="no-services">
            <p className="desktop-sub-header2">
              You haven't purchased any services yet...
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Accounts;
