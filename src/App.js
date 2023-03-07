import React, { Component } from "react";
import Home from "./Components/Client/LandingPage/Home";
import RHome from "./Components/Client/Routing/RHome";
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/explore" component={RHome}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
