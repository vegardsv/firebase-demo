import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, githubAuthProvider } from "../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("testuser@test.te");
  const [password, setPassword] = useState("password123");
  const [err, setErr] = useState("");

  return (
    <div className="column is-5 is-offset-4 has-background-white">
      <h1 className="title is-1">Sign in</h1>
      <p>
        Or <Link to="/signup">sign up for an account</Link>
      </p>

      <form
        onSubmit={e => {
          e.preventDefault();
          auth
            .setPersistence("local")
            .then(() => {
              return auth.signInWithEmailAndPassword(email, password);
            })
            .catch(({ message }) => setErr(message));
        }}
      >
        <div className="field">
          <label className="label" htmlFor="sign_in_username">
            Username
          </label>
          <div className="control">
            <input
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              id="sign_in_username"
              name="sign_in_username"
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="sign_in_password">
            Password
          </label>
          <div className="control">
            <input
              className="input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="text"
              id="sign_in_password"
              name="sign_in_password"
            />
          </div>
        </div>
        <div className="buttons">
          <input className="button" type="submit" value="Sign in" />
          <Link to="forgot_password">Forgot password</Link>
        </div>
      </form>
      {err && <p className="has-text-danger">{err}</p>}
      <p />

      <div className="control">
        <button
          className="button is-large"
          onClick={() => {
            auth.signInWithRedirect(githubAuthProvider);
          }}
        >
          Sign in with gitlab
        </button>
      </div>
    </div>
  );
};

export default SignIn;
