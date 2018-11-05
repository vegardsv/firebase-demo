import React, { Component } from "react";

const ForgotPassword = () => (
  <>
    <h1>Forgot password</h1>
    <from>
      <label htmlFor="forgot_pass_email">Email-adress</label>
      <input type="text" name="forgot_pass_email" id="forgot_pass_email" />
      <input type="submit" value="Reset password" />
    </from>
  </>
);

export default ForgotPassword;
