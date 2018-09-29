import Cookies from "js-cookie";
import * as types from "../Actions/Constants";

const initialState = {
  isAuthenticated: false,
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
        isLoading: false,
        isAuthenticated: true,
      };
    }
    case types.GET_USER_INFORMATION: {
      const sessionId = action.payload.user.uid
      Cookies.set('sessionId', sessionId, { expires: 0.10416 });

      return {
        ...state,
        sessionId: Cookies.get('sessionId'),
        user: action.payload,
        isAuthenticated: true,
      };
    }

    case types.UPDATE_AUTHENTICATE: {
      return {
        ...state,
        sessionId: action.sessionId,
        isAuthenticated: true,
        user: action.payload
      }
    }

    case types.SIGNOUT_COMPLETE: {
      Cookies.remove("sessionId");
      return {
        ...state,
        isAuthenticated: false,
        sessionId: null,
        user: null,
      }
    }
    default:
      return state;
  }
};