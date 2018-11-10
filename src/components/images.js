import React, { useState, useEffect } from "react";
import { db, store } from "../firebase/firebase";
import Image from "./image";
import Upload from "./upload";

const objToArr = obj =>
  Object.keys(obj).map(key => ({
    val: obj[key],
    key: key
  }));

const deleteImage = (user, filename, key) =>
  store
    .ref(`images/${user}`)
    .child(filename)
    .delete()
    .then(() => {
      db.ref(`users/${user}`)
        .child("images")
        .child(key)
        .remove();
    });

const uploadImage = (user, file) =>
  store
    .ref(`images/${user}`)
    .child(file.name)
    .put(file)
    .then(() => {
      return db.ref(`users/${user}/images/`).push({
        filename: file.name,
        likes: 0,
        tags: ""
      });
    });

const setTag = (user, imageKey, newTagString) =>
  db
    .ref(`users/${user}/images/${imageKey}`)
    .child("tags")
    .set(newTagString);

const Images = ({ user }) => {
  const [upload, setUpload] = useState(null);
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState([]);
  const [addTagInput, setAddTagInput] = useState([]);

  useEffect(() => {
    db.ref(`users/${user.uid}/images`).on("value", snapshot => {
      if (snapshot.val()) {
        setImages(objToArr(snapshot.val()));
      }
    });
  }, user);

  return (
    <>
      <h1 className="title is-1">Images</h1>

      <label className="label">Upload image </label>
      <div className="columns">
        <div className="column is-half">
          <Upload
            filename={(upload && upload.name) || ""}
            onChange={e => setUpload(e.target.files[0])}
          />
        </div>
        <div className="column">
          <button
            className={`button ${
              isUploading ? "is-loading" : ""
            } is-fullwidth is-primary`}
            onClick={() => {
              setIsUploading(true);
              uploadImage(user.uid, upload).then(() => {
                setUpload(null);
                document.querySelector("#fileInput").value = "";
                setIsUploading(false);
              });
            }}
          >
            Upload file
          </button>
        </div>
      </div>

      <hr />

      {images.map(i => (
        <div className="box" key={i.val.filename}>
          <Image
            onDelete={() => {
              setIsDeleting(isDeleting.concat(i.val.key));
              deleteImage(user.uid, i.val.filename, i.key).then(() => {
                setImages(images.filter(x => x.key != i.key));
                setIsDeleting(isDeleting.filter(x => x != i.val.key));
              });
            }}
            user={user.uid}
            file={i.val.filename}
            isDeleting={isDeleting.includes(i.val.key)}
          />

          <div className="columns">
            <div className="column is-three-quarters">
              <input
                onKeyDown={e => {
                  if (e.keyCode == 13) {
                    setTag(
                      user.uid,
                      i.key,
                      `${i.val.tags};${addTagInput[i.key]}`
                    );

                    setAddTagInput({
                      ...addTagInput,
                      [i.key]: ""
                    });
                  }
                }}
                className="input"
                value={addTagInput[i.key]}
                onChange={e => {
                  setAddTagInput({
                    ...addTagInput,
                    [i.key]: e.target.value
                  });
                }}
                type="text"
              />
            </div>
            <div className="column">
              {" "}
              <button
                className="button is-fullwidth is-primary"
                onClick={() => {
                  setTag(
                    user.uid,
                    i.key,

                    `${i.val.tags};${addTagInput[i.key]}`
                  );
                  setAddTagInput({
                    ...addTagInput,
                    [i.key]: ""
                  });
                }}
              >
                Add tag
              </button>
            </div>
          </div>

          <div className="block is-danger">
            {(i.val.tags || "")
              .split(";")
              .filter(x => x.trim())
              .map(text => (
                <div className="tags has-addons">
                  <span className="tag">{text}</span>
                  <a
                    className="tag is-delete"
                    onClick={() => {
                      setTag(
                        user.uid,
                        i.key,
                        i.val.tags
                          .split(";")
                          .filter(tag => tag != text)
                          .join(";")
                      );
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Images;
