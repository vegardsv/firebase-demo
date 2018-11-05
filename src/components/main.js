import React from "react";
import { auth } from "../firebase/firebase";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./profile";
import Images from "./images";

const Main = ({ user, setUser }) => {
  return (
    <>
      <h1>Welcome to the app </h1>
      <button onClick={() => auth.signOut()}>Log out</button>

      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/images">Images</Link>
      </nav>

      <Route exact path="/profile" component={() => <Profile user={user} />} />
      <Route exact path="/images" component={() => <Images user={user} />} />
    </>
  );
};

export default Main;
