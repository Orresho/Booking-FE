import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from "./Redux";
import Loading from './Components/Loading';

const store = configureStore().store;
const persistor = configureStore().persistor;

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
