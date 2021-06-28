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
    let repo = false
    let vals = false
    try{
      vals = (await axios.get(`/api/forum/${postId}`)).data[0];
      const { comments, id, post, user, createdAt } = vals
      if(vals.repo !== "false"){
        try{
        const { data } = await axios.get(`${vals.repo}`)
        const commits = (await axios.get(`${data.url}/commits`)).data
        const recentcommit = (await axios.get(`${commits[0].url}`))
        repo = {name: data.name, files: recentcommit.data.files, url: data.html_url}
        }catch(er){
          console.log("no repos fethced", er)
        }
      }
      const postThread = { comments, id, post, user, createdAt, repo }
      dispatch(getFocusedPost(postThread))

    }catch(error){
      console.log('error occured in getPosts thunk', error);
    }
  }
}

export const addNewPost = (contents) =>{
  return async (dispatch) =>{
    try{
      await axios.post('/api/forum/createpost', { contents });
      dispatch(getPosts())
    }catch(error){
      console.log('new post error', error)
    }
  }
}

export const addNewComment = (contents) =>{
  return async (dispatch) =>{
    try{
      await axios.post('/api/forum/createreply', { contents });
      dispatch(getThread(contents.postId))
    }catch(error){
      console.log('new post error', error)
    }
  }
}


export const deletePost = (contents) =>{
  return async (dispatch) =>{
    try{
      await axios.delete('/api/forum/deletetopic', { data: { contents }});
      dispatch(getPosts())
    }catch(error){
      console.log('new post error', error)
    }
  }
}

export const deleteComment = (contents) =>{
  return async (dispatch) =>{
    try{
      await axios.delete('/api/forum/deletereply', {data: {id: contents.commentId} });
      dispatch(getThread(contents.postId))
    }catch(error){
      console.log('new post error', error)
    }
  }
}