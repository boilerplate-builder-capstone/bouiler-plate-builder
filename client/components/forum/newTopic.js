import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { addNewPost } from '../../reduxStore/user/userActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function newTopic(props) {
  const { user, post, editChange, newTopic} = props;
  const classes = useStyles();
  const [contents, setContents] = useState("");
  const handleChange = (event) => {
    setContents(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if(contents !== ""){
      await newTopic({userId: user.user.id, topicContent: contents});
      editChange()
      }
    } catch (error) {
      console.log('error occured in SignIn component onSubmit', error);
    }
  };
    return (
            <>    
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField id="newTopic" label="Post" value={contents} onChange={handleChange} />
                </div>
                <Button className="editButton" style={{marginTop: 50}} onClick={onSubmit}>
                    <p>Submit Change</p>
                </Button>
                <Button onClick={editChange}>
                  Cancel
                </Button>
              </form>
            </>
    );
}


export default (newTopic);
