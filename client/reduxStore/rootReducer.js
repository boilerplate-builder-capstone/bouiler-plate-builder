import { combineReducers } from 'redux';

import userReducer from './user/userReducer';

const rootReucer = combineReducers({
  user: userReducer,
});

export default rootReucer;
