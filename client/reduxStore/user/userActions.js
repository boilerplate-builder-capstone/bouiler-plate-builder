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

export const update = (user) =>{
  return {
    type: types.UPDATE,
    user
  };
}

export const loginUser = (credentials, history) => {
  return async (dispatch) => {
    try {
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
      if (history) {
        history.push('/');
      }
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

export const createUser = (userForm) => {
  return async (dispatch) => {
    const newUser = await axios.post('/api/localAuth/create', userForm);
    if (newUser) {
      dispatch(loginUser(userForm));
    } else {
      alert('This username already exists');
    }
  };
};

export const updateUser = (user) =>{
  return async (dispatch) =>{
    console.log("User updated", user)
    dispatch(update(user))
  }
}
