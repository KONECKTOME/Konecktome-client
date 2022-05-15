import React, { Component } from "react";
import "../../../css/Reviews/Modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    );
  }
}

export default Modal;
