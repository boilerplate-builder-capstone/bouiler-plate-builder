import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '150ch',
    },
  },
}));

function newTopic(props) {
  const { user, editChange, newTopic} = props.props;
  const classes = useStyles();
  const [contents, setContents] = useState({title: "", post: "", repo: false});
  const handleChange = (event) => {
    contents[`${event.target.name}`] = event.target.value
    setContents(contents);
    console.log(contents.repo)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if(contents.title !== "" && contents.post !== ""){
      await newTopic({userId: user.user.id, post: contents.post, title: contents.title, repo: contents.repo});
      props.editChange()
      }
    } catch (error) {
      console.log('error occured in SignIn component onSubmit', error);
    }
  };
    return (
            <>   
            {console.log(contents.repo)} 
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField  id="newTopic" label="Title" name="title"  onChange={handleChange} />  
                  <TextField multiline={true} id="newTopic" label="Post" name="post"  onChange={handleChange} />
                  {user.user.github ? (
                    <div>
                      <InputLabel id="Github-Repos">Repo</InputLabel>
                      <Select
                        labelId="Github-Repos"
                        id="Github-Repos"
                        name="repo"
                        onChange={handleChange}
                      >
                          <MenuItem value={false}>
                            None
                          </MenuItem>
                            {user.repos.map(e=>{
                              return <MenuItem key={e.id} value={e.url}>{e.name}</MenuItem>
                            })}
                      </Select>  
                      <FormHelperText>Select a Repo to show latest commits</FormHelperText>
                    </div>) : <></>}
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


export default (newTopic);
