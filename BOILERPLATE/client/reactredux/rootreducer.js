// combine all your reducers here

import { combineReducers } from 'redux'
import singleReducer from './reducer'

const rootReducer = combineReducers({
    stateName: singleReducer
});

export default rootReducer;