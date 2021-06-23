import React, { useState, useEffect } from 'react';
import CardCarousel from './CardCarousel';
import IconButton from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import UserEdit from './UserEdit';
import { getRepos } from '../../reduxStore/user/userActions'
import axios from 'axios';

function UserDashboard(props) {
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState('');
  const [iframe , setIframe] = useState('');

  useEffect(async () => {
    try {
      if (props.user.user.github) {
        props.repos(props.user.user.github.repos_url); 
        setImage(props.user.user.github.avatar_url);
      } else {
        setImage(props.user.user.icon);
      }
    } catch (er) {
      console.log(er);
    }
  }, []);
  const handleClick = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const check = async() =>{
  try{
if(props.user.repos){
  const { data } = await axios.get(props.user.repos[0].commits_url.substring(0, props.user.repos[0].commits_url.length-6));
  const info = await axios.get(data[0].url)
  setIframe(info.data.files[0].patch)
  console.log(iframe)
}
  }catch(er){console.log(er)}
}
check()
  return (
    <div>
      <div id="dashboardcontainer">
        <div id="imageeditcont">
          <img className="userimage" src={image} />
          {edit ? (
            <UserEdit editChange={handleClick} />
          ) : (
            <>
              <h3>{props.user.user.username}</h3>
              <IconButton
                className="editButton"
                style={{ marginTop: 50 }}
                onClick={handleClick}
              >
                <p>Edit Username</p>
                <EditIcon />
              </IconButton>
            </>
          )}
        </div>
        <div id="gittempinfo">
        {props.user.repos ? <CardCarousel items={props.user.repos} /> : <div className = "noRepos">Sign in with Github to see your Repos!</div> }
          <div id="boilerList">
            <h1>Recent Created Boiler Plates</h1>
            <code>{`${iframe}`}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    repos: (repoURL) => dispatch(getRepos(repoURL)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
