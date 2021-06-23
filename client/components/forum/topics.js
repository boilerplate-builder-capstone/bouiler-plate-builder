import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getPosts, addNewPost } from '../../reduxStore/post/postActions';
import AddNewTopic from './newTopic'
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';



function ForumPage (props){
    const [edit, setEdit] = useState(false);

    useEffect(async()=>{
        try{
        props.getAllPosts()
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
        <div> 
            {props.post.post.map(e=>{
                return <div className="topicPost" key={e.id}>
                    <Link to={`/forum/${e.id}`}>
                        <div className="userColumn"><h3>{e.user.username}</h3><Avatar src={e.user.github ? e.user.github.avatar_url : e.user.icon} ></Avatar></div>
                        <div className="postColumn"><p>{e.post}</p><p className="postDate">{(new Date(e.createdAt)).toDateString()}</p></div>
                    </Link>
                </div>
            })}
            {edit ? (
            <AddNewTopic props={props} editChange={handleClick} />
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
        newTopic: (contents)=>dispatch(addNewPost(contents))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumPage)