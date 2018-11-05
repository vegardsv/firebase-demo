import React, { useState } from "react";
import { auth } from "../firebase/firebase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  return (
    <>
      <h1>Forgot password</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          auth
            .sendPasswordResetEmail(email)
            .catch(({ message }) => setErr(message));
        }}
      >
        <label htmlFor="forgot_pass_email">Email-adress</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          name="forgot_pass_email"
          id="forgot_pass_email"
        />
        <br />
        <input type="submit" value="Reset password" />
      </form>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </>
  );
};

export default ForgotPassword;
