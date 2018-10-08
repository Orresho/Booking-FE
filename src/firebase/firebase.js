import firebase from 'firebase/app';
import { devConfig, prodConfig } from "../_firebaseConfig/index";
import "firebase/auth";
import "firebase/database";

// Fallback on development config if we don't have a production environment
const config = process.env.NODE_ENV === "production" 
? prodConfig 
: devConfig;

if (firebase.app.length > 0) {
  firebase.initializeApp(config)
}

const auth = firebase.auth();
const database = firebase.database();
export {
  auth,
  database,
};