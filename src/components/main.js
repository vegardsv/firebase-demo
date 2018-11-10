import React from "react";
import { auth } from "../firebase/firebase";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Images from "./images";
import Welcome from "./welcome.js";

const Main = ({ user, setUser }) => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item is-size-4 has-text-black" href="/">
            Firebase demo
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="profile">
              Profile
            </Link>
            <Link className="navbar-item" to="/images">
              Images
            </Link>
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <Link to="/" onClick={() => auth.signOut()}>
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="column is-9 is-offset-2 has-background-white">
          <Route exact path="/" component={Welcome} />
          <Route
            exact
            path="/profile"
            component={() => <Profile user={user} />}
          />
          <Route
            exact
            path="/images"
            component={() => <Images user={user} />}
          />
        </div>
      </section>
    </>
  );
};

export default Main;
