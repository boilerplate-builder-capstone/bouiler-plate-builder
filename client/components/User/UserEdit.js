import React, { Component } from 'react';
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
  const { user, update } = props;
  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await update(user);
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
                <Button className="editButton" style={{marginTop: 50}} onClick={onSubmit}>
                    <p>Submit Change</p>
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
    // login: () => console.log(history),
    update: (credentails) => dispatch(updateUser(credentails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
