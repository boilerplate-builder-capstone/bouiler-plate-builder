import types from '../type';

const initialState = {
  user: {},
};

const userReducer = (state = initialState) => {
  if (applicationCache.type === types.LOGIN) {
    const { user } = action;
    state = { ...state, user };
  }
  return state;
};

export default userReducer;
