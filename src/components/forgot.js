import React, { useState } from "react";
import { auth } from "../firebase/firebase";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  return (
    <div className="column is-5 is-offset-4 has-background-white">
      <h1 className="title is-1">Forgot password</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          auth
            .sendPasswordResetEmail(email)
            .catch(({ message }) => setErr(message));
        }}
      >
        <p>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password.
        </p>

        <div className="field">
          <label className="label" htmlFor="forgot_pass_email">
            Email Address
          </label>
          <div className="control">
            <input
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              name="forgot_pass_email"
              id="forgot_pass_email"
            />
          </div>
        </div>

        {err && (
          <div className="field">
            <p className="has-text-danger">{err}</p>
          </div>
        )}

        <input
          className="button is-large is-fullwidth is-primary"
          type="submit"
          value="Reset password"
        />
      </form>
    </div>
  );
};

export default Forgot;
