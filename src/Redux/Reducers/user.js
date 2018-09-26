import * as types from "../Actions/Constants";

const initialState = {
  isAuthenticated: null,
  isLoading: false,
}

export default (state = initialState, action) => {

  switch (action.type) {
    case types.SIGNIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNIN_COMPLETE: {
      return {
        ...state,
        userInformation: action.payload,
        isLoading: false,
      };
    }
    case types.AUTH_USER_SET: {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    }
    default:
      return state;
  }
};