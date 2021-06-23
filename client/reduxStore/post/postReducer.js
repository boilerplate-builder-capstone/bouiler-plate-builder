import types from '../type';

const initialState = {
  post: [],
  postThread: {}
};

const postReducer = (state = initialState, action) =>{
    if(action.type === types.GETALLPOSTS){
        const { post } = action
        state = {...state, post}
    } else if(action.type === types.GETFOCUSEDPOST){
      const { postThread } = action
      state = {...state, postThread}
    } 
    return state;
}

export default postReducer;