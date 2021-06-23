import types from '../type';

const initialState = {
  user: false,
};

const userReducer = (state = initialState, action) => {
  if (action.type === types.LOGIN) {
    const { user } = action;
    state = { ...state, user };
  } else if (action.type === types.LOGOUT) {
    state = initialState;
  } else if(action.type === types.UPDATE){
    const { user } = action;
    state = {...state, user}
  }else if(action.type === types.ADDREPOS){
    const { repos } = action;
    state = {...state, repos}
  }
  return state;
};

export default userReducer;
