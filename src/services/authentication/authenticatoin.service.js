//entry point for the logic going into the service
import * as firebase from "firebase";

const loginRequest = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
