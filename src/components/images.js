import React, { useState, useEffect } from "react";
import { db, store } from "../firebase/firebase";
import StorageImage from "./storageImage";

const objToArr = obj =>
  Object.keys(obj).map(key => ({
    val: obj[key],
    key: key
  }));

const Images = ({ user, file }) => {
  const [upload, setUpload] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("effect");
    db.ref(`users/${user.uid}/images`).on("value", snapshot => {
      if (snapshot.val()) {
        setImages(snapshot.val());
      }
    });
  }, user);

  return (
    <>
      <h1>Images</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!upload) {
            console.log("no image selected");
            return;
          }
          store
            .ref(`images/${user.uid}`)
            .child(upload.name)
            .put(upload)
            .then(() => {
              return db
                .ref(`users/${user.uid}/images/`)
                .push({
                  filename: upload.name,
                  likes: 0
                })
                .then(() => {
                  // resize and upload here!
                })
                .then(() => {
                  setUpload(null);
                  document.querySelector("#fileInput").value = "";
                });
            });
        }}
      >
        <label>
          Upload image
          <input
            id="fileInput"
            onChange={e => setUpload(e.target.files[0])}
            type="file"
          />
        </label>
        <input type="submit" value="Upload Image" />
      </form>
      <hr />
      <h2>Images</h2>

      {objToArr(images).map(i => (
        <div key={i.val.filename}>
          <StorageImage user={user} file={i.val.filename} />
          <p>{i.val.filename}</p>
          <p>Likes: {i.val.likes}</p>
        </div>
      ))}
    </>
  );
};

export default Images;
