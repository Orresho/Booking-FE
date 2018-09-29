import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Cookies from "js-cookie";
import { UPDATE_AUTHENTICATE } from "./Redux/Actions/Constants";
import rootReducer from "./Redux/Reducers";

const store = createStore(rootReducer);

if (Cookies.get('sessionId')) {
  store.dispatch({
    type: UPDATE_AUTHENTICATE,
    sessionId: Cookies.get('sessionId'),
    payload: store.getState().user,
  });
}

// dispose as global variable to allow access from anywhere
window.reduxStore = store;

const Bootstrap = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Bootstrap />, document.getElementById('root'));
registerServiceWorker();
