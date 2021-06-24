import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getPosts, addNewPost } from '../../reduxStore/post/postActions';
import { getRepos } from '../../reduxStore/user/userActions';
import AddNewTopic from './newTopic';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';



function ForumPage (props){
    const [edit, setEdit] = useState(false);

    useEffect(async()=>{
        try{
        props.getAllPosts()
        if (props.user.user.github) {
          props.repos(props.user.user.github.repos_url); 
        }
        }catch(er){console.log(er)}
    }, [])

    const handleClick = () => {
        if (edit) {
          setEdit(false);
        } else {
          setEdit(true);
        }
      };
 
        return (
        <div className="topics"> 
            {props.post.post.map(e=>{
                return <div className="topicPost" key={e.id}>
                    <Link to={`/forum/${e.id}`}>
                        <div className="userColumn"><h3>{e.user.username}</h3><Avatar src={e.user.github ? e.user.github.avatar_url : e.user.icon} ></Avatar></div>
                        <div className="postColumn"><b>{e.title}</b><span>{e.post}</span><small className="postDate">{(new Date(e.createdAt)).toDateString()}</small></div>
                    </Link>
                </div>
            })}
            {edit ? (
            <AddNewTopic props={props} editChange={handleClick} />
          ) : (
            props.user.user ? (
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
            ) : ( <p>Log in to post</p>)
          )}
        </div>
        )
}

const mapStateToProps = (state)=>{
    return{
        user: state.user,
        post: state.post
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getAllPosts: ()=>dispatch(getPosts()),
        newTopic: (contents)=>dispatch(addNewPost(contents)),
        repos: (repoURL) => dispatch(getRepos(repoURL)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumPage)