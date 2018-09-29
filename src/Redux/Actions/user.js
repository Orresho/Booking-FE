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
  return {
    type: SIGNOUT_COMPLETE,
  }
}
