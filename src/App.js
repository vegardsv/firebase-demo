import React, { Component } from "react";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import ForgotPassword from "./components/forgotPassword";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/forgot_password" component={ForgotPassword} />
      </>
    );
  }
}

export default App;
