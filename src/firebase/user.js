import { database } from "./firebase";

export const setUserTypeToFirebase = (userId, userType) => {
  return database.ref(`users/${userId}/userType`).set(userType);
}

/** Return a promise with the snapshot value from firebase database */
export const getUserTypeFromFirebase = (userId) => {
  return database.ref(`users/${userId}/userType`).once('value');
}