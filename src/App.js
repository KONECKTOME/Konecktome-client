import React, { Component } from "react";
import Home from "./Components/Client/LandingPage/Home";
import RHome from "./Components/Client/Routing/RHome";
import Terms from "./Components/Client/Docs/Terms";
import PrivacyPolicy from "./Components/Client/Docs/PrivacyPolicy";
import ContactUs from "./Components/Client/Docs/ContactUs";
import ScrollToTop from "./Components/Reusable/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import "../src/App.css";
import Blog from "./Components/Client/Blog/Blog";

class App extends Component {
  state = {
    sideBarClassName: "default",
  };

  sideBarToggle = (boolean) => {
    boolean
      ? this.setState({
          ...this.state,
          sideBarClassName: "active",
        })
      : this.setState({
          ...this.state,
          sideBarClassName: "not-active",
        });
  };

  render(props) {
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/article/:articleId" exact component={Blog} />
            <Route path="/explore" component={RHome} />
            <Route path="/terms" exact component={Terms} />
            <Route path="/privacy" exact component={PrivacyPolicy} />
            <Route path="/contact" exact component={ContactUs} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
