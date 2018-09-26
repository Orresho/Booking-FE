import { SIGNIN_START, AUTH_USER_SET } from "./Constants";

export const SignInAction = (payload) => {
  return {
    type: SIGNIN_START,
    payload,
  }
}

export const SetAuthUser = (payload) => {
  return {
    type: AUTH_USER_SET,
    payload,
  }
}
