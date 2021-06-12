import { combineReducer } from 'redux';

import userReducer from './user/userReducer';

const rootReucer = combineReducer({
  user: userReducer,
});

export default rootReucer;
