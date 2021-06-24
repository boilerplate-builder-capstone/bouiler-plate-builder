import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '150ch',
    },
  },
}));

function newComment(props) {
  const { user, post, newReply} = props.props;
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if(comment !== ""){
      await newReply({userId: user.user.id, comment, postId: post.postThread.id});
      props.editChange()
      }
    } catch (error) {
      console.log('error occured in SignIn component onSubmit', error);
    }
  };
    return (
            <>    
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField multiline={true} id="newTopic" label="Post" value={comment} onChange={handleChange} />
                </div>
                <Button className="editButton" onClick={onSubmit}>
                    Submit Change
                </Button>
                <Button onClick={props.editChange}>
                  Cancel
                </Button>
              </form>
            </>
    );
}


export default (newComment);
