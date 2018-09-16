import firebase from 'firebase/app'

const devConfig = {
  apiKey: "AIzaSyCkFl-aonGKLF9mSMfNE8jKRDTs37cf_Bg",
  authDomain: "orhanblogdev.firebaseapp.com",
  databaseURL: "https://orhanblogdev.firebaseio.com",
  projectId: "orhanblogdev",
  storageBucket: "orhanblogdev.appspot.com",
  messagingSenderId: "87313294646"
};

const prodConfig = {
  apiKey: "AIzaSyBwK0wH9eWoHX5c9zlT1C6_g4-X8OKs8nA",
  authDomain: "orhanblog-6cff4.firebaseapp.com",
  databaseURL: "https://orhanblog-6cff4.firebaseio.com",
  projectId: "orhanblog-6cff4",
  storageBucket: "orhanblog-6cff4.appspot.com",
  messagingSenderId: "879095221876"
};

// Fallback on development config if we don't have a production environment
const config = process.env.NODE_ENV === "production" 
? prodConfig 
: devConfig;

if (!firebase.app.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth();

export {
  auth,
};