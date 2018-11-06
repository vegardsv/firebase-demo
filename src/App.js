import React, { useEffect, useState } from "react";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Forgot from "./components/forgot";
import { Route } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Main from "./components/main";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("using effect");
    auth.onAuthStateChanged(authUser => {
      setUser(authUser);
    });
  }, auth);

  if (!user) {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot_password" component={Forgot} />
        </div>
      </section>
    );
  }

  return <Main user={user} setUser={setUser} />;
};

export default App;
