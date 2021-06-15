import axios from 'axios';
import types from '../type';

export const userInfo = ({ user }) => {
  return {
    type: types.LOGIN,
    user,
  };
};

export const logoutCall = () => {
  return {
    type: types.LOGOUT,
  };
};

export const loginUser = (credentials, history) => {
  return async (dispatch) => {
    try {
      console.log('user actions**** ', history);
      const response = (await axios.post('/api/localAuth', credentials)).data;
      const token = response;
      window.localStorage.setItem('token', token);
      dispatch(tokenLogin(history));
    } catch (error) {
      console.log('error occured in loginUser thunk', error);
    }
  };
};

export const tokenLogin = (history) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const user = (
        await axios.get('/api/auth', {
          headers: {
            authorization: token,
          },
        })
      ).data;
      dispatch(userInfo({ user }));

      history.push('/');
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    window.localStorage.removeItem('token');
    dispatch(logoutCall());

    alert('Logged out successfully');
  };
};
