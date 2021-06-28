import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getPosts, addNewPost, deletePost } from '../../reduxStore/post/postActions';
import { getRepos } from '../../reduxStore/user/userActions';
import AddNewTopic from './newTopic';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';




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
                        <div className="userColumn"><Link to={`/forum/${e.id}`}><h3>{e.user.username}</h3><Avatar src={e.user.github ? e.user.github.avatar_url : e.user.icon} ></Avatar></Link></div>
                        <div className="postColumn"><Link to={`/forum/${e.id}`}><b>{e.title}</b><span>{e.post}</span></Link><small className="postDate">{props.user.user && props.user.user.id===e.userId ? (<Button onClick={()=>props.delete(e.id)} color="primary">
            Delete
          </Button>):(<></>)}{(new Date(e.createdAt)).toDateString()}</small></div>
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
            ) : ( ( <Button href="/#signin" color="primary" className="loginButton">
            Login to post a topic!
          </Button>))
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
        delete: (id)=>dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumPage)