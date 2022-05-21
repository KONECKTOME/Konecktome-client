import React, { Component } from "react";
import "../../../css/Loader/loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div id="loader-container">
        <div class="loader"></div>
        <p className="desktop-header-loader">Loading...</p>
      </div>
    );
  }
}

export default Loader;
