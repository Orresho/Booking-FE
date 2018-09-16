import { auth } from "./firebase";

/**
 * Method initializing firebase Sign up with Email and password
 * @param {string} email
 * @param {string} password
 */
export const emailAndPasswordUserCreation = (email, password) => 
  auth.createUserWithEmailAndPassword(email, password);


/**
 * Method initializing firebase Sign in with Email and password
 * @param {string} email
 * @param {string} password
 */
export const emailAndPasswordUserAuthentication = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

/**
 * Method signin out the user
 */
export const signOut = () => auth.signOut();

/**
 * Method that sends an email for resetting the password for given email
 * @param {string} email
 */
export const sendPasswordResetEmail = (email) =>
  auth.sendPasswordResetEmail(email);

/**
 * Method that updates the users password, takes in a users new password
 * @param {string} password
 */
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);