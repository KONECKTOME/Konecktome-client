import React, { Component } from "react";

class SmallLoader extends React.Component {
  render() {
    return (
      <>
        <div id="loader-container">
          <div class="loader"></div>
          <p className="desktop-small-loader-header">
            One Sec, Fetching Your Details
          </p>
        </div>
      </>
    );
  }
}

export default SmallLoader;
