import React from "react";
import { auth } from "../firebase/firebase";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Images from "./images";

const Main = ({ user, setUser }) => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://github.com/">
            Firebase/hooks
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="profile">
              Profile
            </Link>
            <Link
              activeClassName="selected"
              className="navbar-item"
              to="/images"
            >
              Images
            </Link>
          </div>
          <div className="navbar-end">
            <div className="buttons">
              <button className="button is-text" onClick={() => auth.signOut()}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="section">
        <div className="column is-9 is-offset-2 has-background-white">
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <h1 className="title is-1">Welcome</h1>
                <p>
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
              </div>
            )}
          />
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
