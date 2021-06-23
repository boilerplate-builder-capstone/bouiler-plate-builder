import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { CommentSharp } from '@material-ui/icons';



function ForumPost (props){
    const [post, setPost] = useState({})
    const { postId } = useParams()

    useEffect(async()=>{
        try{
        const { data } = await axios.get(`/api/forum/${postId}`);
        const {comments, id, post, user, createdAt } = data[0]
        setPost({id, post, user, comments, createdAt})
        }catch(er){console.log(er)}
    }, [])
    console.log(post)
    if(post.id){
        return (
        <div> 
           <div className="individualPost">
                        <div className="individualUserColumn"><h3>{post.user.username}</h3><Avatar src={post.user.github ? post.user.github.avatar_url : post.user.icon} ></Avatar></div>
                        <div className="individualPostColumn"><p>{post.post}</p><p className="postDate">{(new Date(post.createdAt)).toDateString()}</p></div>
            </div>
            <div className="replies">
            {post.comments.map(e=>{
                return(
                <div className="replyPost" key={e.id}>
                    <div className="replyUserColumn"><h3>{e.user.username}</h3><Avatar src={e.user.github ? e.user.github.avatar_url : e.user.icon} ></Avatar></div>
                    <div className="replyPostColumn"><p>{e.comment}</p><p className="postDate">{(new Date(e.createdAt)).toDateString()}</p></div>        
                </div>
                )
            })}
            </div>     
        </div>
        )
    }else{ return <div>Loading</div>}
}

// const mapStateToProps = (state) => {
//     return {
//       user: state.user,
//     };
//   };

export default (ForumPost)