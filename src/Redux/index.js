import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './Reducers';
import { rootEpic } from './Epics';
import { createLogger } from 'redux-logger';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {

  const logger = createLogger({
    collapsed: true,
  });

  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );

  // epicMiddleware.run(rootEpic);

  return store;
}