import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { getThread, addNewComment } from '../../reduxStore/post/postActions'
import IconButton from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import NewComment from './newComment'
import Carousel from "react-multi-carousel";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';



function ForumPost (props){
    const [edit, setEdit] = useState(false);
    const { postId } = useParams()
    const [show, setShow] = useState(false)

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
    const handleShow = () =>{
      if(show){
        setShow(false)
      }else{
        setShow(true)
      }
    }

    if(props.post.postThread.post){
        return (
        <div> 
           <div className="individualPost">
                        <div className="individualUserColumn"><h3>{props.post.postThread.user.username}</h3><Avatar src={props.post.postThread.user.github ? props.post.postThread.user.github.avatar_url : props.post.postThread.user.icon} ></Avatar></div>
                        <div className="individualPostColumn"><p>{props.post.postThread.post}</p><small className="postDate">{(new Date(props.post.postThread.createdAt)).toDateString()}</small></div>
            </div>
            { props.post.postThread.repo ? (
            <div className="repoCard">
              <div className="repoCardHeaders">
                    <h3>Repo: {props.post.postThread.repo.name}</h3>
                    <Link href={props.post.postThread.repo.url} target="_blank">Checkout on Github</Link>
                    {show ? <Button className="showButton" variant="contained" onClick={handleShow} type="">hide github commits</Button>: <Button className="showButton" variant="contained" onClick={handleShow}>show recent github commits</Button>}
              </div>     
                    {show ? (
                          <Carousel
                          additionalTransfrom={0}
                          showDots={true}
                          arrows
                          autoPlaySpeed={3000}
                          className="repoCommmits"
                          containerClass="repoCommmitsContainer"
                          dotListClass=""
                          draggable
                          focusOnSelect={true}
                          infinite={false}
                          itemClass="repoCommmitsCarouselItem"
                          minimumTouchDrag={80}
                          renderButtonGroupOutside={false}
                          renderDotsOutside={false}
                          responsive={{
                              desktop: {
                                  breakpoint: {
                                      max: 3000,
                                      min: 1024
                                  },
                                  items: 1,
                                  paritialVisibilityGutter : 40
                                  }
                              }
                          }
                          >
                              {props.post.postThread.repo.files.map(e=>{
                                  return ( 
                                    <Card key={e.sha} className="repoCommitCards">
                                        <CardContent className= "repoCard">
                                            <pre>{e.patch}</pre>
                                        </CardContent> 
                                    </Card>)
                              })}
                            </Carousel>): (<></>)}  
              </div> 
              ): (<></>)}
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
            ):( <p>Log in to post</p>)
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