import React, { Component } from "react";
import { Link } from "react-router-dom";

const SignIn = () => (
  <>
    <h1>Sign in</h1>
    <p>
      Or <Link to="/signup">sign up for an account</Link>
    </p>

    <from>
      <label htmlFor="sign_in_username"> Username </label>
      <input type="text" id="sign_in_username" name="sign_in_username" />

      <label htmlFor="sign_in_password"> Password </label>
      <input type="text" id="sign_in_password" name="sign_in_password" />

      <input type="submit" value="Sign in" />
    </from>

    <p>
      <Link to="forgot_password">Forgot password?</Link>
    </p>
  </>
);

export default SignIn;
