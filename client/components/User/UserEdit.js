import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { updateUser } from '../../reduxStore/user/userActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function UserEdit(props) {
  const { user, update, editChange} = props;
  const classes = useStyles();
  const [invalid, setInvalid] = useState(false)
  const [username, setUsername] = useState("");
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let useRegex = /^[a-zA-Z0-9]+$/
      let validname = username.match(useRegex)
      if(validname && username !== ""){
      await update(username);
      editChange()
      }else{
        setInvalid(true)
      }
    } catch (error) {
      console.log('error occured in SignIn component onSubmit', error);
    }
  };
    return (
            <>    
              <h3>Current userName: {user.user.username}</h3>
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField id="username-edit" label="Username" value={username} onChange={handleChange} />
                </div>
                {invalid ? <p>***Invalid username Please Enter a new Name</p> : <></>}
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
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    update: (credentails) => dispatch(updateUser(credentails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
