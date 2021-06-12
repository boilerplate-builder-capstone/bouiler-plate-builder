import types from '../type';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  if (action.type === types.LOGIN) {
    const { user } = action;
    state = { ...state, user };
  }
  return state;
};

export default userReducer;
