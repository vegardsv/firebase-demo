import React, { Component } from "react";
import { Link } from "react-router-dom";

const SignUp = () => (
  <>
    <h1>Sign up</h1>
    <p>
      Or <Link to="/signin">sign in if you already is registred</Link>
    </p>

    <from>
      <label htmlFor="signup_email">Email adress</label>
      <input type="email" id="signup_email" name="signup_email" />

      <label htmlFor="signup_password">Password</label>
      <input type="password" id="signup_password" name="signup_password" />
      <label htmlFor="signup_password_repeat">Repeat password</label>
      <input
        type="password"
        id="signup_password_repeat"
        name="signup_password_repeat"
      />
      <input type="submit" value="Create account" />
    </from>
  </>
);

export default SignUp;
