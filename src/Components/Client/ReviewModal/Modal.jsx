import React, { Component } from "react";
import "../../../css/Reviews/Modal.css";
import CrossIcon from "../../SvgIcons/CrossIcon";

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
            <h3 className="desktop-sub-header2">Service Provider</h3>
            <button onClick={() => this.props.hide()}>
              <CrossIcon color="#000" />
            </button>
          </div>
          <hr />
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
                rows="3"
                cols="50"

                // value={this.state.details.email}
                // onChange={(e) => this.updateDetails(e)}
              />
            </form>
          </div>
          <div id="review-modal-body">
            <div id="review-modal-button">
              <p className="desktop-big-button-text modal-button-text">
                Add Review
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
