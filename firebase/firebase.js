import firebase from 'firebase/app'
import { devConfig, prodConfig } from "../config/firebase";

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