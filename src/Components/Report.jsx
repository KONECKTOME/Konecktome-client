import React, { Component } from "react";
import "../css/Report.css";

class Report extends React.Component {
  state = {
    details: [],
    reports: [],
    showReport: false,
  };

  openAccordion = () => {
    this.setState({
      showReport: !this.state.showReport,
    });
  };

  componentDidMount = async () => {
    const response = await fetch(
      "https://konecktome-dark-side-sudvc.ondigitalocean.app/reporting",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const details = await response.json();
    this.setState({
      details,
    });
    details.map((report) => {
      return this.setState({ reports: report.report });
    });
    console.log(this.state.reports);
  };
  render() {
    return (
      <>
        {this.state.details.map((tt) => {
          return (
            <div id="report-wrapper">
              <div id="report-accordion" onClick={() => this.openAccordion()}>
                <div id="report-accordion-click">
                  <p className="report-headers">{tt.daysInWeek}</p>
                  <p className="report-headers">
                    Total Page Views : {tt.totalPageViews}
                  </p>
                  <p className="report-headers">+</p>
                </div>
                <div>
                  {this.state.showReport === true ? (
                    <div>
                      {this.state.reports.map((rr) => {
                        return (
                          <div id="report-accordion-inner-div">
                            <p>{rr.date}</p>
                            <p>{rr.pageViews}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {/* <div id="report-accordion-inner-div">
                    <p>Date : 23393090</p>
                    <p>Date : 23393090</p>
                  </div>
                  <div id="report-accordion-inner-div">
                    <p>Date : 23393090</p>
                    <p>Date : 23393090</p>
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default Report;
