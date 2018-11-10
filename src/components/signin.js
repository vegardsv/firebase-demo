import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, githubAuthProvider } from "../firebase/firebase";
import github from "../gfx/github.svg";

const SignIn = () => {
  const [email, setEmail] = useState("testuser@test.te");
  const [password, setPassword] = useState("password123");
  const [err, setErr] = useState("");

  return (
    <div className="column is-5 is-offset-4 has-background-white">
      <h1 className="title is-1 has-text-centered">Sign in</h1>
      <div className="control">
        <button
          className="button is-large is-fullwidth"
          onClick={() => {
            auth.signInWithRedirect(githubAuthProvider);
          }}
        >
          <img
            style={{ marginRight: ".5em" }}
            src={github}
            width="24px"
            height="24px"
          />
          Sign in with GitHub
        </button>
      </div>

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
        <hr />

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
            Password{" "}
            <Link className="has-text-grey-dark" to="forgot_password">
              Forgot?
            </Link>
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

        {err && (
          <div className="field">
            <p className="has-text-danger">{err}</p>
          </div>
        )}

        <div className="buttons">
          <input
            className="button is-large is-fullwidth is-primary"
            type="submit"
            value="Sign in"
          />
        </div>
      </form>

      <hr />
      <p className="has-text-centered">
        Not a member? <Link to="/signup">Sign up now</Link>
      </p>
    </div>
  );
};

export default SignIn;
