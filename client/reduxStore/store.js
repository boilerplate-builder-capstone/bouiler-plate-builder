import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunks, loggingMiddleware)
);

export default store;
