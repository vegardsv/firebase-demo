import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import config from "./fb-config";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const githubAuthProvider = new firebase.auth.GithubAuthProvider();

const auth = firebase.auth();
const db = firebase.database();
const store = firebase.storage();

export { auth, db, store, githubAuthProvider };
