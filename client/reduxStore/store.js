import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import loggingMiddleware from 'redux-logger';
import rootReucer from './rootReducer';

const store = createStore(
  rootReucer,
  applyMiddleware(thunks, loggingMiddleware)
);

export default store;
