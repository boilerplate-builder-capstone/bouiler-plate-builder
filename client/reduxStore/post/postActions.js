import axios from 'axios';
import types from '../type';

export const getAllPosts = (post) => {
  return {
    type: types.GETALLPOSTS,
    post,
  };
};
export const getFocusedPost = (postThread) =>{
  return {
    type: types.GETFOCUSEDPOST,
    postThread,
  };
};

export const newPost = (newtopic) =>{
  return {
    type: types.NEWPOST,
    newtopic
  }
}

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/forum");
      dispatch(getAllPosts(data))
    } catch (error) {
      console.log('error occured in getPosts thunk', error);
    }
  };
};

export const getThread = (postId) =>{
  return async (dispatch) =>{
    try{
      const { comments, id, post, user, createdAt  } = (await axios.get(`/api/forum/${postId}`)).data[0];
      const postThread = { comments, id, post, user, createdAt  }
      dispatch(getFocusedPost(postThread))

    }catch(error){
      console.log('error occured in getPosts thunk', error);
    }
  }
}

export const addNewPost = (contents) =>{
  return async (dispatch) =>{
    try{
      const { data } = await axios.post('/api/forum/createpost', { contents });
      dispatch(newPost( data ))
    }catch(error){
      console.log('new post error', error)
    }
  }
}