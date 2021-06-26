import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import postReducer from './post/postReducer';
import templateReducer from './template/templateReducer'

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  template: templateReducer
});

export default rootReducer;
