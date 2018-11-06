import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

const SignUp = () => {
  const [email, setEmail] = useState("testuser@test.te");
  const [password, setPassword] = useState("password123");
  const [err, setErr] = useState("");

  return (
    <div className="column is-5 is-offset-4 has-background-white">
      <h1 className="title is-1">Sign up</h1>
      <p>
        Or <Link to="/">sign in if you already is registred</Link>
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          auth
            .setPersistence("local")
            .then(() => {
              return auth.createUserWithEmailAndPassword(email, password);
            })
            .catch(({ message }) => setErr(message));
        }}
      >
        <div className="field">
          <label className="label" htmlFor="signup_email">
            Email adress
          </label>

          <div className="control">
            <input
              className="input"
              onFocus={() => setErr("")}
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              id="signup_email"
              name="signup_email"
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="signup_password">
            Password
          </label>
          <div className="control">
            <input
              className="input"
              onFocus={() => setErr("")}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              id="signup_password"
              name="signup_password"
            />
          </div>
        </div>
        <input className="button" type="submit" value="Create account" />
      </form>
      {err && <p className="has-text-danger">{err}</p>}
    </div>
  );
};

export default SignUp;
