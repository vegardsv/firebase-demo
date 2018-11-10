import React, { useState, useEffect } from "react";
import { store } from "../firebase/firebase";

const Image = ({ user, file, onDelete, isDeleting }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    console.log("effect");
    store
      .ref(`images/${user}/${file}`)
      .getDownloadURL()
      .then(setUrl);
  }, file);
  return (
    <div>
      <img
        alt=""
        src={url}
        style={{ margin: "2em auto", width: "50%", height: "auto" }}
      />
      <button
        className={`button ${isDeleting ? "is-loading" : ""} is-primary`}
        onClick={onDelete}
      >
        Slett
      </button>
    </div>
  );
};

export default Image;
