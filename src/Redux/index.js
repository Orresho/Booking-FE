import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
// import { rootEpic } from './Epics';
import rootReducer from './Reducers';
import { createLogger } from 'redux-logger';

// Redux persist for state persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {

  const logger = createLogger({
    collapsed: true,
  });

  const store = createStore(
    persistedReducer,
    applyMiddleware(logger)
  );

  let persistor = persistStore(store)
  return { store, persistor }

  // epicMiddleware.run(rootEpic);

}