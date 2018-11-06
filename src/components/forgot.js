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
        <div className="field">
          <label className="label" htmlFor="forgot_pass_email">
            Email-adress
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
        <input className="button" type="submit" value="Reset password" />
      </form>
      {err && <p className="has-text-danger">{err}</p>}
    </div>
  );
};

export default Forgot;
