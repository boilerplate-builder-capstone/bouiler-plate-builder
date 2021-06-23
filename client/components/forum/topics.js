import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import axios from 'axios'
import { Link } from 'react-router-dom'



function ForumPage (props){
    const [posts, setPosts] = useState([])    

    useEffect(async()=>{
        try{
        const { data } = await axios.get("/api/forum");
        setPosts(data)
        }catch(er){console.log(er)}
    }, [])

 
        return (
        <div> 
            {posts.map(e=>{
                return <div className="topicPost" key={e.id}>
                    <Link to={`/forum/${e.id}`}>
                        <div className="userColumn"><h3>{e.user.username}</h3><Avatar src={e.user.github ? e.user.github.avatar_url : e.user.icon} ></Avatar></div>
                        <div className="postColumn"><p>{e.post}</p><p className="postDate">{(new Date(e.createdAt)).toDateString()}</p></div>
                    </Link>
                </div>
            })}
        </div>
        )
}

// const mapStateToProps = (state) => {
//     return {
//       user: state.user,
//     };
//   };

export default (ForumPage)