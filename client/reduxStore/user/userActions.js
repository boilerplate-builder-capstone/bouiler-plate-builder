import axios from 'axios';
import types from '../type';

export const userInfo = ({ user }) => {
  return {
    type: types.LOGIN,
    user,
  };
};

export const loginUser = (credentials, history) => {
  return async (dispatch) => {
    try {
      const response = (await axios.post('/api/localAuth', credentials)).data;
      const { token } = response;
      window.localStorage.setItem('token', token);
      dispatch(tokenLogin(history));
    } catch (error) {
      console.log('error occured in loginUser thunk', error);
    }
  };
};

export const tokenLogin = (token, history) => {
  return async (dispatch) => {
    if (token) {
      const user = (
        await axios.get('/api/auth', {
          headers: {
            authorization: token,
          },
        })
      ).data;
      console.log('thunk fired', user);
      dispatch(userInfo({ user }));

      history.push('/');
    }
  };
};
