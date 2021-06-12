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
  }
  return state;
};

export default userReducer;
