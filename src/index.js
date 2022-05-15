import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Client/LandingPage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Client/Login & Signup/Signup";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/dashboard/:userid" exact component={App}></Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
