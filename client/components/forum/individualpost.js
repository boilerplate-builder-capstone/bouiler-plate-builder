import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CommentSharp } from '@material-ui/icons';
import { getThread, addNewComment } from '../../reduxStore/post/postActions'
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import NewComment from './newComment'



function ForumPost (props){
    const [edit, setEdit] = useState(false);
    const { postId } = useParams()

    useEffect(async()=>{
        try{
        props.getIndPost(postId)
        }catch(er){console.log(er)}
    }, [])

    const handleClick = () => {
        if (edit) {
          setEdit(false);
        } else {
          setEdit(true);
        }
      };

    if(props.post.postThread.post){
        return (
        <div> 
           <div className="individualPost">
                        <div className="individualUserColumn"><h3>{props.post.postThread.user.username}</h3><Avatar src={props.post.postThread.user.github ? props.post.postThread.user.github.avatar_url : props.post.postThread.user.icon} ></Avatar></div>
                        <div className="individualPostColumn"><p>{props.post.postThread.post}</p><small className="postDate">{(new Date(props.post.postThread.createdAt)).toDateString()}</small></div>
            </div>
            <div className="replies">
            {props.post.postThread.comments.map(e=>{
                return(
                <div className="replyPost" key={e.id}>
                    <div className="replyUserColumn"><h3>{e.user.username}</h3><Avatar src={e.user.github ? e.user.github.avatar_url : e.user.icon} ></Avatar></div>
                    <div className="replyPostColumn"><p>{e.comment}</p><small className="postDate">{(new Date(e.createdAt)).toDateString()}</small></div>        
                </div>
                )
            })}
            {edit ? (
            <NewComment props={props} editChange={handleClick} />
          ) : (
            <>
              <h3>{props.user.user.username}</h3>
              <IconButton
                className="editButton"
                style={{ marginTop: 50 }}
                onClick={handleClick}
              >
                <p>Post new topic</p>
                <EditIcon />
              </IconButton>
            </>
          )}
            </div>     
        </div>
        )
    }else{ return <div>Loading</div>}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getIndPost: (postId)=>{dispatch(getThread(postId))},
        newReply: (contents)=>{dispatch(addNewComment(contents))}
    }
} 



const mapStateToProps = (state) => {
    return {
      user: state.user,
      post: state.post
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ForumPost)