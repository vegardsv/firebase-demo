import React, { useState, useEffect } from "react";
import { store } from "../firebase/firebase";

const StorageImage = ({ user, file }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    store
      .ref(`images/${user.uid}/${file}`)
      .getDownloadURL()
      .then(setUrl);
  }, file);
  return <img src={url} />;
};

export default StorageImage;
