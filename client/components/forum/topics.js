import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'



function ForumPage (props){
    const [posts, setPosts] = useState([])     

    useEffect(async()=>{
        try{
        const { data } = await axios.get("/api/forum");
        setPosts(data)
        }catch(er){console.log(er)}
    }, [])

        console.log(posts)
        return (
        <div>
            {posts.map(e=>{
                return <p key = {e.id}>{e.post}</p>
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