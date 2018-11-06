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
      <h1 className="title is-1">Profile</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          db.ref(`users/${user.uid}/age`).set(age);
          db.ref(`users/${user.uid}/name`).set(name);
        }}
      >
        <div className="field">
          <label className="label">Name </label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Age </label>
          <input
            className="input"
            value={age}
            onChange={e => setAge(e.target.value)}
            type="number"
          />
        </div>
        <input
          className="button is-success"
          type="submit"
          value="Update profile"
        />
      </form>
    </>
  );
};

export default Profile;
