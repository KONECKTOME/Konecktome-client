import React, { Component } from "react";
import "../../../css/Reviews/Modal.css";
import CrossIcon from "../../SvgIcons/CrossIcon";

class Modal extends React.Component {
  state = {
    rating: 0,
    hover: 0,
    comment: "",
  };

  sendReview = async (e) => {
    e.preventDefault();
    if (this.state.rating === 0 || this.state.comment === "") {
      alert("emoty fileds");
    } else {
      const response = await fetch(
        `https://konecktomebackend.herokuapp.com/companies/update-reviews`,
        {
          method: "POST",
          body: JSON.stringify({
            userId: this.props.userId,
            companyId: this.props.companyId,
            rating: this.state.rating,
            comment: this.state.comment,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const details = await response.json();
      if (details.message === "New review added") {
        this.setState({
          rating: 0,
          hover: 0,
          comment: "",
        });
        alert("success");
      } else {
        alert("not added");
      }
    }
  };
  render() {
    return (
      <div class="review-modal">
        <div class="review-modal-content">
          <div id="review-modal-header">
            <h3 className="desktop-sub-header2">
              Leave A Review For {this.props.serviceProviderName}
            </h3>
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
                value={this.state.comment}
                onChange={(e) =>
                  this.setState({
                    comment: e.currentTarget.value,
                  })
                }
              />
            </form>
          </div>
          <div id="review-modal-body" onClick={(e) => this.sendReview(e)}>
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
