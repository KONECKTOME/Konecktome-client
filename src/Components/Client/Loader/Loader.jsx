import React, { Component } from "react";
import "../../../css/Loader/loader.css";

class Loader extends React.Component {
  state = {
    imageUpload: false,
  };
  render() {
    return (
      <div class="loader-modal">
        <div class="loader-modal-content">
          <div id="loader-modal-body">
            {this.props.imageUploadStatus === true &&
            this.props.imageUploadStatus != undefined ? (
              <div id="loader-container">
                <div class="loader"></div>
                <p className="desktop-header-loader">Image Uploaded</p>
              </div>
            ) : (
              <div id="loader-container">
                <div class="loader"></div>
                <p className="desktop-header-loader">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
