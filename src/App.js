import React, { Component } from "react";
import Home from "./Components/Client/LandingPage/Home";
import RHome from "./Components/Client/Routing/RHome";
import Terms from "./Components/Client/Docs/Terms";
import PrivacyPolicy from "./Components/Client/Docs/PrivacyPolicy";
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
        {console.log("app")}
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/article/:articleId" exact component={Blog} />
            <Route path="/explore" component={RHome}></Route>
            <Route path="/terms" exact component={Terms} />
            <Route path="/privacy" exact component={PrivacyPolicy} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
