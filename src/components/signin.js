import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("testuser@test.te");
  const [password, setPassword] = useState("password123");
  const [err, setErr] = useState("");

  return (
    <>
      <h1>Sign in</h1>
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
        <label htmlFor="sign_in_username"> Username </label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          id="sign_in_username"
          name="sign_in_username"
        />
        <br />
        <label htmlFor="sign_in_password"> Password </label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="text"
          id="sign_in_password"
          name="sign_in_password"
        />
        <br />
        <input type="submit" value="Sign in" />
      </form>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <p>
        <Link to="forgot_password">Forgot password?</Link>
      </p>
    </>
  );
};

export default SignIn;
