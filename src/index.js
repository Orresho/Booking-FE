import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import Cookies from "js-cookie";
import { UPDATE_AUTHENTICATE } from "./Redux/Actions/Constants";
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from "./Redux";
import Loading from './Components/Loading';

const store = configureStore().store;
const persistor = configureStore().persistor;

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
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Bootstrap />, document.getElementById('root'));
registerServiceWorker();
