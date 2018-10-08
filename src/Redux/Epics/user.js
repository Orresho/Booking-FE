import { combineEpics } from 'redux-observable';
import * as action from "../Actions/Constants";
import 'rxjs/add/operator/map';

const getDataAfterLogin = action$ => {
  return action$.ofType(action.GET_USER_INFORMATION).map(() => {
    console.log('hello world')
  });
}


export default combineEpics(
  getDataAfterLogin,
);