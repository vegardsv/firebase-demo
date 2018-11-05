import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";

const Profile = ({ user }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    console.log("using effect");
    db.ref(`users/${user.uid}`).on("value", snapshot => {
      if (snapshot.val()) {
        setAge(snapshot.val().age);
        setName(snapshot.val().name);
      }
    });
  }, user);

  return (
    <>
      <h2>Profile</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          db.ref(`users/${user.uid}/age`).set(age);
          db.ref(`users/${user.uid}/name`).set(name);
        }}
      >
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age
          <input
            value={age}
            onChange={e => setAge(e.target.value)}
            type="number"
          />
        </label>
        <br />
        <input type="submit" value="Update profile" />
      </form>
    </>
  );
};

export default Profile;
