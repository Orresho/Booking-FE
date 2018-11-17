import { 
  SIGNIN_START, 
  GET_USER_INFORMATION, 
  SIGNOUT_COMPLETE } from "./Constants";

export const SignInAction = (payload) => {
  return {
    type: SIGNIN_START,
    payload,
  }
}

export const SetAuthUser = (payload) => {
  return {
    type: GET_USER_INFORMATION,
    payload,
  }
}

export const SignOut = () => {
  
  // route to index page with refresh page to reset app state
  // This could possibly be moved to an epic later on if necessary
  window.location.replace('/')

  return {
    type: SIGNOUT_COMPLETE,
  }
}
