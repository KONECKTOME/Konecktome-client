import React, { Component } from "react";
import "../../../css/Reviews/Modal.css";

class Modal extends React.Component {
  state = {
    rating: 0,
    hover: 0,
  };
  render() {
    return (
      <div class="review-modal">
        <div class="review-modal-content">
          <div id="review-modal-header">
            <p className="desktop-sub-header2">Some servive provider name</p>
            <h1 id="review-modal-close" onClick={() => this.props.hide()}>
              X
            </h1>
          </div>
          <hr></hr>
          <div id="review-modal-body">
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={
                      index <= (this.state.hover || this.state.rating)
                        ? "on"
                        : "off"
                    }
                    onClick={() => this.setState({ rating: index })}
                    onMouseEnter={() => this.setState({ hover: index })}
                    onMouseLeave={() =>
                      this.setState({ hover: this.state.rating })
                    }
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div id="review-modal-body">
            <form>
              <textarea
                type="text"
                placeholder="Enter review message"
                id="review-modal-message"
                rows="2"
                cols="50"

                // value={this.state.details.email}
                // onChange={(e) => this.updateDetails(e)}
              />
            </form>
          </div>
          <div id="review-modal-body">
            <div id="review-modal-button">
              <p className="desktop-big-button-text modal-button-text">
                Add review
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
