import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Components/Client/LandingPage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Client/Login & Signup/Signup";
import Login from "./Components/Client/Login & Signup/Login";
import ForgotPassword from "./Components/Client/Login & Signup/ForgotPassword";
import Dashboard_home from "./Components/Client/Dashboard/Dashboard_home";

ReactDOM.render(
  <React.StrictMode>
    {console.log("index here test")}
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/dashboard/:userid" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
