import React, { Component } from "react";
import "../../../css/Dashboard/Accounts.css";

class Accounts extends Component {
  state = {
    accounts: [1, 2, 3],
  };

  render() {
    return (
      // <div id="acc-wrapper">
      //   <p className="desktop-sub-header1">My Accounts</p>
      //   {this.state.accounts.length !== 0 ? (
      //     <div id="acc-nav-wrapper">
      //       <table>
      //         <tr>
      //           <th></th>
      //           <th></th>
      //           <th></th>
      //         </tr>
      //         {this.state.accounts.map((tt) => {
      //           return (
      //             <tr id="dashboard_account_items">
      //               <td>
      //                 <img src={placeholder} />
      //               </td>
      //               <td>
      //                 <p className="desktop-text">test By service</p>
      //               </td>
      //               <td>
      //                 <p className="desktop-text">£34</p>
      //               </td>
      //             </tr>
      //           );
      //         })}
      //       </table>
      //     </div>
      //   ) : (
      //     <div id="no-services">
      //       <p className="desktop-sub-header2">
      //         You haven't purchased any services yet...
      //       </p>
      //     </div>
      //   )}
      // </div>
      <div id="hist-wrapper">
        <p className="desktop-sub-header1">My Accounts</p>
        {this.props.accounts.length !== 0 ? (
          <div>
            {this.props.accounts
              .reverse()
              .slice(0, 3)
              .map((item) => {
                return (
                  <div className="hist-inner-div">
                    <div id="hist-inner-div-textholder">
                      <p className="desktop-sub-header2">
                        {item.serviceProviderName}
                      </p>
                      <p className="hist-text-date">{item.description}</p>
                      <p className="desktop-text">{item.tag}</p>
                    </div>
                  </div>
                );
              })}
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
