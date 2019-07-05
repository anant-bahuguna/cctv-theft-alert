import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCA9mbqXPoosmaedNqAvsYmIO2f3ULhqy8",
  authDomain: "cctv-theft-alert.firebaseapp.com",
  databaseURL: "https://cctv-theft-alert.firebaseio.com",
  projectId: "cctv-theft-alert",
  storageBucket: "gs://cctv-theft-alert.appspot.com",
  messagingSenderId: "474825128778",
  appId: "1:474825128778:web:1c3d46fea11f8883"
};

var fire = firebase.initializeApp(config);
export default fire;
