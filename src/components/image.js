import React, { useState, useEffect } from "react";
import { store } from "../firebase/firebase";

const Image = ({ user, file }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    console.log("effect");
    store
      .ref(`images/${user.uid}/${file}`)
      .getDownloadURL()
      .then(setUrl);
  }, file);
  return (
    <img
      alt=""
      src={url}
      style={{ margin: "2em auto", width: "50%", height: "auto" }}
    />
  );
};

export default Image;
