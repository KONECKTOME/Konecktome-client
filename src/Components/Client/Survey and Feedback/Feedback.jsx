import React, { Component } from "react";
import "../../../css/Feedback/Feedback.css";
import survey_icon from "../../../Assets/survey.png";

class Feedback extends Component {
  state = {
    feedBack: {
      feedBackTitle: "",
      feedBackMessage: "",
    },
  };
  updateFeedBackDetails = (e) => {
    const feedBack = this.state.feedBack;
    const id = e.currentTarget.id;
    feedBack[id] = e.currentTarget.value;
    this.setState({ feedBack });
  };

  sendFeedBack = async () => {
    const response = await fetch("http://localhost:3002/users/feedback", {
      method: "POST",
      body: JSON.stringify({
        userId: this.props.match.params.userid,
        feedBackTitle: this.state.feedBack.feedBackTitle,
        feedBackMessage: this.state.feedBack.feedBackMessage,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const details = await response.json();
    if (details.message === "Email sent") {
      this.setState({
        feedBack: {
          feedBackTitle: "",
          feedBackMessage: "",
        },
      });
      alert("Message sent");
    }
  };
  render() {
    return (
      <div id="feedback-wrapper">
        <div>
          {/* <img src={survey_icon} /> */}
          <p className="desktop-header">
            Improve the performance of your “VLA” and the <br></br>KONNECKTOME
            Platform and win up to £500"
          </p>
          <div>
            <form>
              <input
                type="text"
                id="feedBackTitle"
                className="survey-input"
                placeholder="Issue Title"
                value={this.state.feedBack.feedBackTitle}
                onChange={(e) => this.updateFeedBackDetails(e)}
              />
              <textarea
                type="text"
                id="feedBackMessage"
                rows="5"
                cols="50"
                placeholder="Message"
                className="survey-input"
                value={this.state.feedBack.feedBackMessage}
                onChange={(e) => this.updateFeedBackDetails(e)}
              />
            </form>
            <div
              className="desktop-big-button"
              onClick={() => this.sendFeedBack()}
            >
              <p className="desktop-big-button-text">Send Feedback</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
